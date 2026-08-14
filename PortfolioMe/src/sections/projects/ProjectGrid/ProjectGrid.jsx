import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../../../data/projects';
import './ProjectGrid.css';

function ProjectGrid(){
  const otherProjects=projects.filter(
    project=>!project.featured
  );

  return(
    <section className="project-grid-section section">
      <div className="container">

        <div className="section-header">
          <span className="section-label">
            More Work
          </span>

          <h2 className="section-title">
            More things
            <span className="text-gradient">
              {' '}I've built.
            </span>
          </h2>
        </div>

        {otherProjects.length>0 ? (
          <div className="project-grid">
            {otherProjects.map((project,index)=>(
              <motion.article
                className="project-grid-card"
                key={project.id}
                initial={{opacity:0,y:35}}
                whileInView={{opacity:1,y:0}}
                viewport={{
                  once:true,
                  amount:.15
                }}
                transition={{
                  duration:.6,
                  delay:index*.08
                }}
                whileHover={{y:-8}}
              >

                <div className="project-grid-image">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                  />
                </div>

                <div className="project-grid-content">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <div className="project-tech">
                    {project.technologies.map(technology=>(
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/projects/${project.id}`}
                    className="project-link"
                  >
                    View Project
                    <ArrowUpRight size={18}/>
                  </Link>

                </div>

              </motion.article>
            ))}
          </div>
        ):(
          <div className="project-grid-empty">
            <p>
              More projects are currently being prepared.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default ProjectGrid;