/**
 * ELIZA AI Voice Library & Speech Engine
 * Features:
 * - 8 Curated ElevenLabs & neural voice profiles (ELIZA, ARJUN, NOVA, ALEX, KAVYA, VIKRAM, MARCUS, EMMA)
 * - 22 Major Indian languages + International English locales
 * - Dynamic browser Web Speech API voice matching and fallback
 * - Independent speech recognition (STT) and speech synthesis (TTS) configuration
 */

import { api } from "./api.js";

export const VOICE_PROFILES = {
  eliza: {
    id: "eliza",
    name: "ELIZA",
    gender: "Female",
    accent: "Indian English / Neutral",
    badge: "Recommended Default",
    role: "Female AI Assistant",
    description: "Warm, confident, and friendly for everyday questions & conversational AI.",
    lang: "en-IN",
    search: "Female, Conversational, Indian English",
    elevenlabs_voice_id: "21m00Tcm4TlvDq8ikWAM", // Rachel
    rate: 1.0,
    pitch: 1.05,
    sample: "Hello! I am ELIZA, your conversational AI assistant. How can I help you today?",
    browserKeywords: ["heera", "neerja", "veena", "aditi", "india", "en-in", "samantha", "google english (india)"],
  },
  arjun: {
    id: "arjun",
    name: "ARJUN",
    gender: "Male",
    accent: "Indian English",
    badge: "Secondary Default",
    role: "Male AI Assistant",
    description: "Calm, mature, and articulate for technical explanations and coding help.",
    lang: "en-IN",
    search: "Male, Conversational, Indian English",
    elevenlabs_voice_id: "pNInz6obpgDQGcFmaJgB", // Adam
    rate: 0.96,
    pitch: 0.94,
    sample: "Greetings! I am Arjun. I'm ready to assist you with deep technical analysis and code.",
    browserKeywords: ["ravi", "prabhat", "india", "en-in", "david", "daniel", "google english (india)"],
  },
  nova: {
    id: "nova",
    name: "NOVA",
    gender: "Female",
    accent: "General American",
    badge: "US Female",
    role: "American Female Assistant",
    description: "Clear, energetic, and natural for productivity and international users.",
    lang: "en-US",
    search: "Female, American, Conversational",
    elevenlabs_voice_id: "EXAVITQu4vr4xnSDxMaL", // Sarah
    rate: 1.02,
    pitch: 1.06,
    sample: "Hi there! I'm Nova. Let's get things done quickly and smoothly.",
    browserKeywords: ["zira", "samantha", "ava", "jenny", "en-us", "google us english"],
  },
  alex: {
    id: "alex",
    name: "ALEX",
    gender: "Male",
    accent: "British English",
    badge: "UK Male",
    role: "British Male Assistant",
    description: "Polished, composed, and articulate for narration and professional tasks.",
    lang: "en-GB",
    search: "Male, British, Narration",
    elevenlabs_voice_id: "nPczCjzI2devNBz1zQrb", // Brian
    rate: 0.95,
    pitch: 0.96,
    sample: "Good day. I am Alex, at your service for research and comprehensive narration.",
    browserKeywords: ["george", "oliver", "brian", "daniel", "en-gb", "google uk english male"],
  },
  kavya: {
    id: "kavya",
    name: "KAVYA",
    gender: "Female",
    accent: "Hindi",
    badge: "Hindi Female",
    role: "Hindi Female Assistant",
    description: "Expressive, friendly, and natural for Hindi conversations and Indian users.",
    lang: "hi-IN",
    search: "Female, Hindi, Conversational",
    elevenlabs_voice_id: "ThT5KcBeYPX3keUQqHPh", // Dorothy
    rate: 0.98,
    pitch: 1.08,
    sample: "नमस्ते! मैं काव्या हूँ। आपकी भाषा में आपकी सहायता करने के लिए तैयार हूँ।",
    browserKeywords: ["kalpana", "heera", "swara", "hindi", "hi-in", "google हिन्दी"],
  },
  vikram: {
    id: "vikram",
    name: "VIKRAM",
    gender: "Male",
    accent: "Hindi",
    badge: "Hindi Male",
    role: "Hindi Male Assistant",
    description: "Reassuring, clear, and confident for detailed explanations and voice search.",
    lang: "hi-IN",
    search: "Male, Hindi, Conversational",
    elevenlabs_voice_id: "VR6AewLTigWG4xSOukaG", // Arnold
    rate: 0.95,
    pitch: 0.92,
    sample: "नमस्ते! मैं विक्रम हूँ। किसी भी विषय पर स्पष्ट और सटीक जानकारी के लिए पूछें।",
    browserKeywords: ["hemant", "madhav", "ravi", "hindi", "hi-in", "google हिन्दी"],
  },
  marcus: {
    id: "marcus",
    name: "MARCUS",
    gender: "Male",
    accent: "General American",
    badge: "US Male",
    role: "American Male Assistant",
    description: "Confident, relaxed, and professional for technical and business explanations.",
    lang: "en-US",
    search: "American, Male, Conversational",
    elevenlabs_voice_id: "ErXwobaYiN019PkySvjV", // Antoni
    rate: 0.98,
    pitch: 0.92,
    sample: "Hey, I'm Marcus. Let's break down whatever you're working on step by step.",
    browserKeywords: ["guy", "david", "mark", "en-us", "google us english"],
  },
  emma: {
    id: "emma",
    name: "EMMA",
    gender: "Female",
    accent: "British English",
    badge: "UK Female",
    role: "British Female Assistant",
    description: "Polished, articulate, and composed for professional guidance.",
    lang: "en-GB",
    search: "British, Female, Conversational",
    elevenlabs_voice_id: "MF3mGyEYCl7XYWbV9V6O", // Elli
    rate: 0.98,
    pitch: 1.06,
    sample: "Hello. I'm Emma. I'm here to provide articulate, well-structured support.",
    browserKeywords: ["hazel", "sonia", "libby", "en-gb", "google uk english female"],
  },
};

