type Props = {
  close: () => void;
};

const LoginPopup = ({ close }: Props) => {
  return (
    <div
      className="w-[100svw] h-[100svh] fixed left-0 top-0 z-1 bg-[rgba(55,55,55,.6)] backdrop-blur-sm"
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        close();
        if (typeof window != "undefined" && window.document) {
          document.body.style.overflow = "auto";
        }
      }}
    >
      <div className="w-[700px] h-[550px] fixed top-[50%] left-[50%] mt-[-225px] ml-[-350px] bg-slate-900 rounded-lg flex flex-col justify-top items-center p-20 z-1">
        <p className="text-xl sm:text-4xl mb-10">LOGIN</p>
        <form className="flex flex-col text-md sm:text-xl w-[40%] sm:w-[80%] text-center h-full justify-around items-center">
          <div className="flex flex-col w-full">
            <label htmlFor="username">E-mail</label>
            <input
              type="email"
              id="username"
              className="rounded-lg border-1 border-white p-2 m-2 invalid:border-red-700"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="rounded-lg border-1 border-white p-2 m-2"
            />
          </div>
          <button className="border-1 border-white p-2 w-[40%] rounded-lg cursor-pointer hover:bg-white hover:text-slate-900 hover:border-slate-900 transition-normal duration-200 ease-in-out">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
