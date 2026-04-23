export default function Sobre() {
  return (
    <section
      id="sobre"
      style={{ background: 'var(--dark)', color: 'var(--white)', padding: '110px 0' }}
    >
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 5%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 90,
            alignItems: 'center',
          }}
          className="sobre-grid"
        >
          {/* Photo */}
          <div
            className="reveal"
            style={{
              aspectRatio: '3/4',
              borderRadius: 8,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <img
              src="/images/hero-doctor.jpg"
              alt="Dra. Flávia Jardim - Especialista em Dentística e Estética Dental"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />

            {/* Gradient overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '50%',
                background: 'linear-gradient(to top, rgba(0,0,0,.7), transparent)',
              }}
            />

            {/* Credential badge */}
            <div
              style={{
                position: 'absolute',
                bottom: 24,
                left: 24,
                right: 24,
                zIndex: 2,
                background: 'rgba(0,0,0,.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,.08)',
                borderRadius: 6,
                padding: '14px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: 14,
              }}
            >
              <div
                style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--rose)', flexShrink: 0 }}
              />
              <p style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.65)', lineHeight: 1.5 }}>
                <strong style={{ color: 'var(--white)' }}>Dra. Flávia Jardim</strong>
                <br />
                CRO-SP · Especialista em Dentística e Estética Dental
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="reveal d2">
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
              Sobre mim
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 300,
                fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
                color: 'var(--white)',
                marginTop: 14,
                marginBottom: 8,
                lineHeight: 1.1,
              }}
            >
              Cuidando de sorrisos
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--rose-mid)' }}>há mais de 15 anos</em>
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1.1rem',
                color: 'rgba(255,255,255,.35)',
                marginBottom: 28,
              }}
            >
              com dedicação, técnica e humanidade
            </p>

            <p style={{ fontSize: '.95rem', lineHeight: 1.9, color: 'rgba(255,255,255,.6)', fontWeight: 300, marginBottom: 20 }}>
              Sou dentista especializada em estética e saúde bucal, com foco em{' '}
              <strong style={{ color: 'rgba(255,255,255,.9)', fontWeight: 500 }}>
                resultados naturais que respeitam a individualidade de cada paciente
              </strong>
              . Acredito que um sorriso bonito não precisa parecer &ldquo;feito&rdquo; — ele precisa parecer seu.
            </p>
            <p style={{ fontSize: '.95rem', lineHeight: 1.9, color: 'rgba(255,255,255,.6)', fontWeight: 300, marginBottom: 20 }}>
              Ao longo dos anos, aprendi que{' '}
              <strong style={{ color: 'rgba(255,255,255,.9)', fontWeight: 500 }}>
                transformar um sorriso é também transformar a autoestima
              </strong>
              . Por isso, cada atendimento começa com escuta ativa: entendo seus medos, seus desejos e
              só então planejamos juntos o melhor caminho.
            </p>
            <p style={{ fontSize: '.95rem', lineHeight: 1.9, color: 'rgba(255,255,255,.6)', fontWeight: 300 }}>
              Com formação contínua nos principais centros de odontologia estética do Brasil e do
              exterior, ofereço técnicas avançadas em um ambiente{' '}
              <strong style={{ color: 'rgba(255,255,255,.9)', fontWeight: 500 }}>
                acolhedor, seguro e premium
              </strong>
              .
            </p>

            {/* Stats */}
            <div
              style={{
                display: 'flex',
                gap: 36,
                marginTop: 36,
                paddingTop: 36,
                borderTop: '1px solid rgba(255,255,255,.08)',
              }}
            >
              {[
                { num: '+2.000', label: 'Pacientes atendidos' },
                { num: '15+', label: 'Anos de prática' },
                { num: '4', label: 'Especializações' },
              ].map((s) => (
                <div key={s.label}>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '2.4rem',
                      color: 'var(--rose-mid)',
                      display: 'block',
                      lineHeight: 1,
                    }}
                  >
                    {s.num}
                  </span>
                  <span
                    style={{
                      fontSize: '.72rem',
                      color: 'rgba(255,255,255,.4)',
                      letterSpacing: '.08em',
                      marginTop: 4,
                      display: 'block',
                      textTransform: 'uppercase',
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
