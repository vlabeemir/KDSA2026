"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/i18n";
import { isTeamRegOpen } from "./RegistrationCountdown";

const LINKS = {
  guest: {
    ru: "https://forms.gle/r8SGqNSTDDjmmwvb9",
    en: "https://forms.gle/sc55d93PQ5JNguvz8",
  },
  media: {
    ru: "https://forms.gle/BAa9J37ZJiEcTtpE6",
    en: "https://forms.gle/DAsBge5bk3s1mmnr7",
  },
  participant: "https://forms.gle/5zGC9uzTPSb8gZ3J9",
};

export function openRegistrationModal() {
  window.dispatchEvent(new Event("openRegistrationModal"));
}

export default function RegistrationModal() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const { lang, t } = useLang();
  const teamRegOpen = isTeamRegOpen();

  const OPTIONS = [
    {
      key: "guest" as const,
      icon: "👥",
      label: t.registration.guest,
      desc: t.registration.guestDesc,
      color: "#6b9fd4",
    },
    {
      key: "media" as const,
      icon: "📷",
      label: t.registration.media,
      desc: t.registration.mediaDesc,
      color: "#c9a84c",
    },
    {
      key: "participant" as const,
      icon: "🏆",
      label: t.registration.participant,
      desc: t.registration.participantDesc,
      color: "#0d1f4e",
    },
  ];

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("openRegistrationModal", handler);
    return () => window.removeEventListener("openRegistrationModal", handler);
  }, []);

  if (!open) return null;

  function getLink(key: "guest" | "media" | "participant") {
    if (key === "participant") return LINKS.participant;
    const l = lang === "kk" ? "ru" : lang;
    return LINKS[key][l];
  }

  return (
    <div
      onClick={() => setOpen(false)}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(13,31,78,0.55)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: "16px",
          padding: "2.5rem",
          maxWidth: "480px",
          width: "100%",
          boxShadow: "0 24px 80px rgba(13,31,78,0.22)",
          position: "relative",
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "6px",
            color: "#6b7a99",
            fontSize: "1.2rem",
            lineHeight: 1,
          }}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Header */}
        <div style={{ marginBottom: "0.5rem" }}>
          <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b9fd4", marginBottom: "0.4rem" }}>
            {t.registration.label}
          </p>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 900, color: "#0d1f4e", lineHeight: 1.15, letterSpacing: "-0.01em" }}>
            {t.registration.title}
          </h2>
        </div>
        <div style={{ width: "40px", height: "2px", background: "linear-gradient(90deg, #c9a84c, #6b9fd4)", marginBottom: "1.75rem", borderRadius: "2px" }} />

        {/* Options */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {OPTIONS.map((opt) => {
            const isParticipantClosed = opt.key === "participant" && !teamRegOpen;
            if (isParticipantClosed) {
              return (
                <div
                  key={opt.key}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem 1.25rem",
                    borderRadius: "10px",
                    border: "1.5px solid rgba(107,159,212,0.15)",
                    background: "#f5f5f7",
                    opacity: 0.7,
                  }}
                >
                  <span style={{
                    fontSize: "1.6rem", width: "44px", height: "44px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(0,0,0,0.05)", borderRadius: "10px", flexShrink: 0,
                    filter: "grayscale(1)",
                  }}>
                    {opt.icon}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "0.9rem", fontWeight: 800, color: "#8299b8", marginBottom: "2px", textDecoration: "line-through" }}>
                      {opt.label}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#e07070", lineHeight: 1.4, fontWeight: 600 }}>
                      {t.participantClosed}
                    </div>
                  </div>
                </div>
              );
            }
            return (
            <a
              key={opt.key}
              href={getLink(opt.key)}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(opt.key)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem 1.25rem",
                borderRadius: "10px",
                border: `1.5px solid ${hovered === opt.key ? opt.color : "rgba(107,159,212,0.2)"}`,
                background: hovered === opt.key ? `${opt.color}08` : "#fafbfd",
                textDecoration: "none",
                transition: "all 0.2s ease",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  fontSize: "1.6rem",
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `${opt.color}12`,
                  borderRadius: "10px",
                  flexShrink: 0,
                }}
              >
                {opt.icon}
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.9rem", fontWeight: 800, color: "#0d1f4e", marginBottom: "2px" }}>
                  {opt.label}
                </div>
                <div style={{ fontSize: "0.75rem", color: "#6b7a99", lineHeight: 1.4 }}>
                  {opt.desc}
                </div>
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: opt.color, flexShrink: 0, opacity: hovered === opt.key ? 1 : 0.4, transition: "opacity 0.2s" }}>
                <path d="M3 8H13M8 3L13 8L8 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            );
          })}
        </div>

        <p style={{ fontSize: "0.68rem", color: "#8299b8", textAlign: "center", marginTop: "1.25rem" }}>
          {t.registration.footer}
        </p>
      </div>
    </div>
  );
}
