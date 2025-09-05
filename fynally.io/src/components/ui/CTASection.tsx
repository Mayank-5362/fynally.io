// CTASection.tsx
// Reusable call-to-action section with gradient background
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface CTASectionProps {
  title: string
  subtitle: string
  primaryAction?: {
    label: string
    href?: string
    onClick?: () => void
  }
  secondaryAction?: {
    label: string
    href?: string
    onClick?: () => void
  }
  gradient?: string
  textColor?: string
  delay?: number
  children?: ReactNode
}

const CTASection = ({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  gradient = 'from-blue-600 to-blue-700',
  textColor = 'text-white',
  delay = 0.5,
  children
}: CTASectionProps) => {
  return (
    <motion.div
      className={`bg-gradient-to-r ${gradient} rounded-2xl p-8 ${textColor} text-center`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-xl mb-6 opacity-90 max-w-3xl mx-auto">
        {subtitle}
      </p>
      
      {children}
      
      {(primaryAction || secondaryAction) && (
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryAction && (
            primaryAction.href ? (
              <a
                href={primaryAction.href}
                className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                {primaryAction.label}
              </a>
            ) : (
              <button
                onClick={primaryAction.onClick}
                className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                {primaryAction.label}
              </button>
            )
          )}
          
          {secondaryAction && (
            secondaryAction.href ? (
              <a
                href={secondaryAction.href}
                className="bg-opacity-20 bg-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-colors inline-flex items-center justify-center"
              >
                {secondaryAction.label}
              </a>
            ) : (
              <button
                onClick={secondaryAction.onClick}
                className="bg-opacity-20 bg-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-colors"
              >
                {secondaryAction.label}
              </button>
            )
          )}
        </div>
      )}
    </motion.div>
  )
}

export default CTASection
