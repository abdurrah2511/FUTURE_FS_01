import { motion } from 'framer-motion';
import {
  Code2,
  Palette,
  Database,
  Boxes
} from 'lucide-react';
import { aboutData } from '../../../data/aboutData';
import './Expertise.css';

const icons={
  frontend:Code2,
  backend:Database,
  uiux:Palette,
  creative:Boxes
};

function Expertise(){
  return(
    <section className="expertise section">
      <div className="container">

        <div className="section-header">
          <span className="section-label">
            Expertise
          </span>

          <h2 className="section-title">
            What I
            <span className="text-gradient">
              {' '}work with.
            </span>
          </h2>

          <p className="section-description">
            A combination of engineering, design and creative
            technologies that lets me work across the entire
            product experience.
          </p>
        </div>

        <div className="expertise-grid">
          {aboutData.expertise.map((item,index)=>{
            const Icon=icons[item.id];

            return(
              <motion.article
                className="expertise-card"
                key={item.id}
                initial={{opacity:0,y:40}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true,amount:.2}}
                transition={{
                  duration:.6,
                  delay:index*.08
                }}
                whileHover={{y:-8}}
              >

                <div className="expertise-icon">
                  <Icon size={24}/>
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="expertise-tags">
                  {item.technologies.map(technology=>(
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Expertise;