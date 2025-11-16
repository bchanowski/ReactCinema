import Title from "../components/Title/Title";
import MoviePanel from "../components/Schedule/MoviePanel";
import DateSwitcher from "../components/DateSwitcher/DateSwitcher";

const dates: Date[] = [];

for (let i = 0; i < 7; i++) {
  const day = new Date();
  if (i !== 0) day.setDate(day.getDate() + i);
  dates.push(day);
}

const MoviePage = () => {
  const movie = {
    movieId: "1",
    premiere: true,
    exclusive: false,
    hours: ["10:30", "11:00"],
  };

  return (
    <div>
      <div className="text-center">
        <Title text="MOVIE TITLE" side="left" color="white" />
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="text-white flex w-[350px] h-[500px] justify-center items-center border-1 border-white rounded-lg m-10">
          MOVIE IMAGE
        </div>
        <div className="w-[60%] text-white mt-10">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lacinia odio non lectus interdum venenatis. Cras vulputate nunc a
            tortor imperdiet, sed eleifend nibh varius. Donec in neque dictum,
            blandit diam ut, congue purus. Donec elementum, diam sit amet
            eleifend tincidunt, nisl nibh egestas mi, ut tincidunt felis ante at
            risus. Aenean id nibh ac nibh accumsan consectetur. Nullam dictum
            sapien id purus hendrerit placerat. Etiam elit nulla, blandit at
            luctus quis, hendrerit eget magna. Aliquam dictum rutrum tristique.
            Morbi eu pulvinar nunc, accumsan egestas neque. Phasellus tempus
            dictum tincidunt.
          </p>
          <div className="mt-8 mb-8">
            <DateSwitcher dates={dates} />
          </div>
          <div className="h-[180px] bg-sky-50 rounded-lg">
            <MoviePanel movie={movie} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
