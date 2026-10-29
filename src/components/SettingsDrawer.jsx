import { useEffect, useState } from "react";
import {
  X,
  SlidersHorizontal,
  AudioLines,
  Palette,
  Cpu,
  Play,
  Sparkles,
  Phone,
  UserCheck,
  Volume2,
  Square,
  Globe,
  Mic,
  Check,
  Shuffle,
} from "lucide-react";
import {
  VOICE_PROFILES,
  INDIAN_LANGUAGES,
  ALL_SUPPORTED_LANGUAGES,
  speakAssistantResponse,
  stopAllSpeech,
} from "../services/voiceLibrary.js";
import {
  SOLID_THEMES,
  GRADIENT_THEMES,
  ALL_THEMES,
  saveUserSelectedTheme,
} from "../services/themeLibrary.js";

export default function SettingsDrawer({ open, onClose, providers, settings, onChange }) {
  const configured = providers.filter((p) => p.available);
  const currentProviderObj =
    settings.default_provider === "auto"
      ? configured[0]
      : providers.find((p) => p.id === settings.default_provider);
  const availableModels = currentProviderObj?.models || [];
  const [voices, setVoices] = useState([]);
  const [playingProfileId, setPlayingProfileId] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const refresh = () => setVoices(window.speechSynthesis.getVoices());
    refresh();
    window.speechSynthesis.addEventListener?.("voiceschanged", refresh);
    return () => window.speechSynthesis.removeEventListener?.("voiceschanged", refresh);
  }, []);

  const handlePreviewVoice = (profileId, e) => {
    if (e && e.stopPropagation) e.stopPropagation();

    if (playingProfileId === profileId) {
      stopAllSpeech();
      setPlayingProfileId(null);
      return;
    }

    stopAllSpeech();
    const prof = VOICE_PROFILES[profileId] || VOICE_PROFILES.eliza;
    setPlayingProfileId(profileId);

    speakAssistantResponse(
      prof.sample,
      {
        ...settings,
        voice_profile: prof.id,
      },
      {
        onEnd: () => setPlayingProfileId(null),
        onError: () => setPlayingProfileId(null),
      }
    );
  };

  const testCurrentSettings = () => {
    const currentProf = settings.voice_profile || "eliza";
    handlePreviewVoice(currentProf);
  };

  const handleProviderChange = (newProvider) => {
    const targetProv =
      newProvider === "auto"
        ? configured[0]
        : providers.find((p) => p.id === newProvider);
    onChange({
      default_provider: newProvider,
      default_model: targetProv?.default_model || "",
    });
  };

  const handleThemeSelect = (themeId) => {
    saveUserSelectedTheme(themeId);
    onChange({ theme: themeId });
  };

  const handleRandomizeTheme = () => {
    const randomTheme = ALL_THEMES[Math.floor(Math.random() * ALL_THEMES.length)];
    handleThemeSelect(randomTheme.id);
  };

  const activeProviderName =
    currentProviderObj?.name ||
    (settings.default_provider === "auto" ? "Automatic Routing" : settings.default_provider);
  const activeModelName =
    settings.default_model || currentProviderObj?.default_model || "None configured";

  if (!open) return null;

  return (
    <div className="drawer-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <aside className="settings-drawer" role="dialog" aria-label="Settings">
        <header className="drawer-header">
          <div>
            <div className="eyebrow">SYSTEM CONFIGURATION</div>
            <h2>Settings</h2>
          </div>
          <button className="icon-button" onClick={onClose} aria-label="Close settings">
            <X size={18} />
          </button>
        </header>

        {/* AI MODEL CONFIGURATION */}
        <section className="settings-section">
          <div className="section-heading">
            <Cpu size={16} />
            <h3>AI Model</h3>
          </div>
          <div className="active-model-card">
            <span className="card-title">Connected Backend AI Model</span>
            <span className="card-value">
              <span className={`status-dot ${configured.length ? "online" : ""}`} />
              <b>{activeModelName}</b>
              <small style={{ color: "#7a9582", marginLeft: "auto", fontSize: "10px" }}>
                via {activeProviderName}
              </small>
            </span>
          </div>

          <label className="field-label" htmlFor="provider">Provider</label>
          <select
            id="provider"
            value={settings.default_provider || "auto"}
            onChange={(e) => handleProviderChange(e.target.value)}
          >
            <option value="auto">Automatic routing (prioritizes active credentials)</option>
            {providers.map((p) => (
              <option key={p.id} value={p.id} disabled={!p.available}>
                {p.name}
                {p.available ? ` (${p.default_model || "Connected"})` : " — not configured"}
              </option>
            ))}
          </select>

          <label className="field-label" htmlFor="model-select">
            Model Selection {availableModels.length > 0 ? `(${availableModels.length} models available)` : ""}
          </label>
          {availableModels.length > 0 ? (
            <select
              id="model-select"
              value={settings.default_model || currentProviderObj?.default_model || availableModels[0] || ""}
              onChange={(e) => onChange({ default_model: e.target.value })}
            >
              {availableModels.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          ) : (
            <input
              id="model"
              value={settings.default_model || ""}
              onChange={(e) => onChange({ default_model: e.target.value })}
              placeholder={currentProviderObj?.default_model || configured[0]?.default_model || "Model identifier"}
            />
          )}
          <p className="field-help">
            Backend is connected to active providers. Keys and credentials are securely managed on the server.
          </p>
        </section>

        {/* COMPREHENSIVE VOICE LIBRARY & SYNTHESIS */}
        <section className="settings-section">
          <div className="section-heading">
            <AudioLines size={16} />
            <h3>Voice Library & Synthesis</h3>
          </div>

          <label className="toggle-row">
            <span>
              <b>Speak responses</b>
              <small>Read the assistant's answer aloud with natural speech</small>
            </span>
            <input
              type="checkbox"
              checked={settings.auto_speak !== false}
              onChange={(e) => onChange({ auto_speak: e.target.checked })}
            />
          </label>

          {/* Voice Engine Mode */}
          <label className="field-label" htmlFor="voice-engine">
            Voice Synthesis Engine
          </label>
          <select
            id="voice-engine"
            value={settings.voice_engine || "auto"}
            onChange={(e) => onChange({ voice_engine: e.target.value })}
          >
            <option value="auto">ElevenLabs Neural Voice + Device Fallback (Recommended)</option>
            <option value="elevenlabs">ElevenLabs Neural Voice Only</option>
            <option value="browser">Device Web Speech API Only</option>
          </select>
          <p className="field-help">
            ElevenLabs provides natural, studio-quality AI voices. If unavailable or offline, the app automatically falls back to your device's browser speech engine.
          </p>

          {/* Voice Personality Profiles */}
          <label className="field-label" style={{ marginTop: "14px" }}>
            Assistant Voice Profile ({Object.keys(VOICE_PROFILES).length} curated personas)
          </label>
          <div className="voice-profiles-grid">
            {Object.values(VOICE_PROFILES).map((prof) => {
              const isSelected = (settings.voice_profile || "eliza").toLowerCase() === prof.id;
              const isPlaying = playingProfileId === prof.id;

              return (
                <div
                  key={prof.id}
                  className={`voice-profile-card ${isSelected ? "active" : ""}`}
                  onClick={() => onChange({ voice_profile: prof.id })}
                >
                  <div className="voice-card-header">
                    <div className="voice-card-title">
                      {isSelected ? <Check size={14} color="var(--accent)" /> : <Volume2 size={14} />}
                      <span>{prof.name}</span>
                      <small style={{ color: "#748a7b", fontSize: "10px" }}>· {prof.gender}</small>
                    </div>
                    {prof.badge && <span className="voice-card-badge">{prof.badge}</span>}
                  </div>

                  <div className="voice-card-meta">
                    <span>{prof.accent}</span>
                    <span>•</span>
                    <span>{prof.role}</span>
                  </div>

                  <p className="voice-card-desc">{prof.description}</p>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "6px" }}>
                    <small style={{ fontSize: "9px", color: "#5a7563" }}>
                      Search: {prof.search}
                    </small>
                    <button
                      type="button"
                      className={`voice-preview-btn ${isPlaying ? "playing" : ""}`}
                      onClick={(e) => handlePreviewVoice(prof.id, e)}
                      title={`Preview ${prof.name}'s voice`}
                    >
                      {isPlaying ? <Square size={11} /> : <Play size={11} />}
                      <span>{isPlaying ? "Stop" : "Preview"}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Spoken Output Language */}
          <label className="field-label" htmlFor="voice-lang" style={{ marginTop: "12px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Globe size={13} /> Spoken Voice Language ({INDIAN_LANGUAGES.length} Indian languages supported)
            </span>
          </label>
          <select
            id="voice-lang"
            value={settings.voice_lang || "en-IN"}
            onChange={(e) => onChange({ voice_lang: e.target.value })}
          >
            <optgroup label="Recommended Defaults & International">
              <option value="en-IN">English (India) · en-IN (Recommended Default)</option>
              <option value="hi-IN">Hindi (हिन्दी) · hi-IN</option>
              <option value="en-US">English (United States) · en-US</option>
              <option value="en-GB">English (United Kingdom) · en-GB</option>
            </optgroup>
            <optgroup label="Major Indian Languages (ElevenLabs & Multilingual)">
              {INDIAN_LANGUAGES.filter((l) => l.code !== "en-IN" && l.code !== "hi-IN").map((l) => (
                <option key={l.code} value={l.code}>
                  {l.name} ({l.native}) · {l.code}
                </option>
              ))}
            </optgroup>
          </select>

          {/* Independent Speech Recognition Language (Microphone STT) */}
          <label className="field-label" htmlFor="speech-recognition-lang" style={{ marginTop: "14px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Mic size={13} color="var(--accent)" /> Microphone Recognition Language (STT)
            </span>
          </label>
          <select
            id="speech-recognition-lang"
            value={settings.speech_recognition_lang || "en-IN"}
            onChange={(e) => onChange({ speech_recognition_lang: e.target.value })}
          >
            <optgroup label="Standard Microphones">
              <option value="en-IN">English (India) · en-IN</option>
              <option value="hi-IN">Hindi (हिन्दी) · hi-IN</option>
              <option value="en-US">English (US) · en-US</option>
              <option value="en-GB">English (UK) · en-GB</option>
            </optgroup>
            <optgroup label="All Indian Languages">
              {INDIAN_LANGUAGES.filter((l) => l.code !== "en-IN" && l.code !== "hi-IN").map((l) => (
                <option key={l.code} value={l.code}>
                  {l.name} ({l.native}) · {l.code}
                </option>
              ))}
            </optgroup>
          </select>
          <p className="field-help">
            Microphone speech recognition and assistant voice output are configured independently. Selecting an Indian language or English for speech recognition lets you speak in your preferred tongue.
          </p>

          {/* Specific Device Browser Voice Fallback */}
          <label className="field-label" htmlFor="voice" style={{ marginTop: "14px" }}>
            Device Browser Voice Fallback (optional override)
          </label>
          <select
            id="voice"
            value={settings.voice_name || ""}
            onChange={(e) => onChange({ voice_name: e.target.value })}
          >
            <option value="">Auto-match installed voice based on profile</option>
            {voices.map((v) => (
              <option key={`${v.name}-${v.lang}`} value={v.name}>
                {v.name} [{v.lang}] {v.default ? " · device default" : ""}
              </option>
            ))}
          </select>

          {/* Speech Rate & Pitch sliders */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "12px" }}>
            <div>
              <label className="field-label" htmlFor="rate">
                Speed: {Number(settings.speech_rate || 1).toFixed(1)}×
              </label>
              <input
                id="rate"
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={settings.speech_rate || 1}
                onChange={(e) => onChange({ speech_rate: Number(e.target.value) })}
              />
            </div>
            <div>
              <label className="field-label" htmlFor="pitch">
                Pitch: {Number(settings.speech_pitch || 1).toFixed(1)}×
              </label>
              <input
                id="pitch"
                type="range"
                min="0.7"
                max="1.3"
                step="0.05"
                value={settings.speech_pitch || 1}
                onChange={(e) => onChange({ speech_pitch: Number(e.target.value) })}
              />
            </div>
          </div>

          <button className="text-action" type="button" onClick={testCurrentSettings} style={{ marginTop: "10px" }}>
            <Play size={13} /> Test Selected Voice & Speed
          </button>
        </section>

        {/* ANSWER QUALITY & PERSONA */}
        <section className="settings-section">
          <div className="section-heading">
            <Sparkles size={16} />
            <h3>Answer Quality & Persona</h3>
          </div>
          <label className="field-label" htmlFor="response-style">Response Persona / Profile</label>
          <select
            id="response-style"
            value={settings.response_style || "balanced"}
            onChange={(e) => onChange({ response_style: e.target.value })}
          >
            <option value="balanced">Balanced · Clear, natural & well-structured (Recommended)</option>
            <option value="concise">Concise · Direct answer with key takeaways</option>
            <option value="tutor">Patient Tutor · Step-by-step breakdown & analogies</option>
            <option value="expert">Senior Expert · Technical precision & trade-offs</option>
            <option value="coding">Software Engineer · Production code, tests & edge cases</option>
            <option value="creative">Creative · Imaginative, original & expressive</option>
          </select>

          <label className="toggle-row">
            <span>
              <b>Detailed answers</b>
              <small>Include comprehensive examples, edge cases, and summaries</small>
            </span>
            <input
              type="checkbox"
              checked={settings.detailed_responses === true}
              onChange={(e) => onChange({ detailed_responses: e.target.checked })}
            />
          </label>

          <label className="field-label" htmlFor="custom-prompt">Additional instructions (optional)</label>
          <textarea
            id="custom-prompt"
            rows={4}
            maxLength={4000}
            value={settings.custom_system_prompt || ""}
            onChange={(e) => onChange({ custom_system_prompt: e.target.value })}
            placeholder="Example: Explain technical concepts in simple English, include practical code examples, and outline clear next steps."
          />
          <p className="field-help">
            These instructions are sent with each chat request. Keep them focused on your preferred style and task; do not put API keys or private credentials here.
          </p>
        </section>

        {/* APPEARANCE (15 SOLIDS + 36 GRADIENTS) */}
        <section className="settings-section">
          <div className="section-heading" style={{ justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
              <Palette size={16} />
              <h3>Appearance & Themes</h3>
            </div>
            <button
              type="button"
              className="text-action"
              onClick={handleRandomizeTheme}
              style={{ fontSize: "10px", padding: "3px 7px" }}
              title="Pick a random theme"
            >
              <Shuffle size={11} /> Random Theme
            </button>
          </div>

          <div className="theme-category-label">
            36 Gradient Mixed Themes (Dynamic Atmospheric Glow)
          </div>
          <div className="theme-swatches-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", maxHeight: "240px", overflowY: "auto", paddingRight: "4px" }}>
            {GRADIENT_THEMES.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`theme-swatch ${settings.theme === t.id ? "active" : ""}`}
                onClick={() => handleThemeSelect(t.id)}
                title={`${t.name}: ${t.desc}`}
              >
                <span className="swatch-color-pill" style={{ background: t.grad }} />
                <span className="swatch-name">{t.name}</span>
              </button>
            ))}
          </div>

          <div className="theme-category-label" style={{ marginTop: "14px" }}>
            15 Solid Minimalist Colors
          </div>
          <div className="theme-swatches-grid" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
            {SOLID_THEMES.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`theme-swatch ${settings.theme === t.id ? "active" : ""}`}
                onClick={() => handleThemeSelect(t.id)}
                title={`${t.name}: ${t.desc}`}
              >
                <span className="swatch-color-pill" style={{ backgroundColor: t.color }} />
                <span className="swatch-name">{t.name}</span>
              </button>
            ))}
          </div>
          <p className="field-help">
            Every new visitor is assigned a unique random theme color. When you pick your favorite theme, it stays locked until you choose to change it again.
          </p>
        </section>

        {/* DEVELOPER CREDIT CARD */}
        <div className="dev-credit-card">
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <UserCheck size={12} color="var(--accent)" />
            <span>Developed by <strong>Akhil Thadaka</strong></span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "2px" }}>
            <Phone size={12} color="var(--accent)" />
            <span>Contact: <a href="tel:9121751697">9121751697</a></span>
          </div>
        </div>

        <footer className="drawer-footer">
          <SlidersHorizontal size={14} />
          <span>Settings save automatically for your session.</span>
        </footer>
      </aside>
    </div>
  );
}
