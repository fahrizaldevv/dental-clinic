import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { SERVICES } from "../../utils/Constants";

function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  useEffect(() => {
    gsap.fromTo(
      ref.current.querySelectorAll(".c-reveal"),
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      }
    );
  }, []);

  return (
    <section id="contact" ref={ref} className="py-[110px] bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <div className="section-tag c-reveal mb-3 opacity-0">
              Hubungi Kami
            </div>
            <h2
              className="font-display c-reveal opacity-0 mb-4"
              style={{
                fontSize: "clamp(2rem,3.5vw,3rem)",
                fontWeight: 300,
                color: "var(--charcoal)",
                letterSpacing: "-0.02em",
                lineHeight: 1.18,
              }}
            >
              Mulai Perjalanan
              <br />
              <em style={{ color: "var(--sage-d)" }}>Senymu</em>
            </h2>
            <p
              className="c-reveal opacity-0 mb-9"
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "rgba(42,47,43,0.6)",
              }}
            >
              Pesan konsultasi gratis dan temukan kemungkinan terbaik. Tim kami
              akan menjelaskan setiap opsi tanpa kewajiban.
            </p>

            {/* Info List */}
            <div className="c-reveal flex flex-col gap-5 opacity-0">
              {[
                ["Lokasi", "Jl. Sudirman No. 99, Jakarta 10220"],
                ["Telepon", "+62 21 555-0000"],
                ["Email", "hello@pearlsmile.id"],
                [
                  "Jam Operasional",
                  "Sen–Sab: 08:00–20:00 · Minggu: 09:00–15:00",
                ],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-3 items-start">
                  <div
                    className="flex items-center justify-center rounded-md"
                    style={{
                      width: 36,
                      height: 36,
                      background: "rgba(139,175,154,0.12)",
                      minWidth: 36,
                    }}
                  >
                    <div
                      className="rounded-full"
                      style={{
                        width: 8,
                        height: 8,
                        background: "var(--sage)",
                      }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        color: "var(--sage-d)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: 2,
                      }}
                    >
                      {label}
                    </div>
                    <div style={{ fontSize: 14, color: "var(--charcoal)" }}>
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            className="c-reveal bg-white rounded-[20px] opacity-0"
            style={{
              padding: 36,
              border: "1px solid rgba(139,175,154,0.15)",
              boxShadow: "0 20px 60px rgba(42,47,43,0.06)",
            }}
          >
            {sent ? (
              <div className="text-center py-10">
                <div
                  className="mx-auto mb-5 flex items-center justify-center rounded-full"
                  style={{
                    width: 64,
                    height: 64,
                    background: "rgba(139,175,154,0.15)",
                  }}
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="var(--sage-d)"
                    style={{ width: 28, height: 28 }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-[24px] font-normal text-[var(--charcoal)] mb-2">
                  Permintaan Terkirim!
                </h3>
                <p className="text-[14px] text-[rgba(42,47,43,0.55)] leading-[1.7]">
                  Kami akan menghubungi Anda dalam 2 jam untuk mengonfirmasi
                  konsultasi.
                </p>
              </div>
            ) : (
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <h3 className="text-[18px] font-semibold text-[var(--charcoal)] mb-1">
                  Pesan Konsultasi Gratis
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[12px] font-medium text-[rgba(42,47,43,0.5)] mb-1 tracking-[0.05em]">
                      Nama Lengkap
                    </label>
                    <input
                      className="form-input"
                      placeholder="Nama Anda"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-[rgba(42,47,43,0.5)] mb-1 tracking-[0.05em]">
                      Telepon
                    </label>
                    <input
                      className="form-input"
                      type="tel"
                      placeholder="+62 8xx"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-medium text-[rgba(42,47,43,0.5)] mb-1 tracking-[0.05em]">
                    Email
                  </label>
                  <input
                    className="form-input"
                    type="email"
                    placeholder="email@anda.com"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-medium text-[rgba(42,47,43,0.5)] mb-1 tracking-[0.05em]">
                    Layanan yang Diminati
                  </label>
                  <select
                    className="form-input"
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                  >
                    <option value="">Pilih layanan…</option>
                    {SERVICES.map((s) => (
                      <option key={s.title} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] font-medium text-[rgba(42,47,43,0.5)] mb-1 tracking-[0.05em]">
                    Pesan (opsional)
                  </label>
                  <textarea
                    className="form-input"
                    placeholder="Tulis hal penting…"
                    rows={3}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    style={{ resize: "vertical" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary mt-1"
                  style={{
                    padding: "14px",
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 500,
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Kirim Permintaan →
                </button>

                <p className="text-[12px] text-center text-[rgba(42,47,43,0.4)]">
                  Tidak perlu kartu kredit · Bisa dibatalkan kapan saja
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
