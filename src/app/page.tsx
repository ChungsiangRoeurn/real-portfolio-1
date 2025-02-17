import Head from "next/head";
import Footer from "@/components/global/Footer";
import About from "@/components/module/about-page/page";
import Hero from "@/components/module/home-page/page";
import Projects from "@/components/module/projects-page/page";
import Skills from "@/components/module/skills-page/page";

const page = () => {
  return (
    <main className="h-full w-full px-0 lg:px-20 ">
      <div className="grid md:px-20 grid-col ">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </main>
  );
};

export default page;
