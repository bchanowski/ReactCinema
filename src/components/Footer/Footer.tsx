import { footerData } from "../../data/footerData";
import FooterSection from "./FooterSection";
import LegalNote from "./LegalNote";
import Newsletter from "./Newsletter";
import Socials from "./Socials";

const Footer = () => {
  return (
    <div className="bg-sky-50 h-full w-full">
      <div className="p-4">
        <div>
          <Newsletter />
          <Socials />
        </div>
        <div>
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
