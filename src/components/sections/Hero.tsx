"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import { useResponsive } from "@/components/ui/useResponsive";

// ─── Code background ─────────────────────────────────────────────────────────

type Snippet = {
  text: string;
  x: number; // left %
  y: number; // top %
  opacity: number;
  color: string;
  delay: number;
  cursor?: boolean;
};

const SNIPPETS: Snippet[] = [
  // top band
  { text: "git init && git remote add origin", x: 3, y: 7, opacity: 0.09, color: "#edf738", delay: 0.6 },
  { text: "npm create next-app@latest devsoc-v2", x: 57, y: 6, opacity: 0.055, color: "#ffffff", delay: 0.9 },
  { text: "const [open, setOpen] = useState(false)", x: 74, y: 12, opacity: 0.05, color: "#ffffff", delay: 1.3 },

  // second band
  { text: "docker compose up --build -d", x: 2, y: 19, opacity: 0.055, color: "#ffffff", delay: 1.1 },
  { text: "import { motion } from 'framer-motion'", x: 35, y: 17, opacity: 0.075, color: "#3e6dd9", delay: 0.7 },
  { text: "git push origin main", x: 81, y: 20, opacity: 0.09, color: "#edf738", delay: 1.5 },

  // third band
  { text: "export default function Page() {", x: 1, y: 28, opacity: 0.05, color: "#ffffff", delay: 1.0 },
  { text: "npx prisma migrate dev --name init", x: 64, y: 27, opacity: 0.055, color: "#ffffff", delay: 1.4 },

  // fourth band — sparse near heading
  { text: "git commit -m 'feat: launch devsoc v2 ✨'", x: 2, y: 37, opacity: 0.09, color: "#edf738", delay: 0.5 },
  { text: "type Props = { children: React.ReactNode }", x: 72, y: 36, opacity: 0.055, color: "#3e6dd9", delay: 1.2 },

  // terminal prompt — far left mid
  { text: "$ devsoc --init", x: 1, y: 46, opacity: 0.13, color: "#edf738", delay: 0.3, cursor: true },
  { text: "SELECT * FROM projects WHERE active = true", x: 80, y: 45, opacity: 0.045, color: "#ffffff", delay: 1.6 },

  // sixth band
  { text: "const res = await fetch('/api/events')", x: 2, y: 56, opacity: 0.055, color: "#ffffff", delay: 1.1 },
  { text: "yarn add @mui/icons-material framer-motion", x: 58, y: 55, opacity: 0.05, color: "#ffffff", delay: 1.3 },

  // seventh band
  { text: "git rebase -i HEAD~3", x: 3, y: 66, opacity: 0.08, color: "#edf738", delay: 0.8 },
  { text: "interface User { id: string; role: string }", x: 52, y: 64, opacity: 0.055, color: "#3e6dd9", delay: 1.0 },
  { text: "npm run build && npm run start", x: 84, y: 67, opacity: 0.08, color: "#edf738", delay: 0.65 },

  // eighth band
  { text: "useEffect(() => { fetchData() }, [])", x: 2, y: 76, opacity: 0.05, color: "#ffffff", delay: 1.4 },
  { text: "curl -X POST https://api.devsoc.dev/register", x: 40, y: 75, opacity: 0.05, color: "#ffffff", delay: 1.1 },
  { text: "git stash && git checkout -b feature/new", x: 78, y: 77, opacity: 0.07, color: "#edf738", delay: 0.9 },

  // bottom band
  { text: "pnpm install --frozen-lockfile", x: 3, y: 86, opacity: 0.055, color: "#ffffff", delay: 1.2 },
  { text: "git cherry-pick a1b2c3d4", x: 38, y: 84, opacity: 0.08, color: "#edf738", delay: 0.75 },
  { text: "export type { User, Project, Event }", x: 70, y: 87, opacity: 0.05, color: "#ffffff", delay: 1.5 },
];

// Subset for mobile (just the ones near edges, fewer items)
const MOBILE_SNIPPETS = SNIPPETS.filter((_, i) => i % 3 === 0).map((s) => ({
  ...s,
  opacity: s.opacity * 0.8,
}));

function CodeBackground({ mobile }: { mobile: boolean }) {
  const list = mobile ? MOBILE_SNIPPETS : SNIPPETS;

  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      {/* Radial vignette — darkens centre so heading stays legible */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 55% 45% at 50% 48%, rgba(7,7,7,0.82) 0%, transparent 100%)",
          zIndex: 2,
        }}
      />

      {list.map((s, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: s.opacity, y: 0 }}
          transition={{ delay: s.delay, duration: 2.8, ease: "easeOut" }}
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top: `${s.y}%`,
            color: s.color,
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: mobile ? "0.6rem" : "0.68rem",
            letterSpacing: "0.04em",
            whiteSpace: "nowrap",
            fontWeight: 400,
            textShadow:
              s.color === "#edf738"
                ? "0 0 12px rgba(237,247,56,0.35)"
                : s.color === "#3e6dd9"
                ? "0 0 10px rgba(62,109,217,0.3)"
                : "none",
          }}
        >
          {s.text}
          {s.cursor && (
            <motion.span
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{ repeat: Infinity, duration: 1.1, ease: "linear", times: [0, 0.5, 0.5, 1] }}
              style={{ marginLeft: "2px" }}
            >
              ▌
            </motion.span>
          )}
        </motion.span>
      ))}
    </div>
  );
}

