import { useDateStore } from "../../hooks/useDataStore";

const dates: Date[] = [];

for (let i = 0; i < 7; i++) {
  const day = new Date();
  if (i !== 0) day.setDate(day.getDate() + i);
  dates.push(day);
}

const DatePicker = () => {
  const setDate = useDateStore((state) => state.setDate);
  return (
    <div className="flex w-[80%] sm:w-[550px] lg:w-[600px] xl:w-[700px] 2xl:w-[805px] h-[100px] lg:h-[140px] justify-between bg-red-700 rounded-lg absolute left-10 sm:left-20 lg:left-100 xl:left-130 top-57 sm:top-60 lg:top-50 text-white overflow-x-auto z-1">
      {dates.map((date, index) => (
        <span
          key={index}
          className={
            "flex flex-col justify-center items-center lg:w-[115px] pl-2 pr-2 hover:bg-red-600 h-[100px] lg:h-[140px] cursor-pointer " +
            (index !== 6 ? "border-r-1" : "rounded-br-lg rounded-tr-lg") +
            (index === 0 ? " rounded-bl-lg rounded-tl-lg" : "")
          }
          onClick={() => setDate(date)}
        >
          {date.toLocaleDateString("eng", { weekday: "long" })}{" "}
          <p className="text-center text-xs md:text-md">
            {String(date.getDate()).padStart(2, "0")}
            <br />
            {date.toLocaleString("eng", { month: "long" })}
          </p>
        </span>
      ))}
    </div>
  );
};

export default DatePicker;
