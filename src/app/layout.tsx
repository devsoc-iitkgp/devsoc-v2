import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk, Playfair_Display } from "next/font/google";
import { MotionConfig } from "framer-motion";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import PageTransition from "@/components/ui/PageTransition";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "DevSoc — Developer Society",
  description:
    "The official website of DevSoc, the university developer society. Build together, grow together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${spaceGrotesk.variable} ${playfairDisplay.variable}`}
    >
      <body>
        {/*
         * MotionConfig — site-wide Framer Motion settings.
         * reducedMotion="user" reads prefers-reduced-motion from the OS
         * and automatically disables/minimises all motion variants.
         * This covers every motion.* component globally — no per-component
         * useReducedMotion() checks needed.
         */}
        <MotionConfig reducedMotion="user">
          {/* Thin scroll progress bar fixed at the top of the viewport */}
          <ScrollProgress color="#edf738" height={2} />

          <CustomCursor />

          {/* Route-change fade + translateY transition */}
          <PageTransition>{children}</PageTransition>
        </MotionConfig>
      </body>
    </html>
  );
}
