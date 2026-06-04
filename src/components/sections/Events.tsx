"use client";
import { useEffect, useRef, useState } from "react";

const EVENT_TYPES = [
  {
    type: "Concerts & Live Music",
    capacity: "Up to 5,000",
    spaces: "3 dedicated venues",
    features: ["Full production rigging", "In-house AV team", "Artist green rooms", "Loading docks"],
    past: ["Bad Bunny pop-up", "DJ Khaled brand event", "Latin Grammys viewing"],
    icon: "🎵",
  },
  {
    type: "Brand Activations",
    capacity: "100K+ daily traffic",
    spaces: "15+ activation zones",
    features: ["High dwell-time environments", "Multi-surface branding", "Digital integration", "Custom buildouts"],
    past: ["Super Bowl LVII activation", "FIFA World Cup campaign", "Apple Vision Pro launch"],
    icon: "✦",
  },
  {
    type: "Corporate Events",
    capacity: "Up to 10,000",
    spaces: "Convention wing + meeting rooms",
    features: ["200,000 sq ft flex space", "Full catering program", "On-site hotels", "Breakout rooms"],
    past: ["Fortune 500 offsites", "Product launch conferences", "Industry expos"],
    icon: "◈",
  },
  {
    type: "Product Launches",
    capacity: "500–5,000 guests",
    spaces: "Atrium + dedicated venues",
    features: ["Architectural scale", "Immediate retail integration", "Press access", "Consumer-facing launch"],
    past: ["Sneaker drops", "Film premiere activations", "Fragrance launches"],
    icon: "◯",
  },
];

const VENUES = [
  { name: "The Main Atrium", cap: "15,000+", sqft: "60,000 sq ft", type: "Multi-purpose" },
  { name: "Performix Arena", cap: "5,000", sqft: "28,000 sq ft", type: "Concert / Events" },
  { name: "Convention Center", cap: "10,000", sqft: "120,000 sq ft", type: "Expo / Corporate" },
  { name: "The Rink", cap: "2,000", sqft: "16,000 sq ft", type: "Seasonal / Live" },
  { name: "Rooftop Terrace", cap: "500", sqft: "8,000 sq ft", type: "Private / Intimate" },
  { name: "F&B Event Space", cap: "300", sqft: "4,500 sq ft", type: "Dinner / Cocktail" },
];

