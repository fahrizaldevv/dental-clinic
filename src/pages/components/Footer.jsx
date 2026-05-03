import { SERVICES } from "../../utils/Constants";

function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] text-[rgba(248,244,239,0.6)] py-[60px] pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3.5">
              <div
                className="flex items-center justify-center rounded-[7px]"
                style={{
                  width: 32,
                  height: 32,
                  background: "var(--sage)",
                }}
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5 5.5 3.5 3.5 2 2 2 2 8 6 11 12 16c6-5 10-8 10-14-1.5 0-3.5 1.5-4.5 3.5C16.5 3.5 14.5 2 12 2z" />
                </svg>
              </div>
              <span
                className="font-display text-[18px] font-medium"
                style={{ color: "var(--cream)" }}
              >
                PearlSmile Dental
              </span>
            </div>
            <p
              className="text-[14px] leading-[1.75] max-w-[300px]"
              style={{ color: "rgba(248,244,239,0.45)" }}
            >
              Tujuan utama perawatan gigi di Jakarta. Membuat senyum bercahaya
              dengan presisi, seni, dan perhatian tulus sejak 2006.
            </p>
          </div>

          <div>
            <h4
              className="text-[12px] font-semibold uppercase mb-4"
              style={{ letterSpacing: "0.1em", color: "rgba(248,244,239,0.5)" }}
            >
              Layanan
            </h4>
            {SERVICES.map((s) => (
              <a
                key={s.title}
                href="#services"
                className="block text-[14px] mb-2"
                style={{
                  color: "rgba(248,244,239,0.5)",
                  textDecoration: "none",
                }}
              >
                {s.title}
              </a>
            ))}
          </div>

          <div>
            <h4
              className="text-[12px] font-semibold uppercase mb-4"
              style={{ letterSpacing: "0.1em", color: "rgba(248,244,239,0.5)" }}
            >
              Perusahaan
            </h4>
            {[
              "Tentang Kami",
              "Tim Kami",
              "Testimoni",
              "Karir",
              "Kebijakan Privasi",
            ].map((l) => (
              <a
                key={l}
                href="#"
                className="block text-[14px] mb-2"
                style={{
                  color: "rgba(248,244,239,0.5)",
                  textDecoration: "none",
                }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        <div
          className="border-t"
          style={{
            borderColor: "rgba(248,244,239,0.08)",
            paddingTop: 24,
          }}
        >
          <div className="flex flex-wrap justify-between items-center gap-3">
            <p
              className="text-[13px]"
              style={{ color: "rgba(248,244,239,0.3)" }}
            >
              © 2026 PearlSmile Dental. Semua hak dilindungi.
            </p>
            <div className="flex gap-4">
              {["Instagram", "Facebook", "WhatsApp"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-[13px] transition-colors duration-200"
                  style={{ color: "rgba(248,244,239,0.4)" }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--sage-l)")}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgba(248,244,239,0.4)")
                  }
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
