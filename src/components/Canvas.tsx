import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/content";
import { GitHubIcon, GlobeIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Canvas() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [resetKey, setResetKey] = useState(0);
  const dragState = useRef<{ startX: number; startY: number; ox: number; oy: number } | null>(null);

  const onPointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest(".proj-card, .canvas-reset, .canvas-hint")) return;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    dragState.current = { startX: e.clientX, startY: e.clientY, ox: pan.x, oy: pan.y };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const s = dragState.current;
    if (!s) return;
    setPan({ x: s.ox + (e.clientX - s.startX), y: s.oy + (e.clientY - s.startY) });
  };

  const onPointerUp = (e: React.PointerEvent) => {
    dragState.current = null;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      /* noop */
    }
  };

  const reset = () => {
    setPan({ x: 0, y: 0 });
    setResetKey((k) => k + 1);
  };

  return (
    <section id="work">
      <Reveal>
        <div className="section-head">
          <span className="num">/</span>
          <h2>things i&apos;ve built</h2>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="canvas-intro">
          A freeform canvas of things I&apos;ve built. Drag the cards around, or grab the empty
          space to pan. Click a card to open the project; reset snaps it back.
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <div
          className="canvas-wrap"
          ref={wrapRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <span className="canvas-hint">✦ drag cards · grab space to pan</span>
          <button className="canvas-reset" onClick={reset} onPointerDown={(e) => e.stopPropagation()}>
            ⟲ reset
          </button>

          <div className="canvas-inner" style={{ transform: `translate(${pan.x}px, ${pan.y}px)` }}>
            {projects.map((p, i) => (
              <motion.div
                key={`${resetKey}-${p.title}`}
                className={`proj-card ${p.accent ? "accent" : ""}`}
                style={{ left: p.x, top: p.y }}
                drag
                dragMomentum={false}
                dragElastic={0.12}
                whileDrag={{ scale: 1.04, zIndex: 20 }}
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="folder">
                  {p.live ? <GlobeIcon size={22} /> : <GitHubIcon size={22} />}
                  <span className="drag-dots">⠿</span>
                </div>
                <h4>{p.title}</h4>
                <p>{p.blurb}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <a
                  className="proj-link"
                  href={p.live || p.url}
                  target="_blank"
                  rel="noreferrer"
                  onPointerDown={(e) => e.stopPropagation()}
                >
                  {p.live ? "visit site ↗" : "view repo ↗"}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
