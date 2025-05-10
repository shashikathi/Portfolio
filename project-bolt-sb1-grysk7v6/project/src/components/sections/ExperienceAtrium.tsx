import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, Database, LineChart, BarChart, Target } from 'lucide-react';

interface ExperienceAtriumProps {
  id: string;
  onVisible: () => void;
}

const ExperienceAtrium: React.FC<ExperienceAtriumProps> = ({ id, onVisible }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      onVisible();
    }
  }, [isInView, onVisible]);

  const experiences = [
    {
      company: "TransOrg Analytics",
      role: "Data Science Intern",
      period: "Jan 2025 - Present",
      description: "Developed ML models for customer segmentation and predictive analysis, improving marketing campaign efficiency by 27%. Created interactive Power BI dashboards for real-time performance tracking.",
      metrics: [
        { icon: <LineChart size={20} />, text: "Improved campaign performance by 27%" },
        { icon: <Database size={20} />, text: "Processed 1.2TB of customer data" }
      ],
      logo: "https://images.pexels.com/photos/5256816/pexels-photo-5256816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      company: "Movidu",
      role: "Business Analyst",
      period: "Oct 2024 - Jan 2025",
      description: "Led market research and data analysis initiatives to identify potential leads and develop data-driven expansion strategies, collaborating with cross-functional teams to drive business growth.",
      metrics: [
        { icon: <Target size={20} />, text: "Qualified 200+ potential leads" },
        { icon: <BarChart size={20} />, text: "Achieved 25% revenue growth" },
        { icon: <Users size={20} />, text: "20% increase in client engagement" }
      ],
      logo: "https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
          <h2 className="section-heading">Experience Atrium</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Professional experiences that have shaped my expertise in data science and business analytics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-panel overflow-hidden"
            >
              <div className="flex flex-col h-full">
                <div className="h-40 bg-neutral-100 relative overflow-hidden">
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} visualization`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-xl font-medium">{exp.company}</h3>
                    <p className="text-white/80">{exp.role}</p>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-sm text-neutral-500 mb-4">{exp.period}</p>
                  <p className="text-neutral-700 mb-6">{exp.description}</p>
                  
                  <div className="mt-auto space-y-3">
                    {exp.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center text-neutral-800">
                        <span className="mr-2 text-primary-600">{metric.icon}</span>
                        <span>{metric.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceAtrium;