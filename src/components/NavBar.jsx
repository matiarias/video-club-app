import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const NavBar = () => {
  const { user, logOut } = UserAuth();
  console.log(user);

  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex justify-between items-center px-6 py-4 z-[100] absolute top-0 left-0">
      <Link to="/">
        <h1 className="text-2xl md:text-4xl font-bold text-indigo-600">
          VideoClub
        </h1>
      </Link>

      {user?.email ? (
        <div>
          <span className="text-gray-100 font-bold pr-4 mr-4">
            {user?.email}
          </span>

          <button
            onClick={handleLogOut}
            className="bg-indigo-600 text-white px-6 py-2 rounded-md"
          >
            Log Out
          </button>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default NavBar;
