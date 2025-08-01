import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex items-center text-white">
      <input
        placeholder="Search..."
        className="border rounded-md border-white p-[0.2rem]"
      />
      <Search />
    </div>
  );
};

export default SearchBar;
