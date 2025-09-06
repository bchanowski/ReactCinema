import EventCard from "./EventCard";

const EventsSlider = () => {
  return (
    <div className="w-[60%] flex justify-center items-center">
      <EventCard
        movieId="id"
        desc="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere tellus nec consectetur convallis. Cras malesuada, arcu eget rhoncus aliquet, erat tellus feugiat odio, vitae scelerisque nibh eros eu metus. Vestibulum dolor neque convallis eget egestas a, convallis id nisl. Pellentesque eget cursus odio."
        when="today"
        title="harry potter marathon 1-3"
      />
    </div>
  );
};

export default EventsSlider;
