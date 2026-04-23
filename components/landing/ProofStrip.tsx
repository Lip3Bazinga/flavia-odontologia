'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { target: 2000, suffix: '+', label: 'Sorrisos transformados' },
  { target: 15, suffix: ' anos', label: 'De experiência clínica' },
  { target: 98, suffix: '%', label: 'Índice de satisfação' },
  { target: 100, suffix: '%', label: 'Natural e reversível' },
]

function Counter({
  target,
  suffix,
}: {
  target: number
  suffix: string
}) {
  const [value, setValue] = useState('—')
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true
            const dur = 1600
            const start = performance.now()
            const tick = (now: number) => {
              const p = Math.min((now - start) / dur, 1)
              const ease = 1 - Math.pow(1 - p, 3)
              const current = Math.floor(ease * target)
              setValue(
                (target >= 1000
                  ? current.toLocaleString('pt-BR')
                  : String(current)) + suffix
              )
              if (p < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, suffix])

  return (
    <span
      ref={ref}
      style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '2.2rem',
        fontWeight: 300,
        color: 'var(--rose-dark)',
        display: 'block',
        lineHeight: 1,
      }}
    >
      {value}
    </span>
  )
}

export default function ProofStrip() {
  return (
    <div
      id="proof-strip"
      style={{
        background: 'var(--rose-light)',
        borderTop: '1px solid var(--rose-mid)',
        borderBottom: '1px solid var(--rose-mid)',
        padding: '30px 0',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 5%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          gap: 20,
          flexWrap: 'wrap',
        }}
      >
        {stats.map((stat, i) => (
          <div key={i} style={{ display: 'contents' }}>
            {i > 0 && (
              <div
                style={{
                  width: 1,
                  height: 40,
                  background: 'var(--rose-mid)',
                }}
                className="hidden md:block"
              />
            )}
            <div className={`reveal d${i}`} style={{ textAlign: 'center' }}>
              <Counter target={stat.target} suffix={stat.suffix} />
              <span
                style={{
                  fontSize: '.7rem',
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  color: 'var(--mid)',
                  marginTop: 5,
                  display: 'block',
                }}
              >
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
