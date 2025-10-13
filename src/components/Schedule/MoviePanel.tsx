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
    <div className="h-[180px] w-full flex justify-center items-center text-black border-b-2">
      <img
        src="https://image.tmdb.org/t/p/w500/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg"
        className="h-[80%] rounded-lg mr-5"
      />
      <div className="h-full w-[20%] flex items-center flex-col justify-center relative right-0">
        <div className="absolute top-5 left-0 flex">
          {movie.premiere && (
            <p className="bg-red-700 p-1 text-sm text-white">PREMIERE</p>
          )}
          {movie.exclusive && (
            <p className="bg-sky-700 p-1 text-sm text-white">EXCLUSIVE</p>
          )}
        </div>
        <p className="flex items-center">TEST MOVIE TITLE</p>
        <p className="text-sm">Comedy, Action</p>
      </div>
      <div className="flex w-[60%] h-full justify-around items-center">
        {movie.hours.map((hour, index) => (
          <p
            key={index}
            className="cursor-pointer hover:bg-blue-200 h-[50%] flex items-center flex-col justify-center p-10 border-1"
          >
            {hour}
            <p className="text-sm">2D, Subtitles</p>
          </p>
        ))}
      </div>
    </div>
  );
};

export default MoviePanel;
