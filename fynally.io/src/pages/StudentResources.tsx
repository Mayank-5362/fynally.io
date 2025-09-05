// StudentResources.tsx
// Academic support hub with resource cards and study tips, animated with Framer Motion.
import { motion } from 'framer-motion'
import { BookOpen, Star, Award, Calendar, Users } from 'lucide-react'
import { PageHeader, FeatureCard, Section, CTASection } from '../components/ui'

const StudentResources = () => {
  // Resource categories displayed as feature cards
  const resources = [
    {
      title: 'Study Materials',
      description: 'Comprehensive notes, guides, and reference materials',
      icon: BookOpen,
      items: ['Lecture Notes', 'Study Guides', 'Reference Books', 'Practice Tests'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Scholarships',
      description: 'Financial aid opportunities and application guidance',
      icon: Award,
      items: ['Merit Scholarships', 'Need-based Aid', 'Industry Grants', 'Application Tips'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Productivity Tools',
      description: 'Apps and techniques to maximize your study efficiency',
      icon: Star,
      items: ['Time Management', 'Study Planners', 'Focus Apps', 'Goal Setting'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Academic Calendar',
      description: 'Important dates, deadlines, and exam schedules',
      icon: Calendar,
      items: ['Exam Dates', 'Assignment Deadlines', 'Academic Events', 'Registration'],
      color: 'from-orange-500 to-orange-600'
    }
  ]

  // Quick, actionable tips for students
  const studyTips = [
    'Create a consistent study schedule',
    'Use active learning techniques',
    'Form study groups with classmates',
    'Take regular breaks to stay focused',
    'Practice past papers and mock tests',
    'Seek help from professors during office hours'
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Student Resources"
          subtitle="Everything you need to excel in your academic journey. From study materials to financial aid, we've got you covered."
          accentWord="Resources"
        />

        {/* Resources Grid */}
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <FeatureCard
                key={resource.title}
                title={resource.title}
                description={resource.description}
                icon={resource.icon}
                color={resource.color}
                items={resource.items}
                action={{
                  label: "Access Resources",
                  onClick: () => console.log('Access clicked')
                }}
                index={index}
              />
            ))}
          </div>
        </Section>

        {/* Study Tips Section */}
        <Section 
          className="bg-white rounded-2xl p-8 shadow-lg"
          delay={0.4}
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Study Tips for Success</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {studyTips.map((tip, index) => (
              <motion.div
                key={index}
                className="flex items-start p-4 bg-gray-50 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-700">{tip}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Next Step CTA */}
        <CTASection
          title="Ready to Level Up Your Skills?"
          subtitle="Explore our learning platform to gain new skills and advance your career prospects."
          primaryAction={{
            label: "Explore Learning Resources",
            href: "/learning"
          }}
          delay={0.6}
        />
      </div>
    </div>
  )
}

export default StudentResources
