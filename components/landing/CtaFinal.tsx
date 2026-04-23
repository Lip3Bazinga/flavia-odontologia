'use client'

import { WhatsAppIcon } from './icons'

const WA_LINK =
  'https://wa.me/5511999999999?text=Olá!%20Quero%20transformar%20meu%20sorriso.%20Pode%20me%20ajudar?'

export default function CtaFinal() {
  return (
    <section
      id="cta-final"
      style={{
        background: 'var(--dark)',
        color: 'var(--white)',
        padding: '130px 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 100%, rgba(196,128,138,.12), transparent 60%)',
          pointerEvents: 'none',
        }}
      />
      {/* Deco circles */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 300,
          height: 300,
          borderRadius: '50%',
          border: '1px solid rgba(196,128,138,.08)',
          marginLeft: -150,
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: '30%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          border: '1px solid rgba(196,128,138,.1)',
          marginRight: -100,
        }}
      />

      <div
        style={{ position: 'relative', zIndex: 2, maxWidth: 680, margin: '0 auto', padding: '0 5%' }}
      >
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
            color: 'var(--rose-mid)',
            fontWeight: 500,
            marginBottom: 24,
          }}
        >
          <span style={{ display: 'block', width: 28, height: 1, background: 'var(--rose-mid)' }} />
          Dê o primeiro passo
        </span>

        <h2
          className="reveal d1"
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 300,
            fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
            color: 'var(--white)',
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          Seu sorriso pode mudar
          <br />a sua{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--rose-mid)' }}>vida.</em>
        </h2>

        <p
          className="reveal d2"
          style={{
            fontSize: '1rem',
            lineHeight: 1.8,
            color: 'rgba(255,255,255,.55)',
            fontWeight: 300,
            marginBottom: 48,
          }}
        >
          E tudo começa com uma decisão. Agende agora sua avaliação gratuita e descubra como as
          lentes de resina podem transformar não só o seu sorriso, mas a sua confiança.
        </p>

        <div className="reveal d3" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'var(--font-sans)',
              fontSize: '.85rem',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              fontWeight: 600,
              background: 'var(--rose)',
              color: '#FFFFFF',
              padding: '18px 40px',
              borderRadius: 3,
              textDecoration: 'none',
              transition: 'all .35s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'var(--rose-dark)'
              el.style.transform = 'translateY(-2px)'
              el.style.boxShadow = '0 12px 36px rgba(196,128,138,.35)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'var(--rose)'
              el.style.transform = 'none'
              el.style.boxShadow = 'none'
            }}
          >
            <WhatsAppIcon size={20} />
            Quero transformar meu sorriso
          </a>
        </div>

        <p
          className="reveal d4"
          style={{
            fontSize: '.75rem',
            letterSpacing: '.08em',
            color: 'rgba(255,255,255,.25)',
            marginTop: 28,
          }}
        >
          Avaliação 100% gratuita · Sem compromisso · Resultado previsível
        </p>
      </div>
    </section>
  )
}
