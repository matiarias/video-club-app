import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

const NavBar = () => {
  const { user, logOut } = UserAuth();

  const [nav, setNav] = useState(false);

  // console.log(user);

  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickNav = () => {
    setNav(!nav);
  };

  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-[100]">
      {/* ------------------ Desktop Navbar ------------------------ */}

      <Link to="/">
        <h1 className="text-2xl md:text-4xl font-bold text-indigo-600">
          VideoClub
        </h1>
      </Link>

      {user?.email ? (
        // ---------------- Menu with a user auth ----------------------

        <div className="hidden md:flex md:flex-col md:justify-center md:items-center md:gap-4">
          <span className="text-white font-bold">{user?.email}</span>

          <div className="flex justify-center items-center gap-4">
            <Link to="/account">
              <button className="bg-stone-800/80 text-white text-lg font-medium py-2 px-6 rounded-md">
                Account
              </button>
            </Link>

            <button
              onClick={handleLogOut}
              className="bg-indigo-600 text-white text-lg font-medium px-6 py-2 rounded-md mr-2"
            >
              Log Out
            </button>
          </div>
        </div>
      ) : (
        // ---------------------- menu without a user auth --------------------

        <div className="hidden md:block">
          <Link to="/login">
            <button className="text-white text-xl font-medium pr-6 mr-4">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="bg-indigo-600 text-white text-xl font-medium px-6 py-2 mr-2 rounded-md">
              Sign Up
            </button>
          </Link>
        </div>
      )}

      {/* ---------------------------- Hamburger Icons -------------------------- */}

      <div onClick={handleClickNav} className="md:hidden z-50">
        {!nav ? (
          <GiHamburgerMenu className="text-3xl text-gray-100" />
        ) : (
          <CgClose className="text-3xl text-gray-100" />
        )}
      </div>

      {/* --------------------------------- Mobile Navbar ------------------------------ */}

      {user?.email ? (
        <div
          className={
            !nav
              ? "hidden"
              : "min-h-screen w-full bg-gradient-to-b from-black/90 to-black absolute top-0 left-0 flex flex-col justify-center items-center gap-8 px-4"
          }
        >
          <span className="text-gray-100 text-base sm:text-lg font-bold">
            {user?.email}
          </span>

          <Link to="/account">
            <button
              onClick={handleClickNav}
              className="bg-stone-800/80 text-white text-lg font-medium py-2 px-6 rounded-md"
            >
              Account
            </button>
          </Link>

          <button
            onClick={handleLogOut}
            className="bg-indigo-600 text-white font-bold px-8 py-3 rounded-md"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div
          className={
            !nav
              ? "hidden"
              : "min-h-screen w-full bg-gradient-to-b from-black/90 to-black absolute top-0 left-0 flex flex-col justify-center items-center gap-8"
          }
        >
          <Link to="/login">
            <button
              onClick={handleClickNav}
              className="text-white bg-yellow-600 px-8 py-3 rounded-md font-bold"
            >
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button
              onClick={handleClickNav}
              className="bg-indigo-600 text-white px-8 py-3 rounded-md font-bold"
            >
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
