"use client";

export default function Footer() {
  return (
    <footer className="mt-20" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-2xl mx-auto px-6 h-12 flex items-center justify-between">
        <div
          className="text-base text-center flex items-center justify-center flex-1"
          style={{ color: "var(--faint)" }}
        >
          The Paracel and Spratly Islands belong to Vietnam 🇻🇳
        </div>

        {/* <div className="flex items-center gap-4">
          <Link
            href="/uses"
            className="text-xs transition-colors hover:opacity-70"
            style={{ color: "var(--faint)" }}
          >
            Uses
          </Link>
          <Link
            href="/tech-stack"
            className="text-xs transition-colors hover:opacity-70"
            style={{ color: "var(--faint)" }}
          >
            Tech Stack
          </Link>
          <div
            className="flex items-center gap-2"
            style={{ color: "var(--faint)" }}
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hover:opacity-70 transition-opacity"
              aria-label="Back to top"
            >
              <ArrowUp size={13} />
            </a>
            <span>
              <LayoutGrid size={13} />
            </span>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
