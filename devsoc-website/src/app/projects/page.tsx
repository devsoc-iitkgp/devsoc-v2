"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Section5Contact from "@/components/sections/Section5Contact";
import AnimatedSection from "@/components/ui/AnimatedSection";

const YELLOW = "#edf738";
const YELLOW_MUTED = "rgba(237, 247, 56, 0.35)";
const YELLOW_BORDER = "rgba(237, 247, 56, 0.2)";

const projects = [
  {
    slug: "unitrack",
    imgSrc: "/assets/section1/Img1.png",
    vectorSrc: "/assets/section1/vector1.png",
    title: "UNITRACK",
    subtitle: "Student management platform",
    tags: ["full-stack", "react", "node.js", "postgresql"],
    desc: "A comprehensive university student tracking platform that centralises academic progress, enrollment records, and advisor communication in one place.",
    github: "#",
    status: "ACTIVE",
  },
  {
    slug: "hackportal",
    imgSrc: "/assets/section1/Img2.png",
    vectorSrc: "/assets/section1/vector2.png",
    title: "HACKPORTAL",
    subtitle: "Hackathon management system",
    tags: ["hackathon", "next.js", "typescript", "open source"],
    desc: "An open-source hackathon registration and judging platform powering events at universities across the country. Fully customisable and self-hostable.",
    github: "#",
    status: "OPEN SOURCE",
  },
  {
    slug: "devsoc-app",
    imgSrc: "/assets/section1/Img3.png",
    vectorSrc: "/assets/section1/vector3.png",
    title: "DEVSOC APP",
    subtitle: "Member mobile application",
    tags: ["mobile", "react native", "expo", "firebase"],
    desc: "The official DevSoc companion app. Browse events, discover projects, connect with members, and stay up to date with society news — all in one place.",
    github: "#",
    status: "ACTIVE",
  },
  {
    slug: "openlms",
    imgSrc: "/assets/section1/Img4.png",
    vectorSrc: "/assets/section1/vector4.png",
    title: "OPENLMS",
    subtitle: "Open learning management system",
    tags: ["education", "django", "python", "open source"],
    desc: "A lightweight, open-source learning management system designed for student-run workshops and bootcamps. Built to be extended by the community.",
    github: "#",
    status: "OPEN SOURCE",
  },
];

const stats = [
  { value: "12+", label: "Projects shipped" },
  { value: "80+", label: "Contributors" },
  { value: "4", label: "Open source repos" },
  { value: "3K+", label: "GitHub stars" },
];

// Inline SVG — code brackets vector
function BracketsVector() {
  return (
    <svg
      width="480"
      height="380"
      viewBox="0 0 480 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ backgroundColor: "transparent" }}
    >
      {/* Left bracket */}
      <path
        d="M160 40 L100 190 L160 340"
        stroke={YELLOW}
        strokeOpacity="0.4"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right bracket */}
      <path
        d="M320 40 L380 190 L320 340"
        stroke={YELLOW}
        strokeOpacity="0.4"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Centre slash lines — </> pattern */}
      <line x1="210" y1="130" x2="270" y2="250" stroke={YELLOW} strokeOpacity="0.3" strokeWidth="1.5" />
      {/* Horizontal guide */}
      <line x1="100" y1="190" x2="380" y2="190" stroke={YELLOW} strokeOpacity="0.1" />
      {/* Outer rect */}
      <rect x="1" y="1" width="478" height="378" stroke={YELLOW} strokeOpacity="0.15" />
      {/* Corner decorations */}
      <path d="M0 30 L0 0 L30 0" stroke={YELLOW} strokeOpacity="0.5" strokeWidth="1.5" fill="none" />
      <path d="M450 0 L480 0 L480 30" stroke={YELLOW} strokeOpacity="0.5" strokeWidth="1.5" fill="none" />
      <path d="M0 350 L0 380 L30 380" stroke={YELLOW} strokeOpacity="0.5" strokeWidth="1.5" fill="none" />
      <path d="M450 380 L480 380 L480 350" stroke={YELLOW} strokeOpacity="0.5" strokeWidth="1.5" fill="none" />
      {/* Node dots */}
      <circle cx="100" cy="190" r="5" fill={YELLOW} fillOpacity="0.6" />
      <circle cx="380" cy="190" r="5" fill={YELLOW} fillOpacity="0.6" />
      <circle cx="240" cy="190" r="3" fill={YELLOW} fillOpacity="0.35" />
      {/* Diagonal grid lines */}
      <line x1="0" y1="0" x2="480" y2="380" stroke={YELLOW} strokeOpacity="0.05" />
      <line x1="480" y1="0" x2="0" y2="380" stroke={YELLOW} strokeOpacity="0.05" />
      {/* Horizontal tick marks */}
      {[80, 160, 240, 320, 400].map((x) => (
        <line key={x} x1={x} y1="185" x2={x} y2="195" stroke={YELLOW} strokeOpacity="0.25" />
      ))}
    </svg>
  );
}

