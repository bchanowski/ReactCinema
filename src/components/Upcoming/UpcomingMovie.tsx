import { CirclePlay } from "lucide-react";
import { useState } from "react";
import MovieTrailer from "./MovieTrailer";

type Props = {
  movie: {
    poster_path: string;
    title: string;
    date: string;
    trailer_link: string;
  };
};

const UpcomingMovie = ({ movie }: Props) => {
  const [showPlay, setShowPlay] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="w-[200px] h-[380px] mr-10 flex-shrink-0">
      <div
        className="relative h-[300px] w-[200px]"
        onMouseEnter={() => setShowPlay(true)}
        onMouseLeave={() => setShowPlay(false)}
        onClick={() => {
          setOpen(true);
          if (typeof window != "undefined" && window.document) {
            document.body.style.overflow = "hidden";
          }
        }}
      >
        <img
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          alt={movie.title + " Poster"}
          className={
            "w-full h-[300px] transition-normal duration-200 ease-in-out cursor-pointer" +
            (showPlay ? " blur-xs" : "")
          }
        />
        <CirclePlay
          className={
            showPlay
              ? "absolute top-34 left-20 h-[50px] w-[50px] cursor-pointer hover:text-gray-500 transition-normal duration-200 ease-in-out"
              : "hidden"
          }
        />
      </div>
      <div className="flex flex-col h-[75px] justify-between items-center text-center">
        <p className="text-wrap overflow-hidden">{movie.title}</p>
        <p>{movie.date}</p>
      </div>
      {open && (
        <MovieTrailer link={movie.trailer_link} close={() => setOpen(false)} />
      )}
    </div>
  );
};

export default UpcomingMovie;
