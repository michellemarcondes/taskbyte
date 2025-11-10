import Image from 'next/image';

export default function Hero() {
  return (
    <section 
      className="hero"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.2) 65%, rgba(0,0,0,0.1) 100%), url('/hero-image.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
        minHeight: '620px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '40px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
          <h5 className="eyebrow" style={{ marginBottom: '16px' }}>
            EVOLUA SUA GESTÃO DE DADOS
          </h5>

          <h1 style={{ marginBottom: '16px' }}>
            PARE DE LIMITAR,<br />
            COMECE A ESCALAR
          </h1>

          <p className="lead" style={{ marginBottom: '24px' }}>
            Com a TaskByte, substitua o 'insubstituível' Excel. Gerencie dados com eficiência real.
          </p>

          <a href="#contato" className="btn-primary">
            FAÇA PARTE DO NOSSO AMBIENTE
            <span style={{ marginLeft: '8px' }}>›</span>
          </a>
        </div>
      </div>
    </section>
  );
}
