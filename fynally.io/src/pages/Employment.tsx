// Employment.tsx
// Full-time job discovery with filters, career resources, employer programs, and a success CTA.
import { Building2, MapPin, Filter, Briefcase, FileText, Users, DollarSign } from 'lucide-react'
import { useState, useMemo } from 'react'
import { PageHeader, SearchFilter, ListingCard, Section, CTASection, FeatureCard } from '../components/ui'

const Employment = () => {
  // Filter state
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLevel, setSelectedLevel] = useState('All')
  const [selectedLocation, setSelectedLocation] = useState('All')

  // Sample job dataset; replace with API in production
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechFlow Inc',
      location: 'Remote',
      salary: '$70,000 - $90,000',
      type: 'Full-time',
      level: 'Entry Level',
      description: 'Join our dynamic team to build responsive web applications using React and modern web technologies.',
      requirements: ['Bachelor\'s in Computer Science', '1-2 years React experience', 'JavaScript proficiency'],
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'Marketing Coordinator',
      company: 'Growth Marketing Solutions',
      location: 'New York, NY',
      salary: '$50,000 - $65,000',
      type: 'Full-time',
      level: 'Entry Level',
      description: 'Support marketing campaigns, analyze performance metrics, and coordinate with cross-functional teams.',
      requirements: ['Marketing degree', 'Google Analytics knowledge', 'Strong communication skills'],
      posted: '1 week ago'
    },
    {
      id: 3,
      title: 'Product Manager',
      company: 'Innovation Labs',
      location: 'San Francisco, CA',
      salary: '$90,000 - $120,000',
      type: 'Full-time',
      level: 'Mid Level',
      description: 'Lead product development from conception to launch, working closely with engineering and design teams.',
      requirements: ['3+ years product experience', 'Technical background', 'Agile methodology knowledge'],
      posted: '3 days ago'
    },
    {
      id: 4,
      title: 'Data Analyst',
      company: 'DataDriven Corp',
      location: 'Chicago, IL',
      salary: '$60,000 - $80,000',
      type: 'Full-time',
      level: 'Entry Level',
      description: 'Analyze business data to provide insights and support data-driven decision making.',
      requirements: ['Statistics/Math degree', 'SQL proficiency', 'Python or R experience'],
      posted: '5 days ago'
    },
    {
      id: 5,
      title: 'UX Designer',
      company: 'Creative Digital Agency',
      location: 'Austin, TX',
      salary: '$65,000 - $85,000',
      type: 'Full-time',
      level: 'Mid Level',
      description: 'Design intuitive user experiences for web and mobile applications.',
      requirements: ['Design portfolio', '2+ years UX experience', 'Figma expertise'],
      posted: '1 day ago'
    },
    {
      id: 6,
      title: 'Software Engineer',
      company: 'CloudTech Systems',
      location: 'Seattle, WA',
      salary: '$80,000 - $110,000',
      type: 'Full-time',
      level: 'Entry Level',
      description: 'Develop scalable software solutions using cloud technologies and modern programming languages.',
      requirements: ['Computer Science degree', 'Programming experience', 'Cloud platform knowledge'],
      posted: '4 days ago'
    }
  ]

  const levels = ['All', 'Entry Level', 'Mid Level', 'Senior Level']
  const locations = ['All', 'Remote', 'New York, NY', 'San Francisco, CA', 'Chicago, IL', 'Austin, TX', 'Seattle, WA']

  // Client-side filtering across title/company + seniority + location
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.company.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesLevel = selectedLevel === 'All' || job.level === selectedLevel
      const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation
      
      return matchesSearch && matchesLevel && matchesLocation
    })
  }, [searchTerm, selectedLevel, selectedLocation])

  // Helpful tools for candidates
  const careerResources = [
    {
      title: 'Resume Builder',
      description: 'Create a professional resume with our AI-powered builder',
      icon: FileText,
      action: 'Build Resume'
    },
    {
      title: 'Interview Preparation',
      description: 'Practice with mock interviews and get feedback from experts',
      icon: Users,
      action: 'Start Practice'
    },
    {
      title: 'Salary Negotiation',
      description: 'Learn how to negotiate your salary and benefits package',
      icon: DollarSign,
      action: 'Learn More'
    },
    {
      title: 'Career Coaching',
      description: 'Get personalized career guidance from industry professionals',
      icon: Briefcase,
      action: 'Book Session'
    }
  ]

  // Programs connecting candidates with employers
  const employerPrograms = [
    {
      title: 'Direct Connect Program',
      description: 'Get matched directly with hiring managers at top companies',
      features: ['Exclusive job listings', 'Fast-track applications', 'Direct communication with recruiters']
    },
    {
      title: 'Skills Assessment',
      description: 'Validate your skills with industry-standard assessments',
      features: ['Technical skill tests', 'Soft skill evaluations', 'Certification upon completion']
    },
    {
      title: 'Employer Networking Events',
      description: 'Connect with potential employers at virtual and in-person events',
      features: ['Industry meetups', 'Company showcases', 'Speed networking sessions']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Employment Opportunities"
          subtitle="Take the final step in your journey. Find full-time positions, build your career, and achieve your professional goals."
          accentWord="Employment"
          accentColor="text-orange-600"
        />

        {/* Search and Filters */}
        <SearchFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          searchPlaceholder="Search jobs..."
          filters={[
            {
              label: "Experience Level",
              value: selectedLevel,
              options: levels.map(l => ({ value: l, label: l })),
              onChange: setSelectedLevel,
              icon: Filter
            },
            {
              label: "Location", 
              value: selectedLocation,
              options: locations.map(l => ({ value: l, label: l })),
              onChange: setSelectedLocation,
              icon: MapPin
            }
          ]}
          onClearFilters={() => {
            setSearchTerm('')
            setSelectedLevel('All')
            setSelectedLocation('All')
          }}
        />

        {/* Job Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredJobs.map((job, index) => (
            <ListingCard
              key={job.id}
              id={job.id}
              title={job.title}
              company={job.company}
              location={job.location}
              salary={job.salary}
              type={job.type}
              level={job.level}
              description={job.description}
              requirements={job.requirements}
              posted={job.posted}
              icon={Building2}
              colorScheme={{
                gradient: "from-orange-500 to-orange-600",
                badge: "bg-orange-100 text-orange-800",
                badge_text: "text-orange-600",
                dot: "bg-orange-500"
              }}
              index={index}
              onApply={() => console.log('Apply clicked')}
            />
          ))}
        </div>

        {/* Career Resources */}
        <Section title="Career Resources" className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerResources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <FeatureCard
                  key={resource.title}
                  title={resource.title}
                  description={resource.description}
                  icon={Icon}
                  action={{ label: resource.action, onClick: () => console.log(`${resource.action} clicked`) }}
                  index={index}
                />
              )
            })}
          </div>
        </Section>

        {/* Employer Connect Programs */}
        <Section title="Employer Connect Programs" className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {employerPrograms.map((program) => (
              <div key={program.title} className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {program.description}
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Success CTA */}
        <CTASection
          title="Congratulations on Your Journey!"
          subtitle="You've completed the full journey from student to professional. Continue growing and achieving your career goals."
          primaryAction={{
            label: "Career Development",
            onClick: () => console.log('Career development clicked')
          }}
          secondaryAction={{
            label: "Professional Network",
            onClick: () => console.log('Professional network clicked')
          }}
        />
      </div>
    </div>
  )
}

export default Employment
