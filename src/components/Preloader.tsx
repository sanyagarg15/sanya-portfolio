import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1600;
    const start = Date.now();
    const id = setInterval(() => {
      const p = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p >= 1) clearInterval(id);
    }, 40);
    // guaranteed completion even in background tabs (rAF/interval throttling)
    const done = setTimeout(onDone, duration + 350);
    return () => {
      clearInterval(id);
      clearTimeout(done);
    };
  }, [onDone]);

  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
    >
      <motion.div
        className="preloader-logo"
        exit={{ scale: 0.85, opacity: 0, transition: { duration: 0.4 } }}
      >
        <svg viewBox="0 0 100 100" role="img" aria-label="Loading">
          {/* hexagon frame */}
          <motion.polygon
            points="50,5 90,27 90,73 50,95 10,73 10,27"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
          {/* S monogram */}
          <motion.path
            d="M63 33c-3-4-8-6-14-6-8 0-13 4-13 10 0 14 27 8 27 22 0 6-6 10-14 10-6 0-11-2-14-6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
            style={{ strokeLinecap: "round" }}
          />
        </svg>
      </motion.div>
      <div className="preloader-count">{count}</div>
    </motion.div>
  );
}
