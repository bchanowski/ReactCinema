import { X } from "lucide-react";
import { categoriesList } from "../../data/categoriesList";

type Props = {
  closeMobile: () => void;
};

const MobileCategories = ({ closeMobile }: Props) => {
  return (
    <div className="fixed right-[0] bottom-[0] z-[1001] h-[100svh] w-[100svw] bg-sky-50">
      <X onClick={closeMobile} />
      <div className="h-[90%] w-full flex flex-col justify-center items-center">
        {categoriesList.map((category, index) => (
          <p key={index} className="my-[15px] text-2xl">
            {category.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MobileCategories;
