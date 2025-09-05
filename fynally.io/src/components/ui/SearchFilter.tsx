// SearchFilter.tsx
// Reusable search and filter component for listings
import { motion } from 'framer-motion'
import { Search, Filter } from 'lucide-react'

interface FilterOption {
  value: string
  label: string
}

interface SearchFilterProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  filters: {
    label: string
    value: string
    options: FilterOption[]
    onChange: (value: string) => void
    icon?: React.ComponentType<{ className?: string }>
  }[]
  onClearFilters: () => void
  searchPlaceholder?: string
}

const SearchFilter = ({ 
  searchTerm, 
  onSearchChange, 
  filters, 
  onClearFilters,
  searchPlaceholder = "Search..."
}: SearchFilterProps) => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-lg mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        {/* Dynamic Filters */}
        {filters.map((filter, index) => {
          const IconComponent = filter.icon || Filter
          return (
            <div key={index} className="relative">
              <IconComponent className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                value={filter.value}
                onChange={(e) => filter.onChange(e.target.value)}
                aria-label={filter.label}
              >
                {filter.options.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          )
        })}

        {/* Clear Filters */}
        <button
          className="btn-secondary"
          onClick={onClearFilters}
        >
          Clear Filters
        </button>
      </div>
    </motion.div>
  )
}

export default SearchFilter
