'use client'

import { useState } from 'react'
import { MapPinIcon, ClockIcon, CarIcon, WhatsAppIcon, ArrowRightIcon } from './icons'

const MAPS_LINK = 'https://maps.app.goo.gl/7AyEZDfQn2zWKXpk8'
const MAPS_EMBED =
  'https://www.google.com/maps?q=Av.+S%C3%A3o+Vicente,+4315+-+Jardim+Noemia,+Franca+-+SP&output=embed'
const WA_LINK =
  'https://wa.me/5516994046647?text=Ol%C3%A1!%20Quero%20agendar%20uma%20avalia%C3%A7%C3%A3o.'

const infoCards = [
  {
    Icon: MapPinIcon,
    label: 'Endereço',
    lines: ['Av. São Vicente, 4315', 'Jardim Noemia · Franca/SP'],
    href: MAPS_LINK,
  },
  {
    Icon: ClockIcon,
    label: 'Horário de atendimento',
    lines: ['Segunda a Sexta', '7h às 18h'],
  },
  {
    Icon: CarIcon,
    label: 'Estacionamento',
    lines: ['Próprio e coberto', 'Acesso privativo à clínica'],
  },
]

export default function Localizacao() {
  const [mapLoaded, setMapLoaded] = useState(false)

  return (
    <section id="localizacao" style={{ padding: '110px 0', background: 'var(--white)' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 5%' }}>
        {/* Header */}
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
            Localização
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
            Venha nos <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>visitar</em>
          </h2>
          <p
            className="reveal d1"
            style={{
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'var(--charcoal)',
              maxWidth: 480,
              margin: '16px auto 0',
              fontWeight: 300,
            }}
          >
            Estamos em uma localização de fácil acesso em Franca, com estacionamento próprio para o
            seu conforto.
          </p>
        </div>

        <div className="localizacao-grid reveal d2">
          {/* Info column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {infoCards.map(({ Icon, label, lines, href }) => {
              const inner = (
                <>
                  <span className="localizacao-card-icon">
                    <Icon size={20} />
                  </span>
                  <div>
                    <div
                      style={{
                        fontSize: '.66rem',
                        letterSpacing: '.14em',
                        textTransform: 'uppercase',
                        color: 'var(--rose)',
                        fontWeight: 600,
                        marginBottom: 6,
                      }}
                    >
                      {label}
                    </div>
                    {lines.map((l, i) => (
                      <div
                        key={i}
                        style={{
                          fontSize: '.95rem',
                          lineHeight: 1.55,
                          color: i === 0 ? 'var(--dark)' : 'var(--charcoal)',
                          fontWeight: i === 0 ? 500 : 400,
                        }}
                      >
                        {l}
                      </div>
                    ))}
                  </div>
                  {href && (
                    <span className="localizacao-card-arrow" aria-hidden>
                      <ArrowRightIcon size={16} />
                    </span>
                  )}
                </>
              )

              return href ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="localizacao-card localizacao-card-link"
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className="localizacao-card">
                  {inner}
                </div>
              )
            })}

            {/* CTAs */}
            <div className="localizacao-ctas">
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="loc-btn loc-btn-primary">
                <MapPinIcon size={18} />
                Traçar rota
              </a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="loc-btn loc-btn-ghost">
                <WhatsAppIcon size={18} />
                Agendar avaliação
              </a>
            </div>
          </div>

          {/* Map */}
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="localizacao-map"
            aria-label="Abrir localização no Google Maps"
          >
            {!mapLoaded && <div className="localizacao-map-skeleton" aria-hidden />}
            <iframe
              src={MAPS_EMBED}
              title="Localização — Flávia Jardim Odontologia"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', minHeight: 420, opacity: mapLoaded ? 1 : 0, transition: 'opacity .5s' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setMapLoaded(true)}
              allowFullScreen
            />
            <span className="localizacao-map-badge">
              <MapPinIcon size={15} />
              Ver no Google Maps
            </span>
          </a>
        </div>
      </div>

      <style>{`
        .localizacao-grid {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 40px;
          align-items: stretch;
        }

        .localizacao-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px 22px;
          border-radius: 12px;
          background: var(--rose-pale);
          border: 1px solid var(--rose-mid);
          transition: transform .35s cubic-bezier(.16,1,.3,1), box-shadow .35s cubic-bezier(.16,1,.3,1), border-color .35s;
        }
        .localizacao-card-link {
          text-decoration: none;
          cursor: pointer;
        }
        .localizacao-card-link:hover {
          transform: translateY(-3px);
          border-color: var(--rose);
          box-shadow: 0 16px 34px -18px rgba(196,128,138,.55);
        }
        .localizacao-card-icon {
          flex-shrink: 0;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--white);
          border: 1px solid var(--rose-mid);
          color: var(--rose);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .localizacao-card-arrow {
          margin-left: auto;
          align-self: center;
          color: var(--rose-mid);
          transition: transform .35s, color .35s;
        }
        .localizacao-card-link:hover .localizacao-card-arrow {
          color: var(--rose);
          transform: translateX(4px);
        }

        .localizacao-ctas {
          display: flex;
          gap: 12px;
          margin-top: 8px;
          flex-wrap: wrap;
        }
        .loc-btn {
          display: inline-flex;
          flex: 1 1 0;
          min-width: 160px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-family: var(--font-sans);
          font-size: .78rem;
          letter-spacing: .1em;
          text-transform: uppercase;
          font-weight: 600;
          padding: 16px 24px;
          border-radius: 4px;
          text-decoration: none;
          transition: all .35s;
          cursor: pointer;
        }
        .loc-btn-primary {
          background: var(--rose);
          color: #FFFFFF;
          border: 1px solid var(--rose);
        }
        .loc-btn-primary:hover {
          background: var(--rose-dark);
          border-color: var(--rose-dark);
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(196,128,138,.35);
        }
        .loc-btn-ghost {
          background: transparent;
          color: var(--rose-dark);
          border: 1px solid var(--rose-mid);
        }
        .loc-btn-ghost:hover {
          background: var(--rose-pale);
          border-color: var(--rose);
          transform: translateY(-2px);
        }

        .localizacao-map {
          position: relative;
          display: block;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--rose-mid);
          min-height: 420px;
          box-shadow: 0 24px 50px -20px rgba(196,128,138,.35);
          text-decoration: none;
        }
        .localizacao-map-skeleton {
          position: absolute;
          inset: 0;
          background: linear-gradient(100deg, var(--rose-pale) 30%, rgba(255,255,255,.6) 50%, var(--rose-pale) 70%);
          background-size: 200% 100%;
          animation: locShimmer 1.4s ease-in-out infinite;
        }
        @keyframes locShimmer {
          0% { background-position: 150% 0; }
          100% { background-position: -50% 0; }
        }
        .localizacao-map-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 40px;
          background: rgba(255,255,255,.94);
          backdrop-filter: blur(6px);
          color: var(--rose-dark);
          font-size: .74rem;
          font-weight: 600;
          letter-spacing: .04em;
          box-shadow: 0 6px 20px rgba(0,0,0,.14);
          transition: transform .35s, box-shadow .35s;
          pointer-events: none;
        }
        .localizacao-map:hover .localizacao-map-badge {
          transform: translateY(-2px);
          box-shadow: 0 10px 26px rgba(0,0,0,.2);
        }

        @media (max-width: 768px) {
          .localizacao-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .localizacao-map {
            min-height: 320px;
          }
        }
      `}</style>
    </section>
  )
}
