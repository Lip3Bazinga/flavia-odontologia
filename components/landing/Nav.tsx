'use client'

import { useEffect, useState } from 'react'

const WA_LINK =
  'https://wa.me/5511999999999?text=Olá!%20Quero%20agendar%20minha%20avaliação.'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 72,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 5%',
        transition: 'all .4s',
        background: scrolled ? 'rgba(255,255,255,.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid #EBEBEB' : 'none',
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.1rem',
          letterSpacing: '.04em',
          color: scrolled ? '#1C1C1C' : '#FFFFFF',
          transition: 'color .4s',
        }}
      >
        Flávia Jardim{' '}
        <span style={{ color: 'var(--rose)', fontStyle: 'italic' }}>Odontologia</span>
      </div>

      {/* Links — hidden on mobile when scrolled */}
      <ul
        style={{
          display: 'flex',
          gap: 38,
          listStyle: 'none',
        }}
        className="nav-links-list"
      >
        {[
          { href: '#antes-depois', label: 'Resultados' },
          { href: '#consultorio', label: 'Consultório' },
          { href: '#sobre', label: 'Sobre' },
          { href: '#tratamento', label: 'Tratamento' },
          { href: '#objecoes', label: 'Dúvidas' },
        ].map((link) => (
          <li key={link.href} className="hidden md:block">
            <a
              href={link.href}
              style={{
                fontSize: '.72rem',
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                fontWeight: 500,
                color: scrolled ? '#6B6B6B' : 'rgba(255,255,255,.7)',
                transition: 'color .3s',
                textDecoration: 'none',
                position: 'relative',
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = scrolled
                  ? '#1C1C1C'
                  : '#FFFFFF')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = scrolled
                  ? '#6B6B6B'
                  : 'rgba(255,255,255,.7)')
              }
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: '.72rem',
          letterSpacing: '.12em',
          textTransform: 'uppercase',
          fontWeight: 600,
          padding: '11px 24px',
          borderRadius: 3,
          background: 'var(--rose)',
          color: '#FFFFFF',
          textDecoration: 'none',
          transition: 'all .3s',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.background = 'var(--rose-dark)'
          el.style.boxShadow = '0 6px 20px rgba(196,128,138,.4)'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.background = 'var(--rose)'
          el.style.boxShadow = 'none'
        }}
      >
        Agendar Avaliação
      </a>
    </nav>
  )
}
