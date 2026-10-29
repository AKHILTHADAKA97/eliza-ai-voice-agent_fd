import { useEffect, useState, useCallback, useRef } from "react";
import EmailGate from "./pages/EmailGate.jsx";
import LimitExceeded from "./pages/LimitExceeded.jsx";
import FeedbackForm from "./pages/FeedbackForm.jsx";
import App from "./App.jsx";
import {
  accessApi,
  getStoredToken,
  getStoredEmail,
  clearAccessSession,
} from "./services/accessApi.js";

export default function AppWrapper() {
  const [sessionLoading, setSessionLoading] = useState(true);
  const [accessData, setAccessData] = useState({
    isAnonymousFree: true,
    remainingQuestions: 3,
    remaining_questions: 3,
    blocked: false,
    email: "",
  });
  const [showEmailGateModal, setShowEmailGateModal] = useState(false);
  const [pendingQuestionText, setPendingQuestionText] = useState("");
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [showLimitModal, setShowLimitModal] = useState(false);
  const [freeQuestionsCount, setFreeQuestionsCount] = useState(() => {
    try {
      return Number(sessionStorage.getItem("eliza_free_q_count") || "0");
    } catch {
      return 0;
    }
  });

  const appRef = useRef(null);

  const initSession = useCallback(async () => {
    const token = getStoredToken();
    const email = getStoredEmail();

    if (!token || !email) {
      setAccessData({
        isAnonymousFree: true,
        remainingQuestions: Math.max(0, 3 - freeQuestionsCount),
        remaining_questions: Math.max(0, 3 - freeQuestionsCount),
        blocked: false,
        email: "",
      });
      setSessionLoading(false);
      return;
    }

    try {
      const status = await accessApi.getStatus();
      setAccessData({
        ...status,
        email,
        isAnonymousFree: false,
      });
      if (status.blocked || status.remainingQuestions <= 0) {
        setShowLimitModal(true);
      }
    } catch {
      clearAccessSession();
      setAccessData({
        isAnonymousFree: true,
        remainingQuestions: Math.max(0, 3 - freeQuestionsCount),
        remaining_questions: Math.max(0, 3 - freeQuestionsCount),
        blocked: false,
        email: "",
      });
    } finally {
      setSessionLoading(false);
    }
  }, [freeQuestionsCount]);

  useEffect(() => {
    initSession();

    // Check for returning Google OAuth token in hash: #access_token=...
    const hash = typeof window !== "undefined" ? window.location.hash || "" : "";
    if (hash.includes("access_token=")) {
      const params = new URLSearchParams(hash.replace(/^#/, ""));
      const accessToken = params.get("access_token");
      if (accessToken) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
        setSessionLoading(true);
        fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
          .then((r) => r.json())
          .then(async (googleUser) => {
            if (googleUser && googleUser.email) {
              const result = await accessApi.googleLogin({
                email: googleUser.email,
                name: googleUser.name,
                picture: googleUser.picture,
              });
              const savedPending = sessionStorage.getItem("eliza_pending_q") || "";
              sessionStorage.removeItem("eliza_pending_q");
              handleAccessGranted(result, savedPending);
            }
          })
          .catch((err) => {
            console.error("Failed to verify Google email:", err);
          })
          .finally(() => {
            setSessionLoading(false);
          });
      }
    }
  }, [initSession]);

  const handleAccessGranted = (verifiedData, pendingText) => {
    setShowEmailGateModal(false);
    setAccessData({
      ...verifiedData,
      isAnonymousFree: false,
    });

    if (verifiedData.blocked || verifiedData.remainingQuestions <= 0) {
      setShowLimitModal(true);
      return;
    }

    // If there was a question queued when email was prompted, trigger submission
    if (pendingText && appRef.current?.sendPendingMessage) {
      setTimeout(() => {
        appRef.current.sendPendingMessage(pendingText);
      }, 100);
      setPendingQuestionText("");
    }
  };

  const handleQuestionUsed = (remaining, blocked, blockedUntil) => {
    const isNowBlocked = blocked || remaining <= 0;

    setAccessData((prev) => ({
      ...prev,
      remainingQuestions: remaining,
      remaining_questions: remaining,
      blocked: isNowBlocked,
      blockedUntil: blockedUntil || prev?.blockedUntil,
    }));

    // If anonymous question 1 was just used
    if (!getStoredToken()) {
      const nextCount = freeQuestionsCount + 1;
      setFreeQuestionsCount(nextCount);
      try {
        sessionStorage.setItem("eliza_free_q_count", String(nextCount));
      } catch {}
    }

    // When 3rd question is completed (quota exhausted), immediately show Limit and Feedback modal
    if (isNowBlocked) {
      setShowLimitModal(true);
      setShowFeedbackModal(true);
    }
  };

  const handleRequestEmailGate = (text) => {
    setPendingQuestionText(text);
    setShowEmailGateModal(true);
  };

  if (sessionLoading) {
    return (
      <div className="app-init-loader">
        <div className="init-spinner" />
        <span>Initializing Neural Interface...</span>
        <style>{`
          .app-init-loader {
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
          .init-spinner {
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

  const isBlocked = accessData.blocked || accessData.remainingQuestions <= 0;

  return (
    <>
      {/* Voice Assistant App - 1st conversation is FREE for all users */}
      <App
        ref={appRef}
        accessData={accessData}
        freeQuestionsCount={freeQuestionsCount}
        onQuestionUsed={handleQuestionUsed}
        onRequestEmailGate={handleRequestEmailGate}
        onOpenFeedback={() => setShowFeedbackModal(true)}
      />

      {/* 2nd Question Trigger: Modal asks for email to continue trial */}
      {showEmailGateModal && (
        <EmailGate
          isModal={true}
          pendingQuestion={pendingQuestionText}
          onAccessGranted={handleAccessGranted}
          onShowFeedback={(info) => {
            setShowEmailGateModal(false);
            setAccessData(info);
            setShowFeedbackModal(true);
          }}
          onClose={() => setShowEmailGateModal(false)}
        />
      )}

      {/* After 3rd Question: Limit Exceeded Screen */}
      {isBlocked && showLimitModal && (
        <LimitExceeded
          blockedUntil={accessData.blockedUntil}
          onGiveFeedback={() => setShowFeedbackModal(true)}
        />
      )}

      {/* Feedback Review Modal */}
      {showFeedbackModal && (
        <FeedbackForm
          email={accessData.email || getStoredEmail() || "visitor@trial"}
          onClose={() => setShowFeedbackModal(false)}
          onSubmitted={() => {
            setShowFeedbackModal(false);
            if (isBlocked) setShowLimitModal(true);
          }}
        />
      )}
    </>
  );
}
