"use client";
import { openRegistrationModal } from "./RegistrationModal";
import { useLang } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLang();
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        background: "linear-gradient(160deg, #f8f6f1 0%, #eef2f8 40%, #f5f3ee 100%)",
        paddingTop: "116px",
      }}
    >
      {/* Hero background illustration */}
      <div
        className="animate-fadeIn"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {/* Left gradient — keeps text readable */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            background:
              "linear-gradient(to right, #f5f3ee 25%, rgba(245,243,238,0.6) 48%, rgba(245,243,238,0) 68%)",
          }}
        />
        <div
          className="animate-hero-float hero-bg-wrap"
          style={{
            position: "absolute",
            right: "-6%",
            bottom: "-4%",
            width: "78%",
            aspectRatio: "1 / 1",
            zIndex: 1,
            /* Fade all four edges with a CSS mask */
            maskImage:
              "radial-gradient(ellipse 80% 85% at 65% 55%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 85% at 65% 55%, black 30%, transparent 100%)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-bg.png"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "right bottom",
              mixBlendMode: "multiply",
            }}
          />
        </div>
      </div>

      {/* Ornament top-left */}
      <div className="hero-ornament" style={{ position: "absolute", top: 80, left: 0, opacity: 0.12, pointerEvents: "none", zIndex: 3 }}>
        <KazakhCornerOrnament />
      </div>
      {/* Ornament top-right */}
      <div className="hero-ornament" style={{ position: "absolute", top: 80, right: 0, opacity: 0.12, transform: "scaleX(-1)", pointerEvents: "none", zIndex: 3 }}>
        <KazakhCornerOrnament />
      </div>

      {/* Content */}
      <div
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          width: "100%",
          paddingTop: "6rem",
          paddingBottom: "20rem",
        }}
      >
        {/* FIDA badge */}
        <div className="animate-fadeIn" style={{ marginBottom: "1.5rem" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(13,31,78,0.06)",
              border: "1px solid rgba(107,159,212,0.4)",
              borderRadius: "40px",
              padding: "6px 16px",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#1a3370",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/fida-logo.png" alt="FIDA" style={{ height: "18px", width: "auto", verticalAlign: "middle" }} />
            {t.hero.badge}
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="animate-fadeUp opacity-0-init"
          style={{
            fontSize: "clamp(2.4rem, 6vw, 5rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            color: "#0d1f4e",
            letterSpacing: "-0.02em",
            maxWidth: "780px",
            marginBottom: "1.5rem",
          }}
        >
          {t.hero.title1}
          <br />
          <span className="text-gold-shimmer">{t.hero.title2}</span>
          <br />
          {t.hero.title3}
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fadeUp opacity-0-init d-200"
          style={{
            fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
            color: "#3a5080",
            fontWeight: 400,
            maxWidth: "520px",
            marginBottom: "2.5rem",
            lineHeight: 1.7,
          }}
        >
          {t.hero.subtitle}
        </p>

        {/* Meta pills */}
        <div
          className="animate-fadeUp opacity-0-init d-300"
          style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}
        >
          {[
            { icon: "📅", text: t.hero.date },
            { icon: "📍", text: t.hero.location },
            { icon: "🌐", text: t.hero.intl },
          ].map(({ icon, text }) => (
            <div
              key={text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#fff",
                border: "1px solid rgba(107,159,212,0.25)",
                borderRadius: "6px",
                padding: "8px 16px",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "#0d1f4e",
                boxShadow: "0 2px 8px rgba(13,31,78,0.06)",
              }}
            >
              <span style={{ fontSize: "1rem" }}>{icon}</span>
              {text}
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div
          className="animate-fadeUp opacity-0-init d-400"
          style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}
        >
          <button
            onClick={openRegistrationModal}
            className="btn-gold"
            style={{ cursor: "pointer" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L15 8L8 15M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t.hero.register}
          </button>
          <a href="#program" className="btn-outline-navy">
            {t.hero.program}
          </a>
          <a href="#contact" className="btn-navy" style={{ background: "transparent", border: "1.5px solid rgba(13,31,78,0.3)", color: "#0d1f4e" }}>
            {t.hero.contact}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          opacity: 0.5,
        }}
      >
        <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#3a5080", fontWeight: 600 }}>
          {t.hero.scroll}
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(180deg, #6b9fd4, transparent)",
            animation: "float 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}

function KazakhCornerOrnament() {
  return (
    <svg width="200" height="160" viewBox="0 0 200 160" fill="none" aria-hidden="true">
      <path d="M 10 10 Q 40 0 80 20 Q 120 40 160 20 Q 180 10 190 30 Q 200 50 180 70 Q 160 90 140 70 Q 120 50 100 70 Q 80 90 60 70 Q 40 50 20 70 Q 0 90 10 110 Q 20 130 40 120" stroke="#0d1f4e" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M 20 20 L 50 50 M 60 10 L 80 40 M 100 15 L 110 45" stroke="#c9a84c" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
      <circle cx="80" cy="80" r="20" stroke="#0d1f4e" strokeWidth="0.8" fill="none" />
      <circle cx="80" cy="80" r="8" stroke="#c9a84c" strokeWidth="0.8" fill="none" />
    </svg>
  );
}
