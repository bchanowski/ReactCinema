type Props = {
  movieData: { title: string; value: string };
};

const MovieDetail = ({ movieData }: Props) => {
  return (
    <div className="text-white flex flex-wrap m-7 items-end border-b-1">
      <p className="w-[45%] text-xl font-bold text-red-700">
        {movieData.title}:
      </p>
      <span className="ml-5">{movieData.value}</span>
    </div>
  );
};

export default MovieDetail;
