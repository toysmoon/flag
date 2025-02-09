import Image from 'next/image';
import { Header } from './Header';
import { partition } from 'es-toolkit';
import { flags } from './flags';

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
  const isNew = updated === '2025-02-09';

  return (
    <div style={{ position: 'relative' }}>
      <Image
        key={src}
        src={`/flags/${formatDateDirectory(updated)}/${src}`}
        alt={src.replace('.png', '')}
        width={0}
        height={0}
        sizes="50vw"
        style={{ width: '100%', height: 'auto' }}
      />
      {isNew && (
        <div
          style={{
            position: 'absolute',
            top: '8px',
            left: '8px',
            border: '3px solid black',
            backgroundColor: 'white',
            padding: '0 4px',
            fontSize: '13px',
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
  const splittedDate = updatedAt.split('-');
  return `${splittedDate[1]}${splittedDate[2]}`;
}
