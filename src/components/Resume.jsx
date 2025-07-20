import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";

function Resume() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-2xl sm:text-4xl font-bold text-yellow-600">Resume</h1>
        <div className="mt-8 space-y-12">
          {/* resume template */}
          <a href="https://drive.google.com/file/d/1Wp7esYl7qKvKcFPD2Ad16VwILJFRBR00/view?usp=sharing">
            <div className="bg-[url('/img/franklincv.png')] mx-auto h-[400px] w-[90%] bg-contain bg-no-repeat cursor-pointer"></div>
          </a>
          {/* Work Experience */}
          <div className="border-b pb-8">
            <h1 className="text-lg sm:text-xl font-bold mb-4">Work Experience</h1>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <h1 className="w-full sm:w-1/3 font-semibold text-sm sm:text-base text-yellow-600">2024 - Present</h1>
                <div>
                  <h1 className="text-base sm:text-lg font-bold text-yellow-600">Full-stack Developer</h1>
                  <h1 className="text-base sm:text-lg font-bold text-yellow-600">Listacc Tech</h1>
                  <ul className="list-disc list-inside font-light text-sm sm:text-base">
                    <li>Management of a functional online learning system including lessons, tests, assessments, progress and tutors</li>
                    <li>Integrated third-party APIs and ensured responsive, user-friendly interfaces.</li>
                    <li>Optimized database schemas, improving data retrieval and storage efficiency.</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <h1 className="w-full sm:w-1/3 font-semibold text-sm sm:text-base text-yellow-600">JAN 2023 - JUNE 2023</h1>
                <div>
                  <h1 className="text-base sm:text-lg font-bold text-yellow-600">Internship</h1>
                  <h1 className="text-base sm:text-lg font-bold text-yellow-600">Listacc Academy</h1>
                  <ul className="list-disc list-inside font-light text-sm sm:text-base">
                    <li>Testing and debugging APIs using Postman to ensure smooth backend operations.</li>
                    <li>Collaborating with the team to improve UI/UX and optimize system performance.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Education */}
          <div className="border-b pb-8">
            <h1 className="text-lg sm:text-xl font-bold mb-4 text-yellow-600">Education</h1>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <h1 className="w-full sm:w-1/3 font-semibold text-sm sm:text-base">2019 - 2023</h1>
                <div>
                  <h1 className="text-base sm:text-lg font-bold">B.Sc Computer Science</h1>
                  <h1 className="text-base sm:text-lg font-bold">AE-FUNAI</h1>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <div>
                  <h1 className="text-base sm:text-lg font-bold">Fullstack Web Development Training</h1>
                  <h1 className="text-base sm:text-lg font-bold">Anchorsoft Academy</h1>
                  <img src="/img/anchorsoftcert.jpg" alt="Certificate" className="mt-2 max-w-full sm:max-w-xs" />
                </div>
              </div>
            </div>
          </div>
          {/* Skills & Expertise */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <h1 className="text-lg sm:text-xl font-bold sm:w-1/3 text-yellow-600">Skills & Expertise</h1>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-yellow-600">FullStack Web Development</h1>
              <h1 className="text-base sm:text-lg font-bold mt-2">Tools</h1>
              <ul className="list-none list-inside grid grid-cols-2 sm:grid-cols-3 gap-2 font-light text-sm sm:text-base">
                <li className="bg-slate-400/20 border-[1px] border-slate-100/25 p-[5px] rounded-md flex items-center space-x-2"><FaHtml5 />HTML</li>
                <li className="bg-slate-400/20 border-[1px] border-slate-100/25 p-[5px] rounded-md flex items-center space-x-2"><IoLogoCss3 />CSS</li>
                <li className="bg-slate-400/20 border-[1px] border-slate-100/25 p-[5px] rounded-md flex items-center space-x-2"><SiJavascript />JavaScript</li>
                <li className="bg-slate-400/20 border-[1px] border-slate-100/25 p-[5px] rounded-md flex items-center space-x-2"><RiTailwindCssFill />TailwindCSS</li>
                <li className="bg-slate-400/20 border-[1px] border-slate-100/25 p-[5px] rounded-md flex items-center space-x-2"><FaReact />React</li>
                <li className="bg-slate-400/20 border-[1px] border-slate-100/25 p-[5px] rounded-md flex items-center space-x-2"><FaNodeJs />Node.js</li>
                <li className="bg-slate-400/20 border-[1px] border-slate-100/25 p-[5px] rounded-md flex items-center space-x-2"><SiExpress />Express.js</li>
                <li className="bg-slate-400/20 border-[1px] border-slate-100/25 p-[5px] rounded-md flex items-center space-x-2"><SiMongodb />MongoDB</li>
                <li className="bg-slate-400/20 border-[1px] border-slate-100/25 p-[5px] rounded-md flex items-center space-x-2"><SiTypescript />TypeScript</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
