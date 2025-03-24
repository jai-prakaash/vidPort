import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Works from './pages/work'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Works/>
    </>
  )
}

export default App
