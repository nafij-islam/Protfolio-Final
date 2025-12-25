import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react'


const Skill = () => {


   useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);



  return (
    // Section Background ektu change kore clean look deya holo
    <section data-aos="zoom-out" id="skill" className="bg-[#bddadf] py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center pb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-san text-slate-800">
            My Skills
          </h2>
          <p className="font-san w-auto max-w-lg mx-auto text-lg text-slate-600 mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
            similique.
          </p>
        </div>

        {/* Card-gulor moddhe gap barano holo */}
        <div className="flex justify-center gap-8 lg:gap-12 flex-wrap">
          
          {/* === Skill Card 1 === */}
          {/* Box-shadow, padding, rounding, hover effect add kora holo.
            'h-full' add kora hoyeche jate duita card er height shoman thake.
          */}
          <div className="lg:w-[45%] md:w-[48%] w-full  rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer h-full">
            <h2 className="text-3xl text-center pb-8 font-san font-semibold text-slate-700">
              Skills & Frameworks
            </h2>
            
            {/* List-ke 'grid' e shajano holo clean look er jonno.
              HTML tag <al> change kore <ul> kora holo.
            */}
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4">
              {/* Skill item-guloke "badge" style deya holo + hover effect */}
              <li className="font-dms text-lg bg-sky-100 text-sky-800 rounded-lg p-3 text-center transition-all duration-300 hover:bg-sky-200 hover:shadow-md hover:scale-105">
                HTML
              </li>
              <li className="font-dms text-lg bg-sky-100 text-sky-800 rounded-lg p-3 text-center transition-all duration-300 hover:bg-sky-200 hover:shadow-md hover:scale-105">
                CSS
              </li>
              <li className="font-dms text-lg bg-sky-100 text-sky-800 rounded-lg p-3 text-center transition-all duration-300 hover:bg-sky-200 hover:shadow-md hover:scale-105">
                JavaScript
              </li>
              <li className="font-dms text-lg bg-sky-100 text-sky-800 rounded-lg p-3 text-center transition-all duration-300 hover:bg-sky-200 hover:shadow-md hover:scale-105">
                React JS
              </li>
              <li className="font-dms text-lg bg-sky-100 text-sky-800 rounded-lg p-3 text-center transition-all duration-300 hover:bg-sky-200 hover:shadow-md hover:scale-105">
                Tailwind CSS
              </li>
              <li className="font-dms text-lg bg-sky-100 text-sky-800 rounded-lg p-3 text-center transition-all duration-300 hover:bg-sky-200 hover:shadow-md hover:scale-105">
                Bootstrap
              </li>
              <li className="font-dms text-lg bg-sky-100 text-sky-800 rounded-lg p-3 text-center transition-all duration-300 hover:bg-sky-200 hover:shadow-md hover:scale-105">
                Redux
              </li>
              <li className="font-dms text-lg bg-sky-100 text-sky-800 rounded-lg p-3 text-center transition-all duration-300 hover:bg-sky-200 hover:shadow-md hover:scale-105">
                Context API
              </li>
              <li className="font-dms text-lg bg-sky-100 text-sky-800 rounded-lg p-3 text-center transition-all duration-300 hover:bg-sky-200 hover:shadow-md hover:scale-105">
                React Router
              </li>
              <li className="font-dms text-lg bg-sky-100 text-sky-800 rounded-lg p-3 text-center transition-all duration-300 hover:bg-sky-200 hover:shadow-md hover:scale-105">
                REST API
              </li>
            </ul>
          </div>

          {/* === Skill Card 2 === */}
          <div className="lg:w-[45%] md:w-[48%] w-full  rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer h-full">
            <h2 className="text-3xl text-center pb-8 font-san font-semibold text-slate-700">
              Tools & Softwares
            </h2>
            
            {/* Ekhaneo grid layout use kora holo */}
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4">
              <li className="font-dms text-lg bg-sky-100 text-slate-800 rounded-lg p-3 text-center transition-all duration-300 hover:bg-sky-200 hover:shadow-md hover:scale-105">
                Git
              </li>
              <li className="font-dms text-lg bg-sky-100 text-slate-800 rounded-lg p-3 text-center transition-all duration-300 hover:bg-sky-200 hover:shadow-md hover:scale-105">
                Github
              </li>
              <li className="font-dms text-lg bg-sky-100 text-slate-800 rounded-lg p-3 text-center transition-all duration-300 hover:bg-sky-200 hover:shadow-md hover:scale-105">
                Netlify
              </li>
              <li className="font-dms text-lg bg-sky-100 text-slate-800 rounded-lg p-3 text-center transition-all duration-300 hover:bg-sky-200 hover:shadow-md hover:scale-105">
                Vercel
              </li>
              <li className="font-dms text-lg bg-sky-100 text-slate-800 rounded-lg p-3 text-center transition-all duration-300 hover:bg-sky-200 hover:shadow-md hover:scale-105">
                Figma
              </li>
              <li className="font-dms text-lg bg-sky-100 text-slate-800 rounded-lg p-3 text-center transition-all duration-300 hover:bg-sky-200 hover:shadow-md hover:scale-105">
                Photoshop
              </li>
               <li className="font-dms text-lg bg-sky-100 text-slate-800 rounded-lg p-3 text-center transition-all duration-300 hover:bg-sky-200 hover:shadow-md hover:scale-105">
                Vs Code
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;