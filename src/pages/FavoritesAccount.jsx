import { useEffect, useState } from "react";
import MoviesCollage from "../assets/movies-collage.jpg";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase/firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

const FavoritesAccount = () => {
  const [movies, setMovies] = useState([]);

  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);

  const deleteMovie = async (id) => {
    try {
      const result = movies.filter((item) => item.id !== id);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative min-h-screen w-screen">
      <div className="relative h-[60vh] w-full">
        <img
          className="h-full w-full object-cover object-center"
          src={MoviesCollage}
          alt="Movies Collage"
        />
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-start px-8 bg-gradient-to-r from-black/80">
          <h2 className="text-gray-300 text-3xl md:text-5xl font-medium">
            My Movies
          </h2>
        </div>
      </div>

      <div className="max-w-screen-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-y-12 lg:gap-x-8 md:gap-4 py-8 px-12 md:px-4 lg:px-8">
        {movies?.map((item) => (
          <div
            key={item?.id}
            className="relative w-full sm:w-[270px] md:w-[290px] lg:w-[280px] block cursor-pointer hover:scale-[1.03] transition ease-in-out delay-100 mx-auto"
          >
            <img
              className="w-full h-auto object-cover block"
              src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
              alt={item?.title}
            />

            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 flex justify-center items-center px-2 text-center hover:translate-y-1">
              <p className="text-white whitespace-normal font-bold text-xs md:text-sm ">
                {item?.title}
              </p>

              <AiOutlineClose
                onClick={() => deleteMovie(item.id)}
                className="absolute top-1 right-2 text-indigo-200 text-3xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesAccount;
