import type { Metadata } from 'next'
import Link from 'next/link'

import { GA4_ID, GTM_ID, META_PIXEL_ID } from '@/components/Analytics'
import {
  CNPJ,
  EMAIL_CONTATO,
  ENDERECO,
  NOME_FANTASIA,
  RAZAO_SOCIAL,
  TELEFONE_EXIBICAO,
} from '@/components/landing/dados-clinica'

/**
 * Política de Privacidade.
 *
 * Escrita a partir do que o site REALMENTE faz — não é um modelo genérico
 * copiado. Se as tags de `components/Analytics.tsx` mudarem, esta página muda
 * junto: descrever tratamento que não acontece é tão problemático quanto
 * omitir tratamento que acontece.
 *
 * ⚠️ Este texto não substitui revisão jurídica. Ele cobre honestamente o que o
 * site faz, mas a clínica trata dados de paciente fora do site (WhatsApp,
 * prontuário, agenda) e esse conjunto maior precisa de um advogado.
 *
 * A data abaixo é editada à mão de propósito. `new Date()` daria a data do
 * build, e um rebuild por qualquer motivo mudaria a data de uma política que
 * não foi alterada — o que é justamente o oposto do que a data serve para
 * comunicar.
 */
const ATUALIZADA_EM = '5 de agosto de 2026'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Dra. Flávia Jardim',
  description:
    'Como o site da Dra. Flávia Jardim trata dados de navegação, quais cookies utiliza e como exercer seus direitos previstos na LGPD.',
  alternates: { canonical: '/politica-de-privacidade' },
  // Página de suporte: útil para quem procura, mas não deve competir com a
  // landing nos resultados de busca.
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

function Secao({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.35rem, 2.4vw, 1.7rem)',
          fontWeight: 400,
          color: 'var(--black)',
          marginBottom: 14,
          lineHeight: 1.25,
        }}
      >
        {titulo}
      </h2>
      {children}
    </section>
  )
}

const paragrafo: React.CSSProperties = {
  fontSize: '.95rem',
  lineHeight: 1.85,
  color: 'var(--mid)',
  fontWeight: 300,
  marginBottom: 14,
}

const lista: React.CSSProperties = {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  marginBottom: 14,
}

function Item({ children }: { children: React.ReactNode }) {
  return (
    <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
      <span
        aria-hidden
        style={{
          flexShrink: 0,
          width: 5,
          height: 5,
          borderRadius: '50%',
          background: 'var(--rose)',
          marginTop: 11,
        }}
      />
      <span style={{ ...paragrafo, marginBottom: 0 }}>{children}</span>
    </li>
  )
}

