import { useEffect, useState } from "react";
import {
  Search,
  Filter,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Calendar,
  Monitor,
  Smartphone,
  Tablet,
  HelpCircle,
  Eye,
  RefreshCw,
  Star,
  MessageSquare,
  Download,
  Trash2,
  CheckSquare,
  Square,
  AlertTriangle,
} from "lucide-react";
import AdminLayout from "../../components/AdminLayout.jsx";
import { adminApi } from "../../services/adminApi.js";

export default function EmailsPage() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(15);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [deviceFilter, setDeviceFilter] = useState("");
  const [usageFilter, setUsageFilter] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Multi-select & Actions State
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [actionLoading, setActionLoading] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  // Customer Detail Modal state
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [detailData, setDetailData] = useState(null);
  const [loadingDetail, setLoadingDetail] = useState(false);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 4500);
  };

  const fetchEmails = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await adminApi.getEmails({
        page,
        per_page: perPage,
        search: search.trim(),
        status: statusFilter,
        device: deviceFilter,
        question_usage: usageFilter !== "" ? Number(usageFilter) : undefined,
        sort_by: sortBy,
        start_date: startDate || undefined,
        end_date: endDate || undefined,
      });
      setItems(res.items || []);
      setTotal(res.total || 0);
      setTotalPages(res.total_pages || 1);
    } catch (err) {
      setError(err.message || "Failed to load email records.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, [page, perPage, statusFilter, deviceFilter, usageFilter, sortBy, startDate, endDate]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchEmails();
  };

  const handleClearFilters = () => {
    setSearch("");
    setStatusFilter("");
    setDeviceFilter("");
    setUsageFilter("");
    setSortBy("newest");
    setStartDate("");
    setEndDate("");
    setSelectedIds(new Set());
    setPage(1);
  };

  // Row selection
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(new Set(items.map((i) => i.id)));
    } else {
      setSelectedIds(new Set());
    }
  };

  const handleToggleSelect = (id, e) => {
    if (e) e.stopPropagation();
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Admin Actions: Unblock
  const handleUnblock = async (customerId, e) => {
    if (e) e.stopPropagation();
    if (!window.confirm("Immediately unblock this customer and restore their 3 questions access?")) {
      return;
    }
    setActionLoading(true);
    try {
      const res = await adminApi.unblockCustomer(customerId);
      showToast(res.message || "User unblocked successfully!");
      setItems((prev) =>
        prev.map((c) =>
          c.id === customerId
            ? {
                ...c,
                blocked: false,
                access_status: "eligible",
                remaining_questions: 3,
                questions_used: 0,
                blocked_until: null,
              }
            : c
        )
      );
      if (detailData?.customer?.id === customerId) {
        setDetailData((prev) => ({
          ...prev,
          customer: { ...prev.customer, status: "eligible" },
        }));
      }
    } catch (err) {
      alert("Failed to unblock customer: " + err.message);
    } finally {
      setActionLoading(false);
    }
  };

  // Admin Actions: Delete single customer
  const handleDelete = async (customerId, email, e) => {
    if (e) e.stopPropagation();
    if (!window.confirm(`Permanently delete customer ${email}? All access periods, questions, and records will be deleted.`)) {
      return;
    }
    setActionLoading(true);
    try {
      await adminApi.deleteCustomer(customerId);
      showToast(`Permanently deleted ${email}`);
      setItems((prev) => prev.filter((c) => c.id !== customerId));
      setTotal((prev) => Math.max(0, prev - 1));
      setSelectedIds((prev) => {
        const next = new Set(prev);
        next.delete(customerId);
        return next;
      });
      if (selectedCustomerId === customerId) {
        closeDetail();
      }
    } catch (err) {
      alert("Failed to delete customer: " + err.message);
    } finally {
      setActionLoading(false);
    }
  };

  // Admin Actions: Bulk Delete
  const handleBulkDelete = async () => {
    if (selectedIds.size === 0) return;
    if (!window.confirm(`Permanently delete ${selectedIds.size} selected customer records? This action cannot be undone.`)) {
      return;
    }
    setActionLoading(true);
    try {
      const idsArray = Array.from(selectedIds);
      const res = await adminApi.bulkDeleteCustomers(idsArray);
      showToast(res.message || `Deleted ${idsArray.length} customers`);
      const deletedSet = new Set(idsArray);
      setItems((prev) => prev.filter((c) => !deletedSet.has(c.id)));
      setTotal((prev) => Math.max(0, prev - deletedSet.size));
      setSelectedIds(new Set());
      if (selectedCustomerId && deletedSet.has(selectedCustomerId)) {
        closeDetail();
      }
    } catch (err) {
      alert("Failed to delete records: " + err.message);
    } finally {
      setActionLoading(false);
    }
  };

  const openCustomerDetail = async (customerId) => {
    setSelectedCustomerId(customerId);
    setLoadingDetail(true);
    try {
      const data = await adminApi.getCustomerDetail(customerId);
      setDetailData(data);
    } catch (err) {
      alert("Failed to load customer profile: " + err.message);
    } finally {
      setLoadingDetail(false);
    }
  };

  const closeDetail = () => {
    setSelectedCustomerId(null);
    setDetailData(null);
  };

  const handleExportCSV = async () => {
    try {
      const res = await adminApi.getEmails({
        page: 1,
        per_page: 2000,
        search: search.trim(),
        status: statusFilter,
        device: deviceFilter,
        question_usage: usageFilter !== "" ? Number(usageFilter) : undefined,
        sort_by: sortBy,
        start_date: startDate || undefined,
        end_date: endDate || undefined,
      });

      const rows = res.items || items;
      if (!rows.length) {
        alert("No records to export.");
        return;
      }

      const headers = [
        "Email",
        "Status",
        "Questions Used",
        "Remaining Questions",
        "First Seen",
        "First Question",
        "Last Active",
        "Visits Count",
        "Device Category",
        "Blocked Until",
        "Period Expires At",
      ];

      const csvContent = [
        headers.join(","),
        ...rows.map((r) =>
          [
            `"${(r.email || "").replace(/"/g, '""')}"`,
            `"${r.access_status || (r.blocked ? "blocked" : "active")}"`,
            r.questions_used ?? 0,
            r.remaining_questions ?? 0,
            `"${r.first_seen_at || ""}"`,
            `"${r.first_question_at || ""}"`,
            `"${r.last_activity_at || ""}"`,
            r.visits_count ?? 1,
            `"${r.device_category || "unknown"}"`,
            `"${r.blocked_until || ""}"`,
            `"${r.current_period_expires_at || ""}"`,
          ].join(",")
        ),
      ].join("\n");

      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `eliza-users-export-${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      alert("Failed to export data: " + err.message);
    }
  };

  const formatDate = (isoStr) => {
    if (!isoStr) return "—";
    try {
      return new Date(isoStr).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return isoStr;
    }
  };

  return (
    <AdminLayout
      title="Email IDs & Access Analytics"
      subtitle="Searchable and sortable registry of all customer accounts, active restriction windows, and usage balances."
    >
      {/* Toast Notification Banner */}
      {toastMsg && (
        <div className="admin-toast-banner">
          <CheckCircle2 size={16} />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Search and Filters Toolbar */}
      <div className="emails-toolbar">
        <form onSubmit={handleSearchSubmit} className="search-box">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by customer email address..."
          />
          {search && (
            <button
              type="button"
              className="btn-clear-input"
              onClick={() => {
                setSearch("");
                setPage(1);
              }}
            >
              <X size={14} />
            </button>
          )}
        </form>

        <div className="filter-selects">
          {/* Calendar Date Filters */}
          <div className="calendar-date-group">
            <Calendar size={14} className="cal-icon" />
            <div className="date-field">
              <span className="date-label">From</span>
              <input
                type="date"
                value={startDate}
                onChange={(e) => {
                  setStartDate(e.target.value);
                  setPage(1);
                }}
                className="filter-date-input"
              />
            </div>
            <span className="date-sep">→</span>
            <div className="date-field">
              <span className="date-label">To</span>
              <input
                type="date"
                value={endDate}
                onChange={(e) => {
                  setEndDate(e.target.value);
                  setPage(1);
                }}
                className="filter-date-input"
              />
            </div>
            {(startDate || endDate) && (
              <button
                type="button"
                className="btn-clear-date"
                onClick={() => {
                  setStartDate("");
                  setEndDate("");
                  setPage(1);
                }}
                title="Clear date range"
              >
                <X size={13} />
              </button>
            )}
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setPage(1);
            }}
            className="filter-select"
          >
            <option value="">All Statuses</option>
            <option value="eligible">Eligible</option>
            <option value="blocked">Blocked</option>
            <option value="active">Active</option>
            <option value="expired">Expired</option>
          </select>

          {/* Question Usage Filter */}
          <select
            value={usageFilter}
            onChange={(e) => {
              setUsageFilter(e.target.value);
              setPage(1);
            }}
            className="filter-select"
          >
            <option value="">Any Usage</option>
            <option value="0">0 Questions (0/3)</option>
            <option value="1">1 Question (1/3)</option>
            <option value="2">2 Questions (2/3)</option>
            <option value="3">3 Questions (3/3)</option>
          </select>

          {/* Device Category Filter */}
          <select
            value={deviceFilter}
            onChange={(e) => {
              setDeviceFilter(e.target.value);
              setPage(1);
            }}
            className="filter-select"
          >
            <option value="">All Devices</option>
            <option value="desktop">Desktop</option>
            <option value="mobile">Mobile</option>
            <option value="tablet">Tablet</option>
          </select>

          {/* Sorting */}
          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              setPage(1);
            }}
            className="filter-select"
          >
            <option value="newest">Sort: Newest</option>
            <option value="oldest">Sort: Oldest</option>
            <option value="most_active">Sort: Most Active</option>
          </select>

          <button
            type="button"
            className="btn-action-refresh"
            onClick={fetchEmails}
            title="Refresh records"
          >
            <RefreshCw size={14} className={loading ? "spin" : ""} />
          </button>

          <button
            type="button"
            className="btn-action-export"
            onClick={handleExportCSV}
            title="Download all customer records as CSV"
          >
            <Download size={14} />
            <span>Export CSV</span>
          </button>

          {(search || statusFilter || deviceFilter || usageFilter || sortBy !== "newest" || startDate || endDate) && (
            <button
              type="button"
              className="btn-clear-all"
              onClick={handleClearFilters}
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Floating Bulk Action Bar */}
      {selectedIds.size > 0 && (
        <div className="bulk-actions-card">
          <div className="bulk-info">
            <CheckSquare size={17} className="bulk-icon" />
            <span>
              <b>{selectedIds.size}</b> customer(s) selected
            </span>
          </div>
          <div className="bulk-btns">
            <button
              type="button"
              className="btn-bulk-delete"
              onClick={handleBulkDelete}
              disabled={actionLoading}
            >
              <Trash2 size={14} />
              <span>Delete Selected ({selectedIds.size})</span>
            </button>
            <button
              type="button"
              className="btn-bulk-cancel"
              onClick={() => setSelectedIds(new Set())}
            >
              Cancel Selection
            </button>
          </div>
        </div>
      )}

      {error && (
        <div className="table-error-banner">
          <span>{error}</span>
          <button onClick={fetchEmails}>Retry</button>
        </div>
      )}

      {/* Main Table */}
      <div className="table-card">
        <div className="table-responsive">
          <table className="admin-table">
            <thead>
              <tr>
                <th style={{ width: 42, textAlign: "center" }}>
                  <input
                    type="checkbox"
                    className="row-checkbox"
                    checked={items.length > 0 && items.every((i) => selectedIds.has(i.id))}
                    onChange={handleSelectAll}
                    title="Select all on this page"
                  />
                </th>
                <th>Email Address</th>
                <th>Status</th>
                <th>Usage</th>
                <th>Left</th>
                <th>First Seen</th>
                <th>First Question</th>
                <th>Last Active</th>
                <th>Visits</th>
                <th>Device</th>
                <th>Blocked Until</th>
                <th>Cycle Expiry</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="13" className="table-loading-cell">
                    <span className="table-spinner" /> Loading records...
                  </td>
                </tr>
              ) : items.length === 0 ? (
                <tr>
                  <td colSpan="13" className="table-empty-cell">
                    No matching customer emails found.
                  </td>
                </tr>
              ) : (
                items.map((row) => {
                  const isBlocked = row.blocked || (row.remaining_questions !== undefined && row.remaining_questions <= 0) || row.access_status === "blocked";
                  const isSelected = selectedIds.has(row.id);
                  return (
                    <tr
                      key={row.id}
                      className={`table-row-clickable ${isSelected ? "row-selected" : ""}`}
                      onClick={() => openCustomerDetail(row.id)}
                    >
                      <td style={{ textAlign: "center" }} onClick={(e) => e.stopPropagation()}>
                        <input
                          type="checkbox"
                          className="row-checkbox"
                          checked={isSelected}
                          onChange={(e) => handleToggleSelect(row.id, e)}
                        />
                      </td>
                      <td className="font-semibold text-white">
                        <span className="email-cell">{row.email}</span>
                      </td>
                      <td>
                        <StatusBadge status={row.access_status} blocked={row.blocked} />
                      </td>
                      <td>
                        <span className="usage-pill">{row.questions_used}/3</span>
                      </td>
                      <td>
                        <span className="font-mono text-purple-200">{row.remaining_questions}</span>
                      </td>
                      <td className="text-muted">{formatDate(row.first_seen_at)}</td>
                      <td className="text-muted">{formatDate(row.first_question_at)}</td>
                      <td className="text-muted">{formatDate(row.last_activity_at)}</td>
                      <td>
                        <span className="font-mono">{row.visits_count}</span>
                      </td>
                      <td>
                        <DevicePill device={row.device_category} />
                      </td>
                      <td>
                        {row.blocked_until ? (
                          <span className="blocked-date-tag">{formatDate(row.blocked_until)}</span>
                        ) : (
                          <span className="text-muted">—</span>
                        )}
                      </td>
                      <td className="text-muted">{formatDate(row.current_period_expires_at)}</td>
                      <td className="text-right" onClick={(e) => e.stopPropagation()}>
                        <div className="row-actions-group">
                          {isBlocked && (
                            <button
                              type="button"
                              className="btn-action-unblock"
                              onClick={(e) => handleUnblock(row.id, e)}
                              disabled={actionLoading}
                              title="Unblock customer & restore 3 questions"
                            >
                              <ShieldCheck size={13} />
                              <span>Unblock</span>
                            </button>
                          )}
                          <button
                            type="button"
                            className="btn-view-detail"
                            onClick={() => openCustomerDetail(row.id)}
                            title="View Customer Profile"
                          >
                            <Eye size={13} />
                            <span>Details</span>
                          </button>
                          <button
                            type="button"
                            className="btn-action-delete"
                            onClick={(e) => handleDelete(row.id, row.email, e)}
                            disabled={actionLoading}
                            title="Permanently delete customer"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        <div className="pagination-bar">
          <div className="pagination-info">
            Showing <b>{items.length}</b> of <b>{total}</b> total emails (Page {page} of {totalPages})
          </div>

          <div className="pagination-controls">
            <label className="page-size-label">
              <span>Per page:</span>
              <select
                value={perPage}
                onChange={(e) => {
                  setPerPage(Number(e.target.value));
                  setPage(1);
                }}
              >
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="50">50</option>
              </select>
            </label>

            <button
              type="button"
              className="btn-page"
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              title="Previous page"
            >
              <ChevronLeft size={16} />
            </button>

            <span className="current-page-num">{page} / {totalPages}</span>

            <button
              type="button"
              className="btn-page"
              disabled={page >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              title="Next page"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Customer Detail Drawer Modal */}
      {selectedCustomerId && (
        <div className="detail-modal-overlay" onClick={closeDetail}>
          <div className="detail-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="detail-modal-head">
              <div>
                <span className="detail-eyebrow">CUSTOMER PROFILE &amp; AUDIT</span>
                <h3>{detailData?.customer?.email || "Loading..."}</h3>
              </div>
              <div className="head-actions">
                {detailData?.customer && (
                  <>
                    <button
                      type="button"
                      className="btn-drawer-unblock"
                      onClick={(e) => handleUnblock(detailData.customer.id, e)}
                      title="Unblock user and restore 3 questions"
                    >
                      <ShieldCheck size={14} /> Unblock
                    </button>
                    <button
                      type="button"
                      className="btn-drawer-delete"
                      onClick={(e) => handleDelete(detailData.customer.id, detailData.customer.email, e)}
                      title="Delete customer record"
                    >
                      <Trash2 size={14} /> Delete
                    </button>
                  </>
                )}
                <button type="button" className="btn-modal-close" onClick={closeDetail}>
                  <X size={18} />
                </button>
              </div>
            </div>

            {loadingDetail ? (
              <div className="detail-loading">
                <span className="table-spinner" /> Loading full customer profile...
              </div>
            ) : detailData ? (
              <div className="detail-modal-body">
                {/* Profile Summary */}
                <div className="profile-summary-box">
                  <div className="summary-item">
                    <span>First Seen</span>
                    <b>{formatDate(detailData.customer?.first_seen_at)}</b>
                  </div>
                  <div className="summary-item">
                    <span>Last Active</span>
                    <b>{formatDate(detailData.customer?.last_activity_at)}</b>
                  </div>
                  <div className="summary-item">
                    <span>Primary Device</span>
                    <b>{detailData.customer?.device_type || "unknown"}</b>
                  </div>
                  <div className="summary-item">
                    <span>Account Status</span>
                    <b>
                      <span className="status-highlight">{detailData.customer?.status}</span>
                    </b>
                  </div>
                </div>

                {/* Access Periods */}
                <div className="detail-section">
                  <h4>Access Cycles &amp; Quotas ({detailData.periods?.length || 0})</h4>
                  <div className="periods-list">
                    {detailData.periods?.map((p) => (
                      <div key={p.id} className="period-card">
                        <div className="period-card-top">
                          <span className={`period-status status-${p.status}`}>{p.status}</span>
                          <span className="period-q-count">
                            Questions: <b>{p.questions_used}/3</b>
                          </span>
                        </div>
                        <div className="period-grid">
                          <div>
                            <span>Period Start</span>
                            <b>{formatDate(p.period_started_at)}</b>
                          </div>
                          <div>
                            <span>Expires At</span>
                            <b>{formatDate(p.period_expires_at)}</b>
                          </div>
                          <div>
                            <span>First Question</span>
                            <b>{formatDate(p.first_question_at)}</b>
                          </div>
                          <div>
                            <span>Blocked Until</span>
                            <b>{formatDate(p.blocked_until)}</b>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Question Usage History */}
                <div className="detail-section">
                  <h4>Question Usage Log ({detailData.questions?.length || 0})</h4>
                  {detailData.questions?.length === 0 ? (
                    <p className="section-empty">No questions submitted yet.</p>
                  ) : (
                    <div className="log-table-wrap">
                      <table className="log-table">
                        <thead>
                          <tr>
                            <th>Time</th>
                            <th>Status</th>
                            <th>Device</th>
                          </tr>
                        </thead>
                        <tbody>
                          {detailData.questions.map((q) => (
                            <tr key={q.id}>
                              <td>{formatDate(q.created_at)}</td>
                              <td><span className="log-badge-status">{q.status}</span></td>
                              <td>{q.device_type || "unknown"}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                {/* Feedback Submissions */}
                <div className="detail-section">
                  <h4>Feedback Submissions ({detailData.feedbacks?.length || 0})</h4>
                  {detailData.feedbacks?.length === 0 ? (
                    <p className="section-empty">No feedback submitted by this customer.</p>
                  ) : (
                    <div className="feedback-cards-list">
                      {detailData.feedbacks.map((f) => (
                        <div key={f.id} className="feedback-mini-card">
                          <div className="fb-mini-top">
                            <div className="fb-stars">
                              {[...Array(f.rating)].map((_, i) => (
                                <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />
                              ))}
                            </div>
                            <span className="fb-cat-tag">{f.category}</span>
                            <span className="fb-date">{formatDate(f.created_at)}</span>
                          </div>
                          <p className="fb-mini-msg">{f.message}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}

      <style>{`
        .admin-toast-banner {
          position: sticky;
          top: 10px;
          z-index: 100;
          display: flex;
          align-items: center;
          gap: 10px;
          background: #064e3b;
          border: 1px solid #10b981;
          color: #a7f3d0;
          padding: 10px 18px;
          border-radius: 10px;
          margin-bottom: 18px;
          font-size: 13.5px;
          font-weight: 600;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          animation: slideDown 0.25s ease-out;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .emails-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 20px;
        }
        .search-box {
          position: relative;
          display: flex;
          align-items: center;
          flex: 1;
          min-width: 280px;
          max-width: 420px;
        }
        .search-icon {
          position: absolute;
          left: 14px;
          color: rgba(226, 238, 230, 0.4);
          pointer-events: none;
        }
        .search-box input {
          width: 100%;
          background: #0b120e;
          border: 1px solid rgba(192, 132, 252, 0.3);
          border-radius: 10px;
          padding: 10px 36px 10px 40px;
          font-size: 13.5px;
          color: #ffffff;
          outline: none;
        }
        .search-box input:focus {
          border-color: #c084fc;
        }
        .btn-clear-input {
          position: absolute;
          right: 12px;
          background: none;
          border: none;
          color: rgba(226, 238, 230, 0.5);
          cursor: pointer;
        }
        .filter-selects {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .calendar-date-group {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #0b120e;
          border: 1px solid rgba(192, 132, 252, 0.3);
          border-radius: 9px;
          padding: 5px 10px;
        }
        .cal-icon {
          color: #c084fc;
        }
        .date-field {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .date-label {
          font-size: 10.5px;
          font-family: 'DM Mono', monospace;
          color: rgba(226, 238, 230, 0.5);
          text-transform: uppercase;
        }
        .filter-date-input {
          background: #080d0b;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 6px;
          color: #ffffff;
          padding: 4px 6px;
          font-size: 11.5px;
          outline: none;
        }
        .filter-date-input::-webkit-calendar-picker-indicator {
          filter: invert(1);
          cursor: pointer;
        }
        .date-sep {
          color: rgba(226, 238, 230, 0.4);
          font-size: 12px;
        }
        .btn-clear-date {
          background: none;
          border: none;
          color: rgba(226, 238, 230, 0.6);
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 2px;
        }
        .btn-clear-date:hover {
          color: #fca5a5;
        }
        .filter-select {
          background: #0b120e;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 12.5px;
          color: #e2eee6;
          outline: none;
          cursor: pointer;
        }
        .filter-select option {
          background: #0b120e;
          color: #ffffff;
        }
        .btn-action-refresh {
          background: #0b120e;
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: rgba(226, 238, 230, 0.7);
          padding: 8px 12px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: all 0.2s;
        }
        .btn-action-refresh:hover {
          color: #ffffff;
          border-color: rgba(192, 132, 252, 0.4);
          background: rgba(192, 132, 252, 0.08);
        }
        .btn-action-export {
          background: rgba(192, 132, 252, 0.12);
          border: 1px solid rgba(192, 132, 252, 0.35);
          color: #d8b4fe;
          padding: 8px 14px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12.5px;
          font-weight: 700;
          transition: all 0.2s;
        }
        .btn-action-export:hover {
          background: #c084fc;
          border-color: #c084fc;
          color: #080d0b;
        }
        .btn-clear-all {
          background: none;
          border: none;
          color: #c084fc;
          font-size: 12px;
          cursor: pointer;
          text-decoration: underline;
        }
        /* Bulk Actions Card */
        .bulk-actions-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          background: rgba(192, 132, 252, 0.1);
          border: 1px solid rgba(192, 132, 252, 0.4);
          border-radius: 12px;
          margin-bottom: 16px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        }
        .bulk-info {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13.5px;
          color: #ffffff;
        }
        .bulk-icon {
          color: #c084fc;
        }
        .bulk-btns {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .btn-bulk-delete {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #dc2626;
          border: 1px solid #ef4444;
          color: #ffffff;
          padding: 7px 14px;
          border-radius: 8px;
          font-size: 12.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-bulk-delete:hover:not(:disabled) {
          background: #b91c1c;
        }
        .btn-bulk-cancel {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: rgba(226, 238, 230, 0.8);
          padding: 7px 12px;
          border-radius: 8px;
          font-size: 12px;
          cursor: pointer;
        }
        .row-checkbox {
          width: 16px;
          height: 16px;
          accent-color: #c084fc;
          cursor: pointer;
        }
        .table-card {
          background: #0b120e;
          border: 1px solid rgba(192, 132, 252, 0.18);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          margin-bottom: 40px;
        }
        .table-responsive {
          width: 100%;
          overflow-x: auto;
          scrollbar-width: thin;
          scrollbar-color: rgba(192, 132, 252, 0.35) #0b120e;
        }
        .table-responsive::-webkit-scrollbar {
          height: 8px;
        }
        .table-responsive::-webkit-scrollbar-track {
          background: #0b120e;
        }
        .table-responsive::-webkit-scrollbar-thumb {
          background: rgba(192, 132, 252, 0.35);
          border-radius: 4px;
        }
        .admin-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 13px;
        }
        .admin-table thead th {
          position: sticky;
          top: 0;
          background: #0e1612;
          z-index: 5;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 14px 14px;
          font-size: 11px;
          font-family: 'DM Mono', monospace;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: rgba(226, 238, 230, 0.7);
          white-space: nowrap;
        }
        .admin-table td {
          padding: 13px 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          white-space: nowrap;
        }
        .table-row-clickable {
          cursor: pointer;
          transition: background 0.15s;
        }
        .table-row-clickable:hover {
          background: rgba(192, 132, 252, 0.05);
        }
        .row-selected {
          background: rgba(192, 132, 252, 0.08) !important;
        }
        .email-cell {
          font-weight: 600;
          color: #ffffff;
        }
        .text-muted {
          color: rgba(226, 238, 230, 0.55);
        }
        .font-mono {
          font-family: 'DM Mono', monospace;
        }
        .usage-pill {
          display: inline-block;
          font-family: 'DM Mono', monospace;
          font-size: 11.5px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #ffffff;
        }
        .blocked-date-tag {
          font-family: 'DM Mono', monospace;
          color: #fca5a5;
          font-size: 11.5px;
        }
        .row-actions-group {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .btn-action-unblock {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.5);
          color: #6ee7b7;
          padding: 5px 10px;
          border-radius: 6px;
          font-size: 11.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-action-unblock:hover {
          background: #10b981;
          color: #080d0b;
        }
        .btn-view-detail {
          background: rgba(192, 132, 252, 0.1);
          border: 1px solid rgba(192, 132, 252, 0.35);
          color: #d8b4fe;
          padding: 5px 10px;
          border-radius: 6px;
          font-size: 11.5px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: all 0.2s;
        }
        .btn-view-detail:hover {
          background: rgba(192, 132, 252, 0.25);
          color: #ffffff;
        }
        .btn-action-delete {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #fca5a5;
          padding: 5px 8px;
          border-radius: 6px;
          font-size: 11.5px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          transition: all 0.2s;
        }
        .btn-action-delete:hover {
          background: #ef4444;
          color: #ffffff;
        }
        .table-loading-cell, .table-empty-cell {
          text-align: center;
          padding: 48px 0;
          color: rgba(226, 238, 230, 0.5);
        }
        .table-spinner {
          width: 14px;
          height: 14px;
          border: 2px solid rgba(192, 132, 252, 0.3);
          border-top-color: #c084fc;
          border-radius: 50%;
          display: inline-block;
          animation: spin 0.8s linear infinite;
          vertical-align: middle;
          margin-right: 6px;
        }
        .pagination-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 12.5px;
        }
        .pagination-info b {
          color: #ffffff;
        }
        .pagination-controls {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .page-size-label {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(226, 238, 230, 0.6);
        }
        .page-size-label select {
          background: #080d0b;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 6px;
          color: #ffffff;
          padding: 3px 6px;
          font-size: 12px;
        }
        .btn-page {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #e2eee6;
          padding: 5px 8px;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }
        .btn-page:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .current-page-num {
          font-family: 'DM Mono', monospace;
          color: #c084fc;
          font-weight: 700;
        }
        /* Detail Drawer Modal */
        .detail-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(8, 13, 11, 0.85);
          backdrop-filter: blur(12px);
          display: flex;
          justify-content: flex-end;
          z-index: 1000;
        }
        .detail-modal-card {
          width: 100%;
          max-width: 640px;
          background: #0b120e;
          border-left: 1px solid rgba(192, 132, 252, 0.3);
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          box-shadow: -10px 0 40px rgba(0, 0, 0, 0.7);
        }
        .detail-modal-head {
          padding: 22px 28px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.02);
          position: sticky;
          top: 0;
          z-index: 10;
        }
        .head-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .btn-drawer-unblock {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.5);
          color: #6ee7b7;
          padding: 6px 12px;
          border-radius: 7px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
        }
        .btn-drawer-unblock:hover {
          background: #10b981;
          color: #080d0b;
        }
        .btn-drawer-delete {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: #fca5a5;
          padding: 6px 12px;
          border-radius: 7px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
        }
        .btn-drawer-delete:hover {
          background: #ef4444;
          color: #ffffff;
        }
        .detail-eyebrow {
          font-size: 10px;
          font-family: 'DM Mono', monospace;
          letter-spacing: 1px;
          color: #c084fc;
        }
        .detail-modal-head h3 {
          font-size: 17px;
          font-weight: 700;
          color: #ffffff;
          margin: 4px 0 0 0;
        }
        .btn-modal-close {
          background: none;
          border: none;
          color: rgba(226, 238, 230, 0.6);
          cursor: pointer;
          padding: 4px;
        }
        .detail-modal-body {
          padding: 24px 28px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .profile-summary-box {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 12px;
          padding: 16px;
        }
        .summary-item span {
          display: block;
          font-size: 11px;
          font-family: 'DM Mono', monospace;
          color: rgba(226, 238, 230, 0.5);
          text-transform: uppercase;
        }
        .summary-item b {
          font-size: 13.5px;
          color: #ffffff;
        }
        .status-highlight {
          color: #c084fc;
          text-transform: uppercase;
        }
        .detail-section h4 {
          font-size: 13px;
          font-family: 'DM Mono', monospace;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: rgba(226, 238, 230, 0.7);
          margin: 0 0 12px 0;
        }
        .periods-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .period-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          padding: 14px;
        }
        .period-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .period-status {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          padding: 2px 6px;
          border-radius: 4px;
          text-transform: uppercase;
        }
        .period-status.status-active {
          background: rgba(52, 211, 153, 0.15);
          color: #34d399;
        }
        .period-status.status-blocked {
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
        }
        .period-status.status-expired {
          background: rgba(156, 163, 175, 0.15);
          color: #9ca3af;
        }
        .period-q-count {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          color: rgba(226, 238, 230, 0.8);
        }
        .period-q-count b {
          color: #ffffff;
        }
        .period-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px 12px;
          font-size: 12px;
        }
        .period-grid span {
          display: block;
          font-size: 10px;
          color: rgba(226, 238, 230, 0.45);
        }
        .period-grid b {
          color: #ffffff;
          font-weight: 500;
        }
        .log-table-wrap {
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 8px;
          overflow: hidden;
        }
        .log-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 12px;
        }
        .log-table th {
          background: rgba(255, 255, 255, 0.03);
          padding: 8px 12px;
          font-size: 10.5px;
          color: rgba(226, 238, 230, 0.5);
          text-align: left;
        }
        .log-table td {
          padding: 8px 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
        }
        .log-badge-status {
          background: rgba(192, 132, 252, 0.15);
          color: #c084fc;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 10.5px;
          font-family: 'DM Mono', monospace;
        }
        .feedback-cards-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .feedback-mini-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 8px;
          padding: 12px;
        }
        .fb-mini-top {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }
        .fb-stars {
          display: flex;
          gap: 2px;
        }
        .fb-cat-tag {
          font-size: 10.5px;
          font-family: 'DM Mono', monospace;
          color: #c084fc;
          background: rgba(192, 132, 252, 0.1);
          padding: 2px 6px;
          border-radius: 4px;
        }
        .fb-date {
          font-size: 11px;
          color: rgba(226, 238, 230, 0.45);
          margin-left: auto;
        }
        .fb-mini-msg {
          font-size: 12.5px;
          color: rgba(226, 238, 230, 0.85);
          margin: 0;
          line-height: 1.4;
        }
        .section-empty {
          color: rgba(226, 238, 230, 0.4);
          font-size: 12.5px;
          margin: 0;
        }
        .detail-loading {
          padding: 48px;
          text-align: center;
          color: rgba(226, 238, 230, 0.5);
        }
      `}</style>
    </AdminLayout>
  );
}

function StatusBadge({ status, blocked }) {
  if (blocked || status === "blocked") {
    return (
      <span className="status-badge status-blocked">
        <ShieldAlert size={12} />
        <span>Blocked</span>
      </span>
    );
  }
  if (status === "expired") {
    return (
      <span className="status-badge status-expired">
        <Clock size={12} />
        <span>Expired</span>
      </span>
    );
  }
  if (status === "active") {
    return (
      <span className="status-badge status-active">
        <CheckCircle2 size={12} />
        <span>Active</span>
      </span>
    );
  }
  return (
    <span className="status-badge status-eligible">
      <CheckCircle2 size={12} />
      <span>Eligible</span>
    </span>
  );
}

function DevicePill({ device }) {
  const d = (device || "unknown").toLowerCase();
  let Icon = HelpCircle;
  if (d.includes("desk")) Icon = Monitor;
  else if (d.includes("mob")) Icon = Smartphone;
  else if (d.includes("tab")) Icon = Tablet;

  return (
    <span className="device-pill">
      <Icon size={12} />
      <span>{d}</span>
    </span>
  );
}
