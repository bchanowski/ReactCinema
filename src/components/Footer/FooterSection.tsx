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
        <p key={index} className="cursor-pointer">
          {subtitle}
        </p>
      ))}
    </div>
  );
};

export default FooterSection;
