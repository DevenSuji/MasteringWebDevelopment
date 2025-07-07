import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, ChevronDown, ChevronUp, Target, BookOpen, Zap } from 'lucide-react';

const LearningPlanSection = ({ setActiveSection }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [expandedPhase, setExpandedPhase] = useState(null);

  React.useEffect(() => {
    if (inView) setActiveSection('plan');
  }, [inView, setActiveSection]);

  const learningPhases = [
    {
      id: 'foundation',
      title: 'Phase 1: Foundation',
      timeline: 'Months 1-6',
      duration: '6 months',
      color: 'from-blue-500 to-purple-600',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=1000&q=80',
      focus: 'Master core 3D concepts, learn your primary software, and understand basic project workflows.',
      skills: ['3D Navigation & Interface Mastery', 'Basic Modeling Techniques', 'UV Mapping Fundamentals', 'Basic Animation Principles'],
      projects: ['Simple product visualization', 'Basic character modeling', 'Logo animation sequence']
    },
    {
      id: 'specialization',
      title: 'Phase 2: Specialization',
      timeline: 'Months 7-18',
      duration: '12 months',
      color: 'from-emerald-500 to-teal-600',
      icon: Target,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1000&q=80',
      focus: 'Deepen expertise in chosen specialization, master advanced techniques, and build portfolio-quality work.',
      skills: ['Advanced Modeling & Sculpting', 'Photorealistic Texturing', 'Complex Lighting Setups', 'Advanced Animation'],
      projects: ['Photorealistic product campaign', 'Character animation sequence', 'Architectural visualization']
    },
    {
      id: 'mastery',
      title: 'Phase 3: AI Mastery',
      timeline: 'Months 19-30+',
      duration: '12+ months',
      color: 'from-purple-500 to-pink-600',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1000&q=80',
      focus: 'Master compositing, integrate AI tools, develop personal style, and build industry connections.',
      skills: ['Advanced Compositing', 'AI Tool Integration', 'Live-Action Integration', 'Creative Direction'],
      projects: ['CGI-live action integration', 'AI-assisted workflow project', 'Portfolio optimization']
    }
  ];

  return (
    <section id="plan" ref={ref} className="section-padding bg-gradient-to-br from-neutral-50 to-white">
      <div className="container-custom">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Your Learning <span className="block gradient-text">Roadmap</span>
          </motion.h2>
          <motion.p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            With 1.5 hours of dedicated practice daily, achieve world-class expertise through three focused phases.
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-emerald-500 to-purple-500"></div>
          
          <div className="space-y-12">
            {learningPhases.map((phase, index) => (
              <motion.div key={phase.id} className="relative">
                <div className={`absolute left-4 top-8 w-8 h-8 rounded-full bg-gradient-to-r ${phase.color} shadow-lg border-4 border-white z-10`}>
                  <div className="absolute inset-2 bg-white rounded-full"></div>
                </div>

                <div className="ml-20">
                  <motion.div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300" whileHover={{ y: -4 }}>
                    <div className="relative">
                      <img src={phase.image} alt={phase.title} className="w-full h-48 object-cover" />
                      <div className={`absolute inset-0 bg-gradient-to-r ${phase.color} opacity-30`}></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-2">{phase.title}</h3>
                        <div className="flex items-center gap-4 text-white/90">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{phase.timeline}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">{phase.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-neutral-600 text-lg mb-4">{phase.focus}</p>
                      <button
                        onClick={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
                        className="w-full flex items-center justify-between p-4 text-primary-600 bg-white rounded-lg border-2 border-primary-200 hover:bg-primary-50 transition-all duration-200"
                      >
                        <span className="font-medium">View Phase Details</span>
                        {expandedPhase === phase.id ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                      </button>

                      {expandedPhase === phase.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                          <div>
                            <h4 className="font-semibold text-neutral-800 mb-3">Core Skills:</h4>
                            <ul className="space-y-2">
                              {phase.skills.map((skill, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${phase.color} mt-2`}></div>
                                  <span className="text-neutral-600">{skill}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-neutral-800 mb-3">Key Projects:</h4>
                            <ul className="space-y-2">
                              {phase.projects.map((project, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${phase.color} mt-2`}></div>
                                  <span className="text-neutral-600">{project}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Your Journey Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div><div className="text-3xl font-bold mb-2">30</div><div className="text-primary-100">Months to Mastery</div></div>
            <div><div className="text-3xl font-bold mb-2">1.5</div><div className="text-primary-100">Hours Daily</div></div>
            <div><div className="text-3xl font-bold mb-2">15+</div><div className="text-primary-100">Portfolio Projects</div></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningPlanSection; 