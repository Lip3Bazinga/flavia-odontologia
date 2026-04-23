'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon, DragHandleIcon } from './icons'

const cases = [
  {
    num: '01',
    tag: 'Estética Dental',
    name: 'Lentes de Resina',
    desc: 'Finas películas de resina aplicadas com mínimo desgaste para corrigir cor, formato e alinhamento. Resultado natural em 2 sessões.',
    stats: [{ n: '2', l: 'Sessões' }, { n: '8+', l: 'Anos de duração' }, { n: '100%', l: 'Natural' }],
    beforeImg: '/images/case-1-before.jpg',
    afterImg: '/images/case-1-after.jpg',
  },
  {
    num: '02',
    tag: 'Clareamento',
    name: 'Clareamento a Laser',
    desc: 'Procedimento rápido, seguro e indolor. O gel clareador ativado por luz LED transforma o sorriso em uma única sessão.',
    stats: [{ n: '1', l: 'Sessão' }, { n: '8 tons', l: 'Mais claro' }, { n: '2–3a', l: 'Duração' }],
    beforeImg: '/images/case-2-before.jpg',
    afterImg: '/images/case-2-after.jpg',
  },
  {
    num: '03',
    tag: 'Ortodontia',
    name: 'Alinhadores Invisíveis',
    desc: 'Tecnologia de alinhamento 3D sem bráquetes. Discreto, removível e com resultado planejado digitalmente desde a primeira consulta.',
    stats: [{ n: '~20', l: 'Etapas' }, { n: '6–18m', l: 'Tratamento' }, { n: '100%', l: 'Discreto' }],
    beforeImg: '/images/case-3-before.jpg',
    afterImg: '/images/case-3-after.jpg',
  },
]

function BeforeAfterSlider({ beforeImg, afterImg }: { beforeImg: string; afterImg: string }) {
  const visualRef = useRef<HTMLDivElement>(null)
  const beforeRef = useRef<HTMLDivElement>(null)
  const handleRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)
  const pct = useRef(50)

  const setVPct = useCallback((p: number) => {
    const clamped = Math.max(3, Math.min(97, p))
    pct.current = clamped
    if (beforeRef.current) beforeRef.current.style.clipPath = `inset(0 ${100 - clamped}% 0 0)`
    if (handleRef.current) handleRef.current.style.left = `${clamped}%`
  }, [])

  const vUpdate = useCallback(
    (clientX: number) => {
      if (!visualRef.current) return
      const rect = visualRef.current.getBoundingClientRect()
      setVPct(((clientX - rect.left) / rect.width) * 100)
    },
    [setVPct]
  )

  useEffect(() => {
    setVPct(50)
    const onMouseMove = (e: MouseEvent) => { if (dragging.current) vUpdate(e.clientX) }
    const onTouchMove = (e: TouchEvent) => { if (dragging.current) vUpdate(e.touches[0].clientX) }
    const onUp = () => { dragging.current = false }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchend', onUp)
    }
  }, [vUpdate, setVPct])

  return (
    <div
      ref={visualRef}
      style={{
        position: 'relative',
        minHeight: 460,
        cursor: 'ew-resize',
        userSelect: 'none',
        overflow: 'hidden',
      }}
      onMouseDown={(e) => { dragging.current = true; vUpdate(e.clientX); e.preventDefault() }}
      onTouchStart={(e) => { dragging.current = true; vUpdate(e.touches[0].clientX) }}
    >
      {/* After */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
        }}
      >
        <img
          src={afterImg}
          alt="Depois do tratamento"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Before */}
      <div
        ref={beforeRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          clipPath: 'inset(0 50% 0 0)',
        }}
      >
        <img
          src={beforeImg}
          alt="Antes do tratamento"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Labels */}
      <div style={{ position: 'absolute', top: 18, left: 18, fontSize: '.58rem', letterSpacing: '.12em', textTransform: 'uppercase', padding: '5px 13px', borderRadius: 50, fontWeight: 600, zIndex: 4, background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.5)', pointerEvents: 'none' }}>
        Antes
      </div>
      <div style={{ position: 'absolute', top: 18, right: 18, fontSize: '.58rem', letterSpacing: '.12em', textTransform: 'uppercase', padding: '5px 13px', borderRadius: 50, fontWeight: 600, zIndex: 4, background: 'var(--rose)', color: 'white', pointerEvents: 'none' }}>
        Depois
      </div>

      {/* Handle */}
      <div
        ref={handleRef}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '50%',
          width: 2,
          background: 'white',
          transform: 'translateX(-50%)',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 44, height: 44, borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--rose)', boxShadow: '0 4px 20px rgba(0,0,0,.4)' }}>
          <DragHandleIcon size={18} />
        </div>
      </div>
    </div>
  )
}

