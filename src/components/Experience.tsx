import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { jobs } from "../data/content";
import Reveal from "./Reveal";

export default function Experience() {
  const [active, setActive] = useState(0);
  const job = jobs[active];

  return (
    <section id="experience">
      <Reveal>
        <div className="section-head">
          <span className="num">/</span>
          <h2>what i've worked on</h2>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="exp">
          <div className="exp-tabs" role="tablist">
            <span
              className="exp-marker"
              style={{ transform: `translateY(${active * 42}px)` }}
            />
            {jobs.map((j, i) => (
              <button
                key={j.project}
                role="tab"
                aria-selected={i === active}
                className={`exp-tab ${i === active ? "active" : ""}`}
                onClick={() => setActive(i)}
              >
                {j.project}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="exp-panel"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.3 }}
            >
              <h3>
                {job.role} <span>@ Zensar Technologies</span>
              </h3>
              <p className="exp-period">
                {job.project} · {job.period}
              </p>
              <ul className="exp-points">
                {job.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  );
}
