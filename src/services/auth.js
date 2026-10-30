/**
 * Simple email/password authentication service.
 * Replaces Firebase/Google login with a clean backend-verified session.
 * The backend issues a session token after verifying credentials.
 */
const API_BASE = import.meta.env.VITE_API_BASE_URL || "";

function getStoredToken() {
  return localStorage.getItem("eliza_session_token") || "";
}

function setStoredToken(token) {
  if (token) localStorage.setItem("eliza_session_token", token);
  else localStorage.removeItem("eliza_session_token");
}

function getStoredEmail() {
  return localStorage.getItem("eliza_user_email") || "";
}

function setStoredEmail(email) {
  if (email) localStorage.setItem("eliza_user_email", email);
  else localStorage.removeItem("eliza_user_email");
}

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.detail || data.message || `Request failed: ${res.status}`);
    err.status = res.status;
    err.code = data.code;
    throw err;
  }
  return data;
}

async function login(email, password) {
  const data = await request("/api/v1/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  if (data.session_token) setStoredToken(data.session_token);
  if (data.email) setStoredEmail(data.email);
  return data;
}

async function signup(email, password) {
  const data = await request("/api/v1/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  if (data.session_token) setStoredToken(data.session_token);
  if (data.email) setStoredEmail(data.email);
  return data;
}

async function logout() {
  const token = getStoredToken();
  if (token) {
    try {
      await request("/api/v1/auth/logout", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch {}
  }
  setStoredToken("");
  setStoredEmail("");
}

async function checkAuth() {
  const token = getStoredToken();
  if (!token) return null;
  try {
    const data = await request("/api/v1/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch {
    setStoredToken("");
    setStoredEmail("");
    return null;
  }
}

export { login, signup, logout, checkAuth, getStoredToken, getStoredEmail, setStoredToken, setStoredEmail };