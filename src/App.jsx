import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import SingleMovie from "./pages/SingleMovie";

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
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
