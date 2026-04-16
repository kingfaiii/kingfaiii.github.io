import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import HeroCanvas from "./HeroCanvas";
import { useDarkMode } from "../context/DarkModeContext";
import { animate, utils } from "animejs";

const HeroSection = () => {
  const { isDarkMode } = useDarkMode();
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const targets = [titleRef.current, descriptionRef.current, buttonsRef.current];

    // 1. Initial State
    utils.set(targets, {
      opacity: 0,
      translateY: 30,
    });

    // 2. Animate Title
    // Argument 1: The Ref | Argument 2: The Options
    animate(titleRef.current, {
      opacity: 1,
      translateY: 0,
      duration: 800,
      ease: "outExpo", // 'easing' changed to 'ease'
    });

    // 3. Animate Description
    animate(descriptionRef.current, {
      opacity: 1,
      translateY: 0,
      duration: 800,
      ease: "outExpo",
      delay: 200,
    });

    // 4. Animate Buttons
    animate(buttonsRef.current, {
      opacity: 1,
      translateY: 0,
      duration: 800,
      ease: "outExpo",
      delay: 400,
    });
  }, []);

  return (
    <section className={`relative min-h-screen pt-20 flex items-center overflow-hidden ${isDarkMode ? "bg-gray-950" : "bg-white"}`}>
      {/* Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-0 -right-1/3 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? "bg-sky-500/20" : "bg-sky-500/10"} animate-pulse`} />
        <div className={`absolute bottom-0 -left-1/3 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? "bg-cyan-500/20" : "bg-cyan-500/10"} animate-pulse`} style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div>
          <div ref={titleRef}>
            <h1 className={`text-6xl md:text-7xl font-bold leading-tight mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Build Digital
              <br />
              <span className="text-custom">Excellence</span>
            </h1>
          </div>

          <div ref={descriptionRef}>
            <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-md`}>I`m a Full-Stack Developer specializing in creating beautiful, performant web applications. Let`s build something amazing together.</p>
          </div>

          <div ref={buttonsRef} className="flex flex-wrap gap-4">
            <button className="group px-8 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-sky-500/50 transition-all duration-300 flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className={`px-8 py-3 border-2 font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 ${isDarkMode ? "border-gray-600 text-white hover:border-sky-500 hover:bg-sky-500/10" : "border-gray-300 text-gray-900 hover:border-sky-500 hover:bg-sky-500/10"}`}>
              Download CV
              <Download className="w-4 h-4" />
            </button>
          </div>

          {/* Skills Preview */}
          <div className="mt-12 flex flex-wrap gap-3">
            {["React", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB"].map((skill) => (
              <span key={skill} className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? "bg-gray-800 text-sky-400" : "bg-gray-100 text-sky-600"}`}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* 3D Canvas */}
        <div className="relative h-96 md:h-full min-h-96">
          <HeroCanvas />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <div className={`w-7 h-11 border-2 rounded-full flex justify-center ${isDarkMode ? "border-gray-600" : "border-gray-400"}`}>
          <motion.div className={`w-1 h-3 rounded-full mt-2 ${isDarkMode ? "bg-gray-600" : "bg-gray-400"}`} />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
