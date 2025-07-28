
import { useEffect, useState, useMemo } from "react";
import SearchBar from "../components/SearchBar";
import GolfCourseCard from "../components/GolfCourseCard";
import mockGolfCourses from "../data/Data";
import Navbar from "./Navbar";
import NavbarRegular from "./NabarRegular";

// Mock data for golf courses
// const mockGolfCourses = [
//   {
//     "id": 1,
//     "courseName": "Bardmoor GC",
//     "phone": "(727) 392-1234",
//     "website": "http://bardmoorgolf.com",
//     "city": "Largo",
//     "zipCode": "33777"
//   },
//   {
//     "id": 2,
//     "courseName": "Chi Chi Rodriguez GC",
//     "phone": "(727) 726-4673",
//     "website": "http://chichi.org",
//     "city": "Clearwater",
//     "zipCode": "33761"
//   },
//   {
//     "id": 3,
//     "courseName": "Crescent Oaks GC",
//     "phone": "(727) 937-4653",
//     "website": "http://crescentoaksgolf.com",
//     "city": "Tarpon Springs",
//     "zipCode": "34688"
//   },
//   {
//     "id": 4,
//     "courseName": "Dunedin GC",
//     "phone": "(727) 733-7836",
//     "website": "https://www.dunedin.gov/Activities-and-Recreation/Sports-Activities-Camps/Dunedin-Golf-Club",
//     "city": "Dunedin",
//     "zipCode": "34698"
//   },
//   {
//     "id": 5,
//     "courseName": "Lansbrook GC",
//     "phone": "(727) 784-7133",
//     "website": "http://lansbrookgolf.net",
//     "city": "Palm Harbor",
//     "zipCode": "34685"
//   },
//   {
//     "id": 6,
//     "courseName": "Seminole Lake CC",
//     "phone": "(727) 391-6255",
//     "website": "http://seminolelake.com",
//     "city": "Seminole",
//     "zipCode": "33772"
//   },
//   {
//     "id": 7,
//     "courseName": "Tarpon Springs GC",
//     "phone": "(727) 934-5191",
//     "website": "http://ctstfl.us",
//     "city": "Tarpon Springs",
//     "zipCode": "34689"
//   },
//   {
//     "id": 8,
//     "courseName": "Tarpon Woods GC",
//     "phone": "(727) 784-7400",
//     "website": "https://www.google.com/search?q=Tarponwoodgc.com",
//     "city": "Palm Harbor",
//     "zipCode": "34685"
//   },
//   {
//     "id": 9,
//     "courseName": "Wentworth GC",
//     "phone": "(727) 942-4700",
//     "website": "http://wentworthgolfclub.org",
//     "city": "Tarpon Springs",
//     "zipCode": "34688"
//   },
//   {
//     "id": 10,
//     "courseName": "Fox Hollow GC",
//     "phone": "(727) 376-6333",
//     "website": "http://foxhollowgolfclub.com",
//     "city": "Trinity",
//     "zipCode": "34655"
//   },
//   {
//     "id": 11,
//     "courseName": "Lake Jovita G&CC",
//     "phone": "(352) 588-9200",
//     "website": "https://lakejovita.com/",
//     "city": "Dade City",
//     "zipCode": "33525"
//   },
//   {
//     "id": 12,
//     "courseName": "Links of Lake Bernadette",
//     "phone": "(813) 988-7800",
//     "website": "https://www.google.com/search?q=Linksoflakembernadette.com",
//     "city": "Zephyrhills",
//     "zipCode": "33541"
//   },
//   {
//     "id": 13,
//     "courseName": "Plantation Palms GC",
//     "phone": "(813) 996-4463",
//     "website": "http://plantationpalms.net",
//     "city": "Land O' Lakes",
//     "zipCode": "34639"
//   },
//   {
//     "id": 14,
//     "courseName": "Saddlebrook Resort",
//     "phone": "(813) 907-4456",
//     "website": "http://saddlebrook.com",
//     "city": "Wesley Chapel",
//     "zipCode": "33543"
//   },
//   {
//     "id": 15,
//     "courseName": "The Groves G&CC",
//     "phone": "(813) 996-0161",
//     "website": "https://www.google.com/search?q=Thegrovesgolfandcc.com",
//     "city": "Land O' Lakes",
//     "zipCode": "34639"
//   },
//   {
//     "id": 16,
//     "courseName": "Timber Greens CC",
//     "phone": "(727) 372-0789",
//     "website": "http://timbergreens.net",
//     "city": "New Port Richey",
//     "zipCode": "34655"
//   },
//   {
//     "id": 17,
//     "courseName": "Babe Zaharias",
//     "phone": "(813) 631-4174",
//     "website": "http://babezahariasgc.com",
//     "city": "Tampa",
//     "zipCode": "33618"
//   },
//   {
//     "id": 18,
//     "courseName": "Bloomingdale GC",
//     "phone": "(813) 689-4165",
//     "website": "http://bloomingdalegolf.com",
//     "city": "Valrico",
//     "zipCode": "33596"
//   },
//   {
//     "id": 19,
//     "courseName": "Cypress Creek",
//     "phone": "(813) 920-6888",
//     "website": "http://cypresscreekgolfclub.com",
//     "city": "Ruskin",
//     "zipCode": "33573"
//   },
//   {
//     "id": 20,
//     "courseName": "Countryway GC",
//     "phone": "(813) 854-2331",
//     "website": "https://eaglesgolf.com/",
//     "city": "Tampa",
//     "zipCode": "33635"
//   },
//   {
//     "id": 21,
//     "courseName": "Eagles Golf Forest/Lakes",
//     "phone": "(813) 920-6888",
//     "website": "https://eaglesgolf.com/",
//     "city": "Odessa",
//     "zipCode": "33556"
//   },
//   {
//     "id": 22,
//     "courseName": "Heritage Harbor GC",
//     "phone": "(813) 949-6841",
//     "website": "http://heritageharborgolf.com",
//     "city": "Lutz",
//     "zipCode": "33558"
//   },
//   {
//     "id": 23,
//     "courseName": "Heritage Isles GC",
//     "phone": "(813) 907-7447",
//     "website": "http://heritageislesgolf.com",
//     "city": "Tampa",
//     "zipCode": "33647"
//   },
//   {
//     "id": 24,
//     "courseName": "Rocky Point GC",
//     "phone": "(813) 673-4316",
//     "website": "http://rockypointgolf.net",
//     "city": "Tampa",
//     "zipCode": "33607"
//   },
//   {
//     "id": 25,
//     "courseName": "Silver Dollar GC",
//     "phone": "(813) 920-1888",
//     "website": "http://silverdollargolf.com",
//     "city": "Odessa",
//     "zipCode": "33556"
//   },
//   {
//     "id": 26,
//     "courseName": "Summerfield GC",
//     "phone": "(813) 671-3111",
//     "website": "http://summerfieldgc.com",
//     "city": "Riverview",
//     "zipCode": "33579"
//   },
//   {
//     "id": 27,
//     "courseName": "Temple Terrace Golf & CC",
//     "phone": "(813) 988-2603",
//     "website": "http://templeterracegolf.com",
//     "city": "Temple Terrace",
//     "zipCode": "33617"
//   },
//   {
//     "id": 28,
//     "courseName": "TPC Tampa Bay",
//     "phone": "(813) 949-0091",
//     "website": "http://tpctampabay.com",
//     "city": "Lutz",
//     "zipCode": "33558"
//   },
//   {
//     "id": 29,
//     "courseName": "Westchase GC",
//     "phone": "(813) 854-2331",
//     "website": "http://westchasegc.com",
//     "city": "Tampa",
//     "zipCode": "33626"
//   },
//   {
//     "id": 30,
//     "courseName": "World Woods GC",
//     "phone": "(352) 796-5500",
//     "website": "http://worldwoods.com",
//     "city": "Brooksville",
//     "zipCode": "34614"
//   },
//   {
//     "id": 31,
//     "courseName": "Hernando Oaks GC",
//     "phone": "(352) 799-9998",
//     "website": "http://hernandooaksgc.com",
//     "city": "Brooksville",
//     "zipCode": "34604"
//   },
//   {
//     "id": 32,
//     "courseName": "Southern Hills",
//     "phone": "(352) 754-0001",
//     "website": "http://southernhillsgolf.com",
//     "city": "Brooksville",
//     "zipCode": "34604"
//   },
//   {
//     "id": 33,
//     "courseName": "Skyview GC",
//     "phone": "(352) 746-3664",
//     "website": "https://www.google.com/search?q=Skyviewgolfandcountryclub.com",
//     "city": "Hernando",
//     "zipCode": "34442"
//   },
//   {
//     "id": 34,
//     "courseName": "Plantation Bay (Southern Woods)",
//     "phone": "(386) 677-9600",
//     "website": "http://plantationbaygolf.com",
//     "city": "Homosassa",
//     "zipCode": "34446"
//   },
//   {
//     "id": 35,
//     "courseName": "Runnington Hills GC",
//     "phone": "(352) 742-1500",
//     "website": "https://www.google.com/search?q=Runningtonhillsgolf.com",
//     "city": "Ocala",
//     "zipCode": "34472"
//   },
//   {
//     "id": 36,
//     "courseName": "Victoria Hills",
//     "phone": "(386) 738-6000",
//     "website": "http://victoriahillsgolf.com",
//     "city": "DeLand",
//     "zipCode": "32724"
//   },
//   {
//     "id": 37,
//     "courseName": "Juliette Falls Golf",
//     "phone": "(352) 522-0309",
//     "website": "http://juliettefalls.com",
//     "city": "Dunnellon",
//     "zipCode": "34432"
//   },
//   {
//     "id": 38,
//     "courseName": "Waterford Golf & CC",
//     "phone": "(941) 744-9881",
//     "website": "https://www.google.com/search?q=WaterfordGolfandDriversClub.com",
//     "city": "Venice",
//     "zipCode": "34292"
//   },
//   {
//     "id": 39,
//     "courseName": "PGA International",
//     "phone": "(386) 274-5742",
//     "website": "https://www.google.com/search?q=PgaInternational.com",
//     "city": "Port St. Lucie",
//     "zipCode": "34986"
//   }
// ];

