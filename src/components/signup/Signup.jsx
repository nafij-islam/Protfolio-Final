import React from "react";

const SignUpPage = () => {
  return (
    <section id="signup" className="bg-[#bddadf] py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* === Section Title === */}
        <div className="text-center pb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-san text-slate-800">
            Create Account  
          </h2>
          <p className="font-san w-auto max-w-lg mx-auto text-lg text-slate-600 mt-4">
            Join us today and start your journey with our amazing platform.
          </p>
        </div>

        {/* === Form Card === */}
        <div className="max-w-3xl mx-auto  rounded-xl shadow-lg p-8 md:p-12 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
          
          <div>
            {/* Grid layout for responsive fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* === Full Name Field === */}
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-lg font-dms font-medium text-slate-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Your Full Name"
                  className="w-full bg-slate-100 rounded-lg p-3 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300"
                />
              </div>

              {/* === Username Field === */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-lg font-dms font-medium text-slate-700 mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Choose a username"
                  className="w-full bg-slate-100 rounded-lg p-3 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300"
                />
              </div>

              {/* === Email Field (Full Width) === */}
              <div className="md:col-span-2">
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
                />
              </div>

              {/* === Password Field === */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-lg font-dms font-medium text-slate-700 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Create a password"
                  className="w-full bg-slate-100 rounded-lg p-3 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300"
                />
              </div>

              {/* === Confirm Password Field === */}
              <div>
                <label
                  htmlFor="confirmpassword"
                  className="block text-lg font-dms font-medium text-slate-700 mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                  placeholder="Confirm your password"
                  className="w-full bg-slate-100 rounded-lg p-3 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300"
                />
              </div>
            </div>

            {/* === Submit Button === */}
            <div className="text-center mt-8">
              <button
                className="w-full md:w-auto bg-[#1E7EA7] text-white text-lg font-bold font-san py-3 px-12 rounded-lg transition-all duration-300 hover:bg-sky-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                Sign Up
              </button>
            </div>

            {/* === Login Link === */}
            <div className="text-center mt-6">
              <p className="font-dms text-slate-600">
                Already have an account?{" "}
                <a 
                  href="#login" 
                  className="text-[#1E7EA7] font-semibold hover:text-sky-700 hover:underline transition-all duration-300"
                >
                  Log In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;