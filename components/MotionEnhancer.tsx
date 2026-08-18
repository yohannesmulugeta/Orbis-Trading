"use client";

import { useEffect } from "react";

const selectors = [
  ".heritage-intro__grid",
  ".timeline__item",
  ".mercedes-feature__copy",
  ".mercedes-feature__visual",
  ".brand-card",
  ".bus-feature__media",
  ".bus-feature__copy",
  ".export-feature__content",
  ".statistics__items > div",
  ".page-hero__content",
  ".split-feature__media",
  ".service-intro__grid",
  ".parts-feature__image",
  ".parts-feature__copy",
  ".bus-intro__grid",
  ".bus-product__image",
  ".bus-product__copy",
  ".export-intro__grid",
  ".coffee-intro__grid",
  ".mb-story__copy",
  ".mb-story__media",
  ".mb-support__grid article",
  ".mb-applications__media",
  ".mb-applications__copy",
  ".mb-local__content",
  ".inquiry-cta__inner > div",
].join(",");

export function MotionEnhancer() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(selectors));
    elements.forEach((element, index) => {
      element.classList.add("motion-ready");
      element.style.setProperty("--motion-delay", `${Math.min(index % 4, 3) * 55}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("motion-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
