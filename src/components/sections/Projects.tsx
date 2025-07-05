import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const projects = [
    {
      title: "Plant Disease Prediction",
      description: "AI-powered plant disease detection using deep learning with AlexNet architecture and Qwen LLM for intelligent chatbot assistance.",
      tech: ["ReactJS", "FastAPI", "PyTorch", "AlexNet", "Qwen LLM"],
      image: "🌱",
      delay: 0.2
    },
    {
      title: "Energy Management System",
      description: "Comprehensive energy monitoring and prediction system with real-time analytics, SARIMA forecasting, and interactive dashboards.",
      tech: ["MERN Stack", "Tailwind CSS", "Flask API", "Chart.js", "SARIMA"],
      image: "⚡",
      delay: 0.4
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio with advanced animations, custom cursor effects, and seamless dark/light mode transitions.",
      tech: ["React", "Framer Motion", "Tailwind CSS", "TypeScript"],
      image: "🎨",
      delay: 0.6
    }
  ];

  return (
    <section ref={ref} id="projects" className="min-h-screen py-20 section-snap">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-8 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions built with cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: project.delay }}
            >
              <Card className="zen-card h-full cursor-hover group">
                <div className="p-6">
                  <div className="text-6xl mb-6 text-center">
                    {project.image}
                  </div>
                  
                  <h3 className="text-2xl font-playfair font-semibold mb-4 text-gradient">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-zen-secondary text-zen-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="cursor-hover flex-1"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="btn-zen flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;