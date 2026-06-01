import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import PMVikas from "@/components/sections/PMVikas";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Vision from "@/components/sections/Vision";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative bg-background overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <PMVikas />
      <Skills />
      <Projects />
      <Education />
      <Vision />
      <Contact />
      <Footer />
    </main>
  );
}
