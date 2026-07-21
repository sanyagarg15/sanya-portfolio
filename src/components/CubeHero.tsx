import { useEffect, useRef } from "react";

type Vec = [number, number, number];
type Cubie = { pos: Vec; spin: string };
type Move = { axis: "x" | "y" | "z"; layer: number; dir: number };

const BASE: Move[] = [
  { axis: "x", layer: 1, dir: 1 },
  { axis: "y", layer: -1, dir: 1 },
  { axis: "z", layer: 1, dir: -1 },
  { axis: "x", layer: -1, dir: 1 },
  { axis: "y", layer: 1, dir: -1 },
  { axis: "z", layer: -1, dir: 1 },
];
const SEQ: Move[] = [
  ...BASE,
  ...[...BASE].reverse().map((m) => ({ ...m, dir: -m.dir })),
];

const STEP = 60;
const DUR = 240;

const BG: Record<string, string> = {
  html: "#e44d26", js: "#f7df1e", ts: "#3178c6", react: "#20232a",
  html5: "#e44d26", css: "#eaf3fb", ng: "#fdeaec", vue: "#e9f9f0",
  sass: "#f6dccb", node: "#eef6e2", redux: "#efeafa", git: "#fdeee7",
  graphql: "#fdeaf4", npm: "#cb3837", next: "#111111", tailwind: "#e7f8ff",
  terminal: "#23283b", braces: "#eef0f7", database: "#eaf5ec",
};

function Shield({ fill, letter, fg }: { fill: string; letter: string; fg: string }) {
  return (
    <svg viewBox="0 0 48 48">
      <path d="M24 4 L42 9 L39 32 L24 44 L9 32 L6 9 Z" fill={fill} stroke="rgba(0,0,0,0.18)" strokeWidth="1" strokeLinejoin="round" />
      <text x="24" y="30" textAnchor="middle" fontSize="19" fontWeight="800" fill={fg} fontFamily="Segoe UI, Arial, sans-serif">{letter}</text>
    </svg>
  );
}

