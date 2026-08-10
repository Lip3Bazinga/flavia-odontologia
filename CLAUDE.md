# Flávia Jardim Odontologia — landing institucional

Site de uma página para captação de pacientes. Consultório de estética dental
em Franca/SP. O CTA de toda a página é o WhatsApp — **não existe formulário nem
backend**. Nenhum dado de paciente é digitado, transmitido ou armazenado pelo
site.

O site **rastreia navegação**, porém: GTM, GA4 e Meta Pixel foram instalados em
agosto/2026. Isso é tratamento de dado pessoal sob a LGPD (IP e ID de cookie
tornam o visitante identificável), ainda que não haja formulário. Ver a seção
"Tags, consentimento e LGPD" abaixo antes de mexer em qualquer coisa ali.

- Produção: https://flaviajardim.com.br
- Repositório de origem: `Lip3Bazinga/flavia-odontologia`

## Stack

| Camada | Escolha |
|---|---|
| Framework | Next.js 16 (App Router) com `output: 'export'` |
| UI | React 19, CSS-in-JS inline + Tailwind 4 para utilitários |
| Ícones | SVG à mão em `components/landing/icons.tsx` — sem biblioteca |
| Imagens | WebP pré-comprimido por script (ver abaixo) |
| Hospedagem | com4 (cPanel), estático em `public_html` |
| Pacotes | pnpm |

O site é **puramente estático**. Não há Node em produção, não há rota de API,
não há `next start`. As dependências de runtime são só `next`, `react` e
`react-dom` — tudo mais que veio do scaffold do v0 (Radix, react-hook-form,
recharts, zod, etc.) foi removido por não ter uso.

## Imagens

As fotos originais, direto da câmera, ficam em `assets-originais/` — **fora**
de `public/`, para não entrarem no build. O que vai pro ar é gerado:

```bash
pnpm images     # assets-originais/ → public/images/
```

`public/images/` é derivado e está no `.gitignore`. Se uma foto for trocada,
substitua em `assets-originais/` e rode `pnpm images` de novo.

Por que um script em vez do `next/image`: com `output: 'export'` o otimizador
do Next não roda (ele precisa de servidor), e por isso `images.unoptimized`
está ligado no `next.config.mjs`. A compressão precisa acontecer antes.
Sem isso o site servia 22,5 MB de fotos cruas de 4000px.

`og-image.jpg` continua em JPEG de propósito: WhatsApp e Facebook tratam WebP
de forma inconsistente ao gerar preview de link.

## Deploy na com4

```bash
pnpm install
pnpm images        # só se as fotos mudaram
pnpm build         # gera out/
```

O export gera, para cada rota, um `.html` **e um diretório de mesmo nome** com
os payloads RSC. Em Apache isso é uma armadilha: sem `DirectorySlash Off` e com
um `RewriteCond !-d` na regra de URL limpa, `/politica-de-privacidade` cai no
mod_dir, vira 301 para a versão com barra e responde **403** por causa do
`Options -Indexes`. O `.htaccess` já trata isso — não mexa naquele bloco sem
testar as duas formas da URL, com e sem barra final.

Suba **o conteúdo de `out/`** (não a pasta) para `public_html` do domínio,
via File Manager ou FTP. Inclua o `.htaccess` — ele é arquivo oculto, e o
File Manager do cPanel só o mostra com "Show Hidden Files" ligado. Sem ele
o site perde compressão, cache e o redirect de HTTPS.

O `.htaccess` fica versionado em `public/.htaccess` e o build o copia para
`out/` automaticamente.

### Domínio canônico

O site é servido **sem www**. Isso está em três lugares que precisam
concordar: `metadataBase`/`canonical` em `app/layout.tsx`, o `siteUrl` de
`app/sitemap.ts` e `app/robots.ts`, e o redirect 301 no `.htaccess`.
Se um dia mudar para www, mude nos três.

## Tags, consentimento e LGPD

Três tags rodam no site, com **bases legais diferentes** — essa distinção é o
eixo de todo o código em `components/Analytics.tsx` e `components/consentimento.ts`:

| Tag | ID | Base legal | Quando carrega |
|---|---|---|---|
| Google Tag Manager | `GTM-TGTK337S` | Legítimo interesse (Art. 7º IX) | Sempre |
| Google Analytics 4 | `G-YQY6Z0WE8Y` | Legítimo interesse (Art. 7º IX) | Sempre |
| Meta Pixel | `25963867439890274` | **Consentimento** (Art. 7º I) | Só após "Aceitar" |

Os IDs são identificadores públicos, não credenciais — ficam versionados de
propósito. A regra de segredos do monorepo não se aplica a eles.

Por que o Pixel é tratado diferente: publicidade comportamental e remarketing
não se sustentam sob legítimo interesse, porque fogem da expectativa razoável
do titular. Agrava aqui o fato de o `<title>` da página dizer "Lentes de Resina
| Estética Dental" — o Meta receberia o sinal de que aquela pessoa se interessa
por tratamento odontológico, que é dado de saúde por inferência (Art. 5º II).

