import './App.css'
import GolfCourses from './components/GolfCourses'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/golfcourses" element={<GolfCourses />} />
      </Routes>
    </>
  )
}

export default App
