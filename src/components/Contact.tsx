'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  Sparkles,
  ArrowRight,
  Copy,
  Check
} from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'razavi.moein94@gmail.com',
    href: 'mailto:razavi.moein94@gmail.com',
    copyable: true,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(979) 676-7486',
    href: 'tel:+19796767486',
    copyable: true,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'McKinney, TX',
    href: '#',
    copyable: false,
  },
]

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/moein-razavi',
    color: 'hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/30',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/moeinrazavi',
    color: 'hover:bg-white/10 hover:text-white hover:border-white/30',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:razavi.moein94@gmail.com',
    color: 'hover:bg-pink-500/10 hover:text-pink-400 hover:border-pink-500/30',
  },
]

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  const handleCopy = async (value: string, label: string) => {
    await navigator.clipboard.writeText(value)
    setCopiedItem(label)
    setTimeout(() => setCopiedItem(null), 2000)
  }

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent-purple/10 blur-[200px] -z-10" />
      
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(0, 113, 227, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

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
            <Sparkles size={16} className="text-accent-pink" />
            Get in Touch
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">Let's Build </span>
            <span className="gradient-text-static">Something Great</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Whether you have a project in mind, a question about AI, or just want to connect — 
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative p-8 md:p-12 rounded-3xl glass overflow-hidden mb-12"
          >
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-3xl gradient-border" />
            
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center"
              >
                <Send size={32} className="text-white" />
              </motion.div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to collaborate?
              </h3>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                I'm always open to discussing new opportunities, innovative ideas, 
                and ways to bring your vision to life.
              </p>

              <motion.a
                href="mailto:razavi.moein94@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                <Mail size={20} />
                Send Me an Email
                <ArrowRight size={20} />
              </motion.a>
            </div>

            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-20 -right-20 w-40 h-40 rounded-full border border-white/5"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full border border-white/5"
            />
          </motion.div>

          {/* Contact info grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-4 mb-12"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative p-6 rounded-2xl glass text-center"
              >
                <div className="p-3 w-fit mx-auto rounded-xl bg-white/5 mb-4 group-hover:bg-white/10 transition-colors">
                  <item.icon size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                <a 
                  href={item.href}
                  className="text-white font-medium hover:gradient-text-static transition-all"
                >
                  {item.value}
                </a>
                {item.copyable && (
                  <motion.button
                    onClick={() => handleCopy(item.value, item.label)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    {copiedItem === item.label ? (
                      <Check size={16} className="text-green-400" />
                    ) : (
                      <Copy size={16} className="text-gray-500" />
                    )}
                  </motion.button>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 rounded-2xl glass text-gray-400 border border-transparent transition-all ${link.color}`}
                aria-label={link.label}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
