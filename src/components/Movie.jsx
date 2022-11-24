import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase/firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);

  const [saved, setSaved] = useState(false);

  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const saveMovie = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      toast.info("Please Log In", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    }
  };

  return (
    <>
      <div className="relative w-[270px] sm:w-[280px] lg:w-[300px] inline-block cursor-pointer p-2 hover:scale-[1.05] transition ease-in-out delay-100">
        <Link to={`/movie/${item?.id}`}>
          <img
            className="w-full h-auto object-cover block"
            src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
            alt={item?.title}
          />

          <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 flex justify-center items-center px-2 text-center hover:translate-y-1">
            <p className="text-white whitespace-normal font-bold text-xs md:text-sm ">
              {item?.title}
            </p>
          </div>
        </Link>

        <p onClick={saveMovie}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-indigo-600 text-xl md:text-2xl" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-indigo-600 text-xl md:text-2xl" />
          )}
        </p>
      </div>
    </>
  );
};

export default Movie;
