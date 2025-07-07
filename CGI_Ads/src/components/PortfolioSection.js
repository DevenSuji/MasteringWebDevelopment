import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, ChevronDown, ChevronUp, Star, Award, Eye } from 'lucide-react';

const PortfolioSection = ({ setActiveSection }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [expandedTip, setExpandedTip] = useState(null);

  React.useEffect(() => {
    if (inView) setActiveSection('portfolio');
  }, [inView, setActiveSection]);

  const portfolioTips = [
    { id: 'quality', title: 'Quality Over Quantity', icon: Star, summary: 'Showcase fewer, exceptional pieces rather than many mediocre ones.', content: 'Focus on creating 8-12 absolutely stunning pieces that demonstrate your technical mastery and artistic vision.' },
    { id: 'process', title: 'Show Your Process', icon: Eye, summary: 'Include wireframes, breakdowns, and behind-the-scenes content.', content: 'Employers want to understand how you think and solve problems. Include wireframes, lighting passes, texture breakdowns.' },
    { id: 'style', title: 'Develop Your Voice', icon: Award, summary: 'Let your unique artistic style and preferences shine through.', content: 'What makes you memorable is your unique artistic voice. Whether hyperrealistic products or stylized characters.' }
  ];

  const showcaseProjects = [
    { title: 'Luxury Product Visualization', category: 'Product Design', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000&q=80', description: 'Photorealistic watch rendering with studio lighting' },
    { title: 'Character Animation', category: 'Character Design', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1000&q=80', description: 'Stylized character with full rigging and animation' },
    { title: 'Architectural Visualization', category: 'Architecture', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=80', description: 'Modern interior space with realistic materials' },
    { title: 'VFX Simulation', category: 'Visual Effects', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1000&q=80', description: 'Particle simulation and fluid dynamics showcase' },
    { title: 'Brand Advertisement', category: 'Commercial', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1000&q=80', description: 'Complete commercial project from concept to delivery' },
    { title: 'Experimental Art', category: 'Personal Project', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1000&q=80', description: 'Abstract creative exploration showcasing artistic vision' }
  ];

  return (
    <section id="portfolio" ref={ref} className="section-padding bg-gradient-to-br from-neutral-50 to-white">
      <div className="container-custom">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Crafting Your <span className="block gradient-text">World-Class Portfolio</span>
          </motion.h2>
          <motion.p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Your portfolio is your most powerful professional asset. It's a narrative of your skills, process, and artistic vision.
          </motion.p>
        </motion.div>

        <motion.div className="mb-16">
          <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">Portfolio Project Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcaseProjects.map((project) => (
              <motion.div key={project.title} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group" whileHover={{ y: -8 }}>
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-500 text-white px-2 py-1 rounded-full text-xs font-medium">{project.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-neutral-900 mb-2">{project.title}</h4>
                  <p className="text-neutral-600 text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="mb-16">
          <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">Professional Portfolio Principles</h3>
          <div className="space-y-6">
            {portfolioTips.map((tip) => (
              <motion.div key={tip.id} className="bg-white border-2 border-neutral-200 rounded-2xl overflow-hidden shadow-lg">
                <button
                  onClick={() => setExpandedTip(expandedTip === tip.id ? null : tip.id)}
                  className="w-full p-6 text-left hover:bg-neutral-50 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                        <tip.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-neutral-900">{tip.title}</h4>
                        <p className="text-neutral-600 text-sm">{tip.summary}</p>
                      </div>
                    </div>
                    <div className="text-primary-600">
                      {expandedTip === tip.id ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
                    </div>
                  </div>
                </button>

                {expandedTip === tip.id && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="px-6 pb-6">
                    <div className="bg-neutral-50 rounded-lg p-6">
                      <p className="text-neutral-600 leading-relaxed">{tip.content}</p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Portfolio Success Formula</h3>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            A world-class portfolio combines technical excellence with compelling storytelling and strategic presentation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div><div className="text-3xl font-bold mb-2">8-12</div><div className="text-primary-100">Quality Projects</div></div>
            <div><div className="text-3xl font-bold mb-2">3-5</div><div className="text-primary-100">Specialization Areas</div></div>
            <div><div className="text-3xl font-bold mb-2">100%</div><div className="text-primary-100">Process Documentation</div></div>
            <div><div className="text-3xl font-bold mb-2">∞</div><div className="text-primary-100">Creative Opportunities</div></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection; 