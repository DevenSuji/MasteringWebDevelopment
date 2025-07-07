import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Zap, Brain, Lightbulb, AlertCircle, CheckCircle } from 'lucide-react';

const AISection = ({ setActiveSection }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  React.useEffect(() => {
    if (inView) setActiveSection('ai');
  }, [inView, setActiveSection]);

  return (
    <section id="ai" ref={ref} className="section-padding bg-gradient-to-br from-primary-50 to-neutral-50">
      <div className="container-custom">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            The Role of AI in <span className="block gradient-text">CGI Design</span>
          </motion.h2>
          <motion.p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            AI is not replacing creativity—it's amplifying it. Modern CGI artists leverage AI tools 
            to accelerate workflows, enhance quality, and explore new creative possibilities.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div className="space-y-8">
            <motion.div className="bg-white rounded-2xl p-8 shadow-lg border border-primary-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">The Power of Prompt Engineering</h3>
              </div>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Mastering the art of crafting precise instructions for AI tools is becoming as important 
                as traditional artistic skills. Well-crafted prompts can generate exactly what you envision.
              </p>
              <div className="bg-primary-50 rounded-lg p-4">
                <p className="text-primary-700 font-medium text-sm">
                  💡 Example: "Photorealistic product shot of a luxury watch on marble surface, 
                  studio lighting, 85mm lens, shallow depth of field, golden hour lighting"
                </p>
              </div>
            </motion.div>

            <motion.div className="bg-white rounded-2xl p-8 shadow-lg border border-primary-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">Can Ads Be Made with Just AI?</h3>
              </div>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Currently, no. While AI excels at generating assets and automating tasks, it cannot 
                replicate human creativity, strategic thinking, and artistic refinement.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <span className="font-medium text-red-700">AI Limitations</span>
                  </div>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• No creative vision</li>
                    <li>• Limited context understanding</li>
                    <li>• Lacks artistic judgment</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="font-medium text-green-700">Human Strengths</span>
                  </div>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Creative problem-solving</li>
                    <li>• Emotional storytelling</li>
                    <li>• Quality refinement</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="space-y-6">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Essential AI Tools</h3>
            {[
              { name: 'Midjourney', category: 'Concept Art', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1000&q=80', description: 'Generate stunning concept art and mood boards' },
              { name: 'Stable Diffusion', category: 'Image Generation', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1000&q=80', description: 'Create textures, backgrounds, and reference images' },
              { name: 'RunwayML', category: 'Video AI', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1000&q=80', description: 'AI-powered video editing and motion graphics' }
            ].map((tool, index) => (
              <motion.div key={tool.name} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-primary-100 hover:shadow-xl transition-all duration-300 group" whileHover={{ y: -4 }}>
                <div className="relative h-48 overflow-hidden">
                  <img src={tool.image} alt={tool.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-xl font-bold text-white">{tool.name}</h4>
                      <span className="text-xs bg-primary-500 text-white px-2 py-1 rounded-full">{tool.category}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-neutral-600">{tool.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div className="bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">The Future is Human + AI</h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            The most successful CGI artists of tomorrow will be those who master both traditional 
            techniques and AI tools, creating a powerful synergy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary-200" />
              <span className="text-primary-100">Human Creativity</span>
            </div>
            <div className="text-primary-200 font-bold">+</div>
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary-200" />
              <span className="text-primary-100">AI Acceleration</span>
            </div>
            <div className="text-primary-200 font-bold">=</div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary-200" />
              <span className="text-primary-100">Unlimited Potential</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AISection; 