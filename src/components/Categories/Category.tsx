import type { TCategory } from "../../types/CategoryInterface";
import { categoriesList } from "../../data/categoriesList";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type Props = {
  category: TCategory;
  index: number;
};

const Category = ({ category, index }: Props) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <>
      <div
        className="cursor-pointer hidden h-full px-[4px] md:px-[2svw] py-[10px] sm:flex items-center ease-out duration-200 hover:text-sky-900 hover:bg-blue-100"
        onMouseEnter={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
      >
        {category.name}
        {category.options.hasOptions && <ChevronDown />}
      </div>
      {index < categoriesList.length - 1 && (
        <hr className="hidden sm:inline h-[80%] m-[0] border-r border-sky-900 border-solid" />
      )}
      {showOptions && category.options.hasOptions && (
        <div
          className="absolute flex flex-wrap break-all bg-sky-50 top-[198px] w-[320px]"
          onMouseEnter={() => setShowOptions(true)}
          onMouseLeave={() => setShowOptions(false)}
        >
          {category.options.option.map((sub, id) => (
            <p
              key={id}
              className="inline-flex w-[50%] p-[1rem] break-all cursor-pointer ease-out duration-200 hover:text-sky-900 hover:bg-blue-100"
            >
              {sub}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default Category;