export const INDIAN_LANGUAGES = [
  { code: "en-IN", name: "English (India)", native: "English (India)", options: "Indian female / male" },
  { code: "hi-IN", name: "Hindi", native: "हिन्दी", options: "Female / male" },
  { code: "te-IN", name: "Telugu", native: "తెలుగు", options: "Female / male" },
  { code: "ta-IN", name: "Tamil", native: "தமிழ்", options: "Female / male" },
  { code: "kn-IN", name: "Kannada", native: "ಕನ್ನಡ", options: "Female / male" },
  { code: "ml-IN", name: "Malayalam", native: "മലയാളം", options: "Female / male" },
  { code: "bn-IN", name: "Bengali", native: "বাংলা", options: "Female / male" },
  { code: "mr-IN", name: "Marathi", native: "मराठी", options: "Female / male" },
  { code: "gu-IN", name: "Gujarati", native: "ગુજરાતી", options: "Female / male" },
  { code: "pa-IN", name: "Punjabi", native: "ਪੰਜਾਬੀ", options: "Female / male" },
  { code: "ur-IN", name: "Urdu", native: "اردو", options: "Female / male" },
  { code: "as-IN", name: "Assamese", native: "অসমীয়া", options: "Female / male" },
  { code: "or-IN", name: "Odia", native: "ଓଡ଼ିଆ", options: "Female / male" },
  { code: "sa-IN", name: "Sanskrit", native: "संस्कृतम्", options: "Female / male" },
  { code: "ks-IN", name: "Kashmiri", native: "कॉशुर / کٲشُر", options: "Female / male" },
  { code: "kok-IN", name: "Konkani", native: "कोंकणी", options: "Female / male" },
  { code: "ne-IN", name: "Nepali (India)", native: "नेपाली", options: "Female / male" },
  { code: "sd-IN", name: "Sindhi", native: "سنڌي / सिन्धी", options: "Female / male" },
  { code: "mni-IN", name: "Manipuri / Meitei", native: "মৈতৈলোন্", options: "Female / male" },
  { code: "brx-IN", name: "Bodo", native: "बड़ो", options: "Female / male" },
  { code: "doi-IN", name: "Dogri", native: "डोगरी", options: "Female / male" },
  { code: "sat-IN", name: "Santali", native: "ᱥᱟᱱᱛᱟᱲᱤ", options: "Female / male" },
];

export const INTERNATIONAL_LANGUAGES = [
  { code: "en-US", name: "English (United States)", native: "English (US)" },
  { code: "en-GB", name: "English (United Kingdom)", native: "English (UK)" },
];

export const ALL_SUPPORTED_LANGUAGES = [
  ...INDIAN_LANGUAGES,
  ...INTERNATIONAL_LANGUAGES,
];

// Active audio tracking for instantaneous cancellation
let activeAudioElement = null;

/**
 * Stop any active ElevenLabs audio or browser speech synthesis
 */
export function stopAllSpeech() {
  if (activeAudioElement) {
    try {
      activeAudioElement.pause();
      activeAudioElement.currentTime = 0;
    } catch {}
    activeAudioElement = null;
  }
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    try {
      window.speechSynthesis.cancel();
    } catch {}
  }
}

/**
 * Match the optimal browser voice for a given voice profile and language
 */
export function findBestBrowserVoice(voices, profileId, languageCode) {
  if (!voices || voices.length === 0) return null;

  const prof = VOICE_PROFILES[profileId] || VOICE_PROFILES.eliza;
  const targetLang = (languageCode || prof.lang || "en-IN").toLowerCase();
  const baseLang = targetLang.split("-")[0];

  // 1. Try matching both language and profile keywords
  const keywordMatch = voices.find((v) => {
    const vLang = (v.lang || "").toLowerCase();
    const vName = (v.name || "").toLowerCase();
    const langMatch = vLang.includes(targetLang) || vLang.includes(baseLang);
    const nameMatch = prof.browserKeywords.some((kw) => vName.includes(kw));
    return langMatch && nameMatch;
  });
  if (keywordMatch) return keywordMatch;

  // 2. Try matching profile keywords anywhere
  const keywordOnly = voices.find((v) => {
    const vName = (v.name || "").toLowerCase();
    return prof.browserKeywords.some((kw) => vName.includes(kw));
  });
  if (keywordOnly) return keywordOnly;

  // 3. Match exact target locale (e.g. en-IN, hi-IN, te-IN)
  const exactLocale = voices.find((v) => (v.lang || "").toLowerCase() === targetLang);
  if (exactLocale) return exactLocale;

  // 4. Match base language code (e.g. hi, te, en)
  const baseMatch = voices.find((v) => (v.lang || "").toLowerCase().startsWith(baseLang));
  if (baseMatch) return baseMatch;

  // 5. Fallback to default voice or first English voice
  return voices.find((v) => v.default) || voices.find((v) => (v.lang || "").toLowerCase().startsWith("en")) || voices[0];
}