function Emblem({ k }: { k: string }) {
  switch (k) {
    case "html":
      return <Shield fill="#f16529" letter="5" fg="#fff" />;
    case "css":
      return <Shield fill="#1572b6" letter="3" fg="#fff" />;
    case "ng":
      return <Shield fill="#dd0031" letter="A" fg="#fff" />;
    case "js":
      return (
        <svg viewBox="0 0 48 48">
          <text x="43" y="42" textAnchor="end" fontSize="21" fontWeight="800" fill="#23272f" fontFamily="Segoe UI, Arial, sans-serif">JS</text>
        </svg>
      );
    case "ts":
      return (
        <svg viewBox="0 0 48 48">
          <text x="43" y="42" textAnchor="end" fontSize="21" fontWeight="800" fill="#fff" fontFamily="Segoe UI, Arial, sans-serif">TS</text>
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 48 48">
          <g fill="none" stroke="#61dafb" strokeWidth="2.2">
            <ellipse cx="24" cy="24" rx="21" ry="8" />
            <ellipse cx="24" cy="24" rx="21" ry="8" transform="rotate(60 24 24)" />
            <ellipse cx="24" cy="24" rx="21" ry="8" transform="rotate(120 24 24)" />
          </g>
          <circle cx="24" cy="24" r="3.8" fill="#61dafb" />
        </svg>
      );
    case "vue":
      return (
        <svg viewBox="0 0 48 48">
          <path d="M6 11 L24 41 L42 11 L34 11 L24 28 L14 11 Z" fill="#41b883" />
          <path d="M14 11 L24 28 L34 11 L28 11 L24 18 L20 11 Z" fill="#35495e" />
        </svg>
      );
    case "node":
      return (
        <svg viewBox="0 0 48 48">
          <polygon points="24,4 41,13.5 41,33.5 24,43 7,33.5 7,13.5" fill="#83cd29" />
          <text x="24" y="27.5" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#1c3a12" fontFamily="Segoe UI, Arial, sans-serif">node</text>
        </svg>
      );
    case "sass":
      return (
        <svg viewBox="0 0 48 48">
          <text x="24" y="30" textAnchor="middle" fontSize="16" fontStyle="italic" fontWeight="700" fill="#cd6799" fontFamily="Georgia, serif">Sass</text>
        </svg>
      );
    case "redux":
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="#764abc" strokeWidth="2.4" strokeLinecap="round">
          <path d="M15 34 a13 13 0 1 0 4 -22" />
          <circle cx="33" cy="13" r="3.6" fill="#764abc" stroke="none" />
          <circle cx="13" cy="35" r="3.6" fill="#764abc" stroke="none" />
        </svg>
      );
    case "git":
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="#f05032" strokeWidth="2.4">
          <line x1="15" y1="11" x2="15" y2="37" />
          <path d="M15 21 h11 a6 6 0 0 1 6 6 v2" />
          <circle cx="15" cy="11" r="3.8" fill="#f05032" stroke="none" />
          <circle cx="15" cy="37" r="3.8" fill="#f05032" stroke="none" />
          <circle cx="32" cy="33" r="3.8" fill="#f05032" stroke="none" />
        </svg>
      );
    case "graphql":
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="#e10098" strokeWidth="2.2">
          <polygon points="24,7 40,33 8,33" />
          <line x1="24" y1="7" x2="24" y2="25" />
          <line x1="24" y1="25" x2="40" y2="33" />
          <line x1="24" y1="25" x2="8" y2="33" />
          <circle cx="24" cy="7" r="3.2" fill="#e10098" stroke="none" />
          <circle cx="40" cy="33" r="3.2" fill="#e10098" stroke="none" />
          <circle cx="8" cy="33" r="3.2" fill="#e10098" stroke="none" />
          <circle cx="24" cy="25" r="3.2" fill="#e10098" stroke="none" />
        </svg>
      );
    case "npm":
      return (
        <svg viewBox="0 0 48 48">
          <text x="24" y="30" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff" fontFamily="Segoe UI, Arial, sans-serif">npm</text>
        </svg>
      );
    case "next":
      return (
        <svg viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="19" fill="none" stroke="#fff" strokeWidth="1.6" />
          <text x="24" y="31" textAnchor="middle" fontSize="20" fontWeight="800" fill="#fff" fontFamily="Georgia, serif">N</text>
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round">
          <path d="M9 24 c3 -7 7 -8 12 -4 c3 2.5 6 3 9 1 c-2.5 6 -6 8 -11 4 c-3 -2.4 -6 -3 -10 -1" fill="#38bdf8" stroke="none" opacity="0.9" />
          <path d="M9 33 c3 -7 7 -8 12 -4 c3 2.5 6 3 9 1 c-2.5 6 -6 8 -11 4 c-3 -2.4 -6 -3 -10 -1" fill="#38bdf8" stroke="none" opacity="0.55" />
        </svg>
      );
    case "terminal":
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="#4ade80" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="10" width="36" height="28" rx="4" stroke="#4ade80" />
          <path d="M13 19 l6 5 l-6 5" />
          <line x1="25" y1="30" x2="34" y2="30" />
        </svg>
      );
    case "braces":
      return (
        <svg viewBox="0 0 48 48">
          <text x="24" y="33" textAnchor="middle" fontSize="26" fontWeight="700" fill="#6366f1" fontFamily="Consolas, monospace">{"{ }"}</text>
        </svg>
      );
    case "database":
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="#2e9e4f" strokeWidth="2.3" strokeLinejoin="round">
          <ellipse cx="24" cy="12" rx="13" ry="5" />
          <path d="M11 12 v24 a13 5 0 0 0 26 0 v-24" />
          <path d="M11 24 a13 5 0 0 0 26 0" />
        </svg>
      );
    default:
      return null;
  }
}

