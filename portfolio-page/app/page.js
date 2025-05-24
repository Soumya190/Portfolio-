import Image from "next/image";
import About from '@/app/components/About'
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="lg:px-5 lg:py-6  bg-[#3C493F]   text-white">
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Education/>
      <Contact/>
    </div>
  );
}