/**
 * Universal speech playback: attempts ElevenLabs neural TTS first,
 * with immediate fallback to browser Web Speech API.
 */
export async function speakAssistantResponse(text, settings, callbacks = {}) {
  const { onStart, onEnd, onError } = callbacks;
  stopAllSpeech();

  if (!text || !text.trim()) {
    if (onEnd) onEnd();
    return;
  }

  const profileKey = (settings.voice_profile || "eliza").toLowerCase();
  const profile = VOICE_PROFILES[profileKey] || VOICE_PROFILES.eliza;
  const voiceEngine = settings.voice_engine || "auto"; // "auto", "elevenlabs", "browser"

  // 1. Try ElevenLabs TTS if not explicitly restricted to browser
  if (voiceEngine !== "browser") {
    try {
      const ttsResult = await api.tts({
        text,
        voice_id: profile.elevenlabs_voice_id,
        voice_profile: profile.id,
        voice_lang: settings.voice_lang || profile.lang,
      });

      if (ttsResult && ttsResult.ok && ttsResult.audioUrl) {
        const audio = new Audio(ttsResult.audioUrl);
        activeAudioElement = audio;

        audio.playbackRate = Math.max(0.5, Math.min(2.0, Number(settings.speech_rate || 1.0)));

        audio.onplay = () => {
          if (onStart) onStart();
        };
        audio.onended = () => {
          activeAudioElement = null;
          URL.revokeObjectURL(ttsResult.audioUrl);
          if (onEnd) onEnd();
        };
        audio.onerror = () => {
          activeAudioElement = null;
          URL.revokeObjectURL(ttsResult.audioUrl);
          // Fall back to browser speech on playback error
          fallbackToBrowserSpeech(text, settings, profile, callbacks);
        };

        await audio.play();
        return;
      }
    } catch {
      // Network failure or ElevenLabs unconfigured: gracefully proceed to browser speech
    }
  }

  // 2. Fallback to Browser Web Speech API
  fallbackToBrowserSpeech(text, settings, profile, callbacks);
}

/**
 * Fallback synthesizer utilizing browser's window.speechSynthesis
 */
function fallbackToBrowserSpeech(text, settings, profile, callbacks = {}) {
  const { onStart, onEnd, onError } = callbacks;
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    if (onEnd) onEnd();
    return;
  }

  try {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
    window.speechSynthesis.cancel();
  } catch {}

  const voices = window.speechSynthesis.getVoices();

  const playUtterance = () => {
    const allVoices = window.speechSynthesis.getVoices();
    const utterance = new SpeechSynthesisUtterance(text);

    // Apply speech rate & pitch combined with profile characteristics
    const userRate = Number(settings.speech_rate || 1.0);
    const userPitch = Number(settings.speech_pitch || 1.0);
    utterance.rate = Math.max(0.5, Math.min(2.0, userRate * profile.rate));
    utterance.pitch = Math.max(0.5, Math.min(2.0, userPitch * profile.pitch));

    // Choose voice: explicit user selection first, else best heuristic match
    let matchedVoice = null;
    if (settings.voice_name) {
      matchedVoice = allVoices.find((v) => v.name === settings.voice_name);
    }
    if (!matchedVoice) {
      matchedVoice = findBestBrowserVoice(allVoices, profile.id, settings.voice_lang || profile.lang);
    }

    if (matchedVoice) {
      utterance.voice = matchedVoice;
      utterance.lang = matchedVoice.lang || profile.lang || "en-IN";
    } else {
      utterance.lang = profile.lang || "en-IN";
    }

    utterance.onstart = () => {
      if (onStart) onStart();
    };
    utterance.onend = () => {
      if (onEnd) onEnd();
    };
    utterance.onerror = (e) => {
      if (onError) onError(e);
      if (onEnd) onEnd();
    };

    setTimeout(() => {
      try {
        window.speechSynthesis.speak(utterance);
      } catch {
        if (onEnd) onEnd();
      }
    }, 40);
  };

  if (voices.length === 0) {
    const onVoicesLoaded = () => {
      window.speechSynthesis.onvoiceschanged = null;
      playUtterance();
    };
    window.speechSynthesis.onvoiceschanged = onVoicesLoaded;
    setTimeout(() => {
      if (window.speechSynthesis.onvoiceschanged === onVoicesLoaded) {
        window.speechSynthesis.onvoiceschanged = null;
        playUtterance();
      }
    }, 1000);
  } else {
    playUtterance();
  }
}
