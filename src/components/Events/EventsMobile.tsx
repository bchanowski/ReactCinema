import React from "react";

type Props = { poster_path: string; title: string };

const EventsMobile = ({ poster_path, title }: Props) => {
  const list = [1, 2, 3, 4];
  return (
    <div className="sm:hidden h-full flex overflow-hidden justify-center items-center">
      {list.map((nm, index) => (
        <div className="flex flex-col m-5 cursor-pointer">
          <img
            src="https://image.tmdb.org/t/p/w500/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg"
            className="h-[50%] w-full rounded-lg"
          />
          <p className="text-white">{title}</p>
        </div>
      ))}
    </div>
  );
};

export default EventsMobile;
