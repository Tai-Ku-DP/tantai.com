import { Github, Twitter, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mb-3" style={{ color: "var(--fg)" }}>
        Contact
      </h1>
      <p
        className="text-sm leading-relaxed max-w-md mb-10"
        style={{ color: "var(--muted)" }}
      >
        I&apos;m always open to new opportunities, collaborations, or just a
        friendly chat. Feel free to reach out through any of the channels below.
      </p>

      {/* Contact links */}
      <div className="space-y-3 mb-12">
        {[
          {
            icon: <Mail size={14} />,
            label: "Email",
            value: "hello@phantantai.com",
            href: "mailto:hello@phantantai.com",
          },
          {
            icon: <Github size={14} />,
            label: "GitHub",
            value: "github.com/phantantai",
            href: "https://github.com",
          },
          {
            icon: <Twitter size={14} />,
            label: "Twitter / X",
            value: "@taidevelopment",
            href: "https://x.com/taidevelopment",
          },
          {
            icon: <MapPin size={14} />,
            label: "Location",
            value: "Việt Nam",
            href: null,
          },
        ].map(({ icon, label, value, href }) => (
          <div
            key={label}
            className="flex items-center gap-4 py-3"
            style={{ borderBottom: "1px solid var(--border-subtle)" }}
          >
            <span className="w-4 shrink-0" style={{ color: "var(--faint)" }}>
              {icon}
            </span>
            <span
              className="text-xs w-20 shrink-0"
              style={{ color: "var(--faint)" }}
            >
              {label}
            </span>
            {href ? (
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-sm transition-opacity hover:opacity-70"
                style={{ color: "var(--muted-fg)" }}
              >
                {value}
              </a>
            ) : (
              <span className="text-sm" style={{ color: "var(--muted-fg)" }}>
                {value}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
