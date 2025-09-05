// FeatureCard.tsx
// Reusable card component for displaying features, resources, or items with icon, title, description
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  color?: string
  items?: string[]
  action?: {
    label: string
    onClick?: () => void
    href?: string
  }
  index?: number
  className?: string
}

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  color = 'from-blue-500 to-blue-600',
  items,
  action,
  index = 0,
  className = ''
}: FeatureCardProps) => {
  return (
    <motion.div
      className={`bg-white rounded-2xl p-6 shadow-lg card-hover ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center mb-6`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      
      {items && (
        <ul className="space-y-2 mb-6">
          {items.map((item, itemIndex) => (
            <li key={itemIndex} className="flex items-center text-gray-700">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              {item}
            </li>
          ))}
        </ul>
      )}

      {action && (
        <button 
          className="w-full btn-primary"
          onClick={action.onClick}
        >
          {action.label}
        </button>
      )}
    </motion.div>
  )
}

export default FeatureCard
