import { useEffect, useState } from "react";
import {
  Search,
  Star,
  CheckCircle2,
  Clock,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Filter,
  X,
  RefreshCw,
  Eye,
  Check,
  Edit3,
  Download,
  Calendar,
  Trash2,
  CheckSquare,
  AlertTriangle,
} from "lucide-react";
import AdminLayout from "../../components/AdminLayout.jsx";
import { adminApi } from "../../services/adminApi.js";

const CATEGORIES = [
  "Voice Experience",
  "Answer Quality",
  "UI/UX",
  "Bug",
  "Feature Request",
  "Other",
];

export default function FeedbackPage() {
  const [items, setItems] = useState([]);
  const [summary, setSummary] = useState({});
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(15);
  const [search, setSearch] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Multi-select & Actions State
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [actionLoading, setActionLoading] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  // Feedback detail modal
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [adminNotesInput, setAdminNotesInput] = useState("");

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 4500);
  };

  const fetchFeedback = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await adminApi.getFeedback({
        page,
        per_page: perPage,
        search: search.trim(),
        rating: ratingFilter !== "" ? Number(ratingFilter) : undefined,
        category: categoryFilter,
        status: statusFilter,
        start_date: startDate || undefined,
        end_date: endDate || undefined,
        sort_order: sortOrder,
      });
      setItems(res.items || []);
      setSummary(res.summary || {});
      setTotal(res.total || 0);
      setTotalPages(res.total_pages || 1);
    } catch (err) {
      setError(err.message || "Failed to load feedback records.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, [page, perPage, ratingFilter, categoryFilter, statusFilter, sortOrder, startDate, endDate]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchFeedback();
  };

  const handleClearFilters = () => {
    setSearch("");
    setRatingFilter("");
    setCategoryFilter("");
    setStatusFilter("");
    setSortOrder("newest");
    setStartDate("");
    setEndDate("");
    setSelectedIds(new Set());
    setPage(1);
  };

  // Selection
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

  // Delete single feedback
  const handleDelete = async (feedbackId, e) => {
    if (e) e.stopPropagation();
    if (!window.confirm("Permanently delete this feedback review? This action cannot be undone.")) {
      return;
    }
    setActionLoading(true);
    try {
      await adminApi.deleteFeedback(feedbackId);
      showToast("Feedback review deleted.");
      setItems((prev) => prev.filter((item) => item.id !== feedbackId));
      setTotal((prev) => Math.max(0, prev - 1));
      setSelectedIds((prev) => {
        const next = new Set(prev);
        next.delete(feedbackId);
        return next;
      });
      if (selectedFeedback?.id === feedbackId) {
        setSelectedFeedback(null);
      }
    } catch (err) {
      alert("Failed to delete feedback: " + err.message);
    } finally {
      setActionLoading(false);
    }
  };

  // Bulk Delete feedback
  const handleBulkDelete = async () => {
    if (selectedIds.size === 0) return;
    if (!window.confirm(`Permanently delete ${selectedIds.size} selected feedback reviews? This cannot be undone.`)) {
      return;
    }
    setActionLoading(true);
    try {
      const idsArray = Array.from(selectedIds);
      const res = await adminApi.bulkDeleteFeedback(idsArray);
      showToast(res.message || `Deleted ${idsArray.length} feedback review(s).`);
      const deletedSet = new Set(idsArray);
      setItems((prev) => prev.filter((i) => !deletedSet.has(i.id)));
      setTotal((prev) => Math.max(0, prev - deletedSet.size));
      setSelectedIds(new Set());
      if (selectedFeedback && deletedSet.has(selectedFeedback.id)) {
        setSelectedFeedback(null);
      }
    } catch (err) {
      alert("Failed to bulk delete feedback: " + err.message);
    } finally {
      setActionLoading(false);
    }
  };

  const handleStatusChange = async (feedbackId, newStatus) => {
    try {
      const res = await adminApi.updateFeedback(feedbackId, { status: newStatus });
      setItems((prev) =>
        prev.map((item) => (item.id === feedbackId ? { ...item, status: res.status } : item))
      );
      if (selectedFeedback && selectedFeedback.id === feedbackId) {
        setSelectedFeedback((prev) => ({ ...prev, status: res.status }));
      }
      showToast(`Feedback status updated to ${newStatus}.`);
    } catch (err) {
      alert("Failed to update status: " + err.message);
    }
  };

  const handleSaveNotes = async () => {
    if (!selectedFeedback) return;
    setUpdatingStatus(true);
    try {
      const res = await adminApi.updateFeedback(selectedFeedback.id, {
        admin_notes: adminNotesInput,
      });
      setSelectedFeedback((prev) => ({ ...prev, admin_notes: res.admin_notes }));
      setItems((prev) =>
        prev.map((item) => (item.id === selectedFeedback.id ? { ...item, admin_notes: res.admin_notes } : item))
      );
      showToast("Internal notes saved successfully.");
    } catch (err) {
      alert("Failed to save admin notes: " + err.message);
    } finally {
      setUpdatingStatus(false);
    }
  };

  const openFeedbackDetail = (item) => {
    setSelectedFeedback(item);
    setAdminNotesInput(item.admin_notes || "");
  };

  const handleExportCSV = async () => {
    try {
      const res = await adminApi.getFeedback({
        page: 1,
        per_page: 2000,
        search: search.trim(),
        rating: ratingFilter !== "" ? Number(ratingFilter) : undefined,
        category: categoryFilter,
        status: statusFilter,
        start_date: startDate || undefined,
        end_date: endDate || undefined,
        sort_order: sortOrder,
      });

      const rows = res.items || items;
      if (!rows.length) {
        alert("No feedback records to export.");
        return;
      }

      const headers = [
        "Date",
        "Email",
        "Rating",
        "Category",
        "Message",
        "Device",
        "Browser",
        "Status",
        "Admin Notes",
      ];

      const csvContent = [
        headers.join(","),
        ...rows.map((r) =>
          [
            `"${r.created_at || ""}"`,
            `"${(r.email || "").replace(/"/g, '""')}"`,
            r.rating,
            `"${(r.category || "").replace(/"/g, '""')}"`,
            `"${(r.message || "").replace(/"/g, '""').replace(/\n/g, " ")}"`,
            `"${r.device_type || "desktop"}"`,
            `"${r.browser_name || "Chrome"}"`,
            `"${r.status || "new"}"`,
            `"${(r.admin_notes || "").replace(/"/g, '""').replace(/\n/g, " ")}"`,
          ].join(",")
        ),
      ].join("\n");

      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `eliza-feedback-export-${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      alert("Failed to export feedback: " + err.message);
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
      title="Feedback & Reviews Management"
      subtitle="Examine visitor ratings, categorize UX evaluations, and record operational follow-ups."
    >
      {/* Toast Notification Banner */}
      {toastMsg && (
        <div className="admin-toast-banner">
          <CheckCircle2 size={16} />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* 4 Summary Cards */}
      <div className="fb-summary-grid">
        <div className="fb-summary-card">
          <span className="summary-card-title">Total Submissions</span>
          <div className="summary-card-val">{summary.total_feedback ?? 0}</div>
          <span className="summary-card-sub">All-time reviews received</span>
        </div>

        <div className="fb-summary-card">
          <span className="summary-card-title">Average Rating</span>
          <div className="summary-card-val">{summary.average_rating ? Number(summary.average_rating).toFixed(1) : "0.0"} / 5</div>
          <div className="stars-mini-row">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                size={14}
                fill={s <= Math.round(summary.average_rating || 0) ? "#fbbf24" : "transparent"}
                color={s <= Math.round(summary.average_rating || 0) ? "#fbbf24" : "rgba(255,255,255,0.2)"}
              />
            ))}
          </div>
        </div>

        <div className="fb-summary-card">
          <span className="summary-card-title">Feedback Received Today</span>
          <div className="summary-card-val">{summary.feedback_today ?? 0}</div>
          <span className="summary-card-sub">Past 24 hours</span>
        </div>

        <div className="fb-summary-card">
          <span className="summary-card-title">Pending Review</span>
          <div className="summary-card-val">
            {items.filter((i) => i.status === "new").length}
          </div>
          <span className="summary-card-sub">Marked as 'New' on this page</span>
        </div>
      </div>

      {/* Toolbar */}
      <div className="fb-toolbar">
        <form onSubmit={handleSearchSubmit} className="search-box">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search feedback by email or message..."
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

        <div className="fb-filters">
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

          {/* Rating filter */}
          <select
            value={ratingFilter}
            onChange={(e) => {
              setRatingFilter(e.target.value);
              setPage(1);
            }}
            className="filter-select"
          >
            <option value="">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>

          {/* Category filter */}
          <select
            value={categoryFilter}
            onChange={(e) => {
              setCategoryFilter(e.target.value);
              setPage(1);
            }}
            className="filter-select"
          >
            <option value="">All Categories</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          {/* Status filter */}
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setPage(1);
            }}
            className="filter-select"
          >
            <option value="">All Statuses</option>
            <option value="new">New</option>
            <option value="reviewed">Reviewed</option>
            <option value="resolved">Resolved</option>
          </select>

          {/* Sort order */}
          <select
            value={sortOrder}
            onChange={(e) => {
              setSortOrder(e.target.value);
              setPage(1);
            }}
            className="filter-select"
          >
            <option value="newest">Sort: Newest</option>
            <option value="oldest">Sort: Oldest</option>
          </select>

          <button
            type="button"
            className="btn-action-refresh"
            onClick={fetchFeedback}
            title="Refresh feedback"
          >
            <RefreshCw size={14} className={loading ? "spin" : ""} />
          </button>

          <button
            type="button"
            className="btn-action-export"
            onClick={handleExportCSV}
            title="Download all feedback reviews as CSV"
          >
            <Download size={14} />
            <span>Export CSV</span>
          </button>

          {(search || ratingFilter || categoryFilter || statusFilter || sortOrder !== "newest" || startDate || endDate) && (
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
              <b>{selectedIds.size}</b> review(s) selected
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
          <button onClick={fetchFeedback}>Retry</button>
        </div>
      )}

      {/* Table */}
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
                <th>Date / Time</th>
                <th>Email Address</th>
                <th>Rating</th>
                <th>Category</th>
                <th>Feedback Message</th>
                <th>Device</th>
                <th>Browser</th>
                <th>Status</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="10" className="table-loading-cell">
                    <span className="table-spinner" /> Loading feedback...
                  </td>
                </tr>
              ) : items.length === 0 ? (
                <tr>
                  <td colSpan="10" className="table-empty-cell">
                    No matching feedback entries found.
                  </td>
                </tr>
              ) : (
                items.map((row) => {
                  const isSelected = selectedIds.has(row.id);
                  return (
                    <tr
                      key={row.id}
                      className={`table-row-clickable ${isSelected ? "row-selected" : ""}`}
                      onClick={() => openFeedbackDetail(row)}
                    >
                      <td style={{ textAlign: "center" }} onClick={(e) => e.stopPropagation()}>
                        <input
                          type="checkbox"
                          className="row-checkbox"
                          checked={isSelected}
                          onChange={(e) => handleToggleSelect(row.id, e)}
                        />
                      </td>
                      <td className="text-muted">{formatDate(row.created_at)}</td>
                      <td className="font-semibold text-white">{row.email}</td>
                      <td>
                        <div className="table-stars">
                          {[...Array(5)].map((_, idx) => (
                            <Star
                              key={idx}
                              size={13}
                              fill={idx < row.rating ? "#fbbf24" : "transparent"}
                              color={idx < row.rating ? "#fbbf24" : "rgba(255,255,255,0.2)"}
                            />
                          ))}
                        </div>
                      </td>
                      <td>
                        <span className={`cat-chip cat-chip-${(row.category || "").toLowerCase().replace(/[^a-z]/g, "")}`}>
                          {row.category}
                        </span>
                      </td>
                      <td className="message-preview-cell">
                        <p>{row.message}</p>
                      </td>
                      <td>
                        <span className="device-chip">{row.device_type || "desktop"}</span>
                      </td>
                      <td>
                        <span className="browser-chip">{row.browser_name || "Chrome"}</span>
                      </td>
                      <td onClick={(e) => e.stopPropagation()}>
                        <select
                          value={row.status}
                          onChange={(e) => handleStatusChange(row.id, e.target.value)}
                          className={`status-dropdown status-style-${row.status}`}
                        >
                          <option value="new">New</option>
                          <option value="reviewed">Reviewed</option>
                          <option value="resolved">Resolved</option>
                        </select>
                      </td>
                      <td className="text-right" onClick={(e) => e.stopPropagation()}>
                        <div className="row-actions-group">
                          <button
                            type="button"
                            className="btn-view-detail"
                            onClick={() => openFeedbackDetail(row)}
                            title="View Full Feedback & Notes"
                          >
                            <Eye size={13} /> View
                          </button>
                          <button
                            type="button"
                            className="btn-action-delete"
                            onClick={(e) => handleDelete(row.id, e)}
                            disabled={actionLoading}
                            title="Delete feedback entry"
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
            Showing <b>{items.length}</b> of <b>{total}</b> total reviews (Page {page} of {totalPages})
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

      {/* Detail & Notes Modal */}
      {selectedFeedback && (
        <div className="detail-modal-overlay" onClick={() => setSelectedFeedback(null)}>
          <div className="detail-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="detail-modal-head">
              <div>
                <span className="detail-eyebrow">FEEDBACK INSPECTION</span>
                <h3>Review from {selectedFeedback.email}</h3>
              </div>
              <div className="head-actions">
                <button
                  type="button"
                  className="btn-drawer-delete"
                  onClick={(e) => handleDelete(selectedFeedback.id, e)}
                  title="Delete this feedback entry"
                >
                  <Trash2 size={14} /> Delete
                </button>
                <button
                  type="button"
                  className="btn-modal-close"
                  onClick={() => setSelectedFeedback(null)}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="detail-modal-body">
              {/* Review summary cards */}
              <div className="fb-inspect-meta">
                <div>
                  <span>Submitted At</span>
                  <b>{formatDate(selectedFeedback.created_at)}</b>
                </div>
                <div>
                  <span>Category</span>
                  <b>{selectedFeedback.category}</b>
                </div>
                <div>
                  <span>Device &amp; Browser</span>
                  <b>{selectedFeedback.device_type} • {selectedFeedback.browser_name}</b>
                </div>
                <div>
                  <span>Rating</span>
                  <div className="table-stars">
                    {[...Array(selectedFeedback.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#fbbf24" color="#fbbf24" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="fb-inspect-message-box">
                <span className="box-label">Visitor Feedback Message</span>
                <p className="full-message-text">{selectedFeedback.message}</p>
              </div>

              {/* Status Selector */}
              <div className="fb-inspect-status-box">
                <span className="box-label">Resolution Status</span>
                <div className="status-button-group">
                  {["new", "reviewed", "resolved"].map((st) => (
                    <button
                      key={st}
                      type="button"
                      className={`status-btn ${selectedFeedback.status === st ? "active-" + st : ""}`}
                      onClick={() => handleStatusChange(selectedFeedback.id, st)}
                    >
                      {selectedFeedback.status === st && <Check size={14} />}
                      <span style={{ textTransform: "capitalize" }}>{st}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Admin Internal Notes */}
              <div className="fb-inspect-notes-box">
                <div className="notes-box-head">
                  <span className="box-label">Administrator Internal Notes</span>
                  <button
                    type="button"
                    className="btn-save-notes"
                    onClick={handleSaveNotes}
                    disabled={updatingStatus}
                  >
                    <Edit3 size={13} />
                    <span>{updatingStatus ? "Saving..." : "Save Notes"}</span>
                  </button>
                </div>
                <textarea
                  rows="4"
                  value={adminNotesInput}
                  onChange={(e) => setAdminNotesInput(e.target.value)}
                  placeholder="Record follow-up actions, customer bug reports, or engineering notes here..."
                  className="notes-textarea"
                />
              </div>
            </div>
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
        .fb-summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }
        .fb-summary-card {
          background: #0b120e;
          border: 1px solid rgba(192, 132, 252, 0.18);
          border-radius: 12px;
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .summary-card-title {
          font-size: 11px;
          font-family: 'DM Mono', monospace;
          text-transform: uppercase;
          color: rgba(226, 238, 230, 0.55);
          letter-spacing: 0.5px;
        }
        .summary-card-val {
          font-size: 26px;
          font-weight: 800;
          color: #ffffff;
        }
        .summary-card-sub {
          font-size: 12px;
          color: rgba(226, 238, 230, 0.45);
        }
        .stars-mini-row {
          display: flex;
          gap: 3px;
          margin-top: 2px;
        }
        .fb-toolbar {
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
          max-width: 440px;
        }
        .search-icon {
          position: absolute;
          left: 14px;
          color: rgba(226, 238, 230, 0.45);
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
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .search-box input::placeholder {
          color: rgba(226, 238, 230, 0.4);
        }
        .search-box input:focus {
          border-color: #c084fc;
          box-shadow: 0 0 0 2px rgba(192, 132, 252, 0.15);
        }
        .btn-clear-input {
          position: absolute;
          right: 12px;
          background: none;
          border: none;
          color: rgba(226, 238, 230, 0.5);
          cursor: pointer;
        }
        .fb-filters {
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
          padding: 9px 12px;
          font-size: 12.5px;
          color: #e2eee6;
          outline: none;
          cursor: pointer;
          transition: border-color 0.2s;
        }
        .filter-select:focus {
          border-color: #c084fc;
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
        .cat-chip {
          display: inline-block;
          font-size: 11.5px;
          font-family: 'DM Mono', monospace;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 6px;
        }
        .cat-chip-voiceexperience {
          color: #d8b4fe;
          background: rgba(192, 132, 252, 0.18);
          border: 1px solid rgba(192, 132, 252, 0.45);
        }
        .cat-chip-answerquality {
          color: #93c5fd;
          background: rgba(59, 130, 246, 0.18);
          border: 1px solid rgba(59, 130, 246, 0.45);
        }
        .cat-chip-bug {
          color: #fca5a5;
          background: rgba(239, 68, 68, 0.18);
          border: 1px solid rgba(239, 68, 68, 0.45);
        }
        .cat-chip-uiux {
          color: #fde047;
          background: rgba(234, 179, 8, 0.18);
          border: 1px solid rgba(234, 179, 8, 0.45);
        }
        .cat-chip-featurerequest {
          color: #6ee7b7;
          background: rgba(16, 185, 129, 0.18);
          border: 1px solid rgba(16, 185, 129, 0.45);
        }
        .cat-chip-other {
          color: #cbd5e1;
          background: rgba(148, 163, 184, 0.18);
          border: 1px solid rgba(148, 163, 184, 0.45);
        }
        .device-chip {
          display: inline-block;
          font-size: 11.5px;
          font-family: 'DM Mono', monospace;
          color: rgba(226, 238, 230, 0.85);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 3px 8px;
          border-radius: 5px;
        }
        .browser-chip {
          display: inline-block;
          font-size: 11.5px;
          font-family: 'DM Mono', monospace;
          color: #7cecff;
          background: rgba(124, 236, 255, 0.08);
          border: 1px solid rgba(124, 236, 255, 0.25);
          padding: 3px 8px;
          border-radius: 5px;
        }
        .message-preview-cell {
          max-width: 320px;
        }
        .message-preview-cell p {
          margin: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: rgba(226, 238, 230, 0.9);
        }
        .status-dropdown {
          background: #080d0b;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 6px;
          padding: 5px 10px;
          font-size: 11.5px;
          font-family: 'DM Mono', monospace;
          font-weight: 600;
          cursor: pointer;
          outline: none;
        }
        .status-dropdown option {
          background: #080d0b;
          color: #ffffff;
        }
        .status-style-new {
          color: #7cecff;
          border-color: rgba(124, 236, 255, 0.45);
          background: rgba(124, 236, 255, 0.06);
        }
        .status-style-reviewed {
          color: #fbbf24;
          border-color: rgba(251, 191, 36, 0.45);
          background: rgba(251, 191, 36, 0.06);
        }
        .status-style-resolved {
          color: #34d399;
          border-color: rgba(52, 211, 153, 0.45);
          background: rgba(52, 211, 153, 0.06);
        }
        .row-actions-group {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .btn-view-detail {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 5px 10px;
          border-radius: 6px;
          background: rgba(192, 132, 252, 0.12);
          border: 1px solid rgba(192, 132, 252, 0.35);
          color: #e9d5ff;
          font-size: 11.5px;
          font-weight: 600;
          cursor: pointer;
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
          max-width: 600px;
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
          gap: 22px;
        }
        .fb-inspect-meta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 12px;
          padding: 16px;
        }
        .fb-inspect-meta span {
          display: block;
          font-size: 11px;
          font-family: 'DM Mono', monospace;
          color: rgba(226, 238, 230, 0.5);
          text-transform: uppercase;
        }
        .fb-inspect-meta b {
          font-size: 13.5px;
          color: #ffffff;
        }
        .box-label {
          display: block;
          font-size: 11px;
          font-family: 'DM Mono', monospace;
          color: rgba(226, 238, 230, 0.6);
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .fb-inspect-message-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          padding: 16px;
        }
        .full-message-text {
          font-size: 14px;
          line-height: 1.5;
          color: #ffffff;
          margin: 0;
          white-space: pre-wrap;
        }
        .fb-inspect-status-box {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .status-button-group {
          display: flex;
          gap: 8px;
        }
        .status-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.02);
          color: rgba(226, 238, 230, 0.6);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .status-btn:hover {
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.25);
        }
        .status-btn.active-new {
          background: rgba(124, 236, 255, 0.15);
          border-color: #7cecff;
          color: #7cecff;
        }
        .status-btn.active-reviewed {
          background: rgba(251, 191, 36, 0.15);
          border-color: #fbbf24;
          color: #fbbf24;
        }
        .status-btn.active-resolved {
          background: rgba(52, 211, 153, 0.15);
          border-color: #34d399;
          color: #34d399;
        }
        .fb-inspect-notes-box {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .notes-box-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .btn-save-notes {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #c084fc;
          border: none;
          color: #080d0b;
          font-size: 12px;
          font-weight: 700;
          padding: 5px 12px;
          border-radius: 6px;
          cursor: pointer;
        }
        .btn-save-notes:hover {
          background: #d8b4fe;
        }
        .notes-textarea {
          width: 100%;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 12px;
          font-size: 13px;
          color: #ffffff;
          outline: none;
          resize: vertical;
        }
        .notes-textarea:focus {
          border-color: #c084fc;
        }
      `}</style>
    </AdminLayout>
  );
}
