import React from "react";
import mapImage from "../assets/findCourse.png";
import { Search } from "lucide-react";

export default function CourseFinder() {
  return (
    <section className="bg-white mt-4 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Find Courses Near You
          </h2>
          <p className="text-gray-600 mb-8">
            Discover top-rated golf courses in your area that accept Paradise Golf Card.
            Filter by distance, amenities, and more.
          </p>

          {/* Mobile Image */}
          <div className="mb-8 lg:hidden">
            <img
              src={mapImage}
              alt="Map showing course locations"
              className="w-full rounded-2xl"
            />
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            {/* Input Fields */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <input
                type="text"
                placeholder="City or zip code"
                className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              <select className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none">
                <option>25 miles</option>
                <option>10 miles</option>
                <option>50 miles</option>
              </select>
            </div>

            {/* Filter Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["Driving Range", "Pro Shop", "Restaurant"].map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {tag} ✕
                </span>
              ))}
            </div>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-semibold flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              <span>Find Courses</span>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-4 text-sm text-gray-600 flex justify-between">
            <span>Showing 3 of 27 nearby courses</span>
            <a href="#" className="text-blue-600 hover:underline">
              View All Courses
            </a>
          </div>
        </div>

        {/* Right Section - Map (hidden on mobile) */}
        <div className="w-full lg:w-1/2 hidden lg:block">
          <img
            src={mapImage}
            alt="Map showing course locations"
            className="w-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