const A = [
  ["react", "js", "ts"],
  ["html", "ng", "vue"],
  ["css", "sass", "node"],
];
const B = [
  ["redux", "git", "graphql"],
  ["npm", "next", "tailwind"],
  ["terminal", "braces", "database"],
];
const ci = (v: number) => v + 1;
function keyFor(face: string, x: number, y: number, z: number): string {
  if (face === "ff") return A[ci(y)][ci(x)];
  if (face === "fb") return B[ci(y)][ci(-x)];
  if (face === "fr") return A[ci(y)][ci(-z)];
  if (face === "fl") return B[ci(y)][ci(z)];
  if (face === "fu") return A[ci(z)][ci(x)];
  return B[ci(-z)][ci(x)];
}
const FACES = ["fr", "fl", "fu", "fd", "ff", "fb"];

export default function CubeHero() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current!;
    const els = Array.from(wrap.querySelectorAll<HTMLDivElement>(".cubie"));
    const cubies: Cubie[] = [];
    for (let x = -1; x <= 1; x++)
      for (let y = -1; y <= 1; y++)
        for (let z = -1; z <= 1; z++) cubies.push({ pos: [x, y, z], spin: "" });

    const ai = (a: "x" | "y" | "z") => (a === "x" ? 0 : a === "y" ? 1 : 2);
    const paint = (live?: { move: Move; ang: number }) => {
      cubies.forEach((cb, k) => {
        const inLayer = live && cb.pos[ai(live.move.axis)] === live.move.layer;
        const lead = inLayer ? `rotate${live!.move.axis.toUpperCase()}(${live!.ang}deg) ` : "";
        els[k].style.transform =
          `${lead}translate3d(${cb.pos[0] * STEP}px, ${cb.pos[1] * STEP}px, ${cb.pos[2] * STEP}px) ${cb.spin}`;
      });
    };
    paint();

    let animating = false;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rot = (p: Vec, axis: "x" | "y" | "z", dir: number): Vec => {
      const [x, y, z] = p;
      if (axis === "x") return dir > 0 ? [x, -z, y] : [x, z, -y];
      if (axis === "y") return dir > 0 ? [z, y, -x] : [-z, y, x];
      return dir > 0 ? [-y, x, z] : [y, -x, z];
    };

    function runMove(m: Move, done: () => void) {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / DUR, 1);
        const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        paint({ move: m, ang: eased * m.dir * 90 });
        if (t < 1) requestAnimationFrame(tick);
        else {
          cubies.forEach((cb) => {
            if (cb.pos[ai(m.axis)] === m.layer) {
              cb.pos = rot(cb.pos, m.axis, m.dir);
              cb.spin = `rotate${m.axis.toUpperCase()}(${m.dir * 90}deg) ${cb.spin}`;
            }
          });
          paint();
          done();
        }
      };
      requestAnimationFrame(tick);
    }

    function play() {
      if (animating || reduce) return;
      animating = true;
      let idx = 0;
      const next = () => {
        if (idx >= SEQ.length) {
          animating = false;
          return;
        }
        runMove(SEQ[idx++], next);
      };
      next();
    }

    wrap.addEventListener("mouseenter", play);
    return () => wrap.removeEventListener("mouseenter", play);
  }, []);

  const cubies = [];
  for (let x = -1; x <= 1; x++)
    for (let y = -1; y <= 1; y++)
      for (let z = -1; z <= 1; z++) {
        cubies.push(
          <div className="cubie" key={`${x}${y}${z}`}>
            {FACES.map((f) => {
              const k = keyFor(f, x, y, z);
              return (
                <div className={`f ${f}`} key={f} style={{ background: BG[k] }}>
                  <Emblem k={k} />
                </div>
              );
            })}
          </div>
        );
      }

  return (
    <div className="cube-hero">
      <div className="rubik-scene" ref={wrapRef}>
        <div className="rubik">{cubies}</div>
      </div>
    </div>
  );
}
