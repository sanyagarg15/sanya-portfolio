import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/content";
import CubeHero from "./CubeHero";

const FULL = "hi, i'm sanya.";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 1.4 } },
};

function useTypewriter(text: string, startDelay = 700, speed = 90) {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const startId = setTimeout(function tick() {
      setOut(text.slice(0, i + 1));
      i += 1;
      if (i < text.length) {
        timer = setTimeout(tick, speed);
      } else {
        setDone(true);
      }
    }, startDelay);
    return () => {
      clearTimeout(startId);
      clearTimeout(timer);
    };
  }, [text, startDelay, speed]);
  return { out, done };
}

export default function Hero() {
  const { out, done } = useTypewriter(FULL);

  return (
    <section className="hero" id="top">
      <div className="hero-top">
        <div className="hero-lead">
          <h1 className="hero-type">
            {out}
            <span className={`caret ${done ? "blink" : ""}`}>|</span>
          </h1>
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p variants={item}>{profile.intro}</motion.p>
          </motion.div>
        </div>

        <motion.div
          className="hero-art"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
        >
          <CubeHero />
        </motion.div>
      </div>
    </section>
  );
}
