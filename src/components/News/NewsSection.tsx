import News from "./News";

const NewsSection = () => {
  return (
    <div className="h-[200px] w-full sm:w-[635px] md:w-[760px] lg:w-[1024px] xl:w-[1200px] 2xl:w-[1400px] flex items-center text-white mt-10 flex-col">
      <div className="w-[80%] flex justify-between items-start tracking-wide">
        <p className="text-4xl flex items-center h-[40px]">
          NEWS{" "}
          <span className="text-lg ml-10 text-gray-200">STAY UP TO DATE</span>
        </p>
        <span className="flex text-lg items-center h-[40px] underline underline-offset-4 cursor-pointer hover:no-underline">
          SHOW MORE
        </span>
      </div>
      <News />
    </div>
  );
};

export default NewsSection;
