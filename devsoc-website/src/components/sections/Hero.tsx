"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.4, delayChildren: 0.5 },
  },
};

const itemVariants: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 2, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <div style={{ minWidth: "1440px", width: "100%", margin: "0 auto" }}>
      <div style={{ margin: "0 40px" }}>
        <Navbar />
      </div>

      <div style={{ position: "relative" }}>
        {/* Rotating flower */}
        <div
          style={{
            position: "absolute",
            left: "49%",
            top: "20%",
            zIndex: 4,
            textAlign: "center",
          }}
        >
          <Image
            src="/assets/flower.png"
            alt="Rotating flower"
            width={23}
            height={23}
            style={{ animation: "rotate 10s linear infinite", margin: "auto" }}
          />
        </div>

        {/* Hero content grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            height: "90vh",
            display: "grid",
            gridTemplateColumns: "1fr 3fr 1fr",
            padding: "35px 88px",
            margin: "0 40px",
            alignItems: "center",
            position: "relative",
          }}
        >
          <motion.div
            variants={itemVariants}
            style={{
              color: "#edf738",
              fontSize: "0.97em",
              display: "flex",
              alignItems: "center",
            }}
          >
            code --- together
          </motion.div>

          <div style={{ position: "relative" }}>
            <motion.h1
              variants={itemVariants}
              style={{
                fontSize: "3.5em",
                textAlign: "center",
                letterSpacing: "0.02em",
                fontFamily: "var(--font-byrd), sans-serif",
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 1.2,
                color: "#edf738",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              developer society and open source projects
            </motion.h1>

            {/* Vector overlay (appears after 2s) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 2 }}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "transparent",
              }}
            >
              <Image
                src="/assets/vector1.png"
                alt="Vector"
                width={508}
                height={222}
                style={{ backgroundColor: "transparent", width: "420px", height: "auto" }}
              />
            </motion.div>

            {/* Badge + tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 3, ease: "easeOut" as const }}
              style={{
                position: "absolute",
                top: "110%",
                left: "43%",
                backgroundColor: "transparent",
                display: "flex",
                columnGap: "30px",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  textTransform: "uppercase",
                  fontFamily: "var(--font-byrd), sans-serif",
                  fontSize: "0.75rem",
                  padding: "2px 4px",
                  borderRadius: "2px",
                  backgroundColor: "#edf738",
                  color: "#070707",
                  fontWeight: 900,
                }}
              >
                DevSoc
              </span>
              <div style={{ backgroundColor: "transparent" }}>
                <span
                  style={{
                    backgroundColor: "transparent",
                    fontSize: "1.11em",
                    color: "#edf738",
                    fontWeight: 700,
                    fontFamily: "var(--font-byrd), sans-serif",
                    textTransform: "uppercase",
                    display: "block",
                  }}
                >
                  Build Together
                </span>
                <span
                  style={{
                    backgroundColor: "transparent",
                    fontSize: "1.11em",
                    color: "#edf738",
                    fontWeight: 700,
                    fontFamily: "var(--font-byrd), sans-serif",
                    textTransform: "uppercase",
                    display: "block",
                  }}
                >
                  Make Impact
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            style={{
              color: "#edf738",
              fontSize: "0.97em",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            build --- the future
          </motion.div>
        </motion.div>

        {/* Shake arrow */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Image
            src="/svgArrow.svg"
            alt="Scroll down"
            width={24}
            height={24}
            style={{ animation: "shake 2s infinite", color: "#edf738" }}
          />
        </div>
      </div>
    </div>
  );
}
