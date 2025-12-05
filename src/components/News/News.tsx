import { Link } from "react-router";

type Props = { title: string; desc: string };

const News = ({ title, desc }: Props) => {
  return (
    <Link
      to="info-page"
      className="bg-sky-50 text-black w-[95%] rounded-lg mt-5 h-[80px] text-[10px] sm:text-md md:text-lg lg:text-xl p-5 flex items-center font-bold cursor-pointer whitespace-nowrap"
    >
      {title}
      <p className="font-normal ml-5 text-[10px] lg:text-sm md:whitespace-pre-line overflow-hidden text-ellipsis font-sans">
        {desc}
      </p>
    </Link>
  );
};

export default News;
