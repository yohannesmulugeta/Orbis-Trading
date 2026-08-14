"use client";

import { useEffect } from "react";

const selectors = [
  ".home-hero__content",
  ".heritage-intro__grid",
  ".timeline__item",
  ".mercedes-feature__copy",
  ".mercedes-feature__visual",
  ".brand-card",
  ".services-overview__list a",
  ".statistics__intro",
  ".statistics__items > div",
  ".bus-feature__media",
  ".bus-feature__copy",
  ".export-feature__content",
  ".coffee-origins__visual",
  ".coffee-origins__copy",
  ".corporate-stories__grid a",
  ".page-hero__content",
  ".split-feature__copy",
  ".split-feature__media",
  ".automotive-brands-page__list a",
  ".automotive-ecosystem__grid article",
  ".automotive-application__grid > div",
  ".bus-intro__grid > div",
  ".bus-product__image",
  ".bus-product__copy",
  ".assembly-process__list article",
  ".workshop-banner__content",
  ".export-category",
  ".export-process__grid article",
  ".product-list",
  ".coffee-origin-cloud span",
  ".inquiry-cta__inner > div",
].join(",");

export function MotionEnhancer() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(selectors));
    elements.forEach((element, index) => {
      element.classList.add("motion-ready");
      element.style.setProperty("--motion-delay", `${Math.min(index % 5, 4) * 70}ms`);
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
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
