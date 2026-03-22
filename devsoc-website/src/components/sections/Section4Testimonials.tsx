"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LineAnimation from "@/components/ui/LineAnimation";
import testimonials from "@/data/testimonials";
import { useResponsive } from "@/components/ui/useResponsive";

export default function Section4Testimonials() {
  const { isMobile, isTablet, mx, sp } = useResponsive();

  return (
    <div data-cursor-color="#3e6dd9" style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}>
      <div style={{ margin: mx, padding: sp }}>
        {/* Section image */}
        <div style={{ overflow: "hidden" }}>
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease: "easeOut" as const }}
          >
            <Image src="/assets/section4/img.png" alt="Community" width={1300} height={600} style={{ width: "100%", height: "auto" }} />
          </motion.div>
        </div>

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
