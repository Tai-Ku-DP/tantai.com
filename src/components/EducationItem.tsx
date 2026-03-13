import type { EducationEntry } from "@/data/education";

export default function EducationItem({
  degree,
  school,
  schoolUrl,
  flag,
  period,
  bullets,
}: EducationEntry) {
  return (
    <div className="relative flex gap-4">
      <div className="flex flex-col items-center mt-1.5 shrink-0">
        <svg width="8" height="8" viewBox="0 0 8 8" className="shrink-0" aria-hidden>
          <circle cx="4" cy="4" r="4" fill="var(--accent)" />
        </svg>
      </div>

      <div className="pb-8 flex-1 min-w-0">
        <h3
          className="text-base font-semibold leading-snug"
          style={{ color: "var(--fg)" }}
        >
          {degree}
        </h3>

        <div
          className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5 text-sm"
          style={{ color: "var(--muted)" }}
        >
          {schoolUrl ? (
            <a
              href={schoolUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:opacity-70 transition-opacity"
              style={{ color: "var(--muted-fg)" }}
            >
              {school}
            </a>
          ) : (
            <span className="font-medium" style={{ color: "var(--muted-fg)" }}>
              {school}
            </span>
          )}
          <span>•</span>
          <p className="text-sm mt-0.5" style={{ color: "var(--faint)" }}>
            {period}
          </p>
        </div>

        {bullets && bullets.length > 0 && (
          <ul className="mt-2.5 space-y-1">
            {bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm leading-relaxed"
                style={{ color: "var(--muted-fg)" }}
              >
                <span
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--subtle)" }}
                >
                  •
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
