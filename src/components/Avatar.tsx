"use client";

import Image from "next/image";
import { useState } from "react";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  initials?: string;
}

export default function Avatar({
  src = "/avatar.jpg",
  alt = "Profile photo",
  size = 80,
  initials = "PTT",
}: AvatarProps) {
  const [imgError, setImgError] = useState(false);

  if (imgError || !src) {
    return (
      <div
        style={{
          width: size,
          height: size,
          backgroundColor: "var(--surface)",
          border: "2px solid var(--border)",
        }}
        className="rounded-full flex items-center justify-center shrink-0 overflow-hidden"
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40" cy="40" r="40" fill="var(--surface)" />
          <circle cx="40" cy="33" r="14" fill="var(--accent)" fillOpacity="0.12" />
          <text
            x="40"
            y="38"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="var(--accent)"
            fontSize={initials.length > 2 ? "13" : "16"}
            fontWeight="700"
            fontFamily="monospace"
          >
            {initials}
          </text>
          <ellipse cx="40" cy="72" rx="22" ry="14" fill="var(--accent)" fillOpacity="0.08" />
        </svg>
      </div>
    );
  }

  return (
    <div
      style={{
        width: size,
        height: size,
        border: "2px solid var(--border)",
      }}
      className="rounded-full overflow-hidden shrink-0 relative"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setImgError(true)}
        unoptimized
      />
    </div>
  );
}
