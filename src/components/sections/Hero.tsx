"use client";
import { useEffect, useState } from "react";

const STATS = [
  { value: "5.3M", label: "Sq Ft" },
  { value: "40M+", label: "Annual Visitors" },
  { value: "500+", label: "Brands & Tenants" },
  { value: "#1", label: "Entertainment Destination in the US" },
];

// AI-generated poster image via Pollinations (no key needed, free)
const AI_POSTER =
  "https://image.pollinations.ai/prompt/cinematic%20aerial%20view%20of%20massive%20luxury%20shopping%20mall%20complex%20at%20dusk%20with%20golden%20lights%20glowing%2C%20New%20Jersey%2C%20photorealistic%2C%208k%2C%20dramatic%20sky?width=1920&height=1080&nologo=true&seed=42";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [videoActive, setVideoActive] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLoaded(true), 400);
    const t2 = setTimeout(() => setStatsVisible(true), 1300);
    setVideoActive(true);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section id="hero" className="snap" aria-label="Hero — American Dream introduction" style={{
      position: "relative",
      height: "100vh",
      width: "100%",
      overflow: "hidden",
    }}>

      {/* ── AI-generated poster — shows immediately, zero LCP cost ── */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url('${AI_POSTER}')`,
        backgroundSize: "cover",
        backgroundPosition: "center 35%",
        opacity: 0.42,
        zIndex: 0,
        transition: "opacity 1s ease",
      }} />

      {/* ── YouTube iframe — lazy-loaded after 3s so Lighthouse scores poster ── */}
      {videoActive && (
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 1 }}>
          <iframe
            src="https://www.youtube-nocookie.com/embed/9dA5PovTvgg?autoplay=1&mute=1&loop=1&playlist=9dA5PovTvgg&controls=0&rel=0&modestbranding=1&playsinline=1&start=5"
            allow="autoplay; fullscreen"
            style={{
              position: "absolute",
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: "177.78vh",
              minWidth: "100%",
              height: "56.25vw",
              minHeight: "100%",
              border: "none",
              opacity: 0.38,
              pointerEvents: "none",
            }}
            title="American Dream"
          />
        </div>
      )}

      {/* ── Dark vignette so text always readable ── */}
      <div style={{
        position: "absolute", inset: 0,
        background: `
          linear-gradient(180deg,
            rgba(5,5,5,0.65) 0%,
            rgba(5,5,5,0.2) 35%,
            rgba(5,5,5,0.2) 55%,
            rgba(5,5,5,0.88) 82%,
            rgba(5,5,5,1)   100%
          )`,
      }} />

      {/* ── Gold radial glow ── */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(201,168,76,0.06) 0%, transparent 70%)",
      }} />

      {/* ── Vertical grid lines (subtle) ── */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: 0.04, pointerEvents: "none" }}>
        {[...Array(9)].map((_, i) => (
          <div key={i} style={{
            position: "absolute",
            left: `${(i + 1) * 10}%`,
            top: 0, bottom: 0, width: "1px",
            background: "linear-gradient(to bottom, transparent, var(--gold) 40%, var(--gold) 60%, transparent)",
          }} />
        ))}
      </div>

      {/* Content pinned in the safe zone: top=68px (nav), bottom=124px (stats bar) */}
      {/* Eyebrow — sits just below nav, independent of content block */}
      <div className="label" style={{
        position: "absolute",
        top: "84px",
        left: 0, right: 0,
        textAlign: "center",
        zIndex: 10,
        opacity: loaded ? 1 : 0,
        transform: loaded ? "translateY(0)" : "translateY(12px)",
        transition: "all 0.8s ease 0.2s",
        color: "var(--gold)",
        fontSize: "0.6rem",
      }}>
        East Rutherford, New Jersey &nbsp;·&nbsp; 10 Minutes from New York City
      </div>

      {/* Safe zone: top=120px (nav+eyebrow), bottom=140px (stats bar + breathing room) */}
      <div style={{
        position: "absolute",
        top: "120px",
        bottom: "140px",
        left: 0,
        right: 0,
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 40px",
        overflow: "hidden",
      }}>
        {/* Title */}
        <h1 className="display" style={{
          fontSize: "clamp(3rem, 9vw, 8rem)",
          color: "var(--white)",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(36px)",
          transition: "all 1s ease 0.4s",
          marginBottom: "2px",
          textShadow: "0 6px 48px rgba(0,0,0,0.7)",
          lineHeight: 0.92,
          whiteSpace: "nowrap",
        }}>
          American
        </h1>
        <h1 className="display" style={{
          fontSize: "clamp(3rem, 9vw, 8rem)",
          color: "var(--gold)",
          fontStyle: "italic",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(36px)",
          transition: "all 1s ease 0.55s",
          marginBottom: "24px",
          textShadow: "0 6px 48px rgba(201,168,76,0.3)",
          lineHeight: 0.92,
          whiteSpace: "nowrap",
        }}>
          Dream
        </h1>

        {/* Tagline */}
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(0.8rem, 1.4vw, 1rem)",
          fontWeight: 300,
          color: "var(--pearl)",
          letterSpacing: "0.03em",
          maxWidth: "460px",
          marginBottom: "32px",
          lineHeight: 1.8,
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(18px)",
          transition: "all 0.8s ease 0.8s",
        }}>
          The world&apos;s most entertaining destination. 5.3 million square feet
          of retail, dining, wonder, and opportunity unlike anything on Earth.
        </p>

        {/* CTAs */}
        <div style={{
          display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.8s ease 1s",
        }}>
          <button aria-label="Explore leasing opportunities" className="btn-gold"
            onClick={() => document.getElementById("leasing")?.scrollIntoView({ behavior: "smooth" })}>
            <span>Explore Leasing</span>
          </button>
          <button aria-label="Discover the property — go to why section" className="btn-gold"
            style={{ borderColor: "rgba(255,255,255,0.22)", color: "var(--pearl)" }}
            onClick={() => document.getElementById("why")?.scrollIntoView({ behavior: "smooth" })}>
            <span>Discover the Property</span>
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          STATS BAR
          Fixed to section bottom. z-index 20 so it's
          above hero content but below nav (2000).
      ══════════════════════════════════════════ */}
      <div style={{
        position: "absolute",
        bottom: 0, left: 0, right: 0,
        height: "124px",
        zIndex: 30,                           /* below nav (2000), above hero bg */
        background: "rgba(5,5,5,0.94)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(201,168,76,0.14)",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        alignItems: "center",
        padding: "0 60px",
      }}>
        {/* Vertical dividers */}
        {[1, 2, 3].map((i) => (
          <div key={i} style={{
            position: "absolute",
            left: `${i * 25}%`,
            top: "22%", bottom: "22%",
            width: "1px",
            background: "rgba(201,168,76,0.1)",
          }} />
        ))}

        {STATS.map((stat, i) => (
          <div key={i} style={{
            textAlign: "center",
            opacity: statsVisible ? 1 : 0,
            transform: statsVisible ? "translateY(0)" : "translateY(10px)",
            transition: `all 0.55s ease ${i * 0.11}s`,
          }}>
            <div style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.7rem, 3.2vw, 2.7rem)",
              fontWeight: 300,
              color: "var(--gold-light)",
              lineHeight: 1,
            }}>
              {stat.value}
            </div>
            <div className="label" style={{
              marginTop: "7px",
              color: "var(--silver)",
              fontSize: "0.56rem",
              lineHeight: 1.4,
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll mouse indicator — sits just above stats bar */}
      <div style={{
        position: "absolute",
        bottom: "148px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 15,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "7px",
        opacity: loaded ? 0.4 : 0,
        transition: "opacity 0.8s ease 1.6s",
        animation: "scrollBounce 2.2s ease-in-out infinite 2s",
        pointerEvents: "none",
      }}>
        <style>{`
          @keyframes scrollBounce {
            0%,100% { transform: translateX(-50%) translateY(0); }
            50%      { transform: translateX(-50%) translateY(5px); }
          }
        `}</style>
        <span className="label" style={{ fontSize: "0.48rem", color: "var(--silver)" }}>
          Scroll to explore
        </span>
        <svg width="13" height="21" viewBox="0 0 16 24" fill="none">
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="rgba(201,168,76,0.45)" strokeWidth="1.2"/>
          <circle cx="8" cy="8" r="2" fill="var(--gold)">
            <animate attributeName="cy" values="8;14;8" dur="1.6s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>
    </section>
  );
}