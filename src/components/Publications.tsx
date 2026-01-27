'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BookOpen, ExternalLink, Sparkles, Quote } from 'lucide-react'

const publications = [
  {
    title: 'Localization, Mapping, Navigation in In-Pipe Robots: A Review',
    journal: 'IEEE Access',
    year: '2021',
    authors: 'Razavi, M., et al.',
    description: 'Comprehensive review of autonomous navigation systems for in-pipe inspection robots, covering state-of-the-art localization and mapping techniques.',
    link: '#',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Automatic System for Physical Distance & Mask Monitoring in COVID-19',
    journal: 'SN Computer Science',
    year: '2022',
    authors: 'Razavi, M., et al.',
    description: 'Computer vision system achieving 98% detection accuracy for COVID-19 safety compliance, including physical distancing and mask detection.',
    link: '#',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'ML & Deep Learning for Stress Detection: Scoping Review',
    journal: 'JMIR Mental Health',
    year: '2024',
    authors: 'Razavi, M., et al.',
    description: 'Extensive scoping review of machine learning and deep learning approaches for stress detection using wearable devices and physiological signals.',
    link: '#',
    color: 'from-emerald-500 to-green-500',
  },
  {
    title: 'OpenSync: Synchronizing Measures in Neuroscience',
    journal: 'Journal of Neuroscience Methods',
    year: '2022',
    authors: 'Razavi, M., et al.',
    description: 'Open-source platform for multi-modal neuroscience data synchronization, enabling researchers to align diverse data streams in real-time.',
    link: '#',
    color: 'from-orange-500 to-amber-500',
  },
]

export default function Publications() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  return (
    <section
      id="publications"
      ref={containerRef}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-accent-blue/5 blur-[150px] -z-10" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full bg-accent-purple/5 blur-[120px] -z-10" />

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
            Research
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">Selected </span>
            <span className="gradient-text-static">Publications</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Contributing to the advancement of AI, machine learning, and computer vision 
            through peer-reviewed research.
          </p>
        </motion.div>

        {/* Publications grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {publications.map((pub, index) => (
            <motion.article
              key={pub.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative p-6 md:p-8 rounded-2xl glass overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pub.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${pub.color} bg-opacity-20`}>
                    <BookOpen size={20} className="text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${pub.color} text-white`}>
                      {pub.year}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:gradient-text-static transition-all duration-300 leading-tight">
                  {pub.title}
                </h3>

                {/* Journal */}
                <p className="text-sm text-accent-blue mb-3">{pub.journal}</p>

                {/* Authors */}
                <p className="text-xs text-gray-500 mb-4">{pub.authors}</p>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {pub.description}
                </p>

                {/* Link */}
                <motion.a
                  href={pub.link}
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Read Paper
                  <ExternalLink size={14} />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Research impact quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <div className="relative p-8 rounded-2xl glass">
            <Quote size={40} className="absolute top-4 left-4 text-accent-purple/20" />
            <blockquote className="text-xl md:text-2xl text-gray-300 italic leading-relaxed">
              "Research is seeing what everybody else has seen and thinking what nobody else has thought."
            </blockquote>
            <p className="mt-4 text-gray-500">— Albert Szent-Györgyi</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
