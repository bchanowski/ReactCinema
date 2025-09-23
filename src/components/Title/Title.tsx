type Props = {
  text: string;
  side: string;
  color: string;
};

const Title = ({ text, side, color }: Props) => {
  let sideStyle = "text-" + color;
  if (side === "right") sideStyle += " text-end";
  return (
    <p
      className={
        "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-[Roboto_Flex] " +
        sideStyle
      }
    >
      {text}
    </p>
  );
};

export default Title;
