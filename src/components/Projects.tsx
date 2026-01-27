'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Sparkles, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 'ev-chatbot',
    title: 'EV Agentic Chatbot',
    subtitle: 'Multi-Agent AI System',
    description: 'Enterprise-grade Multi-Agent AI system with LangChain for EV analytics. Features SQL Agent, Document Agent, and LLM Decider with RAG architecture serving analytics across 10 US states.',
    technologies: ['LangChain', 'Claude', 'GPT-4', 'RAG', 'FAISS', 'ChromaDB', 'BigQuery', 'Dash', 'Chainlit'],
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    category: 'AI/ML',
  },
  {
    id: 'clink-social',
    title: 'Clink Social',
    subtitle: 'Full-Stack Social Platform',
    description: 'Complete social platform with React Native mobile app, Remix web application, and native Swift iOS app. Features Plaid payment integration, MapKit, and real-time messaging.',
    technologies: ['React Native', 'Expo', 'Remix', 'Swift', 'SwiftUI', 'Prisma', 'PostgreSQL', 'Firebase', 'Plaid', 'MapKit'],
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    category: 'Full-Stack',
  },
  {
    id: 'healthcare-platform',
    title: 'Healthcare Platform',
    subtitle: 'End-to-End Medical System',
    description: 'Comprehensive healthcare solution featuring SwiftUI iOS apps (Vitality, Clinical) with real-time biosignal streaming, Next.js dashboard, and Flask APIs handling 10K+ WebSocket connections.',
    technologies: ['SwiftUI', 'Next.js', 'Flask', 'FastAPI', 'MongoDB', 'Firebase', 'WebSocket', 'CoreUSB'],
    gradient: 'from-emerald-500 via-green-500 to-lime-500',
    category: 'Healthcare',
  },
  {
    id: 'inspecalytics',
    title: 'Inspecalytics',
    subtitle: 'Inspection Platform',
    description: 'Professional inspection platform with native SwiftUI iOS app featuring automated Word/PowerPoint report generation, image annotation, and a modern web landing page.',
    technologies: ['SwiftUI', 'UIKit', 'Word/PowerPoint Generation', 'Image Annotation', 'Web Landing'],
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    category: 'Mobile',
  },
  {
    id: 'clu-vision',
    title: 'CLU Vision',
    subtitle: 'Computer Vision Application',
    description: 'Real-time computer vision application with Streamlit UI, OpenCV processing pipeline, and interactive analysis dashboard for image processing and object detection.',
    technologies: ['Streamlit', 'OpenCV', 'Python', 'pandas', 'Computer Vision', 'Real-time Processing'],
    gradient: 'from-pink-500 via-rose-500 to-red-500',
    category: 'AI/ML',
  },
  {
    id: 'opensync',
    title: 'OpenSync',
    subtitle: 'Neuroscience Research Platform',
    description: 'Open-source platform for multi-modal neuroscience data synchronization. Published in Journal of Neuroscience Methods, enabling researchers worldwide to sync diverse data streams.',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Data Sync', 'Neuroscience', 'Open Source'],
    gradient: 'from-indigo-500 via-blue-500 to-sky-500',
    category: 'Research',
  },
]

const categories = ['All', 'AI/ML', 'Full-Stack', 'Healthcare', 'Mobile', 'Research']

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-accent-purple/5 blur-[150px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-blue/5 blur-[120px] -z-10" />

      <div className="container-custom section-padding">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-400 mb-6"
          >
            <Sparkles size={16} className="text-accent-pink" />
            Featured Work
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">Selected </span>
            <span className="gradient-text-static">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            A collection of projects showcasing my expertise in AI/ML, full-stack development, 
            and building products that make a difference.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300
                ${activeCategory === category 
                  ? 'bg-white text-black' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5 border border-white/10'
                }
              `}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative"
              >
                <div className="relative h-full p-6 md:p-8 rounded-2xl glass overflow-hidden transition-all duration-500 hover:-translate-y-2">
                  {/* Gradient background on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 0.1 : 0 }}
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                  />
                  
                  {/* Animated gradient border */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} p-[1px]`}>
                      <div className="w-full h-full rounded-2xl bg-gray-900" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Category badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} text-white`}>
                        {project.category}
                      </span>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: hoveredProject === project.id ? 1 : 0, x: hoveredProject === project.id ? 0 : -10 }}
                        className="flex items-center gap-1 text-white"
                      >
                        <span className="text-sm">View</span>
                        <ArrowUpRight size={16} />
                      </motion.div>
                    </div>

                    {/* Title & subtitle */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:gradient-text-static transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4">{project.subtitle}</p>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-full bg-white/5 text-xs text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2.5 py-1 rounded-full bg-white/5 text-xs text-gray-400">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Shine effect on hover */}
                  <motion.div
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ 
                      x: hoveredProject === project.id ? '200%' : '-100%',
                      opacity: hoveredProject === project.id ? 0.2 : 0
                    }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
