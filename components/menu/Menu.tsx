"use client";

import { useState } from "react";
import { menuCategories } from "@/data/menu";
import MenuTabs from "@/components/menu/MenuTabs";
import MenuGroup from "@/components/menu/MenuGroup";

export default function Menu() {
  const [activeId, setActiveId] = useState(menuCategories[0].id);
  const activeCategory =
    menuCategories.find((c) => c.id === activeId) ?? menuCategories[0];
  const hasItems = activeCategory.groups.some((g) => g.items.length > 0);

  return (
    <section id="menu" className="mx-auto max-w-content scroll-mt-16 px-6 py-16 md:px-10 md:py-24">
      <h2 className="font-display text-3xl text-foreground md:text-4xl">Our Menu</h2>

      <div className="mt-8">
        <MenuTabs
          categories={menuCategories}
          activeId={activeId}
          onSelect={setActiveId}
        />
      </div>

      <div
        role="tabpanel"
        id={`panel-${activeCategory.id}`}
        aria-labelledby={`tab-${activeCategory.id}`}
        className="mt-10 grid gap-10 md:grid-cols-2 md:gap-x-14"
      >
        {hasItems ? (
          activeCategory.groups
            .filter((group) => group.items.length > 0)
            .map((group) => <MenuGroup key={group.title} group={group} />)
        ) : (
          <p className="text-[0.95rem] text-muted md:col-span-2">
            Items for {activeCategory.label} are coming soon.
          </p>
        )}
      </div>
    </section>
  );
}
