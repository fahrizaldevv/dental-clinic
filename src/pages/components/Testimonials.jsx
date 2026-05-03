import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "../../utils/Constants";
import StarRating from "./StarRating";

function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      }
    );
  }, []);

  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);
  const prev = () =>
    setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-[110px] bg-[var(--warm-w)] overflow-hidden opacity-0"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-tag mb-3">Cerita Pasien</div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2.2rem,4vw,3.2rem)",
              fontWeight: 300,
              color: "var(--charcoal)",
              letterSpacing: "-0.02em",
            }}
          >
            Kehidupan <em style={{ color: "var(--sage-d)" }}>Berubah</em>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-[680px] mx-auto relative">
          <div
            className="bg-white rounded-[20px] relative"
            style={{
              padding: "44px 44px",
              border: "1px solid rgba(139,175,154,0.15)",
              boxShadow: "0 20px 60px rgba(42,47,43,0.07)",
            }}
          >
            {/* Quote */}
            <div
              className="font-display absolute top-5 right-8 font-light select-none"
              style={{
                fontSize: 80,
                lineHeight: 1,
                color: "rgba(139,175,154,0.15)",
              }}
            >
              ❝
            </div>

            {/* Star Rating */}
            <StarRating count={TESTIMONIALS[active].rating} />

            {/* Testimonial Text */}
            <p
              className="mt-5 mb-7 italic font-serif font-light text-sm"
              style={{
                lineHeight: 1.75,
                color: "var(--charcoal)",
              }}
            >
              "{TESTIMONIALS[active].text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center rounded-full"
                style={{
                  width: 46,
                  height: 46,
                  background: "var(--sage-l)",
                }}
              >
                <span
                  className="font-display"
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: "var(--sage-d)",
                  }}
                >
                  {TESTIMONIALS[active].initials}
                </span>
              </div>
              <div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--charcoal)",
                  }}
                >
                  {TESTIMONIALS[active].name}
                </div>
                <div style={{ fontSize: 13, color: "rgba(42,47,43,0.5)" }}>
                  {TESTIMONIALS[active].role}
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Prev */}
            <button
              onClick={prev}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white border transition-all"
              style={{ borderColor: "rgba(42,47,43,0.15)" }}
            >
              <svg
                viewBox="0 0 20 20"
                fill="var(--charcoal)"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all ${
                    i === active
                      ? "w-6 bg-[var(--charcoal)] h-1.5"
                      : "w-1.5 bg-[rgba(42,47,43,0.2)] h-1.5"
                  }`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white border transition-all"
              style={{ borderColor: "rgba(42,47,43,0.15)" }}
            >
              <svg
                viewBox="0 0 20 20"
                fill="var(--charcoal)"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
