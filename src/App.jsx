import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/HeroSection'
import Benifits from './components/Benifits'
import MembershipPlans from './components/MembershipSection'
import FindCourse from './components/FindCourse'
import CouponsDeals from './components/CouponsSection'
import Gallery from './components/Gallery'
import DownloadAppComponent from './components/DownloadAppSection'
import FootterSection from './components/FootterSection'
import PlansComparison from './components/PlansComparison'
import MembershipPlansSection from './components/MembershipsPlansSection'
import TableComparisons from './components/TableComparisons'
import NewTable from './components/NewTable'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Benifits />
        <FindCourse />
        {/* <MembershipPlansSection /> */}
        {/* <MembershipPlans /> */}
        {/* <PlansComparison /> */}
        {/* <TableComparisons /> */}
        <NewTable />
        <CouponsDeals />
        <Gallery />
        <DownloadAppComponent />
        <FootterSection />
      </div>
    </>
  )
}

export default App
