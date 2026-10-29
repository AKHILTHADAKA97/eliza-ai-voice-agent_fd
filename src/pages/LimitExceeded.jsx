import { Clock, MessageSquarePlus, Lock, Briefcase, Phone } from "lucide-react";

export default function LimitExceeded({ blockedUntil, onGiveFeedback }) {
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
    <div className="limit-exceeded-overlay" role="dialog" aria-modal="true" aria-labelledby="limit-title">
      <div className="limit-exceeded-modal">
        <div className="limit-icon-wrap">
          <Lock size={26} className="limit-icon" />
        </div>

        <h2 id="limit-title" className="limit-title">
          Your limit is over.
        </h2>

        <p className="limit-consideration">
          Thank you for your consideration.
        </p>

        <p className="limit-instructions">
          Please provide a review and feedback to help us improve.
        </p>

        <div className="limit-date-box">
          <div className="date-label">
            <Clock size={12} />
            <span>Next access cycle available</span>
          </div>
          <div className="date-val">{formatBlockDate(blockedUntil)}</div>
        </div>

        <button
          type="button"
          className="btn-give-feedback"
          onClick={onGiveFeedback}
        >
          <MessageSquarePlus size={16} />
          <span>Give Feedback</span>
        </button>

        {/* Developer Opportunity Showcase (Image 2 Replacement) */}
        <div className="developer-showcase-box">
          <div className="dev-box-top">
            <Briefcase size={12} className="dev-icon" />
            <span>DEVELOPED BY AKHIL THADAKA</span>
          </div>
          <p>
            Full-Stack &amp; AI Voice Developer · Actively searching for better opportunities, ready to work, and available for freelance projects.
          </p>
          <a href="tel:9121751697" className="dev-contact-pill">
            <Phone size={11} />
            <span>Contact: <b>9121751697</b></span>
          </a>
        </div>
      </div>

      <style>{`
        .limit-exceeded-overlay {
          position: fixed;
          inset: 0;
          background: rgba(8, 13, 11, 0.94);
          backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px;
          z-index: 9999;
          font-family: 'Manrope', system-ui, -apple-system, sans-serif;
          color: #e2eee6;
          overflow: hidden;
        }
        .limit-exceeded-modal {
          background: #0b120e;
          border: 1px solid rgba(192, 132, 252, 0.35);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), 0 0 35px rgba(192, 132, 252, 0.1);
          border-radius: 18px;
          padding: clamp(16px, 2.8vh, 24px) clamp(16px, 2.8vw, 24px);
          max-width: 430px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          animation: popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .limit-exceeded-modal::-webkit-scrollbar {
          width: 5px;
        }
        .limit-exceeded-modal::-webkit-scrollbar-thumb {
          background: rgba(192, 132, 252, 0.25);
          border-radius: 3px;
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .limit-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(192, 132, 252, 0.12);
          border: 1px solid rgba(192, 132, 252, 0.35);
          color: #c084fc;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px auto;
        }
        .limit-title {
          font-size: clamp(20px, 2.5vw, 23px);
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 6px 0;
          letter-spacing: -0.3px;
        }
        .limit-consideration {
          font-size: clamp(13px, 1.5vw, 14.5px);
          color: #e2eee6;
          margin: 0 0 4px 0;
          font-weight: 500;
        }
        .limit-instructions {
          font-size: clamp(11.5px, 1.4vw, 12.5px);
          color: rgba(226, 238, 230, 0.7);
          margin: 0 0 14px 0;
          line-height: 1.45;
        }
        .limit-date-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 10px;
          padding: 8px 12px;
          margin-bottom: 14px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .date-label {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          font-size: 10px;
          font-family: 'DM Mono', monospace;
          text-transform: uppercase;
          color: rgba(226, 238, 230, 0.5);
          letter-spacing: 0.5px;
        }
        .date-val {
          font-size: 12.5px;
          font-weight: 700;
          color: #c084fc;
        }
        .btn-give-feedback {
          width: 100%;
          padding: 11px 18px;
          background: #c084fc;
          color: #080d0b;
          border: none;
          border-radius: 10px;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          transition: all 0.2s;
          margin-bottom: 12px;
        }
        .btn-give-feedback:hover {
          background: #d8b4fe;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(192, 132, 252, 0.35);
        }

        /* Developer Showcase Box (Image 2 Replacement) */
        .developer-showcase-box {
          background: rgba(192, 132, 252, 0.06);
          border: 1px solid rgba(192, 132, 252, 0.22);
          border-radius: 10px;
          padding: 10px 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          text-align: left;
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
      `}</style>
    </div>
  );
}
