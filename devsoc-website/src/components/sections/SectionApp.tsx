"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useResponsive } from "@/components/ui/useResponsive";

const YELLOW = "#edf738";
const YELLOW_DIM = "rgba(237, 247, 56, 0.12)";
const YELLOW_BORDER = "rgba(237, 247, 56, 0.22)";
const MUTED = "rgba(255,255,255,0.4)";
const WHITE = "rgba(255,255,255,0.9)";

const features = [
  { label: "Event Feed", desc: "Stay updated on all upcoming workshops, hackathons, and meetups in real time." },
  { label: "Project Hub", desc: "Browse and join active DevSoc projects. Track progress and contribute openly." },
  { label: "Member Network", desc: "Connect with other DevSoc members, find collaborators and mentors." },
  { label: "Blog & Resources", desc: "Read articles, tutorials, and devlogs written by the community." },
];

// Inline SVG phone mockup with fake UI screens
function PhoneMockup() {
  return (
    <svg
      viewBox="0 0 320 620"
      width="320"
      height="620"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "drop-shadow(0 0 40px rgba(237,247,56,0.12))" }}
    >
      {/* Phone body */}
      <rect x="4" y="4" width="312" height="612" rx="36" fill="#0d0d0d" stroke={YELLOW} strokeOpacity="0.35" strokeWidth="1.5" />
      {/* Screen bezel */}
      <rect x="14" y="52" width="292" height="536" rx="6" fill="#111" />
      {/* Notch / dynamic island */}
      <rect x="110" y="18" width="100" height="22" rx="11" fill="#1a1a1a" />
      {/* Side buttons */}
      <rect x="0" y="140" width="4" height="60" rx="2" fill="#1f1f1f" />
      <rect x="0" y="215" width="4" height="60" rx="2" fill="#1f1f1f" />
      <rect x="316" y="160" width="4" height="80" rx="2" fill="#1f1f1f" />

      {/* ── Screen content ── */}

      {/* Status bar */}
      <text x="28" y="76" fontSize="10" fill={MUTED} fontFamily="monospace">9:41</text>
      <text x="268" y="76" fontSize="9" fill={MUTED} fontFamily="monospace">●●●</text>

      {/* App header */}
      <rect x="14" y="84" width="292" height="40" fill="#0d0d0d" />
      <text x="28" y="109" fontSize="15" fontWeight="900" fill={YELLOW} fontFamily="monospace" letterSpacing="3">DEVSOC</text>
      {/* hamburger icon */}
      <rect x="272" y="97" width="22" height="2" rx="1" fill={MUTED} />
      <rect x="272" y="103" width="16" height="2" rx="1" fill={MUTED} />
      <rect x="272" y="109" width="22" height="2" rx="1" fill={MUTED} />

      {/* Divider */}
      <line x1="14" y1="124" x2="306" y2="124" stroke={YELLOW} strokeOpacity="0.15" strokeWidth="1" />

      {/* Hero card */}
      <rect x="22" y="132" width="276" height="110" rx="4" fill={YELLOW_DIM} stroke={YELLOW_BORDER} strokeWidth="1" />
      <text x="34" y="157" fontSize="9" fill={YELLOW} fontFamily="monospace" letterSpacing="2">UPCOMING EVENT</text>
      <text x="34" y="178" fontSize="14" fontWeight="900" fill={WHITE} fontFamily="monospace">HACKPORTAL 2025</text>
      <text x="34" y="196" fontSize="9" fill={MUTED} fontFamily="monospace">48-hr hackathon · Apr 12–14</text>
      {/* Register button */}
      <rect x="34" y="210" width="80" height="22" rx="2" fill={YELLOW} />
      <text x="74" y="225" fontSize="9" fontWeight="900" fill="#070707" fontFamily="monospace" textAnchor="middle">REGISTER</text>
      {/* Arrow deco */}
      <text x="258" y="225" fontSize="22" fill={YELLOW} fillOpacity="0.25" fontFamily="monospace">→</text>

      {/* Section label */}
      <text x="22" y="264" fontSize="9" fill={MUTED} fontFamily="monospace" letterSpacing="2">ACTIVE PROJECTS</text>

      {/* Project cards row */}
      {[
        { x: 22, title: "UniTrack", tag: "WEB" },
        { x: 170, title: "OpenLMS", tag: "EDU" },
      ].map(({ x, title, tag }) => (
        <g key={title}>
          <rect x={x} y={272} width="122" height="72" rx="4" fill="#161616" stroke={YELLOW_BORDER} strokeWidth="1" />
          <rect x={x + 8} y={280} width="28" height="12" rx="2" fill={YELLOW} fillOpacity="0.15" />
          <text x={x + 22} y={289} fontSize="7" fill={YELLOW} fontFamily="monospace" textAnchor="middle">{tag}</text>
          <text x={x + 8} y={308} fontSize="11" fontWeight="900" fill={WHITE} fontFamily="monospace">{title}</text>
          <text x={x + 8} y={322} fontSize="8" fill={MUTED} fontFamily="monospace">Open source</text>
          <text x={x + 106} y={338} fontSize="10" fill={YELLOW} fontFamily="monospace" textAnchor="end">→</text>
        </g>
      ))}

      {/* Section label */}
      <text x="22" y="368" fontSize="9" fill={MUTED} fontFamily="monospace" letterSpacing="2">LATEST FROM BLOG</text>

      {/* Blog list items */}
      {[
        { y: 376, title: "Building with Next.js 16", cat: "TUTORIAL" },
        { y: 416, title: "Open Source Onboarding", cat: "DEVLOG" },
      ].map(({ y, title, cat }) => (
        <g key={title}>
          <rect x="22" y={y} width="276" height="34" rx="3" fill="#111" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <rect x="30" y={y + 10} width="36" height="13" rx="2" fill="rgba(255,255,255,0.08)" />
          <text x="48" y={y + 20} fontSize="7" fill={MUTED} fontFamily="monospace" textAnchor="middle">{cat}</text>
          <text x="76" y={y + 21} fontSize="9" fill={WHITE} fontFamily="monospace">{title}</text>
          <text x="290" y={y + 21} fontSize="10" fill={MUTED} fontFamily="monospace" textAnchor="end">›</text>
        </g>
      ))}

      {/* Bottom nav */}
      <rect x="14" y="536" width="292" height="52" fill="#0d0d0d" />
      <line x1="14" y1="536" x2="306" y2="536" stroke={YELLOW} strokeOpacity="0.12" strokeWidth="1" />
      {[
        { x: 56, label: "Home" },
        { x: 114, label: "Events" },
        { x: 172, label: "Projects" },
        { x: 230, label: "Blog" },
        { x: 276, label: "Me" },
      ].map(({ x, label }, i) => (
        <g key={label}>
          <rect x={x - 12} y={543} width="24" height="18" rx="3" fill={i === 0 ? YELLOW_DIM : "transparent"} />
          <text x={x} y={556} fontSize="7" fill={i === 0 ? YELLOW : MUTED} fontFamily="monospace" textAnchor="middle">{label}</text>
        </g>
      ))}

      {/* Home indicator */}
      <rect x="120" y="598" width="80" height="3" rx="1.5" fill="rgba(255,255,255,0.2)" />
    </svg>
  );
}

