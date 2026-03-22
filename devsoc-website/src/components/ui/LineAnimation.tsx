"use client";

import { motion } from "framer-motion";

interface LineAnimationProps {
  color?: string;
}

export default function LineAnimation({
  color = "rgba(62, 109, 217, 0.4)",
}: LineAnimationProps) {
  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1, ease: "easeInOut" as const }}
      style={{ backgroundColor: color, height: "1px" }}
    />
  );
}
