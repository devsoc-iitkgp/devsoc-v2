"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "PROJECTS", href: "/projects" },
  { label: "EVENTS", href: "/events" },
  { label: "ABOUT", href: "/about" },
  { label: "BLOG", href: "/blog" },
];

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > prevScrollY.current;
      setIsHidden(scrollingDown && currentScrollY > 80);
      setScrolled(currentScrollY > 20);
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {!isHidden && (
        <motion.nav
          data-cursor-color="#edf738"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: scrolled ? "18px 88px" : "28px 88px",
            position: "fixed",
            top: 0,
            zIndex: 500,
            transition: "padding 0.4s ease, backdrop-filter 0.4s ease, background 0.4s ease",
            backdropFilter: scrolled ? "blur(20px)" : "none",
            backgroundColor: scrolled ? "rgba(7,7,7,0.75)" : "transparent",
            borderBottom: scrolled ? "1px solid rgba(237,247,56,0.08)" : "1px solid transparent",
          }}
        >
          {/* Logo / Brand */}
          <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Bracket + wordmark */}
            <span
              style={{
                fontFamily: "var(--font-byrd), sans-serif",
                fontSize: "22px",
                letterSpacing: "1px",
                color: "rgba(237,247,56,0.35)",
                lineHeight: 1,
              }}
            >
              {"{"}
            </span>
            <span
              style={{
                fontFamily: "var(--font-byrd), sans-serif",
                fontSize: "22px",
                letterSpacing: "3px",
                color: "#edf738",
                lineHeight: 1,
                textTransform: "uppercase",
              }}
            >
              DevSoc
            </span>
            <span
              style={{
                fontFamily: "var(--font-byrd), sans-serif",
                fontSize: "22px",
                letterSpacing: "1px",
                color: "rgba(237,247,56,0.35)",
                lineHeight: 1,
              }}
            >
              {"}"}
            </span>
          </a>

          {/* Nav links */}
          <div style={{ display: "flex", alignItems: "center", gap: "48px" }}>
            {NAV_LINKS.map((link) => (
              <NavLink key={link.label} label={link.label} href={link.href} />
            ))}
          </div>

          {/* CTA */}
          <JoinButton />
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

function NavLink({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        color: hovered ? "#edf738" : "rgba(255,255,255,0.6)",
        textDecoration: "none",
        textTransform: "uppercase",
        fontFamily: "var(--font-byrd), sans-serif",
        fontSize: "0.7rem",
        fontWeight: 900,
        letterSpacing: "2px",
        transition: "color 0.2s",
      }}
    >
      {label}
      {/* Underline slide */}
      <motion.span
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{
          position: "absolute",
          left: 0,
          bottom: "-4px",
          height: "1px",
          backgroundColor: "#edf738",
          display: "block",
        }}
      />
    </a>
  );
}

function JoinButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a href="/join" style={{ textDecoration: "none" }}>
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        color: hovered ? "#070707" : "#edf738",
        border: "1px solid #edf738",
        backgroundColor: "transparent",
        fontFamily: "var(--font-byrd), sans-serif",
        fontSize: "0.7rem",
        letterSpacing: "2px",
        transition: "color 0.35s",
        padding: "10px 24px",
        borderRadius: "100px",
        height: "auto",
      }}
    >
      {/* Fill sweep */}
      <motion.span
        animate={{ x: hovered ? "0%" : "-101%" }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#edf738",
          display: "block",
        }}
      />
      <span style={{ position: "relative", zIndex: 1, backgroundColor: "transparent", color: "inherit" }}>
        JOIN US
      </span>
    </button>
    </a>
  );
}
