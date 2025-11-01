type Props = {
  link: string;
  close: () => void;
};

const MovieTrailer = ({ link, close }: Props) => {
  return (
    <div
      className="w-[100svw] h-[100svh] fixed left-0 top-0 z-1 bg-[rgba(55,55,55,.6)] backdrop-blur-sm"
      onClick={() => {
        close();
        if (typeof window != "undefined" && window.document) {
          document.body.style.overflow = "auto";
        }
      }}
    >
      <iframe
        className="w-[50%] h-[50%] fixed left-[25svw] top-[25svh]"
        title="Youtube Player"
        sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
        src={`https://youtube.com/embed/${link}?autoplay=0`}
      ></iframe>
    </div>
  );
};

export default MovieTrailer;
