'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Sparkles, ArrowUpRight, Users, Activity, Shield, Brain, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 'cerevu',
    title: 'CereVu Medical',
    subtitle: 'AI-Powered Objective Pain Measurement',
    description: 'Revolutionary healthcare platform using AI-derived biomarkers from wearable sensors. Featured in Nature Magazine with >90% accuracy across 400+ clinical patients.',
    technologies: ['SwiftUI', 'FastAPI', 'Flask', 'Next.js', 'MongoDB', 'WebSocket', 'CoreUSB', 'ML'],
    gradient: 'from-teal-500 to-emerald-600',
    category: 'Healthcare',
    stats: [
      { label: 'Accuracy', value: '>90%' },
      { label: 'Patients', value: '400+' },
      { label: 'Studies', value: '5' },
    ],
    link: 'https://cerevu.com',
    featured: true,
    icon: Activity,
    image: '/images/projects/cerevu-logo.png',
    bgImage: '/images/projects/cerevu-hero.png',
  },
  {
    id: 'clink',
    title: 'Clink Social',
    subtitle: 'University Social Platform',
    description: 'Privacy-first social platform for university students. Ephemeral content, real-time messaging, and local discovery. No ads, no tracking.',
    technologies: ['React Native', 'Expo', 'Remix', 'Swift', 'SwiftUI', 'Prisma', 'PostgreSQL', 'Firebase'],
    gradient: 'from-violet-500 to-purple-600',
    category: 'Full-Stack',
    stats: [
      { label: 'Platforms', value: '3' },
      { label: 'Privacy', value: '100%' },
      { label: 'Features', value: '10+' },
    ],
    link: 'https://clinkn.com',
    featured: true,
    icon: Users,
    image: '/images/projects/clink-icon.png',
    bgImage: '/images/projects/clink-bg.png',
  },
  {
    id: 'inspecalytics',
    title: 'Inspecalytics',
    subtitle: 'Field Investigation Documentation',
    description: 'Purpose-built platform for forensic engineers. Captures field data, auto-organizes, and generates defensible reports in hours instead of days.',
    technologies: ['SwiftUI', 'UIKit', 'Core Data', 'CloudKit', 'Document Gen', 'Offline-First'],
    gradient: 'from-blue-500 to-indigo-600',
    category: 'Mobile',
    stats: [
      { label: 'Time Saved', value: '70%' },
      { label: 'Offline', value: '100%' },
      { label: 'Reports', value: 'Auto' },
    ],
    link: 'https://inspecalytics.com',
    featured: true,
    icon: Shield,
    image: '/images/projects/inspecalytics-icon.png',
    // No background image - using gradient design instead
  },
  {
    id: 'ev-chatbot',
    title: 'EV Agentic Chatbot',
    subtitle: 'Multi-Agent AI System @ Ford',
    description: 'Enterprise Multi-Agent AI with LangChain for EV analytics. SQL Agent, Document Agent, and LLM Decider serving 10 US states.',
    technologies: ['LangChain', 'Claude', 'GPT-4', 'RAG', 'FAISS', 'ChromaDB', 'BigQuery', 'Dash'],
    gradient: 'from-blue-600 to-cyan-500',
    category: 'AI/ML',
    stats: [
      { label: 'States', value: '10' },
      { label: 'Data', value: '10TB+' },
      { label: 'Agents', value: '3' },
    ],
    featured: false,
    icon: Brain,
  },
  {
    id: 'ai-companion',
    title: 'AI Companion',
    subtitle: 'Personal AI Assistant',
    description: 'Intelligent AI companion leveraging state-of-the-art language models for personalized conversations and task assistance.',
    technologies: ['Python', 'LangChain', 'OpenAI', 'Claude', 'Vector DB', 'Streamlit'],
    gradient: 'from-pink-500 to-rose-600',
    category: 'AI/ML',
    featured: false,
    icon: Brain,
  },
  {
    id: 'opensync',
    title: 'OpenSync',
    subtitle: 'Neuroscience Research Platform',
    description: 'Open-source platform for multi-modal neuroscience data synchronization. Published in Journal of Neuroscience Methods.',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Signal Processing', 'Neuroscience'],
    gradient: 'from-amber-500 to-orange-600',
    category: 'Research',
    featured: false,
    icon: Brain,
  },
]

