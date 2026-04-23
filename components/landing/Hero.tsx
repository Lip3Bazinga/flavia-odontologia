'use client'

import { WhatsAppIcon } from './icons'

const WA_LINK =
  'https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20minha%20avaliação%20gratuita.'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {/* Left — white */}
      <div
        style={{
          background: 'var(--white)',
          padding: '140px 8% 80px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 2,
        }}
        className="hero-left"
      >
        {/* Eyebrow */}
        <div
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
            marginBottom: 32,
          }}
        >
          <span style={{ display: 'block', width: 28, height: 1, background: 'var(--rose)' }} />
          Lentes de Resina Dental
        </div>

        {/* Title */}
        <h1
          className="reveal d1"
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 300,
            lineHeight: 1.1,
            fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
            color: 'var(--black)',
            marginBottom: 24,
          }}
        >
          Transforme seu sorriso com
          <br />
          <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>naturalidade</em> e
          <br />
          <strong style={{ fontWeight: 600 }}>sofisticação</strong>
        </h1>

        {/* Sub */}
        <p
          className="reveal d2"
          style={{
            fontSize: '1rem',
            lineHeight: 1.8,
            color: 'var(--mid)',
            fontWeight: 300,
            maxWidth: 440,
            marginBottom: 40,
          }}
        >
          Tratamentos estéticos personalizados que respeitam sua essência — porque o mais bonito
          sorriso é aquele que parece sempre ter sido seu.
        </p>

        {/* Actions */}
        <div
          className="reveal d3"
          style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'var(--font-sans)',
              fontSize: '.78rem',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              fontWeight: 600,
              background: 'var(--rose)',
              color: '#FFFFFF',
              padding: '17px 36px',
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
            <WhatsAppIcon size={18} />
            Agendar avaliação no WhatsApp
          </a>
          <a
            href="#antes-depois"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'var(--font-sans)',
              fontSize: '.78rem',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              fontWeight: 600,
              background: 'transparent',
              color: 'var(--dark)',
              padding: '16px 34px',
              borderRadius: 3,
              border: '1px solid var(--charcoal)',
              textDecoration: 'none',
              transition: 'all .35s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'var(--rose)'
              el.style.color = 'var(--rose)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'var(--charcoal)'
              el.style.color = 'var(--dark)'
            }}
          >
            Ver resultados
          </a>
        </div>

        {/* Scroll hint */}
        <div
          className="reveal d4"
          style={{
            marginTop: 64,
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            fontSize: '.68rem',
            letterSpacing: '.12em',
            textTransform: 'uppercase',
            color: 'var(--mid)',
          }}
        >
          <div
            style={{
              width: 40,
              height: 1,
              background: 'linear-gradient(to right, var(--rose), transparent)',
            }}
          />
          <span>Role para descobrir</span>
        </div>

        {/* Corner accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 120,
            height: 120,
            background: 'linear-gradient(135deg, transparent 50%, var(--rose-light) 50%)',
          }}
        />
      </div>

      {/* Right — image */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
        }}
        className="hidden md:block"
      >
        {/* Background image */}
        <img
          src="/images/hero-doctor.jpg"
          alt="Dra. Ana Clara - Especialista em Harmonização Facial"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
          }}
        />
        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(10,10,10,.1) 0%, rgba(10,10,10,.4) 100%)',
          }}
        />
        
        {/* Decorative line */}
        <div
          style={{
            position: 'absolute',
            right: '10%',
            top: '25%',
            width: 1,
            height: '45%',
            background:
              'linear-gradient(to bottom, transparent, rgba(196,128,138,.5), transparent)',
          }}
        />

        {/* Floating badge */}
        <div
          style={{
            position: 'absolute',
            bottom: 80,
            left: 40,
            background: 'rgba(255,255,255,.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,.2)',
            borderRadius: 8,
            padding: '16px 20px',
            animation: 'breathe 4s ease-in-out infinite',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: 'rgba(255,255,255,.9)',
              marginBottom: 4,
            }}
          >
            resultado natural
          </div>
          <div
            style={{
              fontSize: '.65rem',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--rose-mid)',
            }}
          >
            Lentes de Resina
          </div>
        </div>

        {/* Large italic text overlay */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            right: 40,
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '5rem',
            fontWeight: 300,
            color: 'rgba(255,255,255,.15)',
            lineHeight: 1,
            textAlign: 'right',
            pointerEvents: 'none',
          }}
        >
          sorri&shy;sos
        </div>
      </div>
    </section>
  )
}
