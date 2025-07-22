import React, { useState } from "react";
import RatingStars from "./RatingStar";


const filtersData = [
  { label: "Distance", key: "distance" },
  { label: "Driving Range", key: "drivingRange" },
  { label: "Restaurant", key: "restaurant" },
  { label: "Pro Shop", key: "proShop" },
];

const golfCourses = [
  {
    name: "Pine Valley Golf Club",
    location: "Pine Valley, NJ 08021",
    distance: "3.2 miles away",
    rating: 5.0,
    reviews: 128,
    tags: ["Pro Shop", "Restaurant", "Driving Range"],
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", // Replace with actual
    savings: 30,
  },
  {
    name: "Sunset Hills Golf Club",
    location: "Sunset Hills, CA 90210",
    distance: "5.7 miles away",
    rating: 4.2,
    reviews: 86,
    tags: ["Pro Shop", "Restaurant"],
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b", // Replace with actual
    savings: 25,
  },
  {
    name: "Eagle Ridge Golf Club",
    location: "Eagle Ridge, FL 33432",
    distance: "7.1 miles away",
    rating: 4.5,
    reviews: 103,
    tags: ["Pro Shop", "Driving Range"],
    img: "https://images.unsplash.com/photo-1752835178514-f31f93a3b540?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    savings: 40,
  }
];


export default function GolfCourseFinder() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    distance: false,
    drivingRange: true,
    restaurant: true,
    proShop: true,
  });

  const handleToggle = key => {
    setFilters({ ...filters, [key]: !filters[key] });
  };

  // In a real app, filter the courses based on filters/searchTerm

  return (
    <div className="min-h-screen bg-[#e6f2eb] flex flex-col items-center py-8">
      <h1 className="text-4xl font-bold mb-8 text-green-900 text-center">
        Find a Course Near You
      </h1>

      <div className="w-full max-w-2xl mb-6 flex flex-col gap-3">
        <div className="flex gap-3 items-center">
          <input
            type="text"
            placeholder="Enter zip code or city"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-200 bg-white text-lg placeholder-gray-400"
          />
          <button
            className="bg-green-900 text-white text-lg rounded-full px-8 py-3 font-semibold hover:bg-green-800 transition"
          >
            Search
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {filtersData.map(f => (
            <button
              key={f.key}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition 
                ${filters[f.key]
                  ? "bg-green-800 text-white border-green-900"
                  : "bg-white text-green-900 border-green-300 hover:border-green-500"
                }`}
              onClick={() => handleToggle(f.key)}
            >
              {f.label}{filters[f.key] ? " ×" : ""}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full max-w-3xl flex flex-col gap-6">
        {golfCourses.map((course, idx) => (
          <div
            key={course.name}
            className="flex bg-white rounded-xl shadow-sm overflow-hidden relative transition hover:shadow-lg"
          >
            <img
              src={course.img}
              alt={course.name}
              className="w-48 object-cover flex-shrink-0"
            />
            <div className="flex-1 px-7 py-6 flex flex-col justify-between relative">
              <div>
                <div className="flex items-center">
                  <h2 className="text-xl font-bold text-black">
                    {course.name}
                  </h2>
                </div>
                <div className="text-gray-600 mt-1 mb-2">
                  {course.location} &bull; {course.distance}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <RatingStars rating={course.rating} />
                  <span className="ml-1 text-yellow-600 font-semibold">
                    {course.rating}
                  </span>
                  <span className="text-gray-500">
                    ({course.reviews} reviews)
                  </span>
                </div>
                <div className="flex gap-2 mt-2">
                  {course.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button
                className="mt-4 w-fit bg-green-900 text-white px-7 py-2 rounded-full font-semibold shadow hover:bg-green-800 transition"
              >
                View Details
              </button>
            </div>
            <div className="absolute top-4 right-7">
              <span className="bg-yellow-300 text-yellow-900 rounded-md px-3 py-1 text-sm font-semibold shadow">
                Save {course.savings}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
