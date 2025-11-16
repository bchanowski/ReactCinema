import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type Props = {
  dates: Date[];
};

const DateSwitcher = ({ dates }: Props) => {
  const [selectedDate, setSelectedDate] = useState(0);
  return (
    <div className="w-full h-[35px] relative overflow-hidden text-center">
      {selectedDate !== 0 && (
        <ChevronLeft
          className="absolute cursor-pointer w-[35px] h-[35px]"
          onClick={() => {
            setSelectedDate((dateNumber) => dateNumber - 1);
          }}
        />
      )}

      <p className="w-full text-xl">
        {dates[selectedDate].getDate()}{" "}
        {dates[selectedDate].toLocaleString("eng", { month: "long" })}
      </p>

      {selectedDate !== 6 && (
        <ChevronRight
          className="absolute right-0 top-0 cursor-pointer w-[35px] h-[35px]"
          onClick={() => {
            setSelectedDate((dateNumber) => dateNumber + 1);
          }}
        />
      )}
    </div>
  );
};

export default DateSwitcher;
