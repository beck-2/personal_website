import React from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Art from './components/sections/Art'
import Contact from './components/sections/Contact'


function App() {
  return (
    <div className="app">
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
