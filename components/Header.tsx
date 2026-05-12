"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/i18n";
import { openRegistrationModal } from "./RegistrationModal";

const navHrefs = [
  { key: "about" as const, href: "#about" },
  { key: "program" as const, href: "#program" },
  { key: "venue" as const, href: "#venue" },
  { key: "hotels" as const, href: "#hotels" },
  { key: "astana" as const, href: "#astana" },
  { key: "partners" as const, href: "#partners" },
  { key: "contact" as const, href: "#contact" },
];

const langOptions: { code: "en" | "ru" | "kk"; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "kk", label: "KZ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LanguageSwitcher = () => (
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      {langOptions.map((opt, idx) => (
        <span key={opt.code} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {idx > 0 && (
            <span style={{ color: "#8299b8", fontSize: "0.7rem", userSelect: "none" }}>|</span>
          )}
          <button
            onClick={() => setLang(opt.code)}
            style={{
              background: "none",
              border: "none",
              fontSize: "0.7rem",
              fontWeight: lang === opt.code ? 800 : 700,
              color: lang === opt.code ? "#0d1f4e" : "#8299b8",
              letterSpacing: "0.1em",
              cursor: "pointer",
              padding: "4px 2px",
            }}
          >
            {opt.label}
          </button>
        </span>
      ))}
    </div>
  );

  return (
    <header
      style={{
        position: "fixed",
        top: 44,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled
          ? "rgba(245,243,238,0.97)"
          : "rgba(245,243,238,0.85)",
        backdropFilter: "blur(10px)",
        borderBottom: scrolled
          ? "1px solid rgba(107,159,212,0.25)"
          : "1px solid transparent",
        transition: "all 0.4s ease",
        boxShadow: scrolled ? "0 4px 24px rgba(13,31,78,0.07)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/kds-logo-small.png" alt="KDS Logo" style={{ height: "52px", width: "auto" }} />
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden-mobile">
          {navHrefs.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {t.nav[item.key]}
            </a>
          ))}
          <LanguageSwitcher />
          <button
            onClick={openRegistrationModal}
            className="btn-gold"
            style={{ padding: "8px 18px", fontSize: "0.7rem", cursor: "pointer" }}
          >
            {t.nav.register}
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "#0d1f4e",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                transform:
                  menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(5px, 5px)"
                      : i === 2
                      ? "rotate(-45deg) translate(5px, -5px)"
                      : "opacity 0 scale(0)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(245,243,238,0.98)",
            borderTop: "1px solid rgba(107,159,212,0.2)",
            padding: "1.5rem 2rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {navHrefs.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: "0.85rem" }}
            >
              {t.nav[item.key]}
            </a>
          ))}
          <LanguageSwitcher />
          <button
            onClick={() => { setMenuOpen(false); openRegistrationModal(); }}
            className="btn-gold"
            style={{ alignSelf: "flex-start", cursor: "pointer" }}
          >
            {t.nav.register}
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
