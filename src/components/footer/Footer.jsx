import React from "react";

const Footer = () => {
  return (
    // Same background color as your other sections
    <footer id="footer" className="bg-[#bddadf] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* === Copyright Text === */}
          <div className="text-center md:text-left">
            <p className="font-san text-base text-slate-600">
              {/* You can change "Your Name" here */}
              &copy; {new Date().getFullYear()} Nafij Islam. All rights reserved.
            </p>
            <p className="font-san text-sm text-slate-500 mt-1">
              Made with React & Tailwind CSS
            </p>
          </div>

          {/* === Social Links === */}
          {/* I've added text links here. You can replace these with icons. */}
          <div className="flex justify-center gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=61578071360772" // Add your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="font-dms text-base text-slate-600 hover:text-sky-600 transition-all duration-300"
            >
              Facebook
            </a>
            <a
              href="https://github.com/nafij-islam" // Add your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="font-dms text-base text-slate-600 hover:text-sky-600 transition-all duration-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nafij-islam-b15261357" // Add your Twitter/X URL
              target="_blank"
              rel="noopener noreferrer"
              className="font-dms text-base text-slate-600 hover:text-sky-600 transition-all duration-300"
            >
              Linkedin
            </a>
              <a
              href="https://www.linkedin.com/in/nafij-islam-b15261357" // Add your Twitter/X URL
              target="_blank"
              rel="noopener noreferrer"
              className="font-dms text-base text-slate-600 hover:text-sky-600 transition-all duration-300"
            >
              Whatsapp
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
