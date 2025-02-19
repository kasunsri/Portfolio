import React, { useState } from "react";
import { AiFillBehanceCircle, AiFillGithub } from "react-icons/ai";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import Frame5 from "../assets/Frame5.png";
import Frame3 from "../assets/Frame3.png";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";

// Frontend Projects Data
const frontendProjects = [
  {
    img: project1,
    title: "Project 1",
    description: "Authentication system Using MERN stack.",
    links: {
      github: "https://github.com/kasunsri/Authentication-System.git",
    },
  },
  {
    img: project2,
    title: "Project 2",
    description: "Realtime Weather App Using Js.",
    links: {
      github: "https://github.com/kasunsri/Whether-app.git",
    },
  },
  {
    img: project3,
    title: "Project 3",
    description: "Countdown Timer Using React.Js",
    links: {
      github: "https://github.com/kasunsri/countdown-timer.git",
    },
  },
  {
    img: project4,
    title: "Project 4",
    description: "XOX Game",
    links: {
      github: "https://github.com/kasunsri/Todo-App.git",
    },
  },
];

// UI/UX Designs Data
const uiuxProjects = [
  {
    img: Frame5,
    title: "Design 1",
    description: "A mobile app design for a visit sri lanka.",
    links: {
      behance: "https://www.behance.net/kasunsri",
    },
  },
  {
    img: Frame3,
    title: "Design 2",
    description: "Tv Time App Redesign.",
    links: {
      behance: "https://www.behance.net/kasunsri",
    },
  },
  {
    img: f1,
    title: "Design 3",
    description: "Sri Lanka Railways Reservation App Redesign",
    links: {
      behance: "https://www.behance.net/kasunsri",
    },
  },
  {
    img: f2,
    title: "Design 4",
    description: "Classic Insurance app Design",
    links: {
      behance: "https://www.behance.net/kasunsri",
    },
  },
];

const Portfolio = () => {
  const [currentFrontendProject, setCurrentFrontendProject] = useState(0);
  const [currentUiuxProject, setCurrentUiuxProject] = useState(0);

  return (
    <div className="relative max-w-[1200px] mx-auto p-6 md:p-10 my-20 bg-transparent  flex flex-col md:flex-row gap-8" id="portfolio">
      {/* Left Section: Frontend Projects */}
      <div className="glass p-6 w-full border-2 rounded-2xl shadow-lg max-w-[600px]">
        <h2 className="text-3xl font-bold text-gray-100 mb-6">Frontend Projects</h2>
        <div className="w-full h-80 overflow-hidden rounded-lg">
          <img
            src={frontendProjects[currentFrontendProject].img}
            alt={frontendProjects[currentFrontendProject].title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <p className="text-gray-300 mt-4">{frontendProjects[currentFrontendProject].description}</p>
        <div className="flex space-x-4 mt-6">
          <a
            href={frontendProjects[currentFrontendProject].links.github}
            target="_blank" rel="noopener noreferrer"
            className="px-4 py-3 bg-gray-800 text-gray-200 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            <AiFillGithub size={24} />
          </a>
        </div>
        <ul className="mt-6 flex flex-wrap justify-center gap-4">
          {frontendProjects.map((project, index) => (
            <li
              key={index}
              onClick={() => setCurrentFrontendProject(index)}
              className={`cursor-pointer text-center px-4 py-2 rounded-full transition duration-300 ${
                currentFrontendProject === index
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-md"
                  : "bg-slate-700 text-gray-200 hover:bg-slate-600"
              }`}
            >
              {project.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section: UI/UX Designs */}
      <div className="glass p-6 w-full border-2 rounded-2xl shadow-lg max-w-[600px]">
        <h2 className="text-3xl font-bold text-gray-100 mb-6">UI/UX Designs</h2>
        <div className="w-full h-80 overflow-hidden rounded-lg">
          <img
            src={uiuxProjects[currentUiuxProject].img}
            alt={uiuxProjects[currentUiuxProject].title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <p className="text-gray-300 mt-4">{uiuxProjects[currentUiuxProject].description}</p>
        <div className="flex space-x-4 mt-6">
          <a
            href={uiuxProjects[currentUiuxProject].links.github}
            className="px-4 py-3 bg-gray-800 text-gray-200 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            <AiFillBehanceCircle size={24} />
          </a>
        </div>
        <ul className="mt-6 flex flex-wrap justify-center gap-4">
          {uiuxProjects.map((project, index) => (
            <li
              key={index}
              onClick={() => setCurrentUiuxProject(index)}
              className={`cursor-pointer text-center px-4 py-2 rounded-full transition duration-300 ${
                currentUiuxProject === index
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-md"
                  : "bg-slate-700 text-gray-200 hover:bg-slate-600"
              }`}
            >
              {project.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;