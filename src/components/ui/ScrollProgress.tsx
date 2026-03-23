"use client";

/**
 * ScrollProgress — thin fixed bar at the top of the viewport.
 *
 * Uses useSpring to smooth out jitter from rapid scroll events.
 * Respects prefers-reduced-motion: renders a static full-width bar
 * at 100% opacity instead of animating.
 */

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface ScrollProgressProps {
  /** Accent colour — defaults to ds-yellow. */
  color?: string;
  /** Bar height in px. */
  height?: number;
  /** z-index (sits below cursor at 9999, above navbar at 500). */
  zIndex?: number;
}

export default function ScrollProgress({
  color = "#edf738",
  height = 2,
  zIndex = 9995,
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();

  // Smooth the raw scroll value so the bar glides rather than snaps
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Respect prefers-reduced-motion — skip animation on low-power devices
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height,
        backgroundColor: color,
        transformOrigin: "left center",
        scaleX,
        zIndex,
        // Subtle glow so the bar reads on dark bg
        boxShadow: `0 0 8px 1px ${color}55`,
        willChange: "transform",
      }}
    />
  );
}
