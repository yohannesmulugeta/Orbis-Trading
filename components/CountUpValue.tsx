"use client";

import type { CSSProperties } from "react";
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

const outputStyle: CSSProperties = {
  display: "inline-grid",
  position: "relative",
  verticalAlign: "baseline",
  font: "inherit",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  letterSpacing: "inherit",
  color: "inherit",
  fontVariantNumeric: "tabular-nums lining-nums",
  fontFeatureSettings: '"tnum" 1, "lnum" 1',
  whiteSpace: "nowrap",
};

const layerStyle: CSSProperties = {
  gridArea: "1 / 1",
  font: "inherit",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  letterSpacing: "inherit",
  color: "inherit",
  whiteSpace: "nowrap",
};

export function CountUpValue({ value, duration = 1800 }: CountUpValueProps) {
  const parsed = useMemo(() => parseDisplayValue(value), [value]);
  const [displayValue, setDisplayValue] = useState(0);
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLOutputElement>(null);

  const formatNumber = (number: number) =>
    number.toLocaleString("en-US", {
      minimumFractionDigits: parsed.decimals,
      maximumFractionDigits: parsed.decimals,
      useGrouping: parsed.useGrouping,
    });

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
    const precision = 10 ** parsed.decimals;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.round(parsed.end * easedProgress * precision) / precision;

      setDisplayValue((current) => (current === nextValue ? current : nextValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(parsed.end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [duration, parsed.decimals, parsed.end, started]);

  const formattedNumber = formatNumber(displayValue);
  const finalNumber = formatNumber(parsed.end);
  const currentText = `${parsed.prefix}${formattedNumber}${parsed.suffix}`;
  const finalText = `${parsed.prefix}${finalNumber}${parsed.suffix}`;

  return (
    <output ref={elementRef} aria-label={value} style={outputStyle}>
      <b aria-hidden="true" style={{ ...layerStyle, visibility: "hidden" }}>
        {finalText}
      </b>
      <b aria-hidden="true" style={{ ...layerStyle, textAlign: "right" }}>
        {currentText}
      </b>
    </output>
  );
}
