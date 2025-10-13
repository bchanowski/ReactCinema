import { useDateStore } from "../../hooks/useDataStore";
import { scheduleList } from "../../data/scheduleList";
import MoviePanel from "./MoviePanel";

const ScheduleList = () => {
  const date = useDateStore((state) => state.date);
  return (
    <div className="text-white bg-blue-100 rounded-l mt-6">
      {date && (
        <div className="animate-slideUp" key={date.toISOString()}>
          <p>
            {scheduleList[date.getDay()].movies.map((movie, index) => (
              <MoviePanel key={index} movie={movie} />
            ))}
          </p>
        </div>
      )}
    </div>
  );
};

export default ScheduleList;
