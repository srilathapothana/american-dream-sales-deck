"use client";
import { useEffect, useRef, useState } from "react";

const LUXURY_BRANDS = [
  "Saks Fifth Avenue",
  "Louis Vuitton",
  "Hermès",
  "Gucci",
  "Prada",
  "Saint Laurent",
  "Tiffany & Co.",
  "Rolex",
];

export default function Luxury() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="luxury" aria-label="Luxury — premium brand corridor"
      ref={ref}
      className="snap"
      style={{
        minHeight: "100vh",
        background: "var(--obsidian)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background: luxury interior */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('https://image.pollinations.ai/prompt/ultra-luxury%20fashion%20boutique%20interior%20with%20marble%20floors%2C%20gold%20accents%2C%20designer%20handbags%20and%20jewelry%20displays%2C%20cinematic%20moody%20lighting%2C%20photorealistic%208k?width=1920&height=1080&nologo=true&seed=303')",
        backgroundSize: "cover", backgroundPosition: "center 30%",
        opacity: 0.08, pointerEvents: "none",
      }} />

      {/* Large typographic background */}
      <div style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        opacity: 0.03,
        pointerEvents: "none",
      }}>
        <div style={{
          fontFamily: "var(--font-display)",
          fontSize: "25vw",
          fontWeight: 300,
          fontStyle: "italic",
          color: "var(--gold)",
          whiteSpace: "nowrap",
          letterSpacing: "-0.05em",
        }}>
          LUXURY
        </div>
      </div>

      {/* Gold gradient accent */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "120px 60px", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "5fr 4fr", gap: "100px", alignItems: "center" }}>
          {/* Left */}
          <div>
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s ease",
              }}
            >
              <div className="label" style={{ marginBottom: "16px" }}>The Luxury Wing</div>
              <span className="gold-line" style={{ marginBottom: "24px" }} />
              <h2
                className="display"
                style={{
                  fontSize: "clamp(3rem, 7vw, 6.5rem)",
                  color: "var(--white)",
                  marginTop: "20px",
                  marginBottom: "8px",
                }}
              >
                Where the world&apos;s
              </h2>
              <h2
                className="display"
                style={{
                  fontSize: "clamp(3rem, 7vw, 6.5rem)",
                  fontStyle: "italic",
                  color: "var(--gold)",
                  marginBottom: "40px",
                }}
              >
                finest brands meet.
              </h2>
              <p style={{
                fontSize: "1rem",
                lineHeight: 2,
                color: "var(--pearl)",
                fontWeight: 300,
                maxWidth: "540px",
                marginBottom: "48px",
              }}>
                The American Dream luxury corridor brings together the world&apos;s most coveted
                names in fashion, jewelry, and lifestyle. Anchored by Saks Fifth Avenue,
                Positioned as the premier luxury destination for the tristate area, this wing
                serves an audience that shops with intent and spends without hesitation.
              </p>

              {/* Metrics row */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px", marginBottom: "48px" }}>
                {[
                  { v: "$250K+", l: "Average household income" },
                  { v: "60%", l: "Repeat luxury visitors" },
                  { v: "4.2×", l: "Luxury transaction multiplier" },
                ].map((m, i) => (
                  <div key={i}>
                    <div style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2rem",
                      color: "var(--gold-light)",
                      fontWeight: 300,
                    }}>
                      {m.v}
                    </div>
                    <div style={{ fontSize: "0.7rem", color: "var(--silver)", lineHeight: 1.5 }}>{m.l}</div>
                  </div>
                ))}
              </div>

              <button
                aria-label="Request luxury leasing package" className="btn-gold"
                onClick={() => document.getElementById("leasing")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span>Explore Luxury Leasing</span>
              </button>
            </div>
          </div>

          {/* Right: brand list */}
          <div style={{
            opacity: visible ? 1 : 0,
            transition: "all 0.8s ease 0.3s",
          }}>
            <div className="label" style={{ marginBottom: "28px", color: "var(--silver)" }}>
              Featured Luxury Partners
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {LUXURY_BRANDS.map((brand, i) => (
                <div
                  key={i}
                  style={{
                    padding: "20px 0",
                    borderBottom: "1px solid rgba(201,168,76,0.1)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontFamily: "var(--font-display)",
                    fontSize: "1.3rem",
                    fontWeight: 300,
                    color: "var(--pearl)",
                    cursor: "default",
                    transition: "color 0.3s ease",
                    opacity: visible ? 1 : 0,
                    transitionDelay: `${0.4 + i * 0.07}s`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--gold-light)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--pearl)";
                  }}
                >
                  <span>{brand}</span>
                  <span style={{ fontSize: "0.6rem", color: "var(--gold)", letterSpacing: "0.2em", fontFamily: "var(--font-body)" }}>
                    FLAGSHIP
                  </span>
                </div>
              ))}
              <div style={{ paddingTop: "16px", fontSize: "0.7rem", color: "var(--silver)", fontStyle: "italic" }}>
                + additional brands in negotiation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}