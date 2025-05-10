import React, { useState, useEffect } from 'react';
import { Menu, X, Database, BrainCircuit } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (section: string) => {
    onSectionChange(section);
    setIsMenuOpen(false);
    
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container-custom py-4 flex items-center justify-between">
        <div className="flex items-center">
          <BrainCircuit size={28} className="text-primary-600 mr-2" />
          <span className="text-xl font-semibold text-neutral-900">K Shashi Preetham</span>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleSectionClick(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                    activeSection === item.id ? 'text-primary-600' : 'text-neutral-700'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <button 
          className="md:hidden text-neutral-700 hover:text-neutral-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="container-custom py-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleSectionClick(item.id)}
                    className={`text-base font-medium transition-colors hover:text-primary-600 ${
                      activeSection === item.id ? 'text-primary-600' : 'text-neutral-700'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;