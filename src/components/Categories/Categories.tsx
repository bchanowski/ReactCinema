import { ChevronDown, Menu } from "lucide-react";
import { categoriesList } from "../../data/categoriesList";
import { useState } from "react";
import MobileCategories from "./MobileCategories";

const Categories = () => {
  const [openMobile, setOpenMobile] = useState(false);
  return (
    <div className="flex h-[70px] justify-center items-center px-[1svw] md:px-[8svw] lg:px-[15svw] text-xl bg-sky-50">
      {categoriesList.map((category, index) => (
        <>
          <div
            key={index}
            className="cursor-pointer hidden h-full px-[4px] md:px-[2svw] py-[10px] sm:flex items-center ease-out duration-200 hover:text-sky-900 hover:bg-blue-100"
          >
            {category.name}
            {category.options.hasOptions && <ChevronDown />}
          </div>
          {index < categoriesList.length - 1 && (
            <hr className="hidden sm:inline h-[80%] m-[0] border-r border-sky-900 border-solid" />
          )}
        </>
      ))}
      <span
        className="flex items-center sm:hidden cursor-pointer"
        onClick={() => setOpenMobile(true)}
      >
        MENU
        <Menu />
      </span>
      {openMobile && (
        <MobileCategories closeMobile={() => setOpenMobile(false)} />
      )}
    </div>
  );
};

export default Categories;
