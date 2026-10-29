/**
 * ELIZA AI Themes & Color Engine
 * Features:
 * - 15 Curated Solid Themes
 * - 36 Vibrant Gradient Mixed Themes (30+ additions)
 * - Random initial theme assignment for every new visitor
 * - Persistent custom theme saving until manually changed
 */

export const SOLID_THEMES = [
  { id: "green", name: "Green", color: "#78f6a8", desc: "Classic Matrix Green" },
  { id: "amber", name: "Amber", color: "#ffc16b", desc: "Warm Amber Glow" },
  { id: "cyan", name: "Cyan", color: "#7cecff", desc: "Electric Cyan Pulse" },
  { id: "violet", name: "Violet", color: "#c084fc", desc: "Royal Violet" },
  { id: "crimson", name: "Crimson", color: "#ff6b6b", desc: "Vivid Crimson Red" },
  { id: "solar", name: "Solar", color: "#fde047", desc: "Bright Solar Gold" },
  { id: "emerald", name: "Emerald", color: "#34d399", desc: "Lush Emerald Jewel" },
  { id: "pink", name: "Pink", color: "#f472b6", desc: "Hot Neon Pink" },
  { id: "cobalt", name: "Cobalt", color: "#60a5fa", desc: "Deep Cobalt Azure" },
  { id: "orange", name: "Orange", color: "#fb923c", desc: "Radiant Tangerine" },
  { id: "mint", name: "Mint", color: "#6ee7b7", desc: "Fresh Mint Ice" },
  { id: "rose", name: "Rose", color: "#fb7185", desc: "Velvet Rose" },
  { id: "ice", name: "Ice", color: "#a5f3fc", desc: "Glacial Ice Blue" },
  { id: "lime", name: "Lime", color: "#a3e635", desc: "Acid Cyber Lime" },
  { id: "teal", name: "Teal", color: "#2dd4bf", desc: "Deep Lagoon Teal" },
];

