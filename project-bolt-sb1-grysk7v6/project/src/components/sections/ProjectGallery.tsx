import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, ArrowUpRight, LineChart, BarChart, Database, Wine } from 'lucide-react';

interface ProjectGalleryProps {
  id: string;
  onVisible: () => void;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ id, onVisible }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      onVisible();
    }
  }, [isInView, onVisible]);

  const projects = [
    {
      title: "Wine Quality Prediction",
      description: "Machine learning model achieving 77.1% accuracy in predicting wine quality using Random Forest and Gradient Boosting with hyperparameter tuning. Implemented feature importance analysis and 5-fold cross-validation.",
      image: "https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tools: ["Python", "Scikit-learn", "Random Forest", "Gradient Boosting"],
      icon: <Wine className="w-5 h-5" />,
      link: "https://github.com/shashikathi/Wine-Quality-Prediction"
    },
    {
      title: "Cryptocurrency Dashboard",
      description: "Interactive dashboard analyzing historical cryptocurrency prices with advanced visualizations and trend analysis. Features real-time data integration and predictive analytics.",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tools: ["Python", "Data Visualization", "Time Series Analysis"],
      icon: <LineChart className="w-5 h-5" />,
      link: "https://github.com/shashikathi/Cryptocurrency_Dashboard"
    },
    {
      title: "Poll-based Web Application",
      description: "Full-stack web application for creating and managing polls with real-time analytics and visualization of voting patterns and user engagement metrics.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tools: ["Python", "Data Analysis", "Web Development"],
      icon: <Database className="w-5 h-5" />,
      link: "https://github.com/shashikathi/Poll-based-Web-Application"
    },
    {
      title: "Superstore Analytics",
      description: "Comprehensive analysis of superstore sales data with interactive dashboards, predictive modeling, and business intelligence insights for strategic decision-making.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tools: ["Data Analysis", "Business Intelligence", "Visualization"],
      icon: <BarChart className="w-5 h-5" />,
      link: "https://github.com/shashikathi/Superstore_Analytics"
    }
  ];

  return (
    <section id={id} ref={ref} className="py-20 bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Data Analysis Portfolio</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            A collection of data analysis projects showcasing expertise in machine learning, visualization, and business intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-panel overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                  <span className="text-primary-600">{project.icon}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2 flex items-center">
                  {project.title}
                </h3>
                <p className="text-neutral-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors text-sm font-medium"
                >
                  View Project
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;