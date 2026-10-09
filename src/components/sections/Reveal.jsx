"use client";

import { useEffect, useRef } from "react";

// Fades a section in the first time it scrolls into view. Content is visible
// by default (no JS, reduced motion, or already on screen); only elements that
// start below the fold are hidden, so nothing flashes.
export default function Reveal({ as: Tag = "div", children, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(prefers-reduced-motion: no-preference)").matches)
      return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.dataset.reveal = "pending";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.reveal = "shown";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} {...props}>
      {children}
    </Tag>
  );
}
