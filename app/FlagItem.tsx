"use client";

import { formatDateDirectory } from "@/utils/format";
import Image from "next/image";
import { AnimatedFlag } from "./AnimatedFlag";
import { useTransitionRouter } from "./useTransitionRouter";

export function FlagItem({
  src,
  updated,
  isOriginal,
  flagId,
}: {
  src: string;
  updated: string;
  isOriginal: boolean;
  flagId: number;
}) {
  const isNew = new Date(updated) >= new Date("2025-03-02");
  const moveTo = useTransitionRouter();

  if (isOriginal) {
    return (
      <AnimatedFlag
        src={src}
        updated={updated}
        onClick={() => moveTo(`/flags/${flagId}`)}
      />
    );
  }

  return (
    <div
      style={{ position: "relative" }}
      onClick={() => moveTo(`/flags/${flagId}`)}
    >
      <Image
        key={src}
        src={`/flags/${formatDateDirectory(updated)}/${src}`}
        alt={src.replace(".png", "")}
        width={0}
        height={0}
        sizes="50vw"
        style={{ width: "100%", height: "auto" }}
      />

      {isNew && (
        <div
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            border: "3px solid black",
            backgroundColor: "white",
            padding: "0 4px",
            fontSize: "13px",
            fontWeight: 800,
          }}
        >
          NEW
        </div>
      )}
    </div>
  );
}
