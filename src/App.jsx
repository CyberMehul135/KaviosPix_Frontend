import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Albums from "./features/album/pages/Albums";
import Album from "./features/album/pages/Album";
import Images from "../src/features/image/pages/Images";
import Login from "../src/features/auth/pages/login";
import FavouriteImages from "./features/image/pages/FavouriteImages";
import SharedAlbums from "./features/album/pages/SharedAlbums";
import AlbumImage from "./features/album/pages/AlbumImage";
import ProtectedLayout from "./features/auth/components/ProtectedLayout";
import { AuthProvider } from "./features/auth/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route element={<ProtectedLayout />}>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Albums />} />
              <Route path="/albums/:albumId" element={<Album />} />
              <Route
                path="/albums/:albumId/images/:imageId"
                element={<AlbumImage />}
              />
              <Route path="/albums/shared" element={<SharedAlbums />} />
              <Route path="/images" element={<Images />} />
              <Route path="/images/favourite" element={<FavouriteImages />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
