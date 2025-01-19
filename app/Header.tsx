import { TwitterLogoSvg } from './TwitterLogoSvg';

export function Header() {
  return (
    <div style={{ padding: '100px 20px 80px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 900 }}>깃발연합</h1>
        <TwitterLogoSvg />
      </div>
      <p style={{ fontSize: '18px', fontWeight: 500, paddingRight: '20px' }}>
        온라인에서 시위 속 연대를 기록합니다. 시위 현장에서 깃발 사진을 찍었다면
        누구나 깃발연합에 함께할 수 있습니다.
      </p>
    </div>
  );
}
