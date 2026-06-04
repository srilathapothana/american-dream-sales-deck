"use client";
import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "why", label: "Why Here" },
  { id: "retail", label: "Retail" },
  { id: "luxury", label: "Luxury" },
  { id: "dining", label: "Dining" },
  { id: "entertainment", label: "Entertainment" },
  { id: "events", label: "Events" },
  { id: "venues", label: "Venues" },
  { id: "leasing", label: "Leasing" },
  { id: "sponsorship", label: "Sponsorship" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("hero");
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  };

  return (
    <>
      {/* ── Top navbar ── */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2000,           /* higher than everything */
        height: "68px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        background: scrolled
          ? "rgba(5,5,5,0.92)"
          : "linear-gradient(to bottom, rgba(5,5,5,0.75) 0%, transparent 100%)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.1)" : "none",
        transition: "background 0.4s ease, border-color 0.4s ease",
      }}>
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          aria-label="Go to top — American Dream"
          style={{
            background: "none", border: "none", cursor: "none",
            fontFamily: "var(--font-display)", fontSize: "1.05rem",
            fontWeight: 300, color: "var(--white)", letterSpacing: "0.06em",
            minHeight: "44px", minWidth: "44px",
          }}>
          AMERICAN <em style={{ color: "var(--gold)" }}>DREAM</em>
        </button>

        {/* Desktop nav links */}
        <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          {["why", "events", "venues", "leasing", "sponsorship"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              aria-label={`Navigate to ${sections.find((s) => s.id === id)?.label}`}
              aria-current={active === id ? "true" : undefined}
              className="hover-line"
              style={{
                background: "none", border: "none", cursor: "none",
                fontFamily: "var(--font-body)", fontSize: "0.62rem",
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: active === id ? "var(--gold)" : "var(--pearl)",
                transition: "color 0.3s ease", padding: "10px 4px",
                minHeight: "44px",
              }}>
              {sections.find((s) => s.id === id)?.label}
            </button>
          ))}

          <button
            onClick={() => scrollTo("contact")}
            aria-label="Get in touch — go to contact section"
            className="btn-gold"
            style={{ padding: "9px 22px", fontSize: "0.58rem", minHeight: "44px" }}>
            <span>Get in Touch</span>
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setNavOpen(!navOpen)}
            aria-label={navOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={navOpen}
            aria-controls="fullscreen-nav"
            style={{
              background: "none", border: "none", cursor: "none",
              display: "flex", flexDirection: "column", gap: "5px",
              padding: "12px 8px", minHeight: "44px", minWidth: "44px",
              alignItems: "center", justifyContent: "center",
            }}>
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: "block",
                width: navOpen && i === 1 ? "0" : "22px",
                height: "1px",
                background: "var(--gold)",
                transition: "all 0.3s ease",
                transform: navOpen && i === 0 ? "rotate(45deg) translate(4px, 4px)"
                  : navOpen && i === 2 ? "rotate(-45deg) translate(4px, -4px)" : "none",
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* ── Full-screen menu overlay ── */}
      <div
        id="fullscreen-nav"
        role="dialog"
        aria-label="Full navigation menu"
        aria-modal="true"
        style={{
          position: "fixed", inset: 0, zIndex: 1999,
          background: "rgba(5,5,5,0.97)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: "4px",
          opacity: navOpen ? 1 : 0,
          pointerEvents: navOpen ? "all" : "none",
          transition: "opacity 0.4s ease",
        }}>
        {sections.map((s, i) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            aria-label={`Navigate to ${s.label}`}
            aria-current={active === s.id ? "page" : undefined}
            style={{
              background: "none", border: "none", cursor: "none",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              color: active === s.id ? "var(--gold)" : "var(--ash)",
              letterSpacing: "-0.02em",
              lineHeight: 1.4,
              transition: "color 0.3s ease",
              transform: navOpen ? "translateY(0)" : "translateY(20px)",
              transitionDelay: `${i * 0.04}s`,
              minHeight: "44px", padding: "4px 16px",
            }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--white)"; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.color = active === s.id ? "var(--gold)" : "var(--ash)"; }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* ── Side dot nav ── */}
      <div
        role="navigation"
        aria-label="Section navigation dots"
        style={{
          position: "fixed", right: "20px", top: "50%",
          transform: "translateY(-50%)", zIndex: 1998,
          display: "flex", flexDirection: "column", gap: "4px", alignItems: "center",
        }}>
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            aria-label={`Go to ${s.label}`}
            aria-current={active === s.id ? "true" : undefined}
            style={{
              width: "44px", height: "44px",
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "none", border: "none", cursor: "none", padding: 0,
            }}>
            <span style={{
              display: "block",
              width: active === s.id ? "20px" : "4px",
              height: "4px", borderRadius: "2px",
              background: active === s.id ? "var(--gold)" : "rgba(255,255,255,0.18)",
              transition: "all 0.3s ease",
            }} />
          </button>
        ))}
      </div>
    </>
  );
}