import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx'
import Landingpage from './pages/LandingPage/landingpage.jsx'

// Uncomment these imports as you develop and add each page
import Dashboard from './pages/Dashboard/Dashboard'
import CertificatePage from './pages/CertificatePage/CertificatePage'
import InternshipPage from './pages/InternshipPage/InternshipPage'
import Coursepage from './pages/CoursePage/CoursePage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import Chatbot from './pages/ChatBot/Chatbot.jsx'
import BlogPage from './pages/BlogPage/BlogPage'
import LabsPage from './pages/Labs/LabsPage'
import Loginpage from './pages/loginpage/loginpage'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Landingpage />} />
          {/* Add more routes as you develop each page */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/certificate" element={<CertificatePage />} />
          <Route path="/internship" element={<InternshipPage />} />
          <Route path="/course" element={<Coursepage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chat" element={<Chatbot />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/labs" element={<LabsPage />} />
          <Route path="/login" element={<Loginpage />} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App