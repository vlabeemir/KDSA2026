"use client";

const days = [
  {
    date: "May 29",
    day: "Friday",
    label: "Day 0",
    title: "Arrival & Check-in",
    color: "#6b9fd4",
    featured: false,
    items: [
      "Arrival of international delegations",
      "Hotel check-in and accreditation",
      "Welcome reception & briefing",
    ],
  },
  {
    date: "May 30",
    day: "Saturday",
    label: "Day 1",
    title: "Training Day",
    color: "#6b9fd4",
    featured: false,
    items: [
      "Train of Trainers — workshop for local coaches",
      "Cultural program for international guests",
      "Astana city tour",
      "Technical inspection of equipment",
    ],
  },
  {
    date: "May 31",
    day: "Sunday",
    label: "Day 2",
    title: "Practice & Qualifications",
    color: "#6b9fd4",
    featured: false,
    items: [
      "Morning: Free practice sessions",
      "Afternoon: Qualification rounds",
      "Evening: Team dinner & networking",
    ],
  },
  {
    date: "June 1",
    day: "Monday",
    label: "Main Day",
    title: "Championship Day",
    color: "#c9a84c",
    featured: true,
    items: [
      "Opening Ceremony",
      "National Team Championship matches",
      "Club Championship — Class 40 & Class 20",
      "Youth Demonstration Matches",
      "Public Experience Zone",
      "Award & Closing Ceremony",
    ],
  },
  {
    date: "June 2",
    day: "Tuesday",
    label: "Day 4",
    title: "Departure Day",
    color: "#6b9fd4",
    featured: false,
    items: [
      "Cultural program for international guests",
      "Farewell breakfast",
      "Checkout & departure of delegations",
    ],
  },
];

export default function Program() {
  return (
    <section
      id="program"
      style={{
        padding: "6rem 2rem",
        background: "#f5f3ee",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative line */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          bottom: 0,
          width: "1px",
          background: "linear-gradient(180deg, transparent, rgba(107,159,212,0.2), transparent)",
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-sep-center" />
          <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b9fd4", marginBottom: "0.75rem" }}>
            Event Schedule
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
            Event Program
          </h2>
          <p style={{ fontSize: "1rem", color: "#6b7a99", maxWidth: "500px", margin: "0 auto" }}>
            Five days of competition, culture, and connection — May 29 to June 2, 2026.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {days.map((d) => (
            <div
              key={d.date}
              className={`day-card${d.featured ? " featured" : ""}`}
              style={{
                background: d.featured
                  ? "linear-gradient(135deg, #fff 0%, #fdf9f0 100%)"
                  : "#fff",
                borderRadius: "10px",
                padding: "2rem 2rem 2rem 2.5rem",
                display: "grid",
                gridTemplateColumns: "160px 1fr",
                gap: "2rem",
                alignItems: "start",
                boxShadow: d.featured
                  ? "0 8px 32px rgba(201,168,76,0.15)"
                  : "0 2px 12px rgba(13,31,78,0.05)",
                position: "relative",
              }}
            >
              {/* Date column */}
              <div className="day-date-col">
                <div
                  className="day-date-inner"
                  style={{
                    display: "inline-flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                  }}
                >
                  {d.featured && (
                    <span
                      style={{
                        background: "linear-gradient(135deg, #c9a84c, #e8c96a)",
                        color: "#0d1f4e",
                        fontSize: "0.62rem",
                        fontWeight: 800,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        padding: "3px 10px",
                        borderRadius: "40px",
                        marginBottom: "6px",
                        display: "inline-block",
                      }}
                    >
                      ★ Main Day
                    </span>
                  )}
                  <span
                    style={{
                      fontSize: "1.7rem",
                      fontWeight: 900,
                      color: d.featured ? "#c9a84c" : "#0d1f4e",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {d.date}
                  </span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "#8299b8",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {d.day}
                  </span>
                  <span
                    style={{
                      marginTop: "4px",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      color: d.featured ? "#c9a84c" : "#6b9fd4",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      borderLeft: `2px solid ${d.featured ? "#c9a84c" : "#6b9fd4"}`,
                      paddingLeft: "8px",
                    }}
                  >
                    {d.label}
                  </span>
                </div>
              </div>

              {/* Content column */}
              <div>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    color: "#0d1f4e",
                    marginBottom: "1rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {d.title}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {d.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        fontSize: "0.9rem",
                        color: "#3a5080",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: d.featured ? "#c9a84c" : "#6b9fd4",
                          marginTop: "7px",
                          flexShrink: 0,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "8px",
              padding: "10px 20px",
              fontSize: "0.82rem",
              color: "#8a6d20",
              fontStyle: "italic",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
              <circle cx="8" cy="8" r="7.5" stroke="#c9a84c" strokeWidth="1.2"/>
              <path d="M8 5v4M8 11v.5" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            The event program is subject to change. Final schedule will be confirmed closer to the event date.
          </div>
          <p style={{ fontSize: "0.78rem", color: "#8299b8", fontStyle: "italic", textAlign: "center" }}>
            This competition must use only FIDA-approved official balls and FIDA rules.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .day-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
