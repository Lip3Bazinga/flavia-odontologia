import Nav from '@/components/landing/Nav'
import Hero from '@/components/landing/Hero'
import ProofStrip from '@/components/landing/ProofStrip'
import Resultados from '@/components/landing/Resultados'
import Consultorio from '@/components/landing/Consultorio'
import Depoimentos from '@/components/landing/Depoimentos'
import Sobre from '@/components/landing/Sobre'
import Tratamento from '@/components/landing/Tratamento'
import Diferenciais from '@/components/landing/Diferenciais'
import Objecoes from '@/components/landing/Objecoes'
import CtaFinal from '@/components/landing/CtaFinal'
import Footer from '@/components/landing/Footer'
import WhatsAppFloat from '@/components/landing/WhatsAppFloat'
import RevealObserver from '@/components/landing/RevealObserver'

export default function Page() {
  return (
    <>
      <RevealObserver />
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <Resultados />
        <Consultorio />
        <Depoimentos />
        <Sobre />
        <Tratamento />
        <Diferenciais />
        <Objecoes />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
