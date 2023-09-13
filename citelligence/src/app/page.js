import ContactUs from '@/components/landingPage/ContactUs'
import Footer from '@/components/landingPage/Footer'
import SocWkSv from '@/components/landingPage/SocWkSv'
import MainHero from '@/components/landingPage/MainHero'
import Navbar from '@/components/landingPage/Navbar'
import Services from '@/components/landingPage/Services'
import Script from 'next/script'
export default function Home() {
  return (
    <>
    <Script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></Script>
    <main className="min-h-screen">
      <Navbar />
      <MainHero />
      <Services align="flex-row"/>
      <Services align="flex-row-reverse"/>
      <SocWkSv />
      <ContactUs />
      <Footer />
    </main>
    </>
  )
}
