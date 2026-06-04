"use client";
import { useEffect, useRef, useState } from "react";
import React from "react";
import ResponsiveGrid from "@/components/ui/ResponsiveGrid";

const ATTRACTIONS = [
  { name: "Nickelodeon Universe", detail: "35+ rides across 8 acres. Largest indoor theme park in the Western Hemisphere", stat: "35+", statLabel: "Rides & attractions", icon: "🎢" },
  { name: "DreamWorks Water Park", detail: "North America's largest indoor water park. 40 waterslides, a surfing simulator, wave pool, and more", stat: "40", statLabel: "Waterslides", icon: "🌊" },
  { name: "Big SNOW", detail: "America's first and only year-round indoor real-snow ski slope. A true bucket-list experience", stat: "365", statLabel: "Days of real snow", icon: "⛷️" },
  { name: "Sea Life Aquarium", detail: "35,000 sq ft aquarium with 5,000+ sea creatures and immersive ocean tunnel experiences", stat: "5K+", statLabel: "Sea creatures", icon: "🦈" },
  { name: "The Rink", detail: "Full-size NHL-regulation ice skating rink open year-round for public and private events", stat: "NHL", statLabel: "Regulation size", icon: "⛸️" },
  { name: "Performix Arena", detail: "The property's dedicated live event and entertainment venue seating up to 5,000", stat: "5K", statLabel: "Capacity", icon: "🎭" },
];

export default function Entertainment() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="entertainment" ref={ref} className="snap" style={{ minHeight: "100vh", background: "var(--void)", position: "relative", overflow: "hidden", padding: "100px 60px" }}>

      {/* Scroll-triggered YouTube video background */}
      {visible && (
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
          <iframe
            src="https://www.youtube.com/embed/gwlgu79zBvQ?autoplay=1&mute=1&loop=1&playlist=gwlgu79zBvQ&controls=0&rel=0&modestbranding=1&playsinline=1&start=45"
            allow="autoplay; fullscreen"
            style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "177.78vh", minWidth: "100%", height: "56.25vw", minHeight: "100%", border: "none", opacity: 0.12, pointerEvents: "none" }}
            title="American Dream Entertainment"
          />
          {/* Dark overlay over video */}
          <div style={{ position: "absolute", inset: 0, background: "rgba(5,5,5,0.82)" }} />
        </div>
      )}

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: "56px", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s ease" }}>
          <div className="label" style={{ marginBottom: "16px" }}>Attractions & Entertainment</div>
          <span className="gold-line" style={{ marginBottom: "24px" }} />
          <h2 className="display" style={{ fontSize: "clamp(2rem, 5.5vw, 5.5rem)", color: "var(--white)", marginTop: "20px", maxWidth: "750px" }}>
            Six world-class attractions.<br /><em style={{ color: "var(--gold)" }}>Tens of millions of reasons to visit.</em>
          </h2>
        </div>

        <ResponsiveGrid cols={2} gap="4px" style={{ gridTemplateColumns: "minmax(180px, 2fr) 3fr" } as React.CSSProperties}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            {ATTRACTIONS.map((att, i) => (
              <button key={i} onClick={() => setActive(i)} style={{ background: active === i ? "var(--carbon)" : "var(--graphite)", border: "none", borderLeft: active === i ? "2px solid var(--gold)" : "2px solid transparent", padding: "18px 20px", textAlign: "left", cursor: "none", transition: "all 0.3s ease", opacity: visible ? 1 : 0, transitionDelay: `${0.1 + i * 0.07}s` }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "1.1rem" }}>{att.icon}</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", letterSpacing: "0.08em", color: active === i ? "var(--gold)" : "var(--pearl)", fontWeight: 400, textTransform: "uppercase", transition: "color 0.3s ease" }}>{att.name}</span>
                </div>
              </button>
            ))}
          </div>

          <div style={{ background: "var(--carbon)", padding: "44px 40px", position: "relative", overflow: "hidden", opacity: visible ? 1 : 0, transition: "opacity 0.8s ease 0.3s" }}>
            <div style={{ position: "absolute", bottom: "-20px", right: "20px", fontFamily: "var(--font-display)", fontSize: "10rem", fontWeight: 300, color: "rgba(201,168,76,0.04)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>{ATTRACTIONS[active].stat}</div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: "2.2rem", marginBottom: "14px" }}>{ATTRACTIONS[active].icon}</div>
              <div className="label" style={{ marginBottom: "10px" }}>Featured Attraction</div>
              <h3 className="display" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)", color: "var(--white)", marginBottom: "20px" }}>{ATTRACTIONS[active].name}</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--pearl)", fontWeight: 300, maxWidth: "440px", marginBottom: "32px" }}>{ATTRACTIONS[active].detail}</p>
              <div style={{ marginBottom: "36px" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2.8rem", color: "var(--gold-light)", fontWeight: 300, lineHeight: 1 }}>{ATTRACTIONS[active].stat}</div>
                <div className="label" style={{ color: "var(--silver)", marginTop: "4px" }}>{ATTRACTIONS[active].statLabel}</div>
              </div>
              <button className="btn-gold" onClick={() => document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })}><span>Activate with This Venue</span></button>
            </div>
          </div>
        </ResponsiveGrid>
      </div>
    </section>
  );
}