import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronDown, FileText } from 'lucide-react';

interface HeroProps {
  onSectionChange: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSectionChange }) => {
  const handleExploreClick = () => {
    onSectionChange('experience');
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 pt-32">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-white/30 pointer-events-none" />
      <div className="container-custom text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="mb-8">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-4">
              Data Science & Analytics Professional
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600">
            K Shashi Preetham
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl text-neutral-700 mb-8">
              Transforming Data into Actionable Insights
            </h2>
            
            <p className="text-lg text-neutral-600 mb-10 max-w-2xl mx-auto">
              Specializing in machine learning models, powerful visualizations, 
              and strategic analysis to drive data-informed decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://drive.google.com/file/d/1hc2-PXwPZftLdPEUMfO3Dh2Jq8DiOOsK/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-8 py-3 group"
              >
                <FileText className="w-5 h-5 mr-2 transition-transform group-hover:-translate-y-0.5" />
                Download Resume
              </a>
              <button 
                onClick={handleExploreClick}
                className="btn btn-outline px-8 py-3 hover:bg-primary-50"
              >
                Explore Portfolio
              </button>
              <a 
                href="#contact" 
                className="btn btn-outline px-8 py-3 hover:bg-primary-50"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={handleExploreClick}
            className="flex flex-col items-center text-neutral-600 hover:text-primary-600 transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown size={24} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;