"use client";

/**
 * AnimatedSection — primary scroll-reveal wrapper used across all pages.
 *
 * Upgraded to use the centralised animation config (src/lib/animation.ts)
 * for consistent easing and duration tokens. Supports 5 entrance directions
 * plus a 'scale' mode, and an optional once/repeat toggle.
 *
 * Usage:
 *   <AnimatedSection direction="up" delay={0.1}>
 *     <p>Content that fades + slides up on scroll.</p>
 *   </AnimatedSection>
 *
 *   <AnimatedSection direction="scale">
 *     <Card />
 *   </AnimatedSection>
 */

import { motion, type Variants } from "framer-motion";
import { type CSSProperties, type ReactNode } from "react";
import { ease, duration, viewport } from "@/lib/animation";

type Direction = "up" | "down" | "left" | "right" | "scale" | "none";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Delay before the animation starts (seconds). Default: 0. */
  delay?: number;
  /** Entrance direction. Default: 'up'. */
  direction?: Direction;
  /**
   * Travel distance in px (for directional slides).
   * Ignored for 'scale' and 'none'. Default: 48.
   */
  distance?: number;
  /**
   * Whether to trigger only once (default) or every time the
   * element enters the viewport.
   */
  once?: boolean;
  /** Fraction of element that must be visible to trigger. Default: 0.1. */
  amount?: number;
}

function buildVariants(direction: Direction, distance: number): Variants {
  const initial: Record<string, number> = { opacity: 0 };

  if (direction === "up") initial.y = distance;
  else if (direction === "down") initial.y = -distance;
  else if (direction === "left") initial.x = -distance;
  else if (direction === "right") initial.x = distance;
  else if (direction === "scale") initial.scale = 0.94;
  // 'none' — opacity-only fade

  return {
    hidden: initial,
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: duration.page, ease: ease.out },
    },
  };
}

export default function AnimatedSection({
  children,
  className,
  style,
  delay = 0,
  direction = "up",
  distance = 48,
  once = true,
  amount,
}: AnimatedSectionProps) {
  const variants = buildVariants(direction, distance);

  return (
    <motion.div
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: amount ?? viewport.amount }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
