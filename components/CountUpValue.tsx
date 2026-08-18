"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type CountUpValueProps = {
  value: string;
  duration?: number;
};

type ParsedValue = {
  end: number;
  prefix: string;
  suffix: string;
  decimals: number;
  useGrouping: boolean;
};

function parseDisplayValue(value: string): ParsedValue {
  const match = value.match(/[\d,]+(?:\.\d+)?/);

  if (!match || match.index === undefined) {
    return { end: 0, prefix: value, suffix: "", decimals: 0, useGrouping: false };
  }

  const numericText = match[0];
  const decimalPart = numericText.split(".")[1];

  return {
    end: Number(numericText.replace(/,/g, "")),
    prefix: value.slice(0, match.index),
    suffix: value.slice(match.index + numericText.length),
    decimals: decimalPart?.length ?? 0,
    useGrouping: numericText.includes(","),
  };
}

const numberStyle = {
  display: "inline-block",
  font: "inherit",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  color: "inherit",
  letterSpacing: "inherit",
  textTransform: "none" as const,
};

export function CountUpValue({ value, duration = 1800 }: CountUpValueProps) {
  const parsed = useMemo(() => parseDisplayValue(value), [value]);
  const [displayValue, setDisplayValue] = useState(0);
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayValue(parsed.end);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setStarted(true);
        observer.disconnect();
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [parsed.end]);

  useEffect(() => {
    if (!started) return;

    let animationFrame = 0;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const nextValue = parsed.end * easedProgress;

      setDisplayValue(nextValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(parsed.end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [duration, parsed.end, started]);

  const formattedNumber = displayValue.toLocaleString("en-US", {
    minimumFractionDigits: parsed.decimals,
    maximumFractionDigits: parsed.decimals,
    useGrouping: parsed.useGrouping,
  });

  return (
    <span ref={elementRef} aria-label={value} style={numberStyle}>
      <span aria-hidden="true" style={numberStyle}>
        {parsed.prefix}
        {formattedNumber}
        {parsed.suffix}
      </span>
    </span>
  );
}
