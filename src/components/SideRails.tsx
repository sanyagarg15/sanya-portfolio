import { motion } from "framer-motion";
import { profile } from "../data/content";
import { GitHubIcon, LinkedInIcon, MediumIcon } from "./Icons";

const railTransition = { duration: 0.6, delay: 1.6, ease: [0.645, 0.045, 0.355, 1] as const };

export default function SideRails() {
  return (
    <>
      <motion.div
        className="rail rail-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={railTransition}
      >
        <div className="rail-social">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={profile.medium} target="_blank" rel="noreferrer" aria-label="Medium">
            <MediumIcon />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="rail rail-right"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={railTransition}
      >
        <a className="rail-email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </motion.div>
    </>
  );
}
