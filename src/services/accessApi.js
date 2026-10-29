/**
 * Access Control and Usage Enforcement API Service.
 */
import { API_BASE, safeFetch } from "./config.js";

export function getStoredToken() {
  try {
    return localStorage.getItem("eliza_access_token") || "";
  } catch {
    return "";
  }
}

export function setStoredToken(token) {
  try {
    if (token) localStorage.setItem("eliza_access_token", token);
    else localStorage.removeItem("eliza_access_token");
  } catch {}
}

export function getStoredEmail() {
  try {
    return localStorage.getItem("eliza_access_email") || "";
  } catch {
    return "";
  }
}

export function setStoredEmail(email) {
  try {
    if (email) localStorage.setItem("eliza_access_email", email);
    else localStorage.removeItem("eliza_access_email");
  } catch {}
}

export function clearAccessSession() {
  try {
    localStorage.removeItem("eliza_access_token");
    localStorage.removeItem("eliza_access_email");
  } catch {}
}

export function detectDeviceType() {
  if (typeof window === "undefined") return "desktop";
  const w = window.innerWidth;
  const ua = (navigator.userAgent || "").toLowerCase();
  if (/ipad|tablet/.test(ua) || (w >= 768 && w <= 1024)) return "tablet";
  if (/mobi|android|iphone/.test(ua) || w < 768) return "mobile";
  return "desktop";
}

export function detectBrowser() {
  if (typeof navigator === "undefined") return "unknown";
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("edg/")) return "Edge";
  if (ua.includes("chrome") && !ua.includes("edg/")) return "Chrome";
  if (ua.includes("safari") && !ua.includes("chrome")) return "Safari";
  if (ua.includes("firefox")) return "Firefox";
  if (ua.includes("opr") || ua.includes("opera")) return "Opera";
  return "Browser";
}

function formatErrorMessage(data, fallback = "Request failed") {
  if (!data) return fallback;
  if (typeof data.detail === "string") return data.detail;
  if (Array.isArray(data.detail) && data.detail.length > 0) {
    return data.detail
      .map((item) => {
        if (typeof item === "string") return item;
        if (item && typeof item === "object") return item.msg || item.message || JSON.stringify(item);
        return String(item);
      })
      .join(", ");
  }
  if (data.detail && typeof data.detail === "object" && data.detail.message) {
    return data.detail.message;
  }
  if (typeof data.message === "string") return data.message;
  return fallback;
}

async function authRequest(path, options = {}) {
  const token = getStoredToken();
  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {}),
  };

  const response = await safeFetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const errorMsg = formatErrorMessage(data, `Request failed (${response.status})`);
    const error = new Error(errorMsg);
    error.status = response.status;
    error.data = data;
    throw error;
  }
  return data;
}

export const accessApi = {
  verifyEmail: async (email) => {
    const response = await safeFetch(`${API_BASE}/api/v1/access/verify-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        device_type: detectDeviceType(),
        browser_name: detectBrowser(),
      }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(formatErrorMessage(data, "Failed to verify email."));
    }
    if (data.sessionToken) {
      setStoredToken(data.sessionToken);
      setStoredEmail(data.email || email);
    }
    return data;
  },

  googleLogin: async ({ email, credential, name, picture } = {}) => {
    const response = await safeFetch(`${API_BASE}/api/v1/access/google-login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email || "",
        credential: credential || "",
        name: (name || "").slice(0, 256),
        picture: (picture || "").slice(0, 2048),
        device_type: detectDeviceType().slice(0, 64),
        browser_name: detectBrowser().slice(0, 64),
      }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(formatErrorMessage(data, "Failed to log in with Google."));
    }
    if (data.sessionToken) {
      setStoredToken(data.sessionToken);
      setStoredEmail(data.email || email);
    }
    return data;
  },

  getStatus: async () => {
    return authRequest("/api/v1/access/status");
  },

  submitQuestion: async (questionPayload) => {
    const payload = {
      ...questionPayload,
      device_type: detectDeviceType(),
      browser_name: detectBrowser(),
      request_id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : undefined,
    };
    return authRequest("/api/v1/questions", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },

  submitFeedback: async ({ rating, category, message }) => {
    return authRequest("/api/v1/feedback", {
      method: "POST",
      body: JSON.stringify({
        rating,
        category,
        message,
        device_type: detectDeviceType(),
        browser_name: detectBrowser(),
      }),
    });
  },

  getFeedbackStatus: async () => {
    return authRequest("/api/v1/feedback/status");
  },
};

