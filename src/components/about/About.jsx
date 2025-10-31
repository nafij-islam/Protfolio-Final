import React from "react";
import aboutimg from '../../assets/aboutimg.jpg'


const About = () => {
  return (
    <section id="About" className="lg:py-[65px] px-2 bg-[#bddadf]">
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center">
            <h2 className="lg:text-[45px] text-[35px] font-dms font-semibold">ABOUT ME</h2>
            <p className="text-[18px] w-auto mx-auto pb-[50px] font-normal font-dms pt-3">Here you’ll explore who I am, what I do, and the skills I continue to grow in the world of programming and technology.</p>
        </div> 
        <div className="flex flex-wrap">
          <div className="w-[50%]">
            <img className="rounded-[30px] w-[550px]" src={aboutimg} alt="" />
          </div>
          <div className="w-[50%]"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
