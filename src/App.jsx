import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Works from './pages/work'
import Nav from './pages/Nav'
import Hero from './pages/Hero'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Nav/>

      <Hero/>
      
     <Works/>

    </>
  )
}

export default App
