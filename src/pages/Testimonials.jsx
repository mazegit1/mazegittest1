import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
import { SiWebauthn } from 'react-icons/si';
import blurr from '../images/blurr.png';
import outdoora from '../images/outdoora.png';
import squareup from '../images/squareup.png';
import bubblebash from '../images/bubblebash.png';
import nikem from '../images/nikem.png';

const Testimonials = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [showAll, setShowAll] = useState(false);

  const handleToggleProjects = () => {
    setShowAll(prev => !prev);
    setVisibleProjects(showAll ? 3 : projectData.length);
  };

  const projectData = [
    {
      img: blurr,
      title: 'Blurr | Mazegit',
      desc: 'ReactJs  TailwindCSS  ReactDOM  ReactIcons',
      link: 'https://blurr.netlify.app/',
      code: 'https://github.com/mazegit1/blurr-mazegit',
    },
    {
      img: outdoora,
      title: 'Outdoora | Mazegit',
      desc: 'ReactJs  TailwindCSS  ReactDOM  ReactIcons',
      link: 'https://outdoora.netlify.app/',
      code: 'https://github.com/mazegit1/outdoor',
    },
    {
      img: squareup,
      title: 'SquareUp | Mazegit',
      desc: 'ReactJs  TailwindCSS  ReactDOM  ReactIcons',
      link: 'https://squareupm.netlify.app/',
      code: 'https://github.com/mazegit1/squareup',
    },
    {
      img: bubblebash,
      title: 'BubbleBash | Mazegit',
      desc: 'ReactJs  TailwindCSS  ReactDOM  ReactIcons',
      link: 'https://bubblebash-mazegit.netlify.app/',
      code: 'https://github.com/mazegit1/bubblebash',
    },
    {
      img: nikem,
      title: 'Nikem | Mazegit',
      desc: 'ReactJs  TailwindCSS  ReactDOM  ReactIcons',
      link: 'https://nikem.netlify.app/',
      code: 'https://github.com/mazegit1/nike',
    },
  ];

  return (
    <div className="projects px-5 md:px-20 py-10 md:py-20 bg-[black] text-white text-xl md:text-2xl">
      <div className="project-top flex items-center justify-between mb-8">
        <div className="title flex gap-2 items-center">
          <h1 className="xl:text-7xl md:text-5xl text-3xl">
            <span className="text-[#FCE694]"></span>projects
          </h1>
        </div>
        <motion.button
          className=" py-2 px-4 rounded  transition"
          onClick={handleToggleProjects}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showAll ? "View Less" : "View All"}
        </motion.button>
      </div>

      <div className="project-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.slice(0, visibleProjects).map((project, index) => (
          <motion.div
            key={index}
            className="card bg-[#e7e7e7] border border-black p-4 rounded-lg text-black shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <img src={project.img} alt={project.title} className="w-full rounded-md" />
            <h3 className="mt-2 font-semibold">{project.desc}</h3>
            <h1 className="text-xl font-bold">{project.title}</h1>
            <div className="buttons flex flex-col sm:flex-row items-center gap-4 mt-4">
              <a href={project.link} className="flex items-center justify-center px-4 py-2 border-white border rounded-xl bg-black hover:bg-white hover:text-black transition-all ease-in-out duration-200 hover:border-black text-white gap-2 text-lg">
                Open in web <SiWebauthn className="text-3xl" />
              </a>
              <a href={project.code} className="flex items-center justify-center px-4 py-2 border-black transition-all ease-in-out duration-200 hover:border-white hover:bg-black hover:text-white border rounded-xl bg-white text-black gap-2 text-lg">
                Show the CODE <FaCode className="text-3xl" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
