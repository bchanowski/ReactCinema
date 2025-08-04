import { MapPin } from "lucide-react";

const ChooseCinema = () => {
  return (
    <div className="flex text-white cursor-pointer">
      <MapPin />
      <span className="hidden lg:inline">Choose your Cinema!</span>
    </div>
  );
};

export default ChooseCinema;
