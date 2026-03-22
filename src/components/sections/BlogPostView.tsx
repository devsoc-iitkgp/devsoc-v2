"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Section5Contact from "@/components/sections/Section5Contact";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { BlogPost } from "@/data/blogPosts";
import { useResponsive } from "@/components/ui/useResponsive";

const RED = "#dc2b46";
const RED_BORDER = "rgba(220, 43, 70, 0.22)";
const WHITE = "rgba(255,255,255,0.9)";
const MUTED = "rgba(255,255,255,0.4)";

// SVG avatar placeholder
function AuthorAvatar({ initials }: { initials: string }) {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" style={{ backgroundColor: "transparent", flexShrink: 0 }}>
      <rect x="1" y="1" width="50" height="50" stroke={RED} strokeOpacity="0.4" />
      <circle cx="26" cy="22" r="10" stroke={RED} strokeOpacity="0.35" fill="none" />
      <ellipse cx="26" cy="44" rx="16" ry="10" stroke={RED} strokeOpacity="0.25" fill="none" />
      <text x="26" y="27" textAnchor="middle" fill={RED} fillOpacity="0.7"
        fontFamily="var(--font-byrd), sans-serif" fontSize="14">{initials}</text>
    </svg>
  );
}

export default function BlogPostView({ post, allPosts }: { post: BlogPost; allPosts: BlogPost[] }) {
  const [activeId, setActiveId] = useState(post.sections[0]?.id ?? "");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const { isMobile, isTablet, mx, sp } = useResponsive();

  const relatedPosts = allPosts.filter((p) => post.relatedSlugs.includes(p.slug));
  const authorInitials = post.author.split(" ").map((n) => n[0]).join("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    post.sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [post.sections]);

  return (
    <main style={{ position: "relative", backgroundColor: "#070707", overflowX: "hidden" }}>
      {/* Reading progress bar */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          backgroundColor: RED,
          transformOrigin: "0%",
          scaleX,
          zIndex: 999,
        }}
      />

      {/* Navbar */}
      <div data-cursor-color={RED} style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ margin: mx }}>
          <Navbar />
        </div>

        {/* Hero */}
        <div style={{ margin: mx, padding: isMobile ? "6em 0 2em" : `8em ${sp} 3em` }}>
          {/* Breadcrumb */}
          <AnimatedSection>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "2em" }}>
              <a href="/blog" style={{ textDecoration: "none", fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.7rem", color: MUTED, letterSpacing: "2px" }}>
                BLOG
              </a>
              <span style={{ color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.7rem" }}>→</span>
              <span style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.7rem", color: RED, letterSpacing: "2px" }}>
                {post.category}
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h1 style={{
              fontFamily: "var(--font-byrd), sans-serif",
              fontSize: "4.5em",
              textTransform: "uppercase",
              lineHeight: 1.05,
              maxWidth: "900px",
              marginBottom: "1em",
            }}>
              {post.title}
            </h1>
          </AnimatedSection>

          {/* Meta row */}
          <AnimatedSection>
            <div style={{ display: "flex", alignItems: "center", gap: "32px", paddingBottom: "2em", borderBottom: `1px solid ${RED_BORDER}` }}>
              <AuthorAvatar initials={authorInitials} />
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.9em", textTransform: "uppercase", letterSpacing: "1px", color: WHITE }}>
                  {post.author}
                </span>
                <span style={{ fontFamily: "var(--font-kobeweb), sans-serif", fontSize: "0.8em", color: MUTED }}>
                  {post.authorRole}
                </span>
              </div>
              <div style={{ width: "1px", height: "32px", backgroundColor: "rgba(255,255,255,0.1)" }} />
              <span style={{ fontFamily: "var(--font-kobeweb), sans-serif", fontSize: "0.85em", color: MUTED }}>{post.date}</span>
              <span style={{ fontFamily: "var(--font-kobeweb), sans-serif", fontSize: "0.85em", color: MUTED }}>{post.readTime}</span>
              <div style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
                {post.tags.map((tag, i) => (
                  <span key={i} style={{ backgroundColor: "white", color: "black", borderRadius: "2px", padding: "2px 6px", fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.65rem", textTransform: "lowercase" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Main 2-col grid */}
        <div style={{
          margin: "0 40px",
          padding: isMobile ? "0 0 3em" : `0 ${sp} 5em`,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 260px" : "1fr 300px",
          gap: isMobile ? "0" : "80px",
          alignItems: "start",
        }}>

          {/* Article content */}
          <article>
            {/* Excerpt */}
            <p style={{
              fontFamily: "var(--font-newforest), serif",
              fontStyle: "italic",
              fontSize: "1.25em",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
              marginBottom: "3em",
              borderLeft: `3px solid ${RED}`,
              paddingLeft: "1.2em",
            }}>
              {post.excerpt}
            </p>

            {post.sections.map((section) => (
              <section key={section.id} id={section.id} style={{ marginBottom: "3.5em" }}>
                <h2 style={{
                  fontFamily: "var(--font-byrd), sans-serif",
                  fontSize: "2em",
                  textTransform: "uppercase",
                  lineHeight: 1.1,
                  marginBottom: "1em",
                  color: WHITE,
                  scrollMarginTop: "120px",
                }}>
                  {section.heading}
                </h2>
                {section.body.map((para, i) => (
                  <p key={i} style={{
                    fontFamily: "var(--font-kobeweb), sans-serif",
                    fontSize: "1em",
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.85,
                    marginBottom: "1.2em",
                  }}>
                    {para}
                  </p>
                ))}
                {section.code && (
                  <div style={{
                    margin: "1.5em 0",
                    border: "1px solid rgba(255,255,255,0.1)",
                    overflow: "hidden",
                  }}>
                    <div style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      padding: "8px 16px",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}>
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: RED, opacity: 0.5, display: "inline-block" }} />
                      <span style={{ fontFamily: "var(--font-kobeweb), sans-serif", fontSize: "0.75em", color: "rgba(255,255,255,0.3)", letterSpacing: "1px" }}>
                        {section.code.lang}
                      </span>
                    </div>
                    <pre style={{
                      margin: 0,
                      padding: "1.5em",
                      fontFamily: "'Courier New', Courier, monospace",
                      fontSize: "0.85em",
                      lineHeight: 1.65,
                      color: "#edf738",
                      backgroundColor: "rgba(237,247,56,0.03)",
                      overflowX: "auto",
                      whiteSpace: "pre",
                    }}>
                      {section.code.snippet}
                    </pre>
                  </div>
                )}
              </section>
            ))}

            {/* Author bio footer */}
            <div style={{
              marginTop: "4em",
              padding: "2em",
              border: `1px solid ${RED_BORDER}`,
              display: "flex",
              gap: "20px",
              alignItems: "flex-start",
            }}>
              <AuthorAvatar initials={authorInitials} />
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: "1em", textTransform: "uppercase", letterSpacing: "1px", color: WHITE }}>{post.author}</span>
                <span style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.65rem", color: RED, letterSpacing: "2px" }}>{post.authorRole}</span>
                <p style={{ fontFamily: "var(--font-kobeweb), sans-serif", fontSize: "0.85em", color: MUTED, lineHeight: 1.6, marginTop: "4px" }}>{post.authorBio}</p>
              </div>
            </div>
          </article>

          {/* Sticky sidebar — hidden on mobile */}
          {!isMobile && (
          <aside style={{ position: "sticky", top: "100px", display: "flex", flexDirection: "column", gap: "2px" }}>

            {/* TOC */}
            <div style={{ border: `1px solid rgba(255,255,255,0.08)`, padding: "1.5em" }}>
              <p style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.65rem", color: RED, letterSpacing: "3px", marginBottom: "1em" }}>
                IN THIS ARTICLE
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                {post.sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    style={{
                      display: "block",
                      padding: "6px 10px",
                      fontFamily: "var(--font-kobeweb), sans-serif",
                      fontSize: "0.82em",
                      color: activeId === s.id ? RED : MUTED,
                      textDecoration: "none",
                      lineHeight: 1.4,
                      borderLeft: activeId === s.id ? `2px solid ${RED}` : "2px solid transparent",
                      transition: "color 0.2s, border-color 0.2s",
                    }}
                  >
                    {s.heading}
                  </a>
                ))}
              </div>
            </div>

            {/* Author */}
            <div style={{ border: "1px solid rgba(255,255,255,0.08)", padding: "1.5em", display: "flex", flexDirection: "column", gap: "10px" }}>
              <p style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.65rem", color: MUTED, letterSpacing: "3px" }}>AUTHOR</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <AuthorAvatar initials={authorInitials} />
                <div>
                  <span style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.85em", textTransform: "uppercase", letterSpacing: "1px", display: "block", color: WHITE }}>{post.author}</span>
                  <span style={{ fontFamily: "var(--font-kobeweb), sans-serif", fontSize: "0.75em", color: MUTED }}>{post.authorRole}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div style={{ border: "1px solid rgba(255,255,255,0.08)", padding: "1.5em" }}>
              <p style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.65rem", color: MUTED, letterSpacing: "3px", marginBottom: "0.8em" }}>TAGS</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {post.tags.map((tag, i) => (
                  <span key={i} style={{ backgroundColor: "white", color: "black", borderRadius: "2px", padding: "2px 8px", fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.65rem", textTransform: "lowercase" }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Related posts */}
            {relatedPosts.length > 0 && (
              <div style={{ border: "1px solid rgba(255,255,255,0.08)", padding: "1.5em" }}>
                <p style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.65rem", color: MUTED, letterSpacing: "3px", marginBottom: "0.8em" }}>RELATED</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {relatedPosts.map((rp) => (
                    <a key={rp.slug} href={`/blog/${rp.slug}`} style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.75rem", color: RED, letterSpacing: "1px" }}>{rp.category}</span>
                      <span style={{ fontFamily: "var(--font-kobeweb), sans-serif", fontSize: "0.82em", color: "rgba(255,255,255,0.55)", lineHeight: 1.4 }}>{rp.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Back to blog */}
            <a href="/blog" style={{ textDecoration: "none" }}>
              <div style={{
                border: `1px solid ${RED_BORDER}`,
                padding: "1em 1.5em",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
                <span style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.7rem", color: RED, letterSpacing: "2px" }}>← ALL POSTS</span>
              </div>
            </a>
          </aside>
          )}
        </div>

        {/* Mobile back link */}
        {isMobile && (
          <div style={{ margin: mx, paddingBottom: "2em" }}>
            <a href="/blog" style={{ textDecoration: "none", fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.7rem", color: RED, letterSpacing: "2px" }}>← ALL POSTS</a>
          </div>
        )}
      </div>

      <Section5Contact />
    </main>
  );
}
