// Navigation.tsx
// Responsive top navigation bar with a visual "journey" progress indicator.
// Highlights the current phase based on the URL path and shows step-to-step flow.
// Desktop: progress bar with labeled steps; Mobile: compact icon-only steps and a collapsible menu.
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  BookOpen, 
  Briefcase, 
  Building2, 
  Menu, 
  X,
  ArrowRight
} from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Ordered journey steps used to render the progress UI and compute current step
  const journeySteps = [
    {
      path: '/student-resources',
      title: 'Student',
      icon: GraduationCap,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      path: '/learning',
      title: 'Learner',
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      path: '/internships',
      title: 'Intern',
      icon: Briefcase,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      path: '/employment',
      title: 'Employee',
      icon: Building2,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ]

  // Returns the index of the current route within the journey steps; -1 if not in the journey
  const getCurrentStepIndex = () =>
    journeySteps.findIndex(step => step.path === location.pathname)

  const currentStepIndex = getCurrentStepIndex()

  return (
  <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 journey-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Fynally</span>
          </Link>

          {/* Journey Progress Bar - Desktop */}
          <div className="hidden lg:flex items-center space-x-4 flex-1 max-w-2xl mx-8">
            <div className="flex items-center w-full">
              {journeySteps.map((step, index) => {
                const Icon = step.icon
                const isActive = currentStepIndex === index
                const isCompleted = currentStepIndex > index
                
                return (
                  <div key={step.path} className="flex items-center flex-1">
                    <Link 
                      to={step.path}
                      className={"flex items-center space-x-2 p-3 rounded-lg transition-all duration-300 hover:bg-gray-50"}
                    >
                      {/* Step icon bubble with state-aware color coding */}
                      <div className={`p-2 rounded-full ${
                        isActive ? step.bgColor : isCompleted ? 'bg-gray-100' : 'bg-gray-50'
                      }`}>
                        <Icon className={`w-5 h-5 ${
                          isActive ? step.color : isCompleted ? 'text-gray-600' : 'text-gray-400'
                        }`} />
                      </div>
                      {/* Step label */}
                      <span className={`font-medium ${
                        isActive ? step.color : isCompleted ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {step.title}
                      </span>
                    </Link>
                    
                    {/* Connector arrow between steps */}
                    {index < journeySteps.length - 1 && (
                      <ArrowRight className={`w-4 h-4 mx-2 ${
                        isCompleted ? 'text-gray-600' : 'text-gray-300'
                      }`} />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Navigation Links - Desktop */}
      <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/about"
        className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link to="/student-resources" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
      <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Progress Bar */}
        <div className="lg:hidden pb-4">
          <div className="flex items-center justify-between">
    {journeySteps.map((step, index) => {
              const Icon = step.icon
              const isActive = currentStepIndex === index
              const isCompleted = currentStepIndex > index
              
              return (
                <Link
                  key={step.path}
                  to={step.path}
                  className={"flex flex-col items-center p-2 rounded-lg"}
                  onClick={() => setIsOpen(false)}
                >
                  <div className={`p-2 rounded-full ${
                    isActive ? step.bgColor : isCompleted ? 'bg-gray-100' : 'bg-gray-50'
                  }`}>
                    <Icon className={`w-4 h-4 ${
                      isActive ? step.color : isCompleted ? 'text-gray-600' : 'text-gray-400'
                    }`} />
                  </div>
                  <span className={`text-xs font-medium mt-1 ${
                    isActive ? step.color : isCompleted ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
      className="lg:hidden bg-white border-t border-gray-200"
        >
          <div className="px-4 py-4 space-y-2">
            <Link
              to="/about"
        className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link to="/student-resources" className="w-full btn-primary" onClick={() => setIsOpen(false)}>
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navigation
