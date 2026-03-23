/**
 * animation.ts — DevSoc global animation system
 *
 * Single source of truth for every easing curve, duration token,
 * and Framer Motion variant used across the site.
 *
 * Motion theme: "precision dark" — sharp, intentional, zero filler.
 * Fast micro-interactions; considered reveal hierarchy; no bounce.
 */

import { type Variants, type Transition, type Easing } from "framer-motion";

// ─── Easing curves ────────────────────────────────────────────────────────────
// Cubic-bezier values tuned for a "premium SaaS / fintech" feel.
export const ease = {
  /** Snappy deceleration — use for elements entering the screen. */
  out: [0.0, 0.0, 0.2, 1] as Easing,
  /** Balanced acceleration/deceleration — use for transitions. */
  inOut: [0.4, 0.0, 0.2, 1] as Easing,
  /** Builds speed — use for elements leaving the screen. */
  in: [0.4, 0.0, 1, 1] as Easing,
  /** Slightly springy without overshoot — good for modals, cards. */
  anticipate: [0.36, 0.66, 0.04, 1] as Easing,
} as const;

// Spring configs (used where physics > bezier)
export const spring = {
  /** Standard spring for navbars, panels, drawers. */
  standard: { type: "spring" as const, stiffness: 260, damping: 28 },
  /** Softer spring for large layout shifts. */
  soft: { type: "spring" as const, stiffness: 120, damping: 20 },
  /** Tight spring for micro interactions (icon scale, button tap). */
  tight: { type: "spring" as const, stiffness: 400, damping: 30 },
} as const;

// ─── Duration tokens (seconds) ────────────────────────────────────────────────
export const duration = {
  /** 150ms — toggle states, checkbox, switch. */
  micro: 0.15,
  /** 250ms — hover colour/border shifts, icon swaps. */
  fast: 0.25,
  /** 350ms — UI component transitions (tab, menu, tooltip). */
  normal: 0.35,
  /** 500ms — page transitions, section hero entrances. */
  page: 0.5,
  /** 800ms — large text reveals, hero headlines. */
  slow: 0.8,
  /** 1200ms — cinematic / first-load sequences. */
  cinematic: 1.2,
} as const;

// ─── Helper: build a Transition object ───────────────────────────────────────
export const t = (d = duration.normal, delay = 0): Transition => ({
  duration: d,
  ease: ease.out,
  delay,
});

// ─── Core entrance variants ───────────────────────────────────────────────────

/** Pure opacity fade — lightest reveal. */
export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: t(duration.normal) },
  exit: { opacity: 0, transition: t(duration.fast) },
};

/** Fade up — primary scroll-reveal for most sections. */
export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: t(duration.page) },
  exit: { opacity: 0, y: -16, transition: t(duration.fast) },
};

/** Fade down — used for dropdowns, tooltips, top-mounted elements. */
export const slideDownVariants: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: t(duration.page) },
  exit: { opacity: 0, y: 20, transition: t(duration.fast) },
};

/** Fade from left. */
export const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: t(duration.page) },
  exit: { opacity: 0, x: 30, transition: t(duration.fast) },
};

/** Fade from right. */
export const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: t(duration.page) },
  exit: { opacity: 0, x: -30, transition: t(duration.fast) },
};

/** Scale-in — used for modals, popovers, success states. */
export const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: t(duration.normal) },
  exit: { opacity: 0, scale: 0.95, transition: t(duration.fast) },
};

// ─── Stagger containers ───────────────────────────────────────────────────────

/**
 * Stagger container — wrap a list/grid.
 * Children should use `staggerItem` or a slide variant.
 */
export const staggerContainer = (
  stagger = 0.1,
  delayChildren = 0,
): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/** Default stagger child — fade + slide up. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.page, ease: ease.out },
  },
};

/** Faster stagger child for dense grids (projects, cards). */
export const staggerItemFast: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.normal, ease: ease.out },
  },
};

// ─── Page transition ──────────────────────────────────────────────────────────

/**
 * Page-level wrapper variants.
 * Wrap each page's root element with these for route transitions.
 */
export const pageVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.page, ease: ease.out },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: duration.normal, ease: ease.in },
  },
};

// ─── Text reveal ──────────────────────────────────────────────────────────────

/**
 * Clip-mask text reveal — wrap each word/letter in overflow:hidden,
 * then apply these variants to the inner span.
 */
export const textRevealVariants: Variants = {
  hidden: { y: "105%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: duration.slow, ease: ease.out },
  },
};

/**
 * Word / letter stagger container.
 * @param stagger gap between each token in seconds
 */
export const wordStaggerContainer = (stagger = 0.06): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger },
  },
});

/** Individual word/letter variant (child of wordStaggerContainer). */
export const wordVariants: Variants = {
  hidden: { y: "110%", opacity: 0, rotateX: -20 },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: { duration: duration.slow, ease: ease.out },
  },
};

// ─── Interactive presets ──────────────────────────────────────────────────────

/** Drop onto any motion element for a light lift hover. */
export const hoverLift = {
  whileHover: { y: -3, scale: 1.015 },
  whileTap: { scale: 0.97 },
  transition: { duration: duration.fast, ease: ease.out },
} as const;

/** Cards: scale + slight Y lift. */
export const cardHoverVariants: Variants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.025,
    y: -4,
    transition: { duration: duration.fast, ease: ease.out },
  },
  tap: { scale: 0.98, y: 0 },
};

/** Nav underline slide — use `scaleX: 0→1` on a positioned span. */
export const underlineVariants: Variants = {
  rest: { scaleX: 0, originX: 0 },
  hover: {
    scaleX: 1,
    originX: 0,
    transition: { duration: duration.fast, ease: ease.out },
  },
};

/** Button fill sweep — absolute background that slides in on hover. */
export const fillSweepVariants: Variants = {
  rest: { x: "-101%" },
  hover: {
    x: "0%",
    transition: { duration: duration.normal, ease: ease.anticipate },
  },
};

// ─── Viewport defaults ────────────────────────────────────────────────────────

/**
 * Standard whileInView viewport config.
 * - once: true  → only trigger once (better perf, avoids re-animation)
 * - amount: 0.1 → 10 % of element visible before triggering
 */
export const viewport = {
  once: true,
  amount: 0.1,
} as const;

/** Stricter viewport — element must be 25 % visible before triggering. */
export const viewportStrict = {
  once: true,
  amount: 0.25,
} as const;
