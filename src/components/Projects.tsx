'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Sparkles, ArrowUpRight, Users, Activity, Shield, Brain } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 'cerevu',
    title: 'CereVu Medical',
    subtitle: 'AI-Powered Objective Pain Measurement',
    description: 'Revolutionary healthcare platform using AI-derived biomarkers from wearable sensors to objectively measure pain and dyspnea. Featured in Nature Magazine. Achieved >90% accuracy across 400+ clinical patients in 5 published studies with Stanford University.',
    longDescription: 'Built the complete technology stack including SwiftUI iOS clinical apps, real-time biosignal streaming APIs (10K+ WebSocket connections), and Next.js healthcare dashboard with MongoDB integration.',
    technologies: ['SwiftUI', 'FastAPI', 'Flask', 'Next.js', 'MongoDB', 'WebSocket', 'CoreUSB', 'Real-time ML'],
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
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
  },
  {
    id: 'clink',
    title: 'Clink Social',
    subtitle: 'University Social Platform',
    description: 'Privacy-first social platform for university students featuring ephemeral content sharing, real-time messaging, friend discovery, and local bar/venue discovery. No ads, no tracking - just authentic campus connections.',
    longDescription: 'Full-stack development with React Native (Expo) mobile app, Remix web platform, native Swift iOS app, PostgreSQL with Prisma ORM, Firebase backend, Plaid payment integration, and MapKit for location services.',
    technologies: ['React Native', 'Expo', 'Remix', 'Swift', 'SwiftUI', 'Prisma', 'PostgreSQL', 'Firebase', 'Plaid', 'MapKit'],
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
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
  },
  {
    id: 'inspecalytics',
    title: 'Inspecalytics',
    subtitle: 'Field Investigation Documentation',
    description: 'Purpose-built platform for forensic engineers and inspectors. Captures field data, organizes it instantly, and generates defensible chain-of-evidence reports with data analytics in hours instead of days.',
    longDescription: 'Native SwiftUI iOS app with offline capability, smart media capture with auto-tagging, one-click photo/evidence report generation (Word/PowerPoint), and modern web landing page.',
    technologies: ['SwiftUI', 'UIKit', 'Core Data', 'CloudKit', 'Word/PowerPoint Generation', 'Offline-First', 'Image Annotation'],
    gradient: 'from-blue-500 via-indigo-500 to-violet-500',
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
  },
  {
    id: 'ev-chatbot',
    title: 'EV Agentic Chatbot',
    subtitle: 'Multi-Agent AI System @ Ford',
    description: 'Enterprise-grade Multi-Agent AI system with LangChain for EV analytics. Features SQL Agent, Document Agent, and LLM Decider with RAG architecture serving analytics across 10 US states.',
    longDescription: 'Architected Chain-of-Thought reasoning pipeline connecting BigQuery data warehouse to natural language interface via Dash/Chainlit UI.',
    technologies: ['LangChain', 'Claude', 'GPT-4', 'RAG', 'FAISS', 'ChromaDB', 'BigQuery', 'Dash', 'Chainlit'],
    gradient: 'from-blue-600 via-blue-500 to-cyan-500',
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
    description: 'Intelligent AI companion application leveraging state-of-the-art language models for personalized conversations, task assistance, and knowledge exploration.',
    technologies: ['Python', 'LangChain', 'OpenAI', 'Claude', 'Vector DB', 'Streamlit'],
    gradient: 'from-pink-500 via-rose-500 to-red-500',
    category: 'AI/ML',
    featured: false,
    icon: Brain,
  },
  {
    id: 'opensync',
    title: 'OpenSync',
    subtitle: 'Neuroscience Research Platform',
    description: 'Open-source platform for multi-modal neuroscience data synchronization. Published in Journal of Neuroscience Methods, enabling researchers worldwide to sync diverse data streams.',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Signal Processing', 'Neuroscience', 'Open Source'],
    gradient: 'from-amber-500 via-orange-500 to-red-500',
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
  const otherProjects = filteredProjects.filter(p => !p.featured || activeCategory !== 'All')

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

        {/* Featured Projects - Large Cards */}
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
                  <div className="relative h-full p-6 md:p-8 rounded-3xl glass overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-glow">
                    {/* Gradient background on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 0.15 : 0 }}
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                    />
                    
                    {/* Animated gradient border */}
                    <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.gradient} p-[1px]`}>
                        <div className="w-full h-full rounded-3xl bg-gray-900" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Header with App Icon */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          {project.image ? (
                            <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-lg shadow-black/20">
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            <div className={`p-3 rounded-2xl bg-gradient-to-br ${project.gradient} bg-opacity-20`}>
                              <project.icon size={28} className="text-white" />
                            </div>
                          )}
                        </div>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: hoveredProject === project.id ? 1 : 0, x: hoveredProject === project.id ? 0 : -10 }}
                          className="flex items-center gap-1 text-white"
                        >
                          <span className="text-sm font-medium">Visit Site</span>
                          <ExternalLink size={16} />
                        </motion.div>
                      </div>

                      {/* Title & subtitle */}
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:gradient-text-static transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4">{project.subtitle}</p>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Stats */}
                      {project.stats && (
                        <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-white/10">
                          {project.stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                              <div className="text-xl font-bold text-white">{stat.value}</div>
                              <div className="text-xs text-gray-500">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-full bg-white/5 text-xs text-gray-400"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2.5 py-1 rounded-full bg-white/5 text-xs text-gray-400">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Shine effect on hover */}
                    <motion.div
                      initial={{ x: '-100%', opacity: 0 }}
                      animate={{ 
                        x: hoveredProject === project.id ? '200%' : '-100%',
                        opacity: hoveredProject === project.id ? 0.3 : 0
                      }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12"
                    />
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
                  : 'text-gray-400 hover:text-white hover:bg-white/5 border border-white/10'
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
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Category badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} text-white`}>
                        {project.category}
                      </span>
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: hoveredProject === project.id ? 1 : 0.5, x: 0 }}
                          whileHover={{ scale: 1.1 }}
                          className="flex items-center gap-1 text-white"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={16} />
                        </motion.a>
                      )}
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
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass text-gray-300 hover:text-white hover:border-white/30 transition-all"
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
