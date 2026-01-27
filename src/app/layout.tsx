import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Moein Razavi | Senior AI/ML Engineer & Full-Stack Developer',
  description: 'Senior AI/ML Engineer & Full-Stack Developer specializing in Generative AI, Multi-Agent Systems, LLMs, and cross-platform solutions. Currently at Ford Motor Company.',
  keywords: ['AI Engineer', 'Machine Learning', 'Full Stack Developer', 'Generative AI', 'LLMs', 'GPT-4', 'Claude', 'LangChain', 'React', 'Next.js', 'Python'],
  authors: [{ name: 'Moein Razavi' }],
  openGraph: {
    title: 'Moein Razavi | Senior AI/ML Engineer',
    description: 'Building the future with AI/ML and Full-Stack Development',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  )
}
