import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

type Props = { poster_path: string; title: string };

const EventsMobile = ({ poster_path, title }: Props) => {
  const list = [1, 2, 3, 4, 5, 6, 7];
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
      const newPosition = Math.min(currentPosition + itemWidth * 1, maxScroll);
      sliderRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setCurrentPosition(newPosition);
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      const newPosition = Math.max(currentPosition - itemWidth * 1, 0);
      sliderRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setCurrentPosition(newPosition);
    }
  };
  return (
    <div className="sm:hidden h-full w-full relative ml-5 flex">
      {currentPosition !== 0 ? (
        <CircleArrowLeft
          className="h-[20%] w-[20%] text-white m-2 absolute"
          onClick={prevSlide}
        />
      ) : (
        <></>
      )}
      <div className="flex w-full overflow-hidden h-full" ref={sliderRef}>
        {list.map((nm, index) => (
          <div
            className="flex flex-col m-5 cursor-pointer w-[100px] h-full flex-shrink-0"
            key={index}
            id="event_id"
          >
            <img
              src="https://image.tmdb.org/t/p/w500/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg"
              className="h-[60%] w-[150px] rounded-lg"
            />
            <p className="text-white">{title}</p>
          </div>
        ))}
      </div>
      {currentPosition !== maxScroll ? (
        <CircleArrowRight
          className="h-[20%] w-[20%] text-white m-2 absolute left-[150px] top-0"
          onClick={nextSlide}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default EventsMobile;
