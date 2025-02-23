"use client";

import { useRouter } from "next/navigation";

export function useTransitionRouter() {
  const router = useRouter();

  return (path: string) => {
    startPageTransition(() => {
      router.push(path);
    });
  };
}

function startPageTransition(onClick: () => void) {
  // Fallback for browsers that don't support this API:
  if (!document.startViewTransition) {
    onClick();
    return;
  }

  // With a View Transition:
  document.startViewTransition(() => onClick());
}
