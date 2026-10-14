"use client";

import React, { useEffect, useRef, useState } from "react";

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Strictly disable on touch devices or screens under 1024px
    if (
      typeof window === "undefined" ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.innerWidth < 1024
    ) {
      return;
    }

    let isScrollingTimeout: NodeJS.Timeout;

    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("button") ||
          target.closest("a") ||
          target.closest("input") ||
          target.closest("[role='button']"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onScroll = () => {
      // Hide cursor during scroll to maximize GPU framerate
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0";
      }
      clearTimeout(isScrollingTimeout);
      isScrollingTimeout = setTimeout(() => {
        if (cursorRef.current) {
          cursorRef.current.style.opacity = "1";
        }
      }, 100);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(isScrollingTimeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden lg:block -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150 will-change-transform"
      style={{
        left: 0,
        top: 0,
      }}
    >
      <div
        className={`flex items-center justify-center rounded-full transition-all duration-150 ease-out ${
          isHovered
            ? "w-11 h-11 border-2 border-brand-amber bg-brand-amber/15 scale-110"
            : isClicking
            ? "w-6 h-6 border border-brand-red bg-brand-red/30 scale-90"
            : "w-7 h-7 border border-brand-red/80 bg-brand-red/20"
        }`}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full transition-colors duration-150 ${
            isHovered ? "bg-brand-amber" : "bg-brand-red"
          }`}
        />
      </div>
    </div>
  );
};
