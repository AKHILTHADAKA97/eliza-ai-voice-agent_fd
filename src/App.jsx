import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Activity, AudioLines, Check, ChevronDown, Copy, History, Menu, Mic, MicOff, Plus, Send, Settings2, Sparkles, Square, UserCheck, Volume2, VolumeX, X } from "lucide-react";
import { api } from "./services/api.js";
import Orb from "./components/Orb.jsx";
import SettingsDrawer from "./components/SettingsDrawer.jsx";
import MarkdownRenderer from "./components/MarkdownRenderer.jsx";
import { correctGrammar, autoCorrectOnDelimiter } from "./services/grammar.js";

const initialSettings = {
  default_provider: "auto",
  default_model: "",
  auto_speak: true,
  voice_name: "",
  voice_profile: "natural",
  speech_rate: 1,
  response_style: "balanced",
  custom_system_prompt: "",
  detailed_responses: false,
  theme: "green",
};

const VOICE_PROFILES = {
    natural: { rate: 1, pitch: 1, keywords: ["natural", "google", "microsoft", "aria", "samantha"] },
    warm: { rate: 0.94, pitch: 1.06, keywords: ["warm", "jenny", "samantha", "aria", "female"] },
    energetic: { rate: 1.08, pitch: 1.08, keywords: ["energetic", "guy", "ava", "emma"] },
    calm: { rate: 0.88, pitch: 0.92, keywords: ["calm", "soft", "serena", "david"] },
    narrator: { rate: 0.92, pitch: 0.96, keywords: ["narrator", "daniel", "george", "alex"] },
    professional: { rate: 0.98, pitch: 1, keywords: ["professional", "aria", "jenny", "david", "google"] },
    female: { rate: 0.95, pitch: 1.12, keywords: ["female", "woman", "samantha", "aria", "jenny", "victoria", "zira", "hazel", "kate", "catherine"] },
    male: { rate: 0.95, pitch: 0.88, keywords: ["male", "man", "david", "daniel", "george", "fred", "brian", "thomas", "mike"] },
  };

const RESPONSE_PROMPTS = {
  balanced: "Deliver a clear, well-structured, insightful response. Lead with the direct answer or main takeaway, follow with step-by-step reasoning or context, and conclude with practical next steps. Use headings, lists, or tables where they improve readability.",
  concise: "Provide the most useful answer in the fewest words possible. Lead with the core conclusion, use compact bullet points where helpful, and omit filler while preserving essential caveats and accuracy.",
  tutor: "Act as an exceptional, patient tutor. Explain complex concepts step by step in plain language, define technical terminology clearly, provide an intuitive analogy or concrete real-world example, and finish with a brief check-for-understanding recap.",
  expert: "Respond as a senior subject-matter expert. Provide technical rigor, state assumptions and trade-offs explicitly, discuss architectural and edge-case implications, and give production-grade depth without unnecessary filler.",
  coding: "Act as a principal software engineer. Provide correct, secure, and production-ready code. Use fenced code blocks with appropriate language identifiers. Include clear explanation of edge cases, dependencies, tests, and error handling. Do not invent non-existent APIs.",
  creative: "Be imaginative, engaging, and articulate while remaining coherent and insightful. Explore multiple perspectives or structured creative options and explain why the best idea stands out.",
};

function cleanContent(text) {
  if (!text) return "";
  return text.replace(/<\/?(?:user_input|user_message|assistant|system)[^>]*>/gi, "").trim();
}
/**
 * Strips emojis, pictographic symbols, flags, skin tone modifiers,
 * zero-width joiners, and emoji variation selectors from text.
 * Preserves all normal words, punctuation, numbers, and sentence structure.
 */
