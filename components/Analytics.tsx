import Script from 'next/script'

import { BannerConsentimento } from './BannerConsentimento'
// Importado do módulo SEM 'use client' de propósito — ver o comentário lá.
// Vindo de `consentimento.ts`, o servidor receberia um proxy de referência de
// cliente e a chave do localStorage viraria texto de erro dentro do script.
import { CHAVE_CONSENTIMENTO } from './consentimento-config'
import { MetaPixel } from './MetaPixel'

/**
 * Tags de marketing do site: Google Tag Manager, GA4 e Meta Pixel.
 *
 * Os três IDs abaixo NÃO são segredo — eles vão para o HTML público de
 * qualquer forma, é assim que as tags funcionam. Por isso ficam versionados
 * aqui, e não em `.env`. (A regra de segredos do CLAUDE.md do monorepo vale
 * para credencial, não para identificador público.)
 *
 * ⚠️ GA4 e Meta Pixel estão instalados DIRETO na página, em paralelo ao GTM.
 * Se algum dia eles também forem configurados como tags dentro do container
 * GTM-TGTK337S, cada pageview passa a ser contado duas vezes. Nesse caso,
 * remova daqui o bloco correspondente — não desative dos dois lados.
 *
 * Divisão por base legal (ver `consentimento.ts` e a Política de Privacidade):
 * GTM e GA4 sobem sempre, sob legítimo interesse; o Meta Pixel só sobe depois
 * do "Aceitar" no banner.
 */

export const GTM_ID = 'GTM-TGTK337S'
export const GA4_ID = 'G-YQY6Z0WE8Y'
export const META_PIXEL_ID = '25963867439890274'

/**
 * Roda antes de GTM e GA4, ainda durante o parse do HTML.
 *
 * Precisa ser um `<script>` cru, e não um `next/script`: o Consent Mode só
 * funciona se o estado `default` for declarado ANTES de qualquer container
 * carregar. Como GTM e GA4 usam `afterInteractive` (pós-hidratação), um script
 * inline renderizado aqui é garantidamente o primeiro a executar.
 *
 * A leitura do localStorage é síncrona e de propósito: quem já aceitou numa
 * visita anterior não passa por um intervalo de `denied` no começo da sessão.
 */
function BootstrapConsentimento() {
  const codigo = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;

var aceito = false;
try { aceito = localStorage.getItem('${CHAVE_CONSENTIMENTO}') === 'aceito'; } catch (e) {}

gtag('consent', 'default', {
  ad_storage: aceito ? 'granted' : 'denied',
  ad_user_data: aceito ? 'granted' : 'denied',
  ad_personalization: aceito ? 'granted' : 'denied',
  analytics_storage: 'granted',
  wait_for_update: 500
});`.trim()

  return <script dangerouslySetInnerHTML={{ __html: codigo }} />
}

export function Analytics() {
  return (
    <>
      <BootstrapConsentimento />

      {/* Google Tag Manager */}
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>

      {/* Google tag (gtag.js) — GA4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`gtag('js', new Date());
gtag('config', '${GA4_ID}');`}
      </Script>

      {/* Meta Pixel — condicionado ao consentimento */}
      <MetaPixel id={META_PIXEL_ID} />

      <BannerConsentimento />
    </>
  )
}

/**
 * Fallback para navegador com JavaScript desligado.
 *
 * Só o GTM entra aqui. O `<noscript>` do Meta Pixel foi deliberadamente
 * OMITIDO: sem JavaScript não há banner, logo não há como obter consentimento,
 * e aquele `<img>` dispararia o rastreamento de publicidade de todo jeito —
 * exatamente o que o banner existe para impedir.
 *
 * O iframe do GTM precisa ser o primeiro elemento dentro do `<body>`.
 */
export function AnalyticsNoscript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}
