const MoviesCarousel = () => {
  const data = [
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "prs",
    "tqw",
    "xyz",
    "123",
    "456",
    "789",
  ];
  return (
    <div className="overflow-hidden relative h-[250px] w-full">
      <div
        className="flex absolute left-[0px] justify-center items-center h-full w-[200%]"
        style={{ animation: "slide 20s linear infinite" }}
      >
        {data.map((option, index) => (
          <div
            className="text-white w-[300px] h-full flex items-center justify-center"
            key={index}
          >
            <span>{option}</span>
          </div>
        ))}
        {data.map((option, index) => (
          <div
            className="text-white w-[300px] h-full flex items-center justify-center"
            key={"dup" + index}
          >
            <span>{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesCarousel;
