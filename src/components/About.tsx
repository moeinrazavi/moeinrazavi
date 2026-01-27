'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { GraduationCap, Award, MapPin, Sparkles } from 'lucide-react'

const stats = [
  { label: 'Years Experience', value: '5+', suffix: '' },
  { label: 'Projects Delivered', value: '20', suffix: '+' },
  { label: 'Publications', value: '4', suffix: '' },
  { label: 'GPA', value: '4.0', suffix: '/4.0' },
]

const highlights = [
  {
    icon: GraduationCap,
    title: 'Education',
    items: [
      'Ph.D. in Industrial Engineering (Data Science) - Texas A&M',
      'M.S. in Computer Science - Texas A&M',
    ],
  },
  {
    icon: Award,
    title: 'Certifications',
    items: [
      'Deep Learning Specialization - DeepLearning.AI',
      'Machine Learning Specialization - Stanford',
      'NLP Specialization - DeepLearning.AI',
      'GenAI with LLMs - AWS',
    ],
  },
  {
    icon: MapPin,
    title: 'Location',
    items: [
      'McKinney, TX',
      'Open to relocation',
    ],
  },
]

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

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
      {/* Background decoration */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-cyan/10 blur-[150px] -z-10"
      />

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
            <Sparkles size={16} className="text-accent-purple" />
            About Me
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">Turning complex problems</span>
            <br />
            <span className="gradient-text-static">into elegant solutions</span>
          </h2>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>
                I'm a <span className="text-white font-medium">Senior AI/ML Engineer & Full-Stack Developer</span> with 
                over 5 years of experience building production-ready machine learning systems, generative AI 
                applications, and cross-platform solutions that scale.
              </p>
              <p>
                My expertise spans the full spectrum of modern AI development — from designing 
                <span className="text-accent-blue"> Multi-Agent AI systems</span> and implementing 
                <span className="text-accent-purple"> RAG architectures</span> to building beautiful, 
                responsive frontends with <span className="text-accent-pink">React</span> and 
                <span className="text-accent-cyan"> SwiftUI</span>.
              </p>
              <p>
                Currently, I'm at <span className="text-white font-medium">Ford Motor Company</span> where 
                I architect intelligent systems that serve EV analytics across 10 US states, processing 
                <span className="text-white"> 10+ TB of data</span> to deliver actionable insights.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.value}
                    <span className="text-accent-purple">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Highlights cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group p-6 rounded-2xl glass card-hover cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 group-hover:from-accent-purple/30 group-hover:to-accent-blue/30 transition-colors">
                    <highlight.icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {highlight.title}
                    </h3>
                    <ul className="space-y-1.5">
                      {highlight.items.map((item, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-accent-purple" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative text-center py-12"
        >
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          </div>
          <blockquote className="relative inline-block px-8 bg-black">
            <span className="text-5xl text-accent-purple/30 absolute -top-4 -left-2">"</span>
            <p className="text-xl md:text-2xl text-gray-300 italic">
              The best code is the one that makes complex things simple.
            </p>
            <span className="text-5xl text-accent-purple/30 absolute -bottom-8 -right-2">"</span>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
