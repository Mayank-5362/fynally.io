// App.tsx
// Root application component wiring up client-side routing and global layout.
// - Uses React Router for navigation across the journey pages
// - Persists the top Navigation and bottom Footer on all routes
// - Wraps route content in a semantic <main> for accessibility
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation.tsx'
import Footer from './components/Footer.tsx'
import HomePage from './pages/HomePage.tsx'
import StudentResources from './pages/StudentResources.tsx'
import Learning from './pages/Learning.tsx'
import Internships from './pages/Internships.tsx'
import Employment from './pages/Employment.tsx'
import About from './pages/About.tsx'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
    {/* Global top navigation with journey progress */}
        <Navigation />
    {/* Route outlet: page content changes here based on the current URL */}
    <main>
          <Routes>
      {/* Landing page */}
            <Route path="/" element={<HomePage />} />
      {/* Journey pages */}
            <Route path="/student-resources" element={<StudentResources />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/employment" element={<Employment />} />
      {/* Static informational page */}
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
    {/* Global footer with site links and social icons */}
    <Footer />
      </div>
    </Router>
  )
}

export default App
