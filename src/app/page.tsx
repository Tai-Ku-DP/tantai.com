import type { Metadata } from "next";
import { Mail, Phone, MapPin, Link as LinkIcon, Github } from "lucide-react";
import ProfileCover from "@/components/ProfileCover";
import DownloadCvButton from "@/components/DownloadCvButton";
import SkillBadge from "@/components/SkillBadge";
import WorkItem from "@/components/WorkItem";
import EducationItem from "@/components/EducationItem";
import { skills } from "@/data/skills";
import { workHistory } from "@/data/work";
import { educationHistory } from "@/data/education";
import { PERSONAL_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.fullName} - ${PERSONAL_INFO.position}`,
  description: `${PERSONAL_INFO.fullName} — ${PERSONAL_INFO.position} with 2.5+ years of experience building modern web and mobile applications.`,
};

function Divider() {
  return <div className="my-5 border-t border-gray-200" />;
}

const LinkedinIcon = ({
  size = 14,
  color = "#000000",
  strokeWidth = 2,
  background = "transparent",
  opacity = 1,
  rotation = 0,
  shadow = 0,
  flipHorizontal = false,
  flipVertical = false,
  padding = 0,
}) => {
  const transforms = [];
  if (rotation !== 0) transforms.push(`rotate(${rotation}deg)`);
  if (flipHorizontal) transforms.push("scaleX(-1)");
  if (flipVertical) transforms.push("scaleY(-1)");

  const viewBoxSize = 24 + padding * 2;
  const viewBoxOffset = -padding;
  const viewBox = `${viewBoxOffset} ${viewBoxOffset} ${viewBoxSize} ${viewBoxSize}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        opacity,
        transform: transforms.join(" ") || undefined,
        filter:
          shadow > 0
            ? `drop-shadow(0 ${shadow}px ${shadow * 2}px rgba(0,0,0,0.3))`
            : undefined,
        backgroundColor: background !== "transparent" ? background : undefined,
      }}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </g>
    </svg>
  );
};

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
        avatarSrc="/avatar-sport.jpg"
        avatarInitials="PTT"
        avatarSize={108}
      />

      <div className="flex items-center mb-3 gap-4">
        <h1 className="text-xl font-bold" style={{ color: "var(--fg)" }}>
          Hey, I&apos;m{" "}
          <span className="text-(--accent) border-b-2 border-(--accent) pb-[2px]">
            {PERSONAL_INFO.fullName}
          </span>
        </h1>

        <DownloadCvButton />
      </div>

      <p
        className="font-mono text-sm leading-relaxed mb-4"
        style={{ color: "var(--muted)" }}
      >
        Full-stack engineer with 2.5+ years of production experience at Simplamo
        Vietnam, shipping features across React / Next.js, React Native, and
        NestJS microservices. I build things that perform — from AI-powered
        assistants to automated reporting pipelines — and I obsess over the gap
        between code that works and code that actually scales.
      </p>

      {/* ── Info Grid ─────────────────────────────── */}
      <div className="rounded-lg  mb-4 font-mono text-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
          {/* Row 1: Email | LinkedIn */}
          <InfoRow
            icon={<Mail size={14} />}
            label={PERSONAL_INFO.email.label}
            href={PERSONAL_INFO.email.href}
          />
          <InfoRow
            icon={<LinkedinIcon size={14} />}
            label={PERSONAL_INFO.linkedin.label}
            href={PERSONAL_INFO.linkedin.href}
          />

          {/* Row 2: Location | Phone */}
          <InfoRow icon={<MapPin size={14} />} label={PERSONAL_INFO.location} />
          <InfoRow
            icon={<Phone size={14} />}
            label={PERSONAL_INFO.phone.label}
            href={PERSONAL_INFO.phone.href}
          />

          {/* Row 3: Website | GitHub */}
          <InfoRow
            icon={<LinkIcon size={14} />}
            label={PERSONAL_INFO.website.label}
            href={PERSONAL_INFO.website.href}
          />
          <InfoRow
            icon={<Github size={14} />}
            label={PERSONAL_INFO.github.label}
            href={PERSONAL_INFO.github.href}
          />
        </div>
      </div>

      <Divider />

      {/* ── Tech Stack ───────────────────────────────── */}
      <section>
        <h1 className="text-xl font-bold mb-3" style={{ color: "var(--fg)" }}>
          Stack
        </h1>

        <div className="space-y-3">
          <div>
            <p
              className="text-xs tracking-[0.08em] uppercase font-semibold mb-2"
              style={{ color: "var(--muted)" }}
            >
              Proficient
            </p>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter((s) => s.level === "proficient")
                .map((skill) => (
                  <SkillBadge key={skill.name} {...skill} />
                ))}
            </div>
          </div>
          <div>
            <p
              className="text-xs tracking-[0.08em] uppercase font-semibold mb-2"
              style={{ color: "var(--muted)" }}
            >
              Familiar
            </p>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter((s) => s.level === "familiar")
                .map((skill) => (
                  <SkillBadge key={skill.name} {...skill} />
                ))}
            </div>
          </div>
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
            <WorkItem
              key={i}
              {...entry}
              isLast={i === workHistory.length - 1}
            />
          ))}
        </div>
      </section>

      <Divider />

      {/* ── Education ─────────────────────────────── */}
      <section>
        <h1 className="text-xl font-bold mb-3" style={{ color: "var(--fg)" }}>
          Education
        </h1>

        <div>
          {educationHistory.map((entry, i) => (
            <EducationItem key={i} {...entry} />
          ))}
        </div>
      </section>
    </div>
  );
}
