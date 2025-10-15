type Props = {};

const News = (props: Props) => {
  return (
    <div className="bg-sky-50 text-black w-[75%] rounded-lg mt-10 h-[80px] text-xl p-5 flex items-center font-bold">
      News
      <p className="font-normal ml-5 text-sm wrap-break-word">
        Description of this news
      </p>
    </div>
  );
};

export default News;
