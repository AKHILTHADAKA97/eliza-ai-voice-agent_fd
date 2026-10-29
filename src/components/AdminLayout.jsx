import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Activity, LayoutDashboard, Users, MessageSquare, LogOut, ArrowLeft, Shield } from "lucide-react";
import { adminApi, getAdminToken, clearAdminToken } from "../services/adminApi.js";

export default function AdminLayout({ children, title, subtitle }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [adminUser, setAdminUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getAdminToken();
    if (!token) {
      navigate("/admin/login", { replace: true });
      return;
    }

    adminApi.me()
      .then((data) => {
        setAdminUser(data);
        setLoading(false);
      })
      .catch(() => {
        clearAdminToken();
        navigate("/admin/login", { replace: true });
      });
  }, [navigate]);

  const handleLogout = async () => {
    await adminApi.logout();
    navigate("/admin/login");
  };

  if (loading) {
    return (
      <div className="admin-loading-screen">
        <div className="admin-spinner" />
        <span>Authenticating administrator session...</span>
        <style>{`
          .admin-loading-screen {
            height: 100vh;
            background: #080d0b;
            color: #e2eee6;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 16px;
            font-family: 'Manrope', sans-serif;
          }
          .admin-spinner {
            width: 36px;
            height: 36px;
            border: 3px solid rgba(192, 132, 252, 0.2);
            border-top-color: #c084fc;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }
          @keyframes spin { to { transform: rotate(360deg); } }
        `}</style>
      </div>
    );
  }

  const navItems = [
    { label: "Overview", path: "/admin/dashboard", icon: LayoutDashboard },
    { label: "Email Access & Analytics", path: "/admin/emails", icon: Users },
    { label: "Feedback Management", path: "/admin/feedback", icon: MessageSquare },
  ];

  return (
    <div className="admin-container theme-violet">
      {/* Top Admin Navigation Bar */}
      <header className="admin-topbar">
        <div className="topbar-left">
          <div className="admin-brand">
            <div className="brand-badge-icon">
              <Shield size={18} />
            </div>
            <div>
              <div className="admin-title">
                ELIZA<span>AI</span> <span className="tag-admin">ADMIN</span>
              </div>
              <div className="admin-subtitle">ACCESS CONTROL &amp; ANALYTICS</div>
            </div>
          </div>

          <nav className="admin-nav-tabs">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-tab-link ${active ? "active" : ""}`}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="topbar-right">
          <Link to="/" className="btn-back-to-app" title="Open Voice Agent Interface">
            <ArrowLeft size={14} />
            <span>Voice Agent</span>
          </Link>

          <div className="user-profile-badge">
            <span className="dot-active" />
            <span className="user-name">{adminUser?.username || "Admin"}</span>
          </div>

          <button
            type="button"
            className="btn-logout"
            onClick={handleLogout}
            title="Sign out of Admin Dashboard"
          >
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="admin-content-shell">
        {(title || subtitle) && (
          <div className="page-header-row">
            <div>
              {title && <h1 className="page-title">{title}</h1>}
              {subtitle && <p className="page-subtitle">{subtitle}</p>}
            </div>
          </div>
        )}
        {children}
      </main>

      <style>{`
        .admin-container {
          height: 100vh;
          height: 100dvh;
          overflow-y: auto;
          overflow-x: hidden;
          background: #080d0b;
          color: #e2eee6;
          font-family: 'Manrope', system-ui, -apple-system, sans-serif;
          display: flex;
          flex-direction: column;
          scrollbar-width: thin;
          scrollbar-color: rgba(192, 132, 252, 0.4) #080d0b;
        }
        .admin-container::-webkit-scrollbar {
          width: 8px;
        }
        .admin-container::-webkit-scrollbar-track {
          background: #080d0b;
        }
        .admin-container::-webkit-scrollbar-thumb {
          background: rgba(192, 132, 252, 0.35);
          border-radius: 4px;
        }
        .admin-container::-webkit-scrollbar-thumb:hover {
          background: rgba(192, 132, 252, 0.6);
        }
        .admin-content-shell {
          flex: 1;
          padding: 28px 32px 140px 32px;
          max-width: 1480px;
          width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
        }
        .admin-topbar {
          background: #0b120e;
          border-bottom: 1px solid rgba(192, 132, 252, 0.2);
          padding: 0 28px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .topbar-left {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .admin-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .brand-badge-icon {
          width: 36px;
          height: 36px;
          border-radius: 9px;
          background: rgba(192, 132, 252, 0.15);
          border: 1px solid rgba(192, 132, 252, 0.4);
          color: #c084fc;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .admin-title {
          font-size: 16px;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .admin-title span {
          color: #c084fc;
        }
        .tag-admin {
          background: #c084fc;
          color: #080d0b !important;
          font-size: 9px;
          font-weight: 800;
          padding: 2px 6px;
          border-radius: 4px;
          margin-left: 6px;
          letter-spacing: 1px;
        }
        .admin-subtitle {
          font-size: 9.5px;
          font-family: 'DM Mono', monospace;
          letter-spacing: 1px;
          color: rgba(226, 238, 230, 0.45);
        }
        .admin-nav-tabs {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .nav-tab-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 13.5px;
          font-weight: 600;
          color: rgba(226, 238, 230, 0.65);
          text-decoration: none;
          transition: all 0.2s;
        }
        .nav-tab-link:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
        }
        .nav-tab-link.active {
          color: #c084fc;
          background: rgba(192, 132, 252, 0.12);
          border: 1px solid rgba(192, 132, 252, 0.3);
        }
        .topbar-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .btn-back-to-app {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12.5px;
          color: rgba(226, 238, 230, 0.6);
          text-decoration: none;
          padding: 6px 12px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.2s;
        }
        .btn-back-to-app:hover {
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.2);
        }
        .user-profile-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 13px;
        }
        .dot-active {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #78f6a8;
          box-shadow: 0 0 8px rgba(120, 246, 168, 0.6);
        }
        .user-name {
          font-weight: 600;
          color: #e2eee6;
        }
        .btn-logout {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 8px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.25);
          color: #fca5a5;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-logout:hover {
          background: rgba(239, 68, 68, 0.2);
          border-color: #ef4444;
          color: #ffffff;
        }
        .page-header-row {
          margin-bottom: 28px;
        }
        .page-title {
          font-size: 24px;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 6px 0;
          letter-spacing: -0.4px;
        }
        .page-subtitle {
          font-size: 14px;
          color: rgba(226, 238, 230, 0.6);
          margin: 0;
        }
        @media (max-width: 900px) {
          .admin-topbar {
            padding: 0 16px;
            height: auto;
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
            padding-bottom: 12px;
          }
          .topbar-left {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .admin-nav-tabs {
            overflow-x: auto;
            width: 100%;
          }
          .admin-content-shell {
            padding: 20px 16px;
          }
        }
      `}</style>
    </div>
  );
}

