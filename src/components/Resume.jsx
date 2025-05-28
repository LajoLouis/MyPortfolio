import React from "react";

function Resume() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-2xl sm:text-4xl font-bold">Resume</h1>
        <div className="mt-8 space-y-12">
          {/* resume template */}
          <div className="bg-[url('/img/cv.png')] mx-auto h-[400px] w-[90%] bg-contain bg-no-repeat"></div>
          {/* Work Experience */}
          <div className="border-b pb-8">
            <h1 className="text-lg sm:text-xl font-bold mb-4">Work Experience</h1>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <h1 className="w-full sm:w-1/3 font-semibold text-sm sm:text-base">2023 - 2024</h1>
                <div>
                  <h1 className="text-base sm:text-lg font-bold">Web Developer Internship</h1>
                  <h1 className="text-base sm:text-lg font-bold">Listacc Academy</h1>
                  <ul className="list-disc list-inside font-light text-sm sm:text-base">
                    <li>Developing and maintaining full-stack web applications using React.js, Node.js, Express.js, and MongoDB.</li>
                    <li>Implementing user authentication, real-time features (Socket.io), and payment integrations.</li>
                    <li>Testing and debugging APIs using Postman to ensure smooth backend operations.</li>
                    <li>Collaborating with the team to improve UI/UX and optimize system performance.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Education */}
          <div className="border-b pb-8">
            <h1 className="text-lg sm:text-xl font-bold mb-4">Education</h1>
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
            <h1 className="text-lg sm:text-xl font-bold sm:w-1/3">Skills & Expertise</h1>
            <div>
              <h1 className="text-base sm:text-lg font-bold">FullStack Web Development</h1>
              <h1 className="text-base sm:text-lg font-bold mt-2">Tools</h1>
              <ul className="list-disc list-inside grid grid-cols-2 sm:grid-cols-3 gap-2 font-light text-sm sm:text-base">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TailwindCSS</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>TypeScript</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
