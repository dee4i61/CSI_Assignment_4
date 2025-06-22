import React, { useState } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Heart,
  Download,
  MoreHorizontal,
  Plus,
  Search,
  List,
  Clock,
  Shuffle,
  Repeat,
  Mic2,
  Monitor,
  VolumeX,
} from "lucide-react";

export default function SongCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [volume, setVolume] = useState(80);
  const [progress, setProgress] = useState(45);

  return (
    <div className="bg-black text-white min-h-screen flex">
      {/* Main Content */}
      <div className="flex-1 bg-gradient-to-b from-gray-900 to-black">
        {/* Song Details */}
        <div className="p-8">
          <div className="flex items-end gap-6 mb-8">
            {/* Album Cover */}
            <div className="w-64 h-64 bg-gradient-to-br from-orange-400 to-red-600 rounded-lg shadow-2xl overflow-hidden">
              <div className="w-full h-full bg-black bg-opacity-20 flex items-center justify-center relative">
                <div className="absolute top-4 left-4 text-white text-xs bg-red-500 px-2 py-1 rounded">
                  DO PATTI
                </div>
                <div className="text-center">
                  <div className="text-white text-4xl font-bold mb-2">
                    Raanjhan
                  </div>
                  <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full mx-auto mb-4"></div>
                </div>
              </div>
            </div>

            {/* Song Info */}
            <div className="pb-4">
              <div className="text-sm text-white mb-2">Single</div>
              <h1 className="text-6xl font-bold text-white mb-4">
                Raanjhan (From "Do Patti")
              </h1>
              <div className="flex items-center gap-2 text-gray-300">
                <span>Sachet-Parampara</span>
                <span>•</span>
                <span>Parampara Tandon</span>
                <span>•</span>
                <span>Kausar Munir</span>
                <span>•</span>
                <span>2024</span>
                <span>•</span>
                <span>1 song, 4 min</span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6 mb-8">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 hover:scale-105 transition-all"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-black ml-0.5" />
              ) : (
                <Play className="w-6 h-6 text-black ml-1" />
              )}
            </button>

            <button
              onClick={() => setIsLiked(!isLiked)}
              className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Heart
                className={`w-6 h-6 ${
                  isLiked ? "text-green-500 fill-green-500" : "text-gray-400"
                }`}
              />
            </button>

            <button className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform">
              <Plus className="w-6 h-6 text-gray-400 hover:text-white" />
            </button>

            <button className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform">
              <Download className="w-6 h-6 text-gray-400 hover:text-white" />
            </button>

            <button className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform">
              <MoreHorizontal className="w-6 h-6 text-gray-400 hover:text-white" />
            </button>

            <div className="ml-auto flex items-center gap-4">
              <span className="text-gray-400 text-sm">List</span>
              <List className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Track List */}
          <div className="bg-black bg-opacity-20 rounded-lg">
            <div className="flex items-center p-4 border-b border-gray-800">
              <div className="w-8 text-gray-400 text-sm">#</div>
              <div className="flex-1 text-gray-400 text-sm">Title</div>
              <div className="w-12 text-gray-400">
                <Clock className="w-4 h-4" />
              </div>
            </div>

            <div className="flex items-center p-4 hover:bg-white hover:bg-opacity-10 rounded group">
              <div className="w-8 text-gray-400 group-hover:text-white">1</div>
              <div className="flex-1">
                <div className="text-white font-medium">
                  Raanjhan (From "Do Patti")
                </div>
                <div className="text-gray-400 text-sm">
                  Sachet-Parampara, Parampara Tandon, Kausar Munir
                </div>
              </div>
              <div className="w-12 text-gray-400 text-sm">4:00</div>
            </div>

            <div className="p-4 text-gray-400 text-sm">
              <div>October 4, 2024</div>
              <div>© 2024 Super Cassettes Industries Private Limited</div>
              <div>℗ 2024 Super Cassettes Industries Private Limited</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Player */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 p-4">
        <div className="flex items-center justify-between">
          {/* Currently Playing */}
          <div className="flex items-center gap-4 w-80">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-600 rounded"></div>
            <div>
              <div className="text-white text-sm font-medium">
                Raanjhan (From "Do Patti")
              </div>
              <div className="text-gray-400 text-xs">
                Sachet-Parampara, Parampara Tandon
              </div>
            </div>
            <Heart
              className={`w-4 h-4 ${
                isLiked ? "text-green-500 fill-green-500" : "text-gray-400"
              } cursor-pointer`}
            />
          </div>

          {/* Player Controls */}
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="flex items-center gap-4">
              <Shuffle className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
              <SkipBack className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
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
              <SkipForward className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Repeat className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
            </div>

            <div className="flex items-center gap-2 w-full max-w-md">
              <span className="text-xs text-gray-400">1:48</span>
              <div className="flex-1 bg-gray-600 h-1 rounded-full relative">
                <div
                  className="bg-white h-1 rounded-full relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100"></div>
                </div>
              </div>
              <span className="text-xs text-gray-400">4:00</span>
            </div>
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-2 w-80 justify-end">
            <Mic2 className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
            <Monitor className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
            <Volume2 className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
            <div className="flex items-center gap-2">
              <div className="w-20 bg-gray-600 h-1 rounded-full relative group">
                <div
                  className="bg-white h-1 rounded-full relative"
                  style={{ width: `${volume}%` }}
                >
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
