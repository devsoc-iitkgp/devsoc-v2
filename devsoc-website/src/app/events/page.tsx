"use client";

import { motion, type Variants } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Section5Contact from "@/components/sections/Section5Contact";
import AnimatedSection from "@/components/ui/AnimatedSection";

const BLUE = "#3e6dd9";
const BLUE_MUTED = "rgba(62, 109, 217, 0.35)";
const BLUE_BORDER = "rgba(62, 109, 217, 0.25)";

const upcomingEvents = [
  {
    title: "DevSoc Hackathon 2025",
    date: "15 MAR",
    type: "HACKATHON",
    desc: "48 hours. Real problems. Ship something that matters. Teams of up to 4, open to all skill levels.",
    tags: ["teams", "prizes", "mentorship"],
  },
  {
    title: "Intro to React",
    date: "22 MAR",
    type: "WORKSHOP",
    desc: "Hands-on workshop covering React fundamentals, hooks, and component design patterns.",
    tags: ["beginners", "web", "frontend"],
  },
  {
    title: "Industry Night",
    date: "5 APR",
    type: "NETWORKING",
    desc: "Connect with engineers and PMs from top tech companies. Portfolio reviews and mock interviews.",
    tags: ["networking", "career", "industry"],
  },
  {
    title: "Python Bootcamp",
    date: "12 APR",
    type: "BOOTCAMP",
    desc: "4-week intensive covering Python fundamentals, data structures, algorithms, and project work.",
    tags: ["python", "4 weeks", "beginners"],
  },
];

const pastEvents = [
  { title: "Git & GitHub Workshop", month: "FEB", year: "2025", attendees: "87" },
  { title: "Web3 Summit", month: "JAN", year: "2025", attendees: "120" },
  { title: "DevSoc Hackathon 2024", month: "NOV", year: "2024", attendees: "200" },
  { title: "AI & ML Talk Series", month: "OCT", year: "2024", attendees: "95" },
  { title: "Open Source Sprint", month: "SEP", year: "2024", attendees: "60" },
  { title: "TypeScript Deep Dive", month: "AUG", year: "2024", attendees: "72" },
];

// Inline SVG — circuit grid with nodes
function CircuitVector() {
  return (
    <svg
      width="520"
      height="400"
      viewBox="0 0 520 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ backgroundColor: "transparent" }}
    >
      {/* Outer border */}
      <rect x="1" y="1" width="518" height="398" stroke={BLUE} strokeOpacity="0.3" />

      {/* Grid lines */}
      <line x1="0" y1="133" x2="520" y2="133" stroke={BLUE} strokeOpacity="0.12" />
      <line x1="0" y1="266" x2="520" y2="266" stroke={BLUE} strokeOpacity="0.12" />
      <line x1="173" y1="0" x2="173" y2="400" stroke={BLUE} strokeOpacity="0.12" />
      <line x1="346" y1="0" x2="346" y2="400" stroke={BLUE} strokeOpacity="0.12" />

      {/* Circles at intersections */}
      <circle cx="173" cy="133" r="3" fill={BLUE} fillOpacity="0.45" />
      <circle cx="346" cy="133" r="3" fill={BLUE} fillOpacity="0.45" />
      <circle cx="173" cy="266" r="3" fill={BLUE} fillOpacity="0.45" />
      <circle cx="346" cy="266" r="3" fill={BLUE} fillOpacity="0.45" />

      {/* Centre target rings */}
      <circle cx="260" cy="200" r="120" stroke={BLUE} strokeOpacity="0.18" fill="none" />
      <circle cx="260" cy="200" r="70" stroke={BLUE} strokeOpacity="0.25" fill="none" />
      <circle cx="260" cy="200" r="6" fill={BLUE} fillOpacity="0.55" />

      {/* Diagonal cross-lines */}
      <line x1="140" y1="80" x2="260" y2="200" stroke={BLUE} strokeOpacity="0.15" />
      <line x1="380" y1="80" x2="260" y2="200" stroke={BLUE} strokeOpacity="0.15" />
      <line x1="140" y1="320" x2="260" y2="200" stroke={BLUE} strokeOpacity="0.15" />
      <line x1="380" y1="320" x2="260" y2="200" stroke={BLUE} strokeOpacity="0.15" />

      {/* Corner brackets */}
      <path d="M0 40 L0 0 L40 0" stroke={BLUE} strokeOpacity="0.6" strokeWidth="1.5" fill="none" />
      <path d="M480 0 L520 0 L520 40" stroke={BLUE} strokeOpacity="0.6" strokeWidth="1.5" fill="none" />
      <path d="M0 360 L0 400 L40 400" stroke={BLUE} strokeOpacity="0.6" strokeWidth="1.5" fill="none" />
      <path d="M480 400 L520 400 L520 360" stroke={BLUE} strokeOpacity="0.6" strokeWidth="1.5" fill="none" />

      {/* Small node dots */}
      <circle cx="40" cy="0" r="2" fill={BLUE} fillOpacity="0.4" />
      <circle cx="480" cy="0" r="2" fill={BLUE} fillOpacity="0.4" />
      <circle cx="40" cy="400" r="2" fill={BLUE} fillOpacity="0.4" />
      <circle cx="480" cy="400" r="2" fill={BLUE} fillOpacity="0.4" />
    </svg>
  );
}

