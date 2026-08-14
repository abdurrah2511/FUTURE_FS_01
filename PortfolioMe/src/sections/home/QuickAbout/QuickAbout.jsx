import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteData } from '../../../data/siteData';
import './QuickAbout.css';

function QuickAbout(){
  return(
    <section className="quick-about section">

      <div className="container">

        <motion.div
          className="quick-about-header"
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true,amount:.2}}
          transition={{duration:.7}}
        >

          <span className="section-label">
            About Me
          </span>

          <h2 className="quick-about-title">
            I turn ideas into
            <span className="text-gradient">
              {' '}digital experiences.
            </span>
          </h2>

        </motion.div>

        <div className="quick-about-content">

          <motion.div
            className="quick-about-statement"
            initial={{opacity:0,x:-40}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true,amount:.2}}
            transition={{
              duration:.7,
              delay:.1
            }}
          >

            <p>
              I'm {siteData.name}, a{' '}
              <strong>
                full-stack web developer
              </strong>{' '}
              and{' '}
              <strong>
                UI/UX designer
              </strong>{' '}
              who enjoys building products from idea to interface
              to implementation.
            </p>

          </motion.div>

          <motion.div
            className="quick-about-details"
            initial={{opacity:0,x:40}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true,amount:.2}}
            transition={{
              duration:.7,
              delay:.2
            }}
          >

            <p>
              My work combines frontend development, backend
              systems, interface design and increasingly,
              interactive 3D experiences.
            </p>

            <Link
              to="/about"
              className="quick-about-link"
            >
              Explore About
              <ArrowUpRight size={18}/>
            </Link>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default QuickAbout;