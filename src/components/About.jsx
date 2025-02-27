import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { DiJavascript1, DiReact, DiNodejsSmall, DiHtml5, DiCss3, DiSass, DiBootstrap, DiMongodb, DiGithubBadge, DiPhotoshop } from "react-icons/di";
import { CgFigma } from "react-icons/cg";
import { RiTailwindCssFill } from "react-icons/ri";

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-16 md:py-24 flex flex-col gap-16" id="about">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
          About Me
        </h2>
        <div className="flex justify-center">
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full" />
        </div>
      </motion.div>

      {/* Technical Experience Card */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="group relative flex flex-col lg:flex-row gap-4 md:gap-8 bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-700/50 overflow-hidden transform transition-all duration-500 hover:border-cyan-400/30"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
        
        <motion.div
          initial={{ scale: 0.98 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex-1 min-h-[300px] md:min-h-[500px] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10" />
          <img
            src={assets.tec}
            alt="Technical Experience"
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex-1 flex flex-col justify-center p-6 md:p-10 space-y-6 md:space-y-8"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-0.5 w-12 bg-cyan-400" />
              <h3 className="text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Technical Journey
              </h3>
            </div>
            <p className="text-gray-300/90 text-lg leading-relaxed font-medium">
              As a passionate third-year Software Engineering student at CINEC Campus, I've immersed myself in the world of full-stack development. My journey with React and Node.js has been both challenging and rewarding, particularly while building a complex inventory management system. Through collaborative Git workflows and modern tooling like VS Code, I've learned to embrace the iterative nature of software development.
            </p>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
              {[DiHtml5, DiCss3, DiBootstrap, DiMongodb, DiGithubBadge, DiNodejsSmall, DiReact, DiJavascript1].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="p-3 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all"
                >
                  <Icon className="text-4xl mx-auto" style={{ color: getIconColor(Icon) }} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Frontend Card */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="group relative flex flex-col lg:flex-row-reverse gap-4 md:gap-8 bg-gradient-to-bl from-gray-900/90 to-gray-800/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-700/50 overflow-hidden transform transition-all duration-500 hover:border-blue-400/30"
      >
        <motion.div
          initial={{ scale: 0.98 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex-1 min-h-[300px] md:min-h-[500px] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-transparent z-10" />
          <img
            src={assets.frontend}
            alt="Frontend Development"
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex-1 flex flex-col justify-center p-6 md:p-10 space-y-6 md:space-y-8"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-0.5 w-12 bg-blue-400" />
              <h3 className="text-3xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Frontend Development
              </h3>
            </div>
            <p className="text-gray-300/90 text-lg leading-relaxed font-medium">
              Specializing in creating immersive digital experiences, I combine modern tools like Tailwind CSS and React with fundamental web technologies. My approach focuses on building responsive, accessible interfaces that balance aesthetic appeal with technical excellence. Recent explorations include micro-interactions and performance optimization techniques.
            </p>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
              {[DiHtml5, DiCss3, RiTailwindCssFill, DiBootstrap, DiReact, DiJavascript1].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="p-3 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-400/50 transition-all"
                >
                  <Icon className="text-4xl mx-auto" style={{ color: getIconColor(Icon) }} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* UI/UX Card */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="group relative flex flex-col lg:flex-row gap-4 md:gap-8 bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-700/50 overflow-hidden transform transition-all duration-500 hover:border-purple-400/30"
      >
        <motion.div
          initial={{ scale: 0.98 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex-1 min-h-[300px] md:min-h-[500px] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-transparent z-10" />
          <img
            src={assets.UIUX}
            alt="UI/UX Design"
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex-1 flex flex-col justify-center p-6 md:p-10 space-y-6 md:space-y-8"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-0.5 w-12 bg-purple-400" />
              <h3 className="text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                UI / UX Design
              </h3>
            </div>
            <p className="text-gray-300/90 text-lg leading-relaxed font-medium">
              My design philosophy centers around creating intuitive user journeys through careful attention to typography, color theory, and interaction patterns. Using Figma's advanced prototyping features, I bridge the gap between static mockups and dynamic implementations, ensuring design consistency across all screen sizes and devices.
            </p>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
              {[CgFigma, DiPhotoshop].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="p-3 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-purple-400/50 transition-all"
                >
                  <Icon className="text-4xl mx-auto" style={{ color: getIconColor(Icon) }} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Helper function for icon colors
const getIconColor = (Icon) => {
  switch(Icon) {
    case DiHtml5: return '#E34F26';
    case DiCss3: return '#1572B6';
    case DiBootstrap: return '#7952B3';
    case RiTailwindCssFill: return '#38BDF8';
    case DiReact: return '#61DAFB';
    case DiJavascript1: return '#F7DF1E';
    case DiNodejsSmall: return '#339933';
    case DiMongodb: return '#47A248';
    case DiGithubBadge: return '#F5F5F5';
    case CgFigma: return '#A259FF';
    case DiPhotoshop: return '#31A8FF';
    default: return '#FFFFFF';
  }
};

export default About;