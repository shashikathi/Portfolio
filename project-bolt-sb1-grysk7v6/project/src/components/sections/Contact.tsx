import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

interface ContactProps {
  id: string;
  onVisible: () => void;
}

const Contact: React.FC<ContactProps> = ({ id, onVisible }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  useEffect(() => {
    if (isInView) {
      onVisible();
    }
  }, [isInView, onVisible]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Message sent! (Demo functionality)');
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id={id} ref={ref} className="py-20 bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Get In Touch</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="glass-panel h-full">
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-medium mb-6">Contact Information</h3>
                
                <div className="space-y-6 flex-grow">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-primary-600 mt-1 mr-3" />
                    <div>
                      <h4 className="text-sm font-medium text-neutral-800 mb-1">Email</h4>
                      <a href="mailto:shashikathi56@gmail.com" className="text-neutral-600 hover:text-primary-600 transition-colors">
                        shashikathi56@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-primary-600 mt-1 mr-3" />
                    <div>
                      <h4 className="text-sm font-medium text-neutral-800 mb-1">Phone</h4>
                      <a href="tel:+919966034362" className="text-neutral-600 hover:text-primary-600 transition-colors">
                        +91 9966034362
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-primary-600 mt-1 mr-3" />
                    <div>
                      <h4 className="text-sm font-medium text-neutral-800 mb-1">Location</h4>
                      <p className="text-neutral-600">
                        Bangalore, India
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <h4 className="text-sm font-medium text-neutral-800 mb-3">Connect</h4>
                  <div className="flex space-x-4">
                    <a href="https://github.com/shashikathi" className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-primary-600 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.18.69.8.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-primary-600 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22.68 0H1.32C.593 0 0 .593 0 1.32v21.36C0 23.407.593 24 1.32 24h21.36c.727 0 1.32-.593 1.32-1.32V1.32C24 .593 23.407 0 22.68 0zM7.513 20.205H3.742V8.884h3.77v11.32zM5.627 7.223a2.165 2.165 0 1 1 0-4.33 2.165 2.165 0 0 1 0 4.33zm14.578 12.982h-3.77v-5.904c0-1.407-.026-3.215-1.959-3.215-1.96 0-2.259 1.53-2.259 3.111v6.008h-3.77V8.884h3.614v1.66h.051c.502-.953 1.73-1.959 3.56-1.959 3.811 0 4.51 2.506 4.51 5.761v5.859h.025z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass-panel">
              <div className="p-6">
                <h3 className="text-xl font-medium mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary px-6 py-3"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;