import { profile } from "../data/content";
import { GitHubIcon, LinkedInIcon, MailIcon, MediumIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <Reveal>
          <div className="num">/ what's next</div>
          <h2>say hi!</h2>
          <p>
            I'm on the lookout for frontend and full-stack roles where performance and craft
            actually matter. Whether you've got a role in mind or just want to nerd out about React
            and load times, my inbox is always open — I'll do my best to write back.
          </p>
          <a className="cta" href={`mailto:${profile.email}`}>
            say hello
          </a>
        </Reveal>
      </section>

      <footer>
        <div className="footer-social">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon size={18} />
          </a>
          <a href={profile.medium} target="_blank" rel="noreferrer" aria-label="Medium">
            <MediumIcon size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <MailIcon size={18} />
          </a>
        </div>
        Designed &amp; built by {profile.name} · {new Date().getFullYear()}
      </footer>
    </>
  );
}
