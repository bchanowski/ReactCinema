type Props = {
  movieData: { title: string; value: string };
};

const MovieDetail = ({ movieData }: Props) => {
  return (
    <div className="text-white flex flex-wrap m-5 items-end">
      <p className="w-[45%] text-xl font-bold">{movieData.title}:</p>
      <span className="ml-5">{movieData.value}</span>
    </div>
  );
};

export default MovieDetail;
