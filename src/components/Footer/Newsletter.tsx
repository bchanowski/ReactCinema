const Newsletter = () => {
  return (
    <div className="md:w-[45%]">
      <p className="text-2xl mb-2">Newsletter</p>
      <p>
        Join our newsletter to learn about all the premiers, events and special
        offers first!
      </p>
      <div className="flex flex-row  w-full justify-around items-center mt-2">
        <input
          type="email"
          className="border invalid:border-red-700 w-[60%] rounded-lg p-2 text-black invalid:text-red-700"
        />
        <button className="bg-red-700 text-white pt-2 pb-2 rounded-lg w-[30%] cursor-pointer hover:bg-white hover:text-red-700 transition-normal duration-200 ease-in-out">
          SIGN ME UP
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
