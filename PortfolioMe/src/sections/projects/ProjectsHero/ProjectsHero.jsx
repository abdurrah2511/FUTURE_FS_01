import { motion } from 'framer-motion';
import './ProjectsHero.css';

function ProjectsHero(){
  return(
    <section className="projects-hero section">

      <div className="projects-hero-background">
        <div className="projects-hero-orb projects-hero-orb-one"/>
        <div className="projects-hero-orb projects-hero-orb-two"/>
      </div>

      <div className="container">

        <motion.div
          className="projects-hero-content"
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{
            duration:.8,
            ease:[.22,1,.36,1]
          }}
        >

          <span className="section-label">
            Selected Work
          </span>

          <h1 className="projects-hero-title">
            Things I've
            <span className="text-gradient">
              {' '}built.
            </span>
          </h1>

          <p className="projects-hero-description">
            A collection of applications, experiments and digital
            experiences I've designed and developed.
          </p>

        </motion.div>

      </div>

    </section>
  );
}

export default ProjectsHero;