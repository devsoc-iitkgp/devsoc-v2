"use client";

import { useEffect, useRef, useState } from "react";

// Section accent colors mapped via data-cursor-color on section wrappers
const DEFAULT_COLOR = "#edf738"; // yellow

interface CursorState {
  color: string;
  hovering: boolean; // on any interactive element
  label: string;
}

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<CursorState>({
    color: DEFAULT_COLOR,
    hovering: false,
    label: "",
  });

  // Keep latest state accessible inside rAF without re-registering listeners
  const stateRef = useRef(state);
  stateRef.current = state;

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;
    let rafId: number;

    // Smooth position loop
    const animate = () => {
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      rafId = requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    // Resolve accent color from element's nearest data-cursor-color ancestor
    const resolveColor = (el: Element): string => {
      const section = el.closest("[data-cursor-color]");
      if (section) {
        return section.getAttribute("data-cursor-color") || DEFAULT_COLOR;
      }
      return DEFAULT_COLOR;
    };

    // Resolve label text for buttons
    const resolveLabel = (el: Element): string => {
      const tag = el.tagName.toLowerCase();
      if (tag === "button") return "CLICK";
      if (tag === "a") return "VIEW";
      const btn = el.closest("button");
      if (btn) return "CLICK";
      const a = el.closest("a");
      if (a) return "VIEW";
      return "";
    };

    const isInteractive = (el: Element): boolean => {
      return !!(
        el.closest("a") ||
        el.closest("button") ||
        el.getAttribute("role") === "button"
      );
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;
      const interactive = isInteractive(target);
      setState({
        color: resolveColor(target),
        hovering: interactive,
        label: interactive ? resolveLabel(target) : "",
      });
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const { color, hovering, label } = state;
  const dotSize = hovering ? 48 : 12;
  const ringSize = hovering ? 64 : 36;

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: dotSize,
          height: dotSize,
          borderRadius: "50%",
          backgroundColor: hovering ? "transparent" : color,
          border: hovering ? `2px solid ${color}` : "none",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          mixBlendMode: hovering ? "normal" : "difference",
          transition: "width 0.25s cubic-bezier(0.4,0,0.2,1), height 0.25s cubic-bezier(0.4,0,0.2,1), background-color 0.3s, border-color 0.3s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {hovering && label && (
          <span
            style={{
              fontSize: "9px",
              fontWeight: 900,
              letterSpacing: "1px",
              color: color,
              fontFamily: "var(--font-byrd), sans-serif",
              textTransform: "uppercase",
              backgroundColor: "transparent",
              userSelect: "none",
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </span>
        )}
      </div>

      {/* Trailing ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: ringSize,
          height: ringSize,
          border: `1px solid ${color}`,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%, -50%)",
          opacity: hovering ? 0.4 : 0.5,
          transition:
            "width 0.35s cubic-bezier(0.4,0,0.2,1), height 0.35s cubic-bezier(0.4,0,0.2,1), border-color 0.3s, opacity 0.3s",
        }}
      />
    </>
  );
}
