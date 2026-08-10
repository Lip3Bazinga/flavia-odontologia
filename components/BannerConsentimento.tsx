'use client'

import { gravarConsentimento, useConsentimento } from './consentimento'

/**
 * Banner de consentimento para cookies de publicidade.
 *
 * O texto é deliberadamente específico em vez do genérico "usamos cookies para
 * melhorar sua experiência": diz qual empresa recebe o dado, para quê, e o que
 * roda independente da escolha. Banner que esconde isso não serve como prova de
 * consentimento informado (LGPD, Art. 5º XII — manifestação "informada e
 * inequívoca").
 *
 * "Recusar" tem o mesmo peso visual de "Aceitar" pelo mesmo motivo: consentimento
 * obtido por interface que empurra o aceite é frágil se questionado.
 */
export function BannerConsentimento() {
  const consentimento = useConsentimento()

  // 'carregando' → o localStorage ainda não foi lido (evita erro de hidratação).
  // 'aceito' / 'recusado' → já decidiu, some para sempre.
  if (consentimento !== 'pendente') return null

  return (
    <div
      id="banner-consentimento"
      role="dialog"
      aria-label="Aviso de privacidade e cookies"
      style={{
        position: 'fixed',
        left: 16,
        right: 16,
        bottom: 16,
        zIndex: 9999,
        maxWidth: 620,
        margin: '0 auto',
        background: 'rgba(15,15,15,.97)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,.1)',
        borderRadius: 12,
        padding: '22px 24px',
        boxShadow: '0 20px 50px -12px rgba(0,0,0,.5)',
      }}
    >
      <h2
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.15rem',
          fontWeight: 400,
          color: 'var(--white)',
          marginBottom: 8,
        }}
      >
        Cookies de <em style={{ fontStyle: 'italic', color: 'var(--rose-mid)' }}>publicidade</em>
      </h2>

      <p
        style={{
          fontSize: '.83rem',
          lineHeight: 1.7,
          color: 'rgba(255,255,255,.6)',
          fontWeight: 300,
          marginBottom: 18,
        }}
      >
        Podemos usar cookies da Meta (Facebook e Instagram) para medir a eficácia dos nossos
        anúncios. Eles só são ativados se você aceitar. A medição de audiência do Google
        Analytics funciona sob legítimo interesse e você pode se opor a qualquer momento —
        explicamos como na{' '}
        <a
          href="/politica-de-privacidade"
          style={{ color: 'var(--rose-mid)', textDecoration: 'underline' }}
        >
          Política de Privacidade
        </a>
        .
      </p>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <button
          type="button"
          onClick={() => gravarConsentimento('aceito')}
          style={{
            flex: '1 1 140px',
            padding: '11px 22px',
            borderRadius: 6,
            border: '1px solid var(--rose)',
            background: 'var(--rose)',
            color: 'var(--white)',
            fontFamily: 'var(--font-sans)',
            fontSize: '.82rem',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'background .3s, border-color .3s',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget
            el.style.background = 'var(--rose-dark)'
            el.style.borderColor = 'var(--rose-dark)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget
            el.style.background = 'var(--rose)'
            el.style.borderColor = 'var(--rose)'
          }}
        >
          Aceitar
        </button>

        <button
          type="button"
          onClick={() => gravarConsentimento('recusado')}
          style={{
            flex: '1 1 140px',
            padding: '11px 22px',
            borderRadius: 6,
            border: '1px solid rgba(255,255,255,.25)',
            background: 'transparent',
            color: 'rgba(255,255,255,.8)',
            fontFamily: 'var(--font-sans)',
            fontSize: '.82rem',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'border-color .3s, color .3s',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget
            el.style.borderColor = 'rgba(255,255,255,.5)'
            el.style.color = 'var(--white)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget
            el.style.borderColor = 'rgba(255,255,255,.25)'
            el.style.color = 'rgba(255,255,255,.8)'
          }}
        >
          Recusar
        </button>
      </div>
    </div>
  )
}
