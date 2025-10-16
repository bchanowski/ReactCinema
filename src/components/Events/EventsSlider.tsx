import EventCards from "./EventCards";
import EventsMobile from "./EventsMobile";

const EventsSlider = () => {
  return (
    <div className="w-full sm:w-[635px] lg:w-[70%] h-full sm:h-[75%] lg:h-full xl:w-[60%] flex justify-center items-center overflow-hidden">
      <EventCards />
      <EventsMobile />
    </div>
  );
};

export default EventsSlider;
