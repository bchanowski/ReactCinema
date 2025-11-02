import { User } from "lucide-react";
import { useState } from "react";
import LoginPopup from "../Login/LoginPopup";

const AccountNav = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  return (
    <div className="text-white w-[30%] flex justify-around content-around items">
      <span
        className="flex cursor-pointer ease-out duration-200 hover:text-lg"
        onClick={() => {
          setOpenLogin(true);
          if (typeof window != "undefined" && window.document) {
            document.body.style.overflow = "hidden";
          }
        }}
      >
        <User />
        <span className="hidden lg:inline">Profile</span>
      </span>
      <span
        className="cursor-pointer hidden lg:inline ease-out duration-200 hover:text-lg"
        onClick={() => {
          setOpenRegister(true);
          if (typeof window != "undefined" && window.document) {
            document.body.style.overflow = "hidden";
          }
        }}
      >
        Registration
      </span>
      {openLogin && <LoginPopup close={() => setOpenLogin(false)} />}
      {openRegister && <LoginPopup close={() => setOpenLogin(false)} />}
    </div>
  );
};

export default AccountNav;
