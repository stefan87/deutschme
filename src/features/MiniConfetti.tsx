import { useEffect, useState } from "react";

// Small celebration after a correct answer. No dependencies.
export default function MiniConfetti({ active }: { active: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!active) {
      setVisible(false);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setVisible(true);
    const timer = window.setTimeout(() => setVisible(false), 950);
    return () => window.clearTimeout(timer);
  }, [active]);

  if (!visible) return null;
  const colors = ["#00e5e5", "#8ffff5", "#f9ce57", "#ffffff", "#4fa7ff"];
  return (
    <span className="dm-confetti" aria-hidden="true">
      {Array.from({ length: 14 }, (_, i) => (
        <span
          key={i}
          className="dm-confetti-piece"
          style={{
            backgroundColor: colors[i % colors.length],
            left: `${8 + (i * 37) % 85}%`,
            animationDelay: `${(i % 5) * 38}ms`,
            transform: `rotate(${i * 31}deg)`,
          }}
        />
      ))}
    </span>
  );
}
