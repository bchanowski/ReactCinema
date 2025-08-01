import AccountNav from "./AccountNav";
import ChooseCinema from "./ChooseCinema";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="flex justify-between shadow-sm shadow-white h-[8rem]">
      <Logo />
      <div className="flex w-[60%] justify-around items-center h-full mr-[10svw]">
        <ChooseCinema />
        <AccountNav />
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
