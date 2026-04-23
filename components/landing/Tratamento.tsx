'use client'

const steps = [
  { num: '01', title: 'O que são', desc: 'Lentes de resina são facetas ultrafinas de material composto, moldadas e polimerizadas diretamente sobre o esmalte dental. São praticamente invisíveis ao olhar e ao toque.' },
  { num: '02', title: 'Para quem é indicado', desc: 'Ideal para quem deseja corrigir manchas, diastemas (espaços), dentes lascados, desgastados ou levemente desalinhados, sem precisar de aparelho ou procedimentos mais invasivos.' },
  { num: '03', title: 'Como funciona', desc: 'Após uma avaliação detalhada, planejamos digitalmente o resultado final. A aplicação é feita em 1 ou 2 sessões, com anestesia tópica e resultado imediato e duradouro.' },
  { num: '04', title: 'Por que é diferente', desc: 'Ao contrário das porcelanas, as lentes de resina preservam o dente natural ao máximo, são reversíveis e permitem ajustes a qualquer momento — priorizando sua saúde bucal.' },
]

const benefits = [
  { title: 'Resultado Natural', desc: 'Aparência idêntica ao dente natural, com translucidez e textura que imitam o esmalte real.' },
  { title: 'Mínimo Desgaste', desc: 'Preservamos ao máximo o esmalte original, mantendo a saúde e integridade dos seus dentes.' },
  { title: 'Reversível', desc: 'Diferente de outros procedimentos, as lentes de resina podem ser removidas ou ajustadas.' },
  { title: 'Resultado Imediato', desc: 'Sorriso transformado em 1 a 2 sessões. Você sai da clínica com o sorriso que sempre quis.' },
  { title: 'Alta Durabilidade', desc: 'Com os cuidados adequados, as lentes de resina duram de 5 a 8 anos ou mais.' },
  { title: 'Personalização Total', desc: 'Cor, formato e tamanho são escolhidos junto com você para um resultado único e exclusivo.' },
]

export default function Tratamento() {
  return (
    <section id="tratamento" style={{ padding: '110px 0', background: 'var(--white)' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 5%' }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 70px' }}>
          <span
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
              marginBottom: 16,
            }}
          >
            <span style={{ display: 'block', width: 28, height: 1, background: 'var(--rose)' }} />
            O Tratamento
            <span style={{ display: 'block', width: 28, height: 1, background: 'var(--rose)' }} />
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 300,
              fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            O que são as{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>Lentes de Resina?</em>
          </h2>
          <div
            style={{
              width: 50,
              height: 1,
              background: 'linear-gradient(to right, var(--rose), transparent)',
              margin: '20px auto',
            }}
          />
          <p style={{ fontSize: '.95rem', lineHeight: 1.8, color: 'var(--mid)', fontWeight: 300 }}>
            Finas películas de resina composta aplicadas diretamente sobre os dentes, corrigindo cor,
            formato, alinhamento e tamanho — com mínimo desgaste e sem procedimentos invasivos.
          </p>
        </div>

        {/* Steps grid */}
        <div
          className="reveal d1"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 2,
            background: 'var(--light)',
            borderRadius: 12,
            overflow: 'hidden',
            marginBottom: 60,
          }}
        >
          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                background: 'var(--white)',
                padding: '42px 36px',
                transition: 'background .3s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--rose-pale)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--white)' }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '3rem',
                  fontWeight: 300,
                  color: 'var(--rose-mid)',
                  lineHeight: 1,
                  marginBottom: 18,
                }}
              >
                {step.num}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.35rem',
                  fontWeight: 400,
                  marginBottom: 12,
                  color: 'var(--black)',
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: '.88rem', lineHeight: 1.8, color: 'var(--mid)', fontWeight: 300 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div
          className="reveal d2"
          style={{
            background: 'var(--rose-light)',
            border: '1px solid var(--rose-mid)',
            borderRadius: 12,
            padding: 48,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 36,
          }}
        >
          {benefits.map((b) => (
            <div key={b.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'var(--rose)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--white)',
                  flexShrink: 0,
                  fontSize: '.8rem',
                  marginTop: 2,
                }}
              >
                ✦
              </div>
              <div>
                <h4 style={{ fontSize: '.88rem', fontWeight: 600, marginBottom: 5, color: 'var(--dark)' }}>
                  {b.title}
                </h4>
                <p style={{ fontSize: '.82rem', lineHeight: 1.65, color: 'var(--mid)', fontWeight: 300 }}>
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
