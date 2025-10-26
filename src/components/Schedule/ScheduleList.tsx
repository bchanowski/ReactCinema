import { useDateStore } from "../../hooks/useDateStore";
import { scheduleList } from "../../data/scheduleList";
import MoviePanel from "./MoviePanel";

const ScheduleList = () => {
  const date = useDateStore((state) => state.date);
  return (
    <div className="text-white rounded-l mt-6">
      {date && (
        <div
          className="animate-slideUp bg-blue-100 rounded-lg"
          key={date.toISOString()}
        >
          <div>
            {scheduleList[date.getDay()].movies.map((movie, index) => (
              <MoviePanel key={index} movie={movie} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleList;