export default function SectionApp() {
  const { isMobile, isTablet, mx, sp } = useResponsive();

  return (
    <div data-cursor-color={YELLOW} style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}>
      <div style={{ margin: mx, paddingTop: sp, paddingLeft: sp, paddingRight: sp, paddingBottom: "2em" }}>

        {/* Divider */}
        <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(237,247,56,0.15)", marginBottom: isMobile ? "2em" : "3em" }} />

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "1fr 1fr",
          gap: isMobile ? "3em" : "6em",
          alignItems: "start",
        }}>

          {/* Left — text content */}
          <div>
            <AnimatedSection>
              <p style={{ fontFamily: "var(--font-newforest), serif", fontStyle: "italic", fontSize: isMobile ? "1.2em" : "1.6em", color: YELLOW, marginBottom: "0.5em" }}>
                Everything DevSoc
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 style={{
                fontFamily: "var(--font-byrd), sans-serif",
                fontSize: isMobile ? "2.8em" : isTablet ? "3.5em" : "4.5em",
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 1.05,
                color: WHITE,
                marginBottom: "0.5em",
              }}>
                IN YOUR<br />
                <span style={{ color: YELLOW }}>POCKET</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p style={{
                fontFamily: "var(--font-kobeweb), sans-serif",
                fontSize: "1em",
                color: MUTED,
                lineHeight: 1.8,
                maxWidth: "480px",
                marginBottom: "2.5em",
              }}>
                The DevSoc app brings together events, projects, blog posts, and the member community — all in one place. Stay in the loop wherever you are.
              </p>
            </AnimatedSection>

            {/* Feature list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {features.map((f, i) => (
                <AnimatedSection key={i} delay={0.15 * i}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "160px 1fr",
                      gap: "20px",
                      padding: "1.2em 0",
                      borderTop: i === 0 ? `1px solid ${YELLOW_BORDER}` : "none",
                      borderBottom: `1px solid ${YELLOW_BORDER}`,
                      cursor: "default",
                    }}
                  >
                    <span style={{
                      fontFamily: "var(--font-byrd), sans-serif",
                      fontSize: "0.85rem",
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      color: YELLOW,
                    }}>
                      {f.label}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-kobeweb), sans-serif",
                      fontSize: "0.9em",
                      color: MUTED,
                      lineHeight: 1.6,
                    }}>
                      {f.desc}
                    </span>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>

            {/* CTA */}
            <AnimatedSection delay={0.5}>
              <div style={{ display: "flex", gap: "12px", marginTop: "2.5em", flexWrap: "wrap" }}>
                <button style={{
                  backgroundColor: YELLOW,
                  color: "#070707",
                  border: "none",
                  padding: "12px 28px",
                  fontFamily: "var(--font-byrd), sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  borderRadius: "2px",
                  cursor: "pointer",
                }}>
                  Download App
                </button>
                <button style={{
                  backgroundColor: "transparent",
                  color: YELLOW,
                  border: `1px solid ${YELLOW_BORDER}`,
                  padding: "12px 28px",
                  fontFamily: "var(--font-byrd), sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  borderRadius: "2px",
                  cursor: "pointer",
                }}>
                  Learn More →
                </button>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — phone mockup */}
          <AnimatedSection direction="right" style={{
            display: "flex",
            justifyContent: isMobile || isTablet ? "center" : "flex-end",
            alignItems: "center",
          }}>
            <motion.div
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <PhoneMockup />
            </motion.div>
          </AnimatedSection>
        </div>

      </div>
    </div>
  );
}
