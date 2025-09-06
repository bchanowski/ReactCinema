import EventsSlider from "../components/Events/EventsSlider";
import Title from "../components/Title/Title";

const MainPage = () => {
  return (
    <div className="flex justify-center">
      <div className="flex h-[600px] w-[1400px]">
        <div className="flex flex-col w-[40%] justify-center">
          <Title text="WATCH THE BIGGEST HITS" side="left" />
          <Title text="ON THE BIGGEST SCREENS" side="right" />
        </div>
        <EventsSlider />
      </div>
    </div>
  );
};

export default MainPage;
