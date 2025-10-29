import { Facebook, Instagram, TwitterIcon, Youtube } from "lucide-react";
import googleplay from "../../assets/icons/googleplay.svg";
import apple from "../../assets/icons/apple.svg";

const Socials = () => {
  return (
    <div className="mt-2">
      <p className="text-2xl">Join our Socials!</p>
      <div className="flex w-[60%] justify-around mt-2 mb-2">
        <Facebook className="bg-blue-500 text-white rounded-lg w-[30px] h-[30px] p-1 cursor-pointer" />
        <Instagram className="text-white bg-linear-to-r from-violet-500 to-red-500 rounded-lg w-[30px] h-[30px] p-1 cursor-pointer" />
        <TwitterIcon className="bg-blue-500 text-white rounded-lg w-[30px] h-[30px] p-1 cursor-pointer" />
        <Youtube className="bg-red-500 text-white rounded-lg w-[30px] h-[30px] p-1 cursor-pointer" />
      </div>
      <p className="text-2xl">Download our Movile App!</p>
      <div className="flex w-[80%] justify-around mt-2 mb-2">
        <div className="flex items-center  cursor-pointer">
          <img
            src={googleplay}
            className="w-[35px] h-[35px] p-1"
            alt="Google Play Icon"
          />{" "}
          Google Play
        </div>
        <div className="flex items-center  cursor-pointer">
          <img
            src={apple}
            className="w-[35px] h-[35px] p-1"
            alt="App Store Icon"
          />{" "}
          App Store
        </div>
      </div>
    </div>
  );
};

export default Socials;
