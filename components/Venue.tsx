"use client";
import { useLang } from "@/lib/i18n";

export default function Venue() {
  const { t } = useLang();

  return (
    <section
      id="venue"
      style={{
        padding: "6rem 2rem",
        background: "#f5f3ee",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="section-sep-center" />
          <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b9fd4", marginBottom: "0.75rem" }}>
            {t.venue.label}
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
            {t.venue.title}
          </h2>
          <p style={{ fontSize: "1rem", color: "#6b7a99", maxWidth: "460px", margin: "0 auto" }}>
            {t.venue.subtitle}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          {/* Map placeholder */}
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(107,159,212,0.25)",
              background: "#fff",
              aspectRatio: "4/3",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MapPlaceholderSVG />
            {/* Coming soon overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(0deg, rgba(245,243,238,0.98) 0%, rgba(245,243,238,0.85) 60%, transparent 100%)",
                padding: "2rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "linear-gradient(135deg, #c9a84c, #e8c96a)",
                  color: "#0d1f4e",
                  padding: "8px 20px",
                  borderRadius: "40px",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  boxShadow: "0 4px 16px rgba(201,168,76,0.3)",
                  animation: "pulse-pin 2.5s ease-in-out infinite",
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#0d1f4e",
                    display: "inline-block",
                    animation: "blink 2s ease-in-out infinite",
                  }}
                />
                {t.venue.comingSoon}
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 900,
                color: "#0d1f4e",
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              {t.venue.cityTitle}
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#3a5080", lineHeight: 1.8, marginBottom: "2rem" }}>
              {t.venue.desc}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {t.venue.details.map(({ label, value }, i) => {
                const icons = ["🏙️", "🌍", "📅", "📍"];
                return (
              {[
                { icon: "🏙️", label: "City", value: "Astana" },
                { icon: "🌍", label: "Country", value: "Republic of Kazakhstan" },
                { icon: "📅", label: "Date", value: "June 1, 2026" },
                { icon: "📍", label: "Venue", value: "To be announced" },
              ].map(({ icon, label, value }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "0.875rem 1.25rem",
                    background: "#fff",
                    borderRadius: "8px",
                    border: "1px solid rgba(107,159,212,0.15)",
                  }}
                >
                  <span style={{ fontSize: "1.1rem", width: "24px", textAlign: "center" }}>{icons[i]}</span>
                  <div>
                    <div style={{ fontSize: "0.68rem", fontWeight: 700, color: "#8299b8", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      {label}
                    </div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#0d1f4e" }}>
                      {value}
                    </div>
                  </div>
                </div>
                );
              })}
            </div>

            <p style={{ fontSize: "0.8rem", color: "#8299b8", lineHeight: 1.7, borderLeft: "2px solid rgba(107,159,212,0.3)", paddingLeft: "1rem" }}>
              {t.venue.mapNote}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #venue > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function MapPlaceholderSVG() {
  return (
    <svg
      viewBox="0 0 600 450"
      style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="mapGrad" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#e8f0f8" />
          <stop offset="100%" stopColor="#dce8f0" />
        </radialGradient>
      </defs>
      <rect width="600" height="450" fill="url(#mapGrad)" />

      {/* Grid lines simulating map */}
      {[60, 120, 180, 240, 300, 360, 420].map((y) => (
        <line key={`h${y}`} x1="0" y1={y} x2="600" y2={y} stroke="#b8d0e8" strokeWidth="0.7" opacity="0.5" />
      ))}
      {[75, 150, 225, 300, 375, 450, 525].map((x) => (
        <line key={`v${x}`} x1={x} y1="0" x2={x} y2="450" stroke="#b8d0e8" strokeWidth="0.7" opacity="0.5" />
      ))}

      {/* Simulated roads */}
      <path d="M 0 225 Q 150 200 300 225 Q 450 250 600 225" fill="none" stroke="#fff" strokeWidth="8" opacity="0.7" />
      <path d="M 300 0 Q 280 150 300 225 Q 320 300 300 450" fill="none" stroke="#fff" strokeWidth="8" opacity="0.7" />
      <path d="M 0 320 Q 200 310 400 330 Q 500 340 600 320" fill="none" stroke="#fff" strokeWidth="5" opacity="0.5" />
      <path d="M 150 0 Q 160 150 150 300" fill="none" stroke="#fff" strokeWidth="5" opacity="0.5" />
      <path d="M 450 100 Q 440 250 450 400" fill="none" stroke="#fff" strokeWidth="5" opacity="0.5" />

      {/* Simulated blocks */}
      {[
        [40, 100, 80, 50], [140, 80, 60, 60], [40, 170, 90, 40],
        [330, 80, 80, 60], [420, 100, 60, 50], [330, 160, 70, 50],
        [40, 270, 90, 50], [150, 270, 60, 50], [40, 340, 80, 60],
        [330, 270, 80, 50], [430, 270, 60, 60], [330, 350, 70, 50],
      ].map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} fill="#c8daea" rx="3" opacity="0.6" />
      ))}

      {/* Pin marker at center */}
      <g transform="translate(300, 195)">
        {/* Pulsing ring */}
        <circle cx="0" cy="0" r="30" fill="rgba(201,168,76,0.15)" style={{ animation: "pulse-pin 2.5s ease-in-out infinite" }} />
        <circle cx="0" cy="0" r="18" fill="rgba(201,168,76,0.25)" />
        {/* Pin */}
        <circle cx="0" cy="-6" r="12" fill="#c9a84c" />
        <path d="M 0 6 L -6 -2 L 6 -2 Z" fill="#c9a84c" />
        {/* Inner dot */}
        <circle cx="0" cy="-6" r="5" fill="#fff" />
      </g>

      {/* Blur overlay at bottom */}
      <rect x="0" y="300" width="600" height="150" fill="url(#mapGrad)" opacity="0.5" />
    </svg>
  );
}
