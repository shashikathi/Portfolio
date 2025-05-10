import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="container-custom py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">K Shashi Preetham</h3>
            <p className="text-neutral-600 mb-4">
              Data Science & Business Analytics Professional
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/shashikathi" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-primary-600 transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/shashikathi/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-primary-600 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:shashikathi56@gmail.com" className="text-neutral-600 hover:text-primary-600 transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-600 hover:text-primary-600 transition-colors">Home</a></li>
              <li><a href="#experience" className="text-neutral-600 hover:text-primary-600 transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-neutral-600 hover:text-primary-600 transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-neutral-600 hover:text-primary-600 transition-colors">Skills</a></li>
              <li><a href="#certifications" className="text-neutral-600 hover:text-primary-600 transition-colors">Certifications</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-neutral-600 mb-2">Feel free to get in touch for opportunities or collaboration.</p>
            <a href="mailto:shashikathi56@gmail.com" className="text-primary-600 hover:text-primary-700 transition-colors block mb-2">
              shashikathi56@gmail.com
            </a>
            <a href="tel:+919966034362" className="text-primary-600 hover:text-primary-700 transition-colors">
              +91 9966034362
            </a>
          </div>
        </div>
        
        <div className="border-t border-neutral-200 mt-8 pt-8 text-center text-neutral-600">
          <p>&copy; {currentYear} K Shashi Preetham. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;