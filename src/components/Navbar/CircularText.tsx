type Props = {
  text: string;
  radius?: number;
  letterSpacing?: number;
};

const CircularText = ({ text, radius = 100, letterSpacing = 0 }: Props) => {
  return (
    <div
      className="relative inline-flex text-white mt-4 ml-[2svw] md:ml-[12svw] cursor-pointer"
      style={{ width: radius * 2, height: radius * 2 }}
    >
      <svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
        className="block animate-spin"
        style={{ animationDuration: "15s" }}
      >
        <defs>
          <path
            id="circlePath"
            d={`M ${radius}, ${radius} m -${radius}, 0 a ${radius},${radius} 0 1,0 ${
              radius * 2
            },0 a ${radius},${radius} 0 1,0 -${radius * 2},0`}
          />
        </defs>
        <text
          fontSize="24"
          fill="currentColor"
          className="font-bold"
          letterSpacing={letterSpacing}
        >
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default CircularText;
