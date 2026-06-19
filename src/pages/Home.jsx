import ProfileHeader from '../components/ProfileHeader';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import AutomationDemo from '../components/AutomationDemo';
import InvoiceDemo from '../components/InvoiceDemo';
import '../App.css';


const Home = () => {
  return (
      <div id="home">
        {/* Intro of me */}
        <ProfileHeader />

        {/* Displaying project list */}
        <section id="projects">
          <Projects />
        </section>

        {/* n8n automation demo */}
        <AutomationDemo />

        {/* PDF invoice extraction demo */}
        <InvoiceDemo />

        <Skills />
      </div>
  );
}

export default Home;