// Main GolfCourses Component
const GolfCourses = () => {
  const coursesPerPage = 6; // Number of courses to load per "Load More" click
  const [displayedCourses, setDisplayedCourses] = useState([]);
  const [coursesToLoad, setCoursesToLoad] = useState(coursesPerPage);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState(''); // New state for actual search query

  // Filter courses based on search query before pagination
  const filteredAndSortedCourses = useMemo(() => {
    if (!searchQuery) {
      return mockGolfCourses; // If no search query, return all courses
    }
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    return mockGolfCourses.filter(
      (course) =>
        course.courseName.toLowerCase().includes(lowerCaseSearchQuery) ||
        course.city.toLowerCase().includes(lowerCaseSearchQuery) ||
        course.zipCode.includes(lowerCaseSearchQuery)
    );
  }, [searchQuery]); // Recalculate when searchQuery changes

  // Load initial courses and handle "Load More" based on filtered courses
  useEffect(() => {
    const newCourses = filteredAndSortedCourses.slice(0, coursesToLoad);
    setDisplayedCourses(newCourses);
    setHasMore(coursesToLoad < filteredAndSortedCourses.length);
  }, [coursesToLoad, filteredAndSortedCourses]); // Depend on filteredAndSortedCourses

  const handleLoadMore = () => {
    setCoursesToLoad(prev => prev + coursesPerPage);
  };

  const handleSearchTermChange = (term) => {
    setSearchQuery(term);
    setCoursesToLoad(coursesPerPage); // Reset pagination when a new search is performed
  };

  return (
    <div>
      <NavbarRegular />
      <div className="min-h-screen bg-gray-100 font-sans antialiased px-4 py-8 sm:px-6 lg:px-16">
        {/* Header Section */}
        <header className="mb-8 text-center sm:text-left">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Golf Courses</h1>
          <p className="text-gray-600 text-lg">Discover and explore our partner golf courses</p>
        </header>

        {/* Search and Filter Section */}
        <SearchBar onSearchTermChange={handleSearchTermChange} initialSearchTerm={searchQuery} />

        {/* Courses Found Count */}
        <div className="mb-6 text-gray-700 text-lg font-medium">
          {filteredAndSortedCourses.length} courses found {searchQuery && `for "${searchQuery}"`}
        </div>

        {/* Golf Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {displayedCourses.map((course) => (
            <GolfCourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              Load More
            </button>
          </div>
        )}

        {/* Link to Font Awesome for icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" xintegrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0V4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </div>
    </div>
  );
};
export default GolfCourses;
