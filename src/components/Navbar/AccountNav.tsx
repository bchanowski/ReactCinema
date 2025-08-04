import { User } from "lucide-react";

const AccountNav = () => {
  return (
    <div className="text-white w-[30%] flex justify-around content-around items">
      <span className="flex cursor-pointer">
        <User />
        <span className="hidden lg:inline">Profile</span>
      </span>
      <span className="cursor-pointer hidden lg:inline">Registration</span>
    </div>
  );
};

export default AccountNav;
