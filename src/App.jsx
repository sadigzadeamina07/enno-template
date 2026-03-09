import { useState } from 'react'
import './index.css'
import Header from './Component/Header'
import Hero from './Component/Hero'
import About from './Component/About'
import Cards from './Component/Cards'
import Footer from './Component/Footer'
import Services from './Component/Services'
import Action from './Component/Action'
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Cards />
      <About />
      <Services />
      <Action />
      <Footer />

    </>
  )
}
export default App
