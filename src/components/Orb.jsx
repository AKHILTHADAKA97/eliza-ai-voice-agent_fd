import { motion } from "framer-motion";

export default function Orb({ status }) {
  const speaking = status === "speaking";
  const listening = status === "listening";
  const thinking = status === "thinking";
  return (
    <div className={`orb-stage ${speaking ? "is-speaking" : ""} ${listening ? "is-listening" : ""} ${thinking ? "is-thinking" : ""}`} aria-label={`AI status: ${status}`}>
      <motion.div className="orb-ring ring-outer" animate={{ rotate: thinking ? 360 : -18 }} transition={{ duration: thinking ? 7 : 24, repeat: Infinity, ease: "linear" }} />
      <motion.div className="orb-ring ring-mid" animate={{ rotate: thinking ? -360 : 24, scale: speaking ? [1, 1.04, 1] : 1 }} transition={{ duration: speaking ? 0.7 : 18, repeat: Infinity, ease: "linear" }} />
      <div className="orb-core">
        <div className="orb-grid" />
        <div className="orb-wave" aria-hidden="true">
          {[10, 18, 28, 16, 34, 21, 12, 26, 17, 32, 13, 22, 10].map((h, i) => (
            <motion.span key={i} animate={speaking ? { height: [h, h * 1.7, h * 0.65, h] } : listening ? { height: [h, h * 1.35, h] } : { height: h * 0.65 }} transition={{ duration: 0.6 + (i % 4) * 0.12, repeat: Infinity, delay: i * 0.025 }} />
          ))}
        </div>
      </div>
      <span className="orb-dot dot-top" /><span className="orb-dot dot-right" /><span className="orb-dot dot-bottom" /><span className="orb-dot dot-left" />
    </div>
  );
}
