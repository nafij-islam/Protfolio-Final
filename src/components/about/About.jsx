import React from "react";
import { User, Code, HeartHandshake, Zap, Trophy, Briefcase } from "lucide-react"; // lucide-react use kora holo jate code compile kore

const About = () => {
  return (
    // Section background & padding maintain kora holo
    <section id="about" className="bg-[#bddadf] py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* === Section Title === */}
        <div className="text-center pb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-san text-slate-800">
            About My Professional Journey
          </h2>
          <p className="font-san w-auto max-w-2xl mx-auto text-lg text-slate-600 mt-4">
            Focusing purely on my dedication, experience, and the core philosophy driving my work in web development.
          </p>
        </div>

        {/* === About Card (Single column, text-focused) === */}
        {/* Shadow and Hover effect for modern feel */}
        <div className=" rounded-xl shadow-lg p-8 md:p-12 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
          
          {/* Main content layout: single column */}
          <div className="flex flex-col gap-10">
            
            {/* === Main Biography & Philosophy (Full Width) === */}
            <div className="w-full text-slate-700">
              
              <h3 className="text-3xl font-bold mb-4 border-b pb-2 border-sky-200">
                Hi, I'm a passionate and goal-oriented developer!
              </h3>
              
              {/* Placeholder content for your biography */}
              <p className="text-lg mb-6 leading-relaxed">
                I am a highly dedicated **Frontend Developer** specializing in the React ecosystem. My focus is on crafting user interfaces that are not only aesthetically pleasing but also highly performant and accessible. I thrive in challenging environments where I can leverage **Tailwind CSS, modern JavaScript (ES6+), and state management tools** to solve complex interaction problems.
              </p>
              
              <p className="text-lg mb-8 leading-relaxed">
                My core philosophy revolves around continuous learning and delivering clean, maintainable code. Whether it's optimizing rendering performance or ensuring full responsiveness across all devices, I am committed to quality. I am always open to new collaborations and projects that push the boundaries of modern web technologies.
              </p>

              {/* === Key Highlights/Interests (Consistent with Skill Badge style) === */}
              <div className="pt-4">
                  <h4 className="text-xl font-semibold mb-3 text-slate-800">My Core Values:</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="flex items-center gap-2 bg-sky-100 text-sky-800 rounded-full py-2 px-4 text-md font-semibold shadow-md">
                      <Code size={18} /> Clean Code
                    </span>
                    <span className="flex items-center gap-2 bg-sky-100 text-sky-800 rounded-full py-2 px-4 text-md font-semibold shadow-md">
                      <HeartHandshake size={18} /> Collaborative
                    </span>
                    <span className="flex items-center gap-2 bg-sky-100 text-sky-800 rounded-full py-2 px-4 text-md font-semibold shadow-md">
                      <Zap size={18} /> Performance Focus
                    </span>
                  </div>
              </div>
            </div>
            
            {/* === Statistics / Key Facts (Image er jaygay modern data presentation) === */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-200">
                
                {/* Stat 1: Projects Completed */}
                <div className="flex flex-col items-center bg-sky-100 p-6 rounded-xl shadow-inner border-b-4 border-sky-500 transition-transform duration-300 hover:scale-[1.02]">
                    <Trophy size={32} className="text-sky-600 mb-2" />
                    <span className="text-4xl font-bold text-sky-800">22+</span>
                    <p className="text-slate-600 mt-1">Projects Completed</p>
                </div>
                
                {/* Stat 2: Years Experience */}
                <div className="flex flex-col items-center bg-sky-100 p-6 rounded-xl shadow-inner border-b-4 border-sky-500 transition-transform duration-300 hover:scale-[1.02]">
                    <Briefcase size={32} className="text-sky-600 mb-2" />
                    <span className="text-4xl font-bold text-sky-800">2+</span>
                    <p className="text-slate-600 mt-1">Years of Experience</p>
                </div>
                
                {/* Stat 3: Tech Stacks */}
                <div className="flex flex-col items-center bg-sky-100 p-6 rounded-xl shadow-inner border-b-4 border-sky-500 transition-transform duration-300 hover:scale-[1.02]">
                    <Code size={32} className="text-sky-600 mb-2" />
                    <span className="text-4xl font-bold text-sky-800">5+</span>
                    <p className="text-slate-600 mt-1">Key Technologies</p>
                </div>
                
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
