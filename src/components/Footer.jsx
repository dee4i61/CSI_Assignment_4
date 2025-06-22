import React, { useState } from "react";
import {
  Instagram,
  Twitter,
  Facebook,
  Shuffle,
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Repeat,
  PictureInPicture2,
  List,
  Tv,
  Volume2,
  Maximize2,
} from "lucide-react";

export default function SpotifyFooter() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(75);

  return (
    <div className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-5 gap-8">
          {/* Company Column */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm hover:underline"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm hover:underline"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm hover:underline"
                >
                  For the Record
                </a>
              </li>
            </ul>
          </div>

          {/* Communities Column */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Communities</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm hover:underline"
                >
                  For Artists
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm hover:underline"
                >
                  Developers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm hover:underline"
                >
                  Advertising
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm hover:underline"
                >
                  Investors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm hover:underline"
                >
                  Vendors
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links Column */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">
              Useful links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm hover:underline"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm hover:underline"
                >
                  Free Mobile App
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm hover:underline"
                >
                  Popular by Country
                </a>
              </li>
            </ul>
          </div>

          {/* Spotify Plans Column */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">
              Spotify Plans
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm hover:underline"
                >
                  Premium Individual
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm hover:underline"
                >
                  Premium Duo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm hover:underline"
                >
                  Premium Family
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm hover:underline"
                >
                  Premium Student
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm hover:underline"
                >
                  Spotify Free
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-end space-x-4">
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-7xl mx-auto border-t border-gray-800 my-8"></div>

        {/* Bottom Links and Copyright */}
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm hover:underline"
            >
              Legal
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm hover:underline"
            >
              Safety & Privacy Center
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm hover:underline"
            >
              Cookies
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm hover:underline"
            >
              About Ads
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm hover:underline"
            >
              Accessibility
            </a>
          </div>
          <div className="text-gray-400 text-sm">© 2025 Spotify AB</div>
        </div>
      </div>

      {/* Player Bar */}
      <div className="bg-gray-900 border-t border-gray-800 px-4 py-3 flex items-center justify-between">
        {/* Left - Currently Playing (Empty for now) */}
        <div className="flex-1"></div>

        {/* Center - Player Controls */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white transition-colors">
            <Shuffle className="w-4 h-4" />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <SkipBack className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-black" />
            ) : (
              <Play className="w-4 h-4 text-black ml-0.5" />
            )}
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <SkipForward className="w-5 h-5" />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <Repeat className="w-4 h-4" />
          </button>
        </div>

        {/* Right - Volume and Controls */}
        <div className="flex-1 flex items-center justify-end space-x-3">
          <button className="text-gray-400 hover:text-white transition-colors">
            <PictureInPicture2 className="w-4 h-4" />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <List className="w-4 h-4" />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <Tv className="w-4 h-4" />
          </button>
          <div className="flex items-center space-x-2">
            <button className="text-gray-400 hover:text-white transition-colors">
              <Volume2 className="w-4 h-4" />
            </button>
            <div className="w-20 h-1 bg-gray-600 rounded-full">
              <div
                className="h-1 bg-white rounded-full"
                style={{ width: `${volume}%` }}
              ></div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors">
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
