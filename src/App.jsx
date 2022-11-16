import NavBar from "./components/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import SingleMovie from "./pages/SingleMovie";
import FavoritesAccount from "./pages/FavoritesAccount";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <FavoritesAccount />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
