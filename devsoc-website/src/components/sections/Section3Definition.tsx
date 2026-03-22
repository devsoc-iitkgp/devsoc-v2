"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useResponsive } from "@/components/ui/useResponsive";

export default function Section3Definition() {
  const { isMobile, isTablet, mx, sp } = useResponsive();

  const hrLine = {
    backgroundColor: "rgba(232, 232, 232, 0.4)",
    width: "100%",
    height: "1px",
    marginBottom: isMobile ? "2em" : "6.25em",
  };

  return (
    <div data-cursor-color="#ffffff" style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}>
      <div style={{ margin: mx, padding: sp }}>
        <div style={hrLine} />

        {/* Header */}
        <AnimatedSection style={{ display: "flex", flexDirection: "column", alignItems: isMobile ? "flex-start" : "flex-end", position: "relative" }}>
          {["It's written", "DevSoc", "we say", "Developer Society"].map((line, idx) => (
            <h2
              key={idx}
              style={{
                fontFamily: "var(--font-byrd), sans-serif",
                fontSize: isMobile ? "2em" : isTablet ? "2.8em" : "3.5em",
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 1.2,
              }}
            >
              {line}
            </h2>
          ))}
          {!isMobile && (
            <>
              <div style={{ position: "absolute", background: "transparent", top: "38%", right: "30%" }}>
                <Image src="/assets/section3/star.png" alt="star" width={160} height={160} style={{ background: "transparent" }} />
              </div>
              <div style={{ position: "absolute", background: "transparent", bottom: "150px", right: "8%" }}>
                <Image src="/assets/section3/cube.png" alt="cube" width={160} height={160} style={{ background: "transparent" }} />
              </div>
            </>
          )}
        </AnimatedSection>

        {/* Content columns */}
        <div
          style={{
            marginTop: "5em",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            columnGap: "20px",
            rowGap: isMobile ? "3em" : 0,
          }}
        >
          {[
            { term: "dev-", desc: "Prefix, from Old English \"develop\": to grow, expand.", body: "INDICATES A CULTURE OF BUILDING AND CREATING", syn: "SYNONYM: ENGINEER-" },
            { term: "society", desc: 'Noun, from Latin "societas": fellowship, community.', body: "A COMMUNITY UNITED BY THE LOVE OF CODE", syn: "SYNONYM: COMMUNITY-" },
          ].map(({ term, desc, body, syn }, i) => (
            <AnimatedSection
              key={i}
              style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 6fr", columnGap: "20px" }}
            >
              {!isMobile && <div style={hrLine} />}
              <div style={{ display: "flex", flexDirection: "column", rowGap: isMobile ? "2em" : "100px", justifyContent: "space-between" }}>
                <div>
                  <h3 style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: "1.3em", fontWeight: 900, textTransform: "uppercase", lineHeight: 1.4 }}>{term}</h3>
                  <p style={{ margin: "10px 0", fontFamily: "var(--font-kobeweb), sans-serif", fontSize: "0.95em", lineHeight: 1.5 }}>{desc}</p>
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: "1.3em", fontWeight: 900, textTransform: "uppercase", lineHeight: 1.4 }}>{body}</h3>
                  <button style={{ backgroundColor: "white", color: "black", textTransform: "lowercase", borderRadius: "2px", padding: "2px 4px", fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.75rem", fontWeight: 800, marginTop: "8px" }}>{syn}</button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
