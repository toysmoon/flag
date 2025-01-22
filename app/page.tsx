import Image from 'next/image';
import { Header } from './Header';
import { partition } from 'es-toolkit';
import { flags } from './flags';

export default function Home() {
  const [first, second] = partition(
    flags.map((f, i) => ({ src: f.src, index: i })),
    (f) => f.index % 2 === 0
  );

  return (
    <div>
      <main>
        <Header />

        <div className="grid grid-cols-2 divide-x divide-white">
          <div className="divide-y divide-white">
            {first.map((f) => (
              <Image
                key={f.src}
                src={`/flags/${f.src}`}
                alt={f.src.replace('.png', '')}
                width={0}
                height={0}
                sizes="50vw"
                style={{ width: '100%', height: 'auto' }}
              />
            ))}
          </div>
          <div className="divide-y divide-white">
            {second.map((f) => (
              <Image
                key={f.src}
                src={`/flags/${f.src}`}
                alt={f.src.replace('.png', '')}
                width={0}
                height={0}
                sizes="50vw"
                style={{ width: '100%', height: 'auto' }}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