export const GRADIENT_THEMES = [
  // 5 Originals
  { id: "aurora", name: "Aurora", grad: "linear-gradient(135deg, #34d399 0%, #7cecff 50%, #c084fc 100%)", desc: "Northern Lights Trio" },
  { id: "cyberpunk", name: "Cyberpunk", grad: "linear-gradient(135deg, #f472b6 0%, #fb923c 50%, #fde047 100%)", desc: "Neon Tokyo Sunset" },
  { id: "nebula", name: "Nebula", grad: "linear-gradient(135deg, #c084fc 0%, #818cf8 50%, #60a5fa 100%)", desc: "Deep Cosmos Violet" },
  { id: "sunset", name: "Sunset", grad: "linear-gradient(135deg, #ff6b6b 0%, #fb923c 50%, #fde047 100%)", desc: "Golden Horizon Fire" },
  { id: "toxic", name: "Toxic", grad: "linear-gradient(135deg, #a3e635 0%, #2dd4bf 50%, #7cecff 100%)", desc: "Biohazard Lime Cyan" },

  // 31 Brand New Curated Gradient Mixed Themes
  { id: "supernova", name: "Supernova", grad: "linear-gradient(135deg, #ff416c 0%, #ff4b2b 50%, #f9d423 100%)", desc: "Blazing Stellar Flare" },
  { id: "cosmic", name: "Cosmic", grad: "linear-gradient(135deg, #8a2387 0%, #e94057 50%, #f27121 100%)", desc: "Interstellar Spectrum" },
  { id: "oceanic", name: "Oceanic", grad: "linear-gradient(135deg, #00f2fe 0%, #4facfe 50%, #00c6ff 100%)", desc: "Pacific Trench Aqua" },
  { id: "synthwave", name: "Synthwave", grad: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)", desc: "Retro 80s Laser Glow" },
  { id: "midnight", name: "Midnight", grad: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)", desc: "Deep Neon Night" },
  { id: "firefly", name: "Firefly", grad: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)", desc: "Luminescent Meadow" },
  { id: "bloodmoon", name: "Bloodmoon", grad: "linear-gradient(135deg, #f857a6 0%, #ff5858 100%)", desc: "Crimson Eclipse" },
  { id: "emerald-dream", name: "Emerald Dream", grad: "linear-gradient(135deg, #0ba360 0%, #3cba92 50%, #96e6a1 100%)", desc: "Enchanted Jade Forest" },
  { id: "hyperdrive", name: "Hyperdrive", grad: "linear-gradient(135deg, #b224ef 0%, #7579ff 100%)", desc: "Warp Speed Purple" },
  { id: "solar-flare", name: "Solar Flare", grad: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)", desc: "Thermonuclear Gold" },
  { id: "plasma", name: "Plasma", grad: "linear-gradient(135deg, #ff0844 0%, #ffb199 100%)", desc: "Superheated Neon Coral" },
  { id: "deep-space", name: "Deep Space", grad: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)", desc: "Alien Planet Aurora" },
  { id: "velvet", name: "Velvet", grad: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", desc: "Royal Indigo Velvet" },
  { id: "hologram", name: "Hologram", grad: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)", desc: "Iridescent Prismatic Glass" },
  { id: "radiance", name: "Radiance", grad: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)", desc: "Sun-drenched Coral" },
  { id: "amethyst", name: "Amethyst", grad: "linear-gradient(135deg, #9b51e0 0%, #bb6bd9 50%, #f2994a 100%)", desc: "Geode Crystal Glow" },
  { id: "glitch", name: "Glitch", grad: "linear-gradient(135deg, #00f0ff 0%, #ff007f 50%, #70ff00 100%)", desc: "Tri-Color RGB Shift" },
  { id: "matrix", name: "Matrix", grad: "linear-gradient(135deg, #00ff87 0%, #60efff 100%)", desc: "Cybernetic Stream" },
  { id: "magma", name: "Magma", grad: "linear-gradient(135deg, #f77062 0%, #fe5196 100%)", desc: "Molten Core Flow" },
  { id: "oasis", name: "Oasis", grad: "linear-gradient(135deg, #48c6ef 0%, #6f86d6 100%)", desc: "Mirage Lagoon" },
  { id: "starlight", name: "Starlight", grad: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)", desc: "Celestial Silver Violet" },
  { id: "frostfire", name: "Frostfire", grad: "linear-gradient(135deg, #00c6ff 0%, #0072ff 50%, #ff7675 100%)", desc: "Glacial Ice Meets Flame" },
  { id: "vaporwave", name: "Vaporwave", grad: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #a1c4fd 100%)", desc: "90s Nostalgia Mist" },
  { id: "cherry-blossom", name: "Cherry Blossom", grad: "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)", desc: "Tokyo Spring Sakura" },
  { id: "phoenix", name: "Phoenix", grad: "linear-gradient(135deg, #ff0844 0%, #ffb199 50%, #f83600 100%)", desc: "Reborn Fire Wings" },
  { id: "neon-abyss", name: "Neon Abyss", grad: "linear-gradient(135deg, #0acffe 0%, #495aff 100%)", desc: "Bioluminescent Depths" },
  { id: "quantum", name: "Quantum", grad: "linear-gradient(135deg, #0fd850 0%, #f9f047 100%)", desc: "Subatomic Particle Surge" },
  { id: "zenith", name: "Zenith", grad: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)", desc: "High Altitude Stratosphere" },
  { id: "golden-hour", name: "Golden Hour", grad: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)", desc: "Magic Twilight Glow" },
  { id: "enchanted", name: "Enchanted", grad: "linear-gradient(135deg, #13547a 0%, #80d0c7 100%)", desc: "Mystic Forest Stream" },
  { id: "bioluminescence", name: "Bioluminescence", grad: "linear-gradient(135deg, #2af598 0%, #009efd 100%)", desc: "Deep Ocean Neon Flow" },
];

export const ALL_THEMES = [...SOLID_THEMES, ...GRADIENT_THEMES];

const STORAGE_KEY = "eliza_user_selected_theme";

/**
 * Returns the active user theme:
 * 1. If user previously manually selected a theme, returns their chosen theme.
 * 2. Otherwise, returns a random theme from the full catalog so every visitor sees a unique look!
 */
export function resolveInitialTheme() {
  if (typeof window === "undefined") return "green";

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && ALL_THEMES.some((t) => t.id === saved)) {
      return saved;
    }
  } catch {}

  // Pick a random gradient or solid theme for this user
  const randomTheme = ALL_THEMES[Math.floor(Math.random() * ALL_THEMES.length)];
  return randomTheme.id;
}

/**
 * Saves the user's explicit theme preference permanently.
 */
export function saveUserSelectedTheme(themeId) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, themeId);
  } catch {}
}

/**
 * Check if the user has manually selected a theme.
 */
export function hasUserExplicitTheme() {
  if (typeof window === "undefined") return false;
  try {
    return Boolean(localStorage.getItem(STORAGE_KEY));
  } catch {
    return false;
  }
}
