import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Coursepage from './pages/CoursePage/CoursePage';

// Other imports can remain commented out for now
// import Landingpage from './pages/LandingPage/landingpage.jsx'
// import Dashboard from './pages/Dashboard/Dashboard';
// import CertificatePage from './pages/CertificatePage/CertificatePage';
// import InternshipPage from './pages/InternshipPage/InternshipPage';
 import ProfilePage from './pages/ProfilePage/ProfilePage';
// import Chatbot from './pages/ChatBot/Chatbot.jsx';
// import BlogPage from './pages/BlogPage/BlogPage';
// import LabsPage from './pages/Labs/LabsPage';
// import Loginpage from './pages/loginpage/loginpage';
// import Test from './pages/test/Test';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Navbar" element={<Navbar />} />
        {/* Other routes can remain commented out */}
        {/* <Route path="/land" element={<Landingpage />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/certificate" element={<CertificatePage />} /> */}
        {/* <Route path="/internship" element={<InternshipPage />} /> */}
         <Route path="/profile" element={<ProfilePage />} />
        {/* <Route path="/chat" element={<Chatbot />} /> */}
        {/* <Route path="/blog" element={<BlogPage />} /> */}
        {/* <Route path="/labs" element={<LabsPage />} /> */}
        {/* <Route path="/login" element={<Loginpage />} /> */}
      </Routes>
    </Router>
  );
}

export default App