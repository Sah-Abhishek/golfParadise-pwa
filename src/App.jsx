import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/HeroSection'
import Benifits from './components/Benifits'
import VideoSection from './components/VideoSection'
import MembershipPlans from './components/MembershipSection'
import FindCourse from './components/FindCourse'
import CouponsDeals from './components/CouponsSection'
import Gallery from './components/Gallery'
import DownloadAppComponent from './components/DownloadAppSection'
import FootterSection from './components/FootterSection'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Benifits />
        <VideoSection />
        <MembershipPlans />
        <FindCourse />
        <CouponsDeals />
        <Gallery />
        <DownloadAppComponent />
        <FootterSection />
      </div>
    </>
  )
}

export default App
