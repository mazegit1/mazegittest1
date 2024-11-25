import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaGlobe, FaUserGraduate } from "react-icons/fa";
import about from '../images/about.webp'
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-yellow-400 min-h-screen flex flex-col items-center py-56 px-4"
    >
      {/* Title Section */}
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-6 text-center"
      >
        About Me
      </motion.h1>

      {/* Content Section */}
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
        {/* Image Section */}
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <img
            src={about}
            alt="About Me"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Information Section */}
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <p className="text-lg mb-4">
            Hello! My name is <span className="font-bold">Huseyn Khalil</span>. I
            am a 14-year-old developer and student from{" "}
            <span className="font-bold">Baku, Azerbaijan</span>.
          </p>
          <p className="text-lg mb-4">
            I specialize in creating stunning websites using technologies like{" "}
            <span className="font-bold">React.js</span>,{" "}
            <span className="font-bold">TailwindCSS</span>, and{" "}
            <span className="font-bold">Framer Motion</span>. I also love
            exploring Python and constantly expanding my skill set.
          </p>
          
          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            <div className="flex flex-col items-center">
              <FaCode size={32} />
              <p className="mt-2 text-sm">Coding</p>
            </div>
            <div className="flex flex-col items-center">
              <FaGlobe size={32} />
              <p className="mt-2 text-sm">Global Networking</p>
            </div>
            <div className="flex flex-col items-center">
              <FaUserGraduate size={32} />
              <p className="mt-2 text-sm">Learning</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
