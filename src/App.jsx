import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Works from './pages/work'
import Nav from './pages/Nav'
import Hero from './pages/Hero'
import Skills from './pages/Skills'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Nav/>

      <Hero/>
      <Skills/>

     <Works/>

    </>
  )
}

export default App
