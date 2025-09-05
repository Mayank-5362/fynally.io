// PageHeader.tsx
// Reusable page header component with title, subtitle, and optional accent color
import { motion } from 'framer-motion'

interface PageHeaderProps {
  title: string
  subtitle: string
  accentWord?: string
  accentColor?: string
}

const PageHeader = ({ title, subtitle, accentWord, accentColor = 'text-blue-600' }: PageHeaderProps) => {
  const renderTitle = () => {
    if (accentWord) {
      const parts = title.split(accentWord)
      return (
        <>
          {parts[0]}
          <span className={accentColor}>{accentWord}</span>
          {parts[1]}
        </>
      )
    }
    return title
  }

  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        {renderTitle()}
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  )
}

export default PageHeader
