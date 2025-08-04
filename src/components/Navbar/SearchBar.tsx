import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex items-center text-white relative">
      <input
        placeholder="Search..."
        className="border rounded-md border-white p-[0.2rem] w-full"
      />
      <Search className="absolute left-[80%] cursor-pointer sm:left-[85%]" />
    </div>
  );
};

export default SearchBar;
