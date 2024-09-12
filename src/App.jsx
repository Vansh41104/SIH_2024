import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InternshipPage from './pages/InternshipPage/InternshipPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <InternshipPage />
  )
}

export default App
