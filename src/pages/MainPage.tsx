import EventsSlider from "../components/Events/EventsSlider";
import Title from "../components/Title/Title";

const MainPage = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col sm:justify-center items-center lg:flex-row h-[400px] sm:h-[800px] lg:h-[600px] w-full sm:w-[635px] md:w-[1024px] xl:w-[1200px] 2xl:w-[1400px]">
        <div className="flex flex-col w-[80%] lg:w-[30%] xl:w-[40%] justify-center m-5">
          <Title text="WATCH THE BIGGEST HITS" side="left" />
          <Title text="ON THE BIGGEST SCREENS" side="right" />
        </div>
        <EventsSlider />
      </div>
    </div>
  );
};

export default MainPage;
