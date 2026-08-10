/**
 * Constantes de consentimento compartilhadas entre servidor e cliente.
 *
 * Este arquivo NÃO tem `'use client'`, e isso é o ponto dele.
 *
 * `consentimento.ts` precisa da diretiva porque exporta um hook. Mas quando um
 * Server Component importa um valor de um módulo marcado como cliente, o Next
 * não entrega a string — entrega um proxy de referência de cliente. Interpolar
 * esse proxy numa template string produz, literalmente, o texto
 * "function(){throw Error(\"Attempted to call ... from the server\")}" dentro do
 * JavaScript gerado, sem erro de build e sem aviso.
 *
 * Foi exatamente o que aconteceu com o bootstrap do Consent Mode em
 * `Analytics.tsx`: a chave do localStorage virou a mensagem de erro, e quem já
 * havia aceitado nunca era reconhecido na volta. Por isso a constante mora aqui.
 */

export const CHAVE_CONSENTIMENTO = 'fj:consentimento-marketing'

/** Evento interno que sincroniza banner e tags dentro da mesma sessão. */
export const EVENTO_CONSENTIMENTO = 'fj:consentimento-mudou'
