import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const RowsMovies = ({ title, fetchUrl, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);

  //   console.log(movies);

  const slideLeft = () => {
    let slider = document.querySelector("#slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.querySelector("#slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="py-4">
      <h3 className="text-white font-bold text-xl md:text-2xl p-4">{title}</h3>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white
          rounded-full
          absolute
          left-2
          opacity-50
          hover:opacity-100
          cursor-pointer
          z-10 hidden group-hover:block"
        />

        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies?.map((item, index) => (
            <Movie item={item} key={index} />
          ))}
        </div>

        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white
          rounded-full
          absolute
          right-2
          opacity-50
          hover:opacity-100
          cursor-pointer
          z-10 hidden group-hover:block"
        />
      </div>
    </div>
  );
};

export default RowsMovies;
