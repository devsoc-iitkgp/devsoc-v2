"use client";

/**
 * AnimatedCard — scroll-reveal + hover-tilt + shadow-elevation card wrapper.
 *
 * Combines three effects:
 * 1. Scroll-triggered fade-up entrance (whileInView)
 * 2. Mouse-tracking 3D tilt using useMotionValue + useSpring
 * 3. Subtle scale on hover (1.025) with smooth shadow elevation
 *
 * The tilt is capped to ±8deg — enough to feel premium without
 * looking gimmicky. Disable with tilt={false} for flat layouts.
 *
 * Usage:
 *   <AnimatedCard style={{ border: "1px solid ..." }}>
 *     <p>Card content</p>
 *   </AnimatedCard>
 */

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { type ReactNode, type CSSProperties, type MouseEvent, useRef } from "react";
import { ease, duration, viewport } from "@/lib/animation";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Enable mouse-tracking 3D tilt. Default: true. */
  tilt?: boolean;
  /** Max tilt angle in degrees. Default: 8. */
  tiltMax?: number;
  /** Hover scale multiplier. Default: 1.025. */
  hoverScale?: number;
  /** Scroll entry delay (seconds). Default: 0. */
  delay?: number;
}

// Entry variant — card fades up from 32px below
const entryVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.page, ease: ease.out },
  },
};

export default function AnimatedCard({
  children,
  className,
  style,
  tilt = true,
  tiltMax = 8,
  hoverScale = 1.025,
  delay = 0,
}: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Raw mouse position (–0.5 → +0.5 relative to card bounds)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Map position to rotation angles, then smooth with spring
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [tiltMax, -tiltMax]),
    { stiffness: 200, damping: 30 },
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-tiltMax, tiltMax]),
    { stiffness: 200, damping: 30 },
  );

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    // Spring back to neutral on leave
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        ...style,
        // Only apply tilt transforms when feature is enabled
        rotateX: tilt ? rotateX : 0,
        rotateY: tilt ? rotateY : 0,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      // Scroll entrance
      variants={entryVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewport }}
      transition={{ delay }}
      // Hover lift
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
