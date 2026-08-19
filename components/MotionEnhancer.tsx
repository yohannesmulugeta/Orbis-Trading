"use client";

import { useEffect } from "react";

const selectors = [
  ".mercedes-feature__copy",
  ".mercedes-feature__visual",
  ".bus-feature__media",
  ".export-feature__content",
  ".page-hero__content",
  ".mb-story__media",
  ".mb-support__heading",
  ".mb-local__content",
  ".legacy-chapter",
  ".facility-card",
].join(",");

export function MotionEnhancer() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(selectors));

    elements.forEach((element, index) => {
      element.classList.add("motion-ready");
      element.style.setProperty("--motion-delay", `${index % 2 === 0 ? 0 : 45}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("motion-in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
