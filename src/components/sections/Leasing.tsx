"use client";
import { useEffect, useRef, useState } from "react";
import ResponsiveGrid from "@/components/ui/ResponsiveGrid";

type LeasingCategory = "luxury" | "retail" | "fnb" | "popup";

const CATEGORIES: { id: LeasingCategory; label: string; icon: string }[] = [
  { id: "luxury", label: "Luxury & Premium", icon: "◈" },
  { id: "retail", label: "Fashion & Retail", icon: "◻" },
  { id: "fnb", label: "Food & Beverage", icon: "◇" },
  { id: "popup", label: "Pop-Up & Seasonal", icon: "◯" },
];

const LEASING_DATA: Record<LeasingCategory, {
  headline: string;
  sub: string;
  ranges: { label: string; range: string; desc: string }[];
  bullets: string[];
  cta: string;
}> = {
  luxury: {
    headline: "Position your brand at the top.",
    sub: "The American Dream luxury corridor attracts the tristate area's highest-spending consumers. Join Saks Fifth Avenue and a curated roster of flagship luxury partners in a setting designed to showcase the world's finest brands.",
    ranges: [
      { label: "Small Format Flagship", range: "2,000–5,000 sq ft", desc: "Boutique-scale presence with full brand control" },
      { label: "Standard Flagship", range: "5,000–15,000 sq ft", desc: "Full retail expression with co-tenancy premium" },
      { label: "Anchor Flagship", range: "15,000+ sq ft", desc: "Category-defining anchor opportunities" },
    ],
    bullets: [
      "Dedicated luxury wing with separate entrance",
      "Valet and concierge services",
      "High-net-worth consumer profile",
      "Bespoke buildout support available",
      "NDA-protected lease terms",
    ],
    cta: "Request Luxury Leasing Package",
  },
  retail: {
    headline: "Reach millions. Move product.",
    sub: "American Dream's fashion and retail environment serves the broadest and most diverse consumer base in the Northeast. High foot traffic, exceptional co-tenancy, and entertainment-driven dwell time make this the highest-conversion retail environment in the region.",
    ranges: [
      { label: "Inline Store", range: "800–3,000 sq ft", desc: "Main mall traffic, premium adjacencies" },
      { label: "End Cap", range: "1,500–4,000 sq ft", desc: "High-visibility corner and corridor positions" },
      { label: "Freestanding Pad", range: "4,000–12,000 sq ft", desc: "Standalone building with exterior presence" },
    ],
    bullets: [
      "40M+ annual visitors",
      "Top-20 US market trade area",
      "Entertainment-anchored foot traffic",
      "Weekend and holiday density",
      "Digital and physical integration support",
    ],
    cta: "Request Retail Leasing Information",
  },
  fnb: {
    headline: "Feed the destination.",
    sub: "Food and beverage at American Dream isn't an afterthought. It is a destination. With over 100 F&B concepts and a dedicated Food District, our culinary program is a primary traffic driver. Operators who join benefit from one of the highest-volume food environments in the country.",
    ranges: [
      { label: "Quick Service / Counter", range: "400–1,200 sq ft", desc: "Food court and corridor positions" },
      { label: "Fast Casual", range: "1,200–3,000 sq ft", desc: "Seated dining with kitchen infrastructure" },
      { label: "Full Service Restaurant", range: "3,000–8,000 sq ft", desc: "Destination dining with full buildout" },
      { label: "Celebrity Concept", range: "Negotiated", desc: "Partnership opportunity for high-profile operators" },
    ],
    bullets: [
      "Average $62 F&B spend per visitor",
      "38% retail halo effect",
      "Extended evening hours",
      "Alcohol licensing supported",
      "Private dining and event capability",
    ],
    cta: "Request F&B Leasing Package",
  },
  popup: {
    headline: "Test. Launch. Scale.",
    sub: "American Dream's pop-up and seasonal leasing program gives brands the highest-impact short-term retail platform in the Northeast. Whether you're launching a product, testing a concept, or capitalizing on seasonal demand, we have flexible terms and premium positions available.",
    ranges: [
      { label: "Kiosk / Cart", range: "100–400 sq ft", desc: "Main corridor, high-traffic positions" },
      { label: "Inline Pop-Up", range: "500–2,000 sq ft", desc: "Temporary inline positions, 30–180 days" },
      { label: "Brand Activation Space", range: "1,000–10,000 sq ft", desc: "Full experiential buildout zones" },
    ],
    bullets: [
      "30-day minimum terms available",
      "Seasonal holiday premium positions",
      "Event tie-in opportunities",
      "Turnkey buildout options",
      "Digital activation integration",
    ],
    cta: "Inquire About Pop-Up Availability",
  },
};

