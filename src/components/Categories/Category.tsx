import type { TCategory } from "../../types/CategoryType";
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
        className="cursor-pointer relative hidden h-full px-[4px] md:px-[2svw] py-[10px] sm:flex items-center ease-out duration-200 hover:text-sky-900 hover:bg-blue-100"
        onMouseEnter={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
      >
        {category.name}
        {category.options.hasOptions && <ChevronDown />}
        {showOptions && category.options.hasOptions && (
          <div
            className={`absolute flex flex-wrap break-all bg-sky-50 top-[70px] w-[320px] max-w-[calc(100vw-2rem)] z-50  ${
              index > categoriesList.length - 4 ? "right-0" : "left-0"
            }`}
          >
            {category.options.option.map((sub, id) => (
              <p
                key={id}
                className="inline-flex w-[50%] p-[1rem] break-all cursor-pointer ease-out duration-200 hover:bg-blue-100"
              >
                {sub}
              </p>
            ))}
          </div>
        )}
      </div>
      {index < categoriesList.length - 1 && (
        <hr className="hidden sm:inline h-[80%] m-[0] border-r border-sky-900 border-solid" />
      )}
    </>
  );
};

export default Category;