export default function PoliticaDePrivacidade() {
  return (
    <main style={{ background: 'var(--white)', minHeight: '100vh' }}>
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '120px 5% 90px' }}>
        <Link
          href="/"
          style={{
            fontSize: '.78rem',
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            color: 'var(--rose)',
            textDecoration: 'none',
            fontWeight: 500,
          }}
        >
          ← Voltar ao site
        </Link>

        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 300,
            fontSize: 'clamp(2.1rem, 4vw, 3rem)',
            lineHeight: 1.15,
            color: 'var(--black)',
            margin: '28px 0 12px',
          }}
        >
          Política de <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>Privacidade</em>
        </h1>

        <p style={{ fontSize: '.83rem', color: 'var(--mid)', marginBottom: 48 }}>
          Última atualização: {ATUALIZADA_EM}
        </p>

        <Secao titulo="Resumo honesto, em três linhas">
          <p style={paragrafo}>
            Este site não tem formulário, login nem cadastro. Você não digita nada aqui e nada seu
            é enviado para um servidor nosso. O que existe são <strong>cookies de terceiros</strong>{' '}
            — Google e Meta — que registram sua navegação para medirmos audiência e avaliarmos
            anúncios. Os de publicidade só funcionam se você aceitar.
          </p>
        </Secao>

        <Secao titulo="Quem é o controlador dos seus dados">
          <p style={paragrafo}>
            <strong>{RAZAO_SOCIAL}</strong>
            {CNPJ && `, inscrita no CNPJ sob o nº ${CNPJ}`}, que atende sob o nome{' '}
            <strong>{NOME_FANTASIA}</strong>, com endereço em {ENDERECO}.
          </p>
          <p style={paragrafo}>
            Para qualquer assunto relativo a dados pessoais, incluindo os pedidos descritos no
            item “Seus direitos”, o canal é{' '}
            <a href={`mailto:${EMAIL_CONTATO}`} style={{ color: 'var(--rose)' }}>
              {EMAIL_CONTATO}
            </a>{' '}
            ou o telefone {TELEFONE_EXIBICAO}.
          </p>
        </Secao>

        <Secao titulo="Que dados são tratados">
          <p style={paragrafo}>
            Nenhum dado é fornecido por você diretamente ao site. O que é coletado vem
            automaticamente do seu navegador, pelas ferramentas de terceiros abaixo:
          </p>
          <ul style={lista}>
            <Item>Endereço IP (usado também para estimar cidade e estado, não endereço exato).</Item>
            <Item>
              Identificadores de cookie gerados por essas ferramentas — o <code>_ga</code> do
              Google e o <code>_fbp</code> da Meta —, que funcionam como um número anônimo
              associado ao seu navegador.
            </Item>
            <Item>
              Modelo de dispositivo, sistema operacional, navegador, idioma e resolução de tela.
            </Item>
            <Item>
              Páginas e seções visitadas, tempo de permanência, cliques e de onde você veio
              (busca, anúncio, link direto).
            </Item>
          </ul>
          <p style={paragrafo}>
            Não tratamos nome, CPF, e-mail, histórico de saúde ou qualquer dado clínico por meio
            deste site.
          </p>
        </Secao>

        <Secao titulo="Para que usamos, e com que base legal">
          <p style={paragrafo}>
            A LGPD exige uma base legal para cada finalidade. Aqui são duas, e elas funcionam de
            formas diferentes:
          </p>
          <ul style={lista}>
            <Item>
              <strong>Medir audiência</strong> — entender quantas pessoas visitam o site, por quais
              caminhos chegam e quais seções interessam, para melhorá-lo. Ferramenta: Google
              Analytics 4 ({GA4_ID}), orquestrado pelo Google Tag Manager ({GTM_ID}). Base legal:{' '}
              <strong>legítimo interesse</strong> (Art. 7º, IX). Não depende de consentimento, mas
              você pode se opor — veja “Seus direitos”.
            </Item>
            <Item>
              <strong>Avaliar publicidade</strong> — medir se quem viu nossos anúncios no Facebook
              e no Instagram chegou até aqui, e apresentar anúncios a quem já visitou o site.
              Ferramenta: Meta Pixel ({META_PIXEL_ID}). Base legal:{' '}
              <strong>consentimento</strong> (Art. 7º, I). Essa ferramenta{' '}
              <strong>só é carregada depois que você clica em “Aceitar”</strong> no aviso exibido
              na primeira visita. Se você recusar ou simplesmente não responder, o script não é
              sequer baixado e nenhum cookie da Meta é criado.
            </Item>
          </ul>
        </Secao>

        <Secao titulo="Com quem os dados são compartilhados">
          <p style={paragrafo}>
            Com as próprias empresas que fornecem as ferramentas: <strong>Google LLC</strong>{' '}
            (Analytics e Tag Manager) e <strong>Meta Platforms, Inc.</strong> (Pixel), esta última
            apenas mediante seu consentimento. Ambas tratam esses dados também para finalidades
            próprias, sob suas respectivas políticas.
          </p>
          <p style={paragrafo}>
            Isso implica <strong>transferência internacional de dados</strong> (Art. 33 da LGPD),
            já que as duas processam informações em servidores fora do Brasil, principalmente nos
            Estados Unidos.
          </p>
          <p style={paragrafo}>
            Não vendemos, alugamos nem cedemos dados de navegação a mais ninguém.
          </p>
        </Secao>

        <Secao titulo="Quando você clica no WhatsApp">
          <p style={paragrafo}>
            Os botões de contato deste site levam você para o WhatsApp. A partir do momento em que
            a conversa começa, ela deixa de acontecer neste site e passa a ser regida pela política
            de privacidade do próprio WhatsApp, da Meta.
          </p>
          <p style={paragrafo}>
            O que você nos escrever por lá — nome, telefone, o que deseja tratar — é recebido
            diretamente pela clínica e usado para atendê-lo. Recomendamos não enviar informações de
            saúde detalhadas por mensagem antes da consulta.
          </p>
        </Secao>

        <Secao titulo="Por quanto tempo os dados ficam guardados">
          <p style={paragrafo}>
            Os prazos são definidos pelas próprias ferramentas: o Google Analytics 4 retém dados de
            usuário e evento por até 14 meses, e a Meta segue a política de retenção do Pixel. Os
            cookies têm validade própria e podem ser apagados por você a qualquer momento nas
            configurações do navegador.
          </p>
        </Secao>

        <Secao titulo="Seus direitos">
          <p style={paragrafo}>
            O Art. 18 da LGPD garante a você, entre outros, o direito de confirmar se tratamos seus
            dados, acessá-los, corrigi-los, solicitar anonimização ou eliminação, saber com quem
            foram compartilhados e revogar consentimento. Como este site não guarda dados
            identificáveis em servidor próprio, a maior parte desses pedidos é resolvida
            diretamente nas ferramentas — e explicamos como abaixo.
          </p>
          <ul style={lista}>
            <Item>
              <strong>Revogar o consentimento de publicidade</strong> — apague os dados do site no
              seu navegador (em “Configurações → Privacidade → Cookies e dados de sites”). O aviso
              de consentimento volta a aparecer na próxima visita e você pode escolher “Recusar”. A
              revogação vale a partir do momento em que é feita e não desfaz o tratamento anterior,
              que permanece legítimo.
            </Item>
            <Item>
              <strong>Opor-se à medição de audiência</strong> — instale o{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--rose)' }}
              >
                complemento de desativação do Google Analytics
              </a>
              , ou envie seu pedido para {EMAIL_CONTATO}. Por se tratar de legítimo interesse, o
              Art. 18, § 2º assegura esse direito de oposição.
            </Item>
            <Item>
              <strong>Bloquear tudo de uma vez</strong> — a maioria dos navegadores permite
              recusar cookies de terceiros nas configurações de privacidade. Isso impede as duas
              ferramentas de funcionar, e o site continua acessível normalmente.
            </Item>
            <Item>
              <strong>Qualquer outro pedido</strong> — escreva para {EMAIL_CONTATO}. Respondemos no
              prazo previsto em lei. Se a resposta não o satisfizer, você pode reclamar à{' '}
              <a
                href="https://www.gov.br/anpd/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--rose)' }}
              >
                Autoridade Nacional de Proteção de Dados (ANPD)
              </a>
              .
            </Item>
          </ul>
        </Secao>

        <Secao titulo="Crianças e adolescentes">
          <p style={paragrafo}>
            Este site é dirigido a adultos que buscam tratamento odontológico. Não coletamos
            intencionalmente dados de menores de 18 anos. O atendimento de pacientes menores é
            feito com o consentimento de pai, mãe ou responsável legal, presencialmente na clínica.
          </p>
        </Secao>

        <Secao titulo="Alterações desta política">
          <p style={paragrafo}>
            Se as ferramentas usadas no site mudarem, este texto muda junto, e a data de última
            atualização no topo é alterada. Vale a pena reler quando isso acontecer.
          </p>
        </Secao>

        <div
          style={{
            borderTop: '1px solid var(--light)',
            paddingTop: 28,
            marginTop: 8,
          }}
        >
          <Link
            href="/"
            style={{
              fontSize: '.85rem',
              color: 'var(--rose)',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            ← Voltar ao site
          </Link>
        </div>
      </div>
    </main>
  )
}
