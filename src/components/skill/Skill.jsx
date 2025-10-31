import React from "react";

const Skill = () => {
  return (
    <section id="skill" className="bg-[#bddadf] py-[60px]">
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center pb-20">
          <h2 className="text-[45px] font-san font-normal">Skills</h2>
          <p className="font-san w-auto text-[18px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Asperiores, similique.
          </p>
        </div>
        <div className="flex justify-around gap-4 lg:gap-0 flex-wrap">
          <div className="lg:w-[40%] md:w-[40%] w-full">
            <div className="p-5 rounded-[8px] bg-sky-200">
              <h2 className="text-[35px] text-center pb-7 font-san">
                Skills & Tools:
              </h2>
              <div className="flex justify-around">
                <al className="flex flex-col gap-2">
                  <li className="font-dms text-[20px]">HTML</li>
                  <li className="font-dms text-[20px]">Css</li>
                  <li className="font-dms text-[20px]">JavaScript</li>
                  <li className="font-dms text-[20px]">React JS</li>
                  <li className="font-dms text-[20px]">Tailwind Css</li>
                </al>
                <al className="flex flex-col gap-2">
                  <li className="font-dms text-[20px]">Bootstrap</li>
                  <li className="font-dms text-[20px]">Redux</li>
                  <li className="font-dms text-[20px]">Context Api</li>
                  <li className="font-dms text-[20px]">React Router</li>
                  <li className="font-dms text-[20px]">Api</li>
                </al>
              </div>
            </div>
          </div>
          <div className="lg:w-[40%] md:w-[40%] w-full ">
            <div className="p-5 rounded-[8px] bg-sky-200">
              <h2 className="text-[35px] text-center pb-7 font-san">
                Tools & Softwares
              </h2>
             <div className="flex justify-around pb-[39px]">
              <al className="flex flex-col gap-2">
                <li className="font-dms text-[20px]">Git</li>
                <li className="font-dms text-[20px]">Github</li>
                <li className="font-dms text-[20px]">Netlify</li>
                <li className="font-dms text-[20px]">Vercel</li>
              </al>
              <al className="flex flex-col gap-2">
                <li className="font-dms text-[20px]">Figma</li>
                <li className="font-dms text-[20px]">Phtotshop</li>

              </al>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
