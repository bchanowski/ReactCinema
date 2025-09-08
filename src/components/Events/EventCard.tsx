import EventBtn from "./EventBtn";

type Props = {
  poster_path: string;
  title: string;
  desc: string;
  when: string;
};

const EventCard = ({ poster_path, desc, when, title }: Props) => {
  return (
    <div className="hidden relative w-full h-full sm:flex justify-center items-center">
      <div className="h-[70%] w-[80%] 2xl:w-[70%] bg-sky-50 rounded-lg flex items-end flex-col">
        <p className="text-center text-black text-3xl m-[25px] w-[60%] h-[15%]">
          {title.toUpperCase()}
        </p>
        <p className="m-[20px] w-[60%] h-[35%] overflow-hidden text-ellipsis line-clamp-6 font-[Roboto_Flex]">
          {desc}
        </p>
        <p className="w-full text-center text-red-800 cursor-pointer hover:text-red-600">
          Show More...
        </p>
        <EventBtn when={when} />
      </div>
      <img
        src="https://image.tmdb.org/t/p/w500/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg"
        className="absolute left-0 2xl:left-[40px] top-[35px] lg:top-[15px] h-[45%] lg:h-[50%] rounded-lg"
      />
    </div>
  );
};

export default EventCard;
