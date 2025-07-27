import logoImage from '/logoGreen.png';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileTeeTimesOpen, setMobileTeeTimesOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);

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
            <img src={logoImage} alt="Paradise Golf Logo" className="h-8 w-auto" />
            <div className={`text-2xl font-bold ${textColor}`}>
              Paradise <span className={`ml-2 ${isScrolled ? 'text-green-500' : 'text-green-400'}`}>Golf</span>
            </div>
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
            <a href="#" className={`font-semibold ${textColor} hover:text-green-500 transition`}>Golf Courses</a>

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
              <button className={`font-semibold flex items-center gap-1 ${textColor} hover:text-green-500 transition`}>
                Tee Times
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
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
            <a href="#" className={`font-semibold ${textColor} hover:text-green-500 transition`}>Support</a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-2">
            <div className="hidden md:block text-l font-medium p-3 text-gray-800 bg-green-500 rounded-full">Join Now</div>
            <div className={`hidden md:block text-l font-medium p-2 px-4 border-2 border-green-500 rounded-full ${textColor}`}>Login</div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 h-full w-4/5 bg-white shadow-lg z-50 md:hidden transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <nav className="flex flex-col p-6 space-y-4">
          <a href="#" className="text-black font-semibold text-lg" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#" className="text-black font-semibold text-lg" onClick={() => setIsOpen(false)}>Golf Courses</a>

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
          <button onClick={() => setMobileTeeTimesOpen(!mobileTeeTimesOpen)} className="text-black font-semibold text-lg flex items-center justify-between">
            Tee Times
            <svg className={`h-4 w-4 transform transition-transform ${mobileTeeTimesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileTeeTimesOpen && (
            <div className="pl-4 space-y-2 text-sm">
              <a href="/tee-times/public" className="block text-gray-700" onClick={() => setIsOpen(false)}>Public Tee Times</a>
              <a href="/tee-times/member" className="block text-gray-700" onClick={() => setIsOpen(false)}>Member Tee Times</a>
              <a href="/tee-times/packages" className="block text-gray-700" onClick={() => setIsOpen(false)}>Tee Time Packages</a>
            </div>
          )}

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

          <a href="#" className="text-black font-semibold text-lg" onClick={() => setIsOpen(false)}>Support</a>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
