// HomePage.tsx
// Landing page showcasing the journey, quick links, and platform value props.
// Uses reusable components for consistency and reduced code duplication.
import { ArrowRight, Star, BookOpen, Briefcase, Building2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FeatureCard, StatsGrid } from '../components/ui'

const HomePage = () => {
  // Reusable animation presets
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  // Four-step journey cards
  const journeySteps = [
    {
      title: 'Student Resources',
      description: 'Study materials, scholarships, and productivity tools to excel in academics',
      icon: BookOpen,
                          color: 'from-blue-500 to-blue-600',
      path: '/student-resources'
    },
    {
      title: 'Learning & Skills',
      description: 'Online courses, certifications, and career guidance from experts',
      icon: Star,
      color: 'from-blue-500 to-blue-600',
      path: '/learning'
    },
    {
      title: 'Internships',
      description: 'Find the perfect internship opportunities and application guidance',
      icon: Briefcase,
  color: 'from-green-500 to-green-600',
      path: '/internships'
    },
    {
      title: 'Employment',
      description: 'Job listings, resume building, and career advancement opportunities',
      icon: Building2,
  color: 'from-orange-500 to-orange-600',
      path: '/employment'
    }
  ]

  // Key stats for social proof
  const stats = [
    { number: '10K+', label: 'Students Helped' },
    { number: '500+', label: 'Courses Available' },
    { number: '1K+', label: 'Internship Listings' },
    { number: '95%', label: 'Success Rate' }
  ]

  return (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
              variants={fadeIn}
            >
              From Classroom to{' '}
              <span className="bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 bg-clip-text text-transparent">
                Career
              </span>
              <br />
              <span className="text-4xl md:text-6xl">Fynally is with You</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
              variants={fadeIn}
            >
              Fynally empowers your journey from learning to earning. 
              Navigate your path from student to professional with confidence.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeIn}
            >
              <Link to="/student-resources" className="btn-primary flex items-center justify-center">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/about" className="btn-secondary">
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          {/* Interactive Journey Visualization */}
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {journeySteps.map((step, index) => (
                <FeatureCard
                  key={step.title}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                  action={{ label: "Explore", href: step.path }}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsGrid stats={stats} columns={4} />
        </div>
      </section>

      {/* CTA Section */}
  <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of students who have successfully navigated their career journey with Fynally
            </p>
            <Link 
              to="/student-resources" 
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors duration-300"
            >
              Begin Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
