// About.tsx
// Company mission, values, journey overview, team, impact, and vision sections.
import { motion } from 'framer-motion'
import { Target, Users, Heart, TrendingUp, Award, Lightbulb } from 'lucide-react'
import { PageHeader, Section, FeatureCard, StatsGrid } from '../components/ui'

const About = () => {
  // Core values displayed as cards
  const values = [
    {
      icon: Target,
      title: 'Purpose-Driven',
      description: 'Every feature we build is designed to help you progress on your career journey'
    },
    {
      icon: Users,
      title: 'Community-Focused',
      description: 'We believe in the power of mentorship, networking, and peer support'
    },
    {
      icon: Heart,
      title: 'Student-Centric',
      description: 'Your success is our success. We put students at the heart of everything we do'
    },
    {
      icon: TrendingUp,
      title: 'Growth-Oriented',
      description: 'We\'re committed to continuous improvement and helping you reach new heights'
    }
  ]

  // Placeholder team data
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      background: 'Former Google PM with 8+ years in EdTech',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Product',
      background: 'Ex-Microsoft engineer passionate about student success',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Partnerships',
      background: 'Former McKinsey consultant specializing in career development',
      image: '/api/placeholder/150/150'
    }
  ]

  // Social proof statistics
  const impact = [
    { number: '10,000+', label: 'Students Supported' },
    { number: '85%', label: 'Placement Rate' },
    { number: '500+', label: 'Partner Companies' },
    { number: '50+', label: 'Universities' }
  ]

  // Journey recap mirroring the navigation steps
  const journey = [
    {
      phase: 'Student',
      description: 'Access study materials, scholarships, and academic resources to excel in your education',
  color: 'from-blue-500 to-blue-600'
    },
    {
      phase: 'Learner',
      description: 'Develop new skills through courses, certifications, and mentorship programs',
      color: 'from-blue-500 to-blue-600'
    },
    {
      phase: 'Intern',
      description: 'Gain real-world experience through carefully curated internship opportunities',
  color: 'from-green-500 to-green-600'
    },
    {
      phase: 'Employee',
      description: 'Launch your career with full-time opportunities and continued professional growth',
  color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="About Fynally"
          subtitle="We're on a mission to bridge the gap between education and employment, empowering every student to navigate their journey from learning to earning with confidence."
          accentWord="Fynally"
          accentColor="text-black"
        />

        {/* Mission Statement */}
        <motion.section
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="text-center">
            <div className="w-16 h-16 journey-gradient rounded-xl flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              "Fynally empowers your journey from learning to earning." We believe that every student 
              deserves access to the resources, guidance, and opportunities needed to transform their 
              educational experience into a successful career. Our platform serves as your growth 
              companion, supporting you through every phase of your professional development.
            </p>
          </div>
        </motion.section>

        {/* The Journey */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Your Journey with Fynally
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journey.map((phase, index) => (
              <motion.div
                key={phase.phase}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${phase.color} flex items-center justify-center mb-4`}>
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {phase.phase}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {phase.description}
                  </p>
                </div>
                {index < journey.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Our Values */}
        <Section title="Our Values" className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <FeatureCard
                key={value.title}
                title={value.title}
                description={value.description}
                icon={value.icon}
                index={index}
              />
            ))}
          </div>
        </Section>

        {/* Impact Stats */}
        <section className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Impact
          </h2>
          <StatsGrid stats={impact} columns={4} />
        </section>

        {/* Team */}
        <Section title="Meet Our Team" className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-2xl p-6 shadow-lg text-center card-hover"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.background}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Vision */}
        <motion.section
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-xl mb-6 text-blue-100 max-w-3xl mx-auto">
            To create a world where every student has equal access to career opportunities, 
            regardless of their background, and where the transition from education to employment 
            is seamless, supportive, and empowering.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Join Our Mission
          </button>
        </motion.section>
      </div>
    </div>
  )
}

export default About
