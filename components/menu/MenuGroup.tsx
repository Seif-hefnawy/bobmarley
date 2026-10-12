import type { MenuGroup as MenuGroupType } from "@/data/menu";
import MenuItem from "@/components/menu/MenuItem";

export default function MenuGroup({ group }: { group: MenuGroupType }) {
  return (
    <div>
      <h3 className="font-display text-lg italic text-accent">{group.title}</h3>
      <ul className="mt-2">
        {group.items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </ul>
    </div>
  );
}
