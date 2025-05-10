import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

interface CertificationsWallProps {
  id: string;
  onVisible: () => void;
}

const CertificationsWall: React.FC<CertificationsWallProps> = ({ id, onVisible }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      onVisible();
    }
  }, [isInView, onVisible]);

  const certifications = [
    {
      name: "Power BI Job Simulation",
      issuer: "PwC | Forage",
      date: "March 2025",
      image: "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      skills: ["Data Visualization", "Business Intelligence", "Analytics"]
    },
    {
      name: "Excel Skills for Business",
      issuer: "Goldman Sachs | Forage",
      date: "January 2025",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      skills: ["Data Analysis", "Business Analytics", "Excel"]
    },
    {
      name: "Data Structures",
      issuer: "Certification Authority",
      date: "November 2022",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      skills: ["Algorithms", "Problem Solving", "Programming"]
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
          <h2 className="section-heading">Certifications Wall</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Professional certifications and credentials that validate my expertise and continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-panel flex flex-col md:flex-row overflow-hidden"
            >
              <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Award className="text-white" size={24} />
                </div>
              </div>
              
              <div className="p-6 md:w-2/3 flex flex-col">
                <h3 className="text-xl font-medium mb-1">{cert.name}</h3>
                <p className="text-primary-600 mb-2">{cert.issuer}</p>
                <p className="text-neutral-500 text-sm mb-4">Issued: {cert.date}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cert.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-neutral-200 text-neutral-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <a 
                  href="#" 
                  className="mt-4 inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors text-sm font-medium"
                >
                  View Certificate
                  <ExternalLink className="ml-1 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsWall;