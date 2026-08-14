import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../../../data/projects';
import './FeaturedProjects.css';

function FeaturedProjects(){

  const featuredProjects=projects
    .filter(project=>project.featured)
    .slice(0,3);

  return(
    <section className="featured-projects section">

      <div className="container">

        <motion.div
          className="featured-projects-header"
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true,amount:.2}}
          transition={{duration:.7}}
        >

          <div>

            <span className="section-label">
              Selected Work
            </span>

            <h2 className="featured-projects-title">
              Things I've
              <span className="text-gradient">
                {' '}built.
              </span>
            </h2>

          </div>

          <Link
            to="/projects"
            className="featured-projects-all"
          >
            View All Projects
            <ArrowUpRight size={18}/>
          </Link>

        </motion.div>

        <div className="featured-projects-grid">

          {featuredProjects.map((project,index)=>(
            <motion.article
              key={project.id}
              className={`featured-project-card featured-project-card-${index+1}`}
              initial={{
                opacity:0,
                y:40
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
                duration:.7,
                delay:index*.12
              }}
            >

              <Link
                to={`/projects/${project.id}`}
                className="featured-project-image"
              >

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />

                <span className="featured-project-arrow">
                  <ArrowUpRight size={20}/>
                </span>

              </Link>

              <div className="featured-project-info">

                <div className="featured-project-meta">

                  <span>
                    {project.category}
                  </span>

                  <span>
                    {String(index+1).padStart(2,'0')}
                  </span>

                </div>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="featured-project-tech">

                  {project.technologies
                    .slice(0,4)
                    .map(technology=>(
                      <span key={technology}>
                        {technology}
                      </span>
                    ))
                  }

                </div>

              </div>

            </motion.article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedProjects;