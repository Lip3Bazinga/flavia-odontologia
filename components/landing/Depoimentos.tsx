'use client'

import { useState } from 'react'
import { PlayIcon } from './icons'

// Vídeos de depoimentos (YouTube Shorts — formato vertical 9:16).
const videoTestimonials = [
  { id: 'fCGiE6TDW60', name: 'Mariana Costa', treat: 'Lentes de Resina' },
  { id: 'qcvTkf_KC8s', name: 'Letícia Torres', treat: 'Lentes + Clareamento' },
  { id: 'fdmxZinzB6I', name: 'Beatriz Alves', treat: 'Planejamento Digital' },
]

export default function Depoimentos() {
  // Índices dos vídeos que já foram ativados (iframe carregado com autoplay)
  const [playing, setPlaying] = useState<number | null>(null)

  return (
    <section
      id="depoimentos"
      style={{ padding: '110px 0', background: 'var(--rose-pale)', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 5%' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
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
          <p
            className="reveal d2"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '.95rem',
              lineHeight: 1.7,
              color: 'var(--charcoal)',
              maxWidth: 520,
              margin: '18px auto 0',
            }}
          >
            Histórias reais de quem transformou o sorriso — e a confiança — com a Dra. Flávia.
          </p>
        </div>

        {/* Grade de vídeos verticais (carrossel com snap no mobile) */}
        <div className="reveal d2 depo-video-grid">
          {videoTestimonials.map((v, i) => (
            <div key={v.id} className="depo-video-card">
              <div className="depo-video-frame">
                {playing === i ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0&playsinline=1`}
                    title={`Depoimento em vídeo — ${v.name}`}
                    style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    className="depo-video-poster"
                    aria-label={`Assistir depoimento de ${v.name}`}
                    onClick={() => setPlaying(i)}
                  >
                    {/* Thumbnail do YouTube (carregamento leve, sem iframe) */}
                    <img
                      src={`https://i.ytimg.com/vi/${v.id}/oar2.jpg`}
                      alt=""
                      loading="lazy"
                      onError={(e) => {
                        // Fallback para thumbnail padrão caso a vertical não exista
                        const img = e.currentTarget
                        if (!img.dataset.fallback) {
                          img.dataset.fallback = '1'
                          img.src = `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`
                        }
                      }}
                    />
                    <span className="depo-video-scrim" aria-hidden="true" />
                    <span className="depo-video-play" aria-hidden="true">
                      <PlayIcon size={22} />
                    </span>
                    <span className="depo-video-caption">
                      <span className="depo-video-name">{v.name}</span>
                      <span className="depo-video-treat">{v.treat}</span>
                    </span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .depo-video-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
          max-width: 880px;
          margin: 0 auto;
        }
        .depo-video-card {
          margin: 0;
        }
        .depo-video-frame {
          position: relative;
          aspect-ratio: 9 / 16;
          border-radius: 16px;
          overflow: hidden;
          background: #000;
          border: 1px solid var(--rose-mid);
          box-shadow: 0 24px 60px -24px rgba(196,128,138,.45);
          transition: transform .35s ease, box-shadow .35s ease;
        }
        .depo-video-card:hover .depo-video-frame {
          transform: translateY(-6px);
          box-shadow: 0 32px 70px -22px rgba(196,128,138,.6);
        }
        .depo-video-poster {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          padding: 0;
          border: 0;
          background: #000;
          cursor: pointer;
          display: block;
        }
        .depo-video-poster img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .5s ease;
        }
        .depo-video-card:hover .depo-video-poster img {
          transform: scale(1.04);
        }
        .depo-video-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,.72) 0%, rgba(0,0,0,.12) 45%, rgba(0,0,0,0) 65%);
          pointer-events: none;
        }
        .depo-video-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 62px;
          height: 62px;
          border-radius: 50%;
          background: rgba(255,255,255,.92);
          color: var(--rose);
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 4px;
          box-shadow: 0 10px 30px rgba(0,0,0,.35);
          transition: transform .3s ease, background .3s ease, color .3s ease;
        }
        .depo-video-card:hover .depo-video-play {
          transform: translate(-50%, -50%) scale(1.1);
          background: var(--rose);
          color: #FFFFFF;
        }
        .depo-video-caption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 18px 18px 16px;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 3px;
          pointer-events: none;
        }
        .depo-video-name {
          font-family: var(--font-sans);
          font-size: .92rem;
          font-weight: 600;
          color: #FFFFFF;
        }
        .depo-video-treat {
          font-family: var(--font-sans);
          font-size: .7rem;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: rgba(255,255,255,.85);
        }

        /* Mobile: carrossel horizontal com snap */
        @media (max-width: 720px) {
          .depo-video-grid {
            display: flex;
            gap: 16px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding: 4px 5% 24px;
            margin: 0 -5%;
            max-width: none;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .depo-video-grid::-webkit-scrollbar {
            display: none;
          }
          .depo-video-card {
            flex: 0 0 min(72vw, 300px);
            scroll-snap-align: center;
          }
        }
      `}</style>
    </section>
  )
}
