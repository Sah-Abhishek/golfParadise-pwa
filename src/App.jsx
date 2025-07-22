import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/HeroSection'
import Benifits from './components/Benifits'
import VideoSection from './components/VideoSection'
import MembershipPlans from './components/MembershipSection'
import FindCourse from './components/FindCourse'
import CouponsDeals from './components/CouponsSection'
import Gallery from './components/Gallery'

function App() {

  return (
    <>
      <div className=''>
        <Navbar />
        <Hero />
        <Benifits />
        <VideoSection />
        <MembershipPlans />
        <FindCourse />
        <CouponsDeals />
        <Gallery />
      </div>
    </>
  )
}

export default App
