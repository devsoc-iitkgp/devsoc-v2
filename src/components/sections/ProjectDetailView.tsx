"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Section5Contact from "@/components/sections/Section5Contact";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { ProjectDetail } from "@/data/projectDetails";
import { useResponsive } from "@/components/ui/useResponsive";

const YELLOW = "#edf738";
const YELLOW_MUTED = "rgba(237, 247, 56, 0.35)";
const YELLOW_BORDER = "rgba(237, 247, 56, 0.2)";
const WHITE = "rgba(255,255,255,0.9)";
const MUTED = "rgba(255,255,255,0.4)";

function StatusBadge({ status }: { status: string }) {
  const isOSS = status === "OPEN SOURCE";
  return (
    <span style={{
      fontFamily: "var(--font-byrd), sans-serif",
      fontSize: "0.65rem",
      padding: "4px 12px",
      backgroundColor: isOSS ? YELLOW : "transparent",
      color: isOSS ? "#070707" : YELLOW,
      border: `1px solid ${YELLOW}`,
      letterSpacing: "2px",
    }}>
      {status}
    </span>
  );
}

export default function ProjectDetailView({
  project,
  allProjects,
}: {
  project: ProjectDetail;
  allProjects: ProjectDetail[];
}) {
  const [activeId, setActiveId] = useState(project.sections[0]?.id ?? "");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const { isMobile, isTablet, mx, sp } = useResponsive();

  const relatedProjects = allProjects.filter((p) => project.relatedSlugs.includes(p.slug));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    project.sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [project.sections]);

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
          backgroundColor: YELLOW,
          transformOrigin: "0%",
          scaleX,
          zIndex: 999,
        }}
      />

      {/* Navbar */}
      <div data-cursor-color={YELLOW} style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ margin: mx }}>
          <Navbar />
        </div>

        {/* Hero — full-width image with overlay */}
        <div style={{ margin: mx, paddingTop: "7em", position: "relative" }}>
          <div style={{ position: "relative", overflow: "hidden", maxHeight: isMobile ? "320px" : "480px" }}>
            <Image
              src={project.imgSrc}
              alt={project.title}
              width={1360}
              height={480}
              style={{ width: "100%", height: isMobile ? "320px" : "480px", objectFit: "cover" }}
              priority
            />
            {/* Dark gradient overlay */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, rgba(7,7,7,0.92) 40%, rgba(7,7,7,0.3) 100%)",
            }} />
            {/* Title overlay */}
            <div style={{
              position: "absolute",
              inset: 0,
              padding: isMobile ? "1.5em" : "3em 5.56em",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              gap: "12px",
            }}>
              {/* Breadcrumb */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "0.5em" }}>
                <a href="/projects" style={{ textDecoration: "none", fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.7rem", color: MUTED, letterSpacing: "2px" }}>PROJECTS</a>
                <span style={{ color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.7rem" }}>→</span>
                <StatusBadge status={project.status} />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                {!isMobile && <Image src={project.vectorSrc} alt="" width={28} height={28} style={{ backgroundColor: "transparent" }} />}
                <h1 style={{
                  fontFamily: "var(--font-byrd), sans-serif",
                  fontSize: isMobile ? "2.5em" : "5em",
                  textTransform: "uppercase",
                  lineHeight: 1,
                  color: YELLOW,
                }}>
                  {project.title}
                </h1>
              </div>
              <p style={{
                fontFamily: "var(--font-newforest), serif",
                fontStyle: "italic",
                fontSize: "1.2em",
                color: "rgba(255,255,255,0.5)",
                maxWidth: "500px",
              }}>
                {project.subtitle}
              </p>
              <div style={{ display: "flex", gap: "8px", marginTop: "0.3em" }}>
                {project.tags.map((tag, i) => (
                  <span key={i} style={{ backgroundColor: "white", color: "black", borderRadius: "2px", padding: "2px 6px", fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.65rem", textTransform: "lowercase" }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main 2-col content grid */}
        <div style={{
          margin: mx,
          padding: isMobile ? "2em 0 3em" : `4em ${sp} 5em`,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 280px" : "1fr 320px",
          gap: isMobile ? "0" : "80px",
          alignItems: "start",
        }}>

          {/* Left: project content */}
          <article>
            {/* Overview */}
            <AnimatedSection>
              <p style={{
                fontFamily: "var(--font-newforest), serif",
                fontStyle: "italic",
                fontSize: "1.2em",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.75,
                marginBottom: "3em",
                borderLeft: `3px solid ${YELLOW}`,
                paddingLeft: "1.2em",
              }}>
                {project.overview}
              </p>
            </AnimatedSection>

            {project.sections.map((section, idx) => (
              <AnimatedSection key={section.id} delay={idx * 0.05}>
                <section id={section.id} style={{ marginBottom: "3em" }}>
                  <h2 style={{
                    fontFamily: "var(--font-byrd), sans-serif",
                    fontSize: "2em",
                    textTransform: "uppercase",
                    lineHeight: 1.1,
                    marginBottom: "0.8em",
                    color: WHITE,
                    scrollMarginTop: "120px",
                  }}>
                    {section.heading}
                  </h2>
                  <p style={{
                    fontFamily: "var(--font-kobeweb), sans-serif",
                    fontSize: "1em",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.85,
                  }}>
                    {section.body}
                  </p>
                  {idx < project.sections.length - 1 && (
                    <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.06)", marginTop: "3em" }} />
                  )}
                </section>
              </AnimatedSection>
            ))}

            {/* CTA */}
            <AnimatedSection>
              <div style={{ display: "flex", gap: "1em", marginTop: "2em", paddingTop: "2em", borderTop: `1px solid ${YELLOW_BORDER}` }}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <button style={{
                    border: `1px solid ${YELLOW}`,
                    backgroundColor: YELLOW,
                    color: "#070707",
                    fontFamily: "var(--font-byrd), sans-serif",
                    borderRadius: "100px",
                    padding: "12px 32px",
                    fontSize: "0.75rem",
                    letterSpacing: "2px",
                    height: "auto",
                  }}>
                    VIEW ON GITHUB →
                  </button>
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    <button style={{
                      border: `1px solid ${YELLOW}`,
                      backgroundColor: "transparent",
                      color: YELLOW,
                      fontFamily: "var(--font-byrd), sans-serif",
                      borderRadius: "100px",
                      padding: "12px 32px",
                      fontSize: "0.75rem",
                      letterSpacing: "2px",
                      height: "auto",
                    }}>
                      LIVE DEMO ↗
                    </button>
                  </a>
                )}
              </div>
            </AnimatedSection>
          </article>

          {/* Right: sticky sidebar — hidden on mobile */}
          {!isMobile && (
          <aside style={{ position: "sticky", top: "100px", display: "flex", flexDirection: "column", gap: "2px" }}>

            {/* TOC */}
            <div style={{ border: `1px solid ${YELLOW_BORDER}`, padding: "1.5em" }}>
              <p style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.65rem", color: YELLOW, letterSpacing: "3px", marginBottom: "1em" }}>
                SECTIONS
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                {project.sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    style={{
                      display: "block",
                      padding: "6px 10px",
                      fontFamily: "var(--font-kobeweb), sans-serif",
                      fontSize: "0.82em",
                      color: activeId === s.id ? YELLOW : MUTED,
                      textDecoration: "none",
                      lineHeight: 1.4,
                      borderLeft: activeId === s.id ? `2px solid ${YELLOW}` : "2px solid transparent",
                      transition: "color 0.2s, border-color 0.2s",
                    }}
                  >
                    {s.heading}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div style={{ border: `1px solid ${YELLOW_BORDER}`, padding: "1.5em" }}>
              <p style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.65rem", color: YELLOW, letterSpacing: "3px", marginBottom: "1em" }}>
                QUICK STATS
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
                {project.stats.map((s, i) => (
                  <div key={i} style={{ padding: "1em", border: `1px solid rgba(255,255,255,0.06)`, display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: "1.8em", color: YELLOW, lineHeight: 1 }}>{s.value}</span>
                    <span style={{ fontFamily: "var(--font-kobeweb), sans-serif", fontSize: "0.7em", color: MUTED, textTransform: "uppercase", letterSpacing: "0.5px" }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div style={{ border: `1px solid ${YELLOW_BORDER}`, padding: "1.5em" }}>
              <p style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.65rem", color: YELLOW, letterSpacing: "3px", marginBottom: "1em" }}>
                TECH STACK
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {project.stackDetail.map((cat, i) => (
                  <div key={i}>
                    <span style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.65rem", color: MUTED, letterSpacing: "2px", display: "block", marginBottom: "6px" }}>
                      {cat.category.toUpperCase()}
                    </span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                      {cat.items.map((item, j) => (
                        <span key={j} style={{ fontFamily: "var(--font-kobeweb), sans-serif", fontSize: "0.75em", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "2px", padding: "2px 7px" }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            <div style={{ border: `1px solid ${YELLOW_BORDER}`, padding: "1.5em", display: "flex", flexDirection: "column", gap: "8px" }}>
              <p style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.65rem", color: YELLOW, letterSpacing: "3px", marginBottom: "0.4em" }}>
                LINKS
              </p>
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <div style={{ border: `1px solid ${YELLOW_BORDER}`, padding: "0.8em 1em", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.7rem", color: YELLOW, letterSpacing: "2px" }}>GITHUB</span>
                  <span style={{ color: YELLOW, fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.8rem" }}>↗</span>
                </div>
              </a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <div style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "0.8em 1em", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.7rem", color: MUTED, letterSpacing: "2px" }}>LIVE DEMO</span>
                    <span style={{ color: MUTED, fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.8rem" }}>↗</span>
                  </div>
                </a>
              )}
            </div>

            {/* Team */}
            <div style={{ border: `1px solid ${YELLOW_BORDER}`, padding: "1.5em" }}>
              <p style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.65rem", color: YELLOW, letterSpacing: "3px", marginBottom: "1em" }}>
                TEAM
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {project.team.map((member, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.85em", textTransform: "uppercase", letterSpacing: "0.5px", color: WHITE }}>{member.name}</span>
                    <span style={{ fontFamily: "var(--font-kobeweb), sans-serif", fontSize: "0.75em", color: MUTED }}>{member.role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related projects */}
            {relatedProjects.length > 0 && (
              <div style={{ border: "1px solid rgba(255,255,255,0.08)", padding: "1.5em" }}>
                <p style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.65rem", color: MUTED, letterSpacing: "3px", marginBottom: "0.8em" }}>RELATED</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {relatedProjects.map((rp) => (
                    <a key={rp.slug} href={`/projects/${rp.slug}`} style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "3px" }}>
                      <span style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.75rem", color: YELLOW_MUTED, letterSpacing: "1px" }}>{rp.status}</span>
                      <span style={{ fontFamily: "var(--font-kobeweb), sans-serif", fontSize: "0.82em", color: "rgba(255,255,255,0.55)" }}>{rp.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Back */}
            <a href="/projects" style={{ textDecoration: "none" }}>
              <div style={{ border: `1px solid ${YELLOW_BORDER}`, padding: "1em 1.5em", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.7rem", color: YELLOW, letterSpacing: "2px" }}>← ALL PROJECTS</span>
              </div>
            </a>
          </aside>
          )}
        </div>

        {/* Mobile back link */}
        {isMobile && (
          <div style={{ margin: mx, paddingBottom: "2em" }}>
            <a href="/projects" style={{ textDecoration: "none", fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.7rem", color: YELLOW, letterSpacing: "2px" }}>← ALL PROJECTS</a>
          </div>
        )}
      </div>

      <Section5Contact />
    </main>
  );
}
