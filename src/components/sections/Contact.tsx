"use client";
import { useEffect, useRef, useState } from "react";
import ResponsiveGrid from "@/components/ui/ResponsiveGrid";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [interest, setInterest] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const interests = ["Retail Leasing", "Luxury Leasing", "F&B Leasing", "Pop-Up Space", "Event Booking", "Brand Partnership"];

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="snap"
      style={{
        minHeight: "100vh",
        background: "var(--obsidian)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 60px",
      }}
    >
      {/* Decorative radial */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "800px",
        height: "800px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Top gold line */}
      <div style={{
        position: "absolute",
        top: 0,
        left: "10%",
        right: "10%",
        height: "1px",
        background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
      }} />

      <div style={{
        maxWidth: "900px",
        width: "100%",
        position: "relative",
        zIndex: 1,
      }}>
        {!submitted ? (
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease",
          }}>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <div className="label" style={{ marginBottom: "16px" }}>Let&apos;s Talk</div>
              <span className="gold-line" style={{ margin: "0 auto 24px", display: "block", width: "60px" }} />
              <h2 className="display" style={{
                fontSize: "clamp(3rem, 8vw, 7rem)",
                color: "var(--white)",
                marginTop: "20px",
                lineHeight: 0.95,
              }}>
                Be part of the
                <br />
                <em style={{ color: "var(--gold)" }}>dream.</em>
              </h2>
              <p style={{
                marginTop: "28px",
                fontSize: "1rem",
                color: "var(--silver)",
                maxWidth: "480px",
                margin: "28px auto 0",
                lineHeight: 1.8,
                fontWeight: 300,
              }}>
                Our commercial team is ready to discuss leasing, partnerships,
                and event opportunities tailored to your brand.
              </p>
            </div>

            {/* Form */}
            <ResponsiveGrid cols={2} gap="16px" style={{ marginBottom: "20px" }}>
              {[
                { label: "First Name", placeholder: "Jane" },
                { label: "Last Name", placeholder: "Smith" },
                { label: "Company", placeholder: "Brand / Agency" },
                { label: "Email", placeholder: "jane@brand.com" },
              ].map((field) => (
                <div key={field.label}>
                  <div className="label" style={{ marginBottom: "8px", color: "var(--silver)" }}>{field.label}</div>
                  <input
                    placeholder={field.placeholder}
                    style={{
                      width: "100%",
                      background: "var(--carbon)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      padding: "14px 16px",
                      color: "var(--white)",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.85rem",
                      outline: "none",
                      transition: "border-color 0.3s ease",
                      cursor: "text",
                    }}
                    onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(201,168,76,0.4)"; }}
                    onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
                  />
                </div>
              ))}
            </ResponsiveGrid>

            {/* Interest selector */}
            <div style={{ marginBottom: "20px" }}>
              <div className="label" style={{ marginBottom: "12px", color: "var(--silver)" }}>I&apos;m interested in</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {interests.map((int) => (
                  <button
                    key={int}
                    onClick={() => setInterest(int)}
                    style={{
                      padding: "10px 20px",
                      border: `1px solid ${interest === int ? "var(--gold)" : "rgba(255,255,255,0.1)"}`,
                      background: interest === int ? "var(--gold-subtle)" : "transparent",
                      color: interest === int ? "var(--gold)" : "var(--silver)",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      cursor: "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {int}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div style={{ marginBottom: "32px" }}>
              <div className="label" style={{ marginBottom: "8px", color: "var(--silver)" }}>Message (Optional)</div>
              <textarea
                placeholder="Tell us about your project, timeline, or space requirements..."
                rows={4}
                style={{
                  width: "100%",
                  background: "var(--carbon)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "14px 16px",
                  color: "var(--white)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  outline: "none",
                  resize: "vertical",
                  cursor: "text",
                  transition: "border-color 0.3s ease",
                }}
                onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "rgba(201,168,76,0.4)"; }}
                onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
              />
            </div>

            {/* Submit */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: "0.72rem", color: "var(--ash)", maxWidth: "280px", lineHeight: 1.6 }}>
                Your inquiry will be routed directly to our commercial team.
                Expect a response within 1 business day.
              </div>
              <button
                className="btn-gold"
                onClick={handleSubmit}
                style={{ padding: "16px 48px" }}
              >
                <span>Send Inquiry →</span>
              </button>
            </div>
          </div>
        ) : (
          /* Thank you state */
          <div style={{
            textAlign: "center",
            opacity: 1,
          }}>
            <div style={{ fontSize: "4rem", marginBottom: "24px" }}>◆</div>
            <h2 className="display" style={{
              fontSize: "clamp(3rem, 7vw, 6rem)",
              color: "var(--gold)",
              marginBottom: "24px",
            }}>
              Thank you.
            </h2>
            <p style={{
              fontSize: "1rem",
              color: "var(--pearl)",
              maxWidth: "440px",
              margin: "0 auto",
              lineHeight: 1.8,
              fontWeight: 300,
            }}>
              Your inquiry has been received. Our commercial team will be in touch
              within one business day to continue the conversation.
            </p>
            <button
              style={{
                marginTop: "40px",
                background: "none",
                border: "none",
                color: "var(--gold)",
                cursor: "none",
                fontFamily: "var(--font-body)",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "underline",
                textDecorationColor: "rgba(201,168,76,0.3)",
              }}
              onClick={() => setSubmitted(false)}
            >
              Submit another inquiry
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{
        position: "absolute",
        bottom: "32px",
        left: "60px",
        right: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        opacity: 0.4,
      }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", color: "var(--silver)" }}>
          American Dream · East Rutherford, NJ
        </div>
        <div style={{ fontSize: "0.65rem", color: "var(--silver)", letterSpacing: "0.1em", fontFamily: "var(--font-body)" }}>
          © 2025 AMERICAN DREAM MALL. ALL RIGHTS RESERVED.
        </div>
      </div>
    </section>
  );
}