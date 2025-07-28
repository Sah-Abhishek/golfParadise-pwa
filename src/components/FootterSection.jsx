import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function FootterSection() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="px-8 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* ParadiseGolf Section */}
          <div className="space-y-6">
            {/* <h3 className="text-[#f4d03f] text-xl font-bold">ParadiseGolf</h3> */}
            <img src='PG-2-white(1).png' className='h-12' />
            <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
              The ultimate golf membership for passionate golfers seeking premium experiences at elite courses nationwide.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Home
                </a>
              </li>
              {/* <li> */}
              {/*   <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"> */}
              {/*     Membership Benefits */}
              {/*   </a> */}
              {/* </li> */}
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#f4d03f] flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <div>123 Golf Paradise Lane</div>
                  <div>Palm Beach, FL 33480</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#f4d03f] flex-shrink-0" />
                <a href="tel:8001234567" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  (800) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#f4d03f] flex-shrink-0" />
                <a href="mailto:info@paradisegolf.com" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  info@paradisegolf.com
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          {/* <div className="space-y-6"> */}
          {/*   <h3 className="text-white text-lg font-semibold">Newsletter</h3> */}
          {/*   <p className="text-gray-400 text-sm leading-relaxed"> */}
          {/*     Subscribe to get updates on new courses, promotions and events. */}
          {/*   </p> */}
          {/*   <div className="space-y-3"> */}
          {/*     <input */}
          {/*       type="email" */}
          {/*       placeholder="Your email address" */}
          {/*       className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#f4d03f] transition-colors duration-200" */}
          {/*     /> */}
          {/*     <button className="w-full bg-[#f4d03f] text-black font-semibold py-3 px-6 rounded-lg hover:bg-[#e6c136] transition-colors duration-200"> */}
          {/*       Subscribe */}
          {/*     </button> */}
          {/*   </div> */}
          {/* </div> */}
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            © 2023 ParadiseGolf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
