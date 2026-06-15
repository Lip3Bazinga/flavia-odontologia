'use client'

import { useEffect, useState } from 'react'

const WA_LINK =
  'https://wa.me/5516994046647?text=Olá!%20Quero%20agendar%20minha%20avaliação.'

const BREAKPOINT = 1024

const NAV_LINKS = [
  { href: '#antes-depois', label: 'Resultados' },
  { href: '#consultorio', label: 'Consultório' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#tratamento', label: 'Tratamento' },
  { href: '#objecoes', label: 'Dúvidas' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth >= BREAKPOINT)
    checkWidth()
    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Fecha o menu se a tela crescer para desktop
  useEffect(() => {
    if (isDesktop) setMenuOpen(false)
  }, [isDesktop])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
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
          transition: 'all .4s ease-in-out',
          background: scrolled
            ? 'rgba(255,255,255,.92)'
            : 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
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
            textShadow: scrolled ? 'none' : '0 2px 10px rgba(0,0,0,0.3)',
          }}
        >
          Flávia Jardim{' '}
          <span style={{ color: 'var(--rose)', fontStyle: 'italic' }}>
            Odontologia
          </span>
        </div>

        {/* Links + CTA — desktop */}
        {isDesktop && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 38 }}>
            <ul style={{ display: 'flex', gap: 38, listStyle: 'none', margin: 0, padding: 0 }}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '.72rem',
                      letterSpacing: '.1em',
                      textTransform: 'uppercase',
                      fontWeight: 500,
                      color: scrolled ? '#2A2A2A' : '#FFFFFF',
                      transition: 'all .3s',
                      textDecoration: 'none',
                      textShadow: scrolled ? 'none' : '0 2px 8px rgba(0,0,0,0.4)',
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = scrolled ? '#C4808A' : '#E0E0E0')
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = scrolled ? '#2A2A2A' : '#FFFFFF')
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

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
                boxShadow: scrolled ? 'none' : '0 4px 12px rgba(0,0,0,0.15)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'var(--rose-dark)'
                el.style.boxShadow = '0 6px 20px rgba(196,128,138,.4)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'var(--rose)'
                el.style.boxShadow = scrolled ? 'none' : '0 4px 12px rgba(0,0,0,0.15)'
              }}
            >
              Agendar Avaliação
            </a>
          </div>
        )}

        {/* Hamburguer — mobile */}
        {!isDesktop && (
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              color: scrolled ? '#1C1C1C' : '#FFFFFF',
              transition: 'color .4s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ position: 'relative', width: 24, height: 24, display: 'block' }}>
              {/* Bars */}
              <span
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: 5,
                  opacity: menuOpen ? 0 : 1,
                  transform: menuOpen ? 'rotate(90deg) scale(.6)' : 'rotate(0deg) scale(1)',
                  transition: 'opacity .25s ease, transform .3s ease',
                }}
              >
                <span style={{ display: 'block', height: 2, borderRadius: 2, background: 'currentColor' }} />
                <span style={{ display: 'block', height: 2, borderRadius: 2, background: 'currentColor', width: '75%' }} />
                <span style={{ display: 'block', height: 2, borderRadius: 2, background: 'currentColor' }} />
              </span>

              {/* X */}
              <span
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(.6)',
                  transition: 'opacity .25s ease, transform .3s ease',
                  fontSize: 22,
                  lineHeight: 1,
                }}
              >
                ✕
              </span>
            </span>
          </button>
        )}
      </nav>

      {/* Overlay escuro */}
      <div
        onClick={closeMenu}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 98,
          background: 'rgba(0,0,0,0.45)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity .35s ease',
        }}
      />

      {/* Drawer mobile */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 99,
          width: '78vw',
          maxWidth: 320,
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(20px)',
          borderLeft: '1px solid #EBEBEB',
          padding: '96px 40px 48px',
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
          transform: menuOpen ? 'translateX(0)' : 'translateX(105%)',
          transition: 'transform .38s cubic-bezier(.4,0,.2,1)',
        }}
      >
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              style={{
                borderBottom: '1px solid #F0F0F0',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateX(0)' : 'translateX(24px)',
                transition: `opacity .3s ease ${i * 55 + 120}ms, transform .3s ease ${i * 55 + 120}ms`,
              }}
            >
              <a
                href={link.href}
                onClick={closeMenu}
                style={{
                  display: 'block',
                  padding: '18px 0',
                  fontSize: '.8rem',
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  color: '#2A2A2A',
                  textDecoration: 'none',
                  transition: 'color .2s',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#C4808A')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#2A2A2A')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          style={{
            marginTop: 36,
            display: 'block',
            textAlign: 'center',
            fontSize: '.72rem',
            letterSpacing: '.12em',
            textTransform: 'uppercase',
            fontWeight: 600,
            padding: '14px 24px',
            borderRadius: 3,
            background: 'var(--rose)',
            color: '#FFFFFF',
            textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(196,128,138,.35)',
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(12px)',
            transition: `opacity .3s ease ${NAV_LINKS.length * 55 + 140}ms, transform .3s ease ${NAV_LINKS.length * 55 + 140}ms`,
          }}
        >
          Agendar Avaliação
        </a>
      </div>
    </>
  )
}
