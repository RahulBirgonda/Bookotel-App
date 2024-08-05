const Footer = () => {
  return (
    <div className="bg-blue-800 py-6 sm:py-10">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        <span className="text-xl sm:text-2xl text-white font-bold tracking-tight mb-4 sm:mb-0">
          Book Hotel
        </span>
        <div className="w-full sm:w-auto">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="cursor-pointer text-white border-b border-white pb-1 mb-2 sm:mb-0 sm:border-b-0 sm:pb-0">
              Privacy Policy
            </p>
            <p className="cursor-pointer text-white border-b border-white pb-1 mb-2 sm:mb-0 sm:border-b-0 sm:pb-0">
              Terms of Service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
