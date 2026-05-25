import { Download } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

type DownloadCvButtonProps = {
  className?: string;
};

export default function DownloadCvButton({ className = "" }: DownloadCvButtonProps) {
  const { cv } = PERSONAL_INFO;

  return (
    <a
      href={cv.href}
      download={cv.fileName}
      className={`inline-flex items-center gap-1.5 px-2 py-1 text-xs rounded-full font-mono transition-opacity hover:opacity-70 ${className}`.trim()}
      style={{
        color: "var(--muted-fg)",
        border: "1px solid var(--border)",
      }}
    >
      <Download size={14} className="shrink-0" style={{ color: "var(--faint)" }} />
      {cv.label}
    </a>
  );
}
