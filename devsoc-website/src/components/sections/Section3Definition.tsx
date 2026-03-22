"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

const hrLine = {
  backgroundColor: "rgba(232, 232, 232, 0.4)",
  width: "100%",
  height: "1px",
  marginBottom: "6.25em",
};

export default function Section3Definition() {
  return (
    <div data-cursor-color="#ffffff" style={{ minWidth: "1440px", width: "100%", margin: "0 auto" }}>
      <div style={{ margin: "0 40px", padding: "5.56em" }}>
        <div style={hrLine} />

        {/* Header */}
        <AnimatedSection
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            position: "relative",
          }}
        >
          {["It's written", "DevSoc", "we say", "Developer Society"].map(
            (line, idx) => (
              <h2
                key={idx}
                style={{
                  fontFamily: "var(--font-byrd), sans-serif",
                  fontSize: "3.5em",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 1.2,
                }}
              >
                {line}
              </h2>
            )
          )}
          <div
            style={{
              position: "absolute",
              background: "transparent",
              top: "38%",
              right: "30%",
            }}
          >
            <Image
              src="/assets/section3/star.png"
              alt="star"
              width={60}
              height={60}
              style={{ background: "transparent" }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              background: "transparent",
              bottom: "150px",
              right: "8%",
            }}
          >
            <Image
              src="/assets/section3/cube.png"
              alt="cube"
              width={60}
              height={60}
              style={{ background: "transparent" }}
            />
          </div>
        </AnimatedSection>

        {/* Content columns */}
        <div
          style={{
            marginTop: "5em",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "20px",
          }}
        >
          {/* Left — dev- */}
          <AnimatedSection
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 6fr",
              columnGap: "20px",
            }}
          >
            <div style={hrLine} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "100px",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-byrd), sans-serif",
                    fontSize: "1.3em",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    lineHeight: 1.4,
                  }}
                >
                  dev-
                </h3>
                <p style={{ margin: "10px 0" }}>
                  Prefix, from Old English &quot;develop&quot;: to grow, expand.
                </p>
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-byrd), sans-serif",
                    fontSize: "1.3em",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    lineHeight: 1.4,
                  }}
                >
                  INDICATES A CULTURE OF BUILDING AND CREATING
                </h3>
                <button
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    textTransform: "lowercase",
                    borderRadius: "2px",
                    padding: "2px 4px",
                    fontFamily: "var(--font-byrd), sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                  }}
                >
                  SYNONYM: ENGINEER-
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — society */}
          <AnimatedSection
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 6fr",
              columnGap: "20px",
            }}
          >
            <div style={hrLine} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "100px",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-byrd), sans-serif",
                    fontSize: "1.3em",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    lineHeight: 1.4,
                  }}
                >
                  society
                </h3>
                <p style={{ margin: "10px 0" }}>
                  Noun, from Latin &quot;societas&quot;: fellowship, community.
                </p>
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-byrd), sans-serif",
                    fontSize: "1.3em",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    lineHeight: 1.4,
                  }}
                >
                  A COMMUNITY UNITED BY THE LOVE OF CODE
                </h3>
                <button
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    textTransform: "lowercase",
                    borderRadius: "2px",
                    padding: "2px 4px",
                    fontFamily: "var(--font-byrd), sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                  }}
                >
                  SYNONYM: COMMUNITY-
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
