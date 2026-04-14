import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

/**
 * Main Application component
 * Integrates Hero, Skills, and Projects sections
 */
function App() {
  return (
    <div className="portfolio-wrapper">
      <header>
        {/* Navigation could be added here later */}
      </header>

      <main>
        {/* Intro with focus on Fullstack, Node.js, React and React Native */}
        <ProfileHeader />

        {/* Technical Arsenal (Skills) */}
        <Skills />

        {/* Displaying CountEverything and SpaceRadar */}
        <section id="projects">
          <Projects />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;