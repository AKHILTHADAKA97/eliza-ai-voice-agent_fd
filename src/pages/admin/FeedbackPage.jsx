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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Feedback detail modal
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [adminNotesInput, setAdminNotesInput] = useState("");

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
  }, [page, perPage, ratingFilter, categoryFilter, statusFilter, sortOrder]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchFeedback();
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
      alert("Notes saved successfully.");
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
        per_page: 1000,
        search: search.trim(),
        rating: ratingFilter !== "" ? Number(ratingFilter) : undefined,
        category: categoryFilter,
        status: statusFilter,
        sort_order: sortOrder,
      });

      const rows = res.items || items;
      if (!rows.length) {
        alert("No feedback records to export.");
        return;
      }

      const headers = [
        "ID",
        "Date",
        "Email",
        "Rating",
        "Category",
        "Feedback Message",
        "Device",
        "Browser",
        "Status",
        "Admin Notes",
      ];

      const csvContent = [
        headers.join(","),
        ...rows.map((r) =>
          [
            `"${r.id || ""}"`,
            `"${r.created_at || ""}"`,
            `"${(r.email || "").replace(/"/g, '""')}"`,
            r.rating ?? 0,
            `"${(r.category || "").replace(/"/g, '""')}"`,
            `"${(r.message || "").replace(/"/g, '""')}"`,
            `"${r.device_type || ""}"`,
            `"${r.browser_name || ""}"`,
            `"${r.status || ""}"`,
            `"${(r.admin_notes || "").replace(/"/g, '""')}"`,
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
      title="Feedback &amp; Reviews Management"
      subtitle="Examine visitor ratings, categorize UX evaluations, and record operational follow-ups."
    >
      {/* 4 Summary Cards */}
      <div className="fb-summary-grid">
        <div className="fb-summary-card">
          <span className="summary-card-title">Total Submissions</span>
          <div className="summary-card-val">{summary.total_feedback ?? 0}</div>
          <span className="summary-card-sub">All-time reviews received</span>
        </div>

        <div className="fb-summary-card">
          <span className="summary-card-title">Average Rating</span>
          <div className="summary-card-val">{summary.average_rating ?? 0.0} / 5</div>
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
            placeholder="Search feedback by customer email or message content..."
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
        </div>
      </div>

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
                  <td colSpan="9" className="table-loading-cell">
                    <span className="table-spinner" /> Loading feedback...
                  </td>
                </tr>
              ) : items.length === 0 ? (
                <tr>
                  <td colSpan="9" className="table-empty-cell">
                    No matching feedback entries found.
                  </td>
                </tr>
              ) : (
                items.map((row) => (
                  <tr
                    key={row.id}
                    className="table-row-clickable"
                    onClick={() => openFeedbackDetail(row)}
                  >
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
                      <span className="cat-chip">{row.category}</span>
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
                    <td className="text-right">
                      <button
                        type="button"
                        className="btn-view-detail"
                        onClick={(e) => {
                          e.stopPropagation();
                          openFeedbackDetail(row);
                        }}
                      >
                        <Eye size={13} /> View
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        <div className="pagination-bar">
          <div className="pagination-info">
            Showing <b>{items.length}</b> of <b>{total}</b> reviews (Page {page} of {totalPages})
          </div>

          <div className="pagination-controls">
            <button
              type="button"
              className="btn-page"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page <= 1}
            >
              <ChevronLeft size={16} />
            </button>
            <span className="current-page-num">{page}</span>
            <button
              type="button"
              className="btn-page"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page >= totalPages}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Full Feedback Detail Modal */}
      {selectedFeedback && (
        <div className="feedback-modal-overlay" onClick={() => setSelectedFeedback(null)}>
          <div className="feedback-detail-card" onClick={(e) => e.stopPropagation()}>
            <div className="detail-modal-head">
              <div>
                <span className="detail-eyebrow">FEEDBACK INSPECTION</span>
                <h3>Review from {selectedFeedback.email}</h3>
              </div>
              <button
                type="button"
                className="btn-modal-close"
                onClick={() => setSelectedFeedback(null)}
              >
                <X size={18} />
              </button>
            </div>

            <div className="detail-modal-body">
              <div className="fb-meta-grid">
                <div>
                  <span>Submitted</span>
                  <b>{formatDate(selectedFeedback.created_at)}</b>
                </div>
                <div>
                  <span>Category</span>
                  <b>{selectedFeedback.category}</b>
                </div>
                <div>
                  <span>Device &amp; Browser</span>
                  <b>{selectedFeedback.device_type} · {selectedFeedback.browser_name}</b>
                </div>
                <div>
                  <span>Rating</span>
                  <div className="stars-mini-row" style={{ marginTop: "4px" }}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        fill={i < selectedFeedback.rating ? "#fbbf24" : "transparent"}
                        color={i < selectedFeedback.rating ? "#fbbf24" : "rgba(255,255,255,0.2)"}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="full-message-box">
                <span className="box-title">Full Visitor Message</span>
                <p>{selectedFeedback.message}</p>
              </div>

              {/* Status Update & Notes */}
              <div className="admin-actions-box">
                <div className="status-toggle-row">
                  <span>Current Review Status:</span>
                  <div className="status-btn-group">
                    {["new", "reviewed", "resolved"].map((st) => (
                      <button
                        key={st}
                        type="button"
                        className={`status-btn-choice ${selectedFeedback.status === st ? "active" : ""}`}
                        onClick={() => handleStatusChange(selectedFeedback.id, st)}
                      >
                        {st.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="notes-field">
                  <label htmlFor="admin-notes">Internal Administrator Notes</label>
                  <textarea
                    id="admin-notes"
                    rows={3}
                    value={adminNotesInput}
                    onChange={(e) => setAdminNotesInput(e.target.value)}
                    placeholder="Record notes on follow-up, bugs filed, or feature requests..."
                  />
                  <button
                    type="button"
                    className="btn-save-notes"
                    onClick={handleSaveNotes}
                    disabled={updatingStatus}
                  >
                    <Check size={14} />
                    <span>Save Notes</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .fb-summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }
        .fb-summary-card {
          background: #0b120e;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
        }
        .summary-card-title {
          font-size: 11px;
          font-family: 'DM Mono', monospace;
          color: rgba(226, 238, 230, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .summary-card-val {
          font-size: 24px;
          font-weight: 800;
          color: #ffffff;
        }
        .summary-card-sub {
          font-size: 11px;
          color: rgba(226, 238, 230, 0.45);
        }
        .stars-mini-row {
          display: flex;
          align-items: center;
          gap: 3px;
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
        .table-card {
          background: #0b120e;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
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
        .admin-table th {
          background: rgba(255, 255, 255, 0.02);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 14px 16px;
          font-size: 11px;
          font-family: 'DM Mono', monospace;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: rgba(226, 238, 230, 0.6);
          white-space: nowrap;
        }
        .admin-table td {
          padding: 14px 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          white-space: nowrap;
        }
        .table-row-clickable {
          cursor: pointer;
          transition: background 0.15s;
        }
        .table-row-clickable:hover {
          background: rgba(192, 132, 252, 0.04);
        }
        .cat-chip {
          display: inline-block;
          font-size: 11.5px;
          font-family: 'DM Mono', monospace;
          font-weight: 600;
          color: #e9d5ff;
          background: rgba(192, 132, 252, 0.18);
          border: 1px solid rgba(192, 132, 252, 0.45);
          padding: 4px 10px;
          border-radius: 6px;
        }
        .device-chip {
          display: inline-block;
          font-size: 11.5px;
          font-family: 'DM Mono', monospace;
          color: rgba(226, 238, 230, 0.85);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
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
        .btn-view-detail {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 10px;
          border-radius: 6px;
          background: rgba(192, 132, 252, 0.12);
          border: 1px solid rgba(192, 132, 252, 0.35);
          color: #e9d5ff;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-view-detail:hover {
          background: #c084fc;
          border-color: #c084fc;
          color: #080d0b;
        }
        .table-stars {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .pagination-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(255, 255, 255, 0.01);
          flex-wrap: wrap;
          gap: 12px;
        }
        .pagination-info {
          font-size: 12.5px;
          color: rgba(226, 238, 230, 0.6);
        }
        .pagination-info b {
          color: #ffffff;
        }
        .pagination-controls {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .btn-page {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
          width: 32px;
          height: 32px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.15s;
        }
        .btn-page:hover:not(:disabled) {
          background: rgba(192, 132, 252, 0.15);
          border-color: rgba(192, 132, 252, 0.4);
          color: #c084fc;
        }
        .btn-page:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .current-page-num {
          font-size: 12px;
          font-family: 'DM Mono', monospace;
          color: #c084fc;
          background: rgba(192, 132, 252, 0.12);
          border: 1px solid rgba(192, 132, 252, 0.3);
          padding: 5px 10px;
          border-radius: 6px;
        }
        .table-loading-cell, .table-empty-cell {
          text-align: center;
          padding: 40px !important;
          color: rgba(226, 238, 230, 0.6);
          font-size: 13.5px;
        }
        .table-spinner {
          display: inline-block;
          width: 14px;
          height: 14px;
          border: 2px solid rgba(192, 132, 252, 0.3);
          border-top-color: #c084fc;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          vertical-align: middle;
          margin-right: 8px;
        }
        .table-error-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.35);
          border-radius: 8px;
          padding: 10px 14px;
          color: #fca5a5;
          font-size: 12.5px;
          margin-bottom: 14px;
        }
        .table-error-banner button {
          background: #ef4444;
          color: #ffffff;
          border: none;
          padding: 4px 10px;
          border-radius: 5px;
          font-size: 11.5px;
          cursor: pointer;
        }
        /* Detail Modal */
        .feedback-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(8, 13, 11, 0.85);
          backdrop-filter: blur(14px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 1000;
        }
        .feedback-detail-card {
          background: #0b120e;
          border: 1px solid rgba(192, 132, 252, 0.3);
          border-radius: 18px;
          max-width: 580px;
          width: 100%;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.8);
          overflow: hidden;
        }
        .fb-meta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 10px;
          padding: 14px;
          margin-bottom: 18px;
        }
        .fb-meta-grid span {
          display: block;
          font-size: 10.5px;
          font-family: 'DM Mono', monospace;
          color: rgba(226, 238, 230, 0.5);
          text-transform: uppercase;
        }
        .fb-meta-grid b {
          font-size: 13px;
          color: #ffffff;
        }
        .full-message-box {
          background: #080d0b;
          border: 1px solid rgba(192, 132, 252, 0.25);
          border-radius: 12px;
          padding: 16px 18px;
          margin-bottom: 20px;
        }
        .box-title {
          display: block;
          font-size: 11px;
          font-family: 'DM Mono', monospace;
          color: #c084fc;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .full-message-box p {
          font-size: 14px;
          line-height: 1.6;
          color: #ffffff;
          margin: 0;
          white-space: pre-wrap;
        }
        .admin-actions-box {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .status-toggle-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 13px;
        }
        .status-btn-group {
          display: flex;
          gap: 6px;
        }
        .status-btn-choice {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(226, 238, 230, 0.6);
          padding: 5px 12px;
          border-radius: 6px;
          font-size: 11px;
          font-family: 'DM Mono', monospace;
          font-weight: 700;
          cursor: pointer;
        }
        .status-btn-choice.active {
          background: #c084fc;
          border-color: #c084fc;
          color: #080d0b;
        }
        .notes-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .notes-field label {
          font-size: 11.5px;
          font-family: 'DM Mono', monospace;
          text-transform: uppercase;
          color: rgba(226, 238, 230, 0.6);
        }
        .notes-field textarea {
          background: #080d0b;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          padding: 10px 12px;
          color: #ffffff;
          font-size: 13px;
          resize: vertical;
          outline: none;
        }
        .notes-field textarea:focus {
          border-color: #c084fc;
        }
        .btn-save-notes {
          align-self: flex-end;
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(192, 132, 252, 0.15);
          border: 1px solid rgba(192, 132, 252, 0.35);
          color: #c084fc;
          padding: 7px 14px;
          border-radius: 6px;
          font-size: 12.5px;
          font-weight: 600;
          cursor: pointer;
        }
        .btn-save-notes:hover {
          background: #c084fc;
          color: #080d0b;
        }
      `}</style>
    </AdminLayout>
  );
}

