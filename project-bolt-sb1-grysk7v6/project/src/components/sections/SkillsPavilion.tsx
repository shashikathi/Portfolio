import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, PieChart, LineChart, BrainCircuit, Palette } from 'lucide-react';

interface SkillsPavilionProps {
  id: string;
  onVisible: () => void;
}

const SkillsPavilion: React.FC<SkillsPavilionProps> = ({ id, onVisible }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      onVisible();
    }
  }, [isInView, onVisible]);

  const skillCategories = [
    {
      name: "Programming",
      icon: <Code size={24} className="text-primary-600" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "R", level: 80 },
        { name: "SQL", level: 85 },
        { name: "JavaScript", level: 75 }
      ]
    },
    {
      name: "Data Management",
      icon: <Database size={24} className="text-primary-600" />,
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "Data Warehousing", level: 80 },
        { name: "ETL Processes", level: 85 }
      ]
    },
    {
      name: "Machine Learning",
      icon: <BrainCircuit size={24} className="text-primary-600" />,
      skills: [
        { name: "PyTorch", level: 80 },
        { name: "scikit-learn", level: 90 },
        { name: "TensorFlow", level: 75 },
        { name: "Natural Language Processing", level: 80 }
      ]
    },
    {
      name: "Data Visualization",
      icon: <PieChart size={24} className="text-primary-600" />,
      skills: [
        { name: "Power BI", level: 95 },
        { name: "Tableau", level: 90 },
        { name: "Matplotlib", level: 85 },
        { name: "D3.js", level: 70 }
      ]
    },
    {
      name: "Business Analysis",
      icon: <LineChart size={24} className="text-primary-600" />,
      skills: [
        { name: "Statistical Analysis", level: 85 },
        { name: "Forecasting", level: 80 },
        { name: "Market Research", level: 75 },
        { name: "KPI Development", level: 90 }
      ]
    },
    {
      name: "Cloud & Tools",
      icon: <Palette size={24} className="text-primary-600" />,
      skills: [
        { name: "AWS", level: 80 },
        { name: "Google Cloud", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Git", level: 85 }
      ]
    }
  ];

  return (
    <section id={id} ref={ref} className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Skills Pavilion</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical and analytical capabilities in data science and business analytics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel"
            >
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="mr-3">{category.icon}</div>
                  <h3 className="text-xl font-medium">{category.name}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-neutral-700">{skill.name}</span>
                        <span className="text-xs text-neutral-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-neutral-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.3 + idx * 0.1 }}
                          className="h-2 rounded-full bg-primary-600"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPavilion;