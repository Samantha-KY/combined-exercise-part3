import React from 'react'
import Header from '../modules/Header'
import AboutUs from './AboutUs'
import ClientSection from './ClientSection'
import DesignerPage from './DesignerPage'
import Footer from './Footer'
import HelpPage from './HelpPage'
import HeroSection from './HeroSection'
import OurClients from './OurClients'

function HomePage() {
  return (
    <section>
      <Header />
      <HeroSection />
      <AboutUs />
      <ClientSection />
      <OurClients />
      <DesignerPage />
      <HelpPage />
      <Footer/>
    </section>
  )
}

export default HomePage