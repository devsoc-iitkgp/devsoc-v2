"use client";

/**
 * ParallaxSection — scroll-driven vertical parallax wrapper.
 *
 * Maps the section's scroll progress (0 when entering viewport bottom,
 * 1 when leaving viewport top) to a Y offset, creating a sense of depth.
 *
 * The `offset` controls the total Y travel distance in px. A positive
 * value means the child moves upward relative to the scroll direction
 * (inner content "falls behind" the page — the standard parallax feel).
 *
 * Performance: only transform+opacity are touched. No layout thrash.
 * willChange: "transform" is applied so the browser composites this
 * element on its own GPU layer.
 *
 * Usage:
 *   // Subtle background depth
 *   <ParallaxSection offset={60}>
 *     <Image src="/hero-bg.png" alt="" fill />
 *   </ParallaxSection>
 *
 *   // Stronger hero parallax
 *   <ParallaxSection offset={120}>
 *     <HeroContent />
 *   </ParallaxSection>
 *
 * To invert (child moves with scroll instead of against):
 *   <ParallaxSection offset={-60}>...</ParallaxSection>
 */

import { motion, useScroll, useTransform } from "framer-motion";
import { type ReactNode, type CSSProperties, useRef } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  /**
   * Total Y travel in px over the element's full scroll range.
   * Positive = child moves up (slower than page) = standard parallax.
   * Negative = child moves down = reverse parallax.
   * Default: 80.
   */
  offset?: number;
  className?: string;
  style?: CSSProperties;
}

export default function ParallaxSection({
  children,
  offset = 80,
  className,
  style,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll progress as this element moves through the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    // "start end" = element's top enters viewport bottom
    // "end start" = element's bottom leaves viewport top
    offset: ["start end", "end start"],
  });

  // Map 0→1 scroll progress to offset px range
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <div
      ref={ref}
      className={className}
      // overflow:hidden clips the child if it extends beyond bounds during tween
      style={{ ...style, overflow: "hidden" }}
    >
      <motion.div style={{ y, willChange: "transform" }}>
        {children}
      </motion.div>
    </div>
  );
}
