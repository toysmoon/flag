import Image from "next/image";
import { Header } from "./Header";
import { partition } from "es-toolkit";
import { flags } from "./flags";
import Head from "next/head";

export default function Home() {
  const [first, second] = partition(
    flags
      .sort(
        (a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime()
      )
      .map((f, i) => ({ src: f.src, index: i, updated: f.updated })),
    (f) => f.index % 2 === 0
  );

  return (
    <div>
      <Head>
        <title>깃발연합</title>
        <meta property="og:title" content="깃발연합" key="title" />
        <meta
          property="og:description"
          content="거리의 깃발 사진을 모읍니다. 함께 행진했던 깃발을 다시 보며 다른 거리, 다른 날에 있었더라도 여기에서는 모두 함께입니다."
          key="description"
        />
      </Head>

      <main className="container">
        <Header />

        <div className="grid grid-cols-2 divide-x divide-white">
          <div className="divide-y divide-white">
            {first.map((f) => (
              <FlagItem key={f.src} src={f.src} updated={f.updated} />
            ))}
          </div>
          <div className="divide-y divide-white">
            {second.map((f) => (
              <FlagItem key={f.src} src={f.src} updated={f.updated} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function FlagItem({ src, updated }: { src: string; updated: string }) {
  const isNew = updated === "2025-02-09";

  return (
    <div style={{ position: "relative" }}>
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

function formatDateDirectory(updatedAt: string) {
  const [year, month, date] = updatedAt.split("-");
  return `${month}${date}`;
}
