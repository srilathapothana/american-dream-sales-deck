"use client";
import { useEffect, useState } from "react";

const SECTIONS = [
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

export default function SectionProgress() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = SECTIONS.findIndex((s) => s.id === entry.target.id);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { threshold: 0.4 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "28px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1990,
        display: "flex",
        alignItems: "center",
        gap: "6px",
        padding: "10px 18px",
        background: "rgba(5,5,5,0.85)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(201,168,76,0.12)",
        borderRadius: "2px",
      }}
    >
      {/* Section counter */}
      <span style={{
        fontFamily: "var(--font-body)",
        fontSize: "0.55rem",
        letterSpacing: "0.15em",
        color: "var(--gold)",
        marginRight: "8px",
        minWidth: "36px",
        textAlign: "right",
      }}>
        {String(active + 1).padStart(2, "0")} / {String(SECTIONS.length).padStart(2, "0")}
      </span>

      {/* Dot track */}
      {SECTIONS.map((s, i) => (
        <button
          key={s.id}
          aria-label={`Go to ${s.label}`}
          aria-current={i === active ? "true" : undefined}
          onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" })}
          style={{
            width: "44px", height: "44px",
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "none", border: "none", cursor: "none", padding: 0,
            flexShrink: 0,
          }}
        >
          <span style={{
            display: "block",
            width: i === active ? "24px" : "4px",
            height: "4px",
            borderRadius: "2px",
            background: i === active
              ? "var(--gold)"
              : i < active
              ? "rgba(201,168,76,0.35)"
              : "rgba(255,255,255,0.12)",
            transition: "all 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
          }} />
        </button>
      ))}

      {/* Section label */}
      <span style={{
        fontFamily: "var(--font-body)",
        fontSize: "0.55rem",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: "var(--silver)",
        marginLeft: "8px",
        minWidth: "72px",
      }}>
        {SECTIONS[active].label}
      </span>
    </div>
  );
}