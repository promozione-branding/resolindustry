"use client";

import { useEffect } from "react";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Lenis is only useful with a mouse wheel. Skip it (and don't even
    // download it) on phones/tablets and for reduced-motion users.
    const skip = window.matchMedia(
      "(max-width: 767px), (pointer: coarse), (prefers-reduced-motion: reduce)"
    ).matches;

    if (skip) return;

    let cancelled = false;
    let lenis;
    let animationFrameId;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;

      lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        syncTouch: false,
      });

      function raf(time) {
        lenis.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      }

      animationFrameId = requestAnimationFrame(raf);
    });

    return () => {
      cancelled = true;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (lenis) lenis.destroy();
    };
  }, []);

  return children;
}
