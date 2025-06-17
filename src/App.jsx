import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Features from './Components/Features'
import Box from './Components/Box'
import Templates from './Components/Templates'
import QAAccordion from './Components/QAAccordion'
import Pricing from './Components/Pricing'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Box />
      <Templates />
      <QAAccordion />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
