import MovieDetail from "./MovieDetail";

const MovieDetails = () => {
  const movieData = [
    { title: "Type", value: "Drama" },
    { title: "Time", value: "105 min" },
    { title: "Country", value: "United States" },
    { title: "Director", value: "Damien Chazelle" },
    { title: "Scenography", value: "Damien Chazelle" },
    { title: "Premiere", value: "16th January 2014" },
    { title: "Main Roles", value: "Miles Teller, J.K. Simmons" },
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
