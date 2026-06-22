"use client";

import { useState, useEffect } from "react";

export function useScroll(threshold = 80) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handler = () => {
      setScrollY(window.scrollY);
      setScrolled(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);

  return { scrolled, scrollY };
}
