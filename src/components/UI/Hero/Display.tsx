import { useNavigate } from "react-router-dom";
import Button from "../../General/Button";

const Display = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white md:max-w-[1440px] mx-auto md:py-[80px] md:max-h-[1443px] ">
      {/*  */}
      <div className="bg-blue max-w-[1440px] mx-auto  md:h-[516px] flex md:flex-row flex-col items-center justify-evenly gap-2 ">
        <div>
          <img src="/Image.png" alt="" className=" md:w-[683px] md:h-[596px]" />
        </div>
        <div className=" flex flex-col md:items-start items-center gap-2 py-2 px-2">
          <h2 className="text-h3 text-center md:text-left text-white font-bold">
            Meet the cook
          </h2>
          <p className="text-pl text-white">Sharon Daniels</p>
          <p className="text-pr text-center md:text-left text-white max-w-[379px]">
            Sharon is a passionate home chef with a focus on simplicity. She
            crafts easy-to-follow recipes that transform everyday ingredients
            into delicious creations.
          </p>
          <Button
            btnTxt="About Me"
            textcolor="white"
            bordercolor="white"
            onClick={() => navigate("/blog")}
          />
        </div>
      </div>
      {/*  */}

      <div className="mx-auto  max-w-[1440px] hidden xl:flex flex-col relative ">
        <div className="bg-green md:px-[100px] md:py-[80px]">
          <h1 className="text-h1 text-white font-bold max-w-[580px] leading-[120%]">
            What are you in the mood for today?
          </h1>
        </div>

        <div className="bg-white flex items-center justify-evenly md:px-[100px] md:py-[60px]">
          <div className="grid grid-cols-2 gap-2">
            <h3 className="text-h3 text-green font-semibold">Dinner</h3>

            <h3 className="text-h3 text-green font-semibold">Dessert</h3>
            <h3 className="text-h3 text-green font-semibold">Lunch</h3>
            <h3 className="text-h3 text-green font-semibold">Snack</h3>
            <h3 className="text-h3 text-green font-semibold">Vegan</h3>
            <h3 className="text-h3 text-green font-semibold">Breakfast</h3>
          </div>
          <div className="max-w-[477px] max-h-[606px]">
            <img
              src="/Image(1).png"
              alt=""
              className="absolute top-5 right-1 "
            />
          </div>
        </div>
      </div>

      {/*  */}
    </section>
  );
};

export default Display;
