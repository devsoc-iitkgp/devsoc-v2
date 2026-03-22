"use client";

import { motion } from "framer-motion";
import LineAnimation from "@/components/ui/LineAnimation";
import testimonials from "@/data/testimonials";
import { useResponsive } from "@/components/ui/useResponsive";

export default function Section4Testimonials() {
  const { isMobile, isTablet, mx, sp } = useResponsive();

  return (
    <div data-cursor-color="#3e6dd9" style={{ width: "100%", maxWidth: "full", margin: "0 auto" }}>
      <div style={{ margin: mx, paddingLeft: sp, paddingRight: sp, paddingTop: "2em", paddingBottom: sp }}>
        {/* Section watermark */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          style={{ width: "100%", marginBottom: isMobile ? "0.5em" : "1em", overflow: "hidden" }}
        >
          {/* Line 1 — DEVELOPER */}
          <div style={{
            fontFamily: "var(--font-byrd), sans-serif",
            fontSize: "clamp(3rem, 13.5vw, 13rem)",
            lineHeight: 0.92,
            textTransform: "uppercase",
            fontWeight: 900,
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(62, 109, 217, 0.5)",
            whiteSpace: "nowrap",
            userSelect: "none",
            pointerEvents: "none",
            letterSpacing: "0.18em",
          }}>
            DEVSOC
          </div>
          {/* Line 2 — SOCIETY · BUILD · SHIP */}
          <div style={{
            fontFamily: "var(--font-byrd), sans-serif",
            fontSize: "clamp(2rem, 8.8vw, 8.5rem)",
            lineHeight: 0.95,
            textTransform: "uppercase",
            fontWeight: 900,
            color: "rgba(62, 109, 217, 0.18)",
            whiteSpace: "nowrap",
            userSelect: "none",
            pointerEvents: "none",
            letterSpacing: "0.06em",
          }}>
           BUILD · SHIP · GROW
          </div>
        </motion.div>

        {/* Clients banner */}
        <div style={{ marginTop: "2.5em" }}>
          <div style={{ marginBottom: "0.75em", paddingLeft: isMobile ? 0 : "6em" }}>
            <p style={{ color: "#3e6dd9", fontFamily: "var(--font-newforest), serif", fontSize: isMobile ? "1.4em" : "2em", fontStyle: "italic", fontWeight: 400, lineHeight: 1.2 }}>
              They are extremely satisfied
            </p>
          </div>

          {/* Testimonials grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
            style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", columnGap: "20px" }}
          >
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } } }}
              >
                <LineAnimation />
                <div style={{ paddingTop: "2em", paddingBottom: "2em", paddingLeft: isMobile ? "1em" : "6.1em" }}>
                  <div style={{ overflow: "hidden" }}>
                    <a href="#" style={{ fontSize: "1.11rem", color: "#3e6dd9", fontWeight: 800, textDecoration: "none" }}>
                      {t.name}
                    </a>
                  </div>
                  <div>
                    <h3 style={{ color: "rgba(62, 109, 217, 0.7)", textTransform: "none", marginTop: "4px", fontSize: "1.11em", marginBottom: idx % 2 === 0 ? "3rem" : "2rem", fontFamily: "var(--font-kobeweb), sans-serif", fontWeight: 400 }}>
                      &quot;{t.quote}&quot;
                    </h3>
                    <a href="#" style={{ textTransform: "uppercase", fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.75rem", fontWeight: 900, lineHeight: 1.2, textDecoration: "none", color: "rgba(62, 109, 217, 0.7)" }}>
                      {t.person}
                    </a>
                  </div>
                </div>
                {idx % 2 !== 0 && <LineAnimation />}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
