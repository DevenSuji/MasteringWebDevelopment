import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Filter, Star, Clock, TrendingUp, Cpu, Palette, Camera, Zap } from 'lucide-react';

const ToolsSection = ({ setActiveSection }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [selectedCategory, setSelectedCategory] = useState('All');

  React.useEffect(() => {
    if (inView) setActiveSection('tools');
  }, [inView, setActiveSection]);

  const tools = [
    { name: 'Maya', category: 'Modeling', icon: Cpu, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1000&q=80', strength: 'Industry standard for animation and VFX workflows', curve: 'Challenging', popularity: 95 },
    { name: 'Blender', category: 'Modeling', icon: Cpu, image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=1000&q=80', strength: 'Free, open-source, incredibly versatile and powerful', curve: 'Moderate', popularity: 85 },
    { name: 'ZBrush', category: 'Sculpting', icon: Palette, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1000&q=80', strength: 'Exceptional for organic digital sculpting and detailing', curve: 'Challenging', popularity: 90 },
    { name: 'V-Ray', category: 'Rendering', icon: Camera, image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=1000&q=80', strength: 'Perfect balance of quality and render speed', curve: 'Moderate', popularity: 80 },
    { name: 'After Effects', category: 'Compositing', icon: Camera, image: 'https://images.unsplash.com/photo-1574717024663-26c2b5b0a4f0?w=1000&q=80', strength: 'Industry standard for motion graphics and compositing', curve: 'Steep', popularity: 92 },
    { name: 'Unreal Engine', category: 'Rendering', icon: Zap, image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1000&q=80', strength: 'Real-time rendering for interactive content', curve: 'Challenging', popularity: 78 },
  ];

  const categories = ['All', ...new Set(tools.map(tool => tool.category))];
  const filteredTools = selectedCategory === 'All' ? tools : tools.filter(tool => tool.category === selectedCategory);

  return (
    <section id="tools" ref={ref} className="section-padding bg-gradient-to-br from-primary-50 to-neutral-50">
      <div className="container-custom">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Essential Tools of <span className="block gradient-text">the Trade</span>
          </motion.h2>
          <motion.p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Master the industry-standard software that powers modern CGI production.
          </motion.p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-neutral-600 hover:bg-primary-50 hover:text-primary-600 border border-neutral-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <motion.div
              key={tool.name}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="relative overflow-hidden">
                <img src={tool.image} alt={tool.name} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" />
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="text-white text-xs font-medium">{tool.popularity}%</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{tool.name}</h3>
                <span className="text-sm font-medium text-primary-600 bg-primary-100 px-2 py-1 rounded-full mb-4 inline-block">{tool.category}</span>
                <p className="text-neutral-600 text-sm mb-4">{tool.strength}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-neutral-400" />
                    <span className="text-sm font-medium text-orange-600">{tool.curve}</span>
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

export default ToolsSection; 