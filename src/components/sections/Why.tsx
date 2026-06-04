"use client";
import { useEffect, useRef, useState } from "react";

const DATA_POINTS = [
  { label: "Annual Visitors", value: "40M+", sub: "More than Disneyland" },
  { label: "Trade Area Population", value: "20M", sub: "Within 50-mile radius" },
  { label: "Median HHI", value: "$95K", sub: "Affluent consumer base" },
  { label: "Hotel Rooms Onsite", value: "2", sub: "Marriott Autograph Collection" },
  { label: "Public Transit Links", value: "NJ Transit Direct", sub: "10 min to Midtown NYC" },
  { label: "Adjacent to MetLife", value: "Stadium", sub: "NFL's largest market" },
];

const DEMO_BARS = [
  { label: "18–34", pct: 38, color: "var(--gold)" },
  { label: "35–54", pct: 35, color: "var(--gold-dim)" },
  { label: "55+", pct: 18, color: "var(--ash)" },
  { label: "Under 18", pct: 9, color: "var(--smoke)" },
];

export default function Why() {
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
      id="why"
      ref={ref}
      className="snap"
      style={{
        minHeight: "100vh",
        background: "var(--void)",
        padding: "120px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background image: NYC skyline */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('https://image.pollinations.ai/prompt/aerial%20cinematic%20view%20of%20New%20York%20City%20skyline%20at%20golden%20hour%2C%20East%20Rutherford%20New%20Jersey%2C%20dramatic%20light%2C%20photorealistic%208k?width=1920&height=1080&nologo=true&seed=101')",
        backgroundSize: "cover", backgroundPosition: "center 55%",
        opacity: 0.06, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 65% 55% at 90% 15%, rgba(201,168,76,0.05) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{
          marginBottom: "80px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease",
        }}>
          <div className="label" style={{ marginBottom: "16px" }}>Why American Dream</div>
          <span className="gold-line" style={{ marginBottom: "28px" }} />
          <h2 className="display" style={{
            fontSize: "clamp(3rem, 7vw, 6rem)",
            color: "var(--white)",
            maxWidth: "700px",
            marginTop: "20px",
          }}>
            Not just a mall.
            <br />
            <em style={{ color: "var(--gold)" }}>A metropolitan force.</em>
          </h2>
        </div>

        {/* Two-column layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
          {/* Left: data grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
            {DATA_POINTS.map((dp, i) => (
              <div
                key={i}
                style={{
                  padding: "28px 24px",
                  background: i % 2 === 0 ? "var(--carbon)" : "var(--graphite)",
                  borderLeft: "2px solid transparent",
                  transition: "all 0.4s ease",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${0.1 + i * 0.08}s`,
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderLeftColor = "var(--gold)";
                  (e.currentTarget as HTMLElement).style.background = "var(--smoke)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderLeftColor = "transparent";
                  (e.currentTarget as HTMLElement).style.background = i % 2 === 0 ? "var(--carbon)" : "var(--graphite)";
                }}
              >
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  fontWeight: 300,
                  color: "var(--gold-light)",
                  lineHeight: 1,
                  marginBottom: "6px",
                }}>
                  {dp.value}
                </div>
                <div className="label" style={{ color: "var(--white)", marginBottom: "4px" }}>
                  {dp.label}
                </div>
                <div style={{ fontSize: "0.72rem", color: "var(--silver)" }}>{dp.sub}</div>
              </div>
            ))}
          </div>

          {/* Right: Demographics + location */}
          <div style={{
            opacity: visible ? 1 : 0,
            transition: "all 0.8s ease 0.4s",
          }}>
            <div className="label" style={{ marginBottom: "20px" }}>Visitor Demographics</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "48px" }}>
              {DEMO_BARS.map((bar, i) => (
                <div key={i}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ fontSize: "0.75rem", color: "var(--pearl)", fontFamily: "var(--font-body)" }}>
                      {bar.label}
                    </span>
                    <span style={{ fontSize: "0.75rem", color: bar.color }}>{bar.pct}%</span>
                  </div>
                  <div style={{ height: "3px", background: "var(--smoke)", borderRadius: "2px", overflow: "hidden" }}>
                    <div style={{
                      height: "100%",
                      width: visible ? `${bar.pct}%` : "0%",
                      background: bar.color,
                      transition: `width 1s ease ${0.6 + i * 0.15}s`,
                      borderRadius: "2px",
                    }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Location callout */}
            <div style={{
              border: "1px solid rgba(201,168,76,0.2)",
              padding: "32px",
              background: "var(--gold-subtle)",
              position: "relative",
            }}>
              <div style={{
                position: "absolute",
                top: "-1px",
                left: "32px",
                width: "60px",
                height: "2px",
                background: "var(--gold)",
              }} />
              <div className="label" style={{ marginBottom: "12px" }}>Strategic Location</div>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                lineHeight: 1.8,
                color: "var(--pearl)",
                fontWeight: 300,
              }}>
                Positioned at the geographic heart of the New York metro area —
                the world&apos;s most valuable retail market. Direct access via NJ Transit,
                adjacent to MetLife Stadium, and minutes from three major airports.
                No property in America captures more affluent foot traffic per square foot.
              </p>
            </div>

            {/* Map-like visualization */}
            <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
              {[
                { place: "Times Square", time: "12 min" },
                { place: "Newark Airport", time: "8 min" },
                { place: "JFK Airport", time: "35 min" },
                { place: "Philadelphia", time: "90 min" },
              ].map((loc, i) => (
                <div key={i} style={{
                  padding: "10px 16px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  fontSize: "0.7rem",
                  fontFamily: "var(--font-body)",
                }}>
                  <div style={{ color: "var(--silver)" }}>{loc.place}</div>
                  <div style={{ color: "var(--gold)", marginTop: "2px" }}>{loc.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
