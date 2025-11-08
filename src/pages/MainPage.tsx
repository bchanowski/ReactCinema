import EventsSlider from "../components/Events/EventsSlider";
import Footer from "../components/Footer/Footer";
import MoviesCarousel from "../components/MoviesCarousel/MoviesCarousel";
import NewsSection from "../components/News/NewsSection";
import MovieSchedule from "../components/Schedule/MovieSchedule";
import Title from "../components/Title/Title";
import Upcoming from "../components/Upcoming/Upcoming";

const MainPage = () => {
  return (
    <div className="flex justify-center items-center w-full flex-col">
      <div className="flex flex-col sm:justify-center items-center lg:flex-row h-[500px] sm:h-[800px] lg:h-[600px] w-full sm:w-[635px] md:w-[760px] lg:w-[1024px] xl:w-[1200px] 2xl:w-[1400px]">
        <div className="flex flex-col w-[80%] lg:w-[20%] xl:w-[40%] justify-center m-5">
          <Title text="WATCH THE BIGGEST HITS" side="left" color="white" />
          <Title text="ON THE BIGGEST SCREENS" side="right" color="white" />
        </div>
        <EventsSlider />
      </div>
      {/*<MoviesCarousel />*/}
      <MovieSchedule />
      <NewsSection />
      <Upcoming />
    </div>
  );
};

export default MainPage;
