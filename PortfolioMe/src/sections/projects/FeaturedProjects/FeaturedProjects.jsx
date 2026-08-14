import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../../../data/projects';
import './FeaturedProjects.css';

function FeaturedProjects(){
  const featuredProjects=projects.filter(
    project=>project.featured
  );

  return(
    <section className="featured-projects section">

      <div className="container">

        <div className="section-header">
          <span className="section-label">
            Featured Projects
          </span>

          <h2 className="section-title">
            Selected
            <span className="text-gradient">
              {' '}work.
            </span>
          </h2>
        </div>

        <div className="featured-projects-list">

          {featuredProjects.map((project,index)=>(
            <motion.article
              className="featured-project"
              key={project.id}
              initial={{
                opacity:0,
                y:60
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
                delay:index*.1
              }}
            >

              <div className="featured-project-image">
                <div className="project-placeholder">
                  <span>{project.title}</span>
                </div>
              </div>

              <div className="featured-project-content">

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
                  Explore Project
                  <ArrowUpRight size={18}/>
                </Link>

              </div>

            </motion.article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedProjects;