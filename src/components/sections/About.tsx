import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card } from '@/components/ui/card';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const achievements = [
    { text: "20% project cost reduction", delay: 0.2 },
    { text: "Improved workflow efficiency by 25%", delay: 0.4 },
    { text: "Led and delivered a major engineering project on time", delay: 0.6 }
  ];

  return (
    <section ref={ref} id="about" className="min-h-screen flex items-center py-20 section-snap">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-8 text-gradient">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="zen-card p-8">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                I'm a passionate{' '}
                <span className="font-semibold text-foreground">
                  Artificial Intelligence and Data Science
                </span>{' '}
                student from{' '}
                <span className="font-semibold text-foreground">
                  Kongu Engineering College
                </span>
                , with a strong focus on web development, full-stack implementation, 
                and UI/UX design.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mt-6">
                I build responsive, data-driven web applications using{' '}
                <span className="font-semibold text-foreground">
                  MERN stack, Python, and Tailwind CSS
                </span>
                , always aiming to create seamless user experiences.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="zen-card p-8">
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-gradient">
                Key Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: achievement.delay }}
                    className="flex items-center space-x-3"
                  >
                    <motion.div
                      className="w-2 h-2 bg-zen-primary rounded-full"
                      animate={isInView ? { scale: [0, 1.2, 1] } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: achievement.delay + 0.2 }}
                    />
                    <span className="text-lg text-muted-foreground">
                      {achievement.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;