import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, AlertTriangle, Zap, Brain, Cpu, Globe, Rocket, Eye } from 'lucide-react';

const FutureSection = ({ setActiveSection }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  React.useEffect(() => {
    if (inView) setActiveSection('future');
  }, [inView, setActiveSection]);

  const challenges = [
    { title: 'High Investment Barriers', description: 'Professional software and hardware require significant upfront costs', icon: AlertTriangle, color: 'from-red-500 to-red-600' },
    { title: 'Rapidly Evolving Technology', description: 'Constant need to learn new tools and adapt to industry changes', icon: Zap, color: 'from-orange-500 to-orange-600' },
    { title: 'Technical Complexity', description: 'Mastering multiple specialized skills across the entire pipeline', icon: Cpu, color: 'from-yellow-500 to-yellow-600' },
    { title: 'Market Competition', description: 'Global talent pool and increasing accessibility of CGI tools', icon: Globe, color: 'from-purple-500 to-purple-600' }
  ];

  const trends = [
    { title: 'AI-Driven Automation', description: 'Machine learning accelerating modeling, texturing, and rendering processes', icon: Brain, color: 'from-blue-500 to-blue-600', impact: 'Revolutionary' },
    { title: 'Real-Time Rendering', description: 'Unreal Engine and similar platforms making instant visualization standard', icon: Zap, color: 'from-green-500 to-green-600', impact: 'High' },
    { title: 'Virtual Production', description: 'LED volumes and virtual sets changing how CGI integrates with live action', icon: Rocket, color: 'from-purple-500 to-purple-600', impact: 'Growing' },
    { title: 'Cloud-Based Rendering', description: 'Distributed computing making high-end rendering accessible to everyone', icon: Globe, color: 'from-indigo-500 to-indigo-600', impact: 'Transformative' },
    { title: 'AR/VR Integration', description: 'Immersive experiences becoming standard for brand activation', icon: Eye, color: 'from-rose-500 to-rose-600', impact: 'Future-Ready' }
  ];

  return (
    <section id="future" ref={ref} className="section-padding bg-gradient-to-br from-primary-50 to-neutral-50">
      <div className="container-custom">
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Navigating the <span className="block gradient-text">Future of CGI</span>
          </motion.h2>
          <motion.p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            The CGI landscape is evolving rapidly. Understanding both current challenges and emerging trends 
            will help you stay ahead and build a future-proof career.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <motion.div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-500" />
                Current Challenges
              </h3>
              <p className="text-neutral-600">Understanding these obstacles helps you prepare and develop strategic solutions.</p>
            </div>

            <div className="space-y-4">
              {challenges.map((challenge) => (
                <motion.div key={challenge.title} className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-200 hover:shadow-xl transition-all duration-300" whileHover={{ y: -4 }}>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${challenge.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <challenge.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-neutral-900 mb-2">{challenge.title}</h4>
                      <p className="text-neutral-600 text-sm leading-relaxed">{challenge.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-green-500" />
                Emerging Trends (2025+)
              </h3>
              <p className="text-neutral-600">These developments are reshaping the industry and creating new opportunities.</p>
            </div>

            <div className="space-y-4">
              {trends.map((trend) => (
                <motion.div key={trend.title} className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-200 hover:shadow-xl transition-all duration-300" whileHover={{ y: -4 }}>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${trend.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <trend.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-lg font-bold text-neutral-900">{trend.title}</h4>
                        <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">{trend.impact}</span>
                      </div>
                      <p className="text-neutral-600 text-sm leading-relaxed">{trend.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-neutral-900 mb-4">The Path Forward</h3>
            <p className="text-neutral-600 max-w-2xl mx-auto">Success in the evolving CGI landscape requires adaptability, continuous learning, and strategic thinking.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Stay Curious', description: 'Continuously explore new techniques, tools, and creative approaches', icon: Brain, color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-50' },
              { title: 'Build Networks', description: 'Connect with professionals, join communities, and collaborate actively', icon: Globe, color: 'from-green-500 to-green-600', bgColor: 'bg-green-50' },
              { title: 'Embrace Change', description: 'Adapt quickly to new technologies and industry shifts', icon: Rocket, color: 'from-purple-500 to-purple-600', bgColor: 'bg-purple-50' }
            ].map((principle) => (
              <motion.div key={principle.title} className={`${principle.bgColor} rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300`} whileHover={{ y: -8 }}>
                <div className={`w-16 h-16 bg-gradient-to-r ${principle.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <principle.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-4">{principle.title}</h4>
                <p className="text-neutral-600 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Your CGI Journey Starts Now</h3>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            The future of CGI is bright, filled with unprecedented opportunities for those who are prepared. 
            Your dedication to learning and growing will determine your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary-200" />
              <span className="text-primary-100">Learn Continuously</span>
            </div>
            <div className="text-primary-200 font-bold">+</div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary-200" />
              <span className="text-primary-100">Practice Consistently</span>
            </div>
            <div className="text-primary-200 font-bold">=</div>
            <div className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-primary-200" />
              <span className="text-primary-100">Unlimited Success</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureSection; 