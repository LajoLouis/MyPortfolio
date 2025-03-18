import React from "react";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div className="h-screen">
      <div className=" w-[70%] mx-auto flex m-[5%]">
        <div className="w-[50%]">
          <img
            src="/img/profilepic.jpg"
            alt=""
            className="w-[500px] h-[500px] rounded-[100%]"
          />
        </div>
        <div className="w-[50%] flex flex-col justify-center p-[20px]">
          <h1 className="text-[100px]">Hello</h1>
          <h3 className="font-bold text-lg">A Bit About Me</h3>
          <p className="font-light">
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
          <div className="flex space-x-4 m-[10px]">
            <Link
              to={`/resume`}
              className="h-[150px] w-[150px] rounded-[100%] border-[1px] border-black text-center text-lg text-bold flex flex-col justify-center bg-red-700 hover:bg-red-400"
            >
              {" "}
              Resume
            </Link>
            <Link
              to={`/projects`}
              className="h-[150px] w-[150px] rounded-[100%] border-[1px] border-black text-center text-lg text-bold flex flex-col justify-center bg-teal-700 hover:bg-teal-400"
            >
              {" "}
              Portfolio
            </Link>
            <Link
              to={`/contact`}
              className="h-[150px] w-[150px] rounded-[100%] border-[1px] border-black text-center text-lg text-bold flex flex-col justify-center bg-yellow-400 hover:bg-yellow-700"
            >
              {" "}
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
