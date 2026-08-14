import AboutHero from '../../sections/about/AboutHero/AboutHero';
import AboutIntro from '../../sections/about/AboutIntro/AboutIntro';
import Expertise from '../../sections/about/Expertise/Expertise';
import Journey from '../../sections/about/Journey/Journey';
import './About.css';

function About(){
  return(
    <main className="about-page">
      <AboutHero/>
      <AboutIntro/>
      <Expertise/>
      <Journey/>
    </main>
  );
}

export default About;