export default function Events() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeType, setActiveType] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const evt = EVENT_TYPES[activeType];

  return (
    <section
      id="events" aria-label="Events and platform"
      ref={ref}
      className="snap"
      style={{
        minHeight: "100vh",
        background: "var(--carbon)",
        position: "relative",
        overflow: "hidden",
        padding: "100px 60px 80px",
      }}
    >
      {/* Background: concert venue */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('https://image.pollinations.ai/prompt/massive%20indoor%20concert%20arena%20event%20space%20inside%20luxury%20shopping%20mall%2C%20colorful%20stage%20lighting%2C%20large%20crowd%2C%20cinematic%208k%20photorealistic?width=1920&height=1080&nologo=true&seed=505')",
        backgroundSize: "cover", backgroundPosition: "center 40%",
        opacity: 0.07, pointerEvents: "none",
      }} />
      {/* Gold horizontal rule at top */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        background: "linear-gradient(90deg, transparent, var(--gold) 30%, var(--gold) 70%, transparent)",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          marginBottom: "64px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease",
        }}>
          <div>
            <div className="label" style={{ marginBottom: "16px" }}>Events & Live Platform</div>
            <span className="gold-line" style={{ marginBottom: "24px" }} />
            <h2 className="display" style={{
              fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
              color: "var(--white)",
              marginTop: "20px",
            }}>
              The platform brands
              <br />
              <em style={{ color: "var(--gold)" }}>fight to be on.</em>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
            <p style={{
              fontSize: "0.95rem",
              lineHeight: 1.9,
              color: "var(--pearl)",
              fontWeight: 300,
              marginBottom: "24px",
            }}>
              American Dream is more than a venue. It is a living media platform.
              With 40M+ annual visitors, built-in entertainment infrastructure, and
              national media reach, events held here generate earned media at a fraction
              of the cost of traditional venue rental.
            </p>
            <div style={{ display: "flex", gap: "24px" }}>
              {[
                { v: "200+", l: "Annual events" },
                { v: "$2B+", l: "Media value generated" },
                { v: "40M", l: "Audience reach" },
              ].map((s, i) => (
                <div key={i} style={{ borderLeft: "1px solid rgba(201,168,76,0.3)", paddingLeft: "16px" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: "var(--gold-light)", fontWeight: 300 }}>
                    {s.v}
                  </div>
                  <div style={{ fontSize: "0.65rem", color: "var(--silver)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Event type selector */}
        <div style={{ display: "flex", gap: "1px", marginBottom: "2px" }}>
          {EVENT_TYPES.map((et, i) => (
            <button
              key={i}
              onClick={() => setActiveType(i)}
              style={{
                flex: 1,
                padding: "16px 8px",
                background: activeType === i ? "var(--graphite)" : "var(--smoke)",
                border: "none",
                borderTop: activeType === i ? "2px solid var(--gold)" : "2px solid transparent",
                cursor: "none",
                color: activeType === i ? "var(--gold)" : "var(--silver)",
                fontFamily: "var(--font-body)",
                fontSize: "0.62rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
                opacity: visible ? 1 : 0,
                transitionDelay: `${0.2 + i * 0.06}s`,
              }}
            >
              <div style={{ fontSize: "1rem", marginBottom: "4px" }}>{et.icon}</div>
              {et.type}
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div style={{
          background: "var(--graphite)",
          padding: "48px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease 0.4s",
        }}>
          <div>
            <h3 className="display" style={{
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              color: "var(--white)",
              marginBottom: "24px",
            }}>
              {evt.type}
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "32px" }}>
              <div style={{ padding: "20px", background: "var(--carbon)" }}>
                <div className="label" style={{ marginBottom: "6px", color: "var(--silver)" }}>Max Capacity</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--gold-light)" }}>
                  {evt.capacity}
                </div>
              </div>
              <div style={{ padding: "20px", background: "var(--carbon)" }}>
                <div className="label" style={{ marginBottom: "6px", color: "var(--silver)" }}>Venue Options</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--gold-light)" }}>
                  {evt.spaces}
                </div>
              </div>
            </div>
            <div className="label" style={{ marginBottom: "12px", color: "var(--silver)" }}>Key Features</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
              {evt.features.map((f, i) => (
                <li key={i} style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "0.85rem", color: "var(--pearl)" }}>
                  <span style={{ color: "var(--gold)", fontSize: "0.5rem" }}>◆</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="label" style={{ marginBottom: "16px", color: "var(--silver)" }}>Past Activations</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
              {evt.past.map((p, i) => (
                <div key={i} style={{
                  padding: "16px 20px",
                  background: "var(--carbon)",
                  fontSize: "0.82rem",
                  color: "var(--pearl)",
                  borderLeft: "2px solid rgba(201,168,76,0.3)",
                }}>
                  {p}
                </div>
              ))}
            </div>
            <button
              aria-label="Book this event type — go to contact"
              className="btn-gold"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
            </button>
          </div>
        </div>

        {/* Venue grid */}
        <div style={{ marginTop: "40px" }}>
          <div className="label" style={{ marginBottom: "20px", color: "var(--silver)" }}>
            Venue Portfolio at a Glance
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px" }}>
            {VENUES.map((v, i) => (
              <div
                key={i}
                style={{
                  padding: "24px 20px",
                  background: "var(--smoke)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(10px)",
                  transition: `all 0.5s ease ${0.5 + i * 0.07}s`,
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--graphite)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--smoke)";
                }}
              >
                <div className="label" style={{ color: "var(--gold)", marginBottom: "6px", fontSize: "0.58rem" }}>
                  {v.type}
                </div>
                <div style={{ fontSize: "0.88rem", color: "var(--white)", marginBottom: "8px", fontWeight: 400 }}>
                  {v.name}
                </div>
                <div style={{ display: "flex", gap: "16px" }}>
                  <span style={{ fontSize: "0.7rem", color: "var(--silver)" }}>{v.cap} cap.</span>
                  <span style={{ fontSize: "0.7rem", color: "var(--ash)" }}>{v.sqft}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}