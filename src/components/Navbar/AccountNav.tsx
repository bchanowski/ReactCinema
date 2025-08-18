import { User } from "lucide-react";

const AccountNav = () => {
  return (
    <div className="text-white w-[30%] flex justify-around content-around items">
      <span className="flex cursor-pointer ease-out duration-200 hover:text-lg">
        <User />
        <span className="hidden lg:inline">Profile</span>
      </span>
      <span className="cursor-pointer hidden lg:inline ease-out duration-200 hover:text-lg">
        Registration
      </span>
    </div>
  );
};

export default AccountNav;
