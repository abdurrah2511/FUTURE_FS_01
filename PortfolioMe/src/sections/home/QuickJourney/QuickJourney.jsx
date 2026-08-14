import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { journey } from '../../../data/aboutData';
import './QuickJourney.css';

function QuickJourney(){
  const journeyPreview=journey.slice(-4);

  return(
    <section className="quick-journey section">

      <div className="container">

        <motion.div
          className="quick-journey-header"
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true,amount:.2}}
          transition={{duration:.7}}
        >

          <div>

            <span className="section-label">
              My Journey
            </span>

            <h2 className="quick-journey-title">
              From learning
              <span className="text-gradient">
                {' '}to building.
              </span>
            </h2>

          </div>

          <Link
            to="/journey"
            className="quick-journey-link"
          >
            View Full Journey
            <ArrowUpRight size={18}/>
          </Link>

        </motion.div>

        <div className="quick-journey-timeline">

          {journeyPreview.map((item,index)=>(
            <motion.article
              key={`${item.year}-${index}`}
              className="quick-journey-item"
              initial={{
                opacity:0,
                y:30
              }}
              whileInView={{
                opacity:1,
                y:0
              }}
              viewport={{
                once:true,
                amount:.15
              }}
              transition={{
                duration:.6,
                delay:index*.12
              }}
            >

              <div className="quick-journey-marker">

                <span/>

              </div>

              <div className="quick-journey-year">
                {item.year}
              </div>

              <div className="quick-journey-content">

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

              <ArrowRight
                className="quick-journey-arrow"
                size={20}
              />

            </motion.article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default QuickJourney;