import type { MenuItem as MenuItemType } from "@/data/menu";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function MenuItem({ item }: { item: MenuItemType }) {
  return (
    <li className="flex items-start gap-4 border-b border-border/70 py-4 last:border-b-0 md:gap-5 md:py-5">
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-sm md:h-[88px] md:w-[88px]">
        <ImagePlaceholder
          src={item.image ?? null}
          alt={item.image ? item.name : ""}
          variant="compact"
          sizes="88px"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
          <h3 className="text-[0.98rem] font-medium text-foreground">{item.name}</h3>
          <span className="whitespace-nowrap text-[0.9rem] text-foreground/70">
            {item.price}
          </span>
        </div>
        {item.description ? (
          <p className="mt-1 text-[0.88rem] leading-relaxed text-foreground/60">
            {item.description}
          </p>
        ) : null}
      </div>
    </li>
  );
}
