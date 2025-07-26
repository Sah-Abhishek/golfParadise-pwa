// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
    >
      <div className="sm:mt-4 rounded-full max-w-7xl mx-auto px-4 sm:py-4 sm:px-6 lg:px-8 transition-all duration-300">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className={`text-2xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
            Paradise
            <span className={`ml-2 ${isScrolled ? 'text-green-500' : 'text-green-400'}`}>
              Golf
            </span>
          </div>

          {/* Hamburger icon */}
          <div className="md:hidden ml-auto">
            <button
              onClick={toggleMenu}
              className={`${isScrolled ? 'text-black' : 'text-white'} focus:outline-none`}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex space-x-10 mr-10">
            {["Home", "Golf Courses", "Memberships", "Tee Times", "Events", "Support"].map((item) => (
              <a
                key={item}
                href="#"
                className={`font-semibold text-l flex items-center gap-1 hover:text-gray-500 transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'
                  }`}
              >
                {item}
                {item !== "Home" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>
            ))}
          </div>

          {/* Call-to-action buttons */}
          <div className="flex flex-row items-center space-x-2">
            <div className="hidden md:block text-l font-medium p-3 text-gray-800 bg-green-500 rounded-full">
              Join Now
            </div>
            <div
              className={`hidden md:block text-l font-medium p-2 px-4 border-2 border-green-500 rounded-full ${isScrolled ? 'text-green-500' : 'text-white'
                }`}
            >
              Login
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {/* <div */}
      {/*   className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none' */}
      {/*     }`} */}
      {/*   onClick={() => setIsOpen(false)} */}
      {/* /> */}

      {/* Sliding Mobile Menu from Left */}
      <div
        className={`fixed top-0 left-0 h-full w-4/5 bg-white shadow-lg z-50 md:hidden transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <nav className="flex flex-col p-6 space-y-4">
          {["Home", "Golf Courses", "Memberships", "Tee Times", "Events", "Support"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-black font-semibold text-lg flex items-center justify-between"
              onClick={() => setIsOpen(false)} // closes menu on link click
            >
              {item}
              {item !== "Home" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </a>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
