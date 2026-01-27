'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  Brain, 
  Code2, 
  Server, 
  Layout, 
  Cloud, 
  Settings,
  Sparkles 
} from 'lucide-react'

const skillCategories = [
  {
    id: 'ai-ml',
    icon: Brain,
    title: 'AI/ML & GenAI',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'LLMs (GPT-4, Claude, Gemini)', level: 95 },
      { name: 'LangChain & Multi-Agent Systems', level: 95 },
      { name: 'RAG (FAISS, ChromaDB, Pinecone)', level: 90 },
      { name: 'Deep Learning (CNN, LSTM, Transformers)', level: 90 },
      { name: 'Time Series (TFT, GluonTS)', level: 85 },
      { name: 'Chain-of-Thought Prompting', level: 95 },
    ],
  },
  {
    id: 'languages',
    icon: Code2,
    title: 'Languages',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Python', level: 98 },
      { name: 'TypeScript/JavaScript', level: 92 },
      { name: 'Swift/SwiftUI', level: 88 },
      { name: 'SQL', level: 90 },
      { name: 'Java', level: 80 },
      { name: 'C++', level: 75 },
    ],
  },
  {
    id: 'backend',
    icon: Server,
    title: 'Backend',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'FastAPI & Flask', level: 95 },
      { name: 'Django & Spring Boot', level: 80 },
      { name: 'REST/WebSocket/GraphQL', level: 90 },
      { name: 'MongoDB & PostgreSQL', level: 88 },
      { name: 'Firebase/Firestore', level: 85 },
      { name: 'Prisma ORM', level: 82 },
    ],
  },
  {
    id: 'frontend',
    icon: Layout,
    title: 'Frontend',
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'React & Next.js', level: 92 },
      { name: 'React Native (Expo)', level: 88 },
      { name: 'SwiftUI/UIKit', level: 85 },
      { name: 'Remix', level: 82 },
      { name: 'Dash & Streamlit', level: 90 },
      { name: 'Chainlit', level: 85 },
    ],
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud & Data',
    color: 'from-sky-500 to-blue-500',
    skills: [
      { name: 'GCP (Vertex AI, BigQuery, Cloud Run)', level: 92 },
      { name: 'AWS (S3, EC2, Lambda)', level: 85 },
      { name: 'Azure OpenAI', level: 80 },
      { name: 'PySpark', level: 88 },
      { name: 'Airflow', level: 85 },
      { name: 'Looker Studio', level: 82 },
    ],
  },
  {
    id: 'devops',
    icon: Settings,
    title: 'DevOps',
    color: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'Docker & Kubernetes', level: 88 },
      { name: 'Terraform', level: 80 },
      { name: 'CI/CD (Tekton, GitHub Actions)', level: 90 },
      { name: 'Fastlane', level: 82 },
      { name: 'OAuth2/SAML', level: 85 },
      { name: 'SonarQube & API Security', level: 80 },
    ],
  },
]

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id)

  const activeSkills = skillCategories.find(c => c.id === activeCategory)

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-accent-blue/5 blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-purple/5 blur-[120px] -z-10" />

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
            <Sparkles size={16} className="text-accent-cyan" />
            Technical Expertise
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">Skills & </span>
            <span className="gradient-text-static">Technologies</span>
          </h2>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              onClick={() => setActiveCategory(category.id)}
              className={`
                relative flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm
                transition-all duration-300
                ${activeCategory === category.id 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                }
              `}
            >
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full glass border-white/20"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <category.icon size={18} className="relative z-10" />
              <span className="relative z-10">{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills display */}
        <AnimatePresence mode="wait">
          {activeSkills && (
            <motion.div
              key={activeSkills.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid gap-4">
                {activeSkills.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-800/50 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1, 
                          delay: index * 0.1,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${activeSkills.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating skill badges - additional visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 flex flex-wrap justify-center gap-3"
        >
          {[
            'GPT-4', 'Claude', 'LangChain', 'RAG', 'React', 'Next.js', 
            'Python', 'TypeScript', 'SwiftUI', 'FastAPI', 'BigQuery', 
            'Docker', 'Kubernetes', 'TensorFlow', 'PyTorch'
          ].map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.03 }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="px-4 py-2 rounded-full glass text-sm text-gray-300 hover:text-white hover:border-white/30 cursor-default transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
