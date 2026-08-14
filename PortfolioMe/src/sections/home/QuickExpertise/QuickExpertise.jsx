import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { expertise } from '../../../data/skillsData';
import './QuickExpertise.css';

function QuickExpertise(){
  return(
    <section className="quick-expertise section">

      <div className="container">

        <motion.div
          className="quick-expertise-header"
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true,amount:.2}}
          transition={{duration:.7}}
        >

          <div>

            <span className="section-label">
              Expertise
            </span>

            <h2 className="quick-expertise-title">
              More than
              <span className="text-gradient">
                {' '}just code.
              </span>
            </h2>

          </div>

          <Link
            to="/skills"
            className="quick-expertise-link"
          >
            Explore Skills
            <ArrowUpRight size={18}/>
          </Link>

        </motion.div>

        <div className="expertise-list">

          {expertise.map((item,index)=>(
            <motion.article
              key={item.id}
              className="expertise-item"
              initial={{opacity:0,y:30}}
              whileInView={{opacity:1,y:0}}
              viewport={{
                once:true,
                amount:.15
              }}
              transition={{
                duration:.6,
                delay:index*.1
              }}
            >

              <div className="expertise-number">
                {item.number}
              </div>

              <div className="expertise-main">

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

              <div className="expertise-technologies">

                {item.technologies.map(technology=>(
                  <span key={technology}>
                    {technology}
                  </span>
                ))}

              </div>

              <div className="expertise-arrow">
                <ArrowRight size={20}/>
              </div>

            </motion.article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default QuickExpertise;