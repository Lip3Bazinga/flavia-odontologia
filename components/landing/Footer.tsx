'use client'

import { InstagramIcon, WhatsAppIcon } from './icons'
import { CRO, NOME_FANTASIA } from './dados-clinica'

const WA_NUMERO = '5516994046647'

const socials = [
  { href: 'https://www.instagram.com/sorrindoporflaviajardim/', label: 'Instagram', Icon: InstagramIcon },
  { href: `https://wa.me/${WA_NUMERO}`, label: 'WhatsApp', Icon: WhatsAppIcon },
]

const linkWhatsApp = (assunto: string) =>
  `https://wa.me/${WA_NUMERO}?text=${encodeURIComponent(
    `Olá! Gostaria de saber mais sobre ${assunto}.`,
  )}`

/**
 * O site é uma landing de página única sobre lentes de resina — destes oito
 * tratamentos, só "Lentes Estéticas" tem seção própria (#tratamento). Os outros
 * sete não têm conteúdo nenhum aqui.
 *
 * Por isso cada um abre o WhatsApp já dizendo o assunto, em vez de apontar para
 * `#tratamento` (que levaria a pessoa para um texto sobre outra coisa) ou para
 * `href="#"` (que não leva a lugar nenhum). É o mesmo CTA do resto do site, e a
 * mensagem chega dizendo o que a pessoa procura.
 *
 * Se algum destes ganhar seção própria um dia, troque o href pela âncora.
 */
const tratamentos = [
  { label: 'Lentes Estéticas', href: '#tratamento' },
  { label: 'Clareamento', href: linkWhatsApp('Clareamento') },
  { label: 'Ortodontia', href: linkWhatsApp('Ortodontia') },
  { label: 'Cirurgias', href: linkWhatsApp('Cirurgias') },
  { label: 'Implantes', href: linkWhatsApp('Implantes') },
  { label: 'Endodontia', href: linkWhatsApp('Endodontia') },
  { label: 'Limpeza', href: linkWhatsApp('Limpeza') },
  { label: 'Restauração', href: linkWhatsApp('Restauração') },
]

/** `href` ausente = informação, não link. Ver o horário de funcionamento. */
const contatos: { href?: string; label: string }[] = [
  { href: `https://wa.me/${WA_NUMERO}`, label: '(16) 99404-6647' },
  { href: 'mailto:contato@flaviajardim.com.br', label: 'contato@flaviajardim.com.br' },
  { href: 'https://maps.app.goo.gl/7AyEZDfQn2zWKXpk8', label: 'Av. São Vicente, 4315 - Jd. Noemia, Franca/SP' },
  { label: 'Seg–Sex: 7h–18h' },
]

const linkStyle: React.CSSProperties = {
  fontSize: '.83rem',
  color: 'rgba(255,255,255,.35)',
  textDecoration: 'none',
  transition: 'color .3s',
}

const realce = (cor: string) => (e: React.MouseEvent<HTMLElement>) => {
  ;(e.currentTarget as HTMLElement).style.color = cor
}

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0A0A0A',
        borderTop: '1px solid rgba(255,255,255,.06)',
        padding: '60px 5% 30px',
      }}
    >
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        {/* Top */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gap: 60,
            paddingBottom: 50,
            borderBottom: '1px solid rgba(255,255,255,.06)',
            marginBottom: 30,
          }}
          className="footer-top-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.2rem',
                color: 'var(--white)',
                marginBottom: 14,
              }}
            >
              Flávia Jardim{' '}
              <span style={{ color: 'var(--rose-mid)', fontStyle: 'italic' }}>Odontologia</span>
            </div>
            <p
              style={{
                fontSize: '.85rem',
                color: 'rgba(255,255,255,.35)',
                lineHeight: 1.8,
                maxWidth: 300,
              }}
            >
              Especialista em estética dental e lentes de resina. Transformando sorrisos com
              naturalidade, técnica e dedicação há mais de 20 anos.
            </p>
          </div>

          {/* Tratamentos */}
          <div>
            <h4
              style={{
                fontSize: '.68rem',
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: 'var(--rose-mid)',
                marginBottom: 18,
                fontWeight: 500,
              }}
            >
              Tratamentos
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
              {tratamentos.map((item) => {
                const externo = item.href.startsWith('http')
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      style={linkStyle}
                      onMouseEnter={realce('var(--white)')}
                      onMouseLeave={realce('rgba(255,255,255,.35)')}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4
              style={{
                fontSize: '.68rem',
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: 'var(--rose-mid)',
                marginBottom: 18,
                fontWeight: 500,
              }}
            >
              Contato
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
              {contatos.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(item.href.startsWith('http')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      style={linkStyle}
                      onMouseEnter={realce('var(--white)')}
                      onMouseLeave={realce('rgba(255,255,255,.35)')}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span style={{ ...linkStyle, display: 'inline-block' }}>{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="footer-bottom"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '4px 10px' }}>
            <p style={{ fontSize: '.73rem', color: 'rgba(255,255,255,.2)' }}>
              © {new Date().getFullYear()} {NOME_FANTASIA}
              {CRO && ` · ${CRO}`} · Todos os direitos reservados
            </p>
            <span style={{ fontSize: '.73rem', color: 'rgba(255,255,255,.2)' }} aria-hidden>
              ·
            </span>
            <a
              href="/politica-de-privacidade"
              style={{ fontSize: '.73rem', color: 'rgba(255,255,255,.35)', textDecoration: 'none', transition: 'color .3s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--rose-mid)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,.35)' }}
            >
              Política de Privacidade
            </a>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                title={s.label}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,.3)',
                  textDecoration: 'none',
                  transition: 'all .3s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--rose-mid)'
                  el.style.color = 'var(--rose-mid)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(255,255,255,.1)'
                  el.style.color = 'rgba(255,255,255,.3)'
                }}
              >
                <s.Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
