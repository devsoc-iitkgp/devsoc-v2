"use client";

/**
 * PageTransition — wraps page content with a smooth route-change animation.
 *
 * Usage: wrap the `{children}` in RootLayout with this component.
 * AnimatePresence (mode="wait") ensures the exiting page fully leaves
 * before the entering page starts — prevents overlap flash.
 *
 * The animation is: fade + 18px upward translateY on enter,
 * fade + -10px exit. Matches the "precision dark" motion theme.
 */

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { pageVariants } from "@/lib/animation";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        // Prevent the wrapper from collapsing height during exit
        style={{ position: "relative" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
