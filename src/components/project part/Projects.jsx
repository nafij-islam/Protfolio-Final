import React from "react";
import { ExternalLink, Github, Code, Layout, GitBranch } from "lucide-react"; // lucide-react icons byabohar kora holo jate code stable thake
import projectimg from "../../assets/projectone.png";
import projectimgtwo from "../../assets/projecttwo.png";
import projectimhthree from "../../assets/projectimhthree.png";
import Projectimgfour from '../../assets/innovatefour.png'
import projectfive from '../../assets/projectfive.png'
import projectsix from '../../assets/projectsix.png'
import projectsaven from '../../assets/quater.png'
//

import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react'


const projectone = projectimg;
const projecttwo = projectimgtwo;
const projectthree = projectimhthree;
const projectimgfour = Projectimgfour;
const projectimgfive = projectfive;
const projectimgsix = projectsix;
const projectimgsaven = projectsaven;


const projectData = [
  {
    id: 1,
    title: "Innovate Project",
    description:
      "A responsive and feature-rich user interface for a modern online store, built with speed and accessibility in mind.",
    tech: ["React", "Tailwind CSS"],

    imageUrl: projectone,
    liveLink: "https://innovate-five-ashen.vercel.app/",
    githubLink: "https://github.com/nafij-islam/Innovate-Five",
  },
  {
    id: 2,
    title: "E-commerce Platform UI",
    description:
      "A simple, single-page application (SPA) for managing daily tasks and productivity tracking, utilizing local storage.",
    tech: ["React", "Context API", "JavaScript", "Local Storage","TanStack","Tailwind","Redux"],
    imageUrl: projectthree,
    liveLink: "https://ecommerce-phi-six-69.vercel.app/",
    githubLink: "https://github.com/nafij-islam/Ecommerce",
  },
  {
    id: 3,
    title: "Innovate Animation Project",
    description:
      "Fetches and displays real-time weather data for global cities using a public API, with a clean, animated interface.",
    tech: ["React", "API","Css Animation",],
    imageUrl: projecttwo,
    liveLink: "https://innoovate.vercel.app/",
    githubLink: "https://github.com/nafij-islam/Innoovate",
  },
   {
    id: 4,
    title: "Innovate Responsive",
    description:
      "Fetches and displays real-time weather data for global cities using a public API, with a clean, animated interface.",
    tech: ["React"],
    imageUrl: projectimgfour,
    liveLink: "https://innovate-four-8mhv.vercel.app/",
    githubLink: "https://github.com/nafij-islam/InnovateFour",
  },
     {
    id: 5,
    title: "Innovate Responsive",
    description:
      "Fetches and displays real-time weather data for global cities using a public API, with a clean, animated interface.",
    tech: ["React"],
    imageUrl: projectimgfive,
    liveLink: "https://cyber-intern.vercel.app/",
    githubLink: "https://github.com/nafij-islam/Cyber-Intern",
  },
     {
    id: 6,
    title: "Innovate Responsive",
    description:
      "Fetches and displays real-time weather data for global cities using a public API, with a clean, animated interface.",
    tech: ["React"],
    imageUrl: projectimgsix,
    liveLink: "https://github.com/nafij-islam/Fins-Project",
    githubLink: "https://fins-project.vercel.app/",
  },
   {
    id: 7,
    title: "Innovate Responsive",
    description:
      "Fetches and displays real-time weather data for global cities using a public API, with a clean, animated interface.",
    tech: ["React", ],
    imageUrl: projectimgsaven,
    liveLink: "https://quater-six.vercel.app/",
    githubLink: "https://github.com/nafij-islam/Quater",
  },
];

const Projects = () => {

   useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);


  return (
    <section data-aos="zoom-in-up" id="projects" className="bg-[#bddadf] py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center pb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-san text-slate-800">
            My Creative Endeavors
          </h2>
          <p className="font-san w-auto max-w-2xl mx-auto text-lg text-slate-600 mt-4">
            Ei gulo amar kora kichu guruttopurno kaj, jara amake frontend
            development-e proman kore. Prottek project-e amar passion ebong
            problem-solving ability-r protifolon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col group" // 'group' class added for advanced hover effects
            >
              <div className="h-48 rounded-t-xl overflow-hidden relative shadow-md">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} Screenshot`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" // Image zoom on hover
                  />
                ) : (
                  <div className="w-full h-full bg-sky-50 flex items-center justify-center text-sky-300 text-lg font-semibold">
                    <Layout size={40} className="mr-2" /> No Image
                  </div>
                )}
                {/* Optional Overlay on image hover (uncomment to activate) */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Project</span>
                </div> */}
              </div>

              {/* === Project Content === */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 flex-grow text-sm md:text-base">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6 border-t pt-4 border-slate-100">
                  {project.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="flex items-center gap-1 bg-sky-100 text-sky-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm" // Updated badge style
                    >
                      <Code size={14} /> {techItem}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-3 mt-auto justify-center md:justify-start">
                  {" "}
                  {/* Buttons centered on mobile, left-aligned on desktop */}
                  {/* Live Demo Link */}
                  {project.liveLink && project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-sky-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-sky-600 shadow-md hover:shadow-lg text-sm flex-grow md:flex-none justify-center" // Flex-grow for mobile full width
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                  {/* GitHub Link */}
                  {project.githubLink && project.githubLink !== "#" && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-sky-500 text-sky-500 font-semibold py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-sky-50 hover:text-sky-700 text-sm flex-grow md:flex-none justify-center" // Flex-grow for mobile full width
                    >
                      <Github size={18} /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
