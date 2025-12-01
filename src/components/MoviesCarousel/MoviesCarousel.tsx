import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../../api/GetMovies";
import type { TMovie } from "../../types/MovieType";
import MoviePoster from "./MoviePoster";

const MoviesCarousel = () => {
  const { data: populatMovieData, isLoading } = useQuery<TMovie[]>({
    queryKey: ["populatMovieData"],
    queryFn: () => getPopularMovies(),
  });

  return (
    <div className="overflow-hidden relative h-[500px] w-full mb-20">
      <div className="flex absolute left-[0px] justify-center items-center h-full w-[200%] animate-slide">
        {isLoading ? (
          "test"
        ) : (
          <>
            {populatMovieData &&
              populatMovieData.map((option, index) => (
                <MoviePoster url={option.poster_path} key={index} />
              ))}
            {populatMovieData &&
              populatMovieData.map((option, index) => (
                <MoviePoster url={option.poster_path} key={index} />
              ))}
            {populatMovieData &&
              populatMovieData.map((option, index) => (
                <MoviePoster url={option.poster_path} key={index} />
              ))}
            {populatMovieData &&
              populatMovieData.map((option, index) => (
                <MoviePoster url={option.poster_path} key={index} />
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MoviesCarousel;
