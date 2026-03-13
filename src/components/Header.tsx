"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Github, Moon } from "lucide-react";

// Dynamically imported with ssr:false to avoid Sun/Moon hydration mismatch
const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
  ssr: false,
  loading: () => (
    <span className="hover:opacity-70 transition-opacity" aria-hidden>
      <Moon size={13} />
    </span>
  ),
});

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-sm"
      style={{
        backgroundColor: "var(--bg-alpha)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-2xl mx-auto px-6 h-12 flex items-center justify-between">
        <Link href="/" className="hover:opacity-70 transition-opacity">
          <Image
            src="/logo-black.png"
            alt="PTT"
            width={40}
            height={40}
            style={{ filter: "invert(var(--icon-invert))" }}
          />
        </Link>

        <nav className="flex items-center gap-5">
          <Link
            href="/"
            className="text-xs font-medium tracking-widest uppercase transition-opacity hover:opacity-70"
            style={{
              color: pathname === "/" ? "var(--fg)" : "var(--muted)",
            }}
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="text-xs font-medium tracking-widest uppercase transition-opacity hover:opacity-70"
            style={{
              color: pathname === "/contact" ? "var(--fg)" : "var(--muted)",
            }}
          >
            Contact
          </Link>

          <div
            className="flex items-center gap-3"
            style={{ color: "var(--muted)" }}
          >
            <a
              href="https://github.com/Tai-Ku-DP/tantai.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:opacity-70 transition-opacity"
            >
              <Github size={13} />
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
