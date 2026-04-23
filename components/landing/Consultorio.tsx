'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

const rooms = [
  {
    tag: 'Nosso Espaço · 01',
    title: 'Acolhimento desde a <em>entrada</em>',
    text: 'Ambiente pensado para que você se sinta à vontade antes mesmo de começar o atendimento. Iluminação suave, aromas e música ambiente.',
    image: '/images/clinic-1.jpg',
  },
  {
    tag: 'Nosso Espaço · 02',
    title: 'Tecnologia &amp; <em>conforto</em>',
    text: 'Cadeiras ergonômicas, telas de monitoramento e equipamentos de última geração para diagnósticos precisos e tratamentos ágeis.',
    image: '/images/clinic-2.jpg',
  },
  {
    tag: 'Nosso Espaço · 03',
    title: 'Planejamento <em>digital</em> do sorriso',
    text: 'Scanner 3D intraoral e software de simulação para você visualizar o resultado final antes de qualquer procedimento começar.',
    image: '/images/clinic-3.jpg',
  },
  {
    tag: 'Nosso Espaço · 04',
    title: 'Biossegurança <em>total</em>',
    text: 'Sala de esterilização com autoclave de última geração. Protocolos rigorosos e materiais certificados para sua total segurança.',
    image: '/images/clinic-4.jpg',
  },
  {
    tag: 'Nosso Espaço · 05',
    title: 'Sala de <em>recuperação</em>',
    text: 'Espaço reservado e tranquilo para seu descanso após os procedimentos, com privacidade e todo o conforto que você merece.',
    image: '/images/clinic-5.jpg',
  },
  {
    tag: 'Nosso Espaço · 06',
    title: 'Localização <em>privilegiada</em>',
    text: 'Fácil acesso, estacionamento conveniado e atendimento com hora marcada para que sua visita seja sempre prática e agradável.',
    image: '/images/clinic-6.jpg',
  },
]

const COUNT = rooms.length

export default function Consultorio() {
  const [active, setActive] = useState(0)
  const [exiting, setExiting] = useState<number | null>(null)
  const [exitDir, setExitDir] = useState(1)
  const sectionRef = useRef<HTMLElement>(null)

  const goSlide = useCallback(
    (to: number) => {
      if (to === active) return
      const direction = to > active ? 1 : -1
      setExitDir(direction)
      setExiting(active)
      setActive(to)
      setTimeout(() => setExiting(null), 700)
    },
    [active]
  )

  useEffect(() => {
    const handler = () => {
      const section = sectionRef.current
      if (!section) return
      const sTop = section.offsetTop
      const sHeight = section.offsetHeight
      const vH = window.innerHeight
      const scrolled = window.scrollY - sTop
      const scrollable = sHeight - vH
      const progress = Math.max(0, Math.min(1, scrolled / scrollable))
      const idx = Math.min(COUNT - 1, Math.floor(progress * COUNT))
      goSlide(idx)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [goSlide])

  const progressWidth = ((active + 1) / COUNT) * 100

  return (
    <section
      id="consultorio"
      ref={sectionRef}
      style={{
        position: 'relative',
        height: `calc(100vh + ${5 * 90}vh)`,
        background: 'var(--dark)',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          background: 'var(--dark)',
        }}
      >
        {/* Slides */}
        <div style={{ position: 'absolute', inset: 0 }}>
          {rooms.map((room, i) => {
            const isActive = i === active
            const isExiting = i === exiting

            let transform = 'translateX(80px)'
            let opacity = 0
            let pointerEvents: 'none' | 'auto' = 'none'
            let transition = 'opacity .65s cubic-bezier(.16,1,.3,1), transform .65s cubic-bezier(.16,1,.3,1)'

            if (isActive) {
              transform = 'none'
              opacity = 1
              pointerEvents = 'auto'
            } else if (isExiting) {
              transform = `translateX(${exitDir > 0 ? -80 : 80}px)`
              opacity = 0
            }

            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'flex-end',
                  opacity,
                  pointerEvents,
                  transform,
                  transition,
                  willChange: 'transform, opacity',
                }}
              >
                {/* BG */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={room.image}
                    alt={room.tag}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 8s ease',
                      transform: isActive ? 'scale(1.04)' : 'scale(1)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(to top, rgba(0,0,0,.85) 0%, rgba(0,0,0,.3) 50%, rgba(0,0,0,.1) 100%)`,
                      zIndex: 1,
                    }}
                  />
                </div>

                {/* Content */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    padding: '0 7% 7%',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 60,
                    alignItems: 'end',
                    width: '100%',
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: '.65rem',
                        letterSpacing: '.18em',
                        textTransform: 'uppercase',
                        color: 'var(--rose-mid)',
                        display: 'block',
                        marginBottom: 12,
                      }}
                    >
                      {room.tag}
                    </span>
                    <h2
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(2rem,4vw,3.4rem)',
                        fontWeight: 300,
                        color: 'var(--white)',
                        lineHeight: 1.1,
                        marginBottom: 16,
                      }}
                      dangerouslySetInnerHTML={{ __html: room.title.replace(/<em>/g, '<em style="font-style:italic;color:var(--rose-mid)">') }}
                    />
                    <p
                      style={{
                        fontSize: '.9rem',
                        color: 'rgba(255,255,255,.5)',
                        lineHeight: 1.8,
                        fontWeight: 300,
                        maxWidth: 420,
                      }}
                    >
                      {room.text}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '7rem',
                        fontWeight: 300,
                        color: 'rgba(255,255,255,.06)',
                        lineHeight: 1,
                        display: 'block',
                        marginBottom: -20,
                      }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      style={{
                        fontSize: '.65rem',
                        letterSpacing: '.16em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,.25)',
                      }}
                    >
                      de 0{COUNT}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Progress bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background: 'rgba(255,255,255,.07)',
            zIndex: 3,
          }}
        >
          <div
            style={{
              height: '100%',
              background: 'linear-gradient(to right, var(--rose), var(--rose-mid))',
              transition: 'width .65s cubic-bezier(.16,1,.3,1)',
              width: `${progressWidth}%`,
            }}
          />
        </div>

        {/* Dots */}
        <div
          style={{
            position: 'absolute',
            bottom: 28,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 5,
            display: 'flex',
            gap: 10,
            alignItems: 'center',
          }}
        >
          {rooms.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para slide ${i + 1}`}
              onClick={() => goSlide(i)}
              style={{
                width: i === active ? 24 : 6,
                height: 6,
                borderRadius: i === active ? 3 : '50%',
                background: i === active ? 'var(--rose)' : 'rgba(255,255,255,.2)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all .35s',
              }}
            />
          ))}
        </div>

        {/* Scroll cue */}
        <div
          style={{
            position: 'absolute',
            right: '6%',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <div
            style={{
              width: 1,
              height: 60,
              background: 'linear-gradient(to bottom, transparent, var(--rose-mid), transparent)',
              animation: 'scrollCue 2s ease-in-out infinite',
            }}
          />
          <span
            style={{
              fontSize: '.6rem',
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,.2)',
              writingMode: 'vertical-rl',
            }}
          >
            scroll
          </span>
        </div>
      </div>
    </section>
  )
}
