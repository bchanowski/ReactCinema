import { ChevronDown } from "lucide-react";
import { categoriesList } from "../../data/categoriesList";

const Categories = () => {
  return (
    <div className="flex px-[15svw] text-xl bg-sky-100">
      {categoriesList.map((category, index) => (
        <div
          key={index}
          className="cursor-pointer px-[2svw] py-[10px] flex items-end ease-out duration-200 hover:text-sky-900 hover:bg-sky-200"
        >
          {category.name}
          {category.options.hasOptions && <ChevronDown />}
        </div>
      ))}
    </div>
  );
};

export default Categories;
