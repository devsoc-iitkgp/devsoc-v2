"use client";

/**
 * MagneticButton — cursor-attracts the element as the mouse approaches.
 *
 * Wraps any element and applies a spring-smoothed offset that pulls
 * the button toward the cursor while it's inside the trigger zone.
 * Returns to neutral on leave.
 *
 * Best used on: CTA buttons, nav items, social icon links.
 * Keep elements ≤ 200px wide for best effect — the pull feels
 * proportionally stronger on smaller targets.
 *
 * Usage:
 *   <MagneticButton>
 *     <button style={...}>JOIN US</button>
 *   </MagneticButton>
 *
 * Usage with custom strength:
 *   <MagneticButton strength={0.5}>
 *     <a href="/join">JOIN</a>
 *   </MagneticButton>
 */

import { motion, useMotionValue, useSpring } from "framer-motion";
import { type ReactNode, type CSSProperties, type MouseEvent, useRef } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /**
   * Attraction strength — fraction of cursor distance applied as offset.
   * 0.3 is subtle, 0.6 is obvious. Default: 0.35.
   */
  strength?: number;
}

export default function MagneticButton({
  children,
  className,
  style,
  strength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Raw offset values
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Spring smoothing — the element "chases" the cursor, not snaps
  const x = useSpring(rawX, { stiffness: 220, damping: 22 });
  const y = useSpring(rawY, { stiffness: 220, damping: 22 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    rawX.set((e.clientX - centerX) * strength);
    rawY.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    // Spring back to 0,0 smoothly
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ ...style, x, y, display: "inline-block" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
