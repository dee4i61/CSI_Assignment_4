import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Search,
  MoreHorizontal,
  Users,
  List,
  Shuffle,
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Repeat,
  Volume2,
  Maximize2,
} from "lucide-react";

export default function PlaylistDetail() {
  const { id } = useParams();
  const playlists = useSelector((state) => state.playlists.playlists);
  const playlist = playlists.find((playlist) => playlist.id.toString() === id);

  const [isPlaying, setIsPlaying] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  if (!playlist) {
    return (
      <div className="text-white p-6">
        <h1 className="text-2xl font-bold">Playlist Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}

        {/* Playlist Info */}
        <div className="flex items-end space-x-6 mb-8">
          {/* Playlist Cover */}
          <div className="w-48 h-48 bg-gray-700 rounded-md flex items-center justify-center flex-shrink-0">
            <div className="text-6xl text-gray-500">♪</div>
          </div>

          {/* Playlist Details */}
          <div className="flex-1">
            <p className="text-sm text-gray-300 mb-2">Public Playlist</p>
            <h1 className="text-7xl font-bold mb-4 leading-none">
              {playlist.name}
            </h1>
            <p className="text-gray-300">
              <span className="font-medium">{playlist.user}</span> • ID:{" "}
              {playlist.id}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Users className="w-6 h-6 text-gray-400" />
            <MoreHorizontal className="w-6 h-6 text-gray-400" />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-300">List</span>
            <List className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Search Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Let's find something for your playlist
          </h2>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search for songs or episodes"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-md border-none outline-none focus:bg-gray-700 transition-colors"
            />
          </div>
          {/* Close button */}
          <button className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Player */}
      <div className="bg-gray-900 border-t border-gray-800 px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - Currently playing (empty) */}
          <div className="flex items-center space-x-3 w-1/3">
            <div className="w-14 h-14 bg-gray-700 rounded"></div>
            <div>
              <div className="text-sm font-medium">---</div>
              <div className="text-xs text-gray-400">---</div>
            </div>
          </div>

          {/* Center - Player controls */}
          <div className="flex flex-col items-center w-1/3">
            <div className="flex items-center space-x-4 mb-2">
              <Shuffle className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
              <SkipBack className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4 ml-0.5" />
                )}
              </button>
              <SkipForward className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Repeat className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
            </div>
            {/* Progress bar */}
            <div className="flex items-center space-x-2 w-full max-w-md">
              <span className="text-xs text-gray-400">---</span>
              <div className="flex-1 h-1 bg-gray-600 rounded-full">
                <div className="h-1 bg-white rounded-full w-0"></div>
              </div>
              <span className="text-xs text-gray-400">---</span>
            </div>
          </div>

          {/* Right side - Volume and other controls */}
          <div className="flex items-center space-x-3 w-1/3 justify-end">
            <List className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
            <div className="flex items-center space-x-2">
              <Volume2 className="w-4 h-4 text-gray-400" />
              <div className="w-24 h-1 bg-gray-600 rounded-full">
                <div className="h-1 bg-white rounded-full w-3/4"></div>
              </div>
            </div>
            <Maximize2 className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
