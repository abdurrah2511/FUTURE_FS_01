import ProjectsHero from '../../sections/projects/ProjectsHero/ProjectsHero';
import FeaturedProjects from '../../sections/projects/FeaturedProjects/FeaturedProjects';
import ProjectGrid from '../../sections/projects/ProjectGrid/ProjectGrid';
import './Projects.css';

function Projects(){
  return(
    <main className="projects-page">
      <ProjectsHero/>
      <FeaturedProjects/>
      <ProjectGrid/>
    </main>
  );
}

export default Projects;