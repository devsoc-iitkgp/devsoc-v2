"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

const missionItems = [
  "Run technical workshops and coding bootcamps",
  "Support members in building real-world projects",
  "Organise hackathons and coding competitions",
  "Mentor students entering the tech industry",
  "Foster collaboration between developers",
];

const tableRows = [
  { left: "Workshops & Bootcamps", right: "Brand Content", span: false },
  { left: "Hackathons", right: "Creative Digital Strategy", span: true },
  { left: "Project Teams", right: null, span: false },
  { left: "Industry Mentorship", right: null, span: false },
];

export default function Section2Services() {
  return (
    <div data-cursor-color="#dc2b46" style={{ minWidth: "1440px", width: "100%", margin: "0 auto" }}>
      <div style={{ margin: "0 40px", padding: "5.56em" }}>
        <div style={{ display: "grid", color: "#dc2b46" }}>
          {/* Section header */}
          <AnimatedSection
            style={{
              marginBottom: "0.53em",
              marginLeft: "1em",
              fontFamily: "var(--font-newforest), serif",
              fontSize: "2em",
              fontStyle: "italic",
              fontWeight: 400,
              lineHeight: 1.2,
              color: "#dc2b46",
            }}
          >
            The DevSoc community
          </AnimatedSection>

          {/* Model 1 — title block */}
          <AnimatedSection style={{ position: "relative" }}>
            <h2
              style={{
                color: "rgba(220, 43, 70, 0.4)",
                fontFamily: "var(--font-byrd), sans-serif",
                fontSize: "3.5em",
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 1.2,
              }}
            >
              DEVELOPER WORKSHOPS
            </h2>
            <section
              style={{
                position: "absolute",
                top: "34px",
                marginLeft: "2em",
              }}
            >
              <h2
                style={{
                  color: "#dc2b46",
                  position: "absolute",
                  backgroundColor: "transparent",
                  fontFamily: "var(--font-byrd), sans-serif",
                  fontSize: "3.5em",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 1.2,
                }}
              >
                PROJECTS
              </h2>
              <button
                style={{
                  position: "absolute",
                  borderRadius: "2px",
                  marginTop: "1em",
                  marginBottom: "1em",
                  padding: "2px 4px 4px",
                  backgroundColor: "#dc2b46",
                  color: "#070707",
                  top: "60px",
                  width: "200px",
                  fontSize: "1.5em",
                  fontWeight: 900,
                  fontFamily: "var(--font-byrd), sans-serif",
                }}
              >
                OUR MISSION
              </button>
            </section>

            {/* Dots */}
            <div
              style={{
                position: "absolute",
                top: "180px",
                left: "30px",
                zIndex: 99,
                background: "#dc2b46",
                height: "10px",
                width: "10px",
                borderRadius: "100vw",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "180px",
                left: "50px",
                zIndex: 99,
                border: "1px solid #dc2b46",
                height: "10px",
                width: "10px",
                borderRadius: "100vw",
              }}
            />
          </AnimatedSection>

          {/* Table + vector area */}
          <div style={{ marginTop: "380px", position: "relative" }}>
            {/* Mission vector */}
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
              <Image
                src="/assets/section2/vector.png"
                alt="Mission background"
                width={800}
                height={600}
                style={{ zIndex: 0, backgroundColor: "transparent" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "28%",
                  left: "15%",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  width: "680px",
                  rowGap: "20px",
                  backgroundColor: "transparent",
                }}
              >
                {missionItems.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "10px",
                      background: "transparent",
                    }}
                  >
                    <Image
                      src="/assets/section2/red_dot.png"
                      alt=""
                      width={10}
                      height={10}
                    />
                    <p
                      style={{
                        fontSize: "1em",
                        color: "#dc2b46",
                        fontFamily: "var(--font-kobeweb), sans-serif",
                        lineHeight: 1.4,
                        backgroundColor: "transparent",
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Expertise table */}
            <div style={{ width: "40%", position: "relative" }}>
              <div>
                <div style={{ border: "1px solid rgba(220, 43, 70, 0.4)", padding: "5px" }} />
                <div style={{ width: "100%" }}>
                  <h3
                    style={{
                      color: "#dc2b46",
                      border: "1px solid rgba(220, 43, 70, 0.4)",
                      padding: "10px",
                      fontFamily: "var(--font-byrd), sans-serif",
                      fontSize: "1.3em",
                      fontWeight: 900,
                    }}
                  >
                    Our Programs
                  </h3>
                </div>
                <div
                  style={{
                    borderCollapse: "collapse",
                    padding: "10px",
                    display: "table",
                    width: "100%",
                  }}
                >
                  <div style={{ display: "table-row" }}>
                    <div
                      style={{
                        display: "table-cell",
                        padding: "20px",
                        border: "1px solid rgba(220, 43, 70, 0.4)",
                      }}
                    >
                      Workshops &amp; Bootcamps
                    </div>
                    <div
                      style={{
                        display: "table-cell",
                        padding: "20px",
                        border: "1px solid rgba(220, 43, 70, 0.4)",
                      }}
                    >
                      Open Source
                    </div>
                  </div>
                  <div style={{ display: "table-row" }}>
                    <div
                      style={{
                        display: "table-cell",
                        padding: "20px",
                        border: "1px solid rgba(220, 43, 70, 0.4)",
                      }}
                    >
                      Hackathons
                    </div>
                    <div
                      style={{
                        display: "table-cell",
                        padding: "10px",
                        verticalAlign: "middle",
                        border: "1px solid rgba(220, 43, 70, 0.4)",
                        borderBottom: "none",
                      }}
                    >
                      Career Events
                    </div>
                  </div>
                  <div style={{ display: "table-row" }}>
                    <div
                      style={{
                        display: "table-cell",
                        padding: "20px",
                        border: "1px solid rgba(220, 43, 70, 0.4)",
                      }}
                    >
                      Project Teams
                    </div>
                    <div
                      style={{
                        display: "table-cell",
                        padding: "10px",
                        verticalAlign: "middle",
                        border: "1px solid rgba(220, 43, 70, 0.4)",
                        borderTop: "none",
                      }}
                    />
                  </div>
                  <div style={{ display: "table-row" }}>
                    <div
                      style={{
                        display: "table-cell",
                        padding: "20px",
                        border: "1px solid rgba(220, 43, 70, 0.4)",
                      }}
                    >
                      Industry Mentorship
                    </div>
                  </div>
                </div>
              </div>
              <button
                style={{
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  color: "#dc2b46",
                  border: "1px solid #dc2b46",
                  backgroundColor: "transparent",
                  fontFamily: "var(--font-byrd), sans-serif",
                }}
              >
                JOIN DEVSOC
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
