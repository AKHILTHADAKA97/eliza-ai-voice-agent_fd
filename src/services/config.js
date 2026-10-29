/**
 * Global API and network configuration for Eliza AI.
 * Dynamically resolves the best backend API URL depending on current environment
 * (HTTPS production, mobile local Wi-Fi, or desktop localhost), preventing mixed-content
 * errors and unreachable localhost connections on mobile devices.
 */

export const PRODUCTION_API_URL = "https://eliza-ai-voice-agent-bd.onrender.com";

export function getApiBaseUrl() {
  const envUrl = (import.meta.env.VITE_API_BASE_URL || "").trim();

  // If in SSR or no window
  if (typeof window === "undefined") {
    return (envUrl || PRODUCTION_API_URL).replace(/\/$/, "");
  }

  const protocol = window.location.protocol;
  const hostname = window.location.hostname;

  // 1. If running on HTTPS (production domain or Vercel like https://elizaaivoice.vercel.app):
  // Never attempt insecure http:// connections (browsers block mixed-content on all devices).
  if (protocol === "https:") {
    if (envUrl && envUrl.startsWith("https://")) {
      return envUrl.replace(/\/$/, "");
    }
    return PRODUCTION_API_URL;
  }

  // 2. If running locally on desktop localhost or loopback
  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return (envUrl || "http://localhost:8000").replace(/\/$/, "");
  }

  // 3. If accessed from a mobile device or other computer over local Wi-Fi / LAN (192.168.x.x, 10.x.x.x)
  if (/^(192\.168\.|10\.|172\.(1[6-9]|2\d|3[01])\.)/.test(hostname)) {
    // If an explicit envUrl exists, use it
    if (envUrl) return envUrl.replace(/\/$/, "");
    // Default to the same local IP port 8000 (host machine backend)
    return `http://${hostname}:8000`;
  }

  // 4. Fallback for any other environment
  return (envUrl || PRODUCTION_API_URL).replace(/\/$/, "");
}

export const API_BASE = getApiBaseUrl();

/**
 * Resilient fetch wrapper with timeout and automatic production fallback.
 * If a local endpoint fails to connect (e.g. mobile device accessing dev server without
 * a local backend running on 0.0.0.0), it gracefully falls back to the production Render backend.
 */
export async function safeFetch(url, options = {}, timeoutMs = 28000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  const fetchOptions = {
    ...options,
    signal: options.signal || controller.signal,
  };

  try {
    const response = await fetch(url, fetchOptions);
    clearTimeout(timeoutId);
    return response;
  } catch (err) {
    clearTimeout(timeoutId);

    // If request failed with network error and the URL was attempting a local server
    // while on a mobile device or external origin, retry once against the production backend
    const isLocalUrl = url.includes("localhost") || url.includes("127.0.0.1") || /192\.168\.|10\./.test(url);
    if (isLocalUrl && !url.startsWith(PRODUCTION_API_URL)) {
      try {
        const fallbackUrl = url.replace(/http:\/\/[^/]+/, PRODUCTION_API_URL);
        const retryController = new AbortController();
        const retryTimeout = setTimeout(() => retryController.abort(), timeoutMs);
        const retryResponse = await fetch(fallbackUrl, {
          ...options,
          signal: retryController.signal,
        });
        clearTimeout(retryTimeout);
        return retryResponse;
      } catch {
        // If fallback also fails, throw original error
      }
    }

    throw err;
  }
}