// Inline SVG — calendar/event mark vector
function EventMarkVector() {
  return (
    <svg
      width="320"
      height="200"
      viewBox="0 0 320 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ backgroundColor: "transparent" }}
    >
      <rect x="1" y="30" width="318" height="169" stroke={BLUE} strokeOpacity="0.2" />
      {/* Calendar header bar */}
      <rect x="1" y="1" width="318" height="30" stroke={BLUE} strokeOpacity="0.25" fill={BLUE} fillOpacity="0.06" />
      {/* Vertical dividers */}
      {[46, 91, 136, 182, 228, 274].map((x) => (
        <line key={x} x1={x} y1="30" x2={x} y2="199" stroke={BLUE} strokeOpacity="0.12" />
      ))}
      {/* Horizontal dividers */}
      {[70, 110, 150, 170].map((y) => (
        <line key={y} x1="1" y1={y} x2="319" y2={y} stroke={BLUE} strokeOpacity="0.12" />
      ))}
      {/* Highlight cell */}
      <rect x="137" y="111" width="44" height="38" fill={BLUE} fillOpacity="0.2" />
      <rect x="137" y="111" width="44" height="38" stroke={BLUE} strokeOpacity="0.5" />
      {/* Pins */}
      <line x1="91" y1="0" x2="91" y2="40" stroke={BLUE} strokeOpacity="0.4" strokeWidth="2" />
      <line x1="228" y1="0" x2="228" y2="40" stroke={BLUE} strokeOpacity="0.4" strokeWidth="2" />
      <circle cx="91" cy="0" r="5" fill={BLUE} fillOpacity="0.5" />
      <circle cx="228" cy="0" r="5" fill={BLUE} fillOpacity="0.5" />
    </svg>
  );
}

