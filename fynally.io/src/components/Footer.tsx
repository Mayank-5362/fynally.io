// Footer.tsx
// Global footer featuring brand, quick links, journey shortcuts, and social icons.
// Also renders legal links and dynamic copyright year.
import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react'

const Footer = () => {
  const year = new Date().getFullYear()
  // Social icons and targets. Replace hrefs with real destinations when available.
  const social = [
    { icon: Github, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Mail, href: 'mailto:hello@fynally.io' },
  ]

  return (
  <footer className="bg-white border-t border-gray-200 mt-20">
      {/* Decorative top border using the brand gradient */}
      <div className="h-1 w-full journey-gradient" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-9 h-9 journey-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Fynally</span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Empowering your journey from learning to earning. Guidance, resources, and opportunities at every step.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {social.map(({ icon: Icon, href }) => (
                <a key={href} href={href} aria-label="Social link" className="p-2 rounded-md hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Explore</h3>
            <ul className="space-y-3 text-gray-600">
              <li><Link to="/" className="hover:text-gray-900">Home</Link></li>
              <li><Link to="/about" className="hover:text-gray-900">About</Link></li>
            </ul>
          </div>

          {/* Journey */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Journey</h3>
            <ul className="space-y-3 text-gray-600">
              <li><Link to="/student-resources" className="hover:text-gray-900">Student Resources</Link></li>
              <li><Link to="/learning" className="hover:text-gray-900">Learning</Link></li>
              <li><Link to="/internships" className="hover:text-gray-900">Internships</Link></li>
              <li><Link to="/employment" className="hover:text-gray-900">Employment</Link></li>
            </ul>
          </div>

          {/* Get started */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Get Started</h3>
            <p className="text-gray-600 text-sm mb-4">Take the first step in your career journey today.</p>
            <Link to="/student-resources" className="btn-primary">Start Your Journey</Link>
          </div>
        </div>
      </div>

  <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">© {year} Fynally. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-gray-500 hover:text-gray-700">Terms</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
