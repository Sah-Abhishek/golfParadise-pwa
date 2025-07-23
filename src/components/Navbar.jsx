// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-yellow-500">ParadiseGolf</div>

          {/* Hamburger icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-10">
            {["Home", "Courses", "Memberships", "Events", "Support"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white hover:text-blue-500 flex items-center gap-1"
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

          {/* Call-to-action button */}
          <div className="hidden md:block text-l font-medium p-3 text-gray-800 bg-yellow-500 rounded-full">
            Join Now
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {["Home", "Courses", "Memberships", "Events", "Support"].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-white hover:text-blue-500 px-2 py-1"
              >
                {item}
              </a>
            ))}
            <div className="mt-2 text-l font-medium p-3 text-gray-800 bg-yellow-500 rounded-full inline-block">
              Join Now
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
