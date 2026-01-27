'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { 
  GraduationCap, 
  Award, 
  MapPin, 
  Sparkles,
  Briefcase,
  Code2,
  Brain,
  Zap
} from 'lucide-react'

const stats = [
  { 
    label: 'Years Experience', 
    value: '5', 
    suffix: '+',
    icon: Briefcase,
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    label: 'Projects Shipped', 
    value: '20', 
    suffix: '+',
    icon: Code2,
    color: 'from-purple-500 to-pink-500'
  },
  { 
    label: 'Publications', 
    value: '4', 
    suffix: '',
    icon: Brain,
    color: 'from-emerald-500 to-teal-500'
  },
  { 
    label: 'GPA', 
    value: '4.0', 
    suffix: '/4.0',
    icon: Zap,
    color: 'from-orange-500 to-amber-500'
  },
]

const education = [
  {
    degree: 'Ph.D. in Industrial Engineering',
    focus: 'Data Science',
    school: 'Texas A&M University',
    year: '2021 - 2023',
    gpa: '4.0/4.0',
  },
  {
    degree: 'M.S. in Computer Science',
    focus: '',
    school: 'Texas A&M University', 
    year: '2019 - 2021',
    gpa: '4.0/4.0',
  },
]

const certifications = [
  { name: 'Deep Learning Specialization', provider: 'DeepLearning.AI', color: 'from-red-500 to-pink-500' },
  { name: 'Machine Learning Specialization', provider: 'Stanford', color: 'from-blue-500 to-cyan-500' },
  { name: 'NLP Specialization', provider: 'DeepLearning.AI', color: 'from-purple-500 to-violet-500' },
  { name: 'GenAI with LLMs', provider: 'AWS', color: 'from-orange-500 to-amber-500' },
]

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent-purple/10 blur-[150px] -z-10"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-accent-blue/10 blur-[120px] -z-10"
      />

      <div className="container-custom section-padding">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-400 mb-6"
          >
            <Sparkles size={16} className="text-accent-purple" />
            About Me
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">Turning complex problems</span>
            <br />
            <span className="gradient-text-static">into elegant solutions</span>
          </h2>
        </motion.div>

        {/* Stats - Bento Grid Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group relative p-6 md:p-8 rounded-3xl glass overflow-hidden cursor-default"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${stat.color} bg-opacity-20 mb-4`}>
                <stat.icon size={24} className="text-white" />
              </div>
              
              {/* Value */}
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <span>{stat.value}</span>
                <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.suffix}</span>
              </div>
              
              {/* Label */}
              <div className="text-sm text-gray-400">{stat.label}</div>
              
              {/* Decorative corner */}
              <div className={`absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-br ${stat.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Main content - Two columns */}
        <div className="grid lg:grid-cols-5 gap-8 mb-20">
          {/* Left - Bio (3 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Bio card */}
            <div className="relative p-8 md:p-10 rounded-3xl glass overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent-purple/20 to-transparent blur-3xl -z-10" />
              
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                <p>
                  I'm a <span className="text-white font-semibold">Senior AI/ML Engineer & Full-Stack Developer</span> with 
                  over 5 years of experience building production-ready machine learning systems, generative AI 
                  applications, and cross-platform solutions that scale.
                </p>
                <p>
                  My expertise spans the full spectrum of modern AI development — from designing 
                  <span className="text-accent-blue font-medium"> Multi-Agent AI systems</span> and implementing 
                  <span className="text-accent-purple font-medium"> RAG architectures</span> to building beautiful, 
                  responsive frontends with <span className="text-accent-pink font-medium">React</span> and 
                  <span className="text-accent-cyan font-medium"> SwiftUI</span>.
                </p>
                <p>
                  Currently at <span className="text-white font-semibold">Ford Motor Company</span> where 
                  I architect intelligent systems that serve EV analytics across 10 US states, processing 
                  <span className="text-white font-semibold"> 10+ TB of data</span> to deliver actionable insights.
                </p>
              </div>
            </div>

            {/* Education cards */}
            <div className="grid md:grid-cols-2 gap-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="group p-6 rounded-2xl glass hover:border-white/20 transition-all cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                      <GraduationCap size={20} className="text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{edu.degree}</h4>
                      {edu.focus && <p className="text-sm text-accent-purple mb-1">Focus: {edu.focus}</p>}
                      <p className="text-sm text-gray-400">{edu.school}</p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                        <span>{edu.year}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-600" />
                        <span className="text-emerald-400">GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Cards (2 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Certifications card */}
            <div className="p-6 md:p-8 rounded-3xl glass">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <Award size={20} className="text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-default"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cert.color}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">{cert.name}</p>
                      <p className="text-xs text-gray-500">{cert.provider}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Location card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 md:p-8 rounded-3xl glass"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                  <MapPin size={20} className="text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Location</h3>
              </div>
              <p className="text-gray-400 mb-2">McKinney, TX</p>
              <p className="text-sm text-gray-500">Open to relocation & remote opportunities</p>
              
              {/* Mini map decoration */}
              <div className="mt-6 h-24 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 overflow-hidden relative">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <motion.div
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5] 
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-500"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-emerald-500/30 animate-ping" />
              </div>
            </motion.div>

            {/* Quick facts card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-3xl bg-gradient-to-br from-accent-purple/10 via-accent-blue/10 to-accent-pink/10 border border-white/10"
            >
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="text-white font-medium">"The best code is the one that makes complex things simple."</span>
                <br />
                <span className="text-gray-500 text-xs mt-2 block">— My development philosophy</span>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Technologies marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative overflow-hidden py-8"
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
          
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-8">
                {['GPT-4', 'Claude', 'LangChain', 'RAG', 'React', 'Next.js', 'SwiftUI', 'Python', 'TypeScript', 'FastAPI', 'BigQuery', 'Docker', 'Kubernetes', 'TensorFlow', 'PyTorch'].map((tech) => (
                  <span key={`${setIndex}-${tech}`} className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-gray-600 transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
