"use client";

import { motion, type Variants } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Section5Contact from "@/components/sections/Section5Contact";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useResponsive } from "@/components/ui/useResponsive";

const WHITE = "rgba(255,255,255,0.9)";
const MUTED = "rgba(255,255,255,0.4)";
const YELLOW = "#edf738";
const RED = "#dc2b46";
const BLUE = "#3e6dd9";

const values = [
  {
    number: "01",
    title: "BUILD IN PUBLIC",
    desc: "Everything we make is open source. Our code, our process, our failures and wins — all shared openly with the community.",
    accent: YELLOW,
  },
  {
    number: "02",
    title: "LEARN BY DOING",
    desc: "No death by PowerPoint. We learn through real projects, pair programming, and hands-on workshops that ship actual software.",
    accent: RED,
  },
  {
    number: "03",
    title: "GROW TOGETHER",
    desc: "From first-year students to final-year engineers, DevSoc is a community where everyone teaches and everyone learns.",
    accent: BLUE,
  },
];

const leadership = [
  { name: "Alex Chen", role: "President", year: "3rd Year · CS" },
  { name: "Priya Sharma", role: "Vice President", year: "3rd Year · SE" },
  { name: "Jordan Lee", role: "Secretary", year: "2nd Year · CS" },
  { name: "Sam Rivera", role: "Treasurer", year: "2nd Year · IS" },
];

const technicalTeam = [
  { name: "Maya Patel", role: "Frontend Lead", stack: "React · Next.js · TypeScript" },
  { name: "Chris Wong", role: "Backend Lead", stack: "Node.js · PostgreSQL · Docker" },
  { name: "Aisha Okonkwo", role: "DevOps Lead", stack: "AWS · GitHub Actions · Terraform" },
  { name: "Liam Nguyen", role: "Mobile Lead", stack: "React Native · Expo · Firebase" },
  { name: "Sofia Martinez", role: "Design Lead", stack: "Figma · Framer · Design Systems" },
  { name: "Dev Kapoor", role: "Open Source Lead", stack: "OSS · Community · Mentorship" },
];

// Inline SVG — geometric mandala/flower (references the rotating flower in Hero)
function MandalaVector() {
  const petals = 8;
  return (
    <svg
      width="420"
      height="420"
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ backgroundColor: "transparent" }}
    >
      {/* Outer rings */}
      <circle cx="210" cy="210" r="200" stroke="white" strokeOpacity="0.06" />
      <circle cx="210" cy="210" r="160" stroke="white" strokeOpacity="0.08" />
      <circle cx="210" cy="210" r="110" stroke="white" strokeOpacity="0.1" />
      <circle cx="210" cy="210" r="60" stroke="white" strokeOpacity="0.15" />
      <circle cx="210" cy="210" r="18" stroke={YELLOW} strokeOpacity="0.5" fill="none" />
      <circle cx="210" cy="210" r="4" fill={YELLOW} fillOpacity="0.7" />

      {/* Radial spokes */}
      {Array.from({ length: petals }).map((_, i) => {
        const angle = (i * 360) / petals;
        const rad = (angle * Math.PI) / 180;
        const x2 = 210 + 200 * Math.cos(rad);
        const y2 = 210 + 200 * Math.sin(rad);
        return (
          <line
            key={i}
            x1="210"
            y1="210"
            x2={x2}
            y2={y2}
            stroke="white"
            strokeOpacity="0.07"
          />
        );
      })}

      {/* Petal ellipses — rotated around centre */}
      {Array.from({ length: petals }).map((_, i) => {
        const angle = (i * 360) / petals;
        return (
          <ellipse
            key={i}
            cx="210"
            cy="140"
            rx="22"
            ry="68"
            stroke="white"
            strokeOpacity="0.12"
            fill="none"
            transform={`rotate(${angle} 210 210)`}
          />
        );
      })}

      {/* 4 accent petals in yellow */}
      {[0, 90, 180, 270].map((angle) => (
        <ellipse
          key={angle}
          cx="210"
          cy="155"
          rx="8"
          ry="50"
          stroke={YELLOW}
          strokeOpacity="0.25"
          fill="none"
          transform={`rotate(${angle} 210 210)`}
        />
      ))}

      {/* Outer dot ring */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        const rad = (angle * Math.PI) / 180;
        const x = 210 + 195 * Math.cos(rad);
        const y = 210 + 195 * Math.sin(rad);
        return <circle key={i} cx={x} cy={y} r="2" fill="white" fillOpacity="0.18" />;
      })}
    </svg>
  );
}

