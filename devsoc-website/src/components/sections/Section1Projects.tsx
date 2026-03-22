"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import projectData from "@/data/projects";
import { Project } from "@/data/projects";

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
        <Image
          src={project.vectorSrc}
          alt=""
          width={20}
          height={20}
          style={{ backgroundColor: "transparent" }}
        />
        <h3
          style={{
            fontFamily: "var(--font-byrd), sans-serif",
            fontSize: "1.3em",
            fontWeight: 900,
            textTransform: "uppercase",
          }}
        >
          {project.title}
        </h3>
      </div>
      <div style={{ display: "flex", alignItems: "center", columnGap: "8px" }}>
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
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
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Section1Projects() {
  return (
    <div data-cursor-color="#edf738" style={{ minWidth: "1440px", width: "100%", margin: "0 auto" }}>
      <div style={{ margin: "0 40px", padding: "5.56em" }}>
        {/* Header */}
        <AnimatedSection
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 8fr 2fr",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-newforest), serif",
              fontSize: "2em",
              fontStyle: "italic",
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            Work
          </div>
          <div>
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-byrd), sans-serif",
                  fontSize: "3.5em",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 1.2,
                }}
              >
                DISCOVER
              </h2>
            </div>
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-byrd), sans-serif",
                  fontSize: "3.5em",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 1.2,
                }}
              >
                OUR PROJECTS
              </h2>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
            <button
              style={{
                border: "1px solid white",
                backgroundColor: "transparent",
                fontFamily: "var(--font-byrd), sans-serif",
              }}
            >
              CONTACT US
            </button>
          </div>
        </AnimatedSection>

        {/* Grid row 1 */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{
            marginTop: "4.65em",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "15px",
            rowGap: "15px",
          }}
        >
          {projectData.folio1.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </motion.div>

        {/* Grid row 2 */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{
            marginTop: "15px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "15px",
            rowGap: "15px",
          }}
        >
          {projectData.folio2.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
