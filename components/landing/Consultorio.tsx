'use client'

const tall = {
  image: '/images/local_5.jpeg',
  title: 'Tecnologia &amp; <em>cuidado</em>',
  text: 'Cadeiras ergonômicas, telas de monitoramento e equipamentos de última geração para diagnósticos precisos e tratamentos ágeis.',
}

const grid = [
  {
    image: '/images/local_1.jpeg',
    title: 'Acolhimento desde a <em>entrada</em>',
    text: 'Ambiente pensado para que você se sinta à vontade antes mesmo de começar o atendimento. Iluminação suave, aromas e música ambiente.',
  },
  {
    image: '/images/local_2.jpeg',
    title: 'Conforto para sua <em>espera</em>',
    text: 'Espaço reservado e tranquilo para seu descanso, com privacidade e todo o conforto que você merece.',
  },
  {
    image: '/images/local_3.jpeg',
    title: 'Recepção com <em>identidade</em>',
    text: 'Fácil acesso, estacionamento conveniado e atendimento com hora marcada para que sua visita seja sempre prática e agradável.',
  },
  {
    image: '/images/local_4.jpeg',
    title: 'Ambientes pensados para <em>você</em>',
    text: 'Scanner 3D intraoral e software de simulação para você visualizar o resultado final antes de qualquer procedimento começar.',
  },
]

const emStyle = (s: string) =>
  s.replace(/<em>/g, '<em style="font-style:italic;color:var(--rose-mid)">')

function Tile({
  image,
  title,
  text,
  style,
  feature,
}: {
  image: string
  title: string
  text?: string
  style?: React.CSSProperties
  feature?: boolean
}) {
  return (
    <div
      className="consultorio-tile"
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 12,
        minHeight: 0,
        ...style,
      }}
    >
      <img
        src={image}
        alt=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(0,0,0,.78) 0%, rgba(0,0,0,.18) 55%, rgba(0,0,0,0) 100%)',
        }}
      />
      {/* Overlay extra revelado no hover (apenas metade inferior) para legibilidade do texto */}
      <div
        className="consultorio-overlay"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '50%',
          background:
            'linear-gradient(to top, rgba(0,0,0,.7) 0%, rgba(0,0,0,.3) 100%)',
        }}
      />
      <div
        className="consultorio-content"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          padding: '24px 26px',
          zIndex: 1,
        }}
      >
        <h3
          className="consultorio-title"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: feature ? 'clamp(1.5rem,2.4vw,2.1rem)' : 'clamp(1.1rem,1.6vw,1.4rem)',
            fontWeight: 300,
            color: 'var(--white)',
            lineHeight: 1.15,
            marginBottom: 10,
          }}
          dangerouslySetInnerHTML={{ __html: emStyle(title) }}
        />
        {text && (
          <p
            className="consultorio-text"
            style={{
              fontSize: feature ? '.85rem' : '.78rem',
              color: 'rgba(255,255,255,.6)',
              lineHeight: 1.65,
              fontWeight: 300,
              maxWidth: 360,
            }}
          >
            {text}
          </p>
        )}
      </div>
    </div>
  )
}

export default function Consultorio() {
  return (
    <section
      id="consultorio"
      style={{ background: 'var(--dark)', padding: '110px 0' }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 5%' }}>
        {/* Header */}
        <div style={{ marginBottom: 48, maxWidth: 620 }}>
          <span
            className="reveal"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontSize: '.68rem',
              letterSpacing: '.18em',
              textTransform: 'uppercase',
              color: 'var(--rose-mid)',
              fontWeight: 500,
            }}
          >
            <span style={{ display: 'block', width: 28, height: 1, background: 'var(--rose-mid)' }} />
            Nosso Espaço
          </span>
          <h2
            className="reveal d1"
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 300,
              fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
              lineHeight: 1.1,
              color: 'var(--white)',
              marginTop: 16,
            }}
          >
            Um ambiente pensado para{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--rose-mid)' }}>você</em>
          </h2>
        </div>

        {/* Mosaic: tall image (~30%) on the left, 2x2 grid on the right */}
        <div className="consultorio-mosaic">
          <Tile
            image={tall.image}
            title={tall.title}
            text={tall.text}
            feature
            style={{ gridArea: 'tall' }}
          />
          {grid.map((room, i) => (
            <Tile
              key={room.image}
              image={room.image}
              title={room.title}
              text={room.text}
              style={{ gridArea: `g${i + 1}` }}
            />
          ))}
        </div>
      </div>

      <style>{`
        .consultorio-mosaic {
          display: grid;
          gap: 16px;
          grid-template-columns: 30% 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          grid-template-areas:
            'tall g1 g2'
            'tall g3 g4';
          height: 78vh;
          min-height: 560px;
        }
        .consultorio-tile {
          transform: perspective(900px) rotateX(0) rotateY(0) translateY(0);
          box-shadow: 0 0 0 rgba(0,0,0,0);
          transition: transform .5s cubic-bezier(.16,1,.3,1), box-shadow .5s cubic-bezier(.16,1,.3,1);
          will-change: transform;
          transform-style: preserve-3d;
        }
        .consultorio-tile:hover {
          transform: perspective(900px) rotateX(4deg) rotateY(-5deg) translateY(-8px);
          box-shadow: 0 24px 50px -12px rgba(196,128,138,.55);
          z-index: 2;
        }
        .consultorio-overlay {
          opacity: 0;
          transition: opacity .5s cubic-bezier(.16,1,.3,1);
          pointer-events: none;
        }
        .consultorio-tile:hover .consultorio-overlay {
          opacity: 1;
        }
        /* Mantém o texto nítido durante a rotação 3D e melhora o anti-aliasing */
        .consultorio-content {
          transform: translateZ(0.01px);
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }
        .consultorio-title,
        .consultorio-text {
          transition: color .5s cubic-bezier(.16,1,.3,1);
        }
        .consultorio-tile:hover .consultorio-title,
        .consultorio-tile:hover .consultorio-title em,
        .consultorio-tile:hover .consultorio-text {
          color: #FFF !important;
        }
        @media (max-width: 768px) {
          .consultorio-mosaic {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            grid-template-areas:
              'tall tall'
              'g1 g2'
              'g3 g4';
            height: auto;
            min-height: 0;
          }
          .consultorio-mosaic > .consultorio-tile {
            min-height: 240px;
          }
          .consultorio-mosaic > .consultorio-tile:first-child {
            min-height: 480px;
          }
        }
      `}</style>
    </section>
  )
}
