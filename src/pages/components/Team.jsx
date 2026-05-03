import gsap from "gsap";
import { useEffect, useRef } from "react";
import { TEAM } from "../../utils/Constants";

function Team() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current.querySelectorAll(".team-card"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      }
    );
  }, []);

  return (
    <section id="team" ref={ref} className="py-[110px] bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-tag mb-3">Kenali Tim Ahli Kami</div>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-light text-[#2A2F2B]">
            Arsitek <em className="text-[#8BAF9A]">Senyum Anda</em>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
          {TEAM.map((m) => (
            <div
              key={m.name}
              className="team-card bg-white rounded-[20px] p-8 text-center border border-[#8BAF9A]/12 opacity-0"
            >
              {/* Avatar */}
              <div
                className={`w-22 h-22 mx-auto mb-5 rounded-full flex items-center justify-center border-2 ${
                  m.color === "#8BAF9A"
                    ? "bg-[#8BAF9A]/15 border-[#8BAF9A]/30"
                    : "bg-[#C9A96E]/15 border-[#C9A96E]/30"
                }`}
              >
                <span
                  className="font-display text-[26px] font-normal"
                  style={{
                    color: m.color === "#8BAF9A" ? "#8BAF9A" : "#8B6534",
                  }}
                >
                  {m.initials}
                </span>
              </div>

              {/* Nama & Jabatan */}
              <h3 className="text-[18px] font-semibold text-[#2A2F2B] mb-1">
                {m.name}
              </h3>
              <p className="text-[13px] font-medium text-[#8BAF9A] mb-3">
                {m.role}
              </p>

              {/* Pengalaman */}
              <div className="inline-flex items-center gap-1.5 bg-[#2A2F2B]/5 rounded-full px-3 py-1">
                <svg viewBox="0 0 20 20" fill="#FFDFAE" className="w-3 h-3">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-[12px] text-[#2A2F2B]/60 font-medium">
                  {m.exp} pengalaman
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
