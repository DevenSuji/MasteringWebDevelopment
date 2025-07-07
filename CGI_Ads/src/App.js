import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroSection from './components/HeroSection';
import Navigation from './components/Navigation';
import PipelineSection from './components/PipelineSection';
import ToolsSection from './components/ToolsSection';
import LearningPlanSection from './components/LearningPlanSection';
import AISection from './components/AISection';
import PortfolioSection from './components/PortfolioSection';
import FutureSection from './components/FutureSection';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: 'hero', title: 'Home' },
    { id: 'pipeline', title: 'The Pipeline' },
    { id: 'tools', title: 'Essential Tools' },
    { id: 'plan', title: 'Learning Plan' },
    { id: 'ai', title: 'Role of AI' },
    { id: 'portfolio', title: 'Your Portfolio' },
    { id: 'future', title: 'Future & Trends' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50">
      <Navigation 
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <main className="relative">
        <HeroSection setActiveSection={setActiveSection} />
        <PipelineSection setActiveSection={setActiveSection} />
        <ToolsSection setActiveSection={setActiveSection} />
        <LearningPlanSection setActiveSection={setActiveSection} />
        <AISection setActiveSection={setActiveSection} />
        <PortfolioSection setActiveSection={setActiveSection} />
        <FutureSection setActiveSection={setActiveSection} />
      </main>
    </div>
  );
}

export default App; 