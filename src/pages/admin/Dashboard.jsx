import { useEffect, useState } from "react";
import {
  Users,
  UserPlus,
  Eye,
  MessageSquare,
  HelpCircle,
  ShieldAlert,
  CheckCircle,
  Star,
  Smartphone,
  Monitor,
  Tablet,
  Calendar,
  Filter,
  RefreshCw,
} from "lucide-react";
import AdminLayout from "../../components/AdminLayout.jsx";
import { adminApi } from "../../services/adminApi.js";

const FILTER_PRESETS = [
  { id: "today", label: "Today" },
  { id: "yesterday", label: "Yesterday" },
  { id: "last7days", label: "Last 7 Days" },
  { id: "last30days", label: "Last 30 Days" },
  { id: "thismonth", label: "This Month" },
  { id: "custom", label: "Custom Range" },
];

export default function Dashboard() {
  const [preset, setPreset] = useState("last30days");
  const [customStart, setCustomStart] = useState("");
  const [customEnd, setCustomEnd] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadData = async (selectedPreset = preset, start = customStart, end = customEnd) => {
    setLoading(true);
    setError("");
    try {
      const res = await adminApi.getOverview(
        selectedPreset,
        selectedPreset === "custom" ? start : null,
        selectedPreset === "custom" ? end : null
      );
      setData(res);
    } catch (err) {
      setError(err.message || "Failed to load dashboard overview.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData(preset, customStart, customEnd);
  }, [preset]);

  const handleApplyCustom = (e) => {
    e.preventDefault();
    if (customStart && customEnd) {
      loadData("custom", customStart, customEnd);
    }
  };

  const metrics = data?.metrics || {};
  const charts = data?.charts || {};

  return (
    <AdminLayout
      title="System Overview &amp; Analytics"
      subtitle="Real-time access metrics, visitor sessions, and question usage from live database records."
    >
      {/* Date Filter Bar */}
      <div className="filter-bar">
        <div className="filter-presets">
          {FILTER_PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              className={`preset-btn ${preset === p.id ? "active" : ""}`}
              onClick={() => setPreset(p.id)}
            >
              {p.label}
            </button>
          ))}
        </div>

        {preset === "custom" && (
          <form onSubmit={handleApplyCustom} className="custom-range-form">
            <input
              type="date"
              value={customStart}
              onChange={(e) => setCustomStart(e.target.value)}
              className="date-input"
              aria-label="Start date"
            />
            <span className="date-sep">to</span>
            <input
              type="date"
              value={customEnd}
              onChange={(e) => setCustomEnd(e.target.value)}
              className="date-input"
              aria-label="End date"
            />
            <button type="submit" className="btn-apply-date">Apply</button>
          </form>
        )}

        <button
          type="button"
          className="btn-refresh"
          onClick={() => loadData()}
          disabled={loading}
          title="Refresh statistics"
        >
          <RefreshCw size={14} className={loading ? "spin" : ""} />
          <span>Refresh</span>
        </button>
      </div>

      {error && (
        <div className="dash-error-banner">
          <span>{error}</span>
          <button onClick={() => loadData()}>Retry</button>
        </div>
      )}

      {/* 9 Summary Metric Cards */}
      <div className="metrics-grid">
        <MetricCard
          title="Total Unique Email IDs"
          value={metrics.total_emails ?? 0}
          icon={Users}
          color="violet"
        />
        <MetricCard
          title="New Email IDs Today"
          value={metrics.new_emails_today ?? 0}
          icon={UserPlus}
          color="emerald"
        />
        <MetricCard
          title="Unique Visitors Today"
          value={metrics.unique_visitors_today ?? 0}
          icon={Eye}
          color="cyan"
          hint="Distinct customer IDs seen today"
        />
        <MetricCard
          title="Total Access Sessions Today"
          value={metrics.total_sessions_today ?? 0}
          icon={Calendar}
          color="amber"
          hint="Total daily visit records today"
        />
        <MetricCard
          title="Total Accepted Questions Today"
          value={metrics.total_questions_today ?? 0}
          icon={HelpCircle}
          color="violet"
          hint="Deducted and processed today"
        />
        <MetricCard
          title="Currently Blocked Email IDs"
          value={metrics.currently_blocked ?? 0}
          icon={ShieldAlert}
          color="crimson"
          hint="3/3 questions used in active cycle"
        />
        <MetricCard
          title="Email IDs Eligible for Access"
          value={metrics.eligible_emails ?? 0}
          icon={CheckCircle}
          color="emerald"
          hint="Active with queries remaining"
        />
        <MetricCard
          title="Total Feedback Submissions"
          value={metrics.total_feedback ?? 0}
          icon={MessageSquare}
          color="cyan"
        />
        <MetricCard
          title="Average Feedback Rating"
          value={`${metrics.average_rating ?? 0.0} / 5`}
          icon={Star}
          color="solar"
          stars={metrics.average_rating ?? 0}
        />
      </div>

      {/* Analytics Charts Grid */}
      <div className="charts-grid">
        {/* Daily Unique Visitors Chart */}
        <div className="chart-card">
          <div className="chart-header">
            <h3>Daily Unique Visitors</h3>
            <span className="chart-badge">DISTINCT DAILY CUSTOMERS</span>
          </div>
          <SvgBarChart
            data={charts.daily_visitors || []}
            color="#c084fc"
            emptyText="No visitor activity in selected date range."
          />
        </div>

        {/* Daily New Email Registrations Chart */}
        <div className="chart-card">
          <div className="chart-header">
            <h3>Daily New Email Registrations</h3>
            <span className="chart-badge">NEW CUSTOMERS ONBOARDED</span>
          </div>
          <SvgBarChart
            data={charts.daily_registrations || []}
            color="#78f6a8"
            emptyText="No registrations in selected date range."
          />
        </div>

        {/* Daily Question Usage Chart */}
        <div className="chart-card">
          <div className="chart-header">
            <h3>Daily Question Usage</h3>
            <span className="chart-badge">ACCEPTED AI QUERIES</span>
          </div>
          <SvgBarChart
            data={charts.daily_questions || []}
            color="#7cecff"
            emptyText="No question activity in selected date range."
          />
        </div>

        {/* Feedback Rating & Device Breakdown Row */}
        <div className="chart-card-dual">
          {/* Rating Distribution */}
          <div className="chart-half">
            <div className="chart-header">
              <h3>Feedback Rating Distribution</h3>
              <span className="chart-badge">1 TO 5 STARS</span>
            </div>
            <RatingBars distribution={charts.rating_distribution || {}} />
          </div>

          {/* Device Distribution */}
          <div className="chart-half">
            <div className="chart-header">
              <h3>Device Distribution</h3>
              <span className="chart-badge">VISIT PLATFORMS</span>
            </div>
            <DeviceDistribution devices={charts.device_distribution || {}} />
          </div>
        </div>
      </div>

      <style>{`
        .filter-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 24px;
          background: #0b120e;
          border: 1px solid rgba(192, 132, 252, 0.2);
          border-radius: 12px;
          padding: 10px 14px;
        }
        .filter-presets {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }
        .preset-btn {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: rgba(226, 238, 230, 0.75);
          font-size: 12.5px;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .preset-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
        }
        .preset-btn.active {
          background: rgba(192, 132, 252, 0.16);
          border-color: #c084fc;
          color: #c084fc;
        }
        .custom-range-form {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .date-input {
          background: #080d0b;
          border: 1px solid rgba(192, 132, 252, 0.3);
          border-radius: 6px;
          padding: 5px 10px;
          font-size: 12px;
          color: #ffffff;
          outline: none;
        }
        .date-sep {
          font-size: 12px;
          color: rgba(226, 238, 230, 0.5);
        }
        .btn-apply-date {
          background: #c084fc;
          color: #080d0b;
          font-weight: 700;
          border: none;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          cursor: pointer;
        }
        .btn-refresh {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: rgba(226, 238, 230, 0.7);
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 12.5px;
          cursor: pointer;
        }
        .btn-refresh:hover:not(:disabled) {
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.2);
        }
        .spin {
          animation: spin 1s linear infinite;
        }
        .dash-error-banner {
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 10px;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #fca5a5;
          font-size: 13.5px;
          margin-bottom: 20px;
        }
        .dash-error-banner button {
          background: #ef4444;
          color: #ffffff;
          border: none;
          padding: 4px 12px;
          border-radius: 6px;
          font-size: 12px;
          cursor: pointer;
        }
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
          margin-bottom: 28px;
        }
        .metric-card {
          background: #0b120e;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 14px;
          padding: 20px 22px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          transition: transform 0.2s, border-color 0.2s;
        }
        .metric-card:hover {
          transform: translateY(-2px);
          border-color: rgba(192, 132, 252, 0.35);
        }
        .metric-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .metric-title {
          font-size: 12px;
          font-weight: 600;
          color: rgba(226, 238, 230, 0.6);
          font-family: 'DM Mono', monospace;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .metric-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .color-violet .metric-icon-wrap { background: rgba(192, 132, 252, 0.15); color: #c084fc; }
        .color-emerald .metric-icon-wrap { background: rgba(52, 211, 153, 0.15); color: #34d399; }
        .color-cyan .metric-icon-wrap { background: rgba(124, 236, 255, 0.15); color: #7cecff; }
        .color-amber .metric-icon-wrap { background: rgba(255, 193, 107, 0.15); color: #ffc16b; }
        .color-crimson .metric-icon-wrap { background: rgba(255, 107, 107, 0.15); color: #ff6b6b; }
        .color-solar .metric-icon-wrap { background: rgba(253, 224, 71, 0.15); color: #fde047; }
        .metric-val {
          font-size: 26px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.5px;
        }
        .metric-stars {
          display: flex;
          align-items: center;
          gap: 3px;
          margin-top: 4px;
        }
        .metric-hint {
          font-size: 11px;
          color: rgba(226, 238, 230, 0.4);
          margin-top: auto;
        }
        .charts-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .chart-card {
          background: #0b120e;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 24px;
        }
        .chart-card-dual {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 900px) {
          .chart-card-dual {
            grid-template-columns: 1fr;
          }
        }
        .chart-half {
          background: #0b120e;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 24px;
        }
        .chart-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .chart-header h3 {
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }
        .chart-badge {
          font-size: 10px;
          font-family: 'DM Mono', monospace;
          color: rgba(226, 238, 230, 0.5);
          letter-spacing: 1px;
        }
        /* SVG Bar Chart Styling */
        .svg-chart-wrap {
          width: 100%;
          overflow-x: auto;
        }
        .chart-empty {
          padding: 40px 0;
          text-align: center;
          color: rgba(226, 238, 230, 0.4);
          font-size: 13.5px;
        }
        /* Rating distribution styling */
        .rating-bars-wrap {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .rating-bar-row {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 12.5px;
        }
        .star-label {
          width: 60px;
          display: flex;
          align-items: center;
          gap: 4px;
          font-family: 'DM Mono', monospace;
          color: #fbbf24;
        }
        .bar-track {
          flex: 1;
          height: 10px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 5px;
          overflow: hidden;
        }
        .bar-fill {
          height: 100%;
          background: #fbbf24;
          border-radius: 5px;
          transition: width 0.4s ease;
        }
        .bar-count {
          width: 36px;
          text-align: right;
          font-family: 'DM Mono', monospace;
          color: rgba(226, 238, 230, 0.65);
        }
        /* Device distribution styling */
        .devices-wrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .device-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .device-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(192, 132, 252, 0.12);
          color: #c084fc;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .device-info {
          display: flex;
          flex-direction: column;
        }
        .device-name {
          font-size: 12px;
          font-family: 'DM Mono', monospace;
          color: rgba(226, 238, 230, 0.6);
          text-transform: uppercase;
        }
        .device-val {
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
        }
      `}</style>
    </AdminLayout>
  );
}

