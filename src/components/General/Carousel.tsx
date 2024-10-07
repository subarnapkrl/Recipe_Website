import { ReactNode, useEffect, useState } from "react";
import React from "react";
import MealtypeBtn from "./MealtypeBtn";
import DetailBtn from "./DetailBtn";

type Recipe = {
  id: number;
  name: string;
  image: string;
  mealType: string[];
  servings: number;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
};

type CarouselProps = {
  children: ReactNode;
  recipes: Recipe[]; // Add this to get access to recipe data
  autoSlide: boolean;
  autoSlideInterval: number;
};

const Carousel = ({
  children: slides,
  recipes,
  autoSlide = false,
  autoSlideInterval = 3000,
}: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = React.Children.count(slides);

  const prev = () =>
    setCurrentSlide((curr) => (curr === 0 ? totalSlides - 1 : curr - 1));

  const next = () =>
    setCurrentSlide((curr) => (curr === totalSlides - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  const currentRecipe = recipes[currentSlide];
  console.log(currentRecipe);

  return (
    <div className="overflow-hidden relative">
      {currentRecipe ? (
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src={currentRecipe?.image || "/api/placeholder/720/600"}
              alt={currentRecipe?.name}
              className="h-[600px] w-[720px] object-cover"
            />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-50" />

            {/* Content on top of the overlay */}
            <div className="absolute bottom-0 left-0 flex flex-col items-start gap-3 p-2 text-white">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-1 sm:gap-3">
                  {currentRecipe?.mealType?.map((type) => (
                    <MealtypeBtn key={type} mealtype={type} />
                  ))}
                </div>
                <h2 className="sm:text-h3 text-ps text-white max-w-[406px] leading-[120%] font-bold">
                  {currentRecipe?.name}
                </h2>
                <DetailBtn
                  fill="yellow"
                  serving={currentRecipe?.servings}
                  prep={currentRecipe?.prepTimeMinutes}
                  time={currentRecipe?.cookTimeMinutes}
                />
              </div>
              <div className=" flex items-start gap-2">
                <button
                  onClick={prev}
                  className="bg-white p-2 rounded-sm hover:bg-beige transition-all duration-100"
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
                      fill="#292929"
                    />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="bg-white p-2 rounded-sm hover:bg-beige transition-all duration-100"
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
                      fill="#292929"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[600px] w-[720px] bg-gray-200 animate-pulse" />
      )}
    </div>
  );
};

export default Carousel;
