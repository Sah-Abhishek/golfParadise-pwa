import React from "react";

const images = [
  "https://plus.unsplash.com/premium_photo-1679505064703-e7a080939fcc?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1605144884374-ecbb643615f6?q=80&w=692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1443706340763-4b60757a36ce?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1543105177-748ceda71741?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1592937238247-cd0090e02f65?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "http://plus.unsplash.com/premium_photo-1678415262915-e50f254ebb3d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1623567341691-1f47b5cf949e?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

export default function Gallery() {
  const getGridClasses = (index) => {
    const layouts = [
      "col-span-3 row-span-2", // Large left (6 cells)
      "col-span-2 row-span-1", // Top middle (2 cells) 
      "col-span-1 row-span-2", // Tall right (2 cells)
      "col-span-2 row-span-1", // Second row middle (2 cells)
      "col-span-3 row-span-2", // Large bottom left (6 cells)
      "col-span-3 row-span-1", // Bottom right span (3 cells)
      "col-span-3 row-span-1", // Bottom right span (3 cells)
    ];
    return layouts[index] || "col-span-1 row-span-1";
  };;

  return (
    <div className="w-full min-h-screen px-8 py-16 bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-800 via-green-700 to-teal-600 bg-clip-text text-transparent mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beauty and elegance of our patner courses
          </p>
        </div>

        <div className="grid grid-cols-6 grid-rows-4 gap-6 h-[1500px] w-full max-w-6xl mx-auto">
          {images.map((src, index) => (
            <div
              key={index}
              className={`${getGridClasses(index)} group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              <img
                src={src}
                alt={`Golf Course ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />



              {/*   <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3"> */}
              {/*     <h3 className="font-semibold text-gray-800 text-sm"> */}
              {/*       Course View {index + 1} */}
              {/*     </h3> */}
              {/*     <p className="text-xs text-gray-600 mt-1"> */}
              {/*       Professional Golf Experience */}
              {/*     </p> */}
              {/*   </div> */}
              {/* </div> */}
              {/**/}
              <div className="absolute top-3 right-3 z-20">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/*   <button className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"> */}
        {/*     View All Photos */}
        {/*   </button> */}
        {/* </div> */}
      </div>
    </div>
  );
}
