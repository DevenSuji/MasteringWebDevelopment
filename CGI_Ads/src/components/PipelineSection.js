import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, Lightbulb, Clapperboard, Sparkles, Zap } from 'lucide-react';

const PipelineSection = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [selectedStage, setSelectedStage] = useState(null);

  React.useEffect(() => {
    if (inView) {
      setActiveSection('pipeline');
    }
  }, [inView, setActiveSection]);

  const pipelineStages = [
    {
      id: 'pre-production',
      title: 'Pre-Production',
      icon: Lightbulb,
      color: 'from-amber-400 to-orange-500',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-600',
      image: 'https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'The foundational blueprint where creative vision meets technical planning.',
      activities: [
        'Concept Development & Ideation',
        'Scriptwriting & Storyboarding',
        'Technical Feasibility Analysis',
        'Mood Boards & Visual References',
        'Asset Planning & Pipeline Setup'
      ],
      goal: 'Define Vision, Plan Narrative, Ensure Technical Feasibility',
      tools: ['Photoshop', 'Illustrator', 'Storyboard Pro', 'Milanote', 'Figma'],
      duration: '2-4 weeks',
      deliverables: 'Concept Art, Storyboards, Technical Specs'
    },
    {
      id: 'production',
      title: 'Production',
      icon: Clapperboard,
      color: 'from-blue-400 to-purple-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600',
      image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Where vision transforms into tangible digital assets and animated sequences.',
      activities: [
        '3D Modeling & Sculpting',
        'UV Mapping & Texturing',
        'Rigging & Character Setup',
        'Animation & Keyframing',
        'VFX & Simulation Creation'
      ],
      goal: 'Create Digital Assets, Apply Surface Details, Generate Motion',
      tools: ['Maya', 'Blender', 'ZBrush', 'Substance Painter', 'Houdini'],
      duration: '8-16 weeks',
      deliverables: '3D Models, Textures, Animations, VFX Elements'
    },
    {
      id: 'post-production',
      title: 'Post-Production',
      icon: Sparkles,
      color: 'from-emerald-400 to-teal-500',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      textColor: 'text-emerald-600',
      image: 'https://images.unsplash.com/photo-1574717024663-26c2b5b0a4f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Where elements converge and refine into the final, polished visual experience.',
      activities: [
        'Scene Lighting & Atmosphere',
        'High-Quality Rendering',
        'Compositing & Integration',
        'Color Grading & Correction',
        'Final Optimization & Delivery'
      ],
      goal: 'Enhance Realism, Integrate Elements, Optimize Distribution',
      tools: ['Arnold', 'V-Ray', 'After Effects', 'Nuke', 'DaVinci Resolve'],
      duration: '4-8 weeks',
      deliverables: 'Final Renders, Composite Shots, Deliverable Assets'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="pipeline" ref={ref} className="section-padding bg-gradient-to-br from-neutral-50 to-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full border border-primary-200">
              <Zap className="h-4 w-4 text-primary-600" />
              <span className="text-sm font-medium text-primary-700">Interactive Pipeline</span>
            </div>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6"
          >
            The CGI Production
            <span className="block gradient-text">Pipeline</span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
          >
            Master the complete workflow from initial concept to final render. 
            Each stage builds upon the last, creating a seamless path to professional CGI.
          </motion.p>
        </motion.div>

        {/* Pipeline Stages */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {pipelineStages.map((stage, index) => (
            <motion.div
              key={stage.id}
              variants={itemVariants}
              className={`relative ${stage.bgColor} ${stage.borderColor} border-2 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105`}
              onClick={() => setSelectedStage(selectedStage === stage.id ? null : stage.id)}
              whileHover={{ y: -8 }}
            >
              {/* Stage Number */}
              <div className={`absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r ${stage.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                {index + 1}
              </div>

              {/* Stage Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={stage.image} 
                  alt={stage.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${stage.color} opacity-20`}></div>
                <div className="absolute top-4 left-4">
                  <stage.icon className={`h-8 w-8 ${stage.textColor} bg-white/90 p-1.5 rounded-lg shadow-md`} />
                </div>
              </div>

              <h3 className={`text-2xl font-bold ${stage.textColor} mb-3`}>{stage.title}</h3>
              <p className="text-neutral-600 mb-4 leading-relaxed">{stage.description}</p>

              <div className="flex items-center justify-between">
                <span className={`text-sm font-medium ${stage.textColor}`}>
                  {stage.duration}
                </span>
                <ChevronRight className={`h-5 w-5 ${stage.textColor} transition-transform duration-200 ${selectedStage === stage.id ? 'rotate-90' : ''}`} />
              </div>

              {/* Arrow for desktop */}
              {index < pipelineStages.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <ChevronRight className="h-8 w-8 text-neutral-300" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Information */}
        {selectedStage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-200"
          >
            {(() => {
              const stage = pipelineStages.find(s => s.id === selectedStage);
              return (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                      {stage.title} Details
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-2">Core Goal:</h4>
                        <p className="text-neutral-600">{stage.goal}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-2">Key Activities:</h4>
                        <ul className="list-disc list-inside text-neutral-600 space-y-1">
                          {stage.activities.map((activity, idx) => (
                            <li key={idx}>{activity}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-2">Deliverables:</h4>
                        <p className="text-neutral-600">{stage.deliverables}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-4">Essential Tools:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {stage.tools.map((tool, idx) => (
                        <div key={idx} className="bg-neutral-50 rounded-lg p-3 text-center">
                          <span className="font-medium text-neutral-800">{tool}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PipelineSection; 