type Props = {
  text: string;
  side: string;
};

const Title = ({ text, side }: Props) => {
  let sideStyle = "";
  if (side === "right") sideStyle = "mr-[6svw] text-end";
  else sideStyle = "ml-[6svw]";
  return (
    <p
      className={
        "text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-[Roboto_Flex] " +
        sideStyle
      }
    >
      {text}
    </p>
  );
};

export default Title;
