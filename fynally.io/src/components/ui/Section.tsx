// Section.tsx
// Reusable section wrapper with consistent spacing and optional animation
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  animate?: boolean
  delay?: number
  title?: string
  subtitle?: string
}

const Section = ({ 
  children, 
  className = '', 
  animate = true, 
  delay = 0,
  title,
  subtitle
}: SectionProps) => {
  const content = (
    <>
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {title && (
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </>
  )

  if (animate) {
    return (
      <motion.section
        className={`mb-16 ${className}`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
      >
        {content}
      </motion.section>
    )
  }

  return (
    <section className={`mb-16 ${className}`}>
      {content}
    </section>
  )
}

export default Section
