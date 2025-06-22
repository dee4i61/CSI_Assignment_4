import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlists: [],
  isCreating: false,
};

const playlistSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    startCreatingPlaylist: (state) => {
      state.isCreating = true;
    },
    addPlaylist: (state, action) => {
      state.playlists.push(action.payload);
      state.isCreating = false;
    },
    removePlaylist: (state, action) => {
      state.playlists = state.playlists.filter(
        (playlist) => playlist.id !== action.payload
      );
    },
    updatePlaylist: (state, action) => {
      const index = state.playlists.findIndex(
        (playlist) => playlist.id === action.payload.id
      );
      if (index !== -1) {
        state.playlists[index] = {
          ...state.playlists[index],
          ...action.payload,
        };
      }
    },
  },
});

export const {
  startCreatingPlaylist,
  addPlaylist,
  removePlaylist,
  updatePlaylist,
} = playlistSlice.actions;

export default playlistSlice.reducer;
