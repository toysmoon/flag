"use client";

import { useRouter, useParams } from "next/navigation";
import { flags } from "@/app/flags";
import { formatDateDirectory } from "@/utils/format";
import Image from "next/image";

export default function DetailPage() {
  const router = useRouter();
  const { flagId } = useParams();
  const flag = flags.find((_, index) => index === Number(flagId));

  if (!flag) {
    return <div>Flag not found</div>;
  }

  return (
    <main className="container" style={{ padding: 0 }}>
      <div style={{ position: "relative", height: "100vh" }}>
        <Image
          src={`/flags/${formatDateDirectory(flag.updated)}/${flag.src}`}
          alt={flag.src.replace(".png", "")}
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />

        <div style={{ position: "absolute", top: "24px", left: "24px" }}>
          <button
            onClick={() => router.back()}
            style={{
              width: "48px",
              height: "48px",
              fontSize: "24px",
              fontWeight: 800,
              borderRadius: "50%",
              border: "3px solid white",
              backgroundColor: "white",
              padding: "0 12px",
            }}
          >
            X
          </button>
        </div>
      </div>
    </main>
  );
}
