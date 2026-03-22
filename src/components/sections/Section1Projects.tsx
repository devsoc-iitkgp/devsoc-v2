"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import projectData from "@/data/projects";
import { Project } from "@/data/projects";
import { useResponsive } from "@/components/ui/useResponsive";

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" as const } },
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={cardVariants}
      style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
    >
      <Image
        src={project.imgSrc}
        alt={project.title}
        width={680}
        height={480}
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
      <div style={{ display: "flex", columnGap: "10px", alignItems: "center" }}>
        <Image src={project.vectorSrc} alt="" width={20} height={20} style={{ backgroundColor: "transparent" }} />
        <h3 style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: "1.3em", fontWeight: 900, textTransform: "uppercase" }}>
          {project.title}
        </h3>
      </div>
      <div style={{ display: "flex", alignItems: "center", columnGap: "8px", flexWrap: "wrap", gap: "6px" }}>
        {project.tags.map((tag, idx) => (
          <span key={idx} style={{ backgroundColor: "white", color: "black", textTransform: "lowercase", borderRadius: "2px", padding: "2px 4px", fontFamily: "var(--font-byrd), sans-serif", fontSize: "0.75rem", fontWeight: 800 }}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Section1Projects() {
  const { isMobile, isTablet, mx, sp } = useResponsive();

  return (
    <div data-cursor-color="#edf738" style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}>
      <div style={{ margin: mx, padding: sp }}>
        {/* Header */}
        <AnimatedSection
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 8fr 2fr",
            gap: "12px",
          }}
        >
          {!isMobile && (
            <div style={{ fontFamily: "var(--font-newforest), serif", fontSize: "2em", fontStyle: "italic", fontWeight: 400, lineHeight: 1.2 }}>
              Work
            </div>
          )}
          <div>
            <h2 style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: isMobile ? "2.2em" : "3.5em", fontWeight: 900, textTransform: "uppercase", lineHeight: 1.2 }}>DISCOVER</h2>
            <h2 style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: isMobile ? "2.2em" : "3.5em", fontWeight: 900, textTransform: "uppercase", lineHeight: 1.2 }}>OUR PROJECTS</h2>
          </div>
          {!isMobile && (
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
              <button style={{ border: "1px solid white", backgroundColor: "transparent", fontFamily: "var(--font-byrd), sans-serif" }}>CONTACT US</button>
            </div>
          )}
        </AnimatedSection>

        {/* Projects grid — all 4 in one responsive grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{
            marginTop: "4.65em",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: "15px",
          }}
        >
          {[...projectData.folio1, ...projectData.folio2].map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
