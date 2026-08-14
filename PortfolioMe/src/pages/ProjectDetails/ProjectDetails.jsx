import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../../data/projects';
import './ProjectDetails.css';

function ProjectDetails(){
  const {id}=useParams();

  const project=projects.find(
    item=>item.id===id
  );

  if(!project){
    return(
      <main className="project-details-page">
        <div className="container project-not-found">
          <h1>Project not found.</h1>
          <Link to="/projects">
            <ArrowLeft size={18}/>
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return(
    <main className="project-details-page">

      <section className="project-details-hero section">

        <div className="container">

          <span className="section-label">
            {project.category}
          </span>

          <h1>
            {project.title}
          </h1>

          <p>
            {project.description}
          </p>

        </div>

      </section>

    </main>
  );
}

export default ProjectDetails;