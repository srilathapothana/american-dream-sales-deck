"use client";

export default function SkipLink() {
  return (
    <a
      href="#hero"
      style={{
        position: "fixed",
        top: "-100px",
        left: "16px",
        zIndex: 99999,
        background: "var(--gold)",
        color: "var(--obsidian)",
        padding: "8px 16px",
        fontSize: "0.75rem",
        fontWeight: 500,
        borderRadius: "4px",
        transition: "top 0.2s",
        textDecoration: "none",
      }}
      onFocus={(e) => { e.currentTarget.style.top = "16px"; }}
      onBlur={(e) => { e.currentTarget.style.top = "-100px"; }}
    >
      Skip to main content
    </a>
  );
}
