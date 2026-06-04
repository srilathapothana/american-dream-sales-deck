"use client";
import { useEffect, useRef, useState } from "react";

const DINING_CATEGORIES = [
  {
    name: "Celebrity Chef Concepts",
    count: "8",
    example: "Guy Fieri, José Andrés concepts",
    color: "var(--gold)",
  },
  {
    name: "International Cuisine",
    count: "30+",
    example: "Japanese, Italian, Korean, Indian",
    color: "var(--electric)",
  },
  {
    name: "Quick Service & Fast Casual",
    count: "40+",
    example: "Premium QSR alongside casual dining",
    color: "var(--pearl)",
  },
  {
    name: "Bars & Nightlife Venues",
    count: "12",
    example: "Cocktail bars, rooftop concepts",
    color: "var(--gold-dim)",
  },
];

export default function Dining() {
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
      id="dining" aria-label="Dining and lifestyle"
      ref={ref}
      className="snap"
      style={{
        minHeight: "100vh",
        background: "var(--graphite)",
        position: "relative",
        overflow: "hidden",
        padding: "120px 60px",
      }}
    >
      {/* Background: elegant dining */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('https://image.pollinations.ai/prompt/upscale%20restaurant%20dining%20hall%20inside%20luxury%20shopping%20mall%2C%20celebrity%20chef%20cuisine%2C%20warm%20ambient%20lighting%2C%20bustling%20atmosphere%2C%20photorealistic%208k?width=1920&height=1080&nologo=true&seed=404')",
        backgroundSize: "cover", backgroundPosition: "center",
        opacity: 0.07, pointerEvents: "none",
      }} />
      {/* Decorative lines */}
      <div style={{
        position: "absolute",
        top: 0,
        left: "50%",
        bottom: 0,
        width: "1px",
        background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.1), transparent)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }}>
          {/* Left */}
          <div>
            <div style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease",
            }}>
              <div className="label" style={{ marginBottom: "16px" }}>Dining & Lifestyle</div>
              <span className="gold-line" style={{ marginBottom: "24px" }} />
              <h2 className="display" style={{
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                color: "var(--white)",
                marginTop: "20px",
                marginBottom: "32px",
                lineHeight: 0.95,
              }}>
                100+ restaurants.
                <br />
                <em style={{ color: "var(--gold)" }}>Zero ordinary meals.</em>
              </h2>
              <p style={{
                fontSize: "0.95rem",
                lineHeight: 1.9,
                color: "var(--pearl)",
                fontWeight: 300,
                marginBottom: "40px",
              }}>
                Dining at American Dream is a destination in itself. With over 100 food
                and beverage options spanning celebrity chef destinations, international
                cuisine, and elevated quick service, the food program extends dwell time
                and drives repeat visits independent of shopping intent.
              </p>

              {/* Food spend stat */}
              <div style={{
                padding: "32px",
                background: "var(--carbon)",
                borderLeft: "2px solid var(--gold)",
                marginBottom: "40px",
              }}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "3.5rem",
                  color: "var(--gold-light)",
                  fontWeight: 300,
                  lineHeight: 1,
                }}>
                  $62
                </div>
                <div className="label" style={{ color: "var(--pearl)", marginBottom: "8px", marginTop: "4px" }}>
                  Average F&B spend per visitor
                </div>
                <p style={{ fontSize: "0.78rem", color: "var(--silver)", lineHeight: 1.6 }}>
                  Dining spend is incremental. Visitors who dine spend 38% more
                  in adjacent retail categories.
                </p>
              </div>

              <button
                aria-label="View F&B leasing opportunities"
                className="btn-gold"
                onClick={() => document.getElementById("leasing")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span>F&B Leasing Opportunities</span>
              </button>
            </div>
          </div>

          {/* Right: category cards */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            alignSelf: "center",
          }}>
            {DINING_CATEGORIES.map((cat, i) => (
              <div
                key={i}
                className="card-hover"
                style={{
                  padding: "32px 28px",
                  background: "var(--carbon)",
                  borderLeft: `2px solid ${cat.color}`,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(30px)",
                  transition: `all 0.6s ease ${0.2 + i * 0.1}s`,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div className="label" style={{ color: cat.color, marginBottom: "8px" }}>{cat.name}</div>
                    <div style={{ fontSize: "0.82rem", color: "var(--silver)", lineHeight: 1.5 }}>
                      {cat.example}
                    </div>
                  </div>
                  <div style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.5rem",
                    color: cat.color,
                    fontWeight: 300,
                    opacity: 0.6,
                    lineHeight: 1,
                  }}>
                    {cat.count}
                  </div>
                </div>
              </div>
            ))}

            {/* Highlight card */}
            <div style={{
              padding: "32px 28px",
              background: "linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.02))",
              border: "1px solid rgba(201,168,76,0.2)",
              opacity: visible ? 1 : 0,
              transition: "all 0.8s ease 0.6s",
              marginTop: "8px",
            }}>
              <div className="label" style={{ marginBottom: "12px" }}>The Food District</div>
              <p style={{ fontSize: "0.82rem", color: "var(--pearl)", lineHeight: 1.6 }}>
                Our dedicated Food District features a curated mix of local and national
                operators in a 40,000 sq ft environment designed for lingering, socializing,
                and Instagrammable moments. Waitlist applications now open.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}