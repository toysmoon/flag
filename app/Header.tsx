import Link from 'next/link';
import { TwitterLogoSvg } from './TwitterLogoSvg';

export function Header() {
  return (
    <div style={{ padding: '100px 20px 80px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 900 }}>깃발연합</h1>
        <Link href="https://x.com/twidy_official" target="_blank">
          <TwitterLogoSvg />
        </Link>
      </div>
      <p style={{ fontSize: '18px', fontWeight: 500, paddingRight: '20px' }}>
        거리의 깃발 사진을 모읍니다. 함께 행진했던 깃발을 다시 보며 다른 거리,
        다른 날에 있었더라도 여기에서는 모두 함께입니다.
      </p>
    </div>
  );
}