export function stripEmojis(text) {
  if (!text) return "";
  return text
    // Remove flag sequences (pairs of regional indicators)
    .replace(/\p{Regional_Indicator}{2}/gu, "")
    // Remove tag sequences (e.g. subdivision flags \u{1F3F4} ... \u{E007F})
    .replace(/[\u{1F3F4}][\u{E0020}-\u{E007E}]+\u{E007F}/gu, "")
    // Remove keycap combining marks (#️⃣, *️⃣, 0️⃣-9️⃣)
    .replace(/[\uFE0E\uFE0F]?\u20E3/gu, "")
    // Remove pictographic / emoji sequences (including ZWJ joiners, skin tones, variation selectors)
    .replace(/(?:\p{Extended_Pictographic}|\p{Emoji_Presentation}|\p{Emoji_Modifier_Base})(?:[\uFE0E\uFE0F]|\p{Emoji_Modifier})*(?:\u200D(?:\p{Extended_Pictographic}|\p{Emoji_Presentation}|\p{Emoji_Modifier_Base}|\p{Emoji_Component})(?:[\uFE0E\uFE0F]|\p{Emoji_Modifier})*)*/gu, "")
    // Remove standalone emoji modifiers, variation selectors, zero-width joiners / non-joiners
    .replace(/[\p{Emoji_Modifier}\uFE0E\uFE0F\u200D\u200C]/gu, "")
    // Clean up spaces left before punctuation marks
    .replace(/\s+([.,!?;:])/g, "$1")
    // Collapse multiple whitespace characters into a single space
    .replace(/\s+/g, " ")
    .trim();
}

function prepareSpeechText(text) {
  if (!text) return "";
  let clean = cleanContent(text);
  // Remove fenced code blocks from spoken text
  clean = clean.replace(/```[\s\S]*?```/g, " [code snippet omitted] ");
  // Remove inline code ticks
  clean = clean.replace(/`([^`]+)`/g, "$1");
  // Remove markdown links & images: ![alt](url) -> "" and [text](url) -> "text"
  clean = clean.replace(/!\[([^\]]*)\]\([^)]+\)/g, "");
  clean = clean.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  // Remove markdown headers
  clean = clean.replace(/^#{1,6}\s+/gm, "");
  // Remove blockquotes >
  clean = clean.replace(/^\s*>\s+/gm, "");
  // Remove bold & italic markdown markers
  clean = clean.replace(/(\*\*|__)(.*?)\1/g, "$2");
  clean = clean.replace(/(\*|_)(.*?)\1/g, "$2");
  // Remove horizontal rules
  clean = clean.replace(/^[ \t]*[-*_]{3,}[ \t]*$/gm, "");
  // Remove table pipes
  clean = clean.replace(/\|/g, " ");
  // Sanitize text to remove emojis and pictographic symbols
  clean = stripEmojis(clean);
  // Clean extra whitespace
  clean = clean.replace(/\s+/g, " ").trim();
  return clean;
}

function buildSystemPrompt(settings) {
  const coreInstruction = [
    "You are ELIZA AI, a helpful, accurate, and conversational AI assistant. Answer the user's actual question directly.",
    "IDENTITY RULES:",
    "- Your name is strictly 'ELIZA AI' (or 'Eliza AI'). If asked who you are or what your name is, state: 'I am ELIZA AI, your advanced conversational AI assistant.'",
    "- Never state you do not have an identity or name.",
    "",
    "FORMATTING & RESPONSE RULES:",
    "- Produce clean, well-structured Markdown that can be rendered directly by the frontend.",
    "- Adapt the structure and length to the question: simple questions deserve concise answers (1-3 sentences, no unnecessary headings); complex questions deserve detailed, organized explanations.",
    "- Headings: Use '# Title' or '## Section' only when appropriate. Never generate repetitive headings.",
    "- Paragraphs: One main idea per short paragraph with blank lines between them. Explain technical terms in simple English.",
    "- Lists: Use bullet points for features, items, and collections. Use numbered lists for sequential steps and workflows.",
    "- Bold formatting: Use bold for important terms, definitions, and key takeaways. Do not bold entire paragraphs.",
    "- Code: Use inline `code` for identifiers. Always use fenced code blocks with language identifiers (e.g., ```python) for code examples, with correct indentation.",
    "- Tables: Use Markdown tables (| Col 1 | Col 2 |) when comparing items or displaying structured tabular data.",
    "- Troubleshooting: Clearly state the problem, cause, solution, and verification steps.",
    "- Avoid filler, repetition, excessive bolding, and generic disclaimers. Maintain conversation context across follow-ups.",
  ].join("\n");

  const depth = settings.detailed_responses
    ? "Provide thorough, comprehensive answers with practical examples, edge cases, and actionable next steps."
    : "Keep the response appropriately sized and focused on the core request without unnecessary filler.";

  return [
    coreInstruction,
    RESPONSE_PROMPTS[settings.response_style] || RESPONSE_PROMPTS.balanced,
    depth,
    settings.custom_system_prompt?.trim(),
  ].filter(Boolean).join("\n\n");
}