const categories = ['All', 'Healthcare', 'Full-Stack', 'Mobile', 'AI/ML', 'Research']

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  const featuredProjects = projects.filter(p => p.featured)

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
            <span className="text-white">Products I've </span>
            <span className="gradient-text-static">Built</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            From AI-powered healthcare to social platforms — products that are live, 
            serving real users, and making an impact.
          </p>
        </motion.div>

        {/* Featured Projects - Cards with Background Images */}
        {activeCategory === 'All' && (
          <div className="mb-20">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8"
            >
              Featured Products
            </motion.h3>
            <div className="grid lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <motion.a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative block"
                >
                  <div className="relative h-full rounded-2xl border border-gray-800 overflow-hidden transition-all duration-500 hover:border-gray-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50">
                    {/* Background Image or Abstract Pattern */}
                    {project.bgImage ? (
                      <div className="absolute inset-0">
                        <Image
                          src={project.bgImage}
                          alt=""
                          fill
                          className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                        />
                        {/* Gradient overlay for readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/95 to-gray-950/70" />
                      </div>
                    ) : (
                      <div className="absolute inset-0">
                        {/* Abstract gradient orbs for cards without images */}
                        <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${project.gradient} opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500`} />
                        <div className={`absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr ${project.gradient} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />
                        {/* Subtle grid pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50" />
                      </div>
                    )}
                    
                    {/* Color tint */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-[0.05] group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Gradient accent line at top */}
                    <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.gradient}`} />
                    
                    {/* Content */}
                    <div className="relative p-6 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-5">
                        {/* App Icon */}
                        {project.image && (
                          <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="relative w-14 h-14 rounded-xl overflow-hidden shadow-xl shadow-black/50 ring-1 ring-white/10"
                          >
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                          </motion.div>
                        )}
                        
                        {/* Visit button */}
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: hoveredProject === project.id ? 1 : 0, x: hoveredProject === project.id ? 0 : -10 }}
                          transition={{ duration: 0.2 }}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${project.gradient} text-white`}
                        >
                          <span>Visit</span>
                          <ChevronRight size={14} />
                        </motion.div>
                      </div>
                      
                      {/* Spacer */}
                      <div className="flex-1 min-h-[20px]" />

                      {/* Title & subtitle */}
                      <h3 className="text-xl font-bold text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-4">{project.subtitle}</p>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Stats */}
                      {project.stats && (
                        <div className="flex gap-6 mb-6 pb-6 border-b border-white/5">
                          {project.stats.map((stat) => (
                            <div key={stat.label}>
                              <div className="text-lg font-bold text-white">{stat.value}</div>
                              <div className="text-xs text-gray-600">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-gray-400"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-gray-400">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        )}

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
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
                  : 'text-gray-400 hover:text-white hover:bg-white/5 border border-gray-800'
                }
              `}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Other Projects grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {(activeCategory === 'All' ? projects.filter(p => !p.featured) : filteredProjects).map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative"
              >
                <div className="relative h-full p-6 rounded-2xl border border-gray-800 bg-gray-950/50 overflow-hidden transition-all duration-300 hover:border-gray-700 hover:-translate-y-1">
                  {/* Gradient accent at top */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity`} />
                  
                  {/* Content */}
                  <div className="relative">
                    {/* Category badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-2.5 py-1 rounded-md text-xs font-medium bg-gradient-to-r ${project.gradient} text-white`}>
                        {project.category}
                      </span>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>

                    {/* Title & subtitle */}
                    <h3 className="text-lg font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">{project.subtitle}</p>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-500"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-500">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/moeinrazavi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition-all"
          >
            <Github size={20} />
            <span>View More on GitHub</span>
            <ArrowUpRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
