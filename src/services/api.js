import { API_BASE, safeFetch } from "./config.js";

function getSessionId() {
  try {
    let sid = sessionStorage.getItem("eliza_session_id");
    if (!sid) {
      sid = typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : "sess_" + Math.random().toString(36).substring(2) + Date.now().toString(36);
      sessionStorage.setItem("eliza_session_id", sid);
    }
    return sid;
  } catch {
    return "anonymous-session";
  }
}

async function request(path, options = {}) {
  const headers = {
    "Content-Type": "application/json",
    "X-Session-ID": getSessionId(),
    ...(options.headers || {}),
  };
  const response = await safeFetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.detail || data.message || `Request failed (${response.status})`);
  }
  return data;
}

export const api = {
  health: () => request("/api/v1/health"),
  providers: () => request("/api/v1/providers"),
  settings: () => request("/api/v1/settings"),
  updateSettings: (body) => request("/api/v1/settings", { method: "PATCH", body: JSON.stringify(body) }),
  conversations: () => request("/api/v1/conversations"),
  getConversation: (id) => request(`/api/v1/conversations/${encodeURIComponent(id)}`),
  conversation: (id) => request(`/api/v1/conversations/${encodeURIComponent(id)}`),
  deleteConversation: (id) => request(`/api/v1/conversations/${encodeURIComponent(id)}`, { method: "DELETE" }),
  chat: (body) => request("/api/v1/chat", { method: "POST", body: JSON.stringify(body) }),
};
