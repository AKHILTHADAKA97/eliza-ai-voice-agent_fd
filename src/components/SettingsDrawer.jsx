import { useEffect, useState } from "react";
import { X, SlidersHorizontal, AudioLines, Palette, Cpu, Play, Sparkles, Phone, UserCheck } from "lucide-react";

const SOLID_THEMES = [
  { id: "green", name: "Green", color: "#78f6a8" },
  { id: "amber", name: "Amber", color: "#ffc16b" },
  { id: "cyan", name: "Cyan", color: "#7cecff" },
  { id: "violet", name: "Violet", color: "#c084fc" },
  { id: "crimson", name: "Crimson", color: "#ff6b6b" },
  { id: "solar", name: "Solar", color: "#fde047" },
  { id: "emerald", name: "Emerald", color: "#34d399" },
  { id: "pink", name: "Pink", color: "#f472b6" },
  { id: "cobalt", name: "Cobalt", color: "#60a5fa" },
  { id: "orange", name: "Orange", color: "#fb923c" },
  { id: "mint", name: "Mint", color: "#6ee7b7" },
  { id: "rose", name: "Rose", color: "#fb7185" },
  { id: "ice", name: "Ice", color: "#a5f3fc" },
  { id: "lime", name: "Lime", color: "#a3e635" },
  { id: "teal", name: "Teal", color: "#2dd4bf" },
];

const GRADIENT_THEMES = [
  { id: "aurora", name: "Aurora", grad: "linear-gradient(135deg, #34d399, #7cecff, #c084fc)" },
  { id: "cyberpunk", name: "Cyberpunk", grad: "linear-gradient(135deg, #f472b6, #fb923c, #fde047)" },
  { id: "nebula", name: "Nebula", grad: "linear-gradient(135deg, #c084fc, #818cf8, #60a5fa)" },
  { id: "sunset", name: "Sunset", grad: "linear-gradient(135deg, #ff6b6b, #fb923c, #fde047)" },
  { id: "toxic", name: "Toxic", grad: "linear-gradient(135deg, #a3e635, #2dd4bf, #7cecff)" },
];

export default function SettingsDrawer({ open, onClose, providers, settings, onChange }) {
  const configured = providers.filter((p) => p.available);
  const currentProviderObj = settings.default_provider === "auto"
    ? configured[0]
    : providers.find((p) => p.id === settings.default_provider);
  const availableModels = currentProviderObj?.models || [];
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    if (!("speechSynthesis" in window)) return;
    const refresh = () => setVoices(window.speechSynthesis.getVoices());
    refresh();
    window.speechSynthesis.addEventListener?.("voiceschanged", refresh);
    return () => window.speechSynthesis.removeEventListener?.("voiceschanged", refresh);
  }, []);

  const testVoice = () => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const profileMap = {
      natural: [1, 1],
      warm: [0.94, 1.06],
      energetic: [1.08, 1.08],
      calm: [0.88, 0.92],
      narrator: [0.92, 0.96],
      professional: [0.98, 1],
    };
    const [rate, pitch] = profileMap[settings.voice_profile || "natural"] || profileMap.natural;
    const utterance = new SpeechSynthesisUtterance("Hello! I am ELIZA AI, your voice assistant. Ready whenever you are.");
    utterance.rate = Math.max(0.5, Math.min(2, Number(settings.speech_rate || 1) * rate));
    utterance.pitch = pitch;
    const voice = voices.find((v) => v.name === settings.voice_name);
    if (voice) utterance.voice = voice;
    window.speechSynthesis.speak(utterance);
  };

  const handleProviderChange = (newProvider) => {
    const targetProv = newProvider === "auto"
      ? configured[0]
      : providers.find((p) => p.id === newProvider);
    onChange({
      default_provider: newProvider,
      default_model: targetProv?.default_model || "",
    });
  };

  const activeProviderName = currentProviderObj?.name || (settings.default_provider === "auto" ? "Automatic Routing" : settings.default_provider);
  const activeModelName = settings.default_model || currentProviderObj?.default_model || "None configured";

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
                {p.name}{p.available ? ` (${p.default_model || "Connected"})` : " — not configured"}
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

          <div className="provider-list">
            {providers.map((p) => (
              <div className="provider-row" key={p.id}>
                <span className={`status-dot ${p.available ? "online" : ""}`} />
                <span>{p.name}</span>
                <small>{p.available ? p.default_model || "Connected" : "Not configured"}</small>
              </div>
            ))}
          </div>
        </section>

        {/* VOICE CONFIGURATION */}
        <section className="settings-section">
          <div className="section-heading">
            <AudioLines size={16} />
            <h3>Voice Output</h3>
          </div>
          <label className="toggle-row">
            <span>
              <b>Speak responses</b>
              <small>Read the assistant's answer aloud with speech synthesis</small>
            </span>
            <input
              type="checkbox"
              checked={settings.auto_speak !== false}
              onChange={(e) => onChange({ auto_speak: e.target.checked })}
            />
          </label>

          <label className="field-label" htmlFor="voice-profile">Voice profile</label>
          <select
            id="voice-profile"
            value={settings.voice_profile || "natural"}
            onChange={(e) => onChange({ voice_profile: e.target.value })}
          >
            <option value="natural">Natural · balanced everyday voice</option>
            <option value="warm">Warm · friendly and welcoming</option>
            <option value="energetic">Energetic · lively and upbeat</option>
            <option value="calm">Calm · slower and soothing</option>
            <option value="narrator">Narrator · measured storytelling</option>
            <option value="professional">Professional · clear and composed</option>
          </select>

          <label className="field-label" htmlFor="voice">Specific browser voice (optional)</label>
          <select
            id="voice"
            value={settings.voice_name || ""}
            onChange={(e) => onChange({ voice_name: e.target.value })}
          >
            <option value="">Auto-select based on profile</option>
            {voices.map((v) => (
              <option key={`${v.name}-${v.lang}`} value={v.name}>
                {v.name} ({v.lang}){v.default ? " · default" : ""}
              </option>
            ))}
          </select>

          <button className="text-action" type="button" onClick={testVoice} style={{ marginTop: "8px" }}>
            <Play size={13} /> Test selected voice profile
          </button>

          <label className="field-label" htmlFor="rate" style={{ marginTop: "14px" }}>
            Speech speed: {Number(settings.speech_rate || 1).toFixed(1)}×
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

        {/* APPEARANCE (15 SOLIDS + 5 GRADIENTS) */}
        <section className="settings-section">
          <div className="section-heading">
            <Palette size={16} />
            <h3>Appearance & Themes</h3>
          </div>

          <div className="theme-category-label">15 Solid Colors</div>
          <div className="theme-swatches-grid">
            {SOLID_THEMES.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`theme-swatch ${settings.theme === t.id ? "active" : ""}`}
                onClick={() => onChange({ theme: t.id })}
                title={t.name}
              >
                <span className="swatch-color-pill" style={{ backgroundColor: t.color }} />
                <span className="swatch-name">{t.name}</span>
              </button>
            ))}
          </div>

          <div className="theme-category-label">5 Gradient Mixed Themes</div>
          <div className="theme-swatches-grid" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
            {GRADIENT_THEMES.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`theme-swatch ${settings.theme === t.id ? "active" : ""}`}
                onClick={() => onChange({ theme: t.id })}
                title={t.name}
              >
                <span className="swatch-color-pill" style={{ background: t.grad }} />
                <span className="swatch-name">{t.name}</span>
              </button>
            ))}
          </div>
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
          <span>Settings save automatically for this running session.</span>
        </footer>
      </aside>
    </div>
  );
}
