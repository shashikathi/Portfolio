import React, { useState, useEffect, Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Loader from './components/ui/Loader';
import Hero from './components/sections/Hero';
import ExperienceAtrium from './components/sections/ExperienceAtrium';
import ProjectGallery from './components/sections/ProjectGallery';
import SkillsPavilion from './components/sections/SkillsPavilion';
import CertificationsWall from './components/sections/CertificationsWall';
import EducationTower from './components/sections/EducationTower';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import { PortfolioScene } from './components/3d/PortfolioScene';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // Simulate loading assets
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative min-h-screen">
      <div className="canvas-container">
        <Suspense fallback={null}>
          <PortfolioScene activeSection={activeSection} />
        </Suspense>
      </div>
      
      <div className="content-container">
        <Navbar activeSection={activeSection} onSectionChange={handleSectionChange} />
        
        <main>
          <Hero onSectionChange={handleSectionChange} />
          <ExperienceAtrium id="experience" onVisible={() => handleSectionChange('experience')} />
          <ProjectGallery id="projects" onVisible={() => handleSectionChange('projects')} />
          <SkillsPavilion id="skills" onVisible={() => handleSectionChange('skills')} />
          <CertificationsWall id="certifications" onVisible={() => handleSectionChange('certifications')} />
          <EducationTower id="education" onVisible={() => handleSectionChange('education')} />
          <Contact id="contact" onVisible={() => handleSectionChange('contact')} />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;