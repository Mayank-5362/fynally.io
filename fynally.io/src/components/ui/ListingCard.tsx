// ListingCard.tsx
// Reusable card for job/internship listings with consistent layout and metadata
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface ListingCardProps {
  id: string | number
  title: string
  company: string
  location: string
  duration?: string
  salary?: string
  stipend?: string
  type?: string
  level?: string
  domain?: string
  description: string
  requirements: string[]
  posted: string
  icon: LucideIcon
  colorScheme: {
    gradient: string
    badge: string
    badge_text: string
    dot: string
  }
  index?: number
  onApply?: () => void
}

const ListingCard = ({
  title,
  company,
  location,
  duration,
  salary,
  stipend,
  type,
  level,
  domain,
  description,
  requirements,
  posted,
  icon: Icon,
  colorScheme,
  index = 0,
  onApply
}: ListingCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-lg card-hover"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className={`w-12 h-12 bg-gradient-to-r ${colorScheme.gradient} rounded-lg flex items-center justify-center mr-4`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              {title}
            </h3>
            <p className={`font-medium ${colorScheme.badge_text}`}>{company}</p>
          </div>
        </div>
        <span className={`${colorScheme.badge} text-xs font-medium px-2.5 py-0.5 rounded`}>
          {domain || level}
        </span>
      </div>

      <p className="text-gray-600 mb-4">{description}</p>

      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div className="flex items-center text-gray-600">
          <Icon className="w-4 h-4 mr-2" />
          {location}
        </div>
        {(duration || type) && (
          <div className="flex items-center text-gray-600">
            <Icon className="w-4 h-4 mr-2" />
            {duration || type}
          </div>
        )}
        {(salary || stipend) && (
          <div className="flex items-center text-gray-600">
            <Icon className="w-4 h-4 mr-2" />
            {salary || stipend}
          </div>
        )}
        <div className="text-gray-500 text-right">
          Posted {posted}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Requirements:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {requirements.map((req, reqIndex) => (
            <li key={reqIndex} className="flex items-center">
              <div className={`w-1.5 h-1.5 ${colorScheme.dot} rounded-full mr-2`}></div>
              {req}
            </li>
          ))}
        </ul>
      </div>

      <button 
        className="w-full btn-primary"
        onClick={onApply}
      >
        Apply Now
      </button>
    </motion.div>
  )
}

export default ListingCard
