import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroScene from './HeroScene';
import './Hero.css';

const containerVariants={
  hidden:{opacity:0},
  visible:{
    opacity:1,
    transition:{
      staggerChildren:.12,
      delayChildren:.2
    }
  }
};

const itemVariants={
  hidden:{opacity:0,y:30},
  visible:{
    opacity:1,
    y:0,
    transition:{
      duration:.7,
      ease:[.22,1,.36,1]
    }
  }
};

function Hero(){
  return(
    <section className="hero section">

      <div className="hero-background">
        <div className="hero-orb hero-orb-one"/>
        <div className="hero-orb hero-orb-two"/>
        <div className="hero-grid"/>
      </div>

      <div className="container">
        <div className="hero-content">

          <motion.div
            className="hero-copy"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >

            <motion.span
              className="hero-eyebrow"
              variants={itemVariants}
            >
              Full-Stack Developer
              <span>✦</span>
              UI/UX Designer
            </motion.span>

            <motion.h1
              className="hero-title"
              variants={itemVariants}
            >
              Building
              <span className="text-gradient"> digital </span>
              experiences.
            </motion.h1>

            <motion.p
              className="hero-description"
              variants={itemVariants}
            >
              I design and develop modern web applications that combine
              thoughtful user experiences with powerful full-stack
              technology.
            </motion.p>

            <motion.div
              className="hero-actions"
              variants={itemVariants}
            >
              <Link
                to="/projects"
                className="button button-primary"
              >
                Explore My Work
                <ArrowRight size={18}/>
              </Link>

              <Link
                to="/contact"
                className="button button-secondary"
              >
                Let's Connect
              </Link>
            </motion.div>

          </motion.div>

          <motion.div
            className="hero-scroll"
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1.5}}
          >
            <span>Scroll to explore</span>
            <motion.div
              animate={{y:[0,6,0]}}
              transition={{
                duration:1.5,
                repeat:Infinity,
                ease:'easeInOut'
              }}
            >
              <ArrowDown size={16}/>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{opacity:0,scale:.85}}
            animate={{opacity:1,scale:1}}
            transition={{
              duration:1.2,
              delay:.35,
              ease:[.22,1,.36,1]
            }}
          >
            <HeroScene/>

            <div className="hero-floating-card hero-floating-card-one">
              <span className="floating-icon">⚡</span>
              <div>
                <strong>Full Stack</strong>
                <small>MERN · REST · APIs</small>
              </div>
            </div>

            <div className="hero-floating-card hero-floating-card-two">
              <span className="floating-icon">✦</span>
              <div>
                <strong>Creative UI</strong>
                <small>Design · Motion · 3D</small>
              </div>
            </div>

          </motion.div>

        </div>
      </div>

    </section>
  );
}

export default Hero;