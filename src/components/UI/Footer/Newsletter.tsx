const Newsletter = () => {
  return (
    <section className="bg-yellow md:px-[120px] md:py-[80px] px-[50px] py-[30px]">
      <div className="flex flex-col md:flex-row items-center gap-3 justify-between max-w-[1440px] mx-auto">
        <h2 className="text-h4 sm:text-h2 font-bold leading-[120%] text-blue max-w-[700px] ">
          Want more recipes straight to your inbox?
        </h2>
        <div className="">
          <p className="md:text-[18px] text-[10px] sm:text-[10px] mt-2 leading-[160%] text-blue">
            Sign up for the newsletter
          </p>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full px-[16px] py-[12px] border-b-2 border-black"
          />
          <button
            type="submit"
            className="block border border-blue uppercase text-blue font-semibold text-pxs w-full mt-2 px-[16px] py-[8px] hover:text-green transition-colors duration-150 "
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
