import React from 'react';
import { Flag, Trophy, DollarSign, Check } from 'lucide-react';

export default function Benefits() {
  return (
    <div className=" bg-gray-100 p-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Why Join ParadiseGolf?
        </h1>

        {/* Benefits Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">

          {/* Access Elite Courses Card */}
          <div className="bg-gray-800 text-white p-8 rounded-xl">
            <div className="flex justify-center mb-6">
              <Flag className="w-12 h-12 text-yellow-400" />
            </div>
            <h2 className="text-xl font-bold text-center mb-4">
              Access Elite Courses
            </h2>
            <p className="text-gray-300 text-yellow-400 text-center mb-6">
              Play like a member—without the monthly dues
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Year-round access to top golf courses and private clubs like TPC Tampa Bay, Westchase, Bardmoor, and more
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  "Member for a Day" access at exclusive clubs across Florida and the U.S.
                </span>
              </div>
            </div>
          </div>

          {/* Tournaments, Leagues & Perks Card */}
          <div className="bg-gray-800 text-white p-8 rounded-xl">
            <div className="flex justify-center mb-6">
              <Trophy className="w-12 h-12 text-yellow-400" />
            </div>
            <h2 className="text-xl font-bold text-center mb-4">
              Tournaments, Leagues & Perks
            </h2>
            <p className="text-gray-300 text-yellow-400 text-center mb-6">
              It's not just golf—it's a lifestyle
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Full calendar of events for both casual and competitive golfers
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Leagues for singles, couples, and mixed groups
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Member-only happy hours, outings to Tampa Bay Downs & Rays games
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Special junior pricing (ages 7-17)
                </span>
              </div>
            </div>
          </div>

          {/* Extra Value for Members Card */}
          <div className="bg-gray-800 text-white p-8 rounded-xl">
            <div className="flex justify-center mb-6">
              <DollarSign className="w-12 h-12 text-yellow-400" />
            </div>
            <h2 className="text-xl font-bold text-center mb-4">
              Extra Value for Members
            </h2>
            <p className="text-gray-300 text-yellow-400 text-center mb-6">
              More than tee times—real savings & benefits
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Weekly email updates with course conditions, rates, and giveaways
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Special pricing at ranges and for private lessons
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Optional USGA Handicap through FSGA for $40/year
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-semibold px-8 py-3 rounded-full text-lg transition-colors duration-200">
            Explore Membership Options
          </button>
        </div>
      </div>
    </div>
  );
}