function speak(text, settings, onStart, onEnd) {
  if (!("speechSynthesis" in window)) return false;
  window.speechSynthesis.cancel();
  const spokenText = prepareSpeechText(text);
  if (!spokenText || !spokenText.trim()) return false;
  const utterance = new SpeechSynthesisUtterance(spokenText);
  const profile = VOICE_PROFILES[settings.voice_profile] || VOICE_PROFILES.natural;
  utterance.rate = Math.max(0.5, Math.min(2, Number(settings.speech_rate || 1) * profile.rate));
  utterance.pitch = profile.pitch;
  const voices = window.speechSynthesis.getVoices();
  const explicitVoice = voices.find((v) => v.name === settings.voice_name);
  const preferredVoice = voices.find((v) => profile.keywords.some((word) => v.name.toLowerCase().includes(word)));
  if (explicitVoice) utterance.voice = explicitVoice;
  else if (preferredVoice) utterance.voice = preferredVoice;
  utterance.onstart = onStart;
  utterance.onend = onEnd;
  utterance.onerror = onEnd;
  window.speechSynthesis.speak(utterance);
  return true;
}

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("idle");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [providers, setProviders] = useState([]);
  const [settings, setSettings] = useState(initialSettings);
  const [conversationId, setConversationId] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [error, setError] = useState("");
  const [apiOnline, setApiOnline] = useState(false);
  const [listening, setListening] = useState(false);
  const [muted, setMuted] = useState(false);
  const [autoGrammar, setAutoGrammar] = useState(true);
  const [grammarFixedNotice, setGrammarFixedNotice] = useState(false);
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const transcriptRef = useRef(null);
  const recognitionRef = useRef(null);
  const abortRef = useRef(null);

  const providerLabel = useMemo(() => {
    const activeModel = settings.default_model?.trim();
    if (settings.default_provider === "auto") {
      const activeProv = providers.find((p) => p.available);
      const provName = activeProv?.name?.toUpperCase() || "AUTO";
      return activeModel ? `${provName} · ${activeModel.toUpperCase()}` : "AUTO ROUTING";
    }
    const current = providers.find((p) => p.id === settings.default_provider);
    const name = current?.name?.toUpperCase() || settings.default_provider?.toUpperCase() || "MANUAL";
    return activeModel ? `${name} · ${activeModel.toUpperCase()}` : name;
  }, [providers, settings.default_provider, settings.default_model]);

  const loadData = useCallback(async () => {
    try {
      const [health, providerData, savedSettings, savedConversations] = await Promise.all([
        api.health(),
        api.providers(),
        api.settings(),
        api.conversations(),
      ]);
      setApiOnline(health.status === "ok");
      setProviders(providerData.providers || []);
      setSettings((s) => ({ ...s, ...savedSettings }));
      setConversations(savedConversations.conversations || []);
      setError("");
    } catch {
      setApiOnline(false);
      const isLocal = typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
      setError(
        isLocal
          ? "Backend unavailable. Start FastAPI at http://127.0.0.1:8000 and refresh."
          : "Backend unavailable. Please verify that the backend on Render is active."
      );
    }
  }, []);

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 15000);
    return () => clearInterval(interval);
  }, [loadData]);

  useEffect(() => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
  }, [messages, status]);

  const stopSpeech = useCallback(() => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    if (status === "speaking") setStatus("idle");
  }, [status]);

  const startListening = useCallback(() => {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
      setError("Speech recognition is not supported in this browser.");
      return;
    }
    stopSpeech();
    const rec = new SpeechRec();
    rec.continuous = false;
    rec.interimResults = true;
    rec.lang = navigator.language || "en-US";
    rec.onstart = () => {
      setListening(true);
      setStatus("listening");
    };
    rec.onresult = (e) => {
      const transcript = Array.from(e.results)
        .map((r) => r[0].transcript)
        .join("");
      setInput(transcript);
    };
    rec.onerror = (e) => {
      setListening(false);
      setStatus("idle");
      if (e.error !== "no-speech") setError(`Microphone error: ${e.error}`);
    };
    rec.onend = () => {
      setListening(false);
      setStatus("idle");
    };
    recognitionRef.current = rec;
    rec.start();
  }, [stopSpeech]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setListening(false);
    setStatus("idle");
  }, []);

  const handleInputChange = (e) => {
    const val = e.target.value;
    if (autoGrammar) {
      const lastChar = val.slice(-1);
      if (/[\s.,?!]/.test(lastChar)) {
        const corrected = autoCorrectOnDelimiter(val);
        setInput(corrected);
        return;
      }
    }
    setInput(val);
  };

  const handleFixGrammar = () => {
    if (!input.trim()) return;
    const fixed = correctGrammar(input);
    setInput(fixed);
    setGrammarFixedNotice(true);
    setTimeout(() => setGrammarFixedNotice(false), 2000);
  };

  const sendMessage = async (overrideText) => {
    let text = (typeof overrideText === "string" ? overrideText : input).trim();
    if (!text || status === "thinking") return;
    if (autoGrammar) {
      text = correctGrammar(text);
    }
    setInput("");
    setError("");
    stopSpeech();

    const userMsg = {
      role: "user",
      content: text,
      created_at: new Date().toISOString(),
    };
    const nextHistory = [...messages, userMsg];
    setMessages(nextHistory);
    setStatus("thinking");

    try {
      const resp = await api.chat({
        message: text,
        provider: settings.default_provider || "auto",
        model: settings.default_model || undefined,
        routing_mode: settings.default_provider === "auto" ? "auto" : "manual",
        system_prompt: buildSystemPrompt(settings),
        conversation_id: conversationId,
        history: messages.slice(-10),
      });

      const assistantMsg = {
        role: "assistant",
        content: cleanContent(resp.answer),
        provider: resp.provider,
        model: resp.model,
        created_at: resp.created_at || new Date().toISOString(),
      };
      setMessages([...nextHistory, assistantMsg]);
      setConversationId(resp.conversation_id);
      setStatus("idle");

      if (settings.auto_speak && !muted) {
        speak(
          resp.answer,
          settings,
          () => setStatus("speaking"),
          () => setStatus("idle")
        );
      }
    } catch (err) {
      setStatus("idle");
      const errorMsg = {
        role: "assistant",
        content: err.message || "Failed to reach AI provider.",
        error: true,
        created_at: new Date().toISOString(),
      };
      setMessages([...nextHistory, errorMsg]);
      setError(err.message || "Request failed.");
    }
  };

  const newConversation = () => {
    stopSpeech();
    setMessages([]);
    setConversationId(null);
    setError("");
    setStatus("idle");
  };

  const loadConversation = async (id) => {
    try {
      stopSpeech();
      const data = await api.conversation(id);
      setMessages(data.messages || []);
      setConversationId(data.id);
      setHistoryOpen(false);
      setError("");
    } catch (err) {
      setError(err.message || "Failed to load conversation.");
    }
  };

  const deleteConversation = async (id, e) => {
    e.stopPropagation();
    try {
      await api.deleteConversation(id);
      setConversations((prev) => prev.filter((c) => c.id !== id));
      if (conversationId === id) newConversation();
    } catch (err) {
      setError(err.message || "Failed to delete conversation.");
    }
  };

  const changeSettings = async (patch) => {
    const next = { ...settings, ...patch };
    setSettings(next);
    try {
      await api.saveSettings(patch);
    } catch {
      // Keep optimistic state in UI
    }
  };

  const copyMessage = (text) => {
    navigator.clipboard.writeText(text);
  };

  const exportChat = () => {
    const text = messages
      .map((m) => `[${m.role.toUpperCase()}] ${m.created_at || ""}\n${m.content}\n`)
      .join("\n---\n\n");
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "eliza-conversation.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className={`app-shell theme-${settings.theme || "green"}`}>
      <div className="scanlines" aria-hidden="true" />
      <header className="topbar">
        <div className="brand-lockup">
          <div className="brand-mark"><Activity size={20} /></div>
          <div>
            <div className="brand-name">ELIZA<span>AI</span></div>
            <div className="brand-subtitle">CONVERSATIONAL INTELLIGENCE</div>
          </div>
        </div>
        <div className="top-status">
          <span className={`status-dot ${apiOnline ? "online" : ""}`} />
          {apiOnline ? "SYSTEM ONLINE" : "BACKEND OFFLINE"}
          <span className="status-divider" />
          {providerLabel}
        </div>
        {/* <div className="top-actions">
          <button
            className={`icon-button ${muted ? "selected" : ""}`}
            onClick={() => {
              setMuted((v) => !v);
              if (!muted) stopSpeech();
            }}
            aria-label={muted ? "Enable voice" : "Mute voice"}
            title={muted ? "Enable voice" : "Mute voice"}
          >
            {muted ? <VolumeX size={17} /> : <Volume2 size={17} />}
          </button>
          <button className="icon-button" onClick={() => setAccessibilityOpen(true)} aria-label="Accessibility" title="Accessibility">
            <UserCheck size={17} />
          </button>
          <button
            className="icon-button"
            onClick={() => setShowNavbar((v) => !v)}
            aria-label={showNavbar ? "Hide navbar" : "Show navbar"}
            title={showNavbar ? "Hide navbar" : "Show navbar"}
          >
            {showNavbar ? <Menu size={17} /> : <Menu size={17} />}
          </button>
        </div> */}
        <div className="top-actions">
  {/* New Conversation */}
  {/* <button
    className="icon-button"
    onClick={newConversation}
    title="New conversation"
    aria-label="New conversation"
  >
    <Plus size={17} /> 
  </button> */}
  <button
  className="icon-button"
  onClick={newConversation}
  title="New conversation"
  aria-label="New conversation"
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "5px",
    width: "auto",
    padding: "8px 8px",
    fontSize: "12px",
    whiteSpace: "nowrap",
  }}
