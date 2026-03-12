import type { WorkEntry } from "@/data/work";

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
        <span
          className="w-2 h-2 rounded-full shrink-0"
          style={{ backgroundColor: "var(--accent)" }}
        />
      </div>

      <div className="pb-8 flex-1 min-w-0">
        {/* Title */}
        <h3
          className="text-sm font-semibold leading-snug"
          style={{ color: "var(--fg)" }}
        >
          {title}
        </h3>

        {/* Company + meta */}
        <div
          className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5 text-xs"
          style={{ color: "var(--muted)" }}
        >
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
          <span>
            {flag} {country}
          </span>
          <span>•</span>
          <span>{type}</span>
        </div>

        {/* Period */}
        <p className="text-xs mt-0.5" style={{ color: "var(--faint)" }}>
          {period}
        </p>

        {/* Bullets */}
        <ul className="mt-2.5 space-y-1">
          {bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex gap-2 text-xs leading-relaxed"
              style={{ color: "var(--muted-fg)" }}
            >
              <span className="mt-0.5 shrink-0" style={{ color: "var(--subtle)" }}>
                •
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
