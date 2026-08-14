import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import './AboutHero.css';

function AboutHero(){
  return(
    <section className="about-hero section">

      <div className="about-hero-background">
        <div className="about-hero-orb about-hero-orb-one"/>
        <div className="about-hero-orb about-hero-orb-two"/>
      </div>

      <div className="container">
        <motion.div
          className="about-hero-content"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:.8}}
        >

          <motion.span
            className="section-label"
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{delay:.1,duration:.6}}
          >
            About Me
          </motion.span>

          <motion.h1
            className="about-hero-title"
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{
              delay:.2,
              duration:.8,
              ease:[.22,1,.36,1]
            }}
          >
            Developer by logic.
            <br/>
            <span className="text-gradient">
              Designer by instinct.
            </span>
          </motion.h1>

          <motion.p
            className="about-hero-description"
            initial={{opacity:0,y:30}}
            animate={{opacity:1,y:0}}
            transition={{
              delay:.4,
              duration:.7
            }}
          >
            I enjoy turning ideas into digital products that are
            functional, expressive and enjoyable to use.
          </motion.p>

        </motion.div>
      </div>

      <motion.div
        className="about-hero-scroll"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1}}
      >
        <ArrowDown size={18}/>
      </motion.div>

    </section>
  );
}

export default AboutHero;