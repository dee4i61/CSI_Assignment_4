import React, { useState } from "react";
import { Search, Home, Bell, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SpotifyNavbar() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
    navigate("/profile");
  };

  return (
    <nav className="bg-black text-white px-4 py-3 flex items-center justify-between">
      {/* Left section - Logo and Home */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            onClick={() => navigate(`/`)}
          >
            <svg viewBox="0 0 24 24" className="w-12 h-12 fill-white">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.062 14.455c-.193 0-.314-.094-.502-.242-1.158-.906-2.625-1.366-4.369-1.366-1.289 0-2.504.24-3.621.716-.094.04-.188.067-.283.067-.314 0-.555-.242-.555-.568 0-.242.121-.434.341-.541 1.369-.594 2.746-.878 4.118-.878 2.016 0 3.783.527 5.252 1.568.188.134.282.321.282.541 0 .321-.242.568-.568.568-.054 0-.108-.013-.135-.027zm.675-1.771c-.228 0-.362-.108-.568-.269-1.369-1.073-3.378-1.745-5.464-1.745-1.530 0-2.935.269-4.118.769-.108.054-.216.081-.324.081-.364 0-.649-.283-.649-.649 0-.283.135-.5.378-.622 1.410-.621 3.027-.946 4.713-.946 2.328 0 4.423.729 6.062 2.016.216.162.324.378.324.622 0 .364-.285.649-.649.649-.081 0-.162-.013-.216-.027zm.783-2.016c-.270 0-.432-.121-.675-.297-1.597-1.248-4.051-1.932-6.370-1.932-1.813 0-3.486.324-4.889.972-.135.054-.270.094-.405.094-.432 0-.756-.324-.756-.756 0-.297.162-.568.432-.702 1.597-.729 3.567-1.113 5.618-1.113 2.625 0 5.279.729 7.287 2.124.243.175.378.432.378.702 0 .432-.324.756-.756.756-.054 0-.108-.013-.162-.027z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Center section - Search */}
      <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
        <Home className="w-6 h-6 fill-white" />
      </button>
      <div className="flex-1 max-w-md">
        <div
          className={`relative flex items-center bg-gray-800 rounded-full transition-all duration-200 ${
            isSearchFocused
              ? "bg-gray-700 ring-2 ring-white"
              : "hover:bg-gray-700"
          }`}
        >
          <Search className="w-5 h-5 text-gray-400 ml-4" />
          <input
            type="text"
            placeholder="What do you want to play?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            className="w-full bg-transparent text-white placeholder-gray-400 px-3 py-3 pr-4 focus:outline-none text-sm"
          />
        </div>
      </div>

      {/* Right section - Actions and Profile */}
      <div className="flex items-center space-x-4">
        <button className="bg-transparent hover:bg-gray-800 text-gray-300 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors border border-gray-600 hover:border-gray-500">
          Explore Premium
        </button>
        <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
          <Download className="w-5 h-5" />
          <span className="text-sm font-medium">Install App</span>
        </button>
        <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
          <Bell className="w-5 h-5 text-gray-300 hover:text-white" />
        </button>
        <div className="relative">
          <button
            className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium text-sm hover:bg-blue-700 transition-colors"
            onClick={handleProfileClick}
          >
            D
          </button>
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-700 rounded-md shadow-lg py-1">
              <a
                href="/profile"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
              >
                Upgrade to Premium
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
              >
                Support
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
              >
                Download
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
              >
                Log out
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

function ProfileDetail() {
  return (
    <div className="bg-black text-white p-6">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-gray-400">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Deepikajangid</h2>
          <p className="text-gray-400">3 Public Playlist</p>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Public Playlists</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gray-700 rounded mr-4 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-gray-400">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
            </div>
            <div>
              <h4 className="text-md font-medium">My Playlist #2</h4>
              <p className="text-gray-400 text-sm">By Deepikajangid</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ProfileDetail };