### Coisas que quebram se você não souber

- **O bootstrap do Consent Mode é um `<script>` cru, não um `next/script`.**
  O estado `default` do Consent Mode precisa ser declarado *antes* de qualquer
  container carregar. Como GTM e GA4 usam `afterInteractive`, um script inline
  é garantidamente o primeiro. Trocar por `next/script` inverte a ordem e o
  Consent Mode passa a não valer nada.
- **`gtag()` empilha o objeto `arguments`, não os argumentos espalhados.**
  `dataLayer.push('consent', 'update', {…})` empilha três itens soltos e o
  gtag.js ignora. Use `window.gtag(...)`, definida no bootstrap.
- **O `<noscript>` do Meta Pixel foi removido de propósito.** Sem JavaScript
  não há banner, logo não há consentimento — e aquele `<img>` dispararia o
  rastreamento assim mesmo, furando o banner inteiro.
- **O arranjo das três tags foi conferido e é intencional.** Filipe verificou o
  container em 06/08/2026 e a decisão é manter as três como estão: GA4 e Pixel
  no código da página, em paralelo ao GTM. Não "corrija" isso.
  O risco que essa checagem descartou continua valendo para o futuro: se um dia
  GA4 ou Pixel forem adicionados *como tags dentro* do container, cada pageview
  passa a contar duas vezes e o bloco correspondente aqui precisa sair. O
  Consent Mode v2 já propaga a escolha do visitante para as tags do GTM, então o
  banner continua valendo para elas de qualquer forma.

### Pendências desta frente

- **Não há registro de consentimento.** A escolha vive só no `localStorage` do
  visitante. Provar que fulano consentiu em tal data exigiria servidor, que o
  `output: 'export'` não tem. Aceitável para o porte do site; não é o ideal.
- **A Política de Privacidade não passou por advogado.** Ela descreve com
  honestidade o que o site faz, mas a clínica trata dado de paciente fora do
  site (WhatsApp, prontuário, agenda) e esse conjunto maior precisa de revisão.
- ~~`CNPJ` vazio~~ — preenchido em 10/08/2026 (`11.676.874/0001-80`), junto com
  o `CRO` (`CRO-SP 77010`). Ambos vieram da cliente por WhatsApp. O CNPJ teve o
  dígito verificador conferido. A cliente informou que **migrou para CNPJ** —
  se em algum momento aparecer um CPF antigo em contrato ou nota, é esperado.

### Nome fantasia ≠ razão social

Em `dados-clinica.ts` são duas constantes distintas, e aqui elas **não
coincidem**:

| Constante | Valor | Onde aparece |
|---|---|---|
| `NOME_FANTASIA` | Flávia Jardim Odontologia | rodapé, textos ao paciente |
| `RAZAO_SOCIAL` | Carlos Eduardo da Silva Catin e Companhia Ltda. | só a Política de Privacidade |

A razão social não contém "Flávia Jardim". Isso **não é erro de cadastro** — a
clínica opera sob nome fantasia diferente da PJ registrada. Quem responde
juridicamente pelo tratamento de dados é a PJ, por isso é ela que identifica o
controlador na política (LGPD Art. 9º, I); e é o nome fantasia que o paciente
reconhece, por isso é ele que vai no rodapé.

Trocar um pelo outro quebra silenciosamente: ou a política identifica o
controlador errado, ou o rodapé exibe ao paciente um nome que ele não associa à
clínica. Na dúvida, `NOME_FANTASIA` para tudo que é voltado ao público e
`RAZAO_SOCIAL` só onde a lei pede a pessoa jurídica.

O `ENDERECO` exibido na política é o **do consultório**, não o endereço fiscal
do cartão CNPJ. Decisão do Filipe em 10/08/2026, tomada com o desencontro entre
razão social e nome fantasia já conhecido. É o endereço onde o paciente é de
fato atendido e o mesmo que aparece no rodapé e no JSON-LD — manter os três
iguais. Se algum dia a política precisar do endereço fiscal, ele vira uma
constante separada; não reaproveite `ENDERECO` para isso.

## Decisões que valem registrar

- **Metadata routes precisam de `export const dynamic = 'force-static'`.**
  No Next 16, `robots.ts` e `sitemap.ts` quebram o build com `output: 'export'`
  sem isso. O erro não diz qual arquivo é — diz só "Failed to collect page
  data for /robots.txt".
- **`typescript.ignoreBuildErrors` foi removido.** O projeto typecheca limpo;
  a flag vinha do scaffold do v0 e só serviria para deixar erro passar batido.
- **Nada de `next/image`.** Incompatível com export estático sem loader
  customizado; o ganho já vem do script de imagens.

## Pendência

O **número do CRO** está vazio em `components/landing/dados-clinica.ts`.
A Resolução CFO 196/2019 exige nome e inscrição no CRO em publicidade
odontológica. Enquanto a constante estiver vazia o site omite o trecho
inteiro, em vez de exibir um número inventado — mas isso é um paliativo,
não a solução. Preencher antes de divulgar o site.
