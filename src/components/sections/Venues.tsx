"use client";
import { useEffect, useRef, useState } from "react";

const VENUES = [
  {
    id: "performix",
    name: "Performix Arena",
    type: "Performing Arts & Live Events",
    icon: "🎭",
    capacity: "5,000",
    sqft: "28,000 sq ft",
    ceiling: "40 ft",
    highlights: [
      "Full rigging grid — 80,000 lb capacity",
      "Flexible floor: flat, tiered, or festival",
      "In-house broadcast & streaming infrastructure",
      "Artist green rooms, VIP suites & hospitality",
      "Loading dock access — semi-truck depth",
      "Dedicated box office & ticketing system",
    ],
    bestFor: ["Concerts & touring acts", "Award ceremonies", "Comedy shows", "Corporate keynotes", "Product launches"],
    color: "var(--gold)",
    stat: "5K",
    statLabel: "Seated capacity",
  },
  {
    id: "expo",
    name: "Exposition Center",
    type: "Convention & Trade Events",
    icon: "◈",
    capacity: "10,000+",
    sqft: "120,000 sq ft",
    ceiling: "30 ft",
    highlights: [
      "Column-free floor — 120,000 contiguous sq ft",
      "Divisible into 4 independent halls",
      "1 Gbps wired + wireless throughout",
      "Union labor access — IATSE & Teamsters",
      "On-floor catering & build kitchens",
      "Connected directly to hotel block (800+ rooms)",
    ],
    bestFor: ["Trade shows & expos", "Industry conferences", "B2B & B2C conventions", "Multi-day festivals", "Government & academic events"],
    color: "var(--electric)",
    stat: "120K",
    statLabel: "Sq ft contiguous",
  },
  {
    id: "atrium",
    name: "The Grand Atrium",
    type: "Signature Multi-Purpose Space",
    icon: "◇",
    capacity: "15,000+",
    sqft: "60,000 sq ft",
    ceiling: "Sky-lit, 80 ft",
    highlights: [
      "Architectural glass ceiling — natural + theatrical light",
      "Multi-level balconies for 360° activation",
      "Permanent AV & LED infrastructure",
      "Premium adjacency to luxury wing",
      "Retail integration — live launch to retail shelf",
      "Year-round programming calendar available",
    ],
    bestFor: ["Fashion shows & runway events", "Brand launch spectacles", "Pop-up retail activations", "Holiday & seasonal events", "Film & media shoots"],
    color: "var(--pearl)",
    stat: "15K+",
    statLabel: "Max capacity",
  },
  {
    id: "rink",
    name: "The Rink",
    type: "Seasonal & Year-Round Events",
    icon: "⛸️",
    capacity: "2,000",
    sqft: "16,000 sq ft",
    ceiling: "—",
    highlights: [
      "NHL-regulation ice surface",
      "Open year-round — convertible to dry floor",
      "Dasher board branding — full perimeter",
      "In-house PA & DJ booth",
      "Adjacent F&B & lounge activation",
      "Perfect for sponsored series & campaigns",
    ],
    bestFor: ["Sponsored skating events", "Sports brand activations", "Holiday campaigns", "Kids & family programming", "Private corporate skates"],
    color: "var(--gold-dim)",
    stat: "365",
    statLabel: "Days available",
  },
];

