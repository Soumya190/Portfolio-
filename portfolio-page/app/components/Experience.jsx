import React from "react";

const Experience = () => {
  return (
    <div
      id="experience"
      className="min-h-screen grid place-content-center gap-10 items-center px-4 py-10 lg:h-screen lg:p-30"
    >
      <p className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-left">
        My Experience
      </p>
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:w-[40rem] h-auto lg:h-[23rem] px-4 sm:px-8 py-5 border-gradient-to-r shadow-2xl rounded-2xl from-[#78847C] to-[#B3BFB8] border-2">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-2 sm:mt-5">
          <img
            src="/Screenshot 2025-05-20 072923.png"
            alt="prathibha-innovations-logo"
            className="h-[50px] w-[50px] sm:h-[70px] sm:w-[70px]"
          />
          <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-center sm:text-left">
            SDE Intern
          </p>
        </div>
        <p className="mt-3 font-bold text-sm sm:text-md text-center sm:text-left">
          August 2024 - November 2024
        </p>
        <ul className="list-disc list-inside font-semibold mt-4 text-sm lg:text-md">
          <li>
            Engineered a performant and sleek web application using Next.js.
            <ul className="pl-5 list-disc">
              <li>
                Worked hands-on with both frontend interfaces and backend logic.
              </li>
              <li>
                Ensured optimized performance and a great user experience.
              </li>
              <li>Reduced code complexity by 30%.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
