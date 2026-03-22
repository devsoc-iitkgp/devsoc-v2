"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Section5Contact from "@/components/sections/Section5Contact";
import AnimatedSection from "@/components/ui/AnimatedSection";
import testimonials from "@/data/testimonials";

const YELLOW = "#edf738";
const YELLOW_MUTED = "rgba(237, 247, 56, 0.35)";
const YELLOW_BORDER = "rgba(237, 247, 56, 0.2)";
const YELLOW_BG = "rgba(237, 247, 56, 0.06)";
const RED = "#dc2b46";
const BLUE = "#3e6dd9";
const WHITE = "rgba(255,255,255,0.9)";
const MUTED = "rgba(255,255,255,0.4)";

const tracks = [
  {
    id: "PROJECT",
    label: "PROJECT TEAM",
    desc: "Join one of our active project teams and ship real software alongside other student developers. Commit ~4 hrs/week.",
    accent: YELLOW,
    perks: ["Real codebase experience", "Code reviews + pair programming", "Public GitHub contributions", "Ship to production"],
  },
  {
    id: "EVENTS",
    label: "EVENTS CREW",
    desc: "Plan and run workshops, hackathons, and industry nights. Great for people who want to build community alongside code.",
    accent: BLUE,
    perks: ["Event planning + logistics", "Speaker outreach", "Creative freedom", "Lead your own workshops"],
  },
  {
    id: "DESIGN",
    label: "DESIGN TEAM",
    desc: "Own the visual identity of DevSoc — everything from social graphics to UI for our apps. Figma skills welcome.",
    accent: RED,
    perks: ["Figma + design systems", "Branding & marketing", "UI/UX for real products", "Build your design portfolio"],
  },
  {
    id: "BLOG",
    label: "BLOG WRITER",
    desc: "Write tutorials, devlogs, and opinion pieces for The DevSoc Blog. One article a month, your voice, your topic.",
    accent: "rgba(255,255,255,0.7)",
    perks: ["Grow your writing skills", "Published byline", "Tech + career topics", "Editor support"],
  },
];

const benefits = [
  { value: "300+", label: "Members to learn from", accent: YELLOW },
  { value: "Free", label: "All workshops & events", accent: YELLOW },
  { value: "Real", label: "Projects you can ship", accent: YELLOW },
  { value: "Direct", label: "Industry connections", accent: YELLOW },
];

const faqs = [
  {
    q: "Do I need experience to join?",
    a: "None at all. We have members who are in their first semester of uni through to postgrads. If you're curious and willing to put in effort, you belong here.",
  },
  {
    q: "How much time does it take?",
    a: "General membership is zero commitment — come to events whenever you like. If you join a project team or committee, expect 3–5 hours per week.",
  },
  {
    q: "Is there a membership fee?",
    a: "DevSoc charges a small annual fee to cover venue and event costs. All workshops, bootcamps, and project team access are included.",
  },
  {
    q: "Can I join mid-year?",
    a: "Yes. We run rolling admissions for general membership throughout the year. Project team spots open at the start of each semester.",
  },
  {
    q: "What if I'm not a CS student?",
    a: "DevSoc is open to all students. We have members from Engineering, Business, Design, and everything in between. Tech is for everyone.",
  },
];

