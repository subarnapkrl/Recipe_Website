type ButtonText = {
  btnTxt: string;
  textcolor: string;
  bordercolor: string;
  onClick: () => void;
};

const Button = ({ btnTxt, textcolor, bordercolor, onClick }: ButtonText) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`uppercase px-[16px] py-[8px] text-[12px] text-${textcolor} font-semibold rounded-sm border-[1px] border-solid border-${bordercolor}`}
    >
      {btnTxt}
    </button>
  );
};

export default Button;
