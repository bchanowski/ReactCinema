import DateSwitcher from "../DateSwitcher/DateSwitcher";
import MoviePanel from "../Schedule/MoviePanel";

const dates: Date[] = [];

for (let i = 0; i < 7; i++) {
  const day = new Date();
  if (i !== 0) day.setDate(day.getDate() + i);
  dates.push(day);
}

const MovieInfo = () => {
  const movie = {
    movieId: "1",
    premiere: true,
    exclusive: false,
    hours: ["10:30", "15:00"],
  };
  return (
    <div className="w-[60%] text-white mt-10 h-[600px] flex flex-col justify-around">
      <p>
        &nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        lacinia odio non lectus interdum venenatis. Cras vulputate nunc a tortor
        imperdiet, sed eleifend nibh varius. Donec in neque dictum, blandit diam
        ut, congue purus. Donec elementum, diam sit amet eleifend tincidunt,
        nisl nibh egestas mi, ut tincidunt felis ante at risus. Aenean id nibh
        ac nibh accumsan consectetur. Nullam dictum sapien id purus hendrerit
        placerat. Etiam elit nulla, blandit at luctus quis, hendrerit eget
        magna. Aliquam dictum rutrum tristique. Morbi eu pulvinar nunc, accumsan
        egestas neque. Phasellus tempus dictum tincidunt.
      </p>
      <div>
        <div className="mt-8 mb-8">
          <DateSwitcher dates={dates} />
        </div>
        <div className="h-[180px] bg-sky-50 rounded-lg">
          <MoviePanel movie={movie} />
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
