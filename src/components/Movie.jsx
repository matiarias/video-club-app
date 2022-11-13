import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);

  return (
    <>
      <div className="w-[200px] md:w-[250px] lg:w-[300px] inline-block cursor-pointer relative p-2">
        <img
          className="w-full h-auto block"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
        />

        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 flex justify-center items-center px-2 text-center">
          <p className="text-white whitespace-normal font-bold text-xs md:text-sm ">
            {item?.title}
          </p>

          <p>
            {like ? (
              <FaHeart className="absolute top-4 left-4 text-gray-400 text-xl md:text-2xl" />
            ) : (
              <FaRegHeart className="absolute top-4 left-4 text-gray-400 text-xl md:text-2xl" />
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Movie;
