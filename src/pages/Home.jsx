import ProfileHeader from '../components/ProfileHeader';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import AutomationDemo from '../components/AutomationDemo';
import '../App.css';


const Home = () => {
  return (
      <div id="home">
        {/* Intro of me */}
        <ProfileHeader />

        <Skills />

        {/* Displaying project list */}
        <section id="projects">
          <Projects />
        </section>

        {/* n8n automation demo */}
        <AutomationDemo />
      </div>
  );
}

export default Home;