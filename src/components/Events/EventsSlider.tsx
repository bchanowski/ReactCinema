import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import EventCard from "./EventCard";
import EventsMobile from "./EventsMobile";

const EventsSlider = () => {
  return (
    <div className="w-full sm:w-[635px] lg:w-[70%] h-full sm:h-[75%] lg:h-full xl:w-[60%] flex justify-center items-center">
      <CircleArrowLeft className="h-[20%] w-[20%] sm:h-[10%] sm:w-[10%]] text-white m-2 sm:m-0 cursor-pointer" />
      <EventCard
        poster_path="id"
        desc="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere tellus nec consectetur convallis. Cras malesuada, arcu eget rhoncus aliquet, erat tellus feugiat odio, vitae scelerisque nibh eros eu metus. Vestibulum dolor neque convallis eget egestas a, convallis id nisl. Pellentesque eget cursus odio."
        when="today"
        title="harry potter marathon 1-3"
      />
      <EventsMobile poster_path="id" title="harry potter marathon 1-3" />
      <CircleArrowRight className="h-[20%] w-[20%] sm:h-[10%] sm:w-[10%] text-white m-2 sm:m-0 cursor-pointer" />
    </div>
  );
};

export default EventsSlider;
