import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <main>
        <div style={{ padding: '100px 20px 80px' }}>
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: 900 }}>깃발연합</h1>
          </div>
          <p style={{ fontSize: '18px', fontWeight: 500 }}>
            온라인에서 시위 속 연대를 기록합니다. 시위 현장에서 깃발 사진을
            찍었다면 누구나 깃발연합에 함께할 수 있습니다.
          </p>
        </div>

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
