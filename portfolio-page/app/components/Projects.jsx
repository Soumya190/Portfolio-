"use client";
import React, { useState } from "react";
import Image from "next/image";

const Projects = () => {
  const [showCard, setShowCard] = useState(true);
  const [image, setImage] = useState(["/Screenshot 2024-06-19 194937.png","/Screenshot 2024-06-05 230109.png","/Screenshot 2024-06-26 132910.png"]);
  const [text, setText] = useState(["News Portal Website","Multi Step Form","Restaurant Website"]);
  const [description, setDescription] = useState([
    "Developed a news portal website using React that allows users to get news based on selected categories and keyword search. Implemented pagination using Vite for smooth navigation from one page to another, Improved site efficiency by 30%",
    "Crafted a responsive multi-step form application using React. Worked on form validation and error handling to ensure data integrity and user experience, enhanced website speed by 20%",
    "Designed and developed a responsive restaurant website showcasing Indian and Chinese cuisine menus, enhancing user experience with intuitive navigation and visually appealing design. Achieved a 30% increase in website performance, improving website performance by 40%"
  ]);

  return (
    <div id="projects" className="h-screen grid p-30 items-center py-10">
      <p className="text-5xl">Projects</p>
      {showCard ? (
        <>
          <div className="h-[32rem] w-[24rem] flex gap-10 ">
            {image.map((elem, index) => {
              return (
                <>
                 <div className="flex">
                 <div className="grid gap-3  px-5 py-5  border-gradient-to-r shadow-2xl rounded-2xl from-[#78847C] to-[#B3BFB8] border-2" key={index}>
                    <Image
                      src={image[index]}
                      alt="News Website"
                      width={340}
                      height={200}
                      className="h-[10rem] w-[24rem]"
                    />
                    <p className="text-2xl font-semibold mb-2">{text[index]}</p>
                    <p className="text-base text-white">{description[index]}</p>
                    <div className="flex gap-5">
                    <button className="h-[3.5rem] w-[10rem] bg-gradient-to-r shadow-2xl rounded-full from-[#78847C] to-[#B3BFB8]">Live preview</button>
                    <button className="rounded-full h-[3.5rem] w-[10rem] border-2">Check on Github</button>
                    </div>
                  </div>
                 </div>
                </>
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
