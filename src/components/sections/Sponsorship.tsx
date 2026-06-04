"use client";
import { useEffect, useRef, useState } from "react";
import BgImage from "@/components/ui/BgImage";
import ResponsiveGrid from "@/components/ui/ResponsiveGrid";

const TIERS = [
  {
    name: "Presenting Partner", badge: "TIER I",
    description: "The most premium partnership position at American Dream. Category exclusivity, property-wide branding, and co-branded programming rights.",
    activations: ["Naming rights for a key zone or venue","Category exclusivity across all channels","24/7 digital display network priority","Co-branded events and programming","Executive hospitality access","Annual marketing campaign integration"],
    audience: "40M+ annual reach", color: "var(--gold)",
  },
  {
    name: "Premier Partner", badge: "TIER II",
    description: "Broad property presence with a dedicated activation space, digital integration, and priority rights for high-traffic zones.",
    activations: ["Dedicated activation space (1,000 to 10,000 sq ft)","Digital display and social integration","Event co-sponsorship opportunities","Media and content access","Quarterly activation flexibility"],
    audience: "20M+ targeted reach", color: "var(--pearl)",
  },
  {
    name: "Associate Partner", badge: "TIER III",
    description: "Targeted, flexible activation opportunities across specific venues, events, or seasonal campaigns.",
    activations: ["Event-specific sponsorship","Zone or venue activation","Digital and social package","Seasonal campaign options"],
    audience: "5M+ per campaign", color: "var(--silver)",
  },
];

const CHANNELS = [
  { name: "In-Property Digital Network", detail: "500+ screens across 5.3M sq ft" },
  { name: "Social Media", detail: "Combined 2M+ followers across platforms" },
  { name: "Email Database", detail: "3.5M opted-in subscribers" },
  { name: "App & Website", detail: "8M+ monthly unique visitors" },
  { name: "Event Programming", detail: "200+ annual events, custom co-branding" },
  { name: "OOH & Environmental", detail: "200+ physical branding positions" },
];

export default function Sponsorship() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeTier, setActiveTier] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const tier = TIERS[activeTier];

  return (
    <section id="sponsorship" aria-label="Sponsorship and brand partnerships" ref={ref} className="snap" style={{ minHeight: "100vh", background: "var(--void)", position: "relative", overflow: "hidden", padding: "100px 60px 80px" }}>
      <BgImage src="https://image.pollinations.ai/prompt/luxury%20brand%20activation%20event%20inside%20shopping%20mall%20atrium%2C%20branded%20displays%20and%20immersive%20experience%20installations%2C%20dramatic%20lighting%2C%20photorealistic%208k?width=1400&height=900&nologo=true&seed=606" opacity={0.05} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <ResponsiveGrid cols={2} gap="60px" style={{ marginBottom: "64px", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s ease" }}>
          <div>
            <div className="label" style={{ marginBottom: "16px" }}>Brand Partnerships & Sponsorship</div>
            <span className="gold-line" style={{ marginBottom: "24px" }} />
            <h2 className="display" style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)", color: "var(--white)", marginTop: "20px" }}>
              Your brand.<br /><em style={{ color: "var(--gold)" }}>40 million people.</em>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.9, color: "var(--pearl)", fontWeight: 300 }}>
              American Dream is one of the most powerful brand platforms in the country.
              Our partnership program connects sponsors with 40M+ engaged, in-destination
              visitors per year. These are consumers who have made a physical commitment
              to be here. The engagement rate is unmatched by any traditional media channel.
            </p>
          </div>
        </ResponsiveGrid>

        {/* Tier tabs */}
        <div style={{ display: "flex", gap: "1px", marginBottom: "2px", flexWrap: "wrap" }}>
          {TIERS.map((t, i) => (
            <button key={i} onClick={() => setActiveTier(i)} style={{ flex: "1 1 120px", padding: "20px 16px", background: activeTier === i ? "var(--carbon)" : "var(--graphite)", border: "none", borderTop: activeTier === i ? `2px solid ${t.color}` : "2px solid transparent", cursor: "none", transition: "all 0.3s ease", opacity: visible ? 1 : 0, transitionDelay: `${0.2 + i * 0.08}s` }}>
              <div style={{ fontSize: "0.55rem", letterSpacing: "0.2em", color: t.color, fontFamily: "var(--font-body)", textTransform: "uppercase", marginBottom: "4px" }}>{t.badge}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: activeTier === i ? "var(--white)" : "var(--silver)", fontWeight: 300 }}>{t.name}</div>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div style={{ background: "var(--carbon)", padding: "48px", marginBottom: "40px", opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.4s" }}>
          <ResponsiveGrid cols={2} gap="60px">
            <div>
              <div style={{ display: "inline-block", padding: "6px 14px", border: `1px solid ${tier.color}`, color: tier.color, fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-body)", marginBottom: "20px" }}>
                {tier.badge}: {tier.name}
              </div>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "var(--pearl)", fontWeight: 300, marginBottom: "32px" }}>{tier.description}</p>
              <div style={{ padding: "20px 24px", background: "var(--graphite)", borderLeft: `2px solid ${tier.color}`, marginBottom: "32px" }}>
                <div className="label" style={{ marginBottom: "6px", color: "var(--silver)" }}>Audience Reach</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: tier.color, fontWeight: 300 }}>{tier.audience}</div>
              </div>
              <button aria-label="Request sponsorship package — go to contact" className="btn-gold" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                <span>Start a Partnership Conversation</span>
              </button>
            </div>
            <div>
              <div className="label" style={{ marginBottom: "20px", color: "var(--silver)" }}>Activation Opportunities</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {tier.activations.map((a, i) => (
                  <li key={i} style={{ padding: "14px 16px", background: "var(--graphite)", display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "0.83rem", color: "var(--pearl)", lineHeight: 1.5 }}>
                    <span style={{ color: tier.color, flexShrink: 0 }}>◆</span>{a}
                  </li>
                ))}
              </ul>
            </div>
          </ResponsiveGrid>
        </div>

        {/* Channels */}
        <div>
          <div className="label" style={{ marginBottom: "20px", color: "var(--silver)" }}>Media & Distribution Channels</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px" }}>
            {CHANNELS.map((ch, i) => (
              <div key={i} style={{ padding: "20px", background: "var(--graphite)", opacity: visible ? 1 : 0, transition: `opacity 0.5s ease ${0.6 + i * 0.06}s` }}>
                <div style={{ fontSize: "0.8rem", color: "var(--white)", marginBottom: "4px", fontWeight: 400 }}>{ch.name}</div>
                <div style={{ fontSize: "0.7rem", color: "var(--silver)" }}>{ch.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}