const LegalNote = () => {
  return (
    <div className="bg-white w-full h-full p-4">
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <p className="m-1 hover:text-sky-700 cursor-pointer">Personal Data</p>
        <p className="m-1 hover:text-sky-700 cursor-pointer">Privacy Policy</p>
        <p className="m-1 hover:text-sky-700 cursor-pointer">Returns</p>
        <p className="m-1 hover:text-sky-700 cursor-pointer">Consent</p>
        <p className="m-1 hover:text-sky-700 cursor-pointer">Regulations</p>
      </div>
      <p className="text-sm text-gray-800 sm:text-center">
        Copyright © 2025. All right reserved by MAX Cinema
      </p>
    </div>
  );
};

export default LegalNote;
