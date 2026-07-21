import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";
import Nav from "./components/Nav";
import SideRails from "./components/SideRails";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Canvas from "./components/Canvas";
import Contact from "./components/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  // lock scroll while preloader is up
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
  }, [loading]);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Nav />
          <SideRails />
          <main>
            <Hero />
            <About />
            <Experience />
            <Canvas />
            <Contact />
          </main>
        </>
      )}
    </>
  );
}
