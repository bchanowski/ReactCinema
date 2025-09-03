type Props = {
  url: string;
};

const MoviePoster = ({ url }: Props) => {
  return (
    <>
      <div
        className="h-[400px] aspect-[2/3] mr-12 bg-cover inset-shadow-[15px_25px_50px_10px] inset-shadow-black"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${url})`,
        }}
      />
    </>
  );
};

export default MoviePoster;
