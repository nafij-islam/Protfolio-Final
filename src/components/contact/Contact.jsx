import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-[60px] bg-[#bddadf] ">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex justify-center">
          <div className="w-[70%]">
            <div className="flex gap-5">

            <input className="py-[20px] focus:outline-0 pl-[10px] border-2 w-[50%]" type="text" placeholder="Enter Your Name" />
            <input className="py-[20px] focus:outline-0 pl-[10px] border-2 w-[50%]" type="email" placeholder="Enter Your Email" />
            </div>
            <div className="pt-[30px]">
              <textarea className="pl-3 focus:outline-0 pt-3 border-2 w-full" placeholder="message"></textarea>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
