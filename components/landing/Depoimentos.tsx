'use client'

import { StarIcon } from './icons'

const testimonials = [
  { text: 'Fiz as lentes de resina com a Dra. Flávia e o resultado é simplesmente incrível. Natural, bonito e exatamente o que eu queria. Parece que sempre foram meus dentes.', name: 'Mariana Costa', treat: 'Lentes de Resina', initials: 'MC' },
  { text: 'Tinha muito medo de dentista, mas a Dra. Flávia me deixou completamente à vontade desde o primeiro momento. O procedimento foi sem dor e o resultado superou tudo que eu esperava.', name: 'Letícia Torres', treat: 'Lentes + Clareamento', initials: 'LT' },
  { text: 'Fiz o planejamento digital e amei poder ver o resultado antes mesmo de começar. O sorriso ficou natural, sem aquele aspecto exagerado. Me sinto muito mais confiante.', name: 'Beatriz Alves', treat: 'Lentes de Resina', initials: 'BA' },
  { text: 'Profissional incrível, ambiente super aconchegante e resultado impecável. Já indiquei para toda a família. É raríssimo encontrar uma dentista tão dedicada.', name: 'Paula Fernandes', treat: 'Estética Dental', initials: 'PF' },
  { text: 'O que mais me surpreendeu foi a naturalidade do resultado. Não parece "feito". Vários amigos me perguntam se fiz alguma coisa e quando conto ficam chocados.', name: 'Renata Souza', treat: 'Lentes de Resina', initials: 'RS' },
  { text: 'Atendimento humanizado de verdade. A Dra. Flávia ouviu tudo que eu queria e entregou além. Cada detalhe foi pensado para combinar com meu rosto e minha personalidade.', name: 'Amanda Lima', treat: 'Planejamento Estético', initials: 'AL' },
  { text: 'Me arrependo de ter esperado tanto tempo. A avaliação é gratuita, o ambiente é lindo, e o resultado é transformador. Valeu cada centavo do investimento.', name: 'Gabriela Nunes', treat: 'Lentes de Resina', initials: 'GN' },
  { text: 'Sempre tive vergonha de sorrir nas fotos. Depois das lentes da Dra. Flávia, mostro o sorriso em tudo quanto é foto. Mudou minha vida de verdade.', name: 'Caroline Matos', treat: 'Lentes de Resina', initials: 'CM' },
]

const all = [...testimonials, ...testimonials]

export default function Depoimentos() {
  return (
    <section
      id="depoimentos"
      style={{ padding: '110px 0', background: 'var(--rose-pale)', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 5%' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span
            className="reveal"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'var(--font-sans)',
              fontSize: '.68rem',
              letterSpacing: '.18em',
              textTransform: 'uppercase',
              color: 'var(--rose)',
              fontWeight: 500,
            }}
          >
            <span style={{ display: 'block', width: 28, height: 1, background: 'var(--rose)' }} />
            Depoimentos
            <span style={{ display: 'block', width: 28, height: 1, background: 'var(--rose)' }} />
          </span>
          <h2
            className="reveal d1"
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 300,
              fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
              marginTop: 12,
              lineHeight: 1.1,
            }}
          >
            O que dizem nossos{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>pacientes</em>
          </h2>
        </div>
      </div>

      {/* Scrolling track */}
      <div style={{ position: 'relative' }}>
        {/* Fade edges */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: 100,
            background: 'linear-gradient(to right, var(--rose-pale), transparent)',
            zIndex: 5,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            width: 100,
            background: 'linear-gradient(to left, var(--rose-pale), transparent)',
            zIndex: 5,
            pointerEvents: 'none',
          }}
        />

        <div
          className="reveal d2"
          style={{
            display: 'flex',
            gap: 24,
            animation: 'slideLeft 32s linear infinite',
            width: 'max-content',
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLElement).style.animationPlayState = 'paused'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLElement).style.animationPlayState = 'running'
          }}
        >
          {all.map((t, i) => (
            <div
              key={i}
              style={{
                width: 330,
                flexShrink: 0,
                padding: '34px 30px',
                borderRadius: 8,
                background: 'var(--rose-pale)',
                border: '1px solid var(--rose-mid)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '4rem',
                  color: 'var(--rose-mid)',
                  lineHeight: 1,
                  position: 'absolute',
                  top: 16,
                  right: 22,
                  pointerEvents: 'none',
                }}
              >
                &ldquo;
              </div>
              <div style={{ color: 'var(--rose)', fontSize: '.8rem', letterSpacing: 2, marginBottom: 14 }}>
                ★★★★★
              </div>
              <p
                style={{
                  fontSize: '.9rem',
                  lineHeight: 1.8,
                  color: 'var(--charcoal)',
                  fontStyle: 'italic',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 400,
                  marginBottom: 22,
                }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: '50%',
                    background: 'var(--rose-mid)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.1rem',
                    color: 'var(--rose-dark)',
                    fontWeight: 600,
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: '.85rem', fontWeight: 600, color: 'var(--dark)' }}>{t.name}</div>
                  <div style={{ fontSize: '.73rem', color: 'var(--rose)', letterSpacing: '.06em', marginTop: 2 }}>{t.treat}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
