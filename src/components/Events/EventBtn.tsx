type Props = {
  when: string;
};

const EventBtn = ({ when }: Props) => {
  return (
    <div className="w-full h-[20%] flex justify-center items-center text-center border-t border-black mt-6">
      <p className="w-[50%] capitalize">{when}</p>
      <button className="w-[50%] border-l border-black h-full cursor-pointer">
        Buy
      </button>
    </div>
  );
};

export default EventBtn;
