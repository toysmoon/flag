"use client";

import { useEffect, useRef } from "react";
import { initAnimationFlag } from "./animation";
import { formatDateDirectory } from "@/utils/format";

export function AnimatedFlag({
  src,
  updated,
  onClick,
}: {
  src: string;
  updated: string;
  onClick: () => void;
}) {
  const isRenderedRef = useRef(false);
  const cleanupRef = useRef<(() => void) | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isNew = updated === "2025-02-09";

  useEffect(() => {
    if (containerRef.current == null) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isRenderedRef.current) {
            isRenderedRef.current = true;

            initAnimationFlag(
              containerRef.current!,
              `/flags/${formatDateDirectory(updated)}/${src}`
            ).then((cleanup) => {
              cleanupRef.current = cleanup;
            });
          } else {
            cleanupRef.current?.();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      cleanupRef.current?.();
    };
  }, [src, updated]);

  return (
    // only animation when impression
    <div ref={containerRef} style={{ position: "relative" }} onClick={onClick}>
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
