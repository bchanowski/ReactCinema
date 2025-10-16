import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { currentEvents } from "../../data/currentEvents.ts";

const EventsMobile = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      const firstProduct = sliderRef.current.querySelector(
        "#event_id"
      ) as HTMLElement;
      if (firstProduct) {
        const style = window.getComputedStyle(firstProduct);
        const margin =
          parseFloat(style.marginRight) + parseFloat(style.marginLeft);
        setItemWidth(firstProduct.offsetWidth + margin);
      }

      setMaxScroll(
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth
      );
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        setMaxScroll(
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth
        );
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (sliderRef.current) {
      const newPosition = Math.min(
        currentPosition + itemWidth * 1.2,
        maxScroll
      );
      sliderRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setCurrentPosition(newPosition);
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      const newPosition = Math.max(currentPosition - itemWidth * 1.2, 0);
      sliderRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setCurrentPosition(newPosition);
    }
  };
  return (
    <div className="sm:hidden h-full w-full relative flex">
      {currentPosition !== 0 ? (
        <CircleArrowLeft
          className="h-[15%] w-[15%] text-white m-0.5 absolute top-[30%]"
          onClick={prevSlide}
        />
      ) : (
        <></>
      )}
      <div className="flex w-[80%] overflow-hidden h-full ml-5" ref={sliderRef}>
        {currentEvents.map((event, index) => (
          <div
            className="flex flex-col m-5 cursor-pointer w-[135px] h-full flex-shrink-0"
            key={index}
            id="event_id"
          >
            <img
              src={"https://image.tmdb.org/t/p/w500/" + event.poster_path}
              className="h-[200px] w-full rounded-lg"
            />
            <p className="text-white">{event.title}</p>
          </div>
        ))}
      </div>
      {currentPosition !== maxScroll ? (
        <CircleArrowRight
          className="h-[15%] w-[15%] text-white m-0.5 absolute top-[30%] right-0"
          onClick={nextSlide}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default EventsMobile;
