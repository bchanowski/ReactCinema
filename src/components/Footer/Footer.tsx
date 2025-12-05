import { footerData } from "../../data/footerData";
import FooterSection from "./FooterSection";
import LegalNote from "./LegalNote";
import Newsletter from "./Newsletter";
import Socials from "./Socials";

const Footer = () => {
  return (
    <div className="bg-sky-50 h-full w-full p-5">
      <div className="p-4">
        <div className="flex flex-col md:flex-row md:justify-between md:mb-5">
          <Newsletter />
          <Socials />
        </div>
        <div className="flex flex-col sm:flex-row h-full w-full sm:justify-between md:justify-around">
          {footerData.map((footer, index) => (
            <FooterSection key={index} footerData={footer} />
          ))}
        </div>
      </div>
      <LegalNote />
    </div>
  );
};

export default Footer;
