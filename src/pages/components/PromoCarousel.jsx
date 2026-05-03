import { useCallback, useEffect, useRef, useState } from "react";
import { PROMO_SLIDES } from "../../utils/Constants";

function PromoCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef(null);
  const total = PROMO_SLIDES.length;

  const goTo = useCallback((idx) => {
    setActive(idx);
    setProgressKey((k) => k + 1);
  }, []);

  const next = useCallback(
    () => goTo((active + 1) % total),
    [active, total, goTo]
  );
  const prev = useCallback(
    () => goTo((active - 1 + total) % total),
    [active, total, goTo]
  );

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => next(), 5000);
    return () => clearTimeout(timerRef.current);
  }, [active, paused, next]);

  return (
    <div
      className="promo-carousel relative w-full max-h-[480px] overflow-hidden select-none"
      style={{ aspectRatio: "4/3" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Track */}
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {PROMO_SLIDES.map((s) => (
          <div key={s.id} className="flex-shrink-0 w-full h-full relative">
            <img
              src={s.image}
              alt={`Promo ${s.id}`}
              className="w-full h-full object-cover"
            />

            {/* Optional: overlay gradient for style */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.2), transparent)",
              }}
            />

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20">
              {!paused && (
                <div
                  key={`${progressKey}-${s.id}`}
                  className="h-full bg-[var(--sage)]"
                  style={{ width: 0 }}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Nav arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2"
      >
        <svg
          viewBox="0 0 16 16"
          fill="none"
          stroke="white"
          strokeWidth="2"
          className="w-3.5 h-3.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 4L6 8l4 4"
          />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2"
      >
        <svg
          viewBox="0 0 16 16"
          fill="none"
          stroke="white"
          strokeWidth="2"
          className="w-3.5 h-3.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 4l4 4-4 4" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 items-center">
        {PROMO_SLIDES.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-200 rounded-full`}
            style={{
              width: i === active ? 22 : 6,
              height: 6,
              background:
                i === active ? "var(--sage)" : "rgba(255,255,255,0.35)",
            }}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-3 right-3 bg-black/35 backdrop-blur rounded-full px-2.5 py-1 text-[11px] text-white/70 font-medium z-10 tracking-[0.05em]">
        {active + 1} / {total}
      </div>
    </div>
  );
}

export default PromoCarousel;
