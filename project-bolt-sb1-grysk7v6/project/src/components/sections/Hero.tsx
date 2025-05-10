import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronDown } from 'lucide-react';

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
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            K Shashi Preetham
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl text-neutral-700 mb-8">
              Data Science & Business Analytics Professional
            </h2>
            
            <p className="text-lg text-neutral-600 mb-10 max-w-2xl mx-auto">
              Transforming data into actionable insights through machine learning models, 
              powerful visualizations, and strategic analysis.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={handleExploreClick}
                className="btn btn-primary px-8 py-3"
              >
                Explore Portfolio
              </button>
              <a 
                href="#contact" 
                className="btn btn-outline px-8 py-3"
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