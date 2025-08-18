import { MapPin } from "lucide-react";

const ChooseCinema = () => {
  return (
    <div className="flex text-white w-[35%] ease-out duration-200 cursor-pointer hover:text-lg">
      <MapPin />
      <span className="hidden lg:inline">Choose your Cinema!</span>
    </div>
  );
};

export default ChooseCinema;
