import React from 'react';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <main>
        <HeroSection />
        <div id="projects">
          <ProjectsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;