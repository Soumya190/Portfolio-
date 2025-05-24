"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const [showCard, setShowCard] = useState(true);

  const projects = [
    {
      image: "/Screenshot 2024-06-19 194937.png",
      text: "News Portal Website",
      description:
        "Developed a news portal website using React that allows users to get news based on selected categories and keyword search. Implemented pagination using Vite for smooth navigation from one page to another, Improved site efficiency by 30%",
      url: "",
      github_url: "https://github.com/Soumya190",
    },
    {
      image: "/Screenshot 2024-06-05 230109.png",
      text: "Multi Step Form",
      description:
        "Crafted a responsive multi-step form application using React. Worked on form validation and error handling to ensure data integrity and user experience, enhanced website speed by 20%",
      url: "https://multi-step-form-t1c8.vercel.app/",
      github_url: "https://github.com/Soumya190",
    },
    {
      image: "/Screenshot 2024-06-26 132910.png",
      text: "Restaurant Website",
      description:
        "Designed and developed a responsive restaurant website showcasing Indian and Chinese cuisine menus, enhancing user experience with intuitive navigation and visually appealing design. Achieved a 30% increase in website performance, improving website performance by 40%",
      url: "https://restaurant-website-five-orpin.vercel.app/",
      github_url: "https://github.com/Soumya190",
    },
  ];

  return (
    <div id="projects" className="min-h-screen  py-10 px-4 flex flex-col items-center justify-center lg:h-screen lg:grid lg:gap-4 lg:p-30 lg:items-center">
      <p className="text-2xl lg:text-5xl lg:py-0 py-4 font-semibold ">Projects</p>
      {showCard ? (
        <>
          <div className="w-[80%] lg:w-full grid place-content-center lg:flex gap-5 justify-center">
            {projects.map((elem, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="flex">
                    <div className="grid gap-3  sm:px-5 py-5  border-gradient-to-r shadow-2xl rounded-xl lg:rounded-2xl from-[#78847C] to-[#B3BFB8] border-2">
                      <Image
                        src={elem.image}
                        alt="News Website"
                        width={340}
                        height={200}
                        className="h-[8rem] w-[80%] mx-auto lg:h-[10rem] lg:w-full"
                      />
                      <p className="text-xl lg:text-2xl font-semibold mb-2 mx-9 lg:mx-0">{elem.text}</p>
                      <p className="text-base text-white mx-auto lg:mx-0 items-center px-4 py-2 lg:px-0 lg:py-0">{elem.description}</p>
                      <div className="flex gap-4 justify-center lg:gap-5">
                        <Link href={elem.url}>
                          <button className="relative overflow-hidden text-white font-semibold rounded-full h-[3.5rem] w-[7.9rem] text-sm lg:h-[3.5rem] lg:w-[10rem] bg-gradient-to-r from-[#78847C] to-[#B3BFB8] shadow-2xl">
                            <span className="absolute inset-0 bg-white/30 blur-sm opacity-60 -skew-x-12 w-2 h-full left-[-50%] animate-shine"></span>
                            <span className="relative z-10">Live Preview</span>
                          </button>
                        </Link>
                        <Link href={elem.github_url}>
                          <button className="rounded-full h-[3.5rem] w-[7.9rem] text-sm lg:h-[3.5rem] lg:w-[10rem] border-2">
                            Check on Github
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Projects;
