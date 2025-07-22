
import React from "react";

const images = [
  "https://images.unsplash.com/photo-1568128352884-b6a5c6f27470?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1610484829287-3924b4b77fb8?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1505236738295-fcdfc3f8aedd?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1595943359483-067b45a0d1b7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1580999571381-9f1c2297f206?auto=format&fit=crop&w=800&q=80",
];

export default function Gallery() {
  return (
    <div className="w-full px-6 py-12 bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-10">
        Gallery
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {images.map((src, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-xl relative group ${index === 0 || index === 3 ? "row-span-2" : ""
              }`}
          >
            <img
              src={src}
              alt={`Golf Course ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