// ─── Hero variants ────────────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.4, delayChildren: 0.5 },
  },
};

const itemVariants: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 2, ease: "easeOut" as const },
  },
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function Hero() {
  const { isMobile, isTablet } = useResponsive();

  return (
    <div style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}>
      <div style={{ margin: isMobile ? "0 16px" : isTablet ? "0 24px" : "0 40px" }}>
        <Navbar />
      </div>

      <div style={{ position: "relative" }}>
        {/* Code background */}
        <CodeBackground mobile={isMobile} />

        {/* Rotating flower — hide on mobile */}
        {!isMobile && (
          <div style={{ position: "absolute", left: "49%", top: "20%", zIndex: 4, textAlign: "center" }}>
            <Image
              src="/assets/flower.png"
              alt="Rotating flower"
              width={isTablet ? 34 : 23}
              height={isTablet ? 34 : 23}
              style={{ animation: "rotate 10s linear infinite", margin: "auto" }}
            />
          </div>
        )}

        {/* Hero content */}
        {isMobile ? (
          /* Mobile: single-column centered layout */
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              position: "relative",
              zIndex: 2,
              minHeight: "80vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "100px 20px 60px",
              textAlign: "center",
              gap: "24px",
            }}
          >
            <motion.p variants={itemVariants} style={{ color: "#edf738", fontSize: "0.85em", letterSpacing: "2px" }}>
              code --- together
            </motion.p>
            <motion.h1
              variants={itemVariants}
              style={{
                fontSize: "2.6em",
                textAlign: "center",
                letterSpacing: "0.02em",
                fontFamily: "var(--font-byrd), sans-serif",
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 1.15,
                color: "#edf738",
              }}
            >
              developer society and open source projects
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 2 }}
              style={{ display: "flex", gap: "16px", alignItems: "center" }}
            >
              <span style={{ textTransform: "uppercase", fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.7rem", padding: "2px 6px", borderRadius: "2px", backgroundColor: "#edf738", color: "#070707", fontWeight: 900 }}>DevSoc</span>
              <span style={{ color: "#edf738", fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.9em", fontWeight: 700 }}>Build Together · Make Impact</span>
            </motion.div>
            <motion.p variants={itemVariants} style={{ color: "#edf738", fontSize: "0.85em", letterSpacing: "2px" }}>
              build --- the future
            </motion.p>
          </motion.div>
        ) : (
          /* Desktop / Tablet: 3-column grid */
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              position: "relative",
              zIndex: 2,
              height: "90vh",
              display: "grid",
              gridTemplateColumns: isTablet ? "1fr 4fr 1fr" : "1fr 3fr 1fr",
              padding: isTablet ? "35px 40px" : "35px 88px",
              margin: isTablet ? "0 24px" : "0 40px",
              alignItems: "center",
            }}
          >
            <motion.div variants={itemVariants} style={{ color: "#edf738", fontSize: "0.97em", display: "flex", alignItems: "center" }}>
              code --- together
            </motion.div>

            <div style={{ position: "relative" }}>
              <motion.h1
                variants={itemVariants}
                style={{
                  fontSize: isTablet ? "2.6em" : "3.5em",
                  textAlign: "center",
                  letterSpacing: "0.02em",
                  fontFamily: "var(--font-byrd), sans-serif",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 1.2,
                  color: "#edf738",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                developer society and open source projects
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 2 }}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: isTablet ? "translate(-50%, -50%) scale(1.5)" : "translate(-50%, -50%) scale(1.7)",
                  backgroundColor: "transparent",
                }}
              >
                <Image src="/assets/vector1.png" alt="Vector" width={980} height={431} style={{ backgroundColor: "transparent", width: isTablet ? "680px" : "920px", height: "auto" }} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 3, ease: "easeOut" as const }}
                style={{ position: "absolute", top: "110%", left: "43%", backgroundColor: "transparent", display: "flex", columnGap: "30px", alignItems: "center" }}
              >
                <span style={{ textTransform: "uppercase", fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.75rem", padding: "2px 4px", borderRadius: "2px", backgroundColor: "#edf738", color: "#070707", fontWeight: 900 }}>DevSoc</span>
                <div style={{ backgroundColor: "transparent" }}>
                  <span style={{ backgroundColor: "transparent", fontSize: "1.11em", color: "#edf738", fontWeight: 700, fontFamily: "var(--font-byrd), sans-serif", textTransform: "uppercase", display: "block" }}>Build Together</span>
                  <span style={{ backgroundColor: "transparent", fontSize: "1.11em", color: "#edf738", fontWeight: 700, fontFamily: "var(--font-byrd), sans-serif", textTransform: "uppercase", display: "block" }}>Make Impact</span>
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} style={{ color: "#edf738", fontSize: "0.97em", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
              build --- the future
            </motion.div>
          </motion.div>
        )}

        {/* Shake arrow */}
        <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", zIndex: 3 }}>
          <Image src="/svgArrow.svg" alt="Scroll down" width={24} height={24} style={{ animation: "shake 2s infinite", color: "#edf738" }} />
        </div>
      </div>
    </div>
  );
}
