'use client'

const items = [
  { num: '01', title: 'Atendimento 100% Personalizado', text: 'Cada paciente recebe um plano exclusivo. Não fazemos "receita de bolo" — seu sorriso é único e merece um tratamento único.' },
  { num: '02', title: 'Técnica Avançada & Atualizada', text: 'Formação contínua nos maiores centros de odontologia estética. Utilizamos os protocolos mais modernos disponíveis no mercado.' },
  { num: '03', title: 'Resultados Naturais, Sempre', text: 'Nossa filosofia é criar sorrisos que pareçam naturais — bonitos sem parecerem "feitos". Nunca exagerado, sempre autêntico.' },
  { num: '04', title: 'Experiência Premium no Consultório', text: 'Ambiente projetado para conforto e elegância. Porque cuidar de você vai além do tratamento — começa antes de sentar na cadeira.' },
]

export default function Diferenciais() {
  return (
    <section
      id="diferenciais"
      style={{ background: 'var(--offwhite)', padding: '110px 0' }}
    >
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 5%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'center',
          }}
          className="diff-grid"
        >
          {/* Left */}
          <div>
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
              Por que me escolher
            </span>
            <h2
              className="reveal d1"
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 300,
                fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
                lineHeight: 1.1,
                marginTop: 16,
                marginBottom: 18,
              }}
            >
              Uma experiência{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>diferente</em>
            </h2>
            <p
              className="reveal d2"
              style={{
                fontSize: '.95rem',
                lineHeight: 1.85,
                color: 'var(--mid)',
                fontWeight: 300,
                marginBottom: 36,
              }}
            >
              Do primeiro contato ao acompanhamento pós-tratamento, cada detalhe foi pensado para que
              você se sinta acolhida, segura e encantada com o resultado.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {items.map((item, i) => (
                <div
                  key={item.num}
                  className={`reveal d${i + 2}`}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 20,
                    padding: '22px 0',
                    borderBottom: i < items.length - 1 ? '1px solid var(--light)' : 'none',
                    transition: 'all .3s',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    const num = (e.currentTarget as HTMLElement).querySelector('.diff-num') as HTMLElement
                    const title = (e.currentTarget as HTMLElement).querySelector('.diff-title') as HTMLElement
                    if (num) num.style.color = 'var(--rose)'
                    if (title) title.style.color = 'var(--rose)'
                  }}
                  onMouseLeave={(e) => {
                    const num = (e.currentTarget as HTMLElement).querySelector('.diff-num') as HTMLElement
                    const title = (e.currentTarget as HTMLElement).querySelector('.diff-title') as HTMLElement
                    if (num) num.style.color = 'var(--rose-mid)'
                    if (title) title.style.color = 'var(--dark)'
                  }}
                >
                  <div
                    className="diff-num"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.6rem',
                      color: 'var(--rose-mid)',
                      fontWeight: 300,
                      lineHeight: 1,
                      minWidth: 36,
                      paddingTop: 2,
                      transition: 'color .3s',
                    }}
                  >
                    {item.num}
                  </div>
                  <div>
                    <div
                      className="diff-title"
                      style={{ fontSize: '.9rem', fontWeight: 600, marginBottom: 4, transition: 'color .3s', color: 'var(--dark)' }}
                    >
                      {item.title}
                    </div>
                    <div style={{ fontSize: '.83rem', color: 'var(--mid)', lineHeight: 1.65, fontWeight: 300 }}>
                      {item.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — quote visual */}
          <div
            className="reveal d2"
            style={{
              background: 'var(--dark)',
              borderRadius: 12,
              aspectRatio: '4/5',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at 30% 60%, rgba(196,128,138,.15), transparent 60%)',
              }}
            />
            <div
              style={{ padding: '0 48px', textAlign: 'center', position: 'relative', zIndex: 1 }}
            >
              <blockquote
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                  fontWeight: 300,
                  color: 'rgba(255,255,255,.85)',
                  lineHeight: 1.5,
                  marginBottom: 24,
                }}
              >
                &ldquo;O sorriso mais bonito é aquele que parece ter sempre sido seu.&rdquo;
              </blockquote>
              <cite
                style={{
                  fontSize: '.72rem',
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  color: 'var(--rose-mid)',
                  fontStyle: 'normal',
                }}
              >
                — Dra. Flávia Jardim
              </cite>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: 180,
                height: 180,
                borderTopLeftRadius: '100%',
                background: 'rgba(196,128,138,.06)',
                border: '1px solid rgba(196,128,138,.12)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
