import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import EventBtn from "./EventBtn";
import { useState } from "react";
import { currentEvents } from "../../data/currentEvents.ts";
import { Link } from "react-router";

const EventCards = () => {
  const [eventIndex, setEventIndex] = useState(0);
  function showLastEvent() {
    setEventIndex((index) => {
      if (index === 0) return currentEvents.length - 1;
      return index - 1;
    });
  }
  function showNextEvent() {
    setEventIndex((index) => {
      if (index === currentEvents.length - 1) return 0;
      return index + 1;
    });
  }
  return (
    <div className="hidden relative w-[700px] h-full sm:flex justify-center items-center flex-shrink-0">
      <CircleArrowLeft
        className="h-[10%] sm:w-[10%] hover:h-[11%] text-white cursor-pointer absolute left-[35px] lg:left-0 transition-normal duration-100 ease-in"
        onClick={showLastEvent}
      />
      <div className="flex w-[65%] lg:w-[75%] h-full items-center overflow-hidden lg:mr-2 lg:ml-2">
        {currentEvents.map((event, index) => (
          <>
            <div
              className="h-[70%] w-full bg-sky-50 rounded-lg flex items-end flex-col flex-shrink-0"
              key={index}
              style={{ translate: `${-100 * eventIndex}%` }}
            >
              <p className="text-center text-black text-3xl m-[25px] w-[60%] h-[60px]">
                {event.title.toUpperCase()}
              </p>
              <p className="m-[15px] w-[60%] h-[150px] overflow-hidden text-ellipsis font-[Roboto_Flex] line-clamp-6">
                {event.desc}
              </p>
              <Link
                to="/event-page"
                className="w-full text-center text-red-800 cursor-pointer hover:text-red-600"
              >
                Show More...
              </Link>
              <EventBtn when={event.when} />
            </div>
            <img
              src={"https://image.tmdb.org/t/p/w500/" + event.poster_path}
              className={
                "absolute left-[110px] lg:left-[70px] top-[60px] lg:top-[30px] h-[40%] lg:h-[50%] rounded-lg " +
                (eventIndex !== index ? "hidden" : "")
              }
            />
          </>
        ))}
      </div>
      <CircleArrowRight
        className="h-[10%] hover:h-[11%] sm:w-[10%] text-white cursor-pointer absolute right-[35px] lg:right-0 transition-normal duration-100 ease-in-out"
        onClick={showNextEvent}
      />
    </div>
  );
};

export default EventCards;