export default function Leasing() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<LeasingCategory>("luxury");

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const data = LEASING_DATA[active];

  return (
    <section
      id="leasing"
      ref={ref}
      className="snap"
      style={{
        minHeight: "100vh",
        background: "var(--obsidian)",
        position: "relative",
        overflow: "hidden",
        padding: "100px 60px 80px",
      }}
    >
      {/* Background vertical text */}
      <div style={{
        position: "absolute",
        left: "-30px",
        top: "50%",
        transform: "translateY(-50%) rotate(-90deg)",
        fontFamily: "var(--font-mono)",
        fontSize: "10rem",
        color: "rgba(201,168,76,0.025)",
        letterSpacing: "0.3em",
        pointerEvents: "none",
        whiteSpace: "nowrap",
      }}>
        LEASING
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{
          marginBottom: "56px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease",
        }}>
          <div className="label" style={{ marginBottom: "16px" }}>Leasing Opportunities</div>
          <span className="gold-line" style={{ marginBottom: "24px" }} />
          <h2 className="display" style={{
            fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
            color: "var(--white)",
            marginTop: "20px",
          }}>
            Find your space
            <br />
            <em style={{ color: "var(--gold)" }}>in the dream.</em>
          </h2>
        </div>

        {/* Category tabs */}
        <div style={{ display: "flex", gap: "1px", marginBottom: "2px" }}>
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              style={{
                flex: 1,
                padding: "18px 16px",
                background: active === cat.id ? "var(--graphite)" : "var(--carbon)",
                border: "none",
                borderBottom: active === cat.id ? "2px solid var(--gold)" : "2px solid transparent",
                cursor: "none",
                color: active === cat.id ? "var(--gold)" : "var(--silver)",
                fontFamily: "var(--font-body)",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
                opacity: visible ? 1 : 0,
                transitionDelay: `${0.1 + i * 0.07}s`,
              }}
            >
              <div style={{ fontSize: "1rem", marginBottom: "6px" }}>{cat.icon}</div>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ background: "var(--graphite)", padding: "52px 48px", opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.4s" }}>
          <ResponsiveGrid cols={2} gap="60px">
          {/* Left */}
          <div>
            <h3 className="display" style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
              color: "var(--white)",
              marginBottom: "16px",
            }}>
              {data.headline}
            </h3>
            <p style={{
              fontSize: "0.9rem",
              lineHeight: 1.85,
              color: "var(--pearl)",
              fontWeight: 300,
              marginBottom: "36px",
            }}>
              {data.sub}
            </p>

            <div className="label" style={{ marginBottom: "16px", color: "var(--silver)" }}>Why American Dream</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "40px" }}>
              {data.bullets.map((b, i) => (
                <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "0.83rem", color: "var(--pearl)", lineHeight: 1.5 }}>
                  <span style={{ color: "var(--gold)", marginTop: "3px", flexShrink: 0 }}>→</span>
                  {b}
                </li>
              ))}
            </ul>

            <button
              className="btn-gold"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span>{data.cta}</span>
            </button>
          </div>

          {/* Right: space options */}
          <div>
            <div className="label" style={{ marginBottom: "20px", color: "var(--silver)" }}>
              Available Space Types
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {data.ranges.map((r, i) => (
                <div
                  key={i}
                  style={{
                    padding: "24px 20px",
                    background: "var(--carbon)",
                    borderLeft: "2px solid rgba(201,168,76,0.2)",
                    transition: "border-color 0.3s ease, background 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderLeftColor = "var(--gold)";
                    el.style.background = "var(--smoke)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderLeftColor = "rgba(201,168,76,0.2)";
                    el.style.background = "var(--carbon)";
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                    <div className="label" style={{ color: "var(--white)", fontSize: "0.65rem" }}>{r.label}</div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--gold)" }}>
                      {r.range}
                    </div>
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--silver)" }}>{r.desc}</div>
                </div>
              ))}
            </div>

            {/* Bottom note */}
            <div style={{
              marginTop: "24px",
              padding: "20px",
              background: "rgba(201,168,76,0.05)",
              border: "1px solid rgba(201,168,76,0.1)",
              fontSize: "0.78rem",
              color: "var(--silver)",
              lineHeight: 1.6,
            }}>
              All lease terms are subject to negotiation. Our leasing team will work
              with you on tenant improvement allowances, buildout support, and
              co-tenancy preferences. NDA available upon request.
            </div>
          </div>
          </ResponsiveGrid>
        </div>
      </div>
    </section>
  );
}