'use client'

import { useState } from 'react'
import { WhatsAppIcon } from './icons'

const WA_LINK =
  'https://wa.me/5516994046647?text=Olá!%20Quero%20agendar%20minha%20avaliação.'

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      id="wa-float"
      style={{
        position: 'fixed',
        bottom: 30,
        right: 50,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        animation: 'fadeUp .6s 2s both',
        // O tooltip continua ocupando espaço no flex mesmo invisível, então a
        // caixa deste container é bem mais larga que o botão. Sem isto ela
        // captura o mouse por cima do rodapé e bloqueia os links de lá.
        // Só o botão volta a receber eventos.
        pointerEvents: 'none',
      }}
    >
      <span
        aria-hidden={!hovered}
        style={{
          background: 'var(--dark)',
          color: 'var(--white)',
          padding: '9px 18px',
          borderRadius: 50,
          fontSize: '.78rem',
          whiteSpace: 'nowrap',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(10px)',
          transition: 'all .3s',
          pointerEvents: 'none',
          border: '1px solid rgba(255,255,255,.08)',
        }}
      >
        Agendar avaliação gratuita
      </span>

      {/* Button */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        style={{
          pointerEvents: 'auto',
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 24px rgba(37,211,102,.4)',
          transition: 'all .3s',
          position: 'relative',
          flexShrink: 0,
          color: 'white',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
        }}
        aria-label="Abrir WhatsApp"
      >
        {/* Pulse ring */}
        <div
          style={{
            position: 'absolute',
            inset: -5,
            borderRadius: '50%',
            border: '2px solid #25D366',
            animation: 'ripple 2s ease-out infinite',
          }}
        />
        <WhatsAppIcon size={26} />
      </a>
    </div>
  )
}
