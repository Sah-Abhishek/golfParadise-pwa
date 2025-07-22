import React from 'react';
import { Calendar, Star, Trophy, Mail, Check, Users, Sun, GraduationCap, UserCheck, TrendingUp } from 'lucide-react';

export default function MembershipPlans() {
  return (
    <div className=" bg-black from-emerald-900 to-black text-white px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Membership Plans</h1>
          <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
            Choose the perfect membership to enhance your golfing experience and start<br />
            saving at over 200 elite courses nationwide.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {/* Early Renewal Special */}
          <div className="relative">
            <div className="bg-yellow-500 text-black text-center py-3 px-4 rounded-t-xl font-bold text-sm uppercase tracking-wide">
              BEST VALUE
            </div>
            <div className="bg-slate-800 rounded-b-xl px-8 py-10">
              <h3 className="text-2xl font-bold mb-3 leading-tight">Early Renewal<br />Special</h3>
              <p className="text-gray-400 mb-8 text-base">For early birds & winter regulars</p>

              <div className="mb-8">
                <span className="text-5xl font-bold">$105</span>
                <span className="text-gray-400 ml-2 text-lg">total</span>
              </div>

              <div className="bg-yellow-500 text-black px-4 py-2 rounded-md text-sm font-semibold mb-8 inline-block">
                Winter 2025-2026
              </div>

              <div className="space-y-5 mb-10">
                <div className="flex items-start space-x-4">
                  <Calendar className="w-6 h-6 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-base leading-tight">Access Nov 1, 2025 – Mar 31,<br />2026</span>
                </div>
                <div className="flex items-start space-x-4">
                  <Star className="w-6 h-6 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-base leading-tight">Member-only rates at top<br />clubs</span>
                </div>
                <div className="flex items-start space-x-4">
                  <Trophy className="w-6 h-6 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-base leading-tight">Tournament & league<br />eligibility</span>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-base leading-tight">Weekly member email<br />updates</span>
                </div>
              </div>

              <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-4 rounded-xl font-semibold text-lg transition-colors">
                Join Now
              </button>
            </div>
          </div>

          {/* Summer & Winter Annual Combo */}
          <div className="relative">
            <div className="bg-yellow-500 text-black text-center py-3 px-4 rounded-t-xl font-bold text-sm uppercase tracking-wide">
              MOST POPULAR
            </div>
            <div className="bg-slate-800 rounded-b-xl px-8 py-10">
              <h3 className="text-2xl font-bold mb-3 leading-tight">Summer & Winter<br />Annual Combo</h3>
              <p className="text-gray-400 mb-8 text-base">Best for full-year savings!</p>

              <div className="mb-8">
                <span className="text-5xl font-bold">$229</span>
                <span className="text-gray-400 ml-2 text-lg">total (prorated)</span>
              </div>

              <div className="bg-yellow-500 text-black px-4 py-2 rounded-md text-sm font-semibold mb-8 inline-block">
                Covers Summer & Winter 2025-2026
              </div>

              <div className="space-y-5 mb-10">
                <div className="flex items-start space-x-4">
                  <Check className="w-6 h-6 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-base">All benefits from both periods</span>
                </div>
                <div className="flex items-start space-x-4">
                  <Calendar className="w-6 h-6 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-base">Priority tee time booking</span>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-base">Special events & junior pricing</span>
                </div>
                <div className="flex items-start space-x-4">
                  <TrendingUp className="w-6 h-6 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-base leading-tight">Huge savings over individual<br />plans</span>
                </div>
              </div>

              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-4 rounded-xl font-semibold text-lg transition-colors">
                Join Now
              </button>
            </div>
          </div>

          {/* Summer Membership */}
          <div className="bg-slate-800 rounded-xl px-8 py-10">
            <h3 className="text-2xl font-bold mb-3 leading-tight">Summer<br />Membership</h3>
            <p className="text-gray-400 mb-8 text-base">Perfect for seasonal players</p>

            <div className="mb-8">
              <span className="text-5xl font-bold">$169</span>
              <span className="text-gray-400 ml-2 text-lg">total (prorated)</span>
            </div>

            <div className="bg-yellow-500 text-black px-4 py-2 rounded-md text-sm font-semibold mb-8 inline-block">
              Summer 2025
            </div>

            <div className="space-y-5 mb-10">
              <div className="flex items-start space-x-4">
                <Sun className="w-6 h-6 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span className="text-base">Access Apr 1 – Oct 31, 2025</span>
              </div>
              <div className="flex items-start space-x-4">
                <GraduationCap className="w-6 h-6 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span className="text-base leading-tight">Discounts on practice,<br />lessons</span>
              </div>
              <div className="flex items-start space-x-4">
                <UserCheck className="w-6 h-6 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span className="text-base">"Member for a Day" access</span>
              </div>
              <div className="flex items-start space-x-4">
                <Trophy className="w-6 h-6 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span className="text-base">Optional USGA handicap</span>
              </div>
            </div>

            <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-4 rounded-xl font-semibold text-lg transition-colors">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
