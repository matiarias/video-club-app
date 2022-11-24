import MoviesCollage from "../assets/movies-collage.jpg";

const FavoritesAccount = () => {
  return (
    <div className="relative min-h-screen w-screen">
      <div className="h-[60vh] w-full">
        <img
          className="h-full w-full object-cover object-center"
          src={MoviesCollage}
          alt="Movies Collage"
        />
      </div>
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-black/80"></div>
      <div className="absolute top-0 left-0 h-full w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-12"></div>
    </div>
  );
};

export default FavoritesAccount;
