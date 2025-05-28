import React from "react";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div className="font-sans text-gray-800 bg-gray-900">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white py-16 px-6 lg:w-[80%] mx-auto">
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-lg">MY NAME IS</p>
          <h2 className="text-4xl font-bold">FRANKLIN</h2>
          <button className="mt-4 bg-yellow-400 text-black font-bold px-4 py-2 rounded">
            I'M A FULLSTACK WEB DEVELOPER
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="/img/profilepic.jpg" // replace with actual image path
            alt="Franklin"
            className="w-full max-w-sm rounded shadow-lg"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto">
          <div className="md:w-1/2 relative">
            <div className="absolute top-2 left-2 w-full h-full bg-black z-0" />
            <img
              src="/img/profilepic.jpg" // replace with actual image path
              alt="Franklin"
              className="relative z-10 w-full max-w-sm"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12">
            <p className="text-sm uppercase tracking-wider">who am i</p>
            <h3 className="text-2xl font-bold text-yellow-500 mb-4">HELLO</h3>
            <p>I am a FullStack web devloper with my main focus on Javascript and
            its frameworks which I use for my frontend and others. I have a B.sc
            in Computer Science and can also be described as a Results-driven
            Junior Web Developer with expertise in React.js, Node.js,
            Express.js, and MongoDB. Experienced in building scalable
            applications, managing databases, and implementing authentication
            and real-time features. Currently honing skills while exploring
            cybersecurity and freelancing. Adaptable, quick learner, and
            committed to delivering efficient solutions.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
