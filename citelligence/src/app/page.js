import ContactUs from '@/components/landingPage/ContactUs'
import Footer from '@/components/landingPage/Footer'
import HeroServices from '@/components/landingPage/HeroServices'
import MainHero from '@/components/landingPage/MainHero'
import NavbarLanding from '@/components/landingPage/NavbarLanding'

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavbarLanding />
      <MainHero />
      <HeroServices />
      <ContactUs />
      <Footer />
    </main>
  )
}
