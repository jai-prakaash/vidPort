import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './pages/Nav'
import Hero from './pages/Hero'
import Skills from './pages/Skills'
import WorksVid from './pages/Workvid'
import WorksImg from './pages/WorksImg'
import ContactUs from './pages/Contact'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Nav/>
     
      <Hero/>
      <Skills/>

     <WorksVid/>
     <WorksImg/>
     <ContactUs/>

    </>
  )
}

export default App