const cardVariants: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function EventsPage() {
  return (
    <main style={{ position: "relative", backgroundColor: "#070707", overflowX: "hidden" }}>

      {/* ── HERO ─────────────────────────────────────────── */}
      <div data-cursor-color={BLUE} style={{ minWidth: "1440px", width: "100%", margin: "0 auto" }}>
        <div style={{ margin: "0 40px" }}>
          <Navbar />
        </div>
        <div style={{ margin: "0 40px", padding: "9em 5.56em 5em" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "center",
            }}
          >
            {/* Left: Title */}
            <AnimatedSection>
              <p
                style={{
                  fontFamily: "var(--font-newforest), serif",
                  fontSize: "1.8em",
                  fontStyle: "italic",
                  color: BLUE,
                  marginBottom: "0.4em",
                  lineHeight: 1.2,
                }}
              >
                What&apos;s on
              </p>
              <h1
                style={{
                  fontFamily: "var(--font-byrd), sans-serif",
                  fontSize: "5.5em",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 1.05,
                  color: BLUE,
                }}
              >
                EVENTS &amp;
              </h1>
              <h1
                style={{
                  fontFamily: "var(--font-byrd), sans-serif",
                  fontSize: "5.5em",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 1.05,
                  color: BLUE_MUTED,
                }}
              >
                WORKSHOPS
              </h1>
              <p
                style={{
                  marginTop: "1.8em",
                  fontSize: "1em",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.45)",
                  maxWidth: "420px",
                }}
              >
                From weekend hackathons to weekly workshops — DevSoc runs events
                that build real skills and real connections.
              </p>
              <div style={{ marginTop: "2em", display: "flex", gap: "1em" }}>
                <button
                  style={{
                    border: `1px solid ${BLUE}`,
                    backgroundColor: BLUE,
                    color: "#070707",
                    fontFamily: "var(--font-byrd), sans-serif",
                    borderRadius: "100px",
                    padding: "10px 28px",
                    fontSize: "0.75rem",
                    letterSpacing: "2px",
                    height: "auto",
                  }}
                >
                  SEE UPCOMING
                </button>
                <button
                  style={{
                    border: `1px solid ${BLUE}`,
                    backgroundColor: "transparent",
                    color: BLUE,
                    fontFamily: "var(--font-byrd), sans-serif",
                    borderRadius: "100px",
                    padding: "10px 28px",
                    fontSize: "0.75rem",
                    letterSpacing: "2px",
                    height: "auto",
                  }}
                >
                  PAST EVENTS
                </button>
              </div>
            </AnimatedSection>

            {/* Right: Circuit vector */}
            <AnimatedSection direction="right">
              <CircuitVector />
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* ── UPCOMING EVENTS ──────────────────────────────── */}
      <div data-cursor-color={BLUE} style={{ minWidth: "1440px", width: "100%", margin: "0 auto" }}>
        <div style={{ margin: "0 40px", padding: "1em 5.56em 4em" }}>
          {/* Section header */}
          <AnimatedSection
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "1.5em",
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "var(--font-newforest), serif",
                  fontStyle: "italic",
                  fontSize: "1.2em",
                  color: "rgba(255,255,255,0.35)",
                  display: "block",
                  marginBottom: "0.3em",
                }}
              >
                Upcoming
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-byrd), sans-serif",
                  fontSize: "3em",
                  textTransform: "uppercase",
                  lineHeight: 1,
                }}
              >
                EVENTS
              </h2>
            </div>
            <span
              style={{
                fontFamily: "var(--font-byrd), sans-serif",
                fontSize: "0.75rem",
                color: BLUE,
                letterSpacing: "3px",
                border: `1px solid ${BLUE_BORDER}`,
                padding: "6px 14px",
              }}
            >
              2025 SEASON
            </span>
          </AnimatedSection>

          {/* Divider */}
          <div style={{ height: "1px", backgroundColor: BLUE_BORDER, marginBottom: "2px" }} />

          {/* Events grid */}
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2px",
            }}
          >
            {upcomingEvents.map((ev, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                style={{
                  border: `1px solid ${BLUE_BORDER}`,
                  padding: "2.2em",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                {/* Type + Date */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-byrd), sans-serif",
                      fontSize: "0.7rem",
                      padding: "3px 10px",
                      border: `1px solid ${BLUE}`,
                      color: BLUE,
                      letterSpacing: "2px",
                    }}
                  >
                    {ev.type}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-byrd), sans-serif",
                      fontSize: "1.1em",
                      color: BLUE,
                      letterSpacing: "2px",
                    }}
                  >
                    {ev.date}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-byrd), sans-serif",
                    fontSize: "1.8em",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    lineHeight: 1.1,
                  }}
                >
                  {ev.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.9em",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.65,
                    fontFamily: "var(--font-kobeweb), sans-serif",
                  }}
                >
                  {ev.desc}
                </p>

                {/* Tags + Register */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "auto",
                  }}
                >
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {ev.tags.map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          fontFamily: "var(--font-byrd), sans-serif",
                          fontSize: "0.65rem",
                          padding: "2px 8px",
                          backgroundColor: BLUE_MUTED,
                          color: "white",
                          borderRadius: "2px",
                          letterSpacing: "1px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    style={{
                      border: `1px solid ${BLUE}`,
                      backgroundColor: "transparent",
                      color: BLUE,
                      fontFamily: "var(--font-byrd), sans-serif",
                      borderRadius: "100px",
                      padding: "8px 22px",
                      fontSize: "0.65rem",
                      letterSpacing: "2px",
                      height: "auto",
                      whiteSpace: "nowrap",
                    }}
                  >
                    REGISTER →
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── WORKSHOP SERIES HIGHLIGHT ─────────────────────── */}
      <div data-cursor-color={BLUE} style={{ minWidth: "1440px", width: "100%", margin: "0 auto" }}>
        <div
          style={{
            margin: "0 40px",
            padding: "2em 5.56em",
            borderTop: `1px solid ${BLUE_BORDER}`,
            borderBottom: `1px solid ${BLUE_BORDER}`,
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          <AnimatedSection>
            <span
              style={{
                fontFamily: "var(--font-newforest), serif",
                fontStyle: "italic",
                fontSize: "1.2em",
                color: "rgba(255,255,255,0.35)",
                display: "block",
                marginBottom: "0.5em",
              }}
            >
              Recurring series
            </span>
            <h2
              style={{
                fontFamily: "var(--font-byrd), sans-serif",
                fontSize: "3.5em",
                textTransform: "uppercase",
                lineHeight: 1,
                marginBottom: "0.6em",
              }}
            >
              WORKSHOP
              <br />
              <span style={{ color: BLUE_MUTED }}>SERIES</span>
            </h2>
            <p
              style={{
                fontSize: "0.95em",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: "380px",
                fontFamily: "var(--font-kobeweb), sans-serif",
              }}
            >
              Every semester DevSoc runs a recurring workshop series covering
              web development, systems programming, cloud infrastructure,
              and more. Free for all members.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {[
                { topic: "WEB DEVELOPMENT", sessions: "6 sessions", color: BLUE },
                { topic: "SYSTEMS & DEVOPS", sessions: "4 sessions", color: "rgba(255,255,255,0.6)" },
                { topic: "DATA & ML", sessions: "4 sessions", color: "rgba(255,255,255,0.6)" },
                { topic: "OPEN SOURCE", sessions: "Ongoing", color: "rgba(255,255,255,0.6)" },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1.2em 1.5em",
                    border: `1px solid ${BLUE_BORDER}`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-byrd), sans-serif",
                      fontSize: "1.3em",
                      textTransform: "uppercase",
                      color: s.color,
                      letterSpacing: "1px",
                    }}
                  >
                    {s.topic}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-kobeweb), sans-serif",
                      fontSize: "0.8em",
                      color: "rgba(255,255,255,0.35)",
                    }}
                  >
                    {s.sessions}
                  </span>
                </div>
              ))}
            </div>
            {/* Calendar vector below table */}
            <div style={{ marginTop: "1.5em", opacity: 0.7 }}>
              <EventMarkVector />
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* ── PAST EVENTS ──────────────────────────────────── */}
      <div data-cursor-color={BLUE} style={{ minWidth: "1440px", width: "100%", margin: "0 auto" }}>
        <div style={{ margin: "0 40px", padding: "4em 5.56em" }}>
          <AnimatedSection style={{ marginBottom: "2em" }}>
            <span
              style={{
                fontFamily: "var(--font-newforest), serif",
                fontStyle: "italic",
                fontSize: "1.2em",
                color: "rgba(255,255,255,0.35)",
                display: "block",
                marginBottom: "0.3em",
              }}
            >
              Look back
            </span>
            <h2
              style={{
                fontFamily: "var(--font-byrd), sans-serif",
                fontSize: "3em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1,
              }}
            >
              PAST EVENTS
            </h2>
          </AnimatedSection>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {pastEvents.map((ev, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.06}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "140px 1fr 120px",
                    alignItems: "center",
                    padding: "1.4em 0",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                    gap: "2em",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-byrd), sans-serif",
                      fontSize: "0.85em",
                      color: BLUE,
                      letterSpacing: "2px",
                    }}
                  >
                    {ev.month} {ev.year}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-byrd), sans-serif",
                      fontSize: "1.4em",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    {ev.title}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-kobeweb), sans-serif",
                      fontSize: "0.8em",
                      color: "rgba(255,255,255,0.35)",
                      textAlign: "right",
                    }}
                  >
                    {ev.attendees} attendees
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      <Section5Contact />
    </main>
  );
}
