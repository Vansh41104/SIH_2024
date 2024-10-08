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
import ProfileEdit from './pages/ProfilePage/ProfileEditPage'
import Chatbot from './pages/ChatBot/Chatbot.jsx'
import BlogPage from './pages/BlogPage/BlogPage'
import LabsPage from './pages/Labs/LabsPage'
import Loginpage from './pages/loginpage/loginpage'
import TestGuidelinesPage from './pages/TestGuidelinesPage/TestGuidelinesPage.jsx'
import QuizComponent from './pages/QuizPage/QuizPage.jsx'
import ABCPage from './pages/ABCPage/ABC'
import { Outlet } from 'react-router-dom';
import ThreeDModelViewer from './pages/ThreeJSPage/ThreeJSPage.jsx';
//import landingpage from './pages/LandingPage/landingpage.jsx';
const LayoutWithNavbar = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);
function App() {
  return (
  <Router>
    <Routes>
      {/* Routes with Navbar */}
      <Route element={<LayoutWithNavbar />}>
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/certificate" element={<CertificatePage />} />
        <Route path="/internship" element={<InternshipPage />} />
        <Route path="/course" element={<Coursepage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profileedit" element={<ProfileEdit />} />
        <Route path="/chat" element={<Chatbot />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/testguidelinespage" element={<TestGuidelinesPage />} />
        <Route path="/abc" element={<ABCPage />} />
        <Route path="/threejs" element={<ThreeDModelViewer />} />
      </Route>

      {/* Routes without Navbar */}
      <Route path="/" element={<Landingpage />} />
      <Route path="/labs" element={<LabsPage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/quiz" element={<QuizComponent />} />
    </Routes>
  </Router>
);
}

export default App
