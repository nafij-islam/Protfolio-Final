import React from "react";

const Contact = () => {
  return (
    // Section background, padding Skill section er motoi rakha hoyeche
    <section id="contact" className="bg-[#bddadf] py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* === Section Title === */}
        <div className="text-center pb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-san text-slate-800">
            Contact Me  
          </h2>
          <p className="font-san w-auto max-w-lg mx-auto text-lg text-slate-600 mt-4">
            Get in touch! I'd love to hear from you and discuss projects.
          </p>
        </div>

        {/* === Form Card === */}
        {/* Card-take ektu choto (max-w-3xl) kora hoyeche jate form-ta sundor dekkhay */}
        {/* Same hover effect rakha holo consistency-r jonno */}
        <div className="max-w-3xl mx-auto  rounded-xl shadow-lg p-8 md:p-12 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
          
          {/* Form action e apnar form handler (Netlify, Formspree etc.) link bosate paren */}
          <form action="#" method="POST">
            {/* Grid layout for responsive fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* === Name Field === */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-dms font-medium text-slate-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Full Name"
                  className="w-full bg-slate-100 rounded-lg p-3 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300"
                  required
                />
              </div>

              {/* === Email Field === */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-dms font-medium text-slate-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your.email@example.com"
                  className="w-full bg-slate-100 rounded-lg p-3 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300"
                  required
                />
              </div>

              {/* === Subject Field (Full Width) === */}
              <div className="md:col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-lg font-dms font-medium text-slate-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="What is this about?"
                  className="w-full bg-slate-100 rounded-lg p-3 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300"
                  required
                />
              </div>

              {/* === Message Field (Full Width) === */}
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-lg font-dms font-medium text-slate-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  placeholder="Write your message here..."
                  className="w-full bg-slate-100 rounded-lg p-3 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300"
                  required
                ></textarea>
              </div>
            </div>

            {/* === Submit Button === */}
            <div className="text-center mt-8">
              <button
               type="submit "
                className="w-full md:w-auto bg-[#1E7EA7] text-white text-lg font-bold font-san py-3 px-12 rounded-lg transition-all duration-300 hover:bg-sky-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
