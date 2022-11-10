const NavBar = () => {
  return (
    <div className="w-full flex justify-between items-center px-6 py-4 z-[100] absolute top-0 left-0">
      <h1 className="text-4xl font-bold text-red-600 cursor-pointer">
        Netflix
      </h1>
      <div>
        <button className="text-white pr-4">Sign In</button>
        <button className="bg-red-600 text-white px-6 py-2 rounded-sm cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
