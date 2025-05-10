import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award, Book } from 'lucide-react';

interface EducationTowerProps {
  id: string;
  onVisible: () => void;
}

const EducationTower: React.FC<EducationTowerProps> = ({ id, onVisible }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      onVisible();
    }
  }, [isInView, onVisible]);

  const education = [
    {
      degree: "B.Tech Hons. CSE in Data Science and Data Engineering",
      institution: "Lovely Professional University Punjab",
      period: "2021 - Present",
      description: "Pursuing specialization in Data Science and Data Engineering with focus on machine learning and analytics.",
      achievements: [
        "Academic Excellence",
        "Data Science Projects",
        "Research Publications"
      ],
      icon: <GraduationCap size={24} />
    },
    {
      degree: "Higher Secondary Education",
      institution: "Narayana IIT ACADEMY-Raviryala",
      period: "2019 - 2021",
      description: "Completed higher secondary education with focus on science and mathematics.",
      achievements: [
        "Strong foundation in Mathematics",
        "Science Olympiad participation",
        "Academic Excellence"
      ],
      icon: <Book size={24} />
    },
    {
      degree: "Secondary Education",
      institution: "Tejaswi high school, Warangal, Telangana",
      period: "2016 - 2019",
      description: "Completed secondary education with CGPA of 8.5 in Science stream.",
      achievements: [
        "CGPA: 8.5",
        "Science specialization",
        "Academic Merit"
      ],
      icon: <Book size={24} />
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
          <h2 className="section-heading">Education Tower</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Academic background and educational achievements that form the foundation of my expertise.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-neutral-200 hidden md:block" />
          
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="mb-12 relative"
            >
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                {/* Timeline icon */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="bg-primary-600 text-white p-3 rounded-full">
                    {edu.icon}
                  </div>
                </div>
                
                {/* Content positioning based on index */}
                <div className={`md:col-span-1 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:col-start-2 md:pl-16'}`}>
                  <div className="glass-panel">
                    <div className="p-6">
                      <h3 className="text-xl font-medium mb-1">{edu.degree}</h3>
                      <p className="text-primary-600 mb-1">{edu.institution}</p>
                      <p className="text-neutral-500 text-sm mb-4">{edu.period}</p>
                      <p className="text-neutral-700 mb-4">{edu.description}</p>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-neutral-800">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <Award size={16} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                              <span className="text-neutral-700 text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Empty div for timeline alignment */}
                <div className={`hidden md:block md:col-span-1 ${index % 2 === 0 ? 'md:col-start-2' : ''}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTower;