"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Section5Contact from "@/components/sections/Section5Contact";
import AnimatedSection from "@/components/ui/AnimatedSection";
import blogPosts from "@/data/blogPosts";

const posts = blogPosts;

const RED = "#dc2b46";
const RED_MUTED = "rgba(220, 43, 70, 0.35)";
const RED_BORDER = "rgba(220, 43, 70, 0.22)";
const WHITE = "rgba(255,255,255,0.9)";
const MUTED = "rgba(255,255,255,0.4)";

const CATEGORIES = ["ALL", "TUTORIAL", "DEVLOG", "OPINION", "CAREER", "OPEN SOURCE"];

// Inline SVG — document/text themed vector
function DocumentVector() {
  return (
    <svg
      width="460"
      height="380"
      viewBox="0 0 460 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ backgroundColor: "transparent" }}
    >
      {/* Outer page shape */}
      <rect x="60" y="20" width="300" height="340" stroke={RED} strokeOpacity="0.3" rx="2" />

      {/* Folded corner */}
      <path d="M300 20 L360 20 L360 80 L300 80 Z" stroke={RED} strokeOpacity="0.25" fill={RED} fillOpacity="0.05" />
      <path d="M300 20 L360 80" stroke={RED} strokeOpacity="0.35" />

      {/* Text lines */}
      {[80, 110, 130, 150, 170, 190, 220, 240, 260, 280, 300].map((y, i) => (
        <line
          key={y}
          x1="90"
          y1={y}
          x2={i % 4 === 0 ? 240 : i % 3 === 0 ? 280 : 320}
          y2={y}
          stroke={RED}
          strokeOpacity={i === 0 ? 0.5 : 0.15}
          strokeWidth={i === 0 ? 2 : 1}
        />
      ))}

      {/* Highlight block — "featured" */}
      <rect x="90" y="70" width="180" height="28" fill={RED} fillOpacity="0.12" />
      <rect x="90" y="70" width="4" height="28" fill={RED} fillOpacity="0.6" />

      {/* Left margin line */}
      <line x1="80" y1="20" x2="80" y2="360" stroke={RED} strokeOpacity="0.1" />

      {/* Corner brackets */}
      <path d="M0 30 L0 0 L30 0" stroke={RED} strokeOpacity="0.5" strokeWidth="1.5" fill="none" />
      <path d="M430 0 L460 0 L460 30" stroke={RED} strokeOpacity="0.5" strokeWidth="1.5" fill="none" />
      <path d="M0 350 L0 380 L30 380" stroke={RED} strokeOpacity="0.5" strokeWidth="1.5" fill="none" />
      <path d="M430 380 L460 380 L460 350" stroke={RED} strokeOpacity="0.5" strokeWidth="1.5" fill="none" />

      {/* Second doc — shadow/offset */}
      <rect x="80" y="30" width="300" height="340" stroke={RED} strokeOpacity="0.08" rx="2" />

      {/* Small pen/edit icon bottom right */}
      <circle cx="390" cy="310" r="30" stroke={RED} strokeOpacity="0.2" fill={RED} fillOpacity="0.05" />
      <path
        d="M378 322 L385 305 L402 322 Z"
        stroke={RED}
        strokeOpacity="0.4"
        fill="none"
        strokeLinejoin="round"
      />
      <line x1="385" y1="305" x2="395" y2="295" stroke={RED} strokeOpacity="0.4" />
    </svg>
  );
}

