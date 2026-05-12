"use client";
import { useLang } from "@/lib/i18n";
import { openRegistrationModal } from "./RegistrationModal";

export default function Highlights() {
  const { t } = useLang();

  const ICONS = [
    (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 3L19.5 11.5H28L21.5 16.5L24 25L16 20L8 25L10.5 16.5L4 11.5H12.5L16 3Z"
          stroke="#c9a84c" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      </svg>
    ),
    (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="#6b9fd4" strokeWidth="1.5" fill="none" />
        <ellipse cx="16" cy="16" rx="12" ry="5" stroke="#6b9fd4" strokeWidth="1" fill="none" />
        <ellipse cx="16" cy="16" rx="5" ry="12" stroke="#6b9fd4" strokeWidth="1" fill="none" />
        <circle cx="16" cy="16" r="2.5" fill="#c9a84c" />
      </svg>
    ),
    (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="18" width="24" height="10" rx="2" stroke="#6b9fd4" strokeWidth="1.5" fill="none" />
        <path d="M10 18V12C10 9.8 11.8 8 14 8H18C20.2 8 22 9.8 22 12V18" stroke="#6b9fd4" strokeWidth="1.5" fill="none" />
        <path d="M16 8V4" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="3" r="1.5" fill="#c9a84c" />
      </svg>
    ),
    (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L20 12H28L22 17L24.5 25L16 20L7.5 25L10 17L4 12H12L16 4Z"
          stroke="#c9a84c" strokeWidth="1.5" fill="rgba(201,168,76,0.1)" strokeLinejoin="round" />
      </svg>
    ),
    (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="16" rx="3" stroke="#6b9fd4" strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="16" r="4" stroke="#c9a84c" strokeWidth="1.5" fill="none" />
        <line x1="16" y1="4" x2="16" y2="8" stroke="#6b9fd4" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="24" x2="16" y2="28" stroke="#6b9fd4" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="10" cy="12" r="4" stroke="#6b9fd4" strokeWidth="1.5" fill="none" />
        <circle cx="22" cy="12" r="4" stroke="#6b9fd4" strokeWidth="1.5" fill="none" />
        <path d="M2 26C2 22.7 5.6 20 10 20" stroke="#6b9fd4" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 20C26.4 20 30 22.7 30 26" stroke="#6b9fd4" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 28C14 25.2 14.9 22.7 16 22.7C17.1 22.7 18 25.2 18 28" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  ];
  const highlights = t.highlights.items.map((item, i) => ({ ...item, icon: ICONS[i] }));

  return (
    <section
      id="highlights"
      style={{
        padding: "6rem 2rem",
        background: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG decoration */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          border: "1px solid rgba(107,159,212,0.08)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "900px",
          borderRadius: "50%",
          border: "1px solid rgba(107,159,212,0.05)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-sep-center" />
          <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b9fd4", marginBottom: "0.75rem" }}>
            {t.highlights.label}
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 900,
              color: "#0d1f4e",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            {t.highlights.title}
          </h2>
          <p style={{ fontSize: "1rem", color: "#6b7a99", maxWidth: "480px", margin: "0 auto" }}>
            {t.highlights.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          {highlights.map(({ icon, title, desc, tag }) => (
            <div key={title} className="highlight-card">
              {/* Icon */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, rgba(13,31,78,0.04), rgba(107,159,212,0.1))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                  border: "1px solid rgba(107,159,212,0.15)",
                }}
              >
                {icon}
              </div>
              {/* Tag */}
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#6b9fd4",
                  background: "rgba(107,159,212,0.1)",
                  padding: "3px 10px",
                  borderRadius: "40px",
                  marginBottom: "0.75rem",
                }}
              >
                {tag}
              </span>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 800,
                  color: "#0d1f4e",
                  marginBottom: "0.6rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "#6b7a99", lineHeight: 1.65 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          style={{
            marginTop: "3rem",
            background: "linear-gradient(135deg, #0d1f4e, #1a3370)",
            borderRadius: "12px",
            padding: "2rem 2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "4px" }}>
              {t.highlights.cta}
            </div>
            <div style={{ color: "#fff", fontSize: "1.15rem", fontWeight: 800, letterSpacing: "-0.01em" }}>
              {t.highlights.ctaTitle}
            </div>
          </div>
          <button
            onClick={openRegistrationModal}
            className="btn-gold"
            style={{ cursor: "pointer" }}
          >
            {t.highlights.register}
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #highlights > div > div:nth-child(3) { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          #highlights > div > div:nth-child(3) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
