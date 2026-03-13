import Image from "next/image";
import type { Skill } from "@/data/skills";

export default function SkillBadge({ name, icon, darkInvert }: Skill) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2 py-1 text-xs rounded-full transition-colors hover:opacity-80 border border-gray-200
      "
      style={{
        color: "var(--muted-fg)",
      }}
    >
      <Image
        src={icon || ""}
        alt={name}
        width={20}
        height={20}
        className="object-contain shrink-0"
        style={
          darkInvert ? { filter: "invert(var(--icon-invert))" } : undefined
        }
        unoptimized
      />
      {name}
    </span>
  );
}
