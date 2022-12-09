import React from 'react'
import About from './Component/About'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Popup from './Component/Popup'
import Services from './Component/Services'
import Team from './Component/Team'
import Testimonial from './Component/Testimonial'
import Why from './Component/Why'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Why/>
      <Team/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      <Popup/>
    </div>
  )
}
export default App