// Inline SVG — abstract quotation mark
function QuoteVector() {
  return (
    <svg
      width="120"
      height="90"
      viewBox="0 0 120 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ backgroundColor: "transparent" }}
    >
      <path
        d="M10 50 Q10 15 40 15 Q30 35 30 50 L30 80 L10 80 Z"
        stroke={RED}
        strokeOpacity="0.35"
        fill={RED}
        fillOpacity="0.07"
        strokeLinejoin="round"
      />
      <path
        d="M60 50 Q60 15 90 15 Q80 35 80 50 L80 80 L60 80 Z"
        stroke={RED}
        strokeOpacity="0.35"
        fill={RED}
        fillOpacity="0.07"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const cardVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.75, ease: "easeOut" } },
};

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const featured = posts.find((p) => p.featured)!;
  const filtered =
    activeCategory === "ALL"
      ? posts.filter((p) => !p.featured)
      : posts.filter((p) => p.category === activeCategory && !p.featured);

  return (
    <main style={{ position: "relative", backgroundColor: "#070707", overflowX: "hidden" }}>

      {/* ── HERO ─────────────────────────────────────────── */}
      <div data-cursor-color={RED} style={{ minWidth: "1440px", width: "100%", margin: "0 auto" }}>
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
            {/* Left */}
            <AnimatedSection>
              <p
                style={{
                  fontFamily: "var(--font-newforest), serif",
                  fontSize: "1.8em",
                  fontStyle: "italic",
                  color: RED_MUTED,
                  marginBottom: "0.4em",
                  lineHeight: 1.2,
                }}
              >
                Words from the community
              </p>
              <h1
                style={{
                  fontFamily: "var(--font-byrd), sans-serif",
                  fontSize: "5.5em",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 1.05,
                  color: RED,
                }}
              >
                THE
              </h1>
              <h1
                style={{
                  fontFamily: "var(--font-byrd), sans-serif",
                  fontSize: "5.5em",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 1.05,
                  color: RED_MUTED,
                }}
              >
                DEVSOC BLOG
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
                Tutorials, devlogs, opinions, and career advice — written by DevSoc
                members for developers who want to keep getting better.
              </p>
            </AnimatedSection>

            {/* Right: Document vector */}
            <AnimatedSection direction="right" style={{ display: "flex", justifyContent: "center" }}>
              <DocumentVector />
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* ── FEATURED POST ────────────────────────────────── */}
      <div data-cursor-color={RED} style={{ minWidth: "1440px", width: "100%", margin: "0 auto" }}>
        <div style={{ margin: "0 40px", padding: "0 5.56em 4em" }}>
          <AnimatedSection style={{ marginBottom: "1.5em" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5em" }}>
              <span
                style={{
                  fontFamily: "var(--font-byrd), sans-serif",
                  fontSize: "0.7rem",
                  color: RED,
                  letterSpacing: "3px",
                  border: `1px solid ${RED_BORDER}`,
                  padding: "5px 14px",
                }}
              >
                FEATURED
              </span>
              <div style={{ flex: 1, height: "1px", backgroundColor: RED_BORDER }} />
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <a href={`/blog/${featured.slug}`} style={{ textDecoration: "none", display: "block" }}>
              <div
                style={{
                  border: `1px solid ${RED_BORDER}`,
                  padding: "3em",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "60px",
                  alignItems: "center",
                }}
              >
                {/* Left: quote mark + text */}
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <QuoteVector />
                  <h2
                    style={{
                      fontFamily: "var(--font-byrd), sans-serif",
                      fontSize: "2.8em",
                      textTransform: "uppercase",
                      lineHeight: 1.1,
                      color: WHITE,
                    }}
                  >
                    {featured.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-kobeweb), sans-serif",
                      fontSize: "0.95em",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.7,
                    }}
                  >
                    {featured.excerpt}
                  </p>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {featured.tags.map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          backgroundColor: "white",
                          color: "black",
                          borderRadius: "2px",
                          padding: "2px 6px",
                          fontFamily: "var(--font-byrd), sans-serif",
                          fontSize: "0.65rem",
                          textTransform: "lowercase",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: meta */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    borderLeft: `1px solid ${RED_BORDER}`,
                    paddingLeft: "3em",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-byrd), sans-serif",
                      fontSize: "0.7rem",
                      color: RED,
                      letterSpacing: "2px",
                      border: `1px solid ${RED}`,
                      padding: "3px 10px",
                      alignSelf: "flex-start",
                    }}
                  >
                    {featured.category}
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-kobeweb), sans-serif",
                        fontSize: "0.8em",
                        color: MUTED,
                      }}
                    >
                      By{" "}
                      <span style={{ color: WHITE }}>{featured.author}</span>
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-kobeweb), sans-serif",
                        fontSize: "0.8em",
                        color: MUTED,
                      }}
                    >
                      {featured.date}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-kobeweb), sans-serif",
                        fontSize: "0.8em",
                        color: MUTED,
                      }}
                    >
                      {featured.readTime}
                    </span>
                  </div>
                  <button
                    style={{
                      border: `1px solid ${RED}`,
                      backgroundColor: RED,
                      color: "#070707",
                      fontFamily: "var(--font-byrd), sans-serif",
                      borderRadius: "100px",
                      padding: "10px 28px",
                      fontSize: "0.75rem",
                      letterSpacing: "2px",
                      height: "auto",
                      alignSelf: "flex-start",
                      marginTop: "1em",
                    }}
                  >
                    READ ARTICLE →
                  </button>
                </div>
              </div>
            </a>
          </AnimatedSection>
        </div>
      </div>

      {/* ── CATEGORY FILTER ──────────────────────────────── */}
      <div data-cursor-color={RED} style={{ minWidth: "1440px", width: "100%", margin: "0 auto" }}>
        <div
          style={{
            margin: "0 40px",
            padding: "1em 5.56em",
            borderTop: `1px solid ${RED_BORDER}`,
            borderBottom: `1px solid ${RED_BORDER}`,
            display: "flex",
            alignItems: "center",
            gap: "0",
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                border: "none",
                backgroundColor: "transparent",
                color:
                  activeCategory === cat
                    ? RED
                    : "rgba(255,255,255,0.35)",
                fontFamily: "var(--font-byrd), sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "2px",
                padding: "12px 24px",
                borderRadius: 0,
                height: "auto",
                borderBottom: activeCategory === cat ? `2px solid ${RED}` : "2px solid transparent",
                transition: "color 0.2s, border-bottom 0.2s",
                cursor: "pointer",
              }}
            >
              {cat}
            </button>
          ))}
          <div style={{ marginLeft: "auto" }}>
            <span
              style={{
                fontFamily: "var(--font-newforest), serif",
                fontStyle: "italic",
                fontSize: "0.9em",
                color: MUTED,
              }}
            >
              {filtered.length} article{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </div>

      {/* ── POSTS GRID ───────────────────────────────────── */}
      <div data-cursor-color={RED} style={{ minWidth: "1440px", width: "100%", margin: "0 auto" }}>
        <div style={{ margin: "0 40px", padding: "3em 5.56em 4em" }}>
          <motion.div
            key={activeCategory}
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2px",
            }}
          >
            {filtered.length > 0 ? (
              filtered.map((post, idx) => (
                <motion.a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  variants={cardVariants}
                  style={{
                    border: `1px solid rgba(255,255,255,0.08)`,
                    padding: "2em",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    textDecoration: "none",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Category + date */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-byrd), sans-serif",
                        fontSize: "0.65rem",
                        color: RED,
                        letterSpacing: "2px",
                        border: `1px solid ${RED_BORDER}`,
                        padding: "2px 8px",
                      }}
                    >
                      {post.category}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-kobeweb), sans-serif",
                        fontSize: "0.75em",
                        color: MUTED,
                      }}
                    >
                      {post.readTime}
                    </span>
                  </div>

                  {/* Issue number */}
                  <span
                    style={{
                      position: "absolute",
                      top: "-0.05em",
                      right: "0.2em",
                      fontFamily: "var(--font-byrd), sans-serif",
                      fontSize: "7em",
                      color: "white",
                      opacity: 0.03,
                      lineHeight: 1,
                      backgroundColor: "transparent",
                      userSelect: "none",
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <h3
                    style={{
                      fontFamily: "var(--font-byrd), sans-serif",
                      fontSize: "1.5em",
                      textTransform: "uppercase",
                      lineHeight: 1.15,
                      color: WHITE,
                    }}
                  >
                    {post.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-kobeweb), sans-serif",
                      fontSize: "0.88em",
                      color: "rgba(255,255,255,0.4)",
                      lineHeight: 1.65,
                      flex: 1,
                    }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {post.tags.map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          backgroundColor: "white",
                          color: "black",
                          borderRadius: "2px",
                          padding: "2px 6px",
                          fontFamily: "var(--font-byrd), sans-serif",
                          fontSize: "0.6rem",
                          textTransform: "lowercase",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Author + date footer */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "0.5em",
                      paddingTop: "1em",
                      borderTop: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-kobeweb), sans-serif",
                        fontSize: "0.8em",
                        color: MUTED,
                      }}
                    >
                      {post.author}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-kobeweb), sans-serif",
                        fontSize: "0.75em",
                        color: "rgba(255,255,255,0.25)",
                      }}
                    >
                      {post.date}
                    </span>
                  </div>
                </motion.a>
              ))
            ) : (
              <motion.div
                variants={cardVariants}
                style={{
                  gridColumn: "1 / -1",
                  padding: "4em",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                  border: `1px solid rgba(255,255,255,0.06)`,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-byrd), sans-serif",
                    fontSize: "2em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.2)",
                  }}
                >
                  MORE COMING SOON
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-kobeweb), sans-serif",
                    fontSize: "0.9em",
                    color: MUTED,
                  }}
                >
                  No posts in this category yet — check back soon.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* ── NEWSLETTER CTA ───────────────────────────────── */}
      <div data-cursor-color={RED} style={{ minWidth: "1440px", width: "100%", margin: "0 auto" }}>
        <div
          style={{
            margin: "0 40px",
            padding: "4em 5.56em",
            borderTop: `1px solid ${RED_BORDER}`,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          <AnimatedSection>
            <span
              style={{
                fontFamily: "var(--font-newforest), serif",
                fontStyle: "italic",
                fontSize: "1.2em",
                color: MUTED,
                display: "block",
                marginBottom: "0.5em",
              }}
            >
              Don&apos;t miss a post
            </span>
            <h2
              style={{
                fontFamily: "var(--font-byrd), sans-serif",
                fontSize: "3.5em",
                textTransform: "uppercase",
                lineHeight: 1,
                marginBottom: "0.4em",
              }}
            >
              THE DEVLOG
              <br />
              <span style={{ color: RED_MUTED }}>NEWSLETTER</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-kobeweb), sans-serif",
                fontSize: "0.95em",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.7,
                maxWidth: "380px",
              }}
            >
              New tutorials, devlogs, and career pieces — delivered to your inbox
              every two weeks. No spam, unsubscribe any time.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {/* Email input row */}
              <div
                style={{
                  display: "flex",
                  border: `1px solid ${RED_BORDER}`,
                  overflow: "hidden",
                }}
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  style={{
                    flex: 1,
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    color: "white",
                    fontFamily: "var(--font-kobeweb), sans-serif",
                    fontSize: "0.9em",
                    padding: "1em 1.4em",
                  }}
                />
                <button
                  style={{
                    border: "none",
                    borderLeft: `1px solid ${RED_BORDER}`,
                    backgroundColor: RED,
                    color: "#070707",
                    fontFamily: "var(--font-byrd), sans-serif",
                    fontSize: "0.7rem",
                    letterSpacing: "2px",
                    padding: "0 1.8em",
                    borderRadius: 0,
                    height: "auto",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  SUBSCRIBE
                </button>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-kobeweb), sans-serif",
                  fontSize: "0.75em",
                  color: "rgba(255,255,255,0.2)",
                }}
              >
                Sent fortnightly. No fluff. Unsubscribe whenever.
              </span>

              {/* Recent issues preview */}
              <div
                style={{
                  marginTop: "1.5em",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                }}
              >
                {posts.slice(0, 3).map((p, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0.8em 0",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-byrd), sans-serif",
                        fontSize: "0.85em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.5)",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {p.title}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-kobeweb), sans-serif",
                        fontSize: "0.7em",
                        color: "rgba(255,255,255,0.2)",
                        whiteSpace: "nowrap",
                        marginLeft: "1em",
                      }}
                    >
                      {p.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* ── WRITE FOR US ─────────────────────────────────── */}
      <div data-cursor-color={RED} style={{ minWidth: "1440px", width: "100%", margin: "0 auto" }}>
        <AnimatedSection>
          <div
            style={{
              margin: "0 40px",
              padding: "3em 5.56em",
              borderTop: `1px solid rgba(255,255,255,0.07)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "2em",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-newforest), serif",
                  fontStyle: "italic",
                  fontSize: "1.1em",
                  color: MUTED,
                  marginBottom: "0.3em",
                }}
              >
                Got something to say?
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-byrd), sans-serif",
                  fontSize: "2.5em",
                  textTransform: "uppercase",
                  lineHeight: 1,
                }}
              >
                WRITE FOR THE BLOG
              </h2>
            </div>
            <div style={{ display: "flex", gap: "1em", flexShrink: 0 }}>
              <button
                style={{
                  border: `1px solid ${RED}`,
                  backgroundColor: RED,
                  color: "#070707",
                  fontFamily: "var(--font-byrd), sans-serif",
                  borderRadius: "100px",
                  padding: "10px 28px",
                  fontSize: "0.75rem",
                  letterSpacing: "2px",
                  height: "auto",
                }}
              >
                SUBMIT A DRAFT
              </button>
              <button
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  backgroundColor: "transparent",
                  color: WHITE,
                  fontFamily: "var(--font-byrd), sans-serif",
                  borderRadius: "100px",
                  padding: "10px 28px",
                  fontSize: "0.75rem",
                  letterSpacing: "2px",
                  height: "auto",
                }}
              >
                GUIDELINES
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <Section5Contact />
    </main>
  );
}
