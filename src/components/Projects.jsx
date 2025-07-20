import React from "react";
import { motion } from "framer-motion";
import { TbWorld } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiShadcnui } from "react-icons/si";

function Projects() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 text-white ">
      <div className=" py-10">
        <h1 className="text-2xl sm:text-4xl font-bold text-yellow-700">
          Projects
        </h1>
        {/* <div className='mt-12 space-y-16 grid grid-cols-2'>
          {[
            {
              title: 'LajoSpaces',
              description: 'LajoSpaces is a real estate application that allows users to view and book properties for sale or rent. Users are also allowed to put their own spaces or properties for sale to get good roommates',
              imgSrc: '/img/lajospaces_.jpg',
              link: 'https://lajospaces.vercel.app/'
            },
            {
              title: 'BookViaLajo',
              description: 'BookViaLajo is a hotel booking application much like Booking.com in which logged-in users can reserve and book available rooms in hotels through the application.',
              imgSrc: '/img/bookvialajo.jpg',
              link: 'https://bookvialajo.vercel.app/'
            },
            {
              title: 'MBIFEDERA',
              description: '',
              imgSrc: '/img/mbi.png',
              link: 'https://mbispace.com/'
            },
            {
              title: 'StarTech',
              description: 'StarTech is an e-commerce application based solely on the sales of shoes. Users can make orders, add to cart, and pay for them on the app, and it will be delivered to the designated location filled in by the user.',
              imgSrc: '/img/startech.jpg',
              link: 'https://startech-ecom-app-navy.vercel.app/'
            },
            {
              title: 'Simon Says',
              description: 'Simon Says is a classic memory game where players have to repeat a sequence of colors and sounds in the correct order.',
              imgSrc: '/img/simonsays.jpg',
              link: ''
            }
          ].map((project, index) => (
              <div key={index} className='flex flex-col items-center sm:justify-between gap-6 bg-slate-400/20 border-[1px] border-slate-100/25 rounded-md'>
              <div className='w-full sm:w-1/2 space-y-4'>
                <h1 className='text-xl sm:text-3xl font-bold text-yellow-600'>{project.title}</h1>
                <p className='font-light text-sm sm:text-base'>{project.description}</p>
              </div>
              <div className='w-full sm:w-1/2'>
                {project.link ? (
                    <img src={project.imgSrc} alt={project.title} className='w-full rounded-lg shadow-md mb-[50px]' />
                  
                ) : (
                  <img src={project.imgSrc} alt={project.title} className='w-full rounded-lg shadow-md' />
                )}
              </div>
            </div>
          ))}
        </div> */}
        <div className="grid xs:grid-cols-1 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className="bg-slate-400/20 border-[1px] border-slate-100/25 xs:p-[10px] md:p-[30px] rounded-md space-y-4 my-[30px] xs:w-[95%] md:w-[70%] h-fit mx-auto"
          >
            <h1 className="text-yellow-600 font-bold">LajoSpaces</h1>
            <img
              src="/img/lajospaces_.jpg"
              alt=""
              className="md:h-[300px] xs:h-[300px] w-[90%] mx-auto"
            />
            <p>
              LajoSpaces is a real estate application that allows users to view
              and book properties for sale or rent. Users are also allowed to
              put their own spaces or properties for sale to get good roommates
            </p>
            <div className="flex space-x-2 flex-wrap justify-around gap-3">
              <button className="bg-white text-black p-[5px] space-x-1 rounded-sm flex items-center font-bold">
                <span className="flex items-center">
                  <FaReact /> + <SiTypescript />
                </span>{" "}
                <span className="space-x-2">React + Typescript</span>
              </button>
              <button className="bg-white text-black p-[5px] rounded-sm flex items-center font-bold">
                <RiTailwindCssFill /> Tailwindcss
              </button>
              <button className="bg-white text-black p-[5px] rounded-sm flex items-center font-bold">
                <SiExpress /> Express
              </button>
              <button className="bg-white text-black p-[5px] rounded-sm flex items-center font-bold">
                <SiMongodb /> MongoDb
              </button>
              <button className="bg-white text-black p-[5px] rounded-sm flex items-center font-bold">
                <SiShadcnui /> Shadcnui
              </button>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeIn" }}
              className="bg-white text-black p-[5px] rounded-sm"
            >
              <a
                href="https://lajospaces.vercel.app/"
                className="flex items-center font-bold"
                target="_blank"
              >
                <TbWorld />
                View Project
              </a>
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className="bg-slate-400/20 border-[1px] border-slate-100/25 xs:p-[10px] md:p-[30px] rounded-md space-y-4 my-[30px] xs:w-[95%] md:w-[70%] h-fit mx-auto"
          >
            <h1 className="text-yellow-600 font-bold">BookViaLajo</h1>
            <img
              src="img/bookvialajo.jpg"
              alt=""
              className="md:h-[300px] xs:h-[200px] w-[90%] mx-auto"
            />
            <p>
              BookViaLajo is a hotel booking application much like Booking.com
              in which logged-in users can reserve and book available rooms in
              hotels through the application.
            </p>
            <div className="flex space-x-2 flex-wrap justify-around gap-3">
              <button className="bg-white text-black p-[5px] rounded-sm flex items-center font-bold">
                <FaReact /> React
              </button>
              <button className="bg-white text-black p-[5px] rounded-sm flex items-center font-bold">
                <RiTailwindCssFill /> Tailwindcss
              </button>
              <button className="bg-white text-black p-[5px] rounded-sm flex items-center font-bold">
                <SiExpress /> Express
              </button>
              <button className="bg-white text-black p-[5px] rounded-sm flex items-center font-bold">
                <SiMongodb /> MongoDb
              </button>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeIn" }}
              className="bg-white text-black p-[5px] rounded-sm"
            >
              <a
                href="https://bookvialajo.vercel.app/"
                className="flex items-center font-bold"
                target="_blank"
              >
                <TbWorld />
                View Project
              </a>
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className="bg-slate-400/20 border-[1px] border-slate-100/25 p-[5px] rounded-md space-y-4 my-[30px] xs:w-[95%] md:w-[70%] h-fit mx-auto"
          >
            <h1 className="text-yellow-600 font-bold">MBIFEDERA</h1>
            <img
              src="/img/mbi.png"
              alt=""
              className="md:h-[300px] xs:h-[200px] w-[90%] mx-auto"
            />
            <p></p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeIn" }}
              className="bg-white text-black p-[5px] rounded-sm"
            >
              <a
                href="https://mbispace.com/"
                className="flex items-center font-bold"
                target="_blank"
              >
                <TbWorld />
                View Project
              </a>
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className="bg-slate-400/20 border-[1px] border-slate-100/25 xs:p-[10px] md:p-[30px] rounded-md space-y-4 my-[30px] xs:w-[95%] md:w-[70%] h-fit mx-auto"
          >
            <h1 className="text-yellow-600 font-bold">StarTech</h1>
            <img
              src="/img/startech.jpg"
              alt=""
              className="md:h-[300px] xs:h-[200px] w-[90%] mx-auto"
            />
            <p>
              StarTech is an e-commerce application based solely on the sales of
              shoes. Users can make orders, add to cart, and pay for them on the
              app, and it will be delivered to the designated location filled in
              by the user.
            </p>
            <div className="flex space-x-2 flex-wrap justify-around gap-3">
              <button className="bg-white text-black p-[5px] rounded-sm flex items-center font-bold">
                <FaReact /> React
              </button>
              <button className="bg-white text-black p-[5px] rounded-sm flex items-center font-bold">
                <RiTailwindCssFill /> Tailwindcss
              </button>
              <button className="bg-white text-black p-[5px] rounded-sm flex items-center font-bold">
                <SiExpress /> Express
              </button>
              <button className="bg-white text-black p-[5px] rounded-sm flex items-center font-bold">
                <SiMongodb /> MongoDB
              </button>
            </div>
            <div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeIn" }}
                className="bg-white text-black p-[5px] rounded-sm"
              >
                <a
                  href="https://startech-ecom-app-navy.vercel.app/"
                  className="flex items-center font-bold"
                  target="_blank"
                >
                  <TbWorld />
                  View Project
                </a>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
