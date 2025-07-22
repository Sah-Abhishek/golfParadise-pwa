import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/HeroSection'
import Benifits from './components/Benifits'
import VideoSection from './components/VideoSection'

function App() {

  return (
    <>
      <div className=''>
        <Navbar />
        <Hero />
        <Benifits />
        <VideoSection />
      </div>
    </>
  )
}

export default App
