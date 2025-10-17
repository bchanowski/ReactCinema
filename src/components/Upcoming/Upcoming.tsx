import { upcomingMovies } from "../../data/upcomingMovies";
import UpcomingMovie from "./UpcomingMovie";

const Upcoming = () => {
  return (
    <div className="w-full sm:w-[635px] md:w-[760px] lg:w-[1024px] xl:w-[1200px] 2xl:w-[1400px] h-[500px] flex items-center text-white mt-10 flex-col">
      <div className="w-[80%] h-[80px] flex justify-between items-start tracking-wide">
        <p className="text-4xl flex items-center h-[40px]">
          UPCOMING{" "}
          <span className="text-lg ml-10 text-gray-200">WATCH TRAILERS</span>
        </p>
        <span className="flex text-lg items-center h-[40px] underline underline-offset-4 cursor-pointer hover:no-underline">
          SHOW MORE
        </span>
      </div>
      <div className="flex overflow-auto h-[400px] w-[80%] flex-shrink-0">
        {upcomingMovies.map((movie, index) => (
          <UpcomingMovie movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
