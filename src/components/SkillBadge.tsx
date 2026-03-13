import Image from "next/image";
import type { Skill } from "@/data/skills";

export default function SkillBadge({ name, icon, darkInvert, href }: Skill) {
  const className =
    "inline-flex items-center gap-1.5 px-2 py-1 text-xs rounded-full transition-opacity hover:opacity-70 border border-gray-200";
  const style = { color: "var(--muted-fg)" };

  const content = (
    <>
      {icon && (
        <Image
          src={icon}
          alt={name}
          width={20}
          height={20}
          className="object-contain shrink-0"
          style={darkInvert ? { filter: "invert(var(--icon-invert))" } : undefined}
          unoptimized
        />
      )}
      {name}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
      >
        {content}
      </a>
    );
  }

  return (
    <span className={className} style={style}>
      {content}
    </span>
  );
}
