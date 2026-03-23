"use client";

/**
 * AnimatedText — staggered word or letter reveal animation.
 *
 * Each token (word or letter) is wrapped in an overflow:hidden clip
 * so the text appears to rise from underneath — a classic editorial
 * motion pattern used in high-end agency/SaaS sites.
 *
 * Usage:
 *   <AnimatedText
 *     text="Build Together. Make Impact."
 *     tag="h1"
 *     mode="words"
 *     stagger={0.06}
 *     style={{ fontFamily: "var(--font-byrd)" }}
 *   />
 */

import { motion, type Variants } from "framer-motion";
import { useMemo, type CSSProperties, type ElementType } from "react";
import { ease, duration, viewport } from "@/lib/animation";

type TextTag = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
type TextMode = "words" | "letters" | "lines";

interface AnimatedTextProps {
  text: string;
  /** Split unit — 'words' (default), 'letters', or 'lines' (no split, single reveal). */
  mode?: TextMode;
  /** Stagger gap between each token in seconds. */
  stagger?: number;
  /** Delay before the first token starts. */
  delay?: number;
  className?: string;
  style?: CSSProperties;
  /** HTML tag to render. Defaults to 'p'. */
  tag?: TextTag;
  /** Only trigger once on scroll-enter. */
  once?: boolean;
  /** Control visibility from parent (for orchestrated sequences). */
  animate?: "visible" | "hidden";
}

export default function AnimatedText({
  text,
  mode = "words",
  stagger = 0.06,
  delay = 0,
  className,
  style,
  tag: Tag = "p" as TextTag,
  once = true,
  animate,
}: AnimatedTextProps) {
  // Split text into tokens
  const tokens = useMemo(() => {
    if (mode === "letters") {
      // Preserve spaces as non-breaking spaces so layout doesn't collapse
      return text.split("").map((ch) => (ch === " " ? "\u00A0" : ch));
    }
    if (mode === "words") return text.split(" ");
    return [text]; // 'lines' — full text as a single reveal unit
  }, [text, mode]);

  // Container orchestrates stagger timing
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  // Each token rises from clipped overflow
  const tokenVariants: Variants = {
    hidden: { y: "105%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: duration.slow, ease: ease.out },
    },
  };

  const MotionTag = motion[Tag as keyof typeof motion] as ElementType;

  return (
    <MotionTag
      className={className}
      style={style}
      variants={containerVariants}
      initial="hidden"
      // If animate prop is provided, use controlled mode — else use whileInView
      {...(animate
        ? { animate }
        : {
            whileInView: "visible",
            viewport: { once, amount: viewport.amount },
          })}
    >
      {tokens.map((token, i) => (
        // Clip container — the token "rises" into this box
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            // Add a small gap between words; letters are tight
            marginRight: mode === "words" ? "0.25em" : 0,
            verticalAlign: "bottom",
          }}
        >
          <motion.span
            variants={tokenVariants}
            style={{ display: "inline-block" }}
          >
            {token}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
