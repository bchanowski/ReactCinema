import EventCards from "./EventCards";
import EventsMobile from "./EventsMobile";

const EventsSlider = () => {
  return (
    <div className="w-full sm:w-[635px] lg:w-[70%] h-full sm:h-[75%] lg:h-full xl:w-[60%] flex justify-center items-center overflow-hidden">
      <EventCards
        poster_path="id"
        desc="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere tellus nec consectetur convallis. Cras malesuada, arcu eget rhoncus aliquet, erat tellus feugiat odio, vitae scelerisque nibh eros eu metus. Vestibulum dolor neque convallis eget egestas a, convallis id nisl. Pellentesque eget cursus odio."
        when="today"
        title="harry potter marathon 1-3"
      />

      <EventsMobile poster_path="id" title="harry potter marathon 1-3" />
    </div>
  );
};

export default EventsSlider;
