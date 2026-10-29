import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Shield, Lock, User, AlertCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { adminApi } from "../../services/adminApi.js";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username.trim() || !password) {
      setError("Please provide both username and password.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await adminApi.login(username.trim(), password);
      navigate("/admin/dashboard", { replace: true });
    } catch (err) {
      setError(err.message || "Invalid credentials. Please verify username and password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-wrapper theme-violet">
      <div className="login-glow" aria-hidden="true" />
      <div className="login-card">
        <div className="login-header">
          <div className="icon-shield-wrap">
            <Shield size={28} />
          </div>
          <h1>ELIZA<span>AI</span></h1>
          <span className="login-badge">ADMINISTRATIVE CONSOLE</span>
          <p className="login-desc">Sign in with administrator credentials to manage access, review analytics, and inspect feedback.</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="login-field">
            <label htmlFor="admin-user">Administrator Username</label>
            <div className="input-with-icon">
              <User size={16} className="field-icon" />
              <input
                id="admin-user"
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (error) setError("");
                }}
                placeholder="admin"
                autoComplete="username"
                autoFocus
                disabled={loading}
              />
            </div>
          </div>

          <div className="login-field">
            <label htmlFor="admin-pass">Password</label>
            <div className="input-with-icon">
              <Lock size={16} className="field-icon" />
              <input
                id="admin-pass"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError("");
                }}
                placeholder="••••••••••••"
                autoComplete="current-password"
                disabled={loading}
              />
            </div>
          </div>

          {error && (
            <div className="login-error">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            className="btn-admin-submit"
            disabled={loading || !username.trim() || !password}
          >
            {loading ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>Sign In to Dashboard</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        <div className="login-foot">
          <Link to="/" className="link-back-agent">
            <ArrowLeft size={14} />
            <span>Return to Voice Assistant</span>
          </Link>
        </div>
      </div>

      <style>{`
        .admin-login-wrapper {
          min-height: 100vh;
          background: #080d0b;
          color: #e2eee6;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          position: relative;
          font-family: 'Manrope', system-ui, -apple-system, sans-serif;
          overflow: hidden;
        }
        .login-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(192, 132, 252, 0.16), transparent 70%);
          filter: blur(60px);
          pointer-events: none;
        }
        .login-card {
          position: relative;
          background: #0b120e;
          border: 1px solid rgba(192, 132, 252, 0.3);
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.8), 0 0 50px rgba(192, 132, 252, 0.1);
          border-radius: 20px;
          max-width: 440px;
          width: 100%;
          padding: 40px 34px;
        }
        .login-header {
          text-align: center;
          margin-bottom: 28px;
        }
        .icon-shield-wrap {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: rgba(192, 132, 252, 0.14);
          border: 1px solid rgba(192, 132, 252, 0.4);
          color: #c084fc;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px auto;
        }
        .login-header h1 {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: 2px;
          margin: 0 0 6px 0;
          color: #ffffff;
        }
        .login-header h1 span {
          color: #c084fc;
        }
        .login-badge {
          display: inline-block;
          font-size: 10px;
          font-family: 'DM Mono', monospace;
          letter-spacing: 1.5px;
          color: #c084fc;
          background: rgba(192, 132, 252, 0.12);
          border: 1px solid rgba(192, 132, 252, 0.25);
          padding: 3px 10px;
          border-radius: 6px;
          margin-bottom: 12px;
        }
        .login-desc {
          font-size: 13px;
          color: rgba(226, 238, 230, 0.65);
          line-height: 1.5;
          margin: 0;
        }
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .login-field {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .login-field label {
          font-size: 11.5px;
          font-weight: 600;
          text-transform: uppercase;
          font-family: 'DM Mono', monospace;
          color: rgba(226, 238, 230, 0.65);
          letter-spacing: 0.5px;
        }
        .input-with-icon {
          position: relative;
          display: flex;
          align-items: center;
        }
        .field-icon {
          position: absolute;
          left: 14px;
          color: rgba(226, 238, 230, 0.4);
          pointer-events: none;
        }
        .input-with-icon input {
          width: 100%;
          background: #080d0b;
          border: 1px solid rgba(192, 132, 252, 0.3);
          border-radius: 10px;
          padding: 12px 14px 12px 42px;
          color: #ffffff;
          font-size: 14.5px;
          outline: none;
          transition: all 0.2s;
        }
        .input-with-icon input:focus {
          border-color: #c084fc;
          box-shadow: 0 0 0 3px rgba(192, 132, 252, 0.18);
        }
        .login-error {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 8px;
          color: #fca5a5;
          font-size: 13px;
        }
        .btn-admin-submit {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 14px 20px;
          background: #c084fc;
          color: #080d0b;
          border: none;
          border-radius: 10px;
          font-size: 14.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 4px;
        }
        .btn-admin-submit:hover:not(:disabled) {
          background: #d8b4fe;
          transform: translateY(-1px);
          box-shadow: 0 4px 18px rgba(192, 132, 252, 0.35);
        }
        .btn-admin-submit:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .login-foot {
          margin-top: 24px;
          padding-top: 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          text-align: center;
        }
        .link-back-agent {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12.5px;
          color: rgba(226, 238, 230, 0.5);
          text-decoration: none;
          transition: color 0.2s;
        }
        .link-back-agent:hover {
          color: #c084fc;
        }
      `}</style>
    </div>
  );
}

