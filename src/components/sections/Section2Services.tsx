"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useResponsive } from "@/components/ui/useResponsive";

const missionItems = [
  "Run technical workshops and coding bootcamps",
  "Support members in building real-world projects",
  "Organise hackathons and coding competitions",
  "Mentor students entering the tech industry",
  "Foster collaboration between developers",
];

export default function Section2Services() {
  const { isMobile, isTablet, mx, sp } = useResponsive();

  return (
    <div data-cursor-color="#dc2b46" style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}>
      <div style={{ margin: mx, padding: sp }}>
        <div style={{ display: "grid", color: "#dc2b46" }}>
          {/* Section header */}
          <AnimatedSection
            style={{
              marginBottom: "0.53em",
              marginLeft: isMobile ? 0 : "1em",
              fontFamily: "var(--font-newforest), serif",
              fontSize: isMobile ? "1.5em" : "2em",
              fontStyle: "italic",
              fontWeight: 400,
              lineHeight: 1.2,
              color: "#dc2b46",
            }}
          >
            The DevSoc community
          </AnimatedSection>

          {/* Title block */}
          <AnimatedSection style={{ position: "relative" }}>
            <h2 style={{ color: "rgba(220, 43, 70, 0.4)", fontFamily: "var(--font-byrd), sans-serif", fontSize: isMobile ? "2.2em" : "3.5em", fontWeight: 900, textTransform: "uppercase", lineHeight: 1.2 }}>
              DEVELOPER WORKSHOPS
            </h2>
            <section style={{ position: isMobile || isTablet ? "relative" : "absolute", top: isMobile || isTablet ? undefined : "34px", marginLeft: isMobile || isTablet ? 0 : "2em", marginTop: isMobile || isTablet ? "-0.3em" : undefined }}>
              <h2 style={{ color: "#dc2b46", fontFamily: "var(--font-byrd), sans-serif", fontSize: isMobile ? "2.2em" : isTablet ? "3em" : "3.5em", fontWeight: 900, textTransform: "uppercase", lineHeight: 1.2, position: isMobile || isTablet ? "relative" : "absolute" }}>
                PROJECTS
              </h2>
              {!isMobile && !isTablet && (
                <button style={{ position: "absolute", borderRadius: "2px", padding: "2px 4px 4px", backgroundColor: "#dc2b46", color: "#070707", top: "60px", width: "200px", fontSize: "1.5em", fontWeight: 900, fontFamily: "var(--font-byrd), sans-serif" }}>
                  OUR MISSION
                </button>
              )}
            </section>
            {(isMobile || isTablet) && (
              <button style={{ marginTop: "0.5em", borderRadius: "2px", padding: "4px 12px", backgroundColor: "#dc2b46", color: "#070707", fontSize: "1em", fontWeight: 900, fontFamily: "var(--font-byrd), sans-serif" }}>
                OUR MISSION
              </button>
            )}
          </AnimatedSection>

          {/* Programs + mission items */}
          <div style={{ marginTop: isMobile || isTablet ? "2em" : "380px", position: "relative" }}>
            {/* Mission vector — large desktop only */}
            {!isMobile && !isTablet && (
              <AnimatedSection
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  position: "absolute",
                  left: "310px",
                  bottom: "240px",
                  backgroundColor: "transparent",
                  zIndex: 3,
                }}
              >
                <Image src="/assets/section2/vector.png" alt="Mission background" width={800} height={600} style={{ zIndex: 0, backgroundColor: "transparent" }} />
                <div style={{ position: "absolute", top: "28%", left: "15%", display: "grid", gridTemplateColumns: "1fr 1fr", width: "680px", rowGap: "20px", backgroundColor: "transparent" }}>
                  {missionItems.map((item, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", columnGap: "10px", background: "transparent" }}>
                      <Image src="/assets/section2/red_dot.png" alt="" width={10} height={10} />
                      <p style={{ fontSize: "1em", color: "#dc2b46", fontFamily: "var(--font-kobeweb), sans-serif", lineHeight: 1.4, backgroundColor: "transparent" }}>{item}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            )}

            {/* Mobile + tablet mission items */}
            {(isMobile || isTablet) && (
              <AnimatedSection style={{ marginBottom: "2em" }}>
                <div style={{ display: isTablet ? "grid" : "flex", gridTemplateColumns: isTablet ? "1fr 1fr" : undefined, flexDirection: isMobile ? "column" : undefined, gap: "10px" }}>
                  {missionItems.map((item, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#dc2b46", flexShrink: 0, marginTop: "6px" }} />
                      <p style={{ fontSize: "0.95em", color: "#dc2b46", fontFamily: "var(--font-kobeweb), sans-serif", lineHeight: 1.5 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            )}

            {/* Programs table */}
            <div style={{ width: isMobile || isTablet ? "100%" : "40%", position: "relative" }}>
              <div>
                <div style={{ border: "1px solid rgba(220, 43, 70, 0.4)", padding: "5px" }} />
                <div style={{ width: "100%" }}>
                  <h3 style={{ color: "#dc2b46", border: "1px solid rgba(220, 43, 70, 0.4)", padding: "10px", fontFamily: "var(--font-byrd), sans-serif", fontSize: "1.3em", fontWeight: 900 }}>Our Programs</h3>
                </div>
                <div style={{ borderCollapse: "collapse", padding: "10px", display: "table", width: "100%" }}>
                  {[["Workshops & Bootcamps", "Open Source"], ["Hackathons", "Career Events"], ["Project Teams", ""], ["Industry Mentorship", ""]].map(([left, right], i) => (
                    <div key={i} style={{ display: "table-row" }}>
                      <div style={{ display: "table-cell", padding: "16px 20px", border: "1px solid rgba(220, 43, 70, 0.4)", fontFamily: "var(--font-kobeweb), sans-serif", fontSize: "0.95em" }}>{left}</div>
                      <div style={{ display: "table-cell", padding: "16px 20px", border: "1px solid rgba(220, 43, 70, 0.4)", fontFamily: "var(--font-kobeweb), sans-serif", fontSize: "0.95em" }}>{right}</div>
                    </div>
                  ))}
                </div>
              </div>
              <button style={{ position: isMobile || isTablet ? "relative" : "absolute", right: 0, bottom: 0, color: "#dc2b46", border: "1px solid #dc2b46", backgroundColor: "transparent", fontFamily: "var(--font-byrd), sans-serif", marginTop: isMobile || isTablet ? "1em" : undefined }}>
                JOIN DEVSOC
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
