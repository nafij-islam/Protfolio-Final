import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

// 1. Import the TypeAnimation component
import { TypeAnimation } from 'react-type-animation';


const Banner = () => {
  return (
   <section className='bg-[#bddadf] py-[70px] lg:py-[100px] px-2'>
       <div className='max-w-[1320px] mx-auto'>
           <div>
               {/* Animated Heading */}
               <TypeAnimation
                  sequence={["HEY,I'M NAFIJ ISLAM",1500,"I'M A FRONTEND-FOCUSED WEB DEVELOPER",1500,]}
                  wrapper="h1"
                  speed={30}
                  className='text-center text-[#318c77] lg:w-[900px] mx-auto text-[35px] lg:text-[50px] font-san font-bold'
                  repeat={Infinity}
                  cursor={true}
                />

               <p className='text-center md:text-[18px] lg:text-[20px] md:w-[600px] pb-10 font-dms pt-5 lg:w-[900px] mx-auto'>
                  I am a Frontend-focused Web Developer, building responsive and user-friendly websites and web applications that improve user experience and contribute to the overall success of the product.
               </p>

               {/* Buttons */}
               <div className='text-center flex justify-center gap-4'>

                 {/* View Projects Button */}
                <a href="#projects">
                   <button className='lg:py-4 py-4 rounded-[5px] hover:text-[#1E7EA7] duration-300 hover:bg-transparent border-transparent hover:border-[#1E7EA7] border-2 lg:px-7 px-5 bg-[#1E7EA7] text-white font-bold font-san'>
                   View My Project
                 </button>
                </a>

                 {/* Resume Button */}
                 <a href="Nafij-Islam-Resume.pdf" target="_blank">
                   <button className='lg:py-4 py-4 rounded-[5px] hover:text-[#318c77] duration-300 hover:bg-transparent border-[#1E7EA7] border-2 lg:px-7 px-5 bg-[#1E7EA7] text-white font-bold font-san'>
                      My Resume
                   </button>
                 </a>

               </div>
           </div>
       </div>

       {/* Social Icons */}
       <div className='text-[30px] sm:hidden md:hidden hidden text-[#1E7EA7] top-70 left-2 absolute lg:flex flex-col gap-4'>
        <a className='hover:text-[#cf0bed] duration-200' target="_blank" href="https://www.linkedin.com/in/nafij-islam-b15261357/">
          <FaLinkedin />
        </a>

        <a className='hover:text-[#cf0bed] duration-200' target="_blank" href="https://github.com/nafij-islam">
          <FaSquareGithub />
        </a>

        <a className='hover:text-[#cf0bed] duration-200' target="_blank" href="https://www.facebook.com/saharian.nafis.256620">
          <FaSquareFacebook />
        </a>

        <a className='hover:text-[#cf0bed] duration-200'>
          <FaWhatsappSquare />
        </a>

        <a className='hover:text-[#cf0bed] duration-200' href="#">
          <FaTelegram />
        </a>
       </div>
   </section>
  )
}

export default Banner
