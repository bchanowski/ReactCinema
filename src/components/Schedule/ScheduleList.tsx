import { useDateStore } from "../../hooks/useDataStore";

const ScheduleList = () => {
  const date = useDateStore((state) => state.date);
  return (
    <div className="text-white">
      ScheduleList:{" "}
      {date && (
        <div className="animate-slideUp" key={date.toISOString()}>
          <p>
            {String(date.getDate()).padStart(2, "0")}
            <br />
            {date.toLocaleString("eng", { month: "long" })}
          </p>
        </div>
      )}
    </div>
  );
};

export default ScheduleList;
