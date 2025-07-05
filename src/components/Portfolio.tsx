import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import CustomCursor from '@/components/CustomCursor';
import ThemeToggle from '@/components/ThemeToggle';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';

const Portfolio: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <CustomCursor />
        
        {/* Theme Toggle - Top Right */}
        <div className="fixed top-6 right-6 z-50">
          <ThemeToggle />
        </div>

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main>
          <div id="hero">
            <Hero />
          </div>
          
          <div id="about">
            <About />
          </div>
          
          <div id="projects">
            <Projects />
          </div>
          
          <div id="skills">
            <Skills />
          </div>
          
          <div id="contact">
            <Contact />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-zen-secondary/20 py-8 border-t border-border/50">
          <div className="container mx-auto px-6 text-center">
            <p className="text-muted-foreground">
              © 2024 Nirenjhanram S K. Crafted with passion and precision.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Portfolio;