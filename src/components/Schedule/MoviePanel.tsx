import { Link } from "react-router";

type Props = {
  movie: {
    movieId: string;
    premiere: boolean;
    exclusive: boolean;
    hours: string[];
  };
};

const MoviePanel = ({ movie }: Props) => {
  return (
    <div className="h-full lg:h-[180px] w-full flex justify-center items-center text-black border-b-2">
      <img
        src="https://image.tmdb.org/t/p/w500/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg"
        className="h-[150px] lg:h-[80%] rounded-lg m-2 lg:mr-5"
      />
      <div className="h-[150px] lg:h-full w-[20%] flex items-center flex-col justify-center relative right-0">
        <div className="sm:absolute top-0 lg:top-5 left-0 flex sm:flex-row flex-col">
          {movie.premiere && (
            <p className="bg-red-700 p-1 text-[8px] lg:text-sm text-white">
              PREMIERE
            </p>
          )}
          {movie.exclusive && (
            <p className="bg-sky-700 p-1 text-[8px] lg:text-sm text-white">
              EXCLUSIVE
            </p>
          )}
        </div>
        <Link
          className="flex text-sm sm:text-md items-center hover:text-blue-900 cursor-pointer"
          to="movie"
        >
          TEST MOVIE TITLE
        </Link>
        <p className="text-xs lg:text-sm">Comedy, Action</p>
      </div>
      <div className="flex flex-col sm:flex-row w-[60%] h-full justify-around items-center overflow-hidden">
        {movie.hours.map((hour, index) => (
          <p
            key={index}
            className="cursor-pointer hover:bg-blue-200 lg:h-[50%] flex items-center flex-col justify-center p-1 lg:p-10 border-1"
          >
            {hour}
            <p className="text-xs lg:text-sm">2D, Subtitles</p>
          </p>
        ))}
      </div>
    </div>
  );
};

export default MoviePanel;
