"use client";

export default function Footer() {
  return (
    <footer className="mt-10" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-2xl mx-auto px-6 h-12 flex items-center justify-between">
        <div
          className="text-sm text-center flex items-center justify-center flex-1"
          style={{ color: "var(--faint)" }}
        >
          © {new Date().getFullYear()} Phan Tấn Tài — Full-Stack Developer. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
