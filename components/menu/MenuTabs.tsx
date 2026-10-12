"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { MenuCategory } from "@/data/menu";

type MenuTabsProps = {
  categories: MenuCategory[];
  activeId: string;
  onSelect: (id: string) => void;
};

export default function MenuTabs({ categories, activeId, onSelect }: MenuTabsProps) {
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const listRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: false, end: false });

  // Track whether more tabs are hidden to the left/right. State only updates
  // when an edge flips, so scrolling doesn't cause constant re-renders.
  const updateEdges = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    const start = el.scrollLeft > 4;
    const end = el.scrollLeft + el.clientWidth < el.scrollWidth - 4;
    setEdges((prev) => (prev.start === start && prev.end === end ? prev : { start, end }));
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  function select(id: string) {
    onSelect(id);
    tabRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }

  function handleKeyDown(e: React.KeyboardEvent, index: number) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const dir = e.key === "ArrowRight" ? 1 : -1;
    const next = categories[(index + dir + categories.length) % categories.length];
    select(next.id);
    tabRefs.current[next.id]?.focus();
  }

  return (
    <div className="relative">
      <div
        ref={listRef}
        role="tablist"
        aria-label="Menu categories"
        onScroll={updateEdges}
        className="no-scrollbar flex overflow-x-auto"
      >
        {categories.map((category, index) => {
          const active = category.id === activeId;
          return (
            <button
              key={category.id}
              ref={(el) => {
                tabRefs.current[category.id] = el;
              }}
              role="tab"
              id={`tab-${category.id}`}
              aria-selected={active}
              aria-controls={`panel-${category.id}`}
              tabIndex={active ? 0 : -1}
              onClick={() => select(category.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`shrink-0 whitespace-nowrap rounded-none border-0 border-b-2 px-4 pb-3 pt-1 text-[0.95rem] outline-none transition-colors duration-200 first:pl-0 focus-visible:border-foreground ${
                active
                  ? "border-accent text-foreground"
                  : "border-border text-muted hover:text-foreground/70"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      {/* Edge fades hint that the tabs continue off-screen (only visible when tabs overflow) */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent transition-opacity duration-200 ${
          edges.start ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 right-0 flex w-14 items-center justify-end bg-gradient-to-l from-background via-background/80 to-transparent pb-3 transition-opacity duration-200 ${
          edges.end ? "opacity-100" : "opacity-0"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 stroke-accent"
          fill="none"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 6 6 6-6 6" />
        </svg>
      </div>
    </div>
  );
}
