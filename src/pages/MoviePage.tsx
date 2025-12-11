import Title from "../components/Title/Title";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import MovieInfo from "../components/MovieDetails/MovieInfo";

const MoviePage = () => {
  return (
    <div>
      <div className="text-center">
        <Title text="WHIPLASH" side="left" color="white" />
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
        <div>
          <img
            className="text-white flex w-[350px] h-[500px] justify-center items-center border-1 border-white rounded-lg m-10 mb-20"
            src="https://image.tmdb.org/t/p/original/mh6vEkev7d2F5uirRN8BGrfmOy7.jpg"
          />
          <MovieDetails />
        </div>
        <MovieInfo />
      </div>
    </div>
  );
};

export default MoviePage;
