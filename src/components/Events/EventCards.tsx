import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import EventBtn from "./EventBtn";
import { useState } from "react";

type Props = {
  poster_path: string;
  title: string;
  desc: string;
  when: string;
};

const EventCards = ({ poster_path, desc, when, title }: Props) => {
  const [eventIndex, setEventIndex] = useState(0);
  const list = [1, 2, 3, 4, 5, 6, 7];
  function showLastEvent() {
    setEventIndex((index) => {
      if (index === 0) return 7 - 1;
      return index - 1;
    });
  }
  function showNextEvent() {
    setEventIndex((index) => {
      if (index === 7 - 1) return 0;
      return index + 1;
    });
  }
  return (
    <div className="hidden relative w-full h-full sm:flex justify-center items-center flex-shrink-0">
      <CircleArrowLeft
        className="h-[10%] sm:w-[10%] text-white m-1 cursor-pointer absolute left-0"
        onClick={showLastEvent}
      />
      <div className="flex w-[80%] h-full relative items-center flex-shrink-0 overflow-hidden">
        {list.map((event, index) => (
          <>
            <div
              className="h-[70%] w-full bg-sky-50 rounded-lg flex items-end flex-col flex-shrink-0"
              key={index}
              style={{ translate: `${-100 * eventIndex}%` }}
            >
              <p className="text-center text-black text-3xl m-[25px] w-[60%] h-[15%]">
                {title.toUpperCase()}
              </p>
              <p className="m-[20px] w-[60%] h-[35%] overflow-hidden text-ellipsis line-clamp-6 font-[Roboto_Flex]">
                {desc}
              </p>
              <p className="w-full text-center text-red-800 cursor-pointer hover:text-red-600">
                Show More...
              </p>
              <EventBtn when={when} />
            </div>
            <img
              src="https://image.tmdb.org/t/p/w500/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg"
              className="absolute left-[0px] 2xl:left-[20px] top-[40px] lg:top-[20px] h-[40%] lg:h-[50%] rounded-lg"
            />
          </>
        ))}
      </div>
      <CircleArrowRight
        className="h-[10%] sm:w-[10%] text-white m-1 cursor-pointer absolute right-0"
        onClick={showNextEvent}
      />
    </div>
  );
};

export default EventCards;
