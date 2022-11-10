const NavBar = () => {
  return (
    <div className="w-full flex justify-between items-center px-6 py-4 z-[100] absolute top-0 left-0">
      <h1 className="text-2xl md:text-4xl font-bold text-red-700 cursor-pointer">
        VideoClub
      </h1>
      <div>
        <button className="text-white pr-4 mr-4">Sign In</button>
        <button className="bg-red-700 text-white px-6 py-2 rounded-md cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
