// StatsGrid.tsx
// Reusable statistics display component
import { motion } from 'framer-motion'

interface Stat {
  number: string
  label: string
}

interface StatsGridProps {
  stats: Stat[]
  columns?: 2 | 3 | 4
  className?: string
  delay?: number
}

const StatsGrid = ({ stats, columns = 4, className = '', delay = 0.3 }: StatsGridProps) => {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-3', 
    4: 'grid-cols-2 lg:grid-cols-4'
  }

  return (
    <motion.div
      className={`grid ${gridCols[columns]} gap-8 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: delay + index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            {stat.number}
          </div>
          <div className="text-gray-600 font-medium">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default StatsGrid
