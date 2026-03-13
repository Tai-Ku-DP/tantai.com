import type { WorkEntry } from "@/data/work";

function parseBullet(text: string): React.ReactNode {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (match) {
      return (
        <a
          key={i}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 transition-opacity hover:opacity-70"
          style={{ color: "var(--fg)" }}
        >
          {match[1]}
        </a>
      );
    }
    return part;
  });
}

export default function WorkItem({
  title,
  company,
  companyUrl,
  flag,
  country,
  type,
  period,
  bullets,
}: WorkEntry) {
  return (
    <div className="relative flex gap-4">
      {/* Amber dot */}
      <div className="flex flex-col items-center mt-1.5 shrink-0">
        <svg width="8" height="8" viewBox="0 0 8 8" className="shrink-0" aria-hidden>
          <circle cx="4" cy="4" r="4" fill="var(--accent)" />
        </svg>
      </div>

      <div className="pb-8 flex-1 min-w-0">
        {/* Title */}
        <h3
          className="text-base font-semibold leading-snug"
          style={{ color: "var(--fg)" }}
        >
          {title}
        </h3>

        {/* Company + meta */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5 text-sm">
          {companyUrl ? (
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:opacity-70 transition-opacity"
              style={{ color: "var(--muted-fg)" }}
            >
              {company}
            </a>
          ) : (
            <span className="font-medium" style={{ color: "var(--muted-fg)" }}>
              {company}
            </span>
          )}
          <span>•</span>
          <span>{period}</span>
        </div>

        {/* Bullets */}
        <ul className="mt-2.5 space-y-1">
          {bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex gap-2 leading-relaxed text-sm"
              style={{ color: "var(--muted-fg)" }}
            >
              <span
                className="mt-0.5 shrink-0"
                style={{ color: "var(--subtle)" }}
              >
                •
              </span>
              <span>{parseBullet(bullet)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
