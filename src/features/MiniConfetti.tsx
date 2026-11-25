import { useEffect, useState } from "react";

const colors = ["#00e5e5", "#a6fff8", "#ffd66b", "#ffffff", "#5cafff"];

export default function MiniConfetti({ active }: { active: boolean }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!active) { setShow(false); return; }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setShow(true);
    const timer = window.setTimeout(() => setShow(false), 1400);
    return () => window.clearTimeout(timer);
  }, [active]);

  if (!show) return null;
  return (
    <div className="dm-celebration" aria-hidden="true">
      {Array.from({ length: 24 }, (_, i) => (
        <span
          key={i}
          className="dm-celebration-piece"
          style={{
            left: `${5 + ((i * 41) % 90)}%`,
            backgroundColor: colors[i % colors.length],
            animationDelay: `${(i % 6) * 35}ms`,
            ['--drift' as string]: `${(i % 2 ? 1 : -1) * (15 + (i * 11) % 55)}px`,
          }}
        />
      ))}
    </div>
  );
}
