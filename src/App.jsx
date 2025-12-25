import React, { useEffect } from 'react'
import Navber from './components/menu/Navber';
import Banner from './components/banner/Banner';
import About from './components/about/About';
import Skill from './components/skill/Skill';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Projects from './components/project part/Projects';
import SignUpPage from './components/signup/Signup';

// 1. Lenis ebong GSAP import korun
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomCursor from './components/CusorAnimation';

const App = () => {

  useEffect(() => {
    // 2. GSAP ScrollTrigger register korun
    gsap.registerPlugin(ScrollTrigger);

    // 3. Lenis initialize korun
    const lenis = new Lenis({
      duration: 1.5, // Scroll koto smooth hobe (beshi dile aro slow/smooth hobe)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,
      touchSmall: true,
    });

    // 4. Lenis-er sathe ScrollTrigger sync kora
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Cleanup function
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
    <CustomCursor/>
      <Navber/>
      <Banner/>
      <About/>
      <Skill/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App