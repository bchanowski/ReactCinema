import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { useState } from "react";

type Props = { images: string[] };

const ImageSlider = ({ images }: Props) => {
  const [imageIndex, setImageIndex] = useState(0);
  function showLastImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }
  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }
  return (
    <>
      <div className="relative flex justify-center mt-20 border-b-1 mb-1 pb-2">
        <CircleArrowLeft
          className="h-[10%] sm:w-[10%] hover:h-[11%] text-white cursor-pointer absolute left-0 top-[14svw] transition-normal duration-100 ease-in"
          onClick={showLastImage}
        />
        <div className="w-[85%] flex shrink-0 overflow-hidden">
          {images.map((image, index) => (
            <img
              src={"https://image.tmdb.org/t/p/original/" + image}
              key={index}
              className="rounded-lg duration-300 ease-in"
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          ))}
        </div>
        <CircleArrowRight
          className="h-[10%] hover:h-[11%] sm:w-[10%] text-white cursor-pointer absolute right-0 top-[14svw] transition-normal duration-100 ease-in-out"
          onClick={showNextImage}
        />
      </div>
      <div className="flex flex-row justify-center items-start mb-20">
        {images.map((image, index) => (
          <img
            src={"https://image.tmdb.org/t/p/original/" + image}
            key={index}
            className={
              "rounded-lg m-1 h-[5svw] border-1 hover:border-white cursor-pointer" +
              (imageIndex == index
                ? " border-red-700 border-2"
                : " border-black")
            }
            onClick={() => setImageIndex(index)}
          />
        ))}
      </div>
    </>
  );
};

export default ImageSlider;
