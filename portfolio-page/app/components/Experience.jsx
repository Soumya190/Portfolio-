import React from "react";

const Experience = () => {
  return (
    <div
      id="experience"
      className="h-screen grid   place-content-center gap-15 items-center p-30"
    >
      <p className="font-semibold text-5xl">My Experience</p>
      <div className="h-[23rem] px-13 py-5 w-[40rem] border-gradient-to-r shadow-2xl rounded-2xl from-[#78847C] to-[#B3BFB8] border-2">
        <div className="flex mt-5 gap-5 ">
          <img
            src="/Screenshot 2025-05-20 072923.png"
            alt="prathibha-innovations-logo"
            height={70}
            width={70}
          />
          <p className="font-bold text-4xl ">SDE Intern</p>
        </div>
        <p className="mt-3 font-bold text-md">August 2024-November 2024</p>
        <ul className="list-disc list-inside font-semibold mt-5 text-md">
          <li>
            Engineered a performant and sleek web application using Next.js
            Worked hands-on with both frontend interfaces and backend logic.
            <li>Ensured optimized performance and a great user experience Reduced
            code complexity by 30%.</li>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
