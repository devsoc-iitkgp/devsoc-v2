"use client";

/**
 * ShimmerSkeleton — loading placeholder with animated shimmer effect.
 *
 * Uses a Framer Motion translateX sweep rather than CSS @keyframes
 * so the animation is trivially pauseable (reduced-motion) and
 * doesn't require global stylesheet changes.
 *
 * The shimmer gradient mimics a light source moving across a dark
 * surface — consistent with the site's dark branding.
 *
 * Usage:
 *   // Text line placeholder
 *   <ShimmerSkeleton width="60%" height="1rem" />
 *
 *   // Image card placeholder
 *   <ShimmerSkeleton width="100%" height="240px" borderRadius="4px" />
 *
 *   // Compose a full card skeleton
 *   <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
 *     <ShimmerSkeleton width="100%" height="200px" />
 *     <ShimmerSkeleton width="70%" height="1.2rem" />
 *     <ShimmerSkeleton width="40%" height="0.9rem" />
 *   </div>
 */

import { motion, useReducedMotion } from "framer-motion";
import { type CSSProperties } from "react";

interface ShimmerSkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  className?: string;
  style?: CSSProperties;
}

export default function ShimmerSkeleton({
  width = "100%",
  height = "1rem",
  borderRadius = "3px",
  className,
  style,
}: ShimmerSkeletonProps) {
  // Honour OS-level reduced-motion preference
  const shouldReduce = useReducedMotion();

  return (
    <div
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        width,
        height,
        borderRadius,
        // Slightly lighter than page bg — visible but not harsh
        backgroundColor: "rgba(255, 255, 255, 0.06)",
        ...style,
      }}
      aria-hidden="true"
    >
      {!shouldReduce && (
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            // Angled shimmer: 105deg feels more natural than flat 90deg
            background:
              "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.07) 50%, transparent 70%)",
            willChange: "transform",
          }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 1.6,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      )}
    </div>
  );
}
