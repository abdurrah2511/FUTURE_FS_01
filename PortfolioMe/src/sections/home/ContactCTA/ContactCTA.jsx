import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ContactCTA.css';

function ContactCTA(){
  return(
    <section className="contact-cta section">

      <div className="container">

        <motion.div
          className="contact-cta-card"
          initial={{opacity:0,scale:.96}}
          whileInView={{opacity:1,scale:1}}
          viewport={{
            once:true,
            amount:.2
          }}
          transition={{
            duration:.8,
            ease:[.16,1,.3,1]
          }}
        >

          <div className="contact-cta-glow contact-cta-glow-one"/>
          <div className="contact-cta-glow contact-cta-glow-two"/>

          <div className="contact-cta-content">

            <span className="section-label">
              Let's Work Together
            </span>

            <h2>
              Have an idea?
              <br/>
              <span>
                Let's build something.
              </span>
            </h2>

            <p>
              Whether it's a website, digital product,
              creative experience or something completely
              new, I'm always interested in building
              meaningful things.
            </p>

            <Link
              to="/contact"
              className="contact-cta-button"
            >
              Let's Talk
              <ArrowUpRight size={20}/>
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default ContactCTA;