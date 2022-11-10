import { useEffect, useState } from "react";
import axios from "axios";
import requestsApi from "../helpers/requests";
import { FaPlay } from "react-icons/fa";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requestsApi.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  //   console.log(movie);

  const truncateString = (string, num) => {
    if (string?.length > num) {
      return string.slice(0, num) + " ...";
    } else {
      return string;
    }
  };

  return (
    <div className="w-full h-screen md:h-[550px] text-white">
      <div className="relative w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover object-right md:object-center"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start gap-4 md:gap-2 px-4 md:p-8">
          <h2 className="text-3xl md:text-5xl font-bold">{movie?.title}</h2>

          <div className="flex justify-center items-center gap-2 bg-gradient-to-r from-gray-400 to-gray-200 border-2 border-gray-500 rounded-md w-full py-2 sm:w-28 lg:w-32 mt-4 cursor-pointer">
            <FaPlay className="text-black" />
            <span className="text-black font-bold">Play</span>
          </div>

          <p className="text-gray-400 text-sm mt-4 md:mt-2">
            Released: {movie?.release_date}
          </p>

          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-300 tracking-wider">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
