import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../src/redux/store";
import SpotifyFooter from "./components/Footer";
import SpotifyNavbar, { ProfileDetail } from "./components/Navbar";
import SpotifySidebar from "./components/Sidebar";

// Import Router Packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
import SearchPage from "./components/SearchPage";
import LibraryPage from "./components/LibraryPage";
// import NotFoundPage from "./pages/NotFoundPage";
// import SpotifyInterface from "./components/SpotifyInterface";
import PlaylistDetail from "./components/PlaylistDetail";
import SongCard from "./components/SongCard";
import MusicPlayerInterface from "./components/MusicPlayerInterface";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <Router>
          <div className="min-h-screen bg-gray-100">
            {/* Fixed Navbar */}
            <div className="fixed top-0 left-0 right-0 z-50">
              <SpotifyNavbar />
            </div>

            <div className="flex pt-16">
              {/* Fixed Sidebar */}
              <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-black z-40">
                <SpotifySidebar />
              </div>

              {/* Scrollable Content */}
              <div className="ml-80 flex-1 h-[calc(100vh-4rem)] overflow-y-auto">
                <Routes>
                  <Route path="/" element={<MusicPlayerInterface />} />
                  <Route path="/profile" element={<ProfileDetail />} />
                  <Route path="/playlist/:id" element={<PlaylistDetail />} />
                  <Route path="/songdetail" element={<SongCard />} />
                </Routes>
                <SpotifyFooter />
              </div>
            </div>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}
