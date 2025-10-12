import AccountNav from "./AccountNav";
import ChooseCinema from "./ChooseCinema";
import CircularText from "./CircularText";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="flex justify-between shadow-sm shadow-white h-[8rem]">
      <CircularText text="* MAX * CINEMA" radius={50} letterSpacing={10} />
      <div className="flex w-[60%] justify-around items-center h-full mr-[2svw] sm:[12svw] lg:w-[60%] sm:w-[40%]">
        <ChooseCinema />
        <AccountNav />
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
