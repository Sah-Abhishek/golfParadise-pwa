import React, { useState } from "react";
import golfCourses from "../data/golfCourses.json"; // Your JSON data
import mapImage from "../assets/findCourse.png";
import { Search } from "lucide-react";

export default function CourseFinder() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // actual query to filter

  const handleSearch = () => {
    setSearchQuery(searchTerm.trim());
  };

  const filteredCourses =
    searchQuery === ""
      ? []
      : golfCourses.filter((course) =>
        course.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.zipCode.includes(searchQuery)
      );

  return (
    <section className="bg-white mt-4 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="w-full mt-15 lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Find Courses Near You
          </h2>
          <p className="text-gray-600 mb-8">
            Discover top-rated golf courses in your area that accept Paradise Golf Card.
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
            {/* Input Field */}
            <div className="flex gap-4 mb-6">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter course name, city or zip"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>

            <button
              onClick={handleSearch}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-semibold flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              <span>Find Courses</span>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-4 text-sm text-gray-600 flex justify-between">
            <span>
              {filteredCourses.length > 0
                ? `Showing ${filteredCourses.length} of ${golfCourses.length} courses`
                : searchQuery !== ""
                  ? "No courses found"
                  : ""}
            </span>
            <a href="#" className="text-blue-600 hover:underline">
              View All Courses
            </a>
          </div>

          {/* Render Results */}
          <div className="mt-6 space-y-4">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="p-4 border border-gray-200 rounded-xl shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {course.courseName}
                </h3>
                <p className="text-gray-600 text-sm">{course.address}</p>
                <p className="text-gray-500 text-sm">
                  {course.city}, FL {course.zipCode}
                </p>
              </div>
            ))}
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
