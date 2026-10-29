/**
 * Admin API client for authentication, analytics overview, email records, and feedback management.
 */
const API_BASE = (import.meta.env.VITE_API_BASE_URL || "http://localhost:8000").replace(/\/$/, "");

export function getAdminToken() {
  try {
    return localStorage.getItem("eliza_admin_token") || "";
  } catch {
    return "";
  }
}

export function setAdminToken(token) {
  try {
    if (token) localStorage.setItem("eliza_admin_token", token);
    else localStorage.removeItem("eliza_admin_token");
  } catch {}
}

export function clearAdminToken() {
  try {
    localStorage.removeItem("eliza_admin_token");
  } catch {}
}

async function adminRequest(path, options = {}) {
  const token = getAdminToken();
  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {}),
  };

  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    if (response.status === 401 && typeof window !== "undefined") {
      clearAdminToken();
    }
    const errorMsg = data.detail || data.message || `Admin request failed (${response.status})`;
    const error = new Error(errorMsg);
    error.status = response.status;
    error.data = data;
    throw error;
  }
  return data;
}

export const adminApi = {
  login: async (username, password) => {
    const data = await adminRequest("/api/v1/admin/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    if (data.token) {
      setAdminToken(data.token);
    }
    return data;
  },

  me: async () => {
    return adminRequest("/api/v1/admin/me");
  },

  logout: async () => {
    try {
      await adminRequest("/api/v1/admin/logout", { method: "POST" });
    } finally {
      clearAdminToken();
    }
  },

  getOverview: async (preset = "last30days", startDate = null, endDate = null) => {
    const params = new URLSearchParams({ preset });
    if (startDate) params.append("start_date", startDate);
    if (endDate) params.append("end_date", endDate);
    return adminRequest(`/api/v1/admin/dashboard/overview?${params.toString()}`);
  },

  getEmails: async (params = {}) => {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, val]) => {
      if (val !== undefined && val !== null && val !== "") {
        query.append(key, val);
      }
    });
    return adminRequest(`/api/v1/admin/dashboard/emails?${query.toString()}`);
  },

  getCustomerDetail: async (customerId) => {
    return adminRequest(`/api/v1/admin/dashboard/emails/${encodeURIComponent(customerId)}`);
  },

  getFeedback: async (params = {}) => {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, val]) => {
      if (val !== undefined && val !== null && val !== "") {
        query.append(key, val);
      }
    });
    return adminRequest(`/api/v1/admin/dashboard/feedback?${query.toString()}`);
  },

  updateFeedback: async (feedbackId, { status, admin_notes }) => {
    return adminRequest(`/api/v1/admin/dashboard/feedback/${encodeURIComponent(feedbackId)}`, {
      method: "PATCH",
      body: JSON.stringify({ status, admin_notes }),
    });
  },

  unblockCustomer: async (customerId) => {
    return adminRequest(`/api/v1/admin/customers/${encodeURIComponent(customerId)}/unblock`, {
      method: "POST",
    });
  },

  deleteCustomer: async (customerId) => {
    return adminRequest(`/api/v1/admin/customers/${encodeURIComponent(customerId)}`, {
      method: "DELETE",
    });
  },

  bulkDeleteCustomers: async (customerIds) => {
    return adminRequest(`/api/v1/admin/customers/bulk-delete`, {
      method: "POST",
      body: JSON.stringify({ customer_ids: customerIds }),
    });
  },

  deleteFeedback: async (feedbackId) => {
    return adminRequest(`/api/v1/admin/feedback/${encodeURIComponent(feedbackId)}`, {
      method: "DELETE",
    });
  },

  bulkDeleteFeedback: async (feedbackIds) => {
    return adminRequest(`/api/v1/admin/feedback/bulk-delete`, {
      method: "POST",
      body: JSON.stringify({ feedback_ids: feedbackIds }),
    });
  },
};


