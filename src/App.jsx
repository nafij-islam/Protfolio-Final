import React from 'react'
import Navber from './components/menu/Navber';
import Banner from './components/banner/Banner';
import About from './components/about/About';
import Skill from './components/skill/Skill';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Projects from './components/project part/Projects';
import SignUpPage from './components/signup/Signup';


const App = () => {
  return (
    <>
    <Navber/>
    <Banner/>
    <About/>
    <Skill/>
    <Projects/>
    <Contact/>
    {/* <SignUpPage/> */}
    <Footer/>
      
      
    </>
  )
}

export default App