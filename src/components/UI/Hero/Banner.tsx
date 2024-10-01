import Button from "../../General/Button";
import Carousel from "../../General/Carousel";

const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png",
];

const Banner = () => {
  return (
    <section className="bg-beige ">
      <div className="max-w-[1440px] mx-auto py-4 px-2 flex lg:flex-row flex-col items-center justify-between">
        <div className="bg-beige flex flex-col items-start gap-[24px]">
          <h1 className="md:text-h1 text-h3 text-blue font-bold max-w-[469px] leading-[160%]">
            Let's get cooking!
          </h1>
          <p className="md:text-pl text-ps text-blue font-semibold max-w-[469px] leading-[160%]">
            A blog full of healthy and easy to make recipes that take the stress
            out of cooking
          </p>
          {/* Button */}
          <Button
            btnTxt="View All Recipes"
            textcolor="blue"
            bordercolor="blue"
          />
        </div>
        <div className="bg-slate-400 max-w-lg mt-4 ">
          <Carousel autoSlide={true} autoSlideInterval={3000}>
            {slides.map((s) => (
              <img key={s} src={s} alt="" />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Banner;
