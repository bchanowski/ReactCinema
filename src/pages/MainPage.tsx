import MoviesCarousel from "../components/MoviesCarousel/MoviesCarousel";
import Title from "../components/Title/Title";

const MainPage = () => {
  return (
    <div>
      <Title text="WATCH THE BIGGEST HITS" side="left" />
      <Title text="ON THE BIGGEST SCREENS" side="right" />
      <MoviesCarousel />
    </div>
  );
};

export default MainPage;
