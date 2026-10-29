import { useState, useEffect } from "react";
import { Activity, ShieldCheck, AlertCircle, Clock, Sparkles, Phone, Briefcase, X } from "lucide-react";
import { accessApi } from "../services/accessApi.js";
import { signInWithGoogle } from "../services/firebase.js";

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
  </svg>
);

export default function EmailGate({ onAccessGranted, onShowFeedback, isModal = false, onClose }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [blockedInfo, setBlockedInfo] = useState(null);

  // Stop voice speech immediately when modal is opened
  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {}
    }
  }, []);

  // Direct Firebase Google Sign-In
  const handleGoogleSignIn = async () => {
    setError("");

    // Clear any previous pending question: user will ask their question fresh after login
    try {
      sessionStorage.removeItem("eliza_pending_q");
    } catch {}

    setLoading(true);
    try {
      const firebaseUser = await signInWithGoogle();
      if (!firebaseUser || !firebaseUser.email) {
        throw new Error("No Google email account received from sign-in.");
      }

      const result = await accessApi.googleLogin({
        email: firebaseUser.email,
        name: firebaseUser.displayName,
        picture: firebaseUser.photoURL,
        credential: firebaseUser.idToken,
      });

      if (result.blocked) {
        setBlockedInfo(result);
        if (onAccessGranted) onAccessGranted(result);
      } else if (result.allowed) {
        if (onAccessGranted) onAccessGranted(result);
      } else {
        setError(result.message || "Access not available at this time.");
      }
    } catch (err) {
      if (err.code === "CANCELLED") {
        setError("");
      } else {
        setError(err.message || "Google sign-in failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const formatBlockDate = (isoStr) => {
    if (!isoStr) return "20 days from period start";
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
    <div className={`email-gate-container ${isModal ? "is-modal" : ""}`}>
      <div className="gate-glow" aria-hidden="true" />
      <div className="gate-card">
        {onClose && isModal && (
          <button className="btn-close-modal" onClick={onClose} aria-label="Close">
            <X size={16} />
          </button>
        )}

        {/* Brand Header */}
        <div className="brand-header">
          <div className="brand-icon">
            <Activity size={20} className="icon-pulse" />
          </div>
          <div className="brand-text">
            <h2>ELIZA<span>AI</span></h2>
            <span>VOICE INTELLIGENCE TRIAL ACCESS</span>
          </div>
        </div>

        {blockedInfo ? (
          /* Limit Exceeded Notice */
          <div className="limit-block-view">
            <div className="limit-icon-circle">
              <Clock size={28} />
            </div>
            <h3>Your limit is over.</h3>
            <p className="limit-thanks">Thank you for your consideration.</p>
            <p className="limit-text">
              Please provide a review and feedback to help us improve.
            </p>

            <div className="blocked-date-badge">
              <span>Access restricted until</span>
              <b>{formatBlockDate(blockedInfo.blockedUntil)}</b>
            </div>

            <button
              type="button"
              className="btn-feedback-primary"
              onClick={() => onShowFeedback && onShowFeedback(blockedInfo)}
            >
              Give Feedback
            </button>

            <button
              type="button"
              className="btn-link"
              onClick={() => {
                setBlockedInfo(null);
                handleGoogleSignIn();
              }}
            >
              Sign in with a different Google account
            </button>
          </div>
        ) : (
          /* Start Your Conversation - Direct Google Authentication & Email Verification */
          <>
            <div className="gate-copy">
              <div className="trial-pill">FREE TRIAL ACCESS</div>
              <h3>Start your conversation</h3>
              <p>
                Authenticate with Google to verify your email and continue your free trial.
                Each account receives <b>3 questions per 20-day period</b>.
              </p>
            </div>

            {error && (
              <div className="error-alert">
                <AlertCircle size={15} />
                <span>{error}</span>
              </div>
            )}

            {/* Direct Firebase Google Sign-In Button */}
            <div className="google-auth-container">
              <button
                type="button"
                className="btn-google-direct"
                onClick={handleGoogleSignIn}
                disabled={loading}
              >
                {loading ? (
                  <span className="spinner-text">
                    <span className="gate-spinner" /> Connecting to Google...
                  </span>
                ) : (
                  <>
                    <GoogleIcon />
                    <span>Sign in with Google</span>
                  </>
                )}
              </button>
            </div>

            <div className="gate-perks">
              <div className="perk-item">
                <ShieldCheck size={13} />
                <span>Zero spam · Privacy guarded</span>
              </div>
              <div className="perk-item">
                <Sparkles size={13} />
                <span>3 questions · 20-day cycle</span>
              </div>
            </div>

            {/* Developer Portfolio Showcase (Image 2 Requirement) */}
            <div className="developer-showcase-box">
              <div className="dev-box-top">
                <Briefcase size={13} className="dev-icon" />
                <span>DEVELOPED BY AKHIL THADAKA</span>
              </div>
              <p>
                Full-Stack &amp; AI Voice Developer · Actively searching for better opportunities, ready to work, and available for freelance projects.
              </p>
              <a href="tel:9121751697" className="dev-contact-pill">
                <Phone size={12} />
                <span>Contact: <b>9121751697</b></span>
              </a>
            </div>
          </>
        )}
      </div>

      <style>{`
        .email-gate-container {
          position: fixed;
          inset: 0;
          background: #080d0b;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px;
          z-index: 10000;
          font-family: 'Manrope', system-ui, -apple-system, sans-serif;
          color: #e2eee6;
          overflow: hidden;
        }
        .email-gate-container.is-modal {
          background: rgba(8, 13, 11, 0.92);
          backdrop-filter: blur(16px);
        }
        .gate-glow {
          position: absolute;
          width: 440px;
          height: 440px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(192, 132, 252, 0.12), rgba(120, 246, 168, 0.04) 50%, transparent 70%);
          pointer-events: none;
          filter: blur(50px);
        }
        .gate-card {
          position: relative;
          background: #0b120e;
          border: 1px solid rgba(192, 132, 252, 0.28);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), 0 0 35px rgba(192, 132, 252, 0.08);
          border-radius: 18px;
          width: 100%;
          max-width: 440px;
          max-height: 90vh;
          overflow-y: auto;
          padding: clamp(16px, 2.8vh, 24px) clamp(16px, 3vw, 24px);
          backdrop-filter: blur(16px);
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        .gate-card::-webkit-scrollbar {
          width: 5px;
        }
        .gate-card::-webkit-scrollbar-thumb {
          background: rgba(192, 132, 252, 0.25);
          border-radius: 3px;
        }
        .btn-close-modal {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(226, 238, 230, 0.6);
          border-radius: 50%;
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-close-modal:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.15);
        }
        .brand-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }
        .brand-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(192, 132, 252, 0.12);
          border: 1px solid rgba(192, 132, 252, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #c084fc;
        }
        .icon-pulse {
          animation: pulse 2.5s infinite ease-in-out;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.06); }
        }
        .brand-text h2 {
          font-size: 16px;
          letter-spacing: 1.5px;
          font-weight: 800;
          margin: 0;
          color: #ffffff;
        }
        .brand-text h2 span {
          color: #c084fc;
          margin-left: 2px;
        }
        .brand-text span {
          display: block;
          font-size: 9px;
          letter-spacing: 1.2px;
          color: rgba(226, 238, 230, 0.5);
          font-family: 'DM Mono', monospace;
          margin-top: 1px;
        }
        .trial-pill {
          display: inline-block;
          font-size: 9px;
          font-family: 'DM Mono', monospace;
          letter-spacing: 1.2px;
          color: #c084fc;
          background: rgba(192, 132, 252, 0.12);
          border: 1px solid rgba(192, 132, 252, 0.28);
          padding: 2px 7px;
          border-radius: 4px;
          margin-bottom: 8px;
        }
        .gate-copy h3 {
          font-size: clamp(17px, 2.2vw, 20px);
          font-weight: 800;
          margin: 0 0 6px 0;
          color: #ffffff;
          letter-spacing: -0.3px;
        }
        .gate-copy p {
          font-size: clamp(12px, 1.4vw, 13px);
          line-height: 1.45;
          color: rgba(226, 238, 230, 0.72);
          margin: 0 0 14px 0;
        }
        .gate-copy p b {
          color: #e2eee6;
          font-weight: 600;
        }
        .error-alert {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.35);
          border-radius: 8px;
          padding: 8px 12px;
          color: #fca5a5;
          font-size: 12px;
          margin-bottom: 12px;
        }
        .google-auth-container {
          margin-bottom: 18px;
        }
        .btn-google-direct {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 16px;
          background: #ffffff;
          color: #1f2937;
          border: 1px solid #d1d5db;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }
        .btn-google-direct:hover {
          background: #f9fafb;
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
        }
        .btn-google-direct:active {
          transform: translateY(0);
        }
        .gate-spinner {
          display: inline-block;
          width: 14px;
          height: 14px;
          border: 2px solid rgba(31, 41, 55, 0.3);
          border-top-color: #1f2937;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        .gate-spinner-light {
          display: inline-block;
          width: 13px;
          height: 13px;
          border: 2px solid rgba(11, 18, 14, 0.3);
          border-top-color: #0b120e;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .gate-perks {
          display: flex;
          justify-content: space-between;
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          margin-bottom: 12px;
          font-size: 11px;
          color: rgba(226, 238, 230, 0.65);
        }
        .perk-item {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .perk-item svg {
          color: #c084fc;
        }

        /* Developer Showcase Box (Image 2 Requirement) */
        .developer-showcase-box {
          background: rgba(192, 132, 252, 0.06);
          border: 1px solid rgba(192, 132, 252, 0.22);
          border-radius: 11px;
          padding: 10px 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .dev-box-top {
          display: flex;
          align-items: center;
          gap: 5px;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.8px;
          font-weight: 700;
          color: #c084fc;
        }
        .dev-icon {
          color: #c084fc;
        }
        .developer-showcase-box p {
          margin: 0;
          font-size: 11px;
          line-height: 1.35;
          color: rgba(226, 238, 230, 0.7);
        }
        .dev-contact-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(192, 132, 252, 0.12);
          border: 1px solid rgba(192, 132, 252, 0.35);
          color: #e2eee6;
          padding: 3px 8px;
          border-radius: 5px;
          font-size: 11px;
          text-decoration: none;
          align-self: flex-start;
          transition: all 0.2s;
        }
        .dev-contact-pill:hover {
          background: rgba(192, 132, 252, 0.22);
          border-color: #c084fc;
          color: #ffffff;
        }
        .dev-contact-pill b {
          color: #c084fc;
        }

        /* Limit Blocked View */
        .limit-block-view {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .limit-icon-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.35);
          color: #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }
        .limit-block-view h3 {
          font-size: clamp(18px, 2.4vw, 21px);
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 5px 0;
        }
        .limit-thanks {
          font-size: 13px;
          color: #c084fc;
          font-weight: 600;
          margin: 0 0 6px 0;
        }
        .limit-text {
          font-size: 12px;
          color: rgba(226, 238, 230, 0.75);
          margin: 0 0 14px 0;
          line-height: 1.45;
        }
        .blocked-date-badge {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 7px 12px;
          margin-bottom: 14px;
          font-size: 11.5px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .blocked-date-badge span {
          color: rgba(226, 238, 230, 0.5);
          font-size: 9.5px;
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }
        .blocked-date-badge b {
          color: #fbbf24;
          font-family: 'DM Mono', monospace;
        }
        .btn-feedback-primary {
          width: 100%;
          padding: 10px 16px;
          background: #c084fc;
          color: #0b120e;
          border: none;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          margin-bottom: 8px;
        }
        .btn-feedback-primary:hover {
          background: #d8b4fe;
        }
        .btn-link {
          background: none;
          border: none;
          color: rgba(226, 238, 230, 0.55);
          font-size: 11px;
          cursor: pointer;
          text-decoration: underline;
        }
        .btn-link:hover {
          color: #e2eee6;
        }
      `}</style>
    </div>
  );
}
