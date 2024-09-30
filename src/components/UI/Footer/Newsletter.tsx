const Newsletter = () => {
  return (
    <section className="bg-yellow px-[120px] py-[80px] ">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto">
        <h2 className="text-h2 font-bold leading-[120%] text-blue w-[700px] ">
          Want more recipes straight to your inbox?
        </h2>
        <div className="">
          <p className="text-pl leading-[160%] text-blue">
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