>
  <Plus size={16} />
  <span>New Chat</span>
</button>

  {/* History */}
  <button
    className={`icon-button ${historyOpen ? "selected" : ""}`}
    onClick={() => setHistoryOpen((v) => !v)}
    title="History"
    aria-label="History"
  >
    <History size={17} />
  </button>

  {/* Stop Speech */}
  {/* <button
    className="icon-button"
    onClick={stopSpeech}
    title="Stop speech"
    aria-label="Stop speech"
  >
    <Square size={17} />
  </button> */}

  {/* Voice Input */}
  <button
    className="icon-button"
    onClick={startListening}
    title="Speak question"
    aria-label="Speak question"
  >
    <Mic size={17} />
  </button>

  {/* Export Chat */}
  {/* <button
    className="icon-button"
    onClick={exportChat}
    disabled={!messages.length}
    title="Export chat"
    aria-label="Export chat"
  >
    <ChevronDown size={17} />
  </button> */}



  {/* Mute / Enable Voice */}
  <button
    className={`icon-button ${muted ? "selected" : ""}`}
    onClick={() => {
      setMuted((v) => !v);

      if (!muted) {
        stopSpeech();
      }
    }}
    aria-label={muted ? "Enable voice" : "Mute voice"}
    title={muted ? "Enable voice" : "Mute voice"}
  >
    {muted ? <VolumeX size={17} /> : <Volume2 size={17} />}
  </button>

  {/* Accessibility */}
  {/* <button
    className="icon-button"
    onClick={() => setAccessibilityOpen(true)}
    aria-label="Accessibility"
    title="Accessibility"
  >
    <UserCheck size={17} />
  </button> */}

  {/* Settings */}
  <button
    className="icon-button"
    onClick={() => setSettingsOpen(true)}
    title="Settings"
    aria-label="Settings"
  >
    <Settings2 size={17} />
  </button>
