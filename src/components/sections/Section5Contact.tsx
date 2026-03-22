"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useResponsive } from "@/components/ui/useResponsive";

export default function Section5Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 5000], [0, 500]);
  const { isMobile, isTablet, mx } = useResponsive();

  return (
    <div data-cursor-color="#edf738" style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}>
      <div
        ref={containerRef}
        style={{
          margin: mx,
          padding: isMobile ? "3em 0" : isTablet ? "4em 4em" : "5em 12em",
          position: "relative",
        }}
      >
        {/* Rotating vector — desktop only */}
        {!isMobile && (
          <div style={{ position: "absolute", background: "transparent", bottom: "200px", left: isTablet ? "100px" : "350px" }}>
            <motion.div style={{ rotate, backgroundColor: "transparent" }}>
              <Image src="/assets/section5/vector.png" alt="Rotating vector" width={300} height={600} style={{ backgroundColor: "transparent", height: "600px", width: "auto" }} />
            </motion.div>
          </div>
        )}

        {/* Contact header */}
        <AnimatedSection
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            justifyContent: "space-between",
            padding: isMobile ? "40px 0" : "100px 0",
            background: "transparent",
            gap: isMobile ? "1.5em" : 0,
          }}
        >
          <h2 style={{ fontFamily: "var(--font-byrd), sans-serif", fontSize: isMobile ? "2.5em" : "3.5em", fontWeight: 900, textTransform: "uppercase", lineHeight: 1.2 }}>
            JOIN US
          </h2>
          <div style={{ display: "flex", flexDirection: "column", fontFamily: "var(--font-byrd), sans-serif", fontSize: isMobile ? "1.1em" : "1.67em", fontWeight: 900 }}>
            <a href="#" style={{ textDecoration: "none" }}><span>hello@devsoc.university</span></a>
            <a href="#" style={{ textDecoration: "none" }}><span>discord.gg/devsoc</span></a>
          </div>
        </AnimatedSection>

        {/* Footer nav */}
        <div>
          <div style={{ justifyContent: "space-around", alignItems: "center", display: "flex", flexWrap: "wrap", gap: "16px" }}>
            {["PROJECTS", "EVENTS", "ABOUT", "BLOG"].map((link) => (
              <a key={link} href={`/${link.toLowerCase()}`} style={{ textDecoration: "none" }}>
                <p style={{ fontSize: "10px", fontWeight: 900 }}>{link}</p>
              </a>
            ))}
            <a href="/join">
              <button style={{ color: "white", border: "1px solid white", backgroundColor: "transparent", fontFamily: "var(--font-byrd), sans-serif", padding: "6px 16px" }}>JOIN DEVSOC</button>
            </a>
          </div>
        </div>

        {/* Social icons */}
        <div style={{ justifyContent: "space-around", marginTop: "5em", display: "flex", alignItems: "center" }}>
          <a href="#"><InstagramIcon style={{ backgroundColor: "transparent" }} /></a>
          <a href="#"><FacebookIcon style={{ backgroundColor: "transparent" }} /></a>
          <a href="#"><LinkedInIcon style={{ backgroundColor: "transparent" }} /></a>
          <a href="#"><GitHubIcon style={{ backgroundColor: "transparent" }} /></a>
        </div>

        {/* Legals */}
        <div style={{ justifyContent: "center", marginTop: "7.5em", display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {["Privacy policy", "Cookie policy", "Terms & Conditions", "2024 DevSoc"].map((link) => (
            <a key={link} href="#" style={{ color: "#e8e8e8", marginLeft: "1em", marginRight: "1em", fontFamily: "var(--font-kobeweb), sans-serif", fontSize: "0.875em", fontWeight: 400, textDecoration: "none" }}>
              <p style={{ fontFamily: "var(--font-kobeweb), sans-serif", fontSize: "0.875em", fontWeight: 400 }}>{link}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
