import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";  // ✅ add this

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />     {/* ✅ add this */}
    </>
  );
}