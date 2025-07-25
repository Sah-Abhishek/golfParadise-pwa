import React from 'react';
import heroVideo from './../assets/HeroVideo.mp4';
import { FaPlay } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute bg-black/50 top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay to darken video for better text visibility */}
      <div className="absolute bg-black/50 inset-0  z-10" />

      {/* Content */}
      <div className="relative z-20 w-full h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="flex justify-end">
            <div className="max-w-xl space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                Where Elite Golfers Belong
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Join 200+ top-tier courses and a community of passionate golfers
              </p>

              {/* Buttons Layout */}
              <div className="space-y-4">
                {/* Top row: View Plans + Tee Time Booking */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-green-500 hover:bg-yello-600 text-black font-semibold px-6 py-3 rounded-full">
                    View Plans
                  </button>
                  <button className="bg-green-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full">
                    Tee Time Booking
                  </button>
                </div>

                {/* Bottom row: Watch Experience */}
                <button className="flex items-center border-white border-2 text-white hover:bg-gray-200 hover:text-black font-semibold px-6 py-2 rounded-full">
                  <span className="mr-2">
                    <FaPlay />
                  </span>
                  Watch Experience
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
