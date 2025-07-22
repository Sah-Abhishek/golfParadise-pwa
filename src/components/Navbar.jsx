// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4  py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-gray-800 text-yellow-500">
            ParadiseGolf
          </div>

          <div className="hidden md:flex space-x-15">
            <a href="#" className="text-white hover:text-blue-500">Home</a>
            <a href="#" className="text-white hover:text-blue-500 flex items-center gap-1">
              Courses
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
            </a>

            <a href="#" className="text-white hover:text-blue-500 flex items-center gap-1">
              Memberships
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
            </a>
            <a href="#" className="text-white hover:text-blue-500 flex items-center gap-1">
              Events
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
            </a>
            <a href="#" className="text-white hover:text-blue-500 flex items-center gap-1">
              Support
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
            </a>
          </div>
          <div className="text-l font-medium p-3 text-gray-800 bg-yellow-500 rounded-full">
            Join Now
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
