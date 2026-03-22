"use client";

import { motion } from "framer-motion";
import { CSSProperties, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export default function AnimatedSection({
  children,
  className,
  style,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const initial = {
    opacity: 0,
    y: direction === "up" ? 60 : 0,
    x: direction === "left" ? -60 : direction === "right" ? 60 : 0,
  };

  return (
    <motion.div
      className={className}
      style={style}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1, ease: "easeOut" as const, delay }}
    >
      {children}
    </motion.div>
  );
}
