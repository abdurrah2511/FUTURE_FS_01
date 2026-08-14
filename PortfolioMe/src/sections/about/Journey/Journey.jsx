import { motion } from 'framer-motion';
import {
  GraduationCap,
  BriefcaseBusiness,
  Code2
} from 'lucide-react';
import { aboutData } from '../../../data/aboutData';
import { staggerContainer, fadeUp } from '../../../lib/animations';
import './Journey.css';

const icons={
  Education:GraduationCap,
  Development:Code2,
  Experience:BriefcaseBusiness,
  Current:Code2
};

function Journey(){
  return(
    <section className="journey section">
      <div className="container">

        <motion.div
          className="section-header journey-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true,amount:.2}}
        >
          <span className="section-label">
            My Journey
          </span>

          <h2 className="section-title">
            From learning
            <span className="text-gradient">
              {' '}to building.
            </span>
          </h2>

          <p className="section-description">
            A look at the experiences and milestones that have
            shaped the way I approach technology and design.
          </p>
        </motion.div>

        <motion.div
          className="journey-timeline"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true,amount:.1}}
        >

          <div className="journey-line"/>

          {aboutData.journey.map((item,index)=>{
            const Icon=icons[item.type];

            return(
              <motion.article
                className={`journey-item ${index%2===0?'journey-item-left':'journey-item-right'}`}
                key={item.id}
                variants={fadeUp}
              >

                <div className="journey-dot">
                  <Icon size={18}/>
                </div>

                <div className="journey-card">

                  <span className="journey-year">
                    {item.year}
                  </span>

                  <span className="journey-type">
                    {item.type}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

              </motion.article>
            );
          })}

        </motion.div>

      </div>
    </section>
  );
}

export default Journey;