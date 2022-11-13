import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen w-screen">
      <div className="relative h-full w-full">
        <img
          className="h-full w-full object-cover"
          src={
            "https://assets.nflxext.com/ffe/siteui/vlv3/0ef67cc5-0aa7-47cf-87bd-7f595afc7cfb/a25d952a-f1d3-46a3-acce-e0e4265c2830/AR-es-20221107-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          }
          alt="netflix-background-image"
        />

        <div className="absolute top-0 left-0 h-full w-full bg-gray-900/60"></div>
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center px-8 md:p-4">
          <div className="w-full sm:max-w-[420px] md:max-w-[450px] h-[500px] bg-black/75 p-4 flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-100">
              Welcome back!
            </h1>

            <form className="w-full flex flex-col py-4">
              <input
                className="p-3 my-2 bg-gray-500 focus:outline-0 placeholder:text-gray-200"
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                className="p-3 my-2 bg-gray-500 focus:outline-0 placeholder:text-gray-200"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <button className="bg-indigo-800/70 hover:bg-blue-900 px-5 py-3 my-6 text-white/90 hover:text-white font-semibold">
                Log in
              </button>
            </form>

            <p className="pt-3">
              <span className="text-gray-300">New to VideoClub?</span>{" "}
              <Link to="/signup" className="text-indigo-600 font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
