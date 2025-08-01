// SpotifySidebar.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Plus, X } from "lucide-react";
import {
  startCreatingPlaylist,
  addPlaylist,
  removePlaylist,
} from "../redux/slice/playlistSlice";
import { useNavigate } from "react-router-dom";

export default function SpotifySidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { playlists, isCreating } = useSelector((state) => state.playlists);

  const handleCreatePlaylist = () => {
    dispatch(startCreatingPlaylist());

    // Simulate playlist creation
    setTimeout(() => {
      const newPlaylist = {
        id: Date.now(),
        name: `My Playlist #${playlists.length + 1}`,
        user: "Deepikajangid",
        createdAt: new Date().toISOString(),
      };
      dispatch(addPlaylist(newPlaylist));
    }, 1000);
  };

  const handleRemovePlaylist = (playlistId) => {
    dispatch(removePlaylist(playlistId));
  };

  const handlePlusClick = () => {
    handleCreatePlaylist();
  };

  const handleBrowsePodcasts = () => {
    // You can implement podcast browsing functionality here
    alert("Browse podcasts functionality would be implemented here");
  };

  return (
    <div className="w-80 bg-black text-white h-screen flex flex-col justify-between">
      {/* Top Section */}
      <div>
        {/* Header */}
        <div className="flex items-center justify-between p-4 pb-6">
          <div className="flex items-center space-x-3">
            <span className="text-white font-semibold text-base">
              Your Library
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePlusClick}
              disabled={isCreating}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors disabled:opacity-50"
            >
              <Plus className="w-5 h-5 text-gray-300" />
            </button>
            <span
              onClick={handleCreatePlaylist}
              className="text-gray-300 font-semibold text-base cursor-pointer hover:underline disabled:opacity-50"
            >
              Create
            </span>
          </div>
        </div>

        {!isCreating && playlists.length === 0 && (
          <>
            {/* Create Playlist Section */}
            <div className="mx-4 mb-6 bg-gray-900 rounded-lg p-4">
              <h3 className="text-white font-bold text-base mb-2">
                Create your first playlist
              </h3>
              <p className="text-white text-sm mb-4 font-medium">
                It's easy, we'll help you
              </p>
              <button
                onClick={handleCreatePlaylist}
                disabled={isCreating}
                className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                Create playlist
              </button>
            </div>

            {/* Browse Podcasts Section */}
            <div className="mx-4 mb-6 bg-gray-900 rounded-lg p-4">
              <h3 className="text-white font-bold text-base mb-2">
                Let's find some podcasts to follow
              </h3>
              <p className="text-white text-sm mb-4 font-medium">
                We'll keep you updated on new episodes
              </p>
              <button
                onClick={handleBrowsePodcasts}
                className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors"
              >
                Browse podcasts
              </button>
            </div>
          </>
        )}

        {isCreating && (
          <div className="mx-4 mb-6 bg-gray-900 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <p className="text-white text-sm">Creating playlist...</p>
            </div>
          </div>
        )}

        {playlists.length > 0 && (
          <div className="mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold text-base">
                Playlists ({playlists.length})
              </h3>
              <span className="text-gray-400 text-sm">Recents</span>
            </div>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {playlists.map((playlist) => (
                <div
                  key={playlist.id}
                  className="flex items-center p-2 hover:bg-gray-800 rounded group"
                  onClick={() => navigate(`/playlist/${playlist.id}`)}
                >
                  <span className="text-green-400 mr-3 text-lg">♪</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-sm font-medium truncate">
                      {playlist.name}
                    </div>
                    <div className="text-gray-400 text-xs">
                      Playlist • {playlist.user}
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemovePlaylist(playlist.id);
                    }}
                    className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-700 rounded transition-all"
                  >
                    <X className="w-4 h-4 text-gray-400 hover:text-white" />
                  </button>
                </div>
              ))}
            </div>

            {/* Add New Playlist Button */}
            <button
              onClick={handleCreatePlaylist}
              disabled={isCreating}
              className="w-full mt-4 p-3 border-2 border-dashed border-gray-600 rounded-lg hover:border-gray-400 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              <Plus className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400 text-sm">Add new playlist</span>
            </button>
          </div>
        )}
      </div>

      {/* Footer Section */}
      <div className="p-4 text-gray-400 text-xs space-y-2 mb-40">
        <div className="flex flex-wrap gap-4">
          <a href="#" className="hover:underline">
            Legal
          </a>
          <a href="#" className="hover:underline">
            Safety & Privacy Center
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Cookies
          </a>
          <a href="#" className="hover:underline">
            About Ads
          </a>
          <a href="#" className="hover:underline">
            Accessibility
          </a>
        </div>
        <button className="mt-4 flex items-center border border-gray-400 rounded-full px-3 py-1 text-white hover:border-white transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6h4"
            />
          </svg>
          English
        </button>
      </div>
    </div>
  );
}