</div>
      </header>


      {historyOpen && (
        <aside className="history-panel">
          <div className="history-head">
            <div>
              <div className="eyebrow">MEMORY BANK</div>
              <h3>Conversations</h3>
            </div>
            <button className="icon-button" onClick={() => setHistoryOpen(false)} aria-label="Close history">
              <X size={16} />
            </button>
          </div>
          {conversations.length === 0 ? (
            <p className="empty-history">No saved conversations yet.</p>
          ) : (
            conversations.map((c) => (
              <div
                className="history-item"
                key={c.id}
                role="button"
                tabIndex={0}
                onClick={() => loadConversation(c.id)}
                onKeyDown={(e) => e.key === "Enter" && loadConversation(c.id)}
              >
                <div className="history-item-copy">
                  <b>{c.title || "Untitled conversation"}</b>
                  <small>{c.messages?.length || 0} messages</small>
                </div>
                <button
                  className="tiny-icon"
                  onClick={(e) => deleteConversation(c.id, e)}
                  title="Delete conversation"
                  aria-label="Delete conversation"
                >
                  <X size={14} />
                </button>
              </div>
            ))
          )}
        </aside>
      )}

      <section className="hero-layout">
        <div className="system-meta">
          <span>FIG. 01</span>
          <span>NEURAL INTERFACE</span>
          <span>BUILD 2.0.0</span>
        </div>
        <div className="hero-center">
          <Orb status={status} />
          <div className="system-title">
            <span className="eyebrow">PERSONAL AI TERMINAL</span>
            <h1>How may I <em>help you?</em></h1>
            <p>Ask a question. Start a conversation. Explore an idea.</p>
          </div>
          <div className={`state-pill state-${status}`}>
            <span className="state-light" />
            {status === "idle"
              ? "AWAITING INPUT"
              : status === "thinking"
              ? "PROCESSING REQUEST"
              : status === "listening"
              ? "LISTENING TO YOU"
              : "SPEAKING RESPONSE"}
            <span className="state-pulse">
              {status === "thinking" ? "•••" : status === "speaking" ? <AudioLines size={14} /> : null}
            </span>
          </div>
        </div>
        <div className="system-meta bottom-meta">
          <span>VOICE I/O {"SpeechSynthesisUtterance" in window ? "AVAILABLE" : "LIMITED"}</span>
          <span>MODEL ROUTING: {providerLabel}</span>
          <span>LATENCY: LIVE</span>
        </div>
      </section>

      <section className="conversation-area">
        <div className="conversation-head">
          <div>
            <span className="eyebrow">LIVE TRANSMISSION</span>
            <span className="message-count">{messages.length ? `${messages.length} MESSAGES` : "NEW SESSION"}</span>
          </div>
          <div className="conversation-tools">
            <button className="text-action" onClick={exportChat} disabled={!messages.length}>
              Export <ChevronDown size={13} />
            </button>
            <button className="text-action" onClick={() => setMessages([])} disabled={!messages.length}>
              Clear
            </button>
          </div>
        </div>

        <div className="transcript" ref={transcriptRef}>
          {messages.length === 0 ? (
            <div className="welcome-line">
              <span className="prompt-symbol">›</span>
              <span>Terminal ready. Ask anything or click the microphone to speak.</span>
              <span className="cursor-block" />
            </div>
          ) : (
            messages.map((m, i) => (
              <article
                className={`message message-${m.role} ${m.error ? "message-error" : ""}`}
                key={`${m.created_at || "msg"}-${i}`}
              >
                <div className="message-avatar">
                  {m.role === "assistant" ? <Activity size={14} /> : "YOU"}
                </div>
                <div className="message-body">
                  <div className="message-meta">
                    {m.role === "assistant" ? "ELIZA AI" : "USER"}
                    <span>
                      {m.created_at
                        ? new Date(m.created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                        : "NOW"}
                    </span>
                    {m.model && (
                      <span className="model-chip">
                        {m.provider} / {m.model}
                      </span>
                    )}
                  </div>

                  {m.role === "assistant" && !m.error ? (
                    <MarkdownRenderer content={cleanContent(m.content)} />
                  ) : (
                    <p>{cleanContent(m.content)}</p>
                  )}

                  {m.role === "assistant" && !m.error && (
                    <div className="message-actions">
                      <button onClick={() => copyMessage(cleanContent(m.content))} title="Copy response">
                        <Copy size={13} /> Copy
                      </button>
                      <button
                        onClick={() =>
                          speak(
                            m.content,
                            settings,
                            () => setStatus("speaking"),
                            () => setStatus("idle")
                          )
                        }
                        title="Read response aloud"
                      >
                        <Volume2 size={13} /> Speak
                      </button>
                    </div>
                  )}
                </div>
              </article>
            ))
          )}
          {status === "thinking" && (
            <div className="thinking-line">
              <span className="thinking-dots">
                <i />
                <i />
                <i />
              </span>{" "}
              Synthesizing response...
            </div>
          )}
        </div>

        {error && (
          <div className="error-banner">
            <span>{error}</span>
            <button onClick={() => setError("")} aria-label="Dismiss error">
              <X size={14} />
            </button>
          </div>
        )}

        <form
          className="input-console"
          onSubmit={(e) => {
            e.preventDefault();
            const textToSend = autoGrammar ? correctGrammar(input) : input;
            sendMessage(textToSend);
          }}
        >
          <div className="input-prefix">›</div>
          <textarea
            rows="1"
            value={input}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                const textToSend = autoGrammar ? correctGrammar(input) : input;
                sendMessage(textToSend);
              }
            }}
            placeholder="Ask me anything, or speak to begin..."
            aria-label="Your question"
            spellCheck="true"
            autoCorrect="on"
            autoCapitalize="sentences"
            lang="en"
          />
          <div className="input-actions">
            {input.trim() && (
              <button
                type="button"
                className={`console-icon ${grammarFixedNotice ? "active" : ""}`}
                onClick={handleFixGrammar}
                title={grammarFixedNotice ? "Grammar corrected!" : "Fix grammar & spelling now"}
                aria-label="Fix grammar and spelling now"
              >
                <Sparkles size={16} />
              </button>
            )}
            {status === "speaking" && (
              <button
                type="button"
                className="console-icon"
                onClick={stopSpeech}
                title="Stop speaking"
                aria-label="Stop speaking"
              >
                <Square size={16} />
              </button>
            )}
            <button
              type="button"
              className={`console-icon ${listening ? "active" : ""}`}
              onClick={listening ? stopListening : startListening}
              title={listening ? "Stop listening" : "Speak your question"}
              aria-label={listening ? "Stop listening" : "Speak your question"}
            >
              {listening ? <MicOff size={17} /> : <Mic size={17} />}
            </button>
            <button
              type="submit"
              className="send-button"
              disabled={!input.trim() || status === "thinking"}
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </div>
        </form>

        <div className="console-foot">
          <span>
            <span className="tiny-led" /> ENCRYPTED LOCAL CONNECTION
          </span>
          <span>ENTER TO SEND <i>·</i> SHIFT + ENTER FOR NEW LINE</span>
          <span
            onClick={() => setAutoGrammar((v) => !v)}
            style={{ cursor: "pointer" }}
            title="Click to toggle auto-grammar correction"
          >
            AUTO-GRAMMAR {autoGrammar ? "ENABLED" : "OFF"}
          </span>
        </div>
      </section>

      <footer className="app-footer">
        <span>ELIZA AI <b>©</b> 2026</span>
        <span>BUILT FOR CURIOUS MINDS</span>
        <span>DEVELOPED BY AKHIL THADAKA</span>
      </footer>

      {accessibilityOpen && (
        <div className="accessibility-panel" role="dialog" aria-label="Accessibility">
          <div className="accessibility-head">
            <div>
              <div className="eyebrow">ACCESSIBILITY</div>
              <h3>Voice &amp; Interaction</h3>
            </div>
            <button className="icon-button" onClick={() => setAccessibilityOpen(false)} aria-label="Close">
              <X size={16} />
            </button>
          </div>
          <label className="toggle-row">
            <span>
              <b>Auto-grammar correction</b>
              <small>Fix spelling and grammar as you type</small>
            </span>
            <input
              type="checkbox"
              checked={autoGrammar}
              onChange={(e) => setAutoGrammar(e.target.checked)}
            />
          </label>
          <label className="toggle-row">
            <span>
              <b>Show navigation bar</b>
              <small>Toggle the quick-action navbar</small>
            </span>
            <input
              type="checkbox"
              checked={showNavbar}
              onChange={(e) => setShowNavbar(e.target.checked)}
            />
          </label>
          <label className="toggle-row">
            <span>
              <b>Mute voice output</b>
              <small>Disable text-to-speech</small>
            </span>
            <input
              type="checkbox"
              checked={muted}
              onChange={(e) => {
                setMuted(e.target.checked);
                if (!e.target.checked) stopSpeech();
              }}
            />
          </label>
          <div className="accessibility-actions">
            <button className="text-action" type="button" onClick={startListening}>
              <Mic size={14} /> Test microphone
            </button>
            <button className="text-action" type="button" onClick={() => speak("Hello, I am ELIZA AI.", settings, () => setStatus("speaking"), () => setStatus("idle"))}>
              <Volume2 size={14} /> Test voice
            </button>
          </div>
        </div>
      )}

      <SettingsDrawer
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        providers={providers}
        settings={settings}
        onChange={changeSettings}
      />
    </main>
  );
}
