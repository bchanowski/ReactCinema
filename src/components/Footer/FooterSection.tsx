import { Link } from "react-router";

type Props = {
  footerData: {
    title: string;
    subTitles: string[];
  };
};

const FooterSection = ({ footerData }: Props) => {
  return (
    <div className="mb-2">
      <p className="text-2xl">{footerData.title}</p>
      {footerData.subTitles.map((subtitle, index) => (
        <div className="flex">
          <Link
            to="info-page"
            key={index}
            className="cursor-pointer hover:text-sky-700"
          >
            {subtitle}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FooterSection;
