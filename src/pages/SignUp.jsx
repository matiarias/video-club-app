import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import netflixBg from "../assets/netflix-login-signup-bg.jpg";

import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  const { user, signUp } = UserAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen w-screen">
      <div className="relative h-full w-full">
        <img
          className="h-full w-full object-cover"
          src={netflixBg}
          alt="netflix-background-image"
        />

        <div className="absolute top-0 left-0 h-full w-full bg-gray-900/75"></div>
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center px-8 md:p-4">
          <div className="w-full sm:max-w-[420px] md:max-w-[450px] h-[500px] bg-black/75 p-4 flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-100">
              Sing Up
            </h1>

            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
              <input
                className="p-3 my-2 bg-gray-500 focus:outline-0 text-gray-200 placeholder:text-gray-200"
                type="email"
                placeholder="Email"
                autoComplete="email"
                maxLength="50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="p-3 my-2 bg-gray-500 focus:outline-0 text-gray-200 placeholder:text-gray-200"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                maxLength="50"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="bg-indigo-800/70 hover:bg-blue-900 px-5 py-3 my-6 text-white/90 hover:text-white font-semibold"
              >
                Sign Up
              </button>
            </form>

            <p className="pt-3">
              <span className="text-gray-300"> Already subscribed?</span>{" "}
              <Link to="/login" className="text-indigo-600 font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
