'use client'

import { useEffect, useState } from 'react'

import { CHAVE_CONSENTIMENTO, EVENTO_CONSENTIMENTO } from './consentimento-config'

export { CHAVE_CONSENTIMENTO } from './consentimento-config'

/**
 * Estado de consentimento para cookies de publicidade (LGPD, Art. 7º I).
 *
 * O que exige consentimento e o que não exige:
 *
 * - **Meta Pixel** — publicidade comportamental e remarketing. Não se sustenta
 *   sob legítimo interesse, porque foge da expectativa razoável do titular.
 *   Só carrega depois de "Aceitar".
 * - **GA4 / GTM** — medição de audiência. Roda sob legítimo interesse
 *   (Art. 7º IX), com direito de oposição descrito na Política de Privacidade.
 *
 * A escolha fica no localStorage do visitante. Não há servidor neste site para
 * guardar registro de consentimento — é uma limitação real do `output: 'export'`
 * e está anotada no CLAUDE.md.
 */

export type Consentimento = 'aceito' | 'recusado'

/** 'carregando' = o efeito que lê o localStorage ainda não rodou. */
export type EstadoConsentimento = Consentimento | 'pendente' | 'carregando'

export function lerConsentimento(): Consentimento | 'pendente' {
  if (typeof window === 'undefined') return 'pendente'
  try {
    const valor = window.localStorage.getItem(CHAVE_CONSENTIMENTO)
    return valor === 'aceito' || valor === 'recusado' ? valor : 'pendente'
  } catch {
    // Safari em modo privado e navegadores com storage bloqueado lançam aqui.
    // Sem persistência o visitante volta a ver o banner, que é o comportamento
    // seguro: na dúvida, não rastreia.
    return 'pendente'
  }
}

export function gravarConsentimento(valor: Consentimento) {
  try {
    window.localStorage.setItem(CHAVE_CONSENTIMENTO, valor)
  } catch {
    // Ignora: a sessão atual ainda respeita a escolha, via o evento abaixo.
  }

  aplicarConsentModeV2(valor)
  window.dispatchEvent(new CustomEvent<Consentimento>(EVENTO_CONSENTIMENTO, { detail: valor }))
}

/**
 * Avisa o Google Consent Mode v2 da escolha do visitante.
 *
 * Isto é o que faz o banner valer também para as tags configuradas DENTRO do
 * container GTM. Sem este sinal o banner controlaria apenas o Pixel que está no
 * código, e qualquer tag de anúncio adicionada depois pelo GTM dispararia à
 * revelia dele — o banner viraria enfeite.
 *
 * `window.gtag` é definida no bootstrap em `Analytics.tsx`. Se por algum motivo
 * ela não existir, empilhamos direto respeitando o formato que o gtag.js espera
 * (um item array-like por chamada, não argumentos soltos).
 */
export function aplicarConsentModeV2(valor: Consentimento) {
  const permissao = valor === 'aceito' ? 'granted' : 'denied'
  const atualizacao = {
    ad_storage: permissao,
    ad_user_data: permissao,
    ad_personalization: permissao,
  }

  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', atualizacao)
  } else {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(['consent', 'update', atualizacao])
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: 'fj_consentimento', fj_consentimento: valor })
}

/** Estado reativo do consentimento, compartilhado entre o banner e as tags. */
export function useConsentimento(): EstadoConsentimento {
  // Começa em 'carregando' de propósito: o HTML é estático e igual para todo
  // mundo, então ler o localStorage durante a renderização quebraria a
  // hidratação. Nada de consentimento aparece no primeiro paint.
  const [estado, setEstado] = useState<EstadoConsentimento>('carregando')

  useEffect(() => {
    setEstado(lerConsentimento())

    const aoMudar = (evento: Event) => {
      setEstado((evento as CustomEvent<Consentimento>).detail)
    }

    window.addEventListener(EVENTO_CONSENTIMENTO, aoMudar)
    return () => window.removeEventListener(EVENTO_CONSENTIMENTO, aoMudar)
  }, [])

  return estado
}
