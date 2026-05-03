import gsap from "gsap";
import { useEffect, useRef } from "react";
import StarRating from "./StarRating";

function About() {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current.querySelectorAll(".about-reveal");
    gsap.fromTo(
      els,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      }
    );
  }, []);

  const pillars = [
    [
      "Minimally Invasif",
      "Kami mempertahankan sebanyak mungkin struktur gigi asli.",
    ],
    [
      "Protokol Sterilisasi",
      "Sterilisasi standar rumah sakit pada setiap alat, setiap saat.",
    ],
    [
      "Harga Transparan",
      "Tidak ada biaya tersembunyi. Anda tahu biayanya sebelum prosedur dimulai.",
    ],
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden py-[110px] bg-[var(--warm-w)]"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Kiri — visual */}
        <div className="relative h-[500px]">
          <div className="absolute top-0 left-0 right-[10%] bottom-[10%] bg-[#EBF3EA] rounded-[24px] flex items-center justify-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Klinik Gigi"
              className="absolute inset-0 w-full h-full object-cover rounded-[24px]"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#8BAF9A]/30 to-[#5E8470]/50" />
            {/* Elemen dekoratif */}
            <div className="absolute top-6 left-6 bg-white rounded-xl px-4 py-3 shadow-[0_8px_30px_rgba(42,47,43,0.12)]">
              <div className="text-[11px] text-gray-400 font-medium mb-1">
                JANJI HARI INI
              </div>
              <div className="font-display text-2xl font-semibold text-[#2A2F2B]">
                24
              </div>
            </div>
            <div className="absolute bottom-6 right-6 bg-white rounded-xl px-4 py-3 shadow-[0_8px_30px_rgba(42,47,43,0.12)] flex flex-col items-end">
              <div className="text-[11px] text-gray-400 font-medium mb-1">
                RATING PASIEN
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-xl font-semibold text-[#2A2F2B]">
                  4.97
                </span>
                <StarRating count={5} />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-[55%] h-[45%] bg-[#FFDFAE]/60 rounded-lg z-0" />
        </div>

        {/* Kanan — konten */}
        <div>
          <div className="section-tag about-reveal mb-3.5 opacity-0">
            Cerita Kami
          </div>
          <h2 className="font-display about-reveal text-[clamp(2rem,3.5vw,3rem)] font-light text-[#2A2F2B] leading-[1.18] mb-5 opacity-0">
            Perawatan Presisi,
            <br />
            <em className="text-[#8BAF9A]">Sentuhan Manusia</em>
          </h2>
          <p className="about-reveal text-[15px] leading-7 text-gray-600 mb-4 opacity-0">
            Didirikan pada tahun 2006, PearlSmile lahir dari keyakinan
            sederhana: setiap orang berhak memiliki senyum yang membanggakan.
            Bermula sebagai praktik kecil di Jakarta Pusat, kini telah menjadi
            tujuan gigi paling terpercaya di kota ini.
          </p>
          <p className="about-reveal text-[15px] leading-7 text-gray-600 mb-8 opacity-0">
            Kami berinvestasi dalam teknologi terbaru — X-ray digital,
            pemindaian 3D, laser dentistry — sehingga prosedur lebih cepat,
            presisi, dan hampir tanpa rasa sakit. Namun teknologi hanya sebaik
            tangan yang menggunakannya.
          </p>

          {/* Pilar */}
          <div className="about-reveal flex flex-col gap-4 opacity-0">
            {pillars.map(([title, desc]) => (
              <div key={title} className="flex gap-3.5 items-start">
                <div className="w-5 h-5 min-w-[22px] rounded-full bg-[#8BAF9A] flex items-center justify-center mt-1">
                  <svg
                    viewBox="0 0 20 20"
                    fill="white"
                    className="w-[11px] h-[11px]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-[#2A2F2B] mb-0.5">
                    {title}
                  </div>
                  <div className="text-[13px] text-gray-500 leading-6">
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
