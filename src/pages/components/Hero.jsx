import gsap from "gsap";
import { useEffect, useRef } from "react";
import PromoCarousel from "./PromoCarousel";

function Hero() {
  const ref = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo(
      badgeRef.current,
      { opacity: 0, y: -16 },
      { opacity: 1, y: 0, duration: 0.6 }
    )
      .fromTo(
        titleRef.current.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 },
        "-=0.2"
      )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.4"
      )
      .fromTo(
        ctaRef.current.children,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
        "-=0.3"
      );

    gsap.to(".tooth-float", {
      y: -16,
      duration: 3.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      ref={ref}
      className="min-h-screen bg-[var(--warm-w)] relative flex items-center overflow-hidden pt-20"
    >
      {/* Decorative shapes */}
      <div className="absolute right-[8%] top-[20%] w-[220px] h-[220px] bg-[var(--sage-l)] rounded-[60%_40%_55%_45%/50%_60%_40%_50%] tooth-float" />
      <div className="absolute right-[14%] bottom-[15%] w-[80px] h-[80px] bg-[var(--gold-l)] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            {/* Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 bg-[rgba(139,175,154,0.12)] border border-[rgba(94,132,112,0.2)] rounded-full px-4 py-1.5 mb-7 opacity-0"
            >
              <div className="w-[7px] h-[7px] rounded-full bg-[var(--sage-d)]" />
              <span className="text-[12px] font-medium tracking-widest text-[var(--sage-d)]">
                DIPERCAYA SEJAK 2006
              </span>
            </div>

            {/* Title */}
            <h1
              ref={titleRef}
              className="font-display text-[clamp(3.2rem,6vw,5.5rem)] font-light leading-[1.08] tracking-[-0.02em] text-[var(--charcoal)] mb-6"
            >
              <div>Menciptakan</div>
              <div className="italic text-[var(--sage-d)]">Senyum</div>
              <div>Indah</div>
            </h1>

            {/* Subtitle */}
            <p
              ref={subRef}
              className="text-[16px] leading-[1.75] text-[rgba(42,47,43,0.65)] max-w-[460px] mb-9 opacity-0"
            >
              Perpaduan antara seni dan presisi dalam dunia kedokteran gigi.
              Kami menggabungkan teknologi modern dengan perhatian tulus untuk
              menciptakan senyum yang mampu mengubah hidup Anda.
            </p>

            {/* CTA */}
            <div ref={ctaRef} className="flex gap-3 flex-wrap items-center">
              <a
                href="#contact"
                className="px-[30px] py-[14px] rounded-[7px] text-[14px] font-medium bg-[var(--sage-d)] text-white hover:opacity-90 transition"
              >
                Booking Konsultasi Gratis
              </a>
              <a
                href="#services"
                className="px-[30px] py-[14px] rounded-[7px] text-[14px] font-medium border border-[var(--sage-d)] text-[var(--sage-d)] hover:bg-[var(--sage-d)] hover:text-white transition"
              >
                Layanan Kami
              </a>
            </div>

            {/* Stats */}
            <div
              className="flex gap-8 mt-11 pt-9 border-t border-[rgba(42,47,43,0.1)] opacity-0"
              ref={(el) =>
                el &&
                gsap.fromTo(
                  el,
                  { opacity: 0 },
                  { opacity: 1, duration: 0.8, delay: 1.4 }
                )
              }
            >
              {[
                ["12k+", "Pasien"],
                ["98%", "Kepuasan"],
                ["18+", "Tahun"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-[28px] font-semibold text-[var(--charcoal)] leading-none">
                    {v}
                  </div>
                  <div className="text-[12px] text-[rgba(42,47,43,0.5)] mt-1">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative block">
            <PromoCarousel />

            {/* Review badge */}
            <div className="absolute -bottom-4 -left-5 bg-white rounded-xl px-4 py-3 shadow-[0_16px_40px_rgba(42,47,43,0.12)] flex items-center gap-2 z-20">
              <div className="flex gap-[2px]">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 20 20"
                    className="w-3 h-3 fill-[#C9A96E]"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div>
                <div className="text-[12px] font-semibold text-[var(--charcoal)]">
                  4.97 / 5.0
                </div>
                <div className="text-[10px] text-[rgba(42,47,43,0.5)]">
                  Google Reviews
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="absolute -top-4 -right-3 bg-white rounded-xl px-4 py-2.5 shadow-[0_12px_36px_rgba(42,47,43,0.1)] flex items-center gap-2 z-20">
              <div className="w-8 h-8 rounded-full bg-[rgba(139,175,154,0.12)] flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-[var(--sage-d)]"
                >
                  <path d="M12 2C..." />
                </svg>
              </div>
              <div>
                <div className="text-[11px] font-semibold text-[var(--charcoal)]">
                  Jadwal Tersedia
                </div>
                <div className="text-[10px] text-[var(--sage-d)] font-medium">
                  Hari ini · 11:30
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="text-[10px] tracking-[0.15em] uppercase text-[rgba(42,47,43,0.35)] font-medium">
          Gulir
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[rgba(42,47,43,0.3)] to-transparent" />
      </div>
    </section>
  );
}

export default Hero;
