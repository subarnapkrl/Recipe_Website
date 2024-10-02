import { useEffect, useState } from "react";
import { useApiData } from "../../../store/store";
import { RotatingSquare } from "react-loader-spinner";

type Recipe = {
  mealType: string | string[];
  image: string;
};
type MealCard = {
  mealType: string;
  image: string;
};

const CategorySlider = () => {
  const { response, loading, fetchData } = useApiData();
  const [mealcard, setmealcard] = useState<MealCard[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(window.innerWidth >= 900 ? 4 : 2);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (response && response?.length > 0) {
      //Filter out unique mealtype and image
      const uniqueMealType = new Map<string, string>();

      //this will not be in array
      response.forEach((recipe: Recipe) => {
        const mealTypes = Array.isArray(recipe?.mealType)
          ? recipe?.mealType
          : [recipe?.mealType];

        mealTypes.forEach((mealType) => {
          if (mealType && !uniqueMealType.has(mealType)) {
            uniqueMealType.set(mealType, recipe?.image);
          }
        });
      });

      //Converting to array
      const mealCards = Array.from(uniqueMealType, ([mealType, image]) => ({
        mealType,
        image,
      }));
      setmealcard(mealCards);
    }
  }, [response]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsToShow < mealcard.length ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <section className="">
      <div className="max-w-[1440px] mx-auto md:px-[120px] md:py-[80px] px-[40px] py-[40px]">
        <div className="flex items-center justify-between ">
          <h2 className="font-semibold text-green mb-2 tracking-[120%] text-h5 md:text-h2">
            Recipes by category
          </h2>
          <div className=" flex items-start gap-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="bg-white p-1 md:p-2 rounded-sm hover:bg-beige transition-all duration-100 border border-green"
            >
              {/* SVG for the previous button */}
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.0001 8C18.0001 8.19891 17.9211 8.38968 17.7804 8.53033C17.6397 8.67099 17.449 8.75 17.2501 8.75H2.55944L8.03444 14.2156C8.17528 14.3578 8.25429 14.5499 8.25429 14.75C8.25429 14.9501 8.17528 15.1422 8.03444 15.2844C7.89109 15.423 7.69948 15.5005 7.50007 15.5005C7.30066 15.5005 7.10905 15.423 6.96569 15.2844L0.215693 8.53438C0.0748572 8.39218 -0.00415039 8.20014 -0.00415039 8C-0.00415039 7.79987 0.0748572 7.60782 0.215693 7.46563L6.96569 0.715627C7.11142 0.59603 7.29641 0.534911 7.4847 0.544158C7.67299 0.553406 7.85111 0.632359 7.98441 0.76566C8.11771 0.898961 8.19666 1.07708 8.20591 1.26537C8.21516 1.45366 8.15404 1.63866 8.03444 1.78438L2.55944 7.25H17.2501C17.449 7.25 17.6397 7.32902 17.7804 7.46967C17.9211 7.61032 18.0001 7.80109 18.0001 8Z"
                  fill="#0F7A60"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex + cardsToShow >= mealcard.length}
              className="bg-white border border-green p-1 md:p-2 rounded-sm hover:bg-beige transition-all duration-100"
            >
              {/* SVG for the next button */}
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7844 8.53438L11.0344 15.2844C10.891 15.423 10.6994 15.5005 10.5 15.5005C10.3006 15.5005 10.109 15.423 9.96563 15.2844C9.82479 15.1422 9.74578 14.9501 9.74578 14.75C9.74578 14.5499 9.82479 14.3578 9.96563 14.2156L15.4406 8.75H0.75C0.551088 8.75 0.360322 8.67099 0.21967 8.53033C0.0790178 8.38968 0 8.19891 0 8C0 7.80109 0.0790178 7.61032 0.21967 7.46967C0.360322 7.32902 0.551088 7.25 0.75 7.25H15.4406L9.96563 1.78438C9.84603 1.63866 9.78491 1.45366 9.79416 1.26537C9.8034 1.07708 9.88236 0.898961 10.0157 0.76566C10.149 0.632359 10.3271 0.553406 10.5154 0.544158C10.7037 0.534911 10.8887 0.59603 11.0344 0.715627L17.7844 7.46563C17.9252 7.60782 18.0042 7.79987 18.0042 8C18.0042 8.20014 17.9252 8.39218 17.7844 8.53438Z"
                  fill="#0F7A60"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* SLider */}
        {loading ? (
          <div className="text-center py-4 flex items-center justify-center">
            <RotatingSquare
              visible={true}
              height="100"
              width="100"
              color="#4fa94d"
              ariaLabel="rotating-square-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsToShow)
                }%)`,
              }}
            >
              {mealcard.map((card, index) => (
                <div
                  key={index}
                  className={`${
                    cardsToShow === 4 ? "w-1/4" : "w-1/2"
                  } flex-shrink-0 px-2`}
                >
                  <div className="relative bg-beige flex items-center flex-col">
                    <img
                      className="w-[210px] h-[220px] object-cover rounded-lg"
                      src={card.image}
                      alt={`${card.mealType} meal`}
                    />
                    <h3 className="text-lg  text-green mt-2 font-bold">
                      {card.mealType}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategorySlider;
