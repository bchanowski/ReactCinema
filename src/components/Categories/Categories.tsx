import { Menu } from "lucide-react";
import { categoriesList } from "../../data/categoriesList";
import { useState } from "react";
import MobileCategories from "./MobileCategories";
import Category from "./Category";

const Categories = () => {
  const [openMobile, setOpenMobile] = useState(false);
  return (
    <div className="flex h-[70px] justify-center items-center px-[1svw] md:px-[8svw] lg:px-[15svw] text-xl bg-sky-50">
      {categoriesList.map((category, index) => (
        <Category category={category} index={index} />
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
