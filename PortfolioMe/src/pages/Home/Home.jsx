import Hero from '../../sections/home/Hero/Hero';
import QuickAbout from '../../sections/home/QuickAbout/QuickAbout';
import FeaturedProjects from '../../sections/home/FeaturedProjects/FeaturedProjects';
import QuickExpertise from '../../sections/home/QuickExpertise/QuickExpertise';
import QuickJourney from '../../sections/home/QuickJourney/QuickJourney';
import ContactCTA from '../../sections/home/ContactCTA/ContactCTA';
import './Home.css';

function Home(){
  return(
    <main className="home-page">
      <Hero/>
      <QuickAbout/>
      <FeaturedProjects/>
      <QuickExpertise/>
      <QuickJourney/>
      <ContactCTA/>
    </main>
  );
}

export default Home;