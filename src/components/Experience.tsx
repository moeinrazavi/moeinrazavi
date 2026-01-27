'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Building2, Calendar, MapPin, Sparkles, ExternalLink } from 'lucide-react'

const experiences = [
  {
    title: 'Senior Data Scientist & AI/ML Engineer',
    company: 'Ford Motor Company',
    location: 'Detroit, MI',
    period: 'Aug 2023 – Present',
    type: 'Full-time',
    color: 'from-blue-500 to-cyan-500',
    highlights: [
      'Architected Multi-Agent AI Chatbot with LangChain, RAG, Chain-of-Thought—SQL Agent, Document Agent, LLM Decider—serving EV analytics across 10 US states with BigQuery + Dash/Chainlit UI',
      'Built end-to-end Rate Recommendation MVP: Flask APIs, BigQuery pipelines, Dash UI (SAML/ADFS), Cloud Run, Tekton CI/CD',
      'Developed Routine Finder ML using TFT and GluonTS achieving 10% accuracy improvement over heuristics',
      'Created Discharge Analytics Dashboard with Airflow DAGs, BigQuery ETL, and Looker Studio visualization',
      'Processed 10+ TB EV data using PySpark/BigQuery; established MLOps with SonarQube, 42 Crunch API security',
    ],
    technologies: ['LangChain', 'RAG', 'GPT-4', 'Claude', 'BigQuery', 'PySpark', 'Flask', 'Dash', 'Chainlit', 'GCP'],
  },
  {
    title: 'Software Engineer & AI/ML Researcher',
    company: 'CereVu Medical, Inc.',
    location: 'San Francisco Bay Area, CA',
    period: 'Jun 2023 – Present',
    type: 'Full-time',
    color: 'from-purple-500 to-pink-500',
    highlights: [
      'Built Python REST APIs (Flask, FastAPI) with WebSocket for real-time biosignal streaming (10K+ connections)',
      'Developed SwiftUI iOS applications (Vitality, Clinical App) with CoreUSB hardware integration and real-time charts',
      'Created React/Next.js healthcare dashboard with MongoDB, Redux, JWT auth, and real-time data visualization',
    ],
    technologies: ['FastAPI', 'Flask', 'SwiftUI', 'React', 'Next.js', 'MongoDB', 'WebSocket', 'iOS'],
  },
  {
    title: 'Research Assistant & ML Engineer',
    company: 'Texas A&M University',
    location: 'College Station, TX',
    period: 'Sep 2021 – May 2024',
    type: 'Graduate Research',
    color: 'from-orange-500 to-red-500',
    highlights: [
      'Built ML pipelines (TensorFlow, PyTorch) for wearable stress detection achieving 76% accuracy improvement',
      'Created OpenSync—open-source platform for multi-modal neuroscience data synchronization',
      'Developed computer vision system for COVID-19 safety compliance with 98% detection accuracy',
    ],
    technologies: ['TensorFlow', 'PyTorch', 'OpenCV', 'Python', 'Deep Learning', 'Computer Vision'],
  },
]

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%'])

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-accent-purple/5 blur-[150px] -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-accent-blue/5 blur-[120px] -z-10" />

      <div className="container-custom section-padding">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-400 mb-6"
          >
            <Sparkles size={16} className="text-accent-blue" />
            Career Journey
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">Professional </span>
            <span className="gradient-text-static">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Animated line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 transform md:-translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-accent-blue via-accent-purple to-accent-pink"
            />
          </div>

          {/* Experience cards */}
          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-white transform -translate-x-1/2 md:-translate-x-1/2 z-10">
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${exp.color} opacity-50 blur-sm`}
                  />
                </div>

                {/* Content */}
                <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="group relative p-6 md:p-8 rounded-2xl glass card-hover"
                  >
                    {/* Gradient border on hover */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Building2 size={16} />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}>
                        {exp.type}
                      </span>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                          className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-2 shrink-0`} />
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
