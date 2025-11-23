import MovieDetail from "./MovieDetail";

const MovieDetails = () => {
  const movieData = [
    { title: "Type", value: "Drama" },
    { title: "Time", value: "125 min" },
    { title: "Country", value: "Poland" },
    { title: "Director", value: "Jan Komasa" },
    { title: "Scenography", value: "Andrzej Iwan" },
    { title: "Premiere", value: "12th November 2025" },
    { title: "Main Roles", value: "Justin Timberlake, Małgorzata Sochacka" },
  ];
  return (
    <div className="w-[350px] m-10">
      {movieData.map((data, index) => (
        <MovieDetail movieData={data} key={index} />
      ))}
    </div>
  );
};

export default MovieDetails;
