import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex items-center text-white relative">
      <input
        placeholder="Search..."
        className="border rounded-md border-white p-[0.2rem] w-full ease-out duration-500 hover:text-lg hover:p-[0.3rem] "
      />
      <Search className="absolute left-[75%] sm:left-[80%] cursor-pointer md:left-[85%]" />
    </div>
  );
};

export default SearchBar;
