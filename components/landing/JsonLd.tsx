// Dados estruturados (JSON-LD) para busca local — Schema.org "Dentist".
// É o que permite ao Google exibir o card rico da clínica (endereço, telefone,
// horário e estrelas) nos resultados. Preencha os campos marcados com TODO.

const siteUrl = 'https://flaviajardim.com.br'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  '@id': `${siteUrl}/#clinica`,
  name: 'Dra. Flávia Jardim — Estética Dental',
  description:
    'Especialista em lentes de resina e estética dental há mais de 20 anos em Franca/SP.',
  url: siteUrl,
  telephone: '+5516994046647',
  image: `${siteUrl}/images/og-image.jpg`, // TODO: confirmar imagem
  priceRange: '$$',
  currenciesAccepted: 'BRL',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. São Vicente, 4315 - Jardim Noemia',
    addressLocality: 'Franca',
    addressRegion: 'SP',
    postalCode: '14403-830',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -20.556943035807823,
    longitude: -47.3819449,
  },
  hasMap:
    'https://www.google.com/maps/place/Fla+-+Fl%C3%A1via+Jardim+-+Odontologia+Est%C3%A9tica/@-20.5571992,-47.3819449,1069m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94b0a9bc0b40923d:0xca7df6efff80ff7c!8m2!3d-20.5571992!4d-47.3819449!16s%2Fg%2F11tc2q9v8c',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00',
    },
  ],
  medicalSpecialty: 'Dentistry',
  areaServed: { '@type': 'City', name: 'Franca' },
  // sameAs: perfis oficiais (reforça a identidade da clínica no Google)
  sameAs: [
    'https://www.instagram.com/sorrindoporflaviajardim/',
    'https://www.google.com/maps/place/Fla+-+Fl%C3%A1via+Jardim+-+Odontologia+Est%C3%A9tica/@-20.5571992,-47.3819449,1069m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94b0a9bc0b40923d:0xca7df6efff80ff7c!8m2!3d-20.5571992!4d-47.3819449!16s%2Fg%2F11tc2q9v8c',
  ],
}

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // JSON estático e controlado por nós — seguro serializar aqui.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
