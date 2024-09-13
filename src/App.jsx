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
import Test from './pages/test/Test.jsx'
import TestGuidelinesPage from './pages/TestGuidelinesPage/TestGuidelinesPage.jsx'
import QuizComponent from './pages/QuizPage/QuizPage.jsx'

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
        {/* <Route path="/" element={} /> */}
          <Route path="/land" element={<Landingpage />} />
          <Route path="/dashboard" element={<Dashboard />} />/*Routing Done */
          <Route path="/certificate" element={<CertificatePage />} />/*Routing Done */
          <Route path="/internship" element={<InternshipPage />} />/*Routing Done */
          <Route path="/course" element={<Coursepage />} />/*Routing Done */
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chat" element={<Chatbot />} />
          <Route path="/blog" element={<BlogPage />} />/*Routing Done */
          <Route path="/labs" element={<LabsPage />} />
          <Route path="/login" element={<Loginpage />} />  
          <Route path="/test" element={<Test />} /> 
          <Route path="/quiz" element={<QuizComponent />} /> 
          <Route path="/testguidelinespage" element={<TestGuidelinesPage />} /> 
        </Routes>
      </>
    </Router>
    // <Test/>
    // <Loginpage/>
  )
}

export default App
