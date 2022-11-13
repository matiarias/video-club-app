import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full flex justify-between items-center px-6 py-4 z-[100] absolute top-0 left-0">
      <Link to="/">
        <h1 className="text-2xl md:text-4xl font-bold text-indigo-600">
          VideoClub
        </h1>
      </Link>
      <div>
        <Link to="/login">
          <button className="text-white pr-4 mr-4">Login</button>
        </Link>
        <Link to="/signup">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-md">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
