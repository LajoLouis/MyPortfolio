import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Typewriter from "./Typewriter";
import Resume from "./Resume";
import Projects from "./Projects";
import { Element } from "react-scroll";
import Contact from "./Contact";

function AboutMe() {
  return (
    <div className="font-sans text-gray-900 bg-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white py-16 px-6 lg:w-[80%] mx-auto">
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 5,
            ease: "backIn",
          }}
          viewport={{ once: false, amount: "all" }}
        >
          <Typewriter text="HELLO, I'M FRANKLIN" speed={100} />
          <button className="mt-4 font-bold px-4 py-2 rounded">
            I'M A FULLSTACK WEB DEVELOPER
          </button>
          <div className="flex space-x-4 my-[10px] xs:justify-center md:justify-start">
            <Link to="projects" smooth={true} duration={2000}>
              <motion.button
                className="bg-white text-black p-[7px] rounded-lg font-bold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeIn" }}
              >
                View Projects
              </motion.button>
            </Link>
            <Link to="contact" smooth={true} duration={2000}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeIn" }}
                className="bg-slate-400/20 border-[1px] border-slate-100/25 p-[5px] rounded-md flex items-center space-x-2"
              >
                Contact Me
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 5, type: "spring", ease: "backIn" }}
        >
          <img
            src="/img/profilepic.jpg" // replace with actual image path
            alt="Franklin"
            className="w-full max-w-sm rounded shadow-lg"
          />
        </motion.div>
      </section>

      {/* About Section */}
      <Element>
        <section className="py-7 px-6 text-white xs:w-[90%] md:w-[80%] mx-auto bg-slate-400/20 border-[1px] border-slate-100/25 p-[10px] rounded-md">
          <h1 className="text-4xl font-bold text-yellow-600">About Me</h1>
          <p>
            I am a FullStack web devloper with my main focus on Javascript and
            its frameworks which I use for my frontend and others. I have a B.sc
            in Computer Science and can also be described as a Results-driven
            Junior Web Developer with expertise in React.js, Node.js,
            Express.js, and MongoDB. Experienced in building scalable
            applications, managing databases, and implementing authentication
            and real-time features. Currently honing skills while exploring
            cybersecurity and freelancing. Adaptable, quick learner, and
            committed to delivering efficient solutions.
          </p>
        </section>
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="resume">
        <section>
          <Resume />
        </section>
      </Element>
      <Element name="contact">
        <section className="text-white text-center py-[50px] space-y-4">
          <h1 className="text-3xl font-extrabold text-yellow-600">Contact</h1>
          <p>Interested in working together or giving me gigs</p>
          <motion.button
            className="bg-white text-black p-[7px] rounded-lg font-bold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="mailto:ezeokefranklin@gmail.com">Say Hello</a>
          </motion.button>
        </section>
      </Element>
    </div>
  );
}

export default AboutMe;
