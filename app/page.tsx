import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Now from "@/components/Now";
import About from "@/components/About";
import Research from "@/components/Research";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Leadership from "@/components/Leadership";
import Interests from "@/components/Interests";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Now />
        <About />
        <Research />
        <Projects />
        <OpenSource />
        <Leadership />
        <Interests />
      </main>
      <Footer />
    </>
  );
}
