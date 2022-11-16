import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

const SingleMovie = () => {
  const [oneMovie, setOneMovie] = useState([]);

  const [videos, setVideos] = useState([]);

  const [loading, setLoading] = useState(true);

  const params = useParams();

  // ------------------------------- Fetch Movie with id ------------------------------------

  const fetchMovie = async (id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&language=en-US`
      );
      // console.log(response.data);
      setOneMovie(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  // -------------------------- Fetch Videos of the Movie with id ---------------------------------

  const fetchVideo = async (id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&language=en-US`
      );
      // console.log(response.data.results);
      setVideos(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideo(params.id);
  }, [params.id]);

  // ----------------------------------------------------------------------------------------

  return (
    <>
      {loading ? (
        <div className="h-screen w-screen flex justify-center items-center p-8">
          <h3 className="text-white text-3xl">loading...</h3>
        </div>
      ) : (
        <div className="relative h-screen w-screen overflow-x-hidden">
          <img
            className="h-full w-full object-cover object-center"
            src={`https://image.tmdb.org/t/p/original/${oneMovie?.backdrop_path}`}
            alt={oneMovie?.title}
          />

          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r to-black/60 from-black/80"></div>

          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start gap-2 p-4 md:p-8">
            <h1 className="text-gray-100 font-bold text-3xl md:text-4xl lg:text-5xl">
              {oneMovie?.title}
            </h1>

            <div className="w-full xl:max-w-[800px] mt-2">
              <p className="text-gray-300 font-normal text-base md:text-lg lg:text-xl tracking-wide">
                {oneMovie?.overview}
              </p>
            </div>

            <span className="text-white font-medium text-base md:text-lg">
              {oneMovie?.release_date}
            </span>

            <div className="flex justify-center items-center gap-4 mt-4">
              {oneMovie?.genres?.map((item) => (
                <span
                  className="text-black font-bold py-2 px-4 sm:px-6 md:px-8 bg-yellow-500 rounded-2xl"
                  key={item?.id}
                >
                  {item?.name}
                </span>
              ))}
            </div>

            <a
              className="py-2 w-full sm:w-32 text-center mt-8 md:mt-6 bg-gradient-to-t to-red-900 from-red-500 text-white rounded-lg"
              href={`https://www.youtube.com/watch?v=${videos[0]?.key}`}
              target="_blank"
            >
              Trailer
            </a>
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};

export default SingleMovie;
