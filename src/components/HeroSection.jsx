import React from 'react';
import heroImage from './../assets/heroBackground.jpg'
import { FaPlay } from 'react-icons/fa';


const Hero = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex justify-end">
          <div className=" max-w-xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
              Where Elite Golfers Belong
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Join 200+ top-tier courses and a community of passionate golfers
            </p>
            <div className="flex justify-end gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full">
                View Plans
              </button>
              <button className="flex items-center border-white border-2 text-white hover:bg-gray-200 text-black font-semibold px-6 py-1 rounded-full">
                <span className='mr-2'>
                  <FaPlay />
                </span> Watch Experience
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
