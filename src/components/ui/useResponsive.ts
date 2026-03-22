"use client";

import { useEffect, useState } from "react";

export function useResponsive() {
  const [width, setWidth] = useState(1440);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;

  // Shorthand helpers
  const mx = isMobile ? "0 16px" : isTablet ? "0 24px" : "0 40px";
  const sp = isMobile ? "1.5em" : isTablet ? "3em" : "5.56em"; // section padding (horizontal)
  const pad = (v: string, t: string, m: string) => (isMobile ? m : isTablet ? t : v);

  return { isMobile, isTablet, isDesktop, width, mx, sp, pad };
}
