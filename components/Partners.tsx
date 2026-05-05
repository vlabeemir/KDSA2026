"use client";

export default function Partners() {
  return (
    <section
      id="partners"
      style={{
        padding: "6rem 2rem",
        background: "#f5f3ee",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-sep-center" />
          <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b9fd4", marginBottom: "0.75rem" }}>
            Official Support
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
            Organizers & Partners
          </h2>
          <p style={{ fontSize: "1rem", color: "#6b7a99", maxWidth: "480px", margin: "0 auto" }}>
            The championship is organized by Kazakhstan Drone Soccer (KDS) in official partnership with FIDA.
          </p>
        </div>

        {/* Main partners */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1px 1fr",
            gap: "0",
            marginBottom: "4rem",
            background: "#fff",
            borderRadius: "12px",
            border: "1px solid rgba(107,159,212,0.2)",
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(13,31,78,0.06)",
          }}
        >
          {/* Organizer */}
          <div style={{ padding: "3rem 3rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
            <div
              style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#8299b8",
                marginBottom: "-0.5rem",
              }}
            >
              Organizer
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/kds-logo-full.png" alt="Kazakhstan Drone Soccer" style={{ height: "80px", width: "auto", objectFit: "contain" }} />
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1rem", fontWeight: 800, color: "#0d1f4e", marginBottom: "6px" }}>
                Kazakhstan Drone Soccer
              </div>
              <div style={{ fontSize: "0.82rem", color: "#6b7a99", lineHeight: 1.6 }}>
                The national federation of drone soccer in Kazakhstan,
                promoting the sport at all levels — from grassroots to elite competition.
              </div>
            </div>
            <a
              href="https://dronesoccer.kz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-navy"
              style={{ padding: "10px 20px", fontSize: "0.7rem" }}
            >
              dronesoccer.kz ↗
            </a>
          </div>

          {/* Divider */}
          <div style={{ background: "rgba(107,159,212,0.15)", width: "1px" }} />

          {/* International Partner */}
          <div style={{ padding: "3rem 3rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
            <div
              style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#8299b8",
                marginBottom: "-0.5rem",
              }}
            >
              International Partner
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/fida-logo.png" alt="FIDA" style={{ height: "80px", width: "auto", objectFit: "contain" }} />
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1rem", fontWeight: 800, color: "#0d1f4e", marginBottom: "6px" }}>
                FIDA
              </div>
              <div style={{ fontSize: "0.82rem", color: "#6b7a99", lineHeight: 1.6 }}>
                The Federation of International Drone Soccer Association — the global governing
                body for drone soccer, setting the rules and standards for international competition.
              </div>
            </div>
            <div className="btn-outline-navy" style={{ padding: "10px 20px", fontSize: "0.7rem", cursor: "default" }}>
              Official Partner
            </div>
          </div>
        </div>

        {/* Additional sponsors row */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <p
            style={{
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#8299b8",
              marginBottom: "1.5rem",
            }}
          >
            Supported By
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4rem",
              flexWrap: "wrap",
            }}
          >
            {[
              { logo: "/logo-astanadaryny.png", alt: "Astana Daryny", sub: "City Authority" },
              { logo: "/logo-droned.png", alt: "DronED", sub: "Technology Partner" },
              { logo: "/logo-astanahub.svg", alt: "Astana Hub", sub: "Innovation Partner" },
            ].map(({ logo, alt, sub }) => (
              <div key={alt} style={{ textAlign: "center" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo}
                  alt={alt}
                  style={{
                    height: "52px",
                    width: "auto",
                    maxWidth: "160px",
                    objectFit: "contain",
                    display: "block",
                    margin: "0 auto 10px",
                    filter: "grayscale(20%)",
                    opacity: 0.85,
                  }}
                />
                <div style={{ fontSize: "0.65rem", color: "#8299b8", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>
                  {sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Become a partner CTA */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(13,31,78,0.04), rgba(107,159,212,0.08))",
            border: "1px solid rgba(107,159,212,0.2)",
            borderRadius: "10px",
            padding: "2rem 2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#8299b8", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "4px" }}>
              Partnership Opportunities
            </div>
            <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0d1f4e" }}>
              Interested in becoming a partner or sponsor?
            </div>
          </div>
          <a href="#contact" className="btn-navy">
            Contact Organizers
          </a>
        </div>
      </div>

    </section>
  );
}
