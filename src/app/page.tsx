import type { Metadata } from "next";
import { Mail, FileDown, Phone, MapPin, Clock } from "lucide-react";
import ProfileCover from "@/components/ProfileCover";
import SkillBadge from "@/components/SkillBadge";
import WorkItem from "@/components/WorkItem";
import { skills } from "@/data/skills";
import { workHistory } from "@/data/work";

export const metadata: Metadata = {
  title: "Tấn Tài - Fullstack Engineer",
  description:
    "Phan Tấn Tài — Fullstack engineer with 3+ years of experience building modern web and mobile applications.",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="uppercase font-medium mb-4">{children}</p>;
}

function Divider() {
  return <div className="my-4 border-t border-gray-200" />;
}

function InfoRow({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
}) {
  const content = (
    <span className="flex items-center gap-2.5 py-0.5">
      <span style={{ color: "var(--faint)" }} className="shrink-0">
        {icon}
      </span>
      <span style={{ color: "var(--muted-fg)" }}>{label}</span>
    </span>
  );
  if (href) {
    return (
      <a
        href={href}
        target={
          href.startsWith("mailto:") || href.startsWith("tel:")
            ? undefined
            : "_blank"
        }
        rel={
          href.startsWith("mailto:") || href.startsWith("tel:")
            ? undefined
            : "noopener noreferrer"
        }
        className="transition-opacity hover:opacity-70"
      >
        {content}
      </a>
    );
  }
  return content;
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

      <h1 className="text-xl font-bold mb-3" style={{ color: "var(--fg)" }}>
        Hey, I&apos;m{" "}
        <span className="text-(--accent) border-b-2 border-(--accent) pb-[2px]">
          Phan Tấn Tài
        </span>
      </h1>

      <div
        className="font-mono text-sm space-y-1 mb-6"
        style={{ color: "var(--muted)" }}
      >
        <p>A full-stack engineer based in Việt Nam 🇻🇳</p>
        <p>
          I specialize in web and mobile apps with{" "}
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

      {/* ── Info Grid ─────────────────────────────── */}
      <div className="rounded-lg  mb-4 font-mono text-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
          <InfoRow
            icon={<MapPin size={14} />}
            label="Ho Chi Minh City, Viet Nam"
          />
          <InfoRow icon={<Clock size={14} />} label="GMT+7" />
          <InfoRow
            icon={<Phone size={14} />}
            label="+84 338168704"
            href="tel:+84123456789"
          />
          <InfoRow
            icon={<Mail size={14} />}
            label="tantai.development@gmail.com"
            href="mailto:tantai.development@gmail.com"
          />
        </div>
      </div>

      <Divider />

      {/* ── Tech Stack ───────────────────────────────── */}
      <section>
        <h1 className="text-xl font-bold mb-3" style={{ color: "var(--fg)" }}>
          Stack
        </h1>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillBadge key={skill.name} {...skill} />
          ))}
        </div>
      </section>

      <Divider />

      {/* ── Work History ─────────────────────────────── */}
      <section>
        <h1 className="text-xl font-bold mb-3" style={{ color: "var(--fg)" }}>
          Experience
        </h1>

        <div>
          {workHistory.map((entry, i) => (
            <WorkItem key={i} {...entry} />
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
