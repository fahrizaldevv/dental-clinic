import { useEffect, useState } from "react";

function Nav({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Layanan", href: "#services" },
    { label: "Tentang", href: "#about" },
    { label: "Tim", href: "#team" },
    { label: "Testimoni", href: "#testimonials" },
    { label: "Kontak", href: "#contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-md bg-white/70 shadow-sm py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* LOGO */}
          <a href="#" className="flex items-center gap-2">
            <span className="font-display text-3xl font-semibold tracking-[-0.01em] text-[var(--charcoal)]">
              SchAtz<span className="text-[var(--sage-d)]"> Dental</span>
            </span>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[14px] text-[var(--charcoal)]/70 hover:text-[var(--charcoal)] transition"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+62215550000"
              className="text-[13px] font-medium text-[var(--sage-d)]"
            >
              +62 21 555-0000
            </a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-md text-[13px] font-medium bg-[var(--sage-d)] text-white hover:opacity-90 transition"
            >
              Booking Sekarang
            </a>
          </div>

          {/* HAMBURGER */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`w-[22px] h-[2px] bg-[var(--charcoal)] transition-all ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`w-[22px] h-[2px] bg-[var(--charcoal)] transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-[22px] h-[2px] bg-[var(--charcoal)] transition-all ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-6">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-[36px] font-light text-[var(--charcoal)]"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-9 py-3 rounded-md text-[15px] font-medium bg-[var(--sage-d)] text-white"
          >
            Buat Janji
          </a>
        </div>
      )}
    </>
  );
}

export default Nav;
