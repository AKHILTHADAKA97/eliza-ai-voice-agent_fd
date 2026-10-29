import { useState, useEffect } from "react";
import { Star, CheckCircle2, AlertCircle, Send, X, ArrowLeft, Phone, Briefcase } from "lucide-react";
import { accessApi } from "../services/accessApi.js";

const CATEGORIES = [
  "Voice Experience",
  "Answer Quality",
  "Freelance",
  "Bug",
  "Feature Request",
  "Other",
];

export default function FeedbackForm({ email, onClose, onSubmitted }) {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [category, setCategory] = useState("Voice Experience");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {}
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cleanMsg = message.trim();
    if (!cleanMsg || cleanMsg.length < 10) {
      setError("Please share at least 10 characters of feedback.");
      return;
    }
    if (cleanMsg.length > 2000) {
      setError("Feedback message must not exceed 2000 characters.");
      return;
    }

    setError("");
    setSubmitting(true);

    try {
      await accessApi.submitFeedback({
        rating,
        category,
        message: cleanMsg,
      });
      setSuccess(true);
      if (onSubmitted) onSubmitted();
    } catch (err) {
      setError(err.message || "Failed to submit feedback. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="feedback-modal-overlay" role="dialog" aria-modal="true">
      <div className="feedback-card">
        <div className="feedback-top">
          <div className="feedback-badge">FEEDBACK &amp; REVIEW</div>
          {onClose && (
            <button className="btn-close" onClick={onClose} aria-label="Close">
              <X size={16} />
            </button>
          )}
        </div>

        {success ? (
          <div className="feedback-success-state">
            <div className="success-icon-wrap">
              <CheckCircle2 size={38} />
            </div>
            <h3>Thank you for your feedback!</h3>
            <p>
              Your review has been saved in the database and helps us continuously refine Eliza AI.
            </p>
            <p className="note-restriction">
              The 20-day limit period remains active on your email until the scheduled expiration date.
            </p>

            <div className="developer-showcase-box" style={{ marginTop: "14px" }}>
              <div className="dev-box-top">
                <Briefcase size={12} className="dev-icon" />
                <span>DEVELOPED BY AKHIL THADAKA</span>
              </div>
              <p>
                Full-Stack &amp; AI Voice Developer · Ready to work immediately · Available for freelance projects &amp; better opportunities.
              </p>
              <a href="tel:9121751697" className="dev-contact-pill">
                <Phone size={11} />
                <span>Contact: <b>9121751697</b></span>
              </a>
            </div>

            {onClose && (
              <button type="button" className="btn-submit-action" onClick={onClose} style={{ marginTop: "14px" }}>
                Done
              </button>
            )}
          </div>
        ) : (
          <>
            <div className="feedback-intro">
              <h3>We appreciate your review</h3>
              <p>Tell us how your conversation went and what we can improve.</p>
            </div>

            <form onSubmit={handleSubmit} className="feedback-form">
              {/* Verified Session Email */}
              <div className="form-group">
                <label>Verified Account Email</label>
                <input
                  type="email"
                  value={email || ""}
                  disabled
                  className="input-disabled"
                />
              </div>

              {/* Star Rating */}
              <div className="form-group">
                <label>Rating</label>
                <div className="star-rating-row" role="radiogroup" aria-label="Rating from 1 to 5 stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      className="star-btn"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      aria-label={`${star} star`}
                    >
                      <Star
                        size={20}
                        className={`star-icon ${
                          star <= (hoverRating || rating) ? "filled" : "empty"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="rating-text">
                    {rating === 5 && "Excellent"}
                    {rating === 4 && "Good"}
                    {rating === 3 && "Fair"}
                    {rating === 2 && "Needs work"}
                    {rating === 1 && "Poor"}
                  </span>
                </div>
              </div>

              {/* Category */}
              <div className="form-group">
                <label htmlFor="category-select">Category</label>
                <select
                  id="category-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="select-category"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="feedback-message">
                  <span>Your feedback</span>
                  <small>{message.length}/2000</small>
                </label>
                <textarea
                  id="feedback-message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="Share details on your conversation, voice quality, or ideas..."
                  rows={3}
                  maxLength={2000}
                  required
                />
              </div>

              {error && (
                <div className="error-alert">
                  <AlertCircle size={14} />
                  <span>{error}</span>
                </div>
              )}

              <div className="form-actions">
                {onClose && (
                  <button type="button" className="btn-back" onClick={onClose}>
                    <ArrowLeft size={13} />
                    <span>Cancel</span>
                  </button>
                )}
                <button
                  type="submit"
                  className="btn-submit-action"
                  disabled={submitting || !message.trim()}
                >
                  {submitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Submit Feedback</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Developer Showcase Box (Image 2 Replacement) */}
            <div className="developer-showcase-box" style={{ marginTop: "12px" }}>
              <div className="dev-box-top">
                <Briefcase size={12} className="dev-icon" />
                <span>DEVELOPED BY AKHIL THADAKA</span>
              </div>
              <p>
                Full-Stack &amp; AI Voice Developer · Ready to work immediately · Available for freelance projects &amp; better opportunities.
              </p>
              <a href="tel:9121751697" className="dev-contact-pill">
                <Phone size={11} />
                <span>Contact: <b>9121751697</b></span>
              </a>
            </div>
          </>
        )}
      </div>

      <style>{`
        .feedback-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(8, 13, 11, 0.92);
          backdrop-filter: blur(16px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px;
          z-index: 10000;
          font-family: 'Manrope', system-ui, -apple-system, sans-serif;
          color: #e2eee6;
          overflow: hidden;
        }
        .feedback-card {
          background: #0b120e;
          border: 1px solid rgba(192, 132, 252, 0.28);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), 0 0 35px rgba(192, 132, 252, 0.08);
          border-radius: 16px;
          max-width: 450px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          padding: clamp(14px, 2.5vh, 20px) clamp(14px, 2.5vw, 20px);
          position: relative;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }
        .feedback-card::-webkit-scrollbar {
          width: 5px;
        }
        .feedback-card::-webkit-scrollbar-thumb {
          background: rgba(192, 132, 252, 0.25);
          border-radius: 3px;
        }
        .feedback-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .feedback-badge {
          font-size: 9.5px;
          font-family: 'DM Mono', monospace;
          letter-spacing: 1.2px;
          color: #c084fc;
          background: rgba(192, 132, 252, 0.12);
          border: 1px solid rgba(192, 132, 252, 0.28);
          padding: 2px 7px;
          border-radius: 4px;
        }
        .btn-close {
          background: none;
          border: none;
          color: rgba(226, 238, 230, 0.6);
          cursor: pointer;
          padding: 3px;
          display: flex;
        }
        .btn-close:hover {
          color: #ffffff;
        }
        .feedback-intro h3 {
          font-size: clamp(16px, 2vw, 19px);
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 4px 0;
        }
        .feedback-intro p {
          font-size: clamp(11.5px, 1.4vw, 12.5px);
          color: rgba(226, 238, 230, 0.7);
          margin: 0 0 12px 0;
          line-height: 1.4;
        }
        .feedback-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .form-group label {
          font-size: 11px;
          font-weight: 600;
          color: rgba(226, 238, 230, 0.75);
          font-family: 'DM Mono', monospace;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          display: flex;
          justify-content: space-between;
        }
        .form-group label small {
          text-transform: none;
          color: rgba(226, 238, 230, 0.45);
        }
        .input-disabled {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 12.5px;
          color: rgba(226, 238, 230, 0.75);
          cursor: not-allowed;
        }
        .star-rating-row {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 2px 0;
        }
        .star-btn {
          background: none;
          border: none;
          padding: 2px;
          cursor: pointer;
          transition: transform 0.15s;
        }
        .star-btn:hover {
          transform: scale(1.12);
        }
        .star-icon.filled {
          fill: #fbbf24;
          color: #fbbf24;
        }
        .star-icon.empty {
          fill: transparent;
          color: rgba(226, 238, 230, 0.3);
        }
        .rating-text {
          margin-left: 6px;
          font-size: 12px;
          font-weight: 600;
          color: #c084fc;
        }
        .select-category, textarea {
          background: #080d0b;
          border: 1px solid rgba(192, 132, 252, 0.3);
          border-radius: 8px;
          padding: 8px 12px;
          color: #ffffff;
          font-size: 12.5px;
          outline: none;
          transition: border-color 0.2s;
          box-sizing: border-box;
          font-family: inherit;
        }
        .select-category:focus, textarea:focus {
          border-color: #c084fc;
          box-shadow: 0 0 0 2px rgba(192, 132, 252, 0.15);
        }
        textarea {
          resize: vertical;
          min-height: 65px;
          line-height: 1.4;
        }
        .form-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 4px;
        }
        .btn-back {
          padding: 9px 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: #e2eee6;
          font-size: 12.5px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .btn-submit-action {
          flex: 1;
          padding: 10px 18px;
          background: #c084fc;
          color: #080d0b;
          border: none;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.2s;
        }
        .btn-submit-action:hover:not(:disabled) {
          background: #d8b4fe;
        }
        .btn-submit-action:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .error-alert {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.35);
          border-radius: 7px;
          padding: 6px 10px;
          color: #fca5a5;
          font-size: 11.5px;
        }
        .feedback-success-state {
          text-align: center;
          padding: 12px 0 6px 0;
        }
        .success-icon-wrap {
          color: #78f6a8;
          margin-bottom: 10px;
        }
        .feedback-success-state h3 {
          font-size: clamp(17px, 2.2vw, 20px);
          color: #ffffff;
          margin: 0 0 6px 0;
        }
        .feedback-success-state p {
          font-size: 12.5px;
          color: rgba(226, 238, 230, 0.75);
          line-height: 1.45;
          margin: 0 0 8px 0;
        }
        .note-restriction {
          font-size: 11px;
          color: rgba(226, 238, 230, 0.5);
          background: rgba(255, 255, 255, 0.04);
          border-radius: 7px;
          padding: 8px 12px;
          margin-bottom: 12px !important;
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
