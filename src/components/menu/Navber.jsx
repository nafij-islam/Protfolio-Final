import React from "react";
import logoimg from "../../assets/logoimg.png";
import logotext from "../../assets/logotext.png";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { HiMiniBars3 } from "react-icons/hi2";

const Navber = () => {
  let [bar, setBar] = useState(false);

  let handlebar = () => {
    setBar(!bar);
  };

  return (
    <section id="Home" className="bg-[#bddadf] py-10 px-1">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex justify-between items-center">
          <div className="">
            <a href="#">
              <div className="flex items-center gap-4">
                <div>
                  <img className="lg:w-[70px] w-[55px]" src={logoimg} alt="" />
                </div>
                <div>
                  <img
                    className="lg:w-[200px] w-[150px]"
                    src={logotext}
                    alt=""
                  />
                </div>
              </div>
            </a>
          </div>
          <div
            className={`lg:static duration-300  ${
              bar
                ? "absolute lg:top-28 top-24 left-0 w-full bg-[#1E7EA7]"
                : "absolute top-24 lg:top-28 left-[-100%] "
            }`}
          >
            <ul className="lg:flex text-center lg:py-0 py-3  lg:gap-8">
              <a href="#Home">
                <li className="font-san font-normal hover:text-[#1E7EA7] duration-200 text-white lg:text-black text-[21px]">
                  Home
                </li>
              </a>
              <a href="#about">
                <li className="font-san font-normal hover:text-[#1E7EA7] duration-200 text-white lg:text-black text-[21px]">
                  About
                </li>
              </a>
              <a href="#skill">
                <li className="font-san font-normal hover:text-[#1E7EA7] duration-200 text-white lg:text-black text-[21px]">
                  Skill
                </li>
              </a>
              <a href="#projects">
                <li className="font-san font-normal hover:text-[#1E7EA7] duration-200 text-white lg:text-black text-[21px]">
                  Project
                </li>
              </a>

              <button className="lg:bg-[#1E7EA7] lg:mt-0 mt-3 bg-white text-black mx-auto block lg:hidden py-3 px-10 rounded-[5px] font-san font-semibold lg:text-white">
                Contact Us
              </button>
            </ul>
          </div>
          <div className="">
            <button className="bg-[#1E7EA7] hidden hover:text-[#1E7EA7]  hover:bg-transparent  hover:border-2 border-2 duration-300 border-transparent hover:border-[#1E7EA7] lg:block py-3 px-8 rounded-[5px] font-san font-semibold text-white">
              <a href="#contact">Contact Us</a>
            </button>
          </div>
          <div
            onClick={handlebar}
            className="lg:hidden text-[#1E7EA7] text-[30px] block"
          >
            {bar ? <RxCross2 /> : <HiMiniBars3 />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navber;
