'use client'

const tall = {
  image: '/images/local_5.webp',
  title: 'Tecnologia &amp; <em>cuidado</em>',
  text: 'Cadeiras ergonômicas, telas de monitoramento e equipamentos de última geração para diagnósticos precisos e tratamentos ágeis.',
}

const grid = [
  {
    image: '/images/local_1.webp',
    title: 'Acolhimento desde a <em>entrada</em>',
    text: 'Ambiente pensado para que você se sinta à vontade antes mesmo de começar o atendimento. Iluminação suave, aromas e música ambiente.',
  },
  {
    image: '/images/local_2.webp',
    title: 'Conforto para sua <em>espera</em>',
    text: 'Espaço reservado e tranquilo para seu descanso, com privacidade e todo o conforto que você merece.',
  },
  {
    image: '/images/local_3.webp',
    title: 'Recepção com <em>identidade</em>',
    text: 'Fácil acesso, estacionamento conveniado e atendimento com hora marcada para que sua visita seja sempre prática e agradável.',
  },
  {
    image: '/images/local_4.webp',
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
        alt={title}
        loading="lazy"
        decoding="async"
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

        {/* Featured card — estacionamento */}
        <div className="estacionamento-card reveal d1">
          <div className="estacionamento-media">
            <img
              src="/images/local_6.webp"
              alt="Estacionamento próprio, coberto e com acesso privativo à clínica"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="estacionamento-body">
            <span
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
              Estacionamento Exclusivo
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 300,
                fontSize: 'clamp(1.6rem, 2.6vw, 2.3rem)',
                lineHeight: 1.15,
                color: 'var(--white)',
                margin: '18px 0 14px',
              }}
            >
              Seu conforto e segurança começam{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--rose-mid)' }}>antes da consulta</em>
            </h3>
            <p
              style={{
                fontSize: '.92rem',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,.55)',
                fontWeight: 300,
                marginBottom: 24,
                maxWidth: 520,
              }}
            >
              Pensando na sua total tranquilidade, oferecemos uma estrutura de estacionamento
              exclusiva para nossos pacientes — para que o cuidado com você comece desde a chegada.
            </p>
            <ul className="estacionamento-list">
              {[
                {
                  t: 'Próprio e coberto',
                  d: 'Proteção total para você e seu veículo contra sol e chuva, com desembarque sempre confortável.',
                },
                {
                  t: 'Acesso privativo à clínica',
                  d: 'Discrição e praticidade: você estaciona e entra direto no nosso ambiente, sem se expor à rua.',
                },
                {
                  t: 'Segurança monitorada',
                  d: 'Ambiente controlado por sistemas de monitoramento, para você focar apenas no seu bem-estar.',
                },
              ].map((f) => (
                <li key={f.t}>
                  <span className="estacionamento-check" aria-hidden>✓</span>
                  <div>
                    <strong style={{ color: 'var(--white)', fontWeight: 500, fontSize: '.9rem' }}>{f.t}</strong>
                    <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.6, fontWeight: 300, marginTop: 2 }}>
                      {f.d}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p
              style={{
                fontSize: '.85rem',
                color: 'rgba(255,255,255,.7)',
                fontStyle: 'italic',
                fontFamily: 'var(--font-serif)',
                marginTop: 24,
              }}
            >
              Fique à vontade — sua vaga já está garantida.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        #consultorio {
          /* Proporção dos cards no mobile: a mesma do card do estacionamento
             (local_6.webp é 896x1195 ≈ 3/4). Mudou a foto de lá? Ajuste aqui. */
          --proporcao-mobile: 3 / 4;
        }
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
        .estacionamento-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          margin-top: 16px;
          border-radius: 12px;
          overflow: hidden;
          background: #131313;
          border: 1px solid rgba(255,255,255,.06);
        }
        .estacionamento-media {
          position: relative;
          min-height: 100%;
        }
        .estacionamento-media img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .estacionamento-body {
          padding: clamp(28px, 3.5vw, 52px);
        }
        .estacionamento-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .estacionamento-list li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .estacionamento-check {
          flex-shrink: 0;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(196,128,138,.15);
          color: var(--rose-mid);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: .7rem;
          margin-top: 1px;
        }
        @media (max-width: 768px) {
          .estacionamento-card {
            grid-template-columns: 1fr;
          }
          .estacionamento-media {
            aspect-ratio: var(--proporcao-mobile);
            min-height: 0;
          }
          .estacionamento-media img {
            position: relative;
          }
          /* Uma coluna: nesta proporção, dois cards por linha deixariam ~165px
             de largura — estreito demais para o título e o texto do overlay. */
          .consultorio-mosaic {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            grid-template-areas:
              'tall'
              'g1'
              'g2'
              'g3'
              'g4';
            height: auto;
            min-height: 0;
          }
          /* As fotos do mosaico têm proporções diferentes entre si (local_1..4
             são paisagem, local_5 é retrato). Sem isto cada card assume a
             altura natural da sua imagem e a seção fica desalinhada. */
          .consultorio-mosaic > .consultorio-tile {
            aspect-ratio: var(--proporcao-mobile);
          }
        }
      `}</style>
    </section>
  )
}
