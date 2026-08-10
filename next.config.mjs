/** @type {import('next').NextConfig} */
const nextConfig = {
  // Site estático: o build gera `out/`, que é o conteúdo enviado para a
  // public_html da com4 (cPanel). Não há runtime Node em produção.
  output: 'export',

  images: {
    // Obrigatório com `output: 'export'` — o otimizador de imagens do Next
    // precisa de servidor. A compressão é feita antes, por `pnpm images`
    // (ver scripts/otimizar-imagens.mjs).
    unoptimized: true,
  },
}

export default nextConfig
