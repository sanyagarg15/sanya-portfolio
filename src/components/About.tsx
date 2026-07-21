import { profile } from "../data/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about">
      <Reveal>
        <div className="section-head">
          <span className="num">/</span>
          <h2>about me</h2>
        </div>
      </Reveal>

      <div className="about-grid">
        <Reveal className="about-text" delay={0.1}>
          <p>
            I&apos;m currently a GenAI Engineer &amp; Frontend Developer at{" "}
            <a href="https://www.zensar.com" target="_blank" rel="noreferrer">
              Zensar Technologies
            </a>
            . Over 3+ years I&apos;ve worked across GenAI and frontend, building fast, thoughtful
            interfaces that feel effortless to use.
          </p>
          <p>Here are some technologies I&apos;ve been working with:</p>
          <ul className="tech-list">
            {profile.skillsInline.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className="about-outro">{profile.aboutOutro}</p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="about-photo">
         
            <img className="photo" src="/profile.jpg" alt="Sanya Garg" loading="lazy" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
