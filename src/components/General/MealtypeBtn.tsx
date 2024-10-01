const MealtypeBtn = ({ mealtype }: { mealtype: string }) => {
  return (
    <button className="md:px-[12px] md:py-[8px] px-[6px] py-[2px] text-[8px] md:text-[14px] uppercase text-black bg-beige rounded-sm ">
      {mealtype}
    </button>
  );
};

export default MealtypeBtn;