// Inline SVG — network/community graph
function NetworkVector() {
  const nodes = [
    { x: 260, y: 190, r: 10, primary: true },
    { x: 120, y: 100, r: 6, primary: false },
    { x: 400, y: 80, r: 6, primary: false },
    { x: 80, y: 280, r: 5, primary: false },
    { x: 340, y: 320, r: 5, primary: false },
    { x: 460, y: 200, r: 5, primary: false },
    { x: 180, y: 340, r: 4, primary: false },
    { x: 420, y: 320, r: 4, primary: false },
    { x: 140, y: 190, r: 4, primary: false },
    { x: 370, y: 150, r: 4, primary: false },
  ];
  const edges = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
    [1, 3], [1, 8], [2, 9], [2, 5],
    [3, 6], [4, 6], [4, 7], [5, 7],
    [8, 3], [9, 5],
  ];
  return (
    <svg
      width="540"
      height="400"
      viewBox="0 0 540 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ backgroundColor: "transparent" }}
    >
      {/* Outer rect */}
      <rect x="1" y="1" width="538" height="398" stroke={YELLOW} strokeOpacity="0.15" />

      {/* Edges */}
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          stroke={YELLOW}
          strokeOpacity="0.18"
          strokeWidth="1"
        />
      ))}

      {/* Nodes */}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle
            cx={n.x} cy={n.y} r={n.r + 8}
            fill={YELLOW} fillOpacity={n.primary ? 0.08 : 0.04}
          />
          <circle
            cx={n.x} cy={n.y} r={n.r}
            fill={n.primary ? YELLOW : "transparent"}
            fillOpacity={n.primary ? 0.9 : 1}
            stroke={YELLOW}
            strokeOpacity={n.primary ? 1 : 0.45}
            strokeWidth="1"
          />
        </g>
      ))}

      {/* Corner brackets */}
      <path d="M0 35 L0 0 L35 0" stroke={YELLOW} strokeOpacity="0.5" strokeWidth="1.5" fill="none" />
      <path d="M505 0 L540 0 L540 35" stroke={YELLOW} strokeOpacity="0.5" strokeWidth="1.5" fill="none" />
      <path d="M0 365 L0 400 L35 400" stroke={YELLOW} strokeOpacity="0.5" strokeWidth="1.5" fill="none" />
      <path d="M505 400 L540 400 L540 365" stroke={YELLOW} strokeOpacity="0.5" strokeWidth="1.5" fill="none" />

      {/* Pulse ring on centre node */}
      <circle cx="260" cy="190" r="28" stroke={YELLOW} strokeOpacity="0.2" fill="none" />
      <circle cx="260" cy="190" r="48" stroke={YELLOW} strokeOpacity="0.08" fill="none" />
    </svg>
  );
}

// Inline SVG — small arrow/check mark icon
function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ backgroundColor: "transparent", flexShrink: 0 }}>
      <path d="M2 7 L6 11 L12 3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const cardVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};
const staggerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function JoinPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedTrack, setSelectedTrack] = useState("PROJECT");
  const [submitted, setSubmitted] = useState(false);

  return (
    <main style={{ position: "relative", backgroundColor: "#070707", overflowX: "hidden" }}>

      {/* ── HERO ─────────────────────────────────────────── */}
      <div data-cursor-color={YELLOW} style={{ minWidth: "1440px", width: "100%", margin: "0 auto" }}>
        <div style={{ margin: "0 40px" }}>
          <Navbar />
        </div>
        <div style={{ margin: "0 40px", padding: "9em 5.56em 5em" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>

            {/* Left */}
            <AnimatedSection>
              <p style={{
                fontFamily: "var(--font-newforest), serif",
                fontSize: "1.8em",
                fontStyle: "italic",
                color: YELLOW_MUTED,
                marginBottom: "0.4em",
                lineHeight: 1.2,
              }}>
                Open to everyone
              </p>
              <h1 style={{
                fontFamily: "var(--font-byrd), sans-serif",
                fontSize: "5.5em",
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 1.05,
                color: YELLOW,
              }}>
                JOIN
              </h1>
              <h1 style={{
                fontFamily: "var(--font-byrd), sans-serif",
                fontSize: "5.5em",
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 1.05,
                color: YELLOW_MUTED,
              }}>
                DEVSOC
              </h1>
              <p style={{
                marginTop: "1.8em",
                fontSize: "1em",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.45)",
                maxWidth: "420px",
                fontFamily: "var(--font-kobeweb), sans-serif",
              }}>
                Whether you write code every day or just had your first lecture —
                DevSoc is where you build real things, meet real people, and grow
                into the developer you want to be.
              </p>
              <div style={{ marginTop: "2.5em", display: "flex", gap: "1em" }}>
                <a href="#apply">
                  <button style={{
                    border: `1px solid ${YELLOW}`,
                    backgroundColor: YELLOW,
                    color: "#070707",
                    fontFamily: "var(--font-byrd), sans-serif",
                    borderRadius: "100px",
                    padding: "12px 32px",
                    fontSize: "0.75rem",
                    letterSpacing: "2px",
                    height: "auto",
                  }}>
                    APPLY NOW
                  </button>
                </a>
                <a href="#tracks">
                  <button style={{
                    border: `1px solid ${YELLOW}`,
                    backgroundColor: "transparent",
                    color: YELLOW,
                    fontFamily: "var(--font-byrd), sans-serif",
                    borderRadius: "100px",
                    padding: "12px 32px",
                    fontSize: "0.75rem",
                    letterSpacing: "2px",
                    height: "auto",
                  }}>
                    SEE ROLES
                  </button>
                </a>
              </div>
            </AnimatedSection>

            {/* Right: network vector */}
            <AnimatedSection direction="right">
              <NetworkVector />
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* ── BENEFITS STRIP ───────────────────────────────── */}
      <div data-cursor-color={YELLOW} style={{ minWidth: "1440px", width: "100%", margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{
            margin: "0 40px",
            borderTop: `1px solid ${YELLOW_BORDER}`,
            borderBottom: `1px solid ${YELLOW_BORDER}`,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}>
            {benefits.map((b, i) => (
              <div key={i} style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "2.5em 1em",
                borderRight: i < benefits.length - 1 ? `1px solid ${YELLOW_BORDER}` : "none",
              }}>
                <span style={{
                  fontFamily: "var(--font-byrd), sans-serif",
                  fontSize: "3.5em",
                  color: YELLOW,
                  lineHeight: 1,
                }}>
                  {b.value}
                </span>
                <span style={{
                  fontFamily: "var(--font-kobeweb), sans-serif",
                  fontSize: "0.8em",
                  color: MUTED,
                  marginTop: "0.5em",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  textAlign: "center",
                }}>
                  {b.label}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* ── TRACKS ───────────────────────────────────────── */}
      <div id="tracks" data-cursor-color={YELLOW} style={{ minWidth: "1440px", width: "100%", margin: "0 auto" }}>
        <div style={{ margin: "0 40px", padding: "5em 5.56em" }}>
          <AnimatedSection style={{ marginBottom: "2.5em" }}>
            <span style={{
              fontFamily: "var(--font-newforest), serif",
              fontStyle: "italic",
              fontSize: "1.2em",
              color: MUTED,
              display: "block",
              marginBottom: "0.3em",
            }}>
              Find your place
            </span>
            <h2 style={{
              fontFamily: "var(--font-byrd), sans-serif",
              fontSize: "3.5em",
              textTransform: "uppercase",
              lineHeight: 1,
            }}>
              WAYS TO
              <br />
              <span style={{ color: YELLOW_MUTED }}>GET INVOLVED</span>
            </h2>
          </AnimatedSection>

          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px" }}
          >
            {tracks.map((track) => (
              <motion.div
                key={track.id}
                variants={cardVariants}
                style={{
                  border: `1px solid rgba(255,255,255,0.08)`,
                  padding: "2.5em",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Watermark */}
                <span style={{
                  position: "absolute",
                  bottom: "-0.15em",
                  right: "0.1em",
                  fontFamily: "var(--font-byrd), sans-serif",
                  fontSize: "7em",
                  color: track.accent,
                  opacity: 0.05,
                  lineHeight: 1,
                  backgroundColor: "transparent",
                  userSelect: "none",
                }}>
                  {track.id}
                </span>

                {/* Accent bar */}
                <div style={{ height: "3px", width: "48px", backgroundColor: track.accent }} />

                <h3 style={{
                  fontFamily: "var(--font-byrd), sans-serif",
                  fontSize: "1.8em",
                  textTransform: "uppercase",
                  lineHeight: 1.1,
                  color: track.accent,
                }}>
                  {track.label}
                </h3>

                <p style={{
                  fontFamily: "var(--font-kobeweb), sans-serif",
                  fontSize: "0.9em",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.7,
                }}>
                  {track.desc}
                </p>

                {/* Perks */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "0.5em" }}>
                  {track.perks.map((perk, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <CheckIcon color={track.accent} />
                      <span style={{
                        fontFamily: "var(--font-kobeweb), sans-serif",
                        fontSize: "0.85em",
                        color: "rgba(255,255,255,0.6)",
                      }}>
                        {perk}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <div data-cursor-color={YELLOW} style={{ minWidth: "1440px", width: "100%", margin: "0 auto" }}>
        <div style={{
          margin: "0 40px",
          padding: "4em 5.56em",
          borderTop: `1px solid rgba(255,255,255,0.07)`,
        }}>
          <AnimatedSection style={{ marginBottom: "2.5em" }}>
            <span style={{
              fontFamily: "var(--font-newforest), serif",
              fontStyle: "italic",
              fontSize: "1.2em",
              color: MUTED,
              display: "block",
              marginBottom: "0.3em",
            }}>
              In their own words
            </span>
            <h2 style={{
              fontFamily: "var(--font-byrd), sans-serif",
              fontSize: "3em",
              textTransform: "uppercase",
              lineHeight: 1,
            }}>
              MEMBER
              <br />
              <span style={{ color: YELLOW_MUTED }}>STORIES</span>
            </h2>
          </AnimatedSection>

          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}
          >
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                style={{
                  border: `1px solid ${YELLOW_BORDER}`,
                  padding: "2.5em",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {/* Opening quote mark */}
                <span style={{
                  fontFamily: "var(--font-newforest), serif",
                  fontSize: "4em",
                  color: YELLOW,
                  lineHeight: 0.6,
                  opacity: 0.5,
                  backgroundColor: "transparent",
                }}>
                  &ldquo;
                </span>

                <p style={{
                  fontFamily: "var(--font-kobeweb), sans-serif",
                  fontSize: "1em",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                }}>
                  {t.quote}
                </p>

                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "1em",
                  borderTop: `1px solid ${YELLOW_BORDER}`,
                  marginTop: "auto",
                }}>
                  <div>
                    <span style={{
                      fontFamily: "var(--font-byrd), sans-serif",
                      fontSize: "0.9em",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      display: "block",
                      color: WHITE,
                    }}>
                      {t.person}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-kobeweb), sans-serif",
                      fontSize: "0.75em",
                      color: MUTED,
                    }}>
                      DevSoc member
                    </span>
                  </div>
                  <span style={{
                    fontFamily: "var(--font-byrd), sans-serif",
                    fontSize: "0.65rem",
                    color: YELLOW,
                    letterSpacing: "2px",
                    border: `1px solid ${YELLOW_BORDER}`,
                    padding: "3px 10px",
                  }}>
                    {t.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── APPLICATION FORM ─────────────────────────────── */}
      <div id="apply" data-cursor-color={YELLOW} style={{ minWidth: "1440px", width: "100%", margin: "0 auto" }}>
        <div style={{
          margin: "0 40px",
          padding: "5em 5.56em",
          borderTop: `1px solid rgba(255,255,255,0.07)`,
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "80px",
          alignItems: "start",
        }}>

          {/* Left: heading */}
          <AnimatedSection style={{ position: "sticky", top: "120px" }}>
            <span style={{
              fontFamily: "var(--font-newforest), serif",
              fontStyle: "italic",
              fontSize: "1.2em",
              color: MUTED,
              display: "block",
              marginBottom: "0.5em",
            }}>
              Ready?
            </span>
            <h2 style={{
              fontFamily: "var(--font-byrd), sans-serif",
              fontSize: "3.8em",
              textTransform: "uppercase",
              lineHeight: 1,
              marginBottom: "0.6em",
            }}>
              LET&apos;S GET
              <br />
              <span style={{ color: YELLOW }}>YOU IN</span>
            </h2>
            <p style={{
              fontFamily: "var(--font-kobeweb), sans-serif",
              fontSize: "0.9em",
              color: "rgba(255,255,255,0.4)",
              lineHeight: 1.7,
              maxWidth: "320px",
            }}>
              Fill in the form and we&apos;ll be in touch within 2 business days.
              General membership is open year-round.
            </p>

            {/* Track selector */}
            <div style={{ marginTop: "2em", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{
                fontFamily: "var(--font-byrd), sans-serif",
                fontSize: "0.7rem",
                color: MUTED,
                letterSpacing: "2px",
                marginBottom: "4px",
              }}>
                I WANT TO JOIN AS:
              </span>
              {tracks.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTrack(t.id)}
                  style={{
                    border: `1px solid ${selectedTrack === t.id ? t.accent : "rgba(255,255,255,0.1)"}`,
                    backgroundColor: selectedTrack === t.id ? YELLOW_BG : "transparent",
                    color: selectedTrack === t.id ? t.accent : MUTED,
                    fontFamily: "var(--font-byrd), sans-serif",
                    fontSize: "0.7rem",
                    letterSpacing: "2px",
                    padding: "10px 20px",
                    borderRadius: 0,
                    height: "auto",
                    textAlign: "left",
                    transition: "all 0.2s",
                    cursor: "pointer",
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: form */}
          <AnimatedSection direction="right">
            {submitted ? (
              <div style={{
                border: `1px solid ${YELLOW_BORDER}`,
                padding: "4em",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                textAlign: "center",
              }}>
                <span style={{
                  fontFamily: "var(--font-byrd), sans-serif",
                  fontSize: "4em",
                  color: YELLOW,
                  lineHeight: 1,
                }}>
                  ✓
                </span>
                <h3 style={{
                  fontFamily: "var(--font-byrd), sans-serif",
                  fontSize: "2em",
                  textTransform: "uppercase",
                  color: WHITE,
                }}>
                  APPLICATION RECEIVED
                </h3>
                <p style={{
                  fontFamily: "var(--font-kobeweb), sans-serif",
                  fontSize: "0.9em",
                  color: MUTED,
                  lineHeight: 1.7,
                }}>
                  We&apos;ll review your application and reach out within 2 business days.
                  Welcome to DevSoc!
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                style={{ display: "flex", flexDirection: "column", gap: "2px" }}
              >
                {/* Name + Email */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
                  <FormField label="FIRST NAME" placeholder="Alex" required />
                  <FormField label="LAST NAME" placeholder="Chen" required />
                </div>
                <FormField label="EMAIL ADDRESS" type="email" placeholder="alex@university.edu" required />
                {/* Year + Degree */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
                  <FormSelect label="YEAR OF STUDY" options={["1st Year", "2nd Year", "3rd Year", "4th Year", "Postgraduate"]} />
                  <FormField label="DEGREE PROGRAM" placeholder="Computer Science" />
                </div>
                <FormField label="GITHUB PROFILE" placeholder="github.com/username" />

                {/* Role */}
                <div style={{
                  border: `1px solid rgba(255,255,255,0.1)`,
                  padding: "1.2em 1.4em",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}>
                  <label style={{
                    fontFamily: "var(--font-byrd), sans-serif",
                    fontSize: "0.65rem",
                    color: YELLOW,
                    letterSpacing: "2px",
                  }}>
                    APPLYING AS
                  </label>
                  <div style={{
                    fontFamily: "var(--font-byrd), sans-serif",
                    fontSize: "0.9em",
                    color: WHITE,
                    backgroundColor: "transparent",
                  }}>
                    {tracks.find((t) => t.id === selectedTrack)?.label ?? "PROJECT TEAM"}
                  </div>
                </div>

                {/* Message */}
                <div style={{
                  border: `1px solid rgba(255,255,255,0.1)`,
                  padding: "1.2em 1.4em",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}>
                  <label style={{
                    fontFamily: "var(--font-byrd), sans-serif",
                    fontSize: "0.65rem",
                    color: YELLOW,
                    letterSpacing: "2px",
                  }}>
                    WHY DO YOU WANT TO JOIN? (optional)
                  </label>
                  <textarea
                    placeholder="Tell us a bit about yourself and what you're hoping to get out of DevSoc..."
                    rows={4}
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      outline: "none",
                      color: WHITE,
                      fontFamily: "var(--font-kobeweb), sans-serif",
                      fontSize: "0.9em",
                      resize: "none",
                      lineHeight: 1.6,
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    border: `1px solid ${YELLOW}`,
                    backgroundColor: YELLOW,
                    color: "#070707",
                    fontFamily: "var(--font-byrd), sans-serif",
                    borderRadius: 0,
                    padding: "1.2em 2em",
                    fontSize: "0.85rem",
                    letterSpacing: "3px",
                    height: "auto",
                    marginTop: "4px",
                    cursor: "pointer",
                    textTransform: "uppercase",
                  }}
                >
                  SUBMIT APPLICATION →
                </button>

                <span style={{
                  fontFamily: "var(--font-kobeweb), sans-serif",
                  fontSize: "0.75em",
                  color: "rgba(255,255,255,0.2)",
                  marginTop: "4px",
                }}>
                  We&apos;ll get back to you within 2 business days.
                </span>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <div data-cursor-color={YELLOW} style={{ minWidth: "1440px", width: "100%", margin: "0 auto" }}>
        <div style={{
          margin: "0 40px",
          padding: "4em 5.56em",
          borderTop: `1px solid rgba(255,255,255,0.07)`,
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "80px",
        }}>
          <AnimatedSection>
            <span style={{
              fontFamily: "var(--font-newforest), serif",
              fontStyle: "italic",
              fontSize: "1.2em",
              color: MUTED,
              display: "block",
              marginBottom: "0.3em",
            }}>
              Common questions
            </span>
            <h2 style={{
              fontFamily: "var(--font-byrd), sans-serif",
              fontSize: "3em",
              textTransform: "uppercase",
              lineHeight: 1,
            }}>
              FAQ
            </h2>
          </AnimatedSection>

          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {faqs.map((faq, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.05}>
                <div
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                    overflow: "hidden",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    style={{
                      width: "100%",
                      border: "none",
                      backgroundColor: "transparent",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "1.4em 0",
                      cursor: "pointer",
                      borderRadius: 0,
                      height: "auto",
                      textAlign: "left",
                      gap: "1em",
                    }}
                  >
                    <span style={{
                      fontFamily: "var(--font-byrd), sans-serif",
                      fontSize: "1.1em",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      color: openFaq === idx ? YELLOW : WHITE,
                      transition: "color 0.2s",
                    }}>
                      {faq.q}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-byrd), sans-serif",
                      fontSize: "1.2em",
                      color: YELLOW,
                      flexShrink: 0,
                      transform: openFaq === idx ? "rotate(45deg)" : "none",
                      transition: "transform 0.25s",
                      backgroundColor: "transparent",
                    }}>
                      +
                    </span>
                  </button>
                  <motion.div
                    animate={{ height: openFaq === idx ? "auto" : 0, opacity: openFaq === idx ? 1 : 0 }}
                    initial={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p style={{
                      fontFamily: "var(--font-kobeweb), sans-serif",
                      fontSize: "0.9em",
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.7,
                      paddingBottom: "1.5em",
                    }}>
                      {faq.a}
                    </p>
                  </motion.div>
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

// ── Reusable field components ─────────────────────────────────

function FormField({
  label, placeholder, type = "text", required = false,
}: {
  label: string; placeholder?: string; type?: string; required?: boolean;
}) {
  return (
    <div style={{
      border: "1px solid rgba(255,255,255,0.1)",
      padding: "1.2em 1.4em",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    }}>
      <label style={{
        fontFamily: "var(--font-byrd), sans-serif",
        fontSize: "0.65rem",
        color: YELLOW,
        letterSpacing: "2px",
      }}>
        {label}{required && <span style={{ color: RED, backgroundColor: "transparent" }}> *</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        style={{
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          color: WHITE,
          fontFamily: "var(--font-kobeweb), sans-serif",
          fontSize: "0.9em",
        }}
      />
    </div>
  );
}

function FormSelect({ label, options }: { label: string; options: string[] }) {
  return (
    <div style={{
      border: "1px solid rgba(255,255,255,0.1)",
      padding: "1.2em 1.4em",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    }}>
      <label style={{
        fontFamily: "var(--font-byrd), sans-serif",
        fontSize: "0.65rem",
        color: YELLOW,
        letterSpacing: "2px",
      }}>
        {label}
      </label>
      <select style={{
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        color: WHITE,
        fontFamily: "var(--font-kobeweb), sans-serif",
        fontSize: "0.9em",
        cursor: "pointer",
      }}>
        <option value="" style={{ backgroundColor: "#070707" }}>Select...</option>
        {options.map((o) => (
          <option key={o} value={o} style={{ backgroundColor: "#070707" }}>{o}</option>
        ))}
      </select>
    </div>
  );
}
