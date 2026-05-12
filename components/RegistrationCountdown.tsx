"use client";
import React, { useState, useEffect } from "react";
import { useLang } from "@/lib/i18n";
import { openRegistrationModal } from "./RegistrationModal";

export const TEAM_REG_DEADLINE = new Date("2026-05-15T23:59:59");

export function isTeamRegOpen() {
  return new Date() < TEAM_REG_DEADLINE;
}

function getTimeLeft() {
  const diff = TEAM_REG_DEADLINE.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function RegistrationCountdown() {
  const { t } = useLang();
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft>>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft());
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const bannerBase: React.CSSProperties = {
    position: "sticky",
    top: 0,
    height: "44px",
    zIndex: 110,
    borderBottom: "1px solid rgba(201,168,76,0.3)",
  };

  if (!mounted) return (
    <div style={{ ...bannerBase, background: "linear-gradient(90deg, #0d1f4e 0%, #1a3370 50%, #0d1f4e 100%)" }} />
  );

  const isOpen = timeLeft !== null;

  return (
    <div
      style={{
        ...bannerBase,
        background: isOpen
          ? "linear-gradient(90deg, #0d1f4e 0%, #1a3370 50%, #0d1f4e 100%)"
          : "linear-gradient(90deg, #3a5080 0%, #6b7a99 100%)",
        color: "#fff",
        padding: "0 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        flexWrap: "wrap",
      }}
    >
      {isOpen ? (
        <>
          {/* Pulsing dot */}
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{
              width: 7, height: 7, borderRadius: "50%",
              background: "#c9a84c",
              display: "inline-block",
              animation: "blink 1.4s ease-in-out infinite",
            }} />
            <span style={{
              fontSize: "0.72rem", fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.75)",
            }}>
              {t.countdown.label}
            </span>
          </span>

          {/* Countdown units */}
          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            {[
              { val: timeLeft!.days, label: t.countdown.days },
              { val: timeLeft!.hours, label: t.countdown.hours },
              { val: timeLeft!.minutes, label: t.countdown.minutes },
              { val: timeLeft!.seconds, label: t.countdown.seconds },
            ].map(({ val, label }, i) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                {i > 0 && <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "1rem" }}>:</span>}
                <div style={{ textAlign: "center" }}>
                  <div style={{
                    background: "rgba(201,168,76,0.15)",
                    border: "1px solid rgba(201,168,76,0.35)",
                    borderRadius: "5px",
                    padding: "2px 8px",
                    minWidth: "36px",
                    fontSize: "1rem",
                    fontWeight: 900,
                    color: "#e8c96a",
                    fontVariantNumeric: "tabular-nums",
                    lineHeight: 1.3,
                  }}>
                    {pad(val)}
                  </div>
                  <div style={{
                    fontSize: "0.55rem", fontWeight: 700,
                    color: "rgba(255,255,255,0.4)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginTop: "2px",
                  }}>
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <button
            onClick={openRegistrationModal}
            style={{
              background: "linear-gradient(135deg, #c9a84c, #e8c96a)",
              color: "#0d1f4e",
              border: "none",
              borderRadius: "4px",
              padding: "5px 14px",
              fontSize: "0.7rem",
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            {t.countdown.register}
          </button>
        </>
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "rgba(255,255,255,0.9)" }}>
            🔒 {t.countdown.closed}
          </span>
          <span style={{
            fontSize: "0.72rem", color: "rgba(255,255,255,0.55)",
            borderLeft: "1px solid rgba(255,255,255,0.2)", paddingLeft: "1rem",
          }}>
            {t.countdown.closedSub}
          </span>
        </div>
      )}
    </div>
  );
}
