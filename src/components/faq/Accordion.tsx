"use client";

import { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`group overflow-hidden rounded-sm border transition-all duration-400 ${
              isOpen
                ? "border-gold/30 bg-white shadow-lg shadow-navy/5"
                : "border-cream-dark bg-white hover:border-gold/20"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span
                className={`pr-4 font-display text-sm font-semibold transition-colors ${
                  isOpen ? "text-gold" : "text-navy"
                }`}
              >
                {item.question}
              </span>
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-400 ${
                  isOpen
                    ? "rotate-45 border-gold bg-gold text-navy"
                    : "border-cream-dark text-warm-gray group-hover:border-gold/50"
                }`}
              >
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-400 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-cream-dark px-6 py-5 text-sm leading-relaxed text-warm-gray">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
