// Learning.tsx
// Skills development hub: featured courses, mentorship programs, and certifications.
import { motion } from 'framer-motion'
import { BookOpen, Award, Users, Clock, Star } from 'lucide-react'
import { PageHeader, FeatureCard, Section, CTASection } from '../components/ui'

const Learning = () => {
  // Highlighted course catalog. In production, replace with API data.
  const courses = [
    {
      title: 'Communication Skills',
      category: 'Soft Skills',
      duration: '4 weeks',
      rating: 4.8,
      students: 2341,
      image: '/api/placeholder/300/200',
      skills: ['Public Speaking', 'Written Communication', 'Active Listening'],
      level: 'Beginner'
    },
    {
      title: 'Project Management',
      category: 'Business',
      duration: '6 weeks',
      rating: 4.9,
      students: 1876,
      image: '/api/placeholder/300/200',
      skills: ['Agile Methodology', 'Team Leadership', 'Risk Management'],
      level: 'Intermediate'
    },
    {
      title: 'Data Analysis with Python',
      category: 'Technical',
      duration: '8 weeks',
      rating: 4.7,
      students: 3210,
      image: '/api/placeholder/300/200',
      skills: ['Python Programming', 'Data Visualization', 'Statistical Analysis'],
      level: 'Intermediate'
    },
    {
      title: 'Digital Marketing',
      category: 'Marketing',
      duration: '5 weeks',
      rating: 4.6,
      students: 1542,
      image: '/api/placeholder/300/200',
      skills: ['SEO', 'Social Media Marketing', 'Content Strategy'],
      level: 'Beginner'
    }
  ]

  // Mentorship offerings to complement coursework
  const mentorshipPrograms = [
    {
      title: 'Career Guidance Mentorship',
      description: 'One-on-one sessions with industry professionals to guide your career path',
      duration: '3 months',
      sessions: '6 sessions',
      mentor: 'Industry Expert'
    },
    {
      title: 'Skill Development Coaching',
      description: 'Personalized coaching to develop specific technical or soft skills',
      duration: '2 months',
      sessions: '8 sessions',
      mentor: 'Skill Specialist'
    },
    {
      title: 'Interview Preparation',
      description: 'Mock interviews and feedback to prepare for job applications',
      duration: '1 month',
      sessions: '4 sessions',
      mentor: 'HR Professional'
    }
  ]

  // Popular industry certifications
  const certifications = [
    'Google Digital Marketing Certificate',
    'AWS Cloud Practitioner',
    'Project Management Professional (PMP)',
    'Certified Scrum Master (CSM)',
    'Microsoft Office Specialist',
    'Adobe Creative Suite Certification'
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Learning & Skills"
          subtitle="Enhance your skills with our comprehensive online courses, mentorship programs, and industry-recognized certifications."
          accentWord="Skills"
        />

        {/* Featured Courses */}
        <Section title="Featured Courses">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {course.category}
                    </span>
                    <span className="text-gray-500 text-sm">{course.level}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <div className="flex items-center mb-4 text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="mr-4">{course.duration}</span>
                    <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                    <span className="mr-1">{course.rating}</span>
                    <span>({course.students} students)</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Skills you'll learn:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="w-full btn-primary">
                    Enroll Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Mentorship Programs */}
        <Section title="Mentorship Programs" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentorshipPrograms.map((program, index) => (
              <FeatureCard
                key={program.title}
                title={program.title}
                description={program.description}
                icon={Users}
                color="from-green-500 to-green-600"
                index={index}
                className="text-center"
                action={{
                  label: "Apply Now",
                  onClick: () => console.log('Apply clicked')
                }}
              />
            ))}
          </div>
        </Section>

        {/* Certifications */}
        <Section 
          className="bg-white rounded-2xl p-8 shadow-lg"
          delay={0.5}
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mr-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Industry Certifications</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Earn recognized certifications that validate your skills and boost your career prospects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
              >
                <Award className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Next Step CTA */}
        <CTASection
          title="Ready to Apply Your Skills?"
          subtitle="Explore internship opportunities to gain real-world experience and build your professional network."
          primaryAction={{
            label: "Find Internships",
            href: "/internships"
          }}
          delay={0.7}
        />
      </div>
    </div>
  )
}

export default Learning
