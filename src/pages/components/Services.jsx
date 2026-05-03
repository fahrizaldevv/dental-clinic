import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { SERVICES } from "../../utils/Constants";

function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = sectionRef.current.querySelectorAll(".service-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-[110px] bg-[var(--cream)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="mb-3 text-[12px] tracking-widest text-[var(--sage-d)] font-medium">
            LAYANAN KAMI
          </div>

          <h2 className="font-display text-[clamp(2.4rem,4vw,3.4rem)] font-light text-[var(--charcoal)] tracking-[-0.02em] leading-[1.15]">
            Perawatan <em className="text-[var(--sage-d)]">Gigi</em> Menyeluruh
          </h2>

          <p className="mt-4 text-[16px] text-[rgba(42,47,43,0.55)] max-w-[480px] mx-auto">
            Dari pembersihan rutin hingga transformasi senyum total, kami
            menangani seluruh kebutuhan kesehatan gigi Anda.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="service-card bg-white rounded-2xl border border-[rgba(139,175,154,0.12)] overflow-hidden opacity-0 group cursor-pointer hover:shadow-lg transition"
            >
              {/* IMAGE */}
              <div className="w-full h-[180px] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                {/* TOP */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-[rgba(139,175,154,0.1)] flex items-center justify-center">
                    <div className="text-[var(--sage-d)]">{s.icon}</div>
                  </div>

                  <span
                    className={`text-[11px] font-medium tracking-wide px-3 py-1 rounded-full ${
                      s.color === "#8BAF9A"
                        ? "bg-[rgba(139,175,154,0.12)] text-[var(--sage-d)]"
                        : "bg-[rgba(201,169,110,0.12)] text-[#8B6534]"
                    }`}
                  >
                    {s.tag}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-[18px] font-medium text-[var(--charcoal)] mb-2 tracking-[-0.01em]">
                  {s.title}
                </h3>

                {/* DESC */}
                <p className="text-[14px] leading-[1.7] text-[rgba(42,47,43,0.55)]">
                  {s.desc}
                </p>

                {/* CTA */}
                {/* <div className="mt-5 flex items-center gap-2 text-[var(--sage-d)] text-[13px] font-medium">
                  Pelajari lebih lanjut
                  <svg
                    viewBox="0 0 20 20"
                    className="w-[14px] h-[14px] fill-current"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
