"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";
import Avatar from "./Avatar";
import { AppleHelloVietnameseEffect } from "@/components/ui/apple-hello-effect";

interface ProfileCoverProps {
  avatarSrc?: string;
  avatarInitials?: string;
  avatarSize?: number;
}

export default function ProfileCover({
  avatarSrc = "/avatar.jpg",
  avatarInitials = "PTT",
  avatarSize = 84,
}: ProfileCoverProps) {
  const [replayKey, setReplayKey] = useState(0);
  const [replaying, setReplaying] = useState(false);

  const handleReplay = () => {
    setReplaying(true);
    setReplayKey((k) => k + 1);
  };

  return (
    <div className="relative mb-14">
      {/* Cover */}
      <div
        className="w-full rounded-lg overflow-hidden relative flex items-center justify-center"
        style={{
          height: 180,
        }}
      >
        <AppleHelloVietnameseEffect
          key={replayKey}
          className="h-16 w-auto"
          style={{ color: "var(--fg)" }}
          speed={0.9}
          onAnimationComplete={() => setReplaying(false)}
        />

        {/* Replay button — top-right corner */}
        <button
          onClick={handleReplay}
          disabled={replaying}
          aria-label="Replay animation"
          className="absolute top-3 right-3 flex items-center justify-center w-7 h-7 rounded-full transition-all"
          style={{
            backgroundColor: "var(--bg)",
            border: "1px solid var(--border)",
            color: replaying ? "var(--subtle)" : "var(--muted)",
            cursor: replaying ? "not-allowed" : "pointer",
          }}
        >
          <RotateCcw
            size={13}
            className={replaying ? "animate-spin" : ""}
            style={replaying ? { animationDirection: "reverse" } : undefined}
          />
        </button>
      </div>

      {/* Avatar — overlapping bottom-left of cover */}
      <div
        className="absolute left-5"
        style={{ bottom: -(avatarSize / 2 + 4) }}
      >
        <div
          className="rounded-full"
          style={{ padding: 3, backgroundColor: "var(--bg)" }}
        >
          <Avatar src={avatarSrc} initials={avatarInitials} size={avatarSize} />
        </div>
      </div>
    </div>
  );
}