// Inline SVG — open source / contribution diagram
function ContribVector() {
  return (
    <svg
      width="360"
      height="180"
      viewBox="0 0 360 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ backgroundColor: "transparent" }}
    >
      {/* Grid of squares — contribution graph style */}
      {Array.from({ length: 7 }).map((_, row) =>
        Array.from({ length: 12 }).map((_, col) => {
          const opacity = Math.random() > 0.4 ? (Math.random() * 0.5 + 0.15) : 0.06;
          return (
            <rect
              key={`${row}-${col}`}
              x={col * 30 + 1}
              y={row * 24 + 1}
              width="26"
              height="20"
              fill={YELLOW}
              fillOpacity={opacity}
              rx="2"
            />
          );
        })
      )}
      {/* Highlight row */}
      {Array.from({ length: 12 }).map((_, col) => (
        <rect
          key={`h-${col}`}
          x={col * 30 + 1}
          y={3 * 24 + 1}
          width="26"
          height="20"
          fill={YELLOW}
          fillOpacity={col === 8 ? 0.85 : 0.1}
          rx="2"
        />
      ))}
    </svg>
  );
}

const cardVariants: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
};

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function ProjectsPage() {
  return (
    <main style={{ position: "relative", backgroundColor: "#070707", overflowX: "hidden" }}>

      {/* ── HERO ─────────────────────────────────────────── */}
      <div data-cursor-color={YELLOW} style={{ minWidth: "1440px", width: "100%", margin: "0 auto" }}>
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
                  color: YELLOW_MUTED,
                  marginBottom: "0.4em",
                  lineHeight: 1.2,
                }}
              >
                What we build
              </p>
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
                OUR
              </h1>
              <h1
                style={{
                  fontFamily: "var(--font-byrd), sans-serif",
                  fontSize: "5.5em",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 1.05,
                  color: YELLOW_MUTED,
                }}
              >
                PROJECTS
              </h1>
              <p
                style={{
                  marginTop: "1.8em",
                  fontSize: "1em",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.45)",
                  maxWidth: "420px",
                  fontFamily: "var(--font-kobeweb), sans-serif",
                }}
              >
                We build real software. Every project is student-led, open to contributions,
                and designed to solve problems that matter to our community.
              </p>
              <div style={{ marginTop: "2em", display: "flex", gap: "1em" }}>
                <button
                  style={{
                    border: `1px solid ${YELLOW}`,
                    backgroundColor: YELLOW,
                    color: "#070707",
                    fontFamily: "var(--font-byrd), sans-serif",
                    borderRadius: "100px",
                    padding: "10px 28px",
                    fontSize: "0.75rem",
                    letterSpacing: "2px",
                    height: "auto",
                  }}
                >
                  VIEW ON GITHUB
                </button>
                <button
                  style={{
                    border: `1px solid ${YELLOW}`,
                    backgroundColor: "transparent",
                    color: YELLOW,
                    fontFamily: "var(--font-byrd), sans-serif",
                    borderRadius: "100px",
                    padding: "10px 28px",
                    fontSize: "0.75rem",
                    letterSpacing: "2px",
                    height: "auto",
                  }}
                >
                  JOIN A TEAM
                </button>
              </div>
            </AnimatedSection>

            {/* Right: Brackets vector */}
            <AnimatedSection direction="right">
              <BracketsVector />
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* ── STATS STRIP ──────────────────────────────────── */}
      <div data-cursor-color={YELLOW} style={{ minWidth: "1440px", width: "100%", margin: "0 auto" }}>
        <AnimatedSection>
          <div
            style={{
              margin: "0 40px",
              padding: "2em 5.56em",
              borderTop: `1px solid ${YELLOW_BORDER}`,
              borderBottom: `1px solid ${YELLOW_BORDER}`,
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
            }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "1em",
                  borderRight: i < stats.length - 1 ? `1px solid ${YELLOW_BORDER}` : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-byrd), sans-serif",
                    fontSize: "3.5em",
                    color: YELLOW,
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-kobeweb), sans-serif",
                    fontSize: "0.8em",
                    color: "rgba(255,255,255,0.4)",
                    marginTop: "0.4em",
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

      {/* ── PROJECT GRID ─────────────────────────────────── */}
      <div data-cursor-color={YELLOW} style={{ minWidth: "1440px", width: "100%", margin: "0 auto" }}>
        <div style={{ margin: "0 40px", padding: "4em 5.56em" }}>
          <AnimatedSection style={{ marginBottom: "2.5em" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 8fr 2fr" }}>
              <span
                style={{
                  fontFamily: "var(--font-newforest), serif",
                  fontSize: "1.8em",
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.35)",
                  lineHeight: 1.2,
                }}
              >
                Work
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-byrd), sans-serif",
                  fontSize: "3.5em",
                  textTransform: "uppercase",
                  lineHeight: 1.1,
                }}
              >
                ALL PROJECTS
              </h2>
              <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
                <button
                  style={{
                    border: "1px solid white",
                    backgroundColor: "transparent",
                    fontFamily: "var(--font-byrd), sans-serif",
                  }}
                >
                  CONTRIBUTE
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* Divider */}
          <div style={{ height: "1px", backgroundColor: YELLOW_BORDER, marginBottom: "2px" }} />

          {/* 2-column project cards */}
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            style={{ display: "flex", flexDirection: "column", gap: "2px", marginTop: "2px" }}
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  border: `1px solid ${YELLOW_BORDER}`,
                  overflow: "hidden",
                }}
              >
                {/* Image side */}
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <Image
                    src={project.imgSrc}
                    alt={project.title}
                    width={680}
                    height={400}
                    style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "280px" }}
                  />
                  {/* Status badge */}
                  <span
                    style={{
                      position: "absolute",
                      top: "16px",
                      left: "16px",
                      fontFamily: "var(--font-byrd), sans-serif",
                      fontSize: "0.65rem",
                      padding: "3px 10px",
                      backgroundColor: project.status === "OPEN SOURCE" ? YELLOW : "rgba(7,7,7,0.8)",
                      color: project.status === "OPEN SOURCE" ? "#070707" : YELLOW,
                      border: `1px solid ${YELLOW}`,
                      letterSpacing: "2px",
                    }}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Info side */}
                <div
                  style={{
                    padding: "2.5em",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    borderLeft: `1px solid ${YELLOW_BORDER}`,
                  }}
                >
                  {/* Title row */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <Image
                      src={project.vectorSrc}
                      alt=""
                      width={22}
                      height={22}
                      style={{ backgroundColor: "transparent" }}
                    />
                    <h3
                      style={{
                        fontFamily: "var(--font-byrd), sans-serif",
                        fontSize: "2em",
                        textTransform: "uppercase",
                        lineHeight: 1,
                        color: YELLOW,
                      }}
                    >
                      {project.title}
                    </h3>
                  </div>

                  <p
                    style={{
                      fontFamily: "var(--font-newforest), serif",
                      fontStyle: "italic",
                      fontSize: "1em",
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {project.subtitle}
                  </p>

                  <p
                    style={{
                      fontFamily: "var(--font-kobeweb), sans-serif",
                      fontSize: "0.9em",
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.7,
                    }}
                  >
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          backgroundColor: "white",
                          color: "black",
                          borderRadius: "2px",
                          padding: "2px 6px",
                          fontFamily: "var(--font-byrd), sans-serif",
                          fontSize: "0.7rem",
                          fontWeight: 800,
                          textTransform: "lowercase",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div style={{ marginTop: "auto", display: "flex", gap: "1em" }}>
                    <a
                      href={`/projects/${project.slug}`}
                      style={{
                        fontFamily: "var(--font-byrd), sans-serif",
                        fontSize: "0.7rem",
                        letterSpacing: "2px",
                        color: "#070707",
                        textDecoration: "none",
                        backgroundColor: YELLOW,
                        borderRadius: "100px",
                        padding: "8px 22px",
                      }}
                    >
                      VIEW DETAILS →
                    </a>
                    <a
                      href={project.github}
                      style={{
                        fontFamily: "var(--font-byrd), sans-serif",
                        fontSize: "0.7rem",
                        letterSpacing: "2px",
                        color: YELLOW,
                        textDecoration: "none",
                        border: `1px solid ${YELLOW}`,
                        borderRadius: "100px",
                        padding: "8px 22px",
                      }}
                    >
                      GITHUB →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── OPEN SOURCE / CONTRIBUTE ──────────────────────── */}
      <div data-cursor-color={YELLOW} style={{ minWidth: "1440px", width: "100%", margin: "0 auto" }}>
        <div
          style={{
            margin: "0 40px",
            padding: "4em 5.56em",
            borderTop: `1px solid ${YELLOW_BORDER}`,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          <AnimatedSection direction="left">
            <ContribVector />
            <p
              style={{
                fontFamily: "var(--font-kobeweb), sans-serif",
                fontSize: "0.75em",
                color: "rgba(255,255,255,0.25)",
                marginTop: "0.8em",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Contribution activity · 2024
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <span
              style={{
                fontFamily: "var(--font-newforest), serif",
                fontStyle: "italic",
                fontSize: "1.4em",
                color: "rgba(255,255,255,0.35)",
                display: "block",
                marginBottom: "0.4em",
              }}
            >
              Join the effort
            </span>
            <h2
              style={{
                fontFamily: "var(--font-byrd), sans-serif",
                fontSize: "3.5em",
                textTransform: "uppercase",
                lineHeight: 1,
                marginBottom: "0.5em",
              }}
            >
              OPEN SOURCE
              <br />
              <span style={{ color: YELLOW_MUTED }}>FOREVER</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-kobeweb), sans-serif",
                fontSize: "0.95em",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                maxWidth: "380px",
                marginBottom: "2em",
              }}
            >
              All DevSoc projects are open source. Whether you&apos;re fixing a bug,
              adding a feature, or writing docs — every contribution counts and every
              contributor gets credit.
            </p>
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
              START CONTRIBUTING
            </button>
          </AnimatedSection>
        </div>
      </div>

      <Section5Contact />
    </main>
  );
}
