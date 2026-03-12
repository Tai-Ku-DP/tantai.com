import type { Metadata } from "next";
import { Mail, Github, Twitter, Linkedin, FileDown } from "lucide-react";
import ProfileCover from "@/components/ProfileCover";
import SkillBadge from "@/components/SkillBadge";
import WorkItem from "@/components/WorkItem";
import { skills } from "@/data/skills";
import { workHistory } from "@/data/work";

export const metadata: Metadata = {
  title: "// PTT — Phan Tấn Tài",
  description:
    "Phan Tấn Tài — Full-stack engineer with 8+ years of experience building modern web applications.",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[10px] tracking-[0.14em] uppercase font-medium mb-4"
      style={{ color: "var(--faint)" }}
    >
      {children}
    </p>
  );
}

function Divider() {
  return <div className="my-8 border-t border-gray-200" />;
}

export default function HomePage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-6">
      {/* ── Cover + Avatar ───────────────────────────── */}
      <ProfileCover
        avatarSrc="/avatar.jpg"
        avatarInitials="PTT"
        avatarSize={100}
      />

      <h1 className="text-2xl font-bold mb-3" style={{ color: "var(--fg)" }}>
        Hey, I&apos;m{" "}
        <span style={{ color: "var(--accent)" }}>Phan Tấn Tài</span>!
      </h1>

      <div
        className="font-mono text-sm space-y-1 mb-6"
        style={{ color: "var(--muted)" }}
      >
        <p>A full-stack engineer based in Việt Nam 🇻🇳</p>
        <p>
          I specialize in building web applications with{" "}
          <span
            className="inline-flex items-center gap-1 px-1 py-0.5 rounded text-xs font-medium"
            style={{
              border: "1px solid #149eca",
            }}
          >
            {/* React logo SVG */}
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="2.5" fill="#61dafb" />
              <ellipse
                cx="12"
                cy="12"
                rx="10"
                ry="4"
                stroke="#61dafb"
                strokeWidth="1.5"
                fill="none"
              />
              <ellipse
                cx="12"
                cy="12"
                rx="10"
                ry="4"
                stroke="#61dafb"
                strokeWidth="1.5"
                fill="none"
                transform="rotate(60 12 12)"
              />
              <ellipse
                cx="12"
                cy="12"
                rx="10"
                ry="4"
                stroke="#61dafb"
                strokeWidth="1.5"
                fill="none"
                transform="rotate(120 12 12)"
              />
            </svg>
            React
          </span>{" "}
          ecosystem.
        </p>
        <p>
          If you need a reliable developer to build your product, I&apos;m here
          to help.
        </p>
      </div>

      {/* CTA buttons */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <a
          href="mailto:tantai.development@gmail.com"
          className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-md transition-opacity hover:opacity-80"
          style={{
            color: "var(--fg)",
            backgroundColor: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <Mail size={12} />
          Send an email
        </a>
        <a
          href="/resume.pdf"
          className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-md transition-opacity hover:opacity-80"
          style={{
            color: "var(--muted)",
            backgroundColor: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <FileDown size={12} />
          Download CV
        </a>
      </div>

      <Divider />

      {/* ── Tech Stack ───────────────────────────────── */}
      <section
        className="rounded-lg p-5"
        style={{
          border: "1px solid var(--border)",
          backgroundColor: "var(--surface)",
        }}
      >
        <SectionLabel>Tech Stack</SectionLabel>
        <p className="text-xs mb-4 font-mono" style={{ color: "var(--muted)" }}>
          The tech stack I use for my personal and client work:
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillBadge key={skill.name} {...skill} />
          ))}
        </div>
      </section>

      <Divider />

      {/* ── Work History ─────────────────────────────── */}
      <section
        className="rounded-lg p-5"
        style={{
          border: "1px solid var(--border)",
          backgroundColor: "var(--surface)",
        }}
      >
        <SectionLabel>Work History</SectionLabel>
        <p className="text-xs mb-6 font-mono" style={{ color: "var(--muted)" }}>
          My professional experience over the past 8+ years:
        </p>
        <div>
          {workHistory.map((entry, i) => (
            <WorkItem key={i} {...entry} />
          ))}
        </div>
      </section>

      <Divider />

      {/* ── Find me on ───────────────────────────────── */}
      <section>
        <SectionLabel>Find me on</SectionLabel>
        <p className="text-xs mb-4 font-mono" style={{ color: "var(--muted)" }}>
          You can find me on the following social platforms:
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            {
              href: "https://x.com/phantantai",
              label: "X / Twitter",
              icon: <Twitter size={12} />,
            },
            {
              href: "https://github.com/phantantai",
              label: "GitHub",
              icon: <Github size={12} />,
            },
            {
              href: "https://linkedin.com/in/phantantai",
              label: "LinkedIn",
              icon: <Linkedin size={12} />,
            },
          ].map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs rounded-md transition-opacity hover:opacity-70"
              style={{
                color: "var(--muted-fg)",
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              {icon}
              {label}
            </a>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── Get in touch ─────────────────────────────── */}
      <section className="pb-4">
        <SectionLabel>Get in touch</SectionLabel>
        <p className="text-sm font-mono mb-1" style={{ color: "var(--muted)" }}>
          You can reach me anytime at{" "}
          <a
            href="mailto:hello@phantantai.com"
            className="underline underline-offset-2 transition-opacity hover:opacity-70"
            style={{ color: "var(--fg)" }}
          >
            hello@phantantai.com
          </a>
        </p>
      </section>
    </div>
  );
}
