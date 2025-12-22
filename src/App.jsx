import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Art from './components/sections/Art'
import Contact from './components/sections/Contact'


function App() {
  const [starCursorActive, setStarCursorActive] = useState(() => {
    // Check if star cursor was activated in this session
    return sessionStorage.getItem('starCursorActive') === 'true'
  })

  useEffect(() => {
    // Add click listener for hand-drawn elements
    const handleHandDrawnClick = (e) => {
      if (e.target.classList.contains('hand-drawn-element') || 
          e.target.closest('.hand-drawn-element') ||
          e.target.classList.contains('title-flourish')) {
        setStarCursorActive(true)
        sessionStorage.setItem('starCursorActive', 'true')
      }
    }

    document.addEventListener('click', handleHandDrawnClick)

    return () => {
      document.removeEventListener('click', handleHandDrawnClick)
    }
  }, [])

  return (
    <div className={`app ${starCursorActive ? 'star-cursor-active' : ''}`}>
      <Header />
      <main className="main-content">
        <About />
        <Projects />
        <Art />
        <Contact />
      </main>
    </div>
  )
}

export default App
