'use client'

import Script from 'next/script'

import { useConsentimento } from './consentimento'

/**
 * Meta Pixel — carregado apenas mediante consentimento explícito.
 *
 * Enquanto o visitante não clica em "Aceitar", este componente não renderiza
 * nada: o `fbevents.js` sequer é baixado, então nenhuma requisição sai para
 * `connect.facebook.net` e nenhum cookie `_fbp` é gravado. Não basta deixar de
 * chamar `fbq('track')` — o próprio carregamento do script já é tratamento de
 * dado pessoal.
 */
export function MetaPixel({ id }: { id: string }) {
  const consentimento = useConsentimento()

  if (consentimento !== 'aceito') return null

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${id}');
fbq('track', 'PageView');`}
    </Script>
  )
}
