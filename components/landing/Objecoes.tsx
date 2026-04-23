'use client'

const faqs = [
  {
    q: '"Fica artificial? Vou parecer com dentes falsos?"',
    a: <>Absolutamente não. Priorizamos a <strong style={{ color: 'var(--rose-dark)', fontWeight: 600 }}>naturalidade acima de tudo</strong>. Escolhemos junto com você a cor e o formato que mais combinam com seu rosto, pele e personalidade. O objetivo é um sorriso que pareça ser seu de sempre.</>,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
      </svg>
    ),
  },
  {
    q: '"O procedimento dói? Tenho medo de dentista."',
    a: <>As lentes de resina são um procedimento <strong style={{ color: 'var(--rose-dark)', fontWeight: 600 }}>minimamente invasivo e praticamente indolor</strong>. Utilizamos anestesia tópica e técnicas que garantem seu conforto do início ao fim. Muitos pacientes se surpreendem com o quão tranquilo é.</>,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    q: '"Quanto tempo dura o tratamento?"',
    a: <>A aplicação é feita em <strong style={{ color: 'var(--rose-dark)', fontWeight: 600 }}>1 a 2 sessões</strong>. Com os cuidados corretos — escovação adequada e visitas periódicas de manutenção — as lentes duram de <strong style={{ color: 'var(--rose-dark)', fontWeight: 600 }}>5 a 8 anos</strong> ou mais, mantendo a aparência e a qualidade ao longo do tempo.</>,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    q: '"Preciso desgastar meus dentes?"',
    a: <>Não necessariamente. Uma das grandes vantagens das lentes de resina é <strong style={{ color: 'var(--rose-dark)', fontWeight: 600 }}>preservar ao máximo o esmalte original</strong>. Em muitos casos, o procedimento é realizado sem nenhum desgaste, o que o torna também reversível.</>,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    q: '"Qual o investimento? Tem parcelamento?"',
    a: <>O valor varia conforme o número de dentes e a complexidade do caso. Na avaliação gratuita, você recebe um <strong style={{ color: 'var(--rose-dark)', fontWeight: 600 }}>orçamento personalizado e transparente</strong>, com opções de parcelamento facilitado em até 18x sem juros.</>,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    q: '"Posso ver como vai ficar antes de fazer?"',
    a: <>Sim! Utilizamos <strong style={{ color: 'var(--rose-dark)', fontWeight: 600 }}>planejamento digital do sorriso</strong>. Você visualiza o resultado esperado ainda na consulta de avaliação, antes de qualquer procedimento, para aprovar e ajustar cada detalhe.</>,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
]

export default function Objecoes() {
  return (
    <section id="objecoes" style={{ background: 'var(--white)', padding: '110px 0' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 5%' }}>
        <div style={{ maxWidth: 560, marginBottom: 60 }}>
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
            Dúvidas comuns
          </span>
          <h2
            className="reveal d1"
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 300,
              fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
              lineHeight: 1.1,
              marginTop: 16,
            }}
          >
            Respondendo suas{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>perguntas</em>
          </h2>
          <div
            className="reveal d2"
            style={{
              width: 50,
              height: 1,
              background: 'linear-gradient(to right, var(--rose), transparent)',
              marginTop: 22,
            }}
          />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
          className="obj-grid"
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`reveal d${i}`}
              style={{
                border: '1px solid var(--light)',
                borderRadius: 10,
                padding: '36px 28px',
                transition: 'all .4s',
                position: 'relative',
                overflow: 'hidden',
                background: 'var(--white)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--rose-mid)'
                el.style.background = 'var(--rose-pale)'
                const bar = el.querySelector('.obj-bar') as HTMLElement
                if (bar) bar.style.transform = 'scaleX(1)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--light)'
                el.style.background = 'var(--white)'
                const bar = el.querySelector('.obj-bar') as HTMLElement
                if (bar) bar.style.transform = 'scaleX(0)'
              }}
            >
              {/* Bottom accent bar */}
              <div
                className="obj-bar"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: 'linear-gradient(to right, var(--rose), var(--rose-mid))',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform .4s',
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'var(--rose-light)',
                  border: '1px solid var(--rose-mid)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--rose)',
                  marginBottom: 22,
                }}
              >
                {faq.icon}
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '1.25rem',
                  color: 'var(--black)',
                  marginBottom: 16,
                  lineHeight: 1.35,
                  fontWeight: 400,
                }}
              >
                {faq.q}
              </p>
              <p style={{ fontSize: '.88rem', lineHeight: 1.8, color: 'var(--mid)', fontWeight: 300 }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
