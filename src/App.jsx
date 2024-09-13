import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InternshipPage from './pages/InternshipPage/InternshipPage'
import TestPages from "./pages/TestPages/TestPages"


function App() {
  const [count, setCount] = useState(0)

  return (
    // <InternshipPage />
    <TestPages/>
  )
}

export default App
