// Globais criadas pelos snippets de tag em `components/Analytics.tsx`.
// Elas existem em runtime, no navegador, e não têm pacote de tipos porque os
// snippets são código colado do Google e da Meta — não dependências npm.

declare global {
  interface Window {
    /** Fila do Google Tag Manager. */
    dataLayer: unknown[]

    /**
     * `function gtag(){dataLayer.push(arguments)}` — definida no script de
     * bootstrap. É `arguments` que vai para a fila, não os argumentos
     * espalhados; por isso chamamos esta função em vez de mexer no dataLayer
     * na mão.
     */
    gtag?: (...args: unknown[]) => void

    /** Meta Pixel. Só existe depois do consentimento. */
    fbq?: (...args: unknown[]) => void
  }
}

export {}
