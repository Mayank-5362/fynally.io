// Internships.tsx
// Discover and filter internship opportunities; includes stories and guidance CTA.
import { Briefcase, MapPin, Filter } from 'lucide-react'
import { useState } from 'react'
import { PageHeader, SearchFilter, ListingCard, CTASection } from '../components/ui'

const Internships = () => {
  // Filter state
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDomain, setSelectedDomain] = useState('All')
  const [selectedLocation, setSelectedLocation] = useState('All')

  // Sample dataset; in production, fetch from API and paginate
  const internships = [
    {
      id: 1,
      title: 'Software Development Intern',
      company: 'TechCorp Solutions',
      location: 'Remote',
      duration: '3 months',
      stipend: '$1,200/month',
      domain: 'Technology',
      description: 'Work on real-world projects using React, Node.js, and cloud technologies.',
      requirements: ['Computer Science student', 'JavaScript knowledge', 'Git proficiency'],
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'Marketing Analytics Intern',
      company: 'Digital Growth Agency',
      location: 'New York, NY',
      duration: '4 months',
      stipend: '$1,000/month',
      domain: 'Marketing',
      description: 'Analyze marketing campaigns and create data-driven insights for client strategies.',
      requirements: ['Marketing/Business student', 'Excel proficiency', 'Analytics mindset'],
      posted: '1 week ago'
    },
    {
      id: 3,
      title: 'UX Design Intern',
      company: 'Creative Studios Inc',
      location: 'San Francisco, CA',
      duration: '6 months',
      stipend: '$1,500/month',
      domain: 'Design',
      description: 'Design user interfaces and conduct user research for mobile and web applications.',
      requirements: ['Design student', 'Figma/Sketch skills', 'Portfolio required'],
      posted: '3 days ago'
    },
    {
      id: 4,
      title: 'Financial Analyst Intern',
      company: 'Investment Partners LLC',
      location: 'Chicago, IL',
      duration: '3 months',
      stipend: '$1,300/month',
      domain: 'Finance',
      description: 'Assist with financial modeling, market research, and investment analysis.',
      requirements: ['Finance/Economics student', 'Excel expertise', 'Analytical skills'],
      posted: '5 days ago'
    },
    {
      id: 5,
      title: 'Content Writing Intern',
      company: 'Media Hub',
      location: 'Remote',
      duration: '4 months',
      stipend: '$800/month',
      domain: 'Content',
      description: 'Create engaging content for blogs, social media, and marketing campaigns.',
      requirements: ['English/Communications student', 'Writing portfolio', 'SEO knowledge'],
      posted: '1 day ago'
    },
    {
      id: 6,
      title: 'Data Science Intern',
      company: 'Analytics Pro',
      location: 'Austin, TX',
      duration: '5 months',
      stipend: '$1,400/month',
      domain: 'Technology',
      description: 'Work with big data, machine learning models, and statistical analysis.',
      requirements: ['STEM student', 'Python/R skills', 'Statistics background'],
      posted: '4 days ago'
    }
  ]

  const domains = ['All', 'Technology', 'Marketing', 'Design', 'Finance', 'Content']
  const locations = ['All', 'Remote', 'New York, NY', 'San Francisco, CA', 'Chicago, IL', 'Austin, TX']

  // Client-side filtering by title/company + domain + location
  const filteredInternships = internships.filter(internship => {
    const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDomain = selectedDomain === 'All' || internship.domain === selectedDomain
    const matchesLocation = selectedLocation === 'All' || internship.location === selectedLocation
    
    return matchesSearch && matchesDomain && matchesLocation
  })

   return (
   <div className="min-h-screen bg-gray-50 py-20">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <PageHeader
           title="Internship Opportunities"
           subtitle="Find the perfect internship to gain real-world experience, build your network, and kickstart your career journey."
           accentWord="Internship"
           accentColor="text-green-600"
         />

         {/* Search and Filters */}
         <SearchFilter
           searchTerm={searchTerm}
           onSearchChange={setSearchTerm}
           searchPlaceholder="Search internships..."
           filters={[
             {
               label: "Domain",
               value: selectedDomain,
               options: domains.map(d => ({ value: d, label: d })),
               onChange: setSelectedDomain,
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
             setSelectedDomain('All')
             setSelectedLocation('All')
           }}
         />

         {/* Internship Listings */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
           {filteredInternships.map((internship, index) => (
             <ListingCard
               key={internship.id}
               id={internship.id}
               title={internship.title}
               company={internship.company}
               location={internship.location}
               duration={internship.duration}
               stipend={internship.stipend}
               domain={internship.domain}
               description={internship.description}
               requirements={internship.requirements}
               posted={internship.posted}
               icon={Briefcase}
               colorScheme={{
                 gradient: "from-green-500 to-green-600",
                 badge: "bg-green-100 text-green-800",
                 badge_text: "text-green-600",
                 dot: "bg-green-500"
               }}
               index={index}
               onApply={() => console.log('Apply clicked')}
             />
           ))}
         </div>

         {/* Application Guidance */}
         <CTASection
           title="Need Application Guidance?"
           subtitle="Get expert tips on crafting the perfect internship application and acing your interviews."
           primaryAction={{
             label: "Application Tips",
             onClick: () => console.log('Application tips clicked')
           }}
           secondaryAction={{
             label: "Explore Full-time Jobs",
             href: "/employment"
           }}
         />
       </div>
     </div>
   )
 }

export default Internships
