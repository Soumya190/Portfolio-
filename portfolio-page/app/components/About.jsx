"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const page = () => {
  const [showDiv, setShowDiv] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <>
      <div className="lg:grid sm:flex">
        <div className="lg:flex  lg:gap-[30rem] lg:static font-semibold">
          <div className="block md:hidden lg:hidden sm:flex ">
            <div className="flex justify-between items-center px-3">
              <button
                className="flex flex-col justify-between w-6 h-5 md:hidden"
                onClick={handleBurgerClick}
              >
                <span className="block w-full h-0.5 bg-white"></span>
                <span className="block w-full h-0.5 bg-white"></span>
                <span className="block w-full h-0.5 bg-white"></span>
              </button>
              <p className="text-2xl sm:text-right">S.T. PORTFOLIO</p>
            </div>
          </div>
          {isMenuOpen && (
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } absolute top-16 left-3 sm:block md:hidden bg-white w-[12rem] rounded text-black p-4 z-50 shadow-md`}
            >
              <ul className="space-y-2 ">
                <li>
                  <Link href="#about">About me</Link>
                </li>
                <li>
                  <Link href="#skills">Skills & Tools</Link>
                </li>
                <li>
                  <Link href="#experience">Experience</Link>
                </li>
                <li>
                  <Link href="#projects">Projects</Link>
                </li>
                <li>
                  <Link href="#education">Education</Link>
                </li>
                <li>
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>
            </div>
          )}
          <div className="hidden lg:block">
            <p className="text-2xl sm:text-right">S.T. Portfolio</p>
          </div>
          <div className="hidden  lg:flex gap-[5rem]">
            <Link href="#about">
              <button>About me</button>
            </Link>
            <Link href="#skills">
              <p>Skills&Tools</p>
            </Link>
            <Link href="#experience">
              <p>Experience</p>
            </Link>
            <Link href="#projects">
              <p>Projects</p>
            </Link>
            <Link href="#education">
              <p>Education</p>
            </Link>
            <Link href="#contact">
              <p>Contact</p>
            </Link>
          </div>
        </div>
        <div className="lg:flex lg:justify-between sm:grid sm:gap-[10rem] px-30 lg:mt-[8rem]">
          <div className="hidden lg:grid px-0  place-content-center gap-10 w-[30rem] max-w-full ">
            <p className=" break-words text-5xl whitespace-normal font-semibold">
              Hello, I'm Soumya Tiwari, Frontend Developer
            </p>
            <p className="break-words whitespace-normal text-md text-wrap">
              I'm a Frontend Developer passionate about crafting user-friendly
              and visually appealing web experiences. This portfolio website,
              which I developed using Next, showcases my skills and projects.
            </p>
          </div>

          <div className="grid lg:hidden place-content-center mt-[5rem]">
            <div className="h-[15rem] w-[15rem]  lg:h-[25.5rem] lg:w-[26rem] border-2 border-gray-500 rounded-full">
              <div className=" h-[12rem] w-[12rem] lg:h-[21rem] lg:w-[21rem] relative top-6 lg:top-9 left-6 lg:left-10 bg-gradient-to-r from-[#78847C] to-[#B3BFB8] rounded-full overflow-hidden">
                <img
                  src="/WhatsApp_Image_2025-05-20_at_21.04.48_e371a522-removebg-preview.png"
                  alt=""
                  height={270}
                  width={270}
                  className="relative left-2 lg:left-7 lg:top-1 "
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:grid">
            <div className="h-[15rem] w-[15rem]  lg:h-[25.5rem] lg:w-[26rem] border-2 border-gray-500 rounded-full">
              <div className=" h-[12rem] w-[12rem] lg:h-[21rem] lg:w-[21rem] relative top-6 lg:top-9 left-6 lg:left-10 bg-gradient-to-r from-[#78847C] to-[#B3BFB8] rounded-full overflow-hidden">
                <img
                  src="/WhatsApp_Image_2025-05-20_at_21.04.48_e371a522-removebg-preview.png"
                  alt=""
                  height={270}
                  width={270}
                  className="relative left-2 lg:left-7 lg:top-1 "
                />
              </div>
            </div>
          </div>

          <div className="block px-6 py-10 lg:hidden w-full max-w-md mx-auto text-center space-y-4">
            <p className="text-2xl font-semibold leading-tight">
              Hello, I'm Soumya Tiwari, Frontend Developer
            </p>
            <p className="text-base text-white leading-relaxed">
              I'm a Frontend Developer passionate about crafting user-friendly
              and visually appealing web experiences. This portfolio website,
              which I developed using Next.js, showcases my skills and projects.
            </p>
          </div>
        </div>
        <div className="flex lg:hidden justify-center items-center ">
          <button className="shadow-[inset_0_0_0_2px_#616467] w-[12rem] text-black px-3 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#78847C] hover:text-white dark:text-neutral-200 transition duration-200">
            Get Started
          </button>
        </div>

        <Link href='/'>
        <button className="hidden lg:block shadow-[inset_0_0_0_2px_#616467]  w-[12rem]  text-black px-4 ml-[7rem] py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#78847C] hover:text-white dark:text-neutral-200 transition duration-200">
          Get Started
        </button></Link>
      </div>
    </>
  );
};

export default page;