// Inline SVG — abstract wave/horizon line (for "our story" section)
function WaveVector() {
  return (
    <svg
      width="100%"
      height="60"
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ backgroundColor: "transparent" }}
    >
      <path
        d="M0 30 Q150 5 300 30 Q450 55 600 30 Q750 5 900 30 Q1050 55 1200 30"
        stroke="white"
        strokeOpacity="0.08"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M0 40 Q200 10 400 40 Q600 70 800 40 Q1000 10 1200 40"
        stroke={YELLOW}
        strokeOpacity="0.12"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

const cardVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function AboutPage() {
  const { isMobile, isTablet, mx, sp } = useResponsive();

  return (
    <main style={{ position: "relative", backgroundColor: "#070707", overflowX: "hidden" }}>

      {/* ── HERO ─────────────────────────────────────────── */}
      <div data-cursor-color={YELLOW} style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ margin: mx }}>
          <Navbar />
        </div>
        <div style={{ margin: mx, padding: isMobile ? "6em 0 3em" : `9em ${sp} 5em` }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: isMobile ? "2em" : "60px",
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
                  color: MUTED,
                  marginBottom: "0.4em",
                  lineHeight: 1.2,
                }}
              >
                Who we are
              </p>
              <h1
                style={{
                  fontFamily: "var(--font-byrd), sans-serif",
                  fontSize: "5.5em",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 1.05,
                  color: WHITE,
                }}
              >
                ABOUT
              </h1>
              <h1
                style={{
                  fontFamily: "var(--font-byrd), sans-serif",
                  fontSize: "5.5em",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 1.05,
                  color: YELLOW,
                }}
              >
                DEVSOC
              </h1>
              <p
                style={{
                  marginTop: "1.8em",
                  fontSize: "1em",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.45)",
                  maxWidth: "440px",
                  fontFamily: "var(--font-kobeweb), sans-serif",
                }}
              >
                DevSoc is a university developer society that builds real software,
                runs technical workshops, organises hackathons, and connects students
                with the broader tech community. Founded by developers, for developers.
              </p>
            </AnimatedSection>

            {/* Right: Mandala vector */}
            <AnimatedSection direction="right" style={{ display: "flex", justifyContent: "center" }}>
              <MandalaVector />
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* ── MISSION STATEMENT ─────────────────────────────── */}
      <div data-cursor-color={YELLOW} style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}>
        <div
          style={{
            margin: mx,
            padding: isMobile ? "2em 0" : `3em ${sp}`,
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <WaveVector />
          <AnimatedSection style={{ textAlign: "center", padding: "3em 6em" }}>
            <p
              style={{
                fontFamily: "var(--font-newforest), serif",
                fontStyle: "italic",
                fontSize: "1.2em",
                color: MUTED,
                marginBottom: "1em",
              }}
            >
              Our mission
            </p>
            <h2
              style={{
                fontFamily: "var(--font-byrd), sans-serif",
                fontSize: "2.8em",
                textTransform: "uppercase",
                lineHeight: 1.25,
                color: WHITE,
                maxWidth: "900px",
                margin: "0 auto",
              }}
            >
              To empower university students to become exceptional developers
              through{" "}
              <span style={{ color: YELLOW }}>hands-on building</span>,{" "}
              <span style={{ color: RED }}>genuine community</span>, and{" "}
              <span style={{ color: BLUE }}>open collaboration</span>.
            </h2>
          </AnimatedSection>
          <WaveVector />
        </div>
      </div>

      {/* ── VALUES ───────────────────────────────────────── */}
      <div data-cursor-color={YELLOW} style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ margin: mx, padding: isMobile ? "3em 0" : `4em ${sp}` }}>
          <AnimatedSection style={{ marginBottom: "2.5em" }}>
            <span
              style={{
                fontFamily: "var(--font-newforest), serif",
                fontStyle: "italic",
                fontSize: "1.2em",
                color: MUTED,
                display: "block",
                marginBottom: "0.3em",
              }}
            >
              What guides us
            </span>
            <h2
              style={{
                fontFamily: "var(--font-byrd), sans-serif",
                fontSize: "3em",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              OUR VALUES
            </h2>
          </AnimatedSection>

          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)",
              gap: "2px",
            }}
          >
            {values.map((v, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                style={{
                  border: `1px solid rgba(255,255,255,0.1)`,
                  padding: "2.5em",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Number watermark */}
                <span
                  style={{
                    position: "absolute",
                    top: "-0.1em",
                    right: "0.2em",
                    fontFamily: "var(--font-byrd), sans-serif",
                    fontSize: "8em",
                    color: v.accent,
                    opacity: 0.06,
                    lineHeight: 1,
                    backgroundColor: "transparent",
                    userSelect: "none",
                  }}
                >
                  {v.number}
                </span>

                <span
                  style={{
                    fontFamily: "var(--font-byrd), sans-serif",
                    fontSize: "0.75rem",
                    color: v.accent,
                    letterSpacing: "3px",
                  }}
                >
                  {v.number}
                </span>

                {/* Accent line */}
                <div style={{ height: "2px", width: "40px", backgroundColor: v.accent }} />

                <h3
                  style={{
                    fontFamily: "var(--font-byrd), sans-serif",
                    fontSize: "1.7em",
                    textTransform: "uppercase",
                    lineHeight: 1.1,
                    color: WHITE,
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-kobeweb), sans-serif",
                    fontSize: "0.9em",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                  }}
                >
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── LEADERSHIP TEAM ──────────────────────────────── */}
      <div data-cursor-color={YELLOW} style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}>
        <div
          style={{
            margin: mx,
            padding: isMobile ? "3em 0" : `4em ${sp}`,
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <AnimatedSection style={{ marginBottom: "2.5em" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 8fr",
                gap: "2em",
                alignItems: "flex-end",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-newforest), serif",
                  fontStyle: "italic",
                  fontSize: "1.6em",
                  color: MUTED,
                  lineHeight: 1.2,
                }}
              >
                The
              </span>
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-newforest), serif",
                    fontStyle: "italic",
                    fontSize: "1.2em",
                    color: MUTED,
                    display: "block",
                    marginBottom: "0.3em",
                  }}
                >
                  Running the show
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-byrd), sans-serif",
                    fontSize: "3em",
                    textTransform: "uppercase",
                    lineHeight: 1,
                  }}
                >
                  LEADERSHIP
                </h2>
              </div>
            </div>
          </AnimatedSection>

          {/* Leadership grid */}
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
              gap: "2px",
            }}
          >
            {leadership.map((member, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "2em",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {/* Avatar placeholder — geometric */}
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "0.5em",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* SVG initials placeholder */}
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 200 200"
                    fill="none"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <circle cx="100" cy="80" r="40" stroke={YELLOW} strokeOpacity="0.3" fill="none" />
                    <ellipse cx="100" cy="160" rx="60" ry="40" stroke={YELLOW} strokeOpacity="0.2" fill="none" />
                    <circle cx="100" cy="100" r="95" stroke={YELLOW} strokeOpacity="0.08" fill="none" />
                    <text
                      x="100"
                      y="110"
                      textAnchor="middle"
                      fill={YELLOW}
                      fillOpacity="0.5"
                      fontFamily="var(--font-byrd), sans-serif"
                      fontSize="48"
                    >
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </text>
                  </svg>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-byrd), sans-serif",
                    fontSize: "1.3em",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    lineHeight: 1.1,
                  }}
                >
                  {member.name}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-byrd), sans-serif",
                    fontSize: "0.7rem",
                    color: YELLOW,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  {member.role}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-kobeweb), sans-serif",
                    fontSize: "0.8em",
                    color: MUTED,
                  }}
                >
                  {member.year}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── TECHNICAL TEAM ───────────────────────────────── */}
      <div data-cursor-color={BLUE} style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}>
        <div
          style={{
            margin: mx,
            padding: isMobile ? "3em 0" : `4em ${sp}`,
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <AnimatedSection style={{ marginBottom: "2.5em" }}>
            <span
              style={{
                fontFamily: "var(--font-newforest), serif",
                fontStyle: "italic",
                fontSize: "1.2em",
                color: MUTED,
                display: "block",
                marginBottom: "0.3em",
              }}
            >
              Building the future
            </span>
            <h2
              style={{
                fontFamily: "var(--font-byrd), sans-serif",
                fontSize: "3em",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              TECHNICAL
              <br />
              <span style={{ color: "rgba(62,109,217,0.6)" }}>DIRECTORS</span>
            </h2>
          </AnimatedSection>

          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: "2px" }}
          >
            {technicalTeam.map((member, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr 1fr" : "60px 1fr 1fr 80px",
                  alignItems: "center",
                  padding: "1.5em 0",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  gap: "2em",
                }}
              >
                {/* Index */}
                <span
                  style={{
                    fontFamily: "var(--font-byrd), sans-serif",
                    fontSize: "0.75rem",
                    color: BLUE,
                    letterSpacing: "2px",
                  }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>

                {/* Name */}
                <h3
                  style={{
                    fontFamily: "var(--font-byrd), sans-serif",
                    fontSize: "1.4em",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {member.name}
                </h3>

                {/* Role + Stack */}
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-byrd), sans-serif",
                      fontSize: "0.7rem",
                      color: BLUE,
                      letterSpacing: "2px",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    {member.role}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-kobeweb), sans-serif",
                      fontSize: "0.8em",
                      color: MUTED,
                    }}
                  >
                    {member.stack}
                  </span>
                </div>

                {/* CTA */}
                <a
                  href="#"
                  style={{
                    fontFamily: "var(--font-byrd), sans-serif",
                    fontSize: "0.65rem",
                    color: BLUE,
                    textDecoration: "none",
                    border: "1px solid rgba(62,109,217,0.35)",
                    borderRadius: "100px",
                    padding: "6px 16px",
                    whiteSpace: "nowrap",
                    letterSpacing: "1px",
                  }}
                >
                  PROFILE
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── JOIN THE TEAM CTA ─────────────────────────────── */}
      <div data-cursor-color={YELLOW} style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}>
        <div
          style={{
            margin: mx,
            padding: isMobile ? "3em 0" : `5em ${sp}`,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "2em" : "80px",
            alignItems: "center",
          }}
        >
          <AnimatedSection>
            <p
              style={{
                fontFamily: "var(--font-newforest), serif",
                fontStyle: "italic",
                fontSize: "1.4em",
                color: MUTED,
                marginBottom: "0.5em",
              }}
            >
              Ready to join?
            </p>
            <h2
              style={{
                fontFamily: "var(--font-byrd), sans-serif",
                fontSize: "4em",
                textTransform: "uppercase",
                lineHeight: 1,
                marginBottom: "0.5em",
              }}
            >
              BECOME
              <br />
              <span style={{ color: YELLOW }}>PART OF IT</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-kobeweb), sans-serif",
                fontSize: "0.95em",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: "400px",
                marginBottom: "2em",
              }}
            >
              We welcome students of all experience levels. Whether you code every
              day or just wrote your first &ldquo;Hello World&rdquo; — there&apos;s a place for you here.
            </p>
            <div style={{ display: "flex", gap: "1em" }}>
              <button
                style={{
                  border: `1px solid ${YELLOW}`,
                  backgroundColor: YELLOW,
                  color: "#070707",
                  fontFamily: "var(--font-byrd), sans-serif",
                  borderRadius: "100px",
                  padding: "12px 32px",
                  fontSize: "0.75rem",
                  letterSpacing: "2px",
                  height: "auto",
                }}
              >
                JOIN DEVSOC
              </button>
              <button
                style={{
                  border: "1px solid rgba(255,255,255,0.3)",
                  backgroundColor: "transparent",
                  color: WHITE,
                  fontFamily: "var(--font-byrd), sans-serif",
                  borderRadius: "100px",
                  padding: "12px 32px",
                  fontSize: "0.75rem",
                  letterSpacing: "2px",
                  height: "auto",
                }}
              >
                CONTACT US
              </button>
            </div>
          </AnimatedSection>

          {/* Right: Quick stats */}
          <AnimatedSection direction="right">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2px",
              }}
            >
              {[
                { value: "300+", label: "Members", accent: YELLOW },
                { value: "5+", label: "Years running", accent: WHITE },
                { value: "20+", label: "Events / year", accent: RED },
                { value: "10+", label: "Active projects", accent: BLUE },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    padding: "2em",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-byrd), sans-serif",
                      fontSize: "3.5em",
                      color: s.accent,
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-kobeweb), sans-serif",
                      fontSize: "0.8em",
                      color: MUTED,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      <Section5Contact />
    </main>
  );
}
