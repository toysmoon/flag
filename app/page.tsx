import { partition } from "es-toolkit";
import { FlagItem } from "./FlagItem";
import { flags } from "./flags";
import { Header } from "./Header";

export default function Home() {
  const [first, second] = partition(
    flags.map((f, i) => ({
      src: f.src,
      id: i,
      updated: f.updated,
      isOriginal: f.isOriginal ?? false,
    })),
    (f) => f.id % 2 === 0
  );

  return (
    <div>
      <main className="container">
        <Header />

        <div className="grid grid-cols-2 divide-x divide-white">
          <div className="divide-y divide-white">
            {first.map((f) => (
              <FlagItem
                key={f.src}
                src={f.src}
                updated={f.updated}
                isOriginal={f.isOriginal}
                flagId={f.id}
              />
            ))}
          </div>
          <div className="divide-y divide-white">
            {second.map((f) => (
              <FlagItem
                key={f.src}
                src={f.src}
                updated={f.updated}
                isOriginal={f.isOriginal}
                flagId={f.id}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
