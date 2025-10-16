import { Ticket } from "lucide-react";

type Props = {
  when: string;
};

const EventBtn = ({ when }: Props) => {
  return (
    <div className="w-full h-[20%] flex justify-end items-center text-center border-t-1 border-black mt-6">
      <p className="w-[40%] capitalize">{when}</p>
      <button className="w-[65%] border-l-1 border-black h-full cursor-pointer bg-red-700 hover:bg-white hover:text-red-700 text-white flex justify-center hover:text-lg items-center transition-normal duration-200 ease-in-out rounded-br-lg">
        <Ticket className="mr-2" />
        Buy Ticket
      </button>
    </div>
  );
};

export default EventBtn;
