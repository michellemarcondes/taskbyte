import Image from 'next/image';

export default function Header() {
  return (
    <header className="container" style={{ paddingTop: '50px', marginBottom: '60px' }}>
      <div style={{ height: '120px', maxHeight: '130px' }}>
        <Image
          src="/logo.png"
          alt="TaskByte IT Solutions"
          width={600}
          height={120}
          priority
        />
      </div>
    </header>
  );
}
