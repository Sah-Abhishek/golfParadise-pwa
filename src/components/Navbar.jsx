import logoImage from '/logoGreen.png';
import { Link } from 'react-router-dom'
import logoImageWhite from '/PG-2-white(1).png'
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileTeeTimesOpen, setMobileTeeTimesOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);
  const [mobileGolfCoursesOpen, setMobileGolfCoursesOpen] = useState(false);
  const [mobileRateSheetOpen, setMobileRateSheetOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = isScrolled ? 'text-black' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="sm:mt-4 rounded-full max-w-7xl mx-auto px-4 sm:py-4 sm:px-6 lg:px-8 transition-all duration-300">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex flex-row gap-x-2">
            <Link to="/">
              <img src={isScrolled ? logoImage : logoImageWhite} alt="Paradise Golf Logo" className="h-10 sm:h-12 w-auto" />
              {/* <div className={`text-2xl font-bold ${textColor}`}> */}
              {/*   Paradise <span className={`ml-2 ${isScrolled ? 'text-red-500' : 'text-red-400'}`}>Golf</span> */}
              {/* </div> */}
            </Link>
          </div>

          {/* Hamburger icon */}
          <div className="md:hidden ml-auto">
            <button onClick={toggleMenu} className={`${textColor} focus:outline-none`} aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 mr-10">
            <a href="#" className={`font-semibold ${textColor} hover:text-green-500 transition`}>Home</a>
            <div className="relative group">
              <button className={`font-semibold flex items-center gap-1 ${textColor} hover:text-green-500 transition`}>
                Golf Courses
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Primary Dropdown */}
              <div className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-md py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  to="/golfcourses"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  All Golf Courses
                </Link>

                {/* Nested Dropdown Wrapper */}
                <div className="relative group/nested">
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-between items-center">
                    Courses Rate Sheet
                    <svg className="h-3 w-3 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Nested Dropdown: only shown on hover of "Courses Rate Sheet" */}
                  <div className="absolute left-full top-0 ml-1 w-56 bg-white shadow-lg rounded-md py-2 z-50 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200">
                    <Link to="https://www.paradisegolfcard.com/pages/summer-2025-participating-clubs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Summer 2025 Member Guide & Rate Sheet
                    </Link>
                    <Link to="https://www.paradisegolfcard.com/pages/winter-24-25-member-guide-rate-sheet" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Winter 24/25 Member Guide & Rate Sheet</Link>
                    <Link to="https://www.paradisegolfcard.com/pages/winter-clubs-location" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Winter Clubs & Locations</Link>
                    <Link to="https://www.paradisegolfcard.com/pages/participating-winter-clubs-24-25" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Participating Winter Clubs</Link>
                    <Link to="https://www.paradisegolfcard.com/pages/member-rules-regulations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Member Rules & Regulations</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Memberships Dropdown */}
            <div className="relative group">
              <button className={`font-semibold flex items-center gap-1 ${textColor} hover:text-green-500 transition`}>
                Memberships
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-md py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="https://www.paradisegolfcard.com/products/summer-winter-annual-combo-card-valid-apr-1-oct-31-2025" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Annual Combo Membership</a>
                <a href="https://www.paradisegolfcard.com/products/summer-2025-paradise-golf-membership-198-total" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Summer Membership</a>
                <a href="https://www.paradisegolfcard.com/products/early-renewal-special-winter-25-26-membership-105-total" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Winter Membership</a>
              </div>
            </div>

            {/* Tee Times Dropdown */}
            <div className="relative group">
              <Link to='https://www.paradiseteetimes.com/' className={`font-semibold flex items-center gap-1 ${textColor} hover:text-green-500 transition`}>
                Tee Times
                {/* <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"> */}
                {/*   <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /> */}
                {/* </svg> */}
              </Link>
              {/* <div className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-md py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"> */}
              {/*   <a href="/tee-times/public" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Public Tee Times</a> */}
              {/*   <a href="/tee-times/member" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Member Tee Times</a> */}
              {/*   <a href="/tee-times/packages" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tee Time Packages</a> */}
              {/* </div> */}
            </div>

            {/* Events Dropdown */}
            <div className="relative group">
              <button className={`font-semibold flex items-center gap-1 ${textColor} hover:text-green-500 transition`}>
                Events
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-md py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="/events/upcoming" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Upcoming Events</a>
                {/* <a href="/events/tournaments" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tournaments</a> */}
                <a href="/events/past" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Event Pairings & Results</a>
              </div>
            </div>

            {/* Support */}
            <div className="relative group">
              <a href="#" className={`font-semibold ${textColor} hover:text-green-500 transition flex items-center gap-1 cursor-pointer`}>
                Contact
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="/aboutus" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About Us</a>
                <a href="/contactus" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact Us</a>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-2">
            <div className={`hidden md:block text-l font-medium p-3 text-white text-gray-800 bg-green-500 rounded-full`}> Buy Now</div>
            {/* <div className={`hidden md:block text-l font-medium p-2 px-4 border-2 border-green-500 rounded-full ${textColor}`}>Login</div> */}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 h-full w-4/5 bg-white shadow-lg z-50 md:hidden transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <nav className="flex flex-col p-6 space-y-4">
          <Link to="/" className="text-black font-semibold text-lg" onClick={() => setIsOpen(false)}>Home</Link>
          {/* Mobile Golf Courses Dropdown */}
          <button onClick={() => setMobileGolfCoursesOpen(!mobileGolfCoursesOpen)} className="text-black font-semibold text-lg flex items-center justify-between">
            Golf Courses
            <svg className={`h-4 w-4 transform transition-transform ${mobileGolfCoursesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileGolfCoursesOpen && (
            <div className="pl-4 space-y-2 text-sm">
              <Link to="/golfcourses" className="block text-gray-700" onClick={() => setIsOpen(false)}>All Golf Courses</Link>

              {/* Nested Dropdown: Courses Rate Sheet */}
              <button onClick={() => setMobileRateSheetOpen(!mobileRateSheetOpen)} className="w-full text-left text-gray-700 flex items-center justify-between">
                Courses Rate Sheet
                <svg className={`h-4 w-4 transform transition-transform ${mobileRateSheetOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileRateSheetOpen && (
                <div className="pl-4 space-y-2">
                  <a href="https://www.paradisegolfcard.com/pages/summer-2025-participating-clubs" className="block text-gray-700" onClick={() => setIsOpen(false)}>Summer 2025 Member Guide & Rate Sheet</a>
                  <a href="https://www.paradisegolfcard.com/pages/winter-24-25-member-guide-rate-sheet" className="block text-gray-700" onClick={() => setIsOpen(false)}>Winter 24/25 Member Guide & Rate Sheet</a>
                  <a href="https://www.paradisegolfcard.com/pages/winter-clubs-location" className="block text-gray-700" onClick={() => setIsOpen(false)}>Winter Clubs & Locations</a>
                  <a href="https://www.paradisegolfcard.com/pages/participating-winter-clubs-24-25" className="block text-gray-700" onClick={() => setIsOpen(false)}>Participating Winter Clubs</a>
                  <a href="https://www.paradisegolfcard.com/pages/member-rules-regulations" className="block text-gray-700" onClick={() => setIsOpen(false)}>Member Rules & Regulations</a>
                </div>
              )}
            </div>
          )}

          {/* Mobile Memberships Dropdown */}
          <button onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)} className="text-black font-semibold text-lg flex items-center justify-between">
            Memberships
            <svg className={`h-4 w-4 transform transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileDropdownOpen && (
            <div className="pl-4 space-y-2 text-sm">
              <a href="https://www.paradisegolfcard.com/products/summer-winter-annual-combo-card-valid-apr-1-oct-31-2025" className="block text-gray-700" onClick={() => setIsOpen(false)}>Annual Combo Membership</a>
              <a href="https://www.paradisegolfcard.com/products/summer-2025-paradise-golf-membership-198-total" className="block text-gray-700" onClick={() => setIsOpen(false)}>Summer Membership</a>
              <a href="https://www.paradisegolfcard.com/products/early-renewal-special-winter-25-26-membership-105-total" className="block text-gray-700" onClick={() => setIsOpen(false)}>Winter Membership</a>
            </div>
          )}

          {/* Mobile Tee Times Dropdown */}
          <Link to='https://www.paradiseteetimes.com/' className="text-black font-semibold text-lg flex items-center justify-between">
            Tee Times
          </Link>

          {/* Mobile Events Dropdown */}
          <button onClick={() => setMobileEventsOpen(!mobileEventsOpen)} className="text-black font-semibold text-lg flex items-center justify-between">
            Events
            <svg className={`h-4 w-4 transform transition-transform ${mobileEventsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileEventsOpen && (
            <div className="pl-4 space-y-2 text-sm">
              <a href="/events/upcoming" className="block text-gray-700" onClick={() => setIsOpen(false)}>Upcoming Events</a>
              <a href="/events/tournaments" className="block text-gray-700" onClick={() => setIsOpen(false)}>Tournaments</a>
              <a href="/events/past" className="block text-gray-700" onClick={() => setIsOpen(false)}>Past Events</a>
            </div>
          )}

          <a href="#" className="text-black font-semibold text-lg" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>
      </div>
    </nav >
  );
};

export default Navbar;