function MetricCard({ title, value, icon: Icon, color, hint, stars }) {
  return (
    <div className={`metric-card color-${color}`}>
      <div className="metric-top">
        <span className="metric-title">{title}</span>
        <div className="metric-icon-wrap">
          <Icon size={17} />
        </div>
      </div>
      <div className="metric-val">{value}</div>
      {stars !== undefined && (
        <div className="metric-stars">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star
              key={s}
              size={14}
              fill={s <= Math.round(Number(stars) || 0) ? "#fbbf24" : "transparent"}
              color={s <= Math.round(Number(stars) || 0) ? "#fbbf24" : "rgba(255,255,255,0.2)"}
            />
          ))}
        </div>
      )}
      {hint && <span className="metric-hint">{hint}</span>}
    </div>
  );
}

function SvgBarChart({ data = [], color = "#c084fc", emptyText = "No data" }) {
  if (!data || data.length === 0) {
    return <div className="chart-empty">{emptyText}</div>;
  }

  const maxVal = Math.max(...data.map((d) => d.count || 0), 1);
  const chartHeight = 160;

  return (
    <div className="svg-chart-wrap">
      <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", height: `${chartHeight + 40}px`, minWidth: `${data.length * 32}px`, padding: "10px 0" }}>
        {data.map((item, idx) => {
          const count = item.count || 0;
          const barHeight = Math.max(4, Math.round((count / maxVal) * chartHeight));
          const dateLabel = item.date ? item.date.slice(5) : ""; // MM-DD
          return (
            <div
              key={idx}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6px",
                height: "100%",
                justifyContent: "flex-end",
              }}
              title={`${item.date}: ${count}`}
            >
              <span style={{ fontSize: "10px", color: count > 0 ? "#ffffff" : "rgba(255,255,255,0.3)", fontFamily: "DM Mono" }}>
                {count > 0 ? count : ""}
              </span>
              <div
                style={{
                  width: "100%",
                  maxWidth: "28px",
                  height: `${barHeight}px`,
                  backgroundColor: count > 0 ? color : "rgba(255, 255, 255, 0.05)",
                  borderRadius: "4px 4px 0 0",
                  transition: "height 0.3s ease",
                }}
              />
              <span style={{ fontSize: "10px", color: "rgba(226,238,230,0.5)", fontFamily: "DM Mono", whiteSpace: "nowrap" }}>
                {dateLabel}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function RatingBars({ distribution = {} }) {
  const total = Object.values(distribution).reduce((a, b) => a + b, 0) || 1;
  const starsList = [5, 4, 3, 2, 1];

  return (
    <div className="rating-bars-wrap">
      {starsList.map((star) => {
        const count = distribution[star] || 0;
        const pct = Math.round((count / total) * 100);
        return (
          <div key={star} className="rating-bar-row">
            <span className="star-label">
              {star} <Star size={13} fill="#fbbf24" />
            </span>
            <div className="bar-track">
              <div className="bar-fill" style={{ width: `${pct}%` }} />
            </div>
            <span className="bar-count">{count}</span>
          </div>
        );
      })}
    </div>
  );
}

function DeviceDistribution({ devices = {} }) {
  const deviceList = [
    { key: "desktop", label: "Desktop", icon: Monitor },
    { key: "mobile", label: "Mobile", icon: Smartphone },
    { key: "tablet", label: "Tablet", icon: Tablet },
    { key: "unknown", label: "Unknown", icon: HelpCircle },
  ];

  return (
    <div className="devices-wrap">
      {deviceList.map((d) => {
        const Icon = d.icon;
        const count = devices[d.key] || 0;
        return (
          <div key={d.key} className="device-card">
            <div className="device-icon-box">
              <Icon size={18} />
            </div>
            <div className="device-info">
              <span className="device-name">{d.label}</span>
              <span className="device-val">{count} visits</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