export default function Venues() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const v = VENUES[active];

  return (
    <section
      id="venues" aria-label="Venues — performing arts and expo"
      ref={ref}
      className="snap"
      style={{
        minHeight: "100vh",
        background: "var(--void)",
        position: "relative",
        overflow: "hidden",
        padding: "100px 60px 80px",
      }}
    >
      {/* Top gold accent line */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "2px",
        background: "linear-gradient(90deg, transparent, var(--gold) 30%, var(--gold) 70%, transparent)",
      }} />

      {/* Background large text watermark */}
      <div style={{
        position: "absolute",
        bottom: "-60px",
        right: "-40px",
        fontFamily: "var(--font-mono)",
        fontSize: "18vw",
        color: "rgba(201,168,76,0.018)",
        letterSpacing: "0.1em",
        pointerEvents: "none",
        lineHeight: 1,
        userSelect: "none",
      }}>
        VENUES
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          marginBottom: "56px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease",
        }}>
          <div>
            <div className="label" style={{ marginBottom: "16px" }}>Venues & Performing Arts</div>
            <span className="gold-line" style={{ marginBottom: "24px" }} />
            <h2 className="display" style={{
              fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
              color: "var(--white)",
              marginTop: "20px",
              lineHeight: 0.95,
            }}>
              Four world-class
              <br />
              <em style={{ color: "var(--gold)" }}>stages. Your brand.</em>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
            <p style={{
              fontSize: "0.95rem",
              lineHeight: 1.9,
              color: "var(--pearl)",
              fontWeight: 300,
              marginBottom: "28px",
            }}>
              American Dream&apos;s venue portfolio is unmatched in the Northeast. From a 5,000-seat
              performing arts arena to 120,000 sq ft of convention-grade exposition space, every
              venue combines world-class infrastructure with 40M+ annual visitor reach. No other
              property in the region offers this combination of scale, flexibility, and built-in audience.
            </p>
            <div style={{ display: "flex", gap: "24px" }}>
              {[
                { v: "4", l: "Dedicated venues" },
                { v: "200K+", l: "Total sq ft" },
                { v: "200+", l: "Events per year" },
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

        {/* Venue selector tabs */}
        <div style={{ display: "flex", gap: "1px", marginBottom: "2px" }}>
          {VENUES.map((venue, i) => (
            <button
              key={venue.id}
              onClick={() => setActive(i)}
              style={{
                flex: 1,
                padding: "18px 12px",
                background: active === i ? "var(--carbon)" : "var(--graphite)",
                border: "none",
                borderTop: active === i ? `2px solid ${venue.color}` : "2px solid transparent",
                cursor: "none",
                transition: "all 0.3s ease",
                opacity: visible ? 1 : 0,
                transitionDelay: `${0.2 + i * 0.06}s`,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "1.2rem", marginBottom: "6px" }}>{venue.icon}</div>
              <div style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.6rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: active === i ? venue.color : "var(--silver)",
                transition: "color 0.3s ease",
                lineHeight: 1.4,
              }}>
                {venue.name}
              </div>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div style={{
          background: "var(--carbon)",
          padding: "48px",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease 0.35s",
        }}>
          <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "60px" }}>
            {/* Left */}
            <div>
              {/* Venue header */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", marginBottom: "32px" }}>
                <div style={{ fontSize: "2.5rem" }}>{v.icon}</div>
                <div>
                  <div style={{
                    display: "inline-block",
                    padding: "4px 12px",
                    border: `1px solid ${v.color}`,
                    color: v.color,
                    fontSize: "0.58rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-body)",
                    marginBottom: "10px",
                  }}>
                    {v.type}
                  </div>
                  <h3 className="display" style={{
                    fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                    color: "var(--white)",
                    lineHeight: 1,
                  }}>
                    {v.name}
                  </h3>
                </div>
              </div>

              {/* Specs row */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2px",
                marginBottom: "36px",
              }}>
                {[
                  { label: "Max Capacity", value: v.capacity },
                  { label: "Total Area", value: v.sqft },
                  { label: "Ceiling Height", value: v.ceiling },
                ].map((spec, i) => (
                  <div key={i} style={{
                    padding: "20px 16px",
                    background: "var(--graphite)",
                    borderTop: `1px solid ${v.color}30`,
                  }}>
                    <div className="label" style={{ color: "var(--silver)", marginBottom: "6px", fontSize: "0.58rem" }}>
                      {spec.label}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.2rem",
                      color: v.color,
                      fontWeight: 300,
                    }}>
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="label" style={{ marginBottom: "14px", color: "var(--silver)" }}>
                Infrastructure & Features
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "36px" }}>
                {v.highlights.map((h, i) => (
                  <li key={i} style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    fontSize: "0.84rem",
                    color: "var(--pearl)",
                    lineHeight: 1.5,
                  }}>
                    <span style={{ color: v.color, flexShrink: 0, marginTop: "2px" }}>◆</span>
                    {h}
                  </li>
                ))}
              </ul>

              <button
                aria-label={`Inquire about this venue — go to contact`}
                className="btn-gold"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span>Inquire About This Venue</span>
              </button>
            </div>

            {/* Right */}
            <div>
              {/* Stat callout */}
              <div style={{
                padding: "32px",
                background: "var(--graphite)",
                borderLeft: `2px solid ${v.color}`,
                marginBottom: "28px",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  bottom: "-10px",
                  right: "10px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "5rem",
                  color: `${v.color}08`,
                  lineHeight: 1,
                  pointerEvents: "none",
                  userSelect: "none",
                }}>
                  {v.stat}
                </div>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "3.5rem",
                  color: v.color,
                  fontWeight: 300,
                  lineHeight: 1,
                  position: "relative",
                  zIndex: 1,
                }}>
                  {v.stat}
                </div>
                <div className="label" style={{ color: "var(--silver)", marginTop: "6px" }}>
                  {v.statLabel}
                </div>
              </div>

              {/* Best for */}
              <div className="label" style={{ marginBottom: "14px", color: "var(--silver)" }}>
                Best For
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "36px" }}>
                {v.bestFor.map((use, i) => (
                  <div key={i} style={{
                    padding: "12px 16px",
                    background: "var(--graphite)",
                    fontSize: "0.8rem",
                    color: "var(--pearl)",
                    borderLeft: `2px solid ${v.color}40`,
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}>
                    <span style={{ color: v.color, fontSize: "0.45rem" }}>◆</span>
                    {use}
                  </div>
                ))}
              </div>

              {/* Explore all events link */}
              <div style={{
                padding: "20px",
                border: "1px solid rgba(201,168,76,0.15)",
                background: "var(--gold-subtle)",
                fontSize: "0.78rem",
                color: "var(--silver)",
                lineHeight: 1.6,
              }}>
                <div style={{ color: "var(--gold)", marginBottom: "6px", letterSpacing: "0.1em", fontSize: "0.62rem", textTransform: "uppercase", fontFamily: "var(--font-body)" }}>
                  Part of the Platform
                </div>
                All American Dream venues are supported by a full production team,
                in-house A/V, catering infrastructure, and a dedicated event services
                manager assigned to every booking.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div style={{
          marginTop: "28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 32px",
          background: "var(--graphite)",
          borderTop: "1px solid rgba(201,168,76,0.1)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.8s ease 0.6s",
        }}>
          <div>
            <div style={{ fontSize: "0.88rem", color: "var(--white)", marginBottom: "4px" }}>
              Ready to book a venue?
            </div>
            <div style={{ fontSize: "0.72rem", color: "var(--silver)" }}>
              Our events team is available for site visits, custom proposals, and holds.
            </div>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              aria-label="View event types — go to events section"
              className="btn-gold"
              onClick={() => document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })}
              style={{ borderColor: "rgba(255,255,255,0.2)", color: "var(--pearl)" }}
            >
              <span>View Event Types</span>
            </button>
            <button
              aria-label="Book a site visit — go to contact"
              className="btn-gold"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span>Book a Site Visit →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}