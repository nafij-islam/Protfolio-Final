import React from 'react'
import Navber from './components/menu/Navber';
import Banner from './components/banner/Banner';
import About from './components/about/About';
import Skill from './components/skill/Skill';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <>
      <Navber/>
      <Banner/>
      <About/>
      <Skill/>
      <Contact/>
      <Footer/>
      
    </>
  )
}

export default App