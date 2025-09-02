type Props = {
  url: string;
};

const MoviePoster = ({ url }: Props) => {
  return (
    <img className="h-[300px]" src={`https://image.tmdb.org/t/p/w500${url}`} />
  );
};

export default MoviePoster;
