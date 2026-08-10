/**
 * Otimiza as fotos originais para a web.
 *
 * Entrada : assets-originais/   (fotos cruas, direto da câmera — fora do build)
 * Saída   : public/images/      (o que realmente sobe pro servidor)
 *
 * O site é exportado estaticamente (`output: 'export'`), então o otimizador de
 * imagens do Next não roda em produção. O redimensionamento e a compressão
 * precisam acontecer aqui, em tempo de build local.
 *
 * Uso: pnpm images
 */

import sharp from 'sharp'
import { readdir, mkdir, stat } from 'node:fs/promises'
import { join, parse } from 'node:path'

const ORIGEM = 'assets-originais'
const DESTINO = 'public/images'

// Limite do maior lado, por arquivo. Fotos de câmera vêm com 4000px, o que é
// ~3x mais do que qualquer breakpoint do site consome.
const LIMITES = {
  'flavia.jpg': 1800, // fundo do hero (desktop) — retrato, é o LCP
  'flavia_2.jpeg': 1600, // seção Sobre
  'local_1.jpeg': 1600, // galeria do consultório
  'local_2.jpeg': 1600,
  'local_3.jpeg': 1600,
  'local_4.jpeg': 1600,
  'local_5.jpeg': 1600,
  'local_6.jpeg': 1200, // estacionamento — aparece pequeno
  'antes_1.jpeg': 1400, // comparativos antes/depois
  'antes_2.jpeg': 1400,
  'antes_3.jpeg': 1400,
  'depois_1.jpeg': 1400,
  'depois_2.jpeg': 1400,
  'depois_3.jpeg': 1400,
  'og-image.jpg': 1200, // card de compartilhamento — 1200x630, fica em JPEG
}

const LIMITE_PADRAO = 1600
const QUALIDADE_WEBP = 80
const QUALIDADE_JPEG = 82

// O card do OpenGraph continua em JPEG: WhatsApp e Facebook ainda tratam WebP
// de forma inconsistente ao gerar o preview do link.
const MANTER_JPEG = new Set(['og-image.jpg'])

const kb = (bytes) => Math.round(bytes / 1024)

async function main() {
  await mkdir(DESTINO, { recursive: true })

  let arquivos
  try {
    arquivos = (await readdir(ORIGEM)).filter((f) => /\.(jpe?g|png)$/i.test(f))
  } catch {
    console.error(`Pasta "${ORIGEM}" não encontrada. Ela guarda as fotos originais.`)
    process.exit(1)
  }

  if (arquivos.length === 0) {
    console.error(`Nenhuma imagem em "${ORIGEM}".`)
    process.exit(1)
  }

  let totalAntes = 0
  let totalDepois = 0

  for (const arquivo of arquivos.sort()) {
    const entrada = join(ORIGEM, arquivo)
    const limite = LIMITES[arquivo] ?? LIMITE_PADRAO
    const manterJpeg = MANTER_JPEG.has(arquivo)
    const saida = join(DESTINO, manterJpeg ? arquivo : `${parse(arquivo).name}.webp`)

    const pipeline = sharp(entrada)
      .rotate() // respeita o EXIF de orientação antes de descartar os metadados
      .resize({ width: limite, height: limite, fit: 'inside', withoutEnlargement: true })

    await (manterJpeg
      ? pipeline.jpeg({ quality: QUALIDADE_JPEG, mozjpeg: true, progressive: true })
      : pipeline.webp({ quality: QUALIDADE_WEBP, effort: 6 })
    ).toFile(saida)

    const antes = (await stat(entrada)).size
    const depois = (await stat(saida)).size
    totalAntes += antes
    totalDepois += depois

    const { width, height } = await sharp(saida).metadata()
    const reducao = Math.round((1 - depois / antes) * 100)
    console.log(
      `${arquivo.padEnd(16)} → ${parse(saida).base.padEnd(16)} ` +
        `${String(width).padStart(4)}x${String(height).padEnd(4)} ` +
        `${String(kb(antes)).padStart(5)} KB → ${String(kb(depois)).padStart(4)} KB  (-${reducao}%)`
    )
  }

  const reducaoTotal = Math.round((1 - totalDepois / totalAntes) * 100)
  console.log(
    `\n${arquivos.length} imagens: ${kb(totalAntes)} KB → ${kb(totalDepois)} KB (-${reducaoTotal}%)`
  )
}

main().catch((erro) => {
  console.error(erro)
  process.exit(1)
})
