import Image from 'next/image';
import { Header } from './Header';

export default function Home() {
  return (
    <div>
      <main>
        <Header />

        <div className="grid grid-cols-2 divide-x divide-white">
          <div className="divide-y divide-white">
            <Image
              src="/flags/1.jpg"
              alt="깃발"
              width={0}
              height={0}
              sizes="50vw"
              style={{ width: '100%', height: 'auto' }}
            />
            <Image
              src="/flags/3.jpg"
              alt="깃발"
              width={0}
              height={0}
              sizes="50vw"
              style={{ width: '100%', height: 'auto' }}
            />
            <Image
              src="/flags/2.jpg"
              alt="깃발"
              width={0}
              height={0}
              sizes="50vw"
              style={{ width: '100%', height: 'auto' }}
            />
            <Image
              src="/flags/3.jpg"
              alt="깃발"
              width={0}
              height={0}
              sizes="50vw"
              style={{ width: '100%', height: 'auto' }}
            />
            <Image
              src="/flags/3.jpg"
              alt="깃발"
              width={0}
              height={0}
              sizes="50vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="divide-y divide-white">
            <Image
              src="/flags/1.jpg"
              alt="깃발"
              width={0}
              height={0}
              sizes="50vw"
              style={{ width: '100%', height: 'auto' }}
            />
            <Image
              src="/flags/2.jpg"
              alt="깃발"
              width={0}
              height={0}
              sizes="50vw"
              style={{ width: '100%', height: 'auto' }}
            />
            <Image
              src="/flags/3.jpg"
              alt="깃발"
              width={0}
              height={0}
              sizes="50vw"
              style={{ width: '100%', height: 'auto' }}
            />
            <Image
              src="/flags/4.jpg"
              alt="깃발"
              width={0}
              height={0}
              sizes="50vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