export default function Resultados() {
  const [active, setActive] = useState(0)
  const [dir, setDir] = useState(1)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  const go = useCallback((idx: number, direction: number) => {
    setDir(direction)
    setActive(idx)
  }, [])

  const startAuto = useCallback(() => {
    autoRef.current = setInterval(() => {
      setActive((prev) => {
        setDir(1)
        return (prev + 1) % cases.length
      })
    }, 5000)
  }, [])

  useEffect(() => {
    startAuto()
    return () => { if (autoRef.current) clearInterval(autoRef.current) }
  }, [startAuto])

  const stopAuto = () => { if (autoRef.current) clearInterval(autoRef.current) }

  const c = cases[active]

  return (
    <section
      id="antes-depois"
      style={{ background: 'var(--dark)', padding: '100px 0', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 5%' }}>
        {/* Header */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 52,
            flexWrap: 'wrap',
            gap: 20,
          }}
        >
          <div>
            <span
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
              }}
            >
              <span style={{ display: 'block', width: 28, height: 1, background: 'var(--rose-mid)' }} />
              Resultados reais
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 300,
                fontSize: 'clamp(2rem,3.5vw,3rem)',
                color: 'var(--white)',
                lineHeight: 1.1,
                marginTop: 14,
              }}
            >
              Antes <em style={{ color: 'var(--rose-mid)', fontStyle: 'italic' }}>&amp;</em> depois
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <button
              aria-label="Anterior"
              onClick={() => { stopAuto(); go((active - 1 + cases.length) % cases.length, -1) }}
              style={{ width: 46, height: 46, borderRadius: '50%', border: '1px solid rgba(255,255,255,.12)', background: 'transparent', color: 'rgba(255,255,255,.5)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .3s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--rose-mid)'; (e.currentTarget as HTMLElement).style.color = 'var(--rose-mid)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,.12)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,.5)' }}
            >
              <ChevronLeftIcon />
            </button>
            <button
              aria-label="Próximo"
              onClick={() => { stopAuto(); go((active + 1) % cases.length, 1) }}
              style={{ width: 46, height: 46, borderRadius: '50%', border: '1px solid rgba(255,255,255,.12)', background: 'transparent', color: 'rgba(255,255,255,.5)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .3s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--rose-mid)'; (e.currentTarget as HTMLElement).style.color = 'var(--rose-mid)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,.12)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,.5)' }}
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>

        {/* Case */}
        <div
          ref={wrapRef}
          className="reveal d1"
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
        >
          <div
            key={active}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.5fr',
              borderRadius: 16,
              overflow: 'hidden',
              minHeight: 460,
              animation: `${dir > 0 ? 'rcSlideIn' : 'rcSlideInR'} .45s cubic-bezier(.16,1,.3,1) both`,
            }}
            className="rc-case-grid"
          >
            {/* Info panel */}
            <div
              style={{
                background: '#111',
                padding: '52px 44px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: 200, height: 200, borderTopLeftRadius: '100%', background: 'rgba(196,128,138,.04)', border: '1px solid rgba(196,128,138,.08)', pointerEvents: 'none' }} />
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '5.5rem', color: 'rgba(255,255,255,.04)', lineHeight: 1, marginBottom: -26 }}>{c.num}</div>
              <div style={{ fontSize: '.63rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--rose-mid)', marginBottom: 10 }}>{c.tag}</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 300, color: 'var(--white)', marginBottom: 16, lineHeight: 1.15 }}>{c.name}</div>
              <div style={{ fontSize: '.88rem', lineHeight: 1.85, color: 'rgba(255,255,255,.42)', fontWeight: 300, marginBottom: 30 }}>{c.desc}</div>
              <div style={{ display: 'flex', gap: 28, marginBottom: 32, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,.07)' }}>
                {c.stats.map((s, i) => (
                  <div key={i}>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--rose-mid)', display: 'block', lineHeight: 1 }}>{s.n}</span>
                    <span style={{ fontSize: '.65rem', color: 'rgba(255,255,255,.28)', letterSpacing: '.06em', display: 'block', marginTop: 3, textTransform: 'uppercase' }}>{s.l}</span>
                  </div>
                ))}
              </div>
              <a
                href={`https://wa.me/5511999999999?text=Quero+saber+mais+sobre+${encodeURIComponent(c.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '.72rem', letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: 600, color: 'var(--rose-mid)', border: '1px solid rgba(196,128,138,.22)', padding: '11px 22px', borderRadius: 3, cursor: 'pointer', transition: 'all .3s', background: 'transparent', textDecoration: 'none' }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--rose)'; el.style.color = 'white'; el.style.borderColor = 'var(--rose)' }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.color = 'var(--rose-mid)'; el.style.borderColor = 'rgba(196,128,138,.22)' }}
              >
                Quero este resultado
                <ArrowRightIcon size={14} />
              </a>
            </div>

            {/* Before/After slider */}
            <BeforeAfterSlider beforeImg={c.beforeImg} afterImg={c.afterImg} />
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 24 }}>
          {cases.map((_, i) => (
            <button
              key={i}
              onClick={() => { stopAuto(); go(i, i > active ? 1 : -1) }}
              aria-label={`Case ${i + 1}`}
              style={{
                width: i === active ? 24 : 6,
                height: 6,
                borderRadius: i === active ? 3 : '50%',
                background: i === active ? 'var(--rose)' : 'rgba(255,255,255,.15)',
                cursor: 'pointer',
                transition: 'all .35s',
                border: 'none',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
