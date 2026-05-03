import { useEffect, useRef, useState } from "react";
import { STATS } from "../../utils/Constants";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Stats() {
  const ref = useRef(null);
  const [triggered, setTriggered] = useState(false);
  const [counts, setCounts] = useState(STATS.map(() => 0));

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ref.current,
      start: "top 80%",
      onEnter: () => {
        if (triggered) return;
        setTriggered(true);
        STATS.forEach((s, i) => {
          const dur = 1800;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / dur, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCounts((prev) => {
              const next = [...prev];
              next[i] = Math.round(ease * s.value);
              return next;
            });
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
    });
  }, []);

  return (
    <section
      ref={ref}
      style={{ background: "var(--charcoal)", padding: "80px 0" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 40,
            textAlign: "center",
          }}
        >
          {STATS.map((s, i) => (
            <div key={s.label}>
              <div
                className="font-display stat-num"
                style={{
                  fontSize: "clamp(2.8rem,4vw,4rem)",
                  fontWeight: 300,
                  lineHeight: 1,
                  color: "var(--cream)",
                  marginBottom: 8,
                }}
              >
                {counts[i].toLocaleString()}
                {s.suffix}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "rgba(248,244,239,0.45)",
                  fontWeight: 400,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
