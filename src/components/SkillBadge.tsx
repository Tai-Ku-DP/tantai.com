import Image from "next/image";
import type { Skill } from "@/data/skills";

export default function SkillBadge({ name, icon }: Skill) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2 py-1 text-xs rounded-full transition-colors hover:opacity-80 border border-gray-200
      "
      style={{
        color: "var(--muted-fg)",
      }}
    >
      {icon ? (
        <Image
          src={icon}
          alt={name}
          width={12}
          height={12}
          className="object-contain shrink-0"
          unoptimized
        />
      ) : (
        <span
          className="w-3 h-3 rounded-sm flex items-center justify-center shrink-0"
          style={{ backgroundColor: "var(--accent)20" }}
        >
          <span
            className="text-[7px] font-bold leading-none"
            style={{ color: "var(--accent)" }}
          >
            {name.charAt(0).toUpperCase()}
          </span>
        </span>
      )}
      {name}
    </span>
  );
}
