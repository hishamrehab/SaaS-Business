import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Pricing from './sections/Pricing'
import Faq from './sections/Faq'
import Testimonials from './sections/Testimonials'
import Demo from './sections/Demo'
import Footer from './sections/Footer'

const App = () => {
  return (
    <main className='overflow-hidden'>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Demo />
      <Footer />
    </main>
  )
}

export default App
