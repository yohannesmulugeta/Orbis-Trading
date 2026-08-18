"use client";

import { useId, useState } from "react";

type AccordionItem = {
  title: string;
  text: string;
  label?: string;
};

type EditorialAccordionProps = {
  items: AccordionItem[];
  defaultOpen?: number;
  ariaLabel: string;
};

export function EditorialAccordion({
  items,
  defaultOpen = 0,
  ariaLabel,
}: EditorialAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);
  const id = useId().replace(/:/g, "");

  return (
    <div className="editorial-accordion" aria-label={ariaLabel}>
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `${id}-panel-${index}`;
        const buttonId = `${id}-button-${index}`;

        return (
          <article className={`editorial-accordion__item ${open ? "is-open" : ""}`} key={item.title}>
            <button
              id={buttonId}
              className="editorial-accordion__trigger"
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? null : index)}
            >
              <span className="editorial-accordion__index">
                {item.label ?? String(index + 1).padStart(2, "0")}
              </span>
              <span className="editorial-accordion__title">{item.title}</span>
              <span className="editorial-accordion__icon" aria-hidden="true" />
            </button>
            <div
              id={panelId}
              className="editorial-accordion__panel"
              role="region"
              aria-labelledby={buttonId}
            >
              <div>
                <p>{item.text}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
