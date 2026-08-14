import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../../lib/animations';
import { aboutData } from '../../../data/aboutData';
import './AboutIntro.css';

function AboutIntro(){
  const {intro}=aboutData;

  return(
    <section className="about-intro section">
      <div className="container">

        <motion.div
          className="about-intro-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true,amount:.2}}
        >

          <motion.div
            className="about-intro-heading"
            variants={fadeUp}
          >
            <span className="section-label">
              {intro.label}
            </span>

            <h2 className="heading-lg">
              I build with
              <span className="text-gradient">
                {' '}curiosity.
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="about-intro-content"
            variants={fadeUp}
          >
            {intro.paragraphs.map((paragraph,index)=>(
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default AboutIntro;