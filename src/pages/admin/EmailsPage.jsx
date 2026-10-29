import { useEffect, useState } from "react";
import {
  Search,
  Filter,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
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

  // Customer Detail Modal state
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [detailData, setDetailData] = useState(null);
  const [loadingDetail, setLoadingDetail] = useState(false);

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
  }, [page, perPage, statusFilter, deviceFilter, usageFilter, sortBy]);

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
    setPage(1);
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
        per_page: 1000,
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
      title="Email IDs &amp; Access Analytics"
      subtitle="Searchable and sortable registry of all customer accounts, active restriction windows, and usage balances."
    >
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
            <option value="newest">Sort: Newest First</option>
            <option value="oldest">Sort: Oldest First</option>
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

          {(search || statusFilter || deviceFilter || usageFilter || sortBy !== "newest") && (
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
                <th>Email Address</th>
                <th>Status</th>
                <th>Questions Used</th>
                <th>Remaining</th>
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
                  <td colSpan="12" className="table-loading-cell">
                    <span className="table-spinner" /> Loading records...
                  </td>
                </tr>
              ) : items.length === 0 ? (
                <tr>
                  <td colSpan="12" className="table-empty-cell">
                    No matching customer emails found.
                  </td>
                </tr>
              ) : (
                items.map((row) => (
                  <tr
                    key={row.id}
                    className="table-row-clickable"
                    onClick={() => openCustomerDetail(row.id)}
                  >
                    <td className="font-semibold text-white">
                      <span className="email-cell">{row.email}</span>
                    </td>
                    <td>
                      <StatusBadge status={row.access_status} blocked={row.blocked} />
                    </td>
                    <td>
                      <span className="usage-pill">{row.questions_used}</span>
                    </td>
                    <td>
                      <span className="font-mono">{row.remaining_questions}</span>
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
                    <td className="text-right">
                      <button
                        type="button"
                        className="btn-view-detail"
                        onClick={(e) => {
                          e.stopPropagation();
                          openCustomerDetail(row.id);
                        }}
                      >
                        <Eye size={13} /> Details
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

      {/* Customer Detail Drawer Modal */}
      {selectedCustomerId && (
        <div className="detail-modal-overlay" onClick={closeDetail}>
          <div className="detail-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="detail-modal-head">
              <div>
                <span className="detail-eyebrow">CUSTOMER PROFILE &amp; AUDIT TRAIL</span>
                <h3>{detailData?.customer?.email || "Loading customer..."}</h3>
              </div>
              <button type="button" className="btn-modal-close" onClick={closeDetail}>
                <X size={18} />
              </button>
            </div>

            {loadingDetail ? (
              <div className="detail-loading">
                <span className="table-spinner" /> Retrieving customer history...
              </div>
            ) : detailData ? (
              <div className="detail-modal-body">
                {/* Profile Overview Card */}
                <div className="profile-summary-box">
                  <div className="summary-item">
                    <span>Account Status</span>
                    <b>{detailData.customer.status}</b>
                  </div>
                  <div className="summary-item">
                    <span>First Seen</span>
                    <b>{formatDate(detailData.customer.first_seen_at)}</b>
                  </div>
                  <div className="summary-item">
                    <span>Last Active</span>
                    <b>{formatDate(detailData.customer.last_activity_at)}</b>
                  </div>
                  <div className="summary-item">
                    <span>Primary Device</span>
                    <b>{detailData.customer.device_type}</b>
                  </div>
                </div>

                {/* 20-Day Access Period History */}
                <div className="detail-section">
                  <h4>20-Day Access Period History ({detailData.periods?.length || 0})</h4>
                  <div className="detail-cards-list">
                    {detailData.periods?.map((p) => (
                      <div key={p.id} className="history-period-card">
                        <div className="period-card-top">
                          <span className={`status-tag status-${p.status}`}>{p.status.toUpperCase()}</span>
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
        .filter-select {
          background: #0b120e;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 12.5px;
          color: #e2eee6;
          outline: none;
          cursor: pointer;
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
          padding: 3px 8px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .blocked-date-tag {
          font-family: 'DM Mono', monospace;
          color: #fca5a5;
          font-size: 12px;
        }
        .btn-view-detail {
          background: rgba(192, 132, 252, 0.1);
          border: 1px solid rgba(192, 132, 252, 0.3);
          color: #c084fc;
          padding: 5px 10px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }
        .btn-view-detail:hover {
          background: rgba(192, 132, 252, 0.2);
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
          border-top: 1px solid rgba(255, 255, 255, 0.06);
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
          border: 1px solid rgba(255, 255, 255, 0.1);
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
          max-width: 620px;
          background: #0b120e;
          border-left: 1px solid rgba(192, 132, 252, 0.3);
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          box-shadow: -10px 0 40px rgba(0, 0, 0, 0.7);
        }
        .detail-modal-head {
          padding: 24px 28px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.02);
        }
        .detail-eyebrow {
          font-size: 10px;
          font-family: 'DM Mono', monospace;
          letter-spacing: 1px;
          color: #c084fc;
        }
        .detail-modal-head h3 {
          font-size: 18px;
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
        .detail-section h4 {
          font-size: 14px;
          font-weight: 700;
          color: #c084fc;
          margin: 0 0 12px 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .history-period-card {
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          padding: 14px;
          margin-bottom: 10px;
        }
        .period-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .status-tag {
          font-size: 10px;
          font-weight: 700;
          font-family: 'DM Mono', monospace;
          padding: 2px 8px;
          border-radius: 4px;
        }
        .status-tag.status-active { background: rgba(52, 211, 153, 0.15); color: #34d399; }
        .status-tag.status-blocked { background: rgba(239, 68, 68, 0.15); color: #f87171; }
        .status-tag.status-expired { background: rgba(255, 255, 255, 0.08); color: rgba(226, 238, 230, 0.5); }
        .period-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          font-size: 12px;
        }
        .period-grid span {
          color: rgba(226, 238, 230, 0.5);
          font-size: 10.5px;
        }
        .period-grid b {
          color: #e2eee6;
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
          font-family: 'DM Mono', monospace;
          color: rgba(226, 238, 230, 0.5);
          text-align: left;
        }
        .log-table td {
          padding: 8px 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
        }
        .log-badge-status {
          background: rgba(120, 246, 168, 0.1);
          color: #78f6a8;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 10px;
        }
        .feedback-mini-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          padding: 12px 14px;
          margin-bottom: 8px;
        }
        .fb-mini-top {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }
        .fb-stars {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .fb-cat-tag {
          font-size: 11px;
          font-family: 'DM Mono', monospace;
          color: #c084fc;
          background: rgba(192, 132, 252, 0.1);
          padding: 2px 6px;
          border-radius: 4px;
        }
        .fb-date {
          font-size: 11px;
          color: rgba(226, 238, 230, 0.4);
          margin-left: auto;
        }
        .fb-mini-msg {
          font-size: 12.5px;
          color: rgba(226, 238, 230, 0.85);
          margin: 0;
          line-height: 1.4;
        }
        .section-empty {
          font-size: 12px;
          color: rgba(226, 238, 230, 0.4);
          font-style: italic;
        }
      `}</style>
    </AdminLayout>
  );
}

function StatusBadge({ status, blocked }) {
  if (blocked || status === "blocked") {
    return (
      <span className="badge-status badge-blocked">
        <ShieldAlert size={12} /> Blocked
      </span>
    );
  }
  if (status === "eligible" || status === "active") {
    return (
      <span className="badge-status badge-active">
        <CheckCircle2 size={12} /> Eligible
      </span>
    );
  }
  return (
    <span className="badge-status badge-expired">
      <Clock size={12} /> Expired
    </span>
  );
}

function DevicePill({ device }) {
  const d = (device || "unknown").toLowerCase();
  let Icon = HelpCircle;
  if (d === "desktop") Icon = Monitor;
  else if (d === "mobile") Icon = Smartphone;
  else if (d === "tablet") Icon = Tablet;

  return (
    <span className="device-pill">
      <Icon size={12} />
      <span>{d}</span>
    </span>
  );
}

