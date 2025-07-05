import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface SkillProps {
  name: string;
  level: number;
  delay: number;
}

const SkillBar: React.FC<SkillProps> = ({ name, level, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.8 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6, delay }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-medium text-foreground">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-progress"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90, delay: 0.1 },
        { name: "JavaScript", level: 85, delay: 0.2 },
        { name: "Java", level: 80, delay: 0.3 },
        { name: "C", level: 75, delay: 0.4 }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90, delay: 0.1 },
        { name: "HTML5 & CSS3", level: 95, delay: 0.2 },
        { name: "Tailwind CSS", level: 85, delay: 0.3 },
        { name: "Framer Motion", level: 80, delay: 0.4 }
      ]
    },
    {
      title: "Backend & AI",
      skills: [
        { name: "Node.js", level: 85, delay: 0.1 },
        { name: "Flask", level: 80, delay: 0.2 },
        { name: "PyTorch", level: 85, delay: 0.3 },
        { name: "AlexNet", level: 75, delay: 0.4 }
      ]
    }
  ];

  return (
    <section ref={ref} id="skills" className="min-h-screen py-20 section-snap bg-zen-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-8 text-gradient">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proficiency across multiple technologies and frameworks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <Card className="zen-card p-6 h-full">
                <h3 className="text-2xl font-playfair font-semibold mb-6 text-gradient">
                  {category.title}
                </h3>
                <div>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skillIndex}
                      name={skill.name}
                      level={skill.level}
                      delay={skill.delay + categoryIndex * 0.1}
                    />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;