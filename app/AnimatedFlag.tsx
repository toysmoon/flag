"use client";

import { formatDateDirectory } from "@/utils/format";
import Image from "next/image";
import { useState } from "react";

const flexCount = 200;
const 배경패딩 = 20;

export function AnimatedFlag({
  src,
  updated,
}: {
  src: string;
  updated: string;
}) {
  const [width, setWidth] = useState(0);
  const isNew = updated === "2025-02-09";

  const animationStyle = {
    width: `${100 / flexCount}%`,
    height: "100%",
    animation: "upDown 1s ease-in-out infinite alternate",
    backgroundImage: `url(/flags/${formatDateDirectory(updated)}/${src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      style={{ position: "relative", background: "rgba(0, 0, 0, 0.1)" }}
      ref={(container) => {
        if (container) {
          setWidth(container.clientWidth - 배경패딩 * 2);
        }
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: `${배경패딩}px`,
          display: "flex",
        }}
      >
        {Array.from({ length: flexCount }).map((_, i) => (
          <div
            key={i}
            style={{
              ...animationStyle,
              animationDelay: `${i * 10}ms`,
              backgroundPosition: `-${i * (width / flexCount)}px 0`,
            }}
          ></div>
        ))}
      </div>

      <Image
        key={src}
        src={`/flags/${formatDateDirectory(updated)}/${src}`}
        alt={src.replace(".png", "")}
        width={0}
        height={0}
        sizes="50vw"
        style={{ width: "100%", height: "auto", opacity: 0 }}
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
