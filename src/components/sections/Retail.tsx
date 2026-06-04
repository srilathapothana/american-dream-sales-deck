"use client";
import { useEffect, useRef, useState } from "react";

const TENANTS = [
  "Saks Fifth Avenue", "Zara", "H&M", "Uniqlo", "Forever 21",
  "Gap", "Victoria's Secret", "Bath & Body Works", "Foot Locker",
  "adidas", "Nike", "Levi's", "Urban Outfitters", "Hollister",
  "American Eagle", "Express", "Banana Republic",
];

const CATEGORIES = [
  { name: "Luxury & Premium", count: "65+", description: "Designer flagships and elevated retail" },
  { name: "Fast Fashion", count: "40+", description: "International and domestic fast fashion" },
  { name: "Food & Beverage", count: "100+", description: "Restaurants, cafes, and quick service" },
  { name: "Entertainment", count: "15+", description: "Attractions and experiences" },
  { name: "Services", count: "30+", description: "Beauty, wellness, and services" },
  { name: "Pop-Up & Seasonal", count: "20+", description: "Rotating temporary tenants" },
];

export default function Retail() {
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
      id="retail"
      ref={ref}
      className="snap"
      style={{
        minHeight: "100vh",
        background: "var(--carbon)",
        padding: "120px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('https://image.pollinations.ai/prompt/luxury%20retail%20shopping%20mall%20interior%20wide%20corridor%20with%20high-end%20brand%20storefronts%2C%20dramatic%20lighting%2C%20photorealistic%208k?width=1920&height=1080&nologo=true&seed=202')",
        backgroundSize: "cover", backgroundPosition: "center",
        opacity: 0.05, pointerEvents: "none",
      }} />
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          marginBottom: "80px",
          alignItems: "end",
        }}>
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease",
          }}>
            <div className="label" style={{ marginBottom: "16px" }}>Retail Environment</div>
            <span className="gold-line" style={{ marginBottom: "24px" }} />
            <h2 className="display" style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "var(--white)",
              marginTop: "16px",
            }}>
              500+ brands.
              <br />
              <em style={{ color: "var(--gold)" }}>One destination.</em>
            </h2>
          </div>
          <div style={{
            opacity: visible ? 1 : 0,
            transition: "all 0.8s ease 0.3s",
          }}>
            <p style={{
              fontSize: "1rem",
              lineHeight: 1.9,
              color: "var(--pearl)",
              fontWeight: 300,
              marginBottom: "24px",
            }}>
              American Dream is not just a shopping center. It is a curated retail
              ecosystem serving one of the world&apos;s most affluent and densely populated
              markets. Our tenants benefit from unmatched co-tenancy, entertainment-driven
              foot traffic, and a consumer base that arrives with intent to spend.
            </p>
            <div style={{ display: "flex", gap: "32px" }}>
              <div>
                <div style={{ fontSize: "2.5rem", fontFamily: "var(--font-display)", color: "var(--gold-light)" }}>$180</div>
                <div className="label" style={{ color: "var(--silver)" }}>Avg basket size</div>
              </div>
              <div>
                <div style={{ fontSize: "2.5rem", fontFamily: "var(--font-display)", color: "var(--gold-light)" }}>3.4h</div>
                <div className="label" style={{ color: "var(--silver)" }}>Avg dwell time</div>
              </div>
            </div>
          </div>
        </div>

        {/* Category grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1px",
          background: "rgba(201,168,76,0.08)",
          marginBottom: "60px",
        }}>
          {CATEGORIES.map((cat, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                background: "var(--graphite)",
                padding: "36px 28px",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease ${0.1 + i * 0.08}s`,
                cursor: "default",
              }}
            >
              <div style={{
                fontSize: "2.2rem",
                fontFamily: "var(--font-display)",
                color: "var(--gold-light)",
                fontWeight: 300,
                marginBottom: "4px",
              }}>
                {cat.count}
              </div>
              <div className="label" style={{ color: "var(--white)", marginBottom: "8px" }}>
                {cat.name}
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--silver)", lineHeight: 1.6 }}>
                {cat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee tenant list */}
        <div style={{
          overflow: "hidden",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.8s ease 0.6s",
        }}>
          <div className="label" style={{ marginBottom: "20px", color: "var(--silver)" }}>
            Key Tenants: Partial List
          </div>
          <div style={{
            display: "flex",
            gap: "0",
            whiteSpace: "nowrap",
            animation: "marquee 30s linear infinite",
          }}>
            <style>{`
              @keyframes marquee {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
              }
            `}</style>
            {[...TENANTS, ...TENANTS].map((t, i) => (
              <span key={i} style={{
                padding: "0 32px",
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: i % 3 === 0 ? "var(--gold)" : "var(--ash)",
                borderRight: "1px solid rgba(255,255,255,0.05)",
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          marginTop: "60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: "40px",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.8s ease 0.8s",
        }}>
          <p style={{ fontSize: "0.85rem", color: "var(--silver)", maxWidth: "500px", lineHeight: 1.7 }}>
            Leasing opportunities available across all categories.
            Speak with our team to explore spaces, terms, and co-tenancy strategy.
          </p>
          <button
            className="btn-gold"
            onClick={() => document.getElementById("leasing")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span>View Leasing Opportunities</span>
          </button>
        </div>
      </div>
    </section>
  );
}
