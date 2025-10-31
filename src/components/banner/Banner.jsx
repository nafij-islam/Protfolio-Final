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
   <section className='bg-[#bddadf] py-[70px] lg:py-[100px]  px-2'>
       <div className='max-w-[1320px] mx-auto '>
           <div>
               {/* 2. Replace the static h1 with the TypeAnimation component */}
               <TypeAnimation
                  // The sequence of strings to type
                  sequence={[
                    "HEY,I'M NAFIJ ISLAM", // Types this string
                    1500, // Waits 1.5 seconds
                    "I'M A FRONTEND-FOCUSED WEB DEVELOPER", // Deletes and types this string
                    1500, // Waits 1.5 seconds
                  ]}
                  // Use 'h1' as the wrapper element
                  wrapper="h1"
                  // Typing speed
                  speed={30}
                  // Apply all your original styles
                  className='text-center text-[#318c77] lg:w-[900px] mx-auto text-[35px] lg:text-[55px] font-san font-bold'
                  // Repeat the animation forever
                  repeat={Infinity}
                  // Show the typing cursor
                  cursor={true}
                />
               
               <p className='text-center md:text-[18px] lg:text-[20px] md:w-[600px] pb-10 font-dms  pt-5 lg:w-[1000px] mx-auto'>I am a Frontend-focused Web Developer, building responsive and user-friendly websites and web applications that improve user experience and contribute to the overall success of the product.</p>
                <div className='text-center'>

               <button className='lg:py-5 py-4 rounded-[5px] hover:text-[#1E7EA7] duration-300  hover:bg-transparent border-transparent hover:border-[#1E7EA7] border-2 hover:border-2  lg:px-8 px-6 bg-[#1E7EA7] text-white font-bold font-san'>View My Project</button>
                </div>
           </div>
       </div>
       <div className='text-[30px] sm:hidden md:hidden hidden text-[#1E7EA7] top-70 left-2 absolute lg:flex flex-col gap-4'>
        <a className='hover:text-[#cf0bed] duration-200' target="_blank" href="https://www.linkedin.com/in/nafij-islam-b15261357/">

        <FaLinkedin />
        </a>
        <a className='hover:text-[#cf0bed] duration-200' target="_blank" href="">

        <FaSquareGithub />
        </a>
        <a className='hover:text-[#cf0bed] duration-200' target="_blank" href="https://www.facebook.com/saharian.nafis.256620">

        <FaSquareFacebook />
        </a>
        <a className='hover:text-[#cf0bed] duration-200'>

        <FaWhatsappSquare />
        </a>
        <a className='hover:text-[#cf0bed] duration-200' href="">

        <FaTelegram />
        </a>
        </div>
   </section>
  )
}

export default Banner