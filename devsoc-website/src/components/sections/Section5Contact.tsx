"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Section5Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 5000], [0, 500]);

  return (
    <div data-cursor-color="#edf738" style={{ minWidth: "1440px", width: "100%", margin: "0 auto" }}>
      <div
        ref={containerRef}
        style={{
          margin: "0 40px",
          padding: "5em 12em",
          position: "relative",
        }}
      >
        {/* Rotating vector */}
        <div
          style={{
            position: "absolute",
            background: "transparent",
            bottom: "200px",
            left: "350px",
          }}
        >
          <motion.div style={{ rotate, backgroundColor: "transparent" }}>
            <Image
              src="/assets/section5/vector.png"
              alt="Rotating vector"
              width={300}
              height={600}
              style={{ backgroundColor: "transparent", height: "600px", width: "auto" }}
            />
          </motion.div>
        </div>

        {/* Contact header */}
        <AnimatedSection
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "100px 0",
            background: "transparent",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-byrd), sans-serif",
              fontSize: "3.5em",
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1.2,
            }}
          >
            JOIN US
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "var(--font-byrd), sans-serif",
              fontSize: "1.67em",
              fontWeight: 900,
            }}
          >
            <a href="#" style={{ textDecoration: "none" }}>
              <span>hello@devsoc.university</span>
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              <span>discord.gg/devsoc</span>
            </a>
          </div>
        </AnimatedSection>

        {/* Footer nav */}
        <div>
          <div
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              display: "flex",
            }}
          >
            {["PROJECTS", "EVENTS", "ABOUT", "BLOG"].map((link) => (
              <a
                key={link}
                href="#"
                style={{ textDecoration: "none" }}
              >
                <p
                  style={{
                    fontSize: "10px",
                    fontWeight: 900,
                  }}
                >
                  {link}
                </p>
              </a>
            ))}
            <a href="#">
              <button
                style={{
                  color: "white",
                  border: "1px solid white",
                  backgroundColor: "transparent",
                  fontFamily: "var(--font-byrd), sans-serif",
                }}
              >
                JOIN DEVSOC
              </button>
            </a>
          </div>
        </div>

        {/* Social icons */}
        <div
          style={{
            justifyContent: "space-around",
            marginTop: "5em",
            display: "flex",
            alignItems: "center",
          }}
        >
          <a href="#">
            <InstagramIcon style={{ backgroundColor: "transparent" }} />
          </a>
          <a href="#">
            <FacebookIcon style={{ backgroundColor: "transparent" }} />
          </a>
          <a href="#">
            <LinkedInIcon style={{ backgroundColor: "transparent" }} />
          </a>
          <a href="#">
            <GitHubIcon style={{ backgroundColor: "transparent" }} />
          </a>
        </div>

        {/* Legals */}
        <div
          style={{
            justifyContent: "center",
            marginTop: "7.5em",
            display: "flex",
          }}
        >
          {["Privacy policy", "Cookie policy", "Terms & Conditions", "2024 DevSoc"].map(
            (link) => (
              <a
                key={link}
                href="#"
                style={{
                  color: "#e8e8e8",
                  textTransform: "none",
                  marginLeft: "1.5em",
                  marginRight: "1.5em",
                  fontFamily: "var(--font-kobeweb), sans-serif",
                  fontSize: "0.875em",
                  fontWeight: 400,
                  textDecoration: "none",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-kobeweb), sans-serif",
                    fontSize: "0.875em",
                    fontWeight: 400,
                  }}
                >
                  {link}
                </p>
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
}
