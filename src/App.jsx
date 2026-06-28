import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Skills from './pages/skills/Skills'
import Boglanishla from './pages/boglanishla/Boglanishla'
import Projects from './pages/projects/Projects'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/boglanishla" element={<Boglanishla />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App