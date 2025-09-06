type Props = {
  text: string;
  side: string;
};

const Title = ({ text, side }: Props) => {
  let sideStyle = "";
  if (side === "right") sideStyle = "text-end";
  else sideStyle = "";
  return (
    <p
      className={
        "text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-[Roboto_Flex] " +
        sideStyle
      }
    >
      {text}
    </p>
  );
};

export default Title;
