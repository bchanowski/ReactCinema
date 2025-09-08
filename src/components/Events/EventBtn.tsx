import { Ticket } from "lucide-react";

type Props = {
  when: string;
};

const EventBtn = ({ when }: Props) => {
  return (
    <div className="w-full h-[20%] flex justify-center items-center text-center border-t border-black mt-6">
      <p className="w-[40%] capitalize">{when}</p>
      <button className="w-[65%] border-l border-black h-full cursor-pointer bg-red-700 hover:bg-red-600 text-white flex justify-center hover:text-lg items-center transition duration-600 ease-in-out rounded-br-lg">
        <Ticket />
        Buy Ticket
      </button>
    </div>
  );
};

export default EventBtn;
