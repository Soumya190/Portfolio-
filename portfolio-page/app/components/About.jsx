import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="grid ">
        <div className="flex gap-[30rem] static font-semibold">
          <div>
            <p className="text-2xl">S.T. portfolio</p>
          </div>
          <div className="flex gap-[5rem]">
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
        <div className="flex justify-between px-30 mt-[8rem]">
          <div className="px-0 grid place-content-center gap-10 w-[30rem] max-w-full ">
            <p className="text-5xl break-words whitespace-normal font-semibold">
              Hello, I'm Soumya Tiwari, Frontend Developer
            </p>
            <p className="break-words whitespace-normal text-md text-wrap">
              I'm a Frontend Developer passionate about crafting user-friendly
              and visually appealing web experiences. This portfolio website,
              which I developed using Next, showcases my skills and projects.
            </p>
          </div>

          <div className="h-[25.5rem] w-[26rem] border-2 border-gray-500 rounded-full">
            <div className="h-[21rem] w-[21rem] relative top-9 left-10 bg-black rounded-full"></div>
          </div>
        </div>
        {/* <button className="p-[3px] relative  text-white hover:h-[3.8rem] hover:w-[11rem] transition-all duration-300  w-[10rem] rounded-full ml-[7rem] h-[3.5rem]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#78847C] to-[#B3BFB8] rounded-lg" />
          <div className="px-8 py-2  from-[#78847C] to-[#B3BFB8] rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Resume
          </div>
        </button> */}
        <button className="shadow-[inset_0_0_0_2px_#616467]  w-[12rem]  text-black px-12 ml-[7rem] py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#78847C] hover:text-white dark:text-neutral-200 transition duration-200">
          Playlist
        </button>
      </div>
    </>
  );
};

export default page;
