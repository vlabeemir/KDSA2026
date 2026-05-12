"use client";
import { useLang } from "@/lib/i18n";
import { openRegistrationModal } from "./RegistrationModal";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#0a1830",
        color: "rgba(255,255,255,0.55)",
        padding: "3rem 2rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top border */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent, #c9a84c 30%, #6b9fd4 70%, transparent)",
        }}
      />

      {/* Background ornament */}
      <div
        style={{
          position: "absolute",
          right: "5%",
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      >
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" aria-hidden="true">
          <circle cx="150" cy="150" r="130" stroke="white" strokeWidth="2" />
          <circle cx="150" cy="150" r="80" stroke="white" strokeWidth="1.5" />
          {[0, 36, 72, 108, 144].map((deg) => (
            <line key={deg} x1="150" y1="20" x2="150" y2="280"
              stroke="white" strokeWidth="1" transform={`rotate(${deg} 150 150)`} />
          ))}
        </svg>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "1.25rem" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/kds-logo-small.png"
                alt="KDS Logo"
                style={{ height: "56px", width: "auto", filter: "brightness(0) invert(1)", opacity: 0.85 }}
              />
            </div>
            <p style={{ fontSize: "0.83rem", lineHeight: 1.75, color: "rgba(255,255,255,0.45)", maxWidth: "280px", marginBottom: "1.5rem" }}>
              {t.footer.desc}
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {[
                { label: "June 1, 2026", icon: "📅" },
                { label: "Astana, KZ", icon: "📍" },
              ].map(({ label, icon }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "4px",
                    padding: "5px 10px",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {icon} {label}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.15em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "1.25rem" }}>
              {t.footer.navTitle}
            </div>
            {t.footer.navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                style={{
                  display: "block",
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  marginBottom: "0.6rem",
                  transition: "color 0.3s ease",
                }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Organizers */}
          <div>
            <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.15em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "1.25rem" }}>
              {t.footer.organizersTitle}
            </div>
            <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.65)", fontWeight: 700, marginBottom: "4px" }}>
              Kazakhstan Drone Soccer
            </div>
            <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", marginBottom: "1.25rem" }}>
              {t.footer.officialOrg}
            </div>
            <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.65)", fontWeight: 700, marginBottom: "4px" }}>
              FIDA
            </div>
            <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", marginBottom: "1.5rem" }}>
              {t.footer.intlPartner}
            </div>
            <a
              href="https://dronesoccer.kz"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "#6b9fd4",
                textDecoration: "none",
                letterSpacing: "0.08em",
              }}
            >
              dronesoccer.kz ↗
            </a>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.15em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "1.25rem" }}>
              {t.footer.contactTitle}
            </div>
            {[
              { label: "Email", value: "info@dronesoccer.kz", href: "mailto:info@dronesoccer.kz" },
              { label: "Website", value: "dronesoccer.kz", href: "https://dronesoccer.kz" },
            ].map(({ label, value, href }) => (
              <div key={label} style={{ marginBottom: "1rem" }}>
                <div style={{ fontSize: "0.68rem", fontWeight: 700, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px" }}>
                  {label}
                </div>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
                >
                  {value}
                </a>
              </div>
            ))}

            <div style={{ marginTop: "1.25rem" }}>
              <button
                onClick={openRegistrationModal}
                className="btn-gold"
                style={{ padding: "10px 18px", fontSize: "0.7rem", cursor: "pointer" }}
              >
                {t.footer.register}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "1.75rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>
            © {year} Kazakhstan Drone Soccer. {t.footer.rights}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.25)",
            }}
          >
            <span>{t.footer.fidaNote}</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </footer>
  );
}
