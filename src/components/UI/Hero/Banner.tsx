import { useEffect, useState } from "react";
import { useApiData } from "../../../store/store";
import Button from "../../General/Button";
import Carousel from "../../General/Carousel";
import { ColorRing } from "react-loader-spinner"; // Import ColorRing
import { useNavigate } from "react-router-dom";
export type Recipe = {
  id: number;
  name: string;
  image: string;
  mealType: string[]; // Ensure this matches the API response structure
  servings: number;
  prepTimeMinutes: number; // Make sure to use the same names as expected
  cookTimeMinutes: number;
};

const Banner = () => {
  const { response, loading, fetchData } = useApiData();
  const [slides, setSlides] = useState<Recipe[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (response && response.length > 0) {
      const shuffleArray = (array: Recipe[]) =>
        [...array].sort(() => Math.random() - 0.5);
      const randomRecipes = shuffleArray(response).slice(0, 5);
      setSlides(randomRecipes);
    }
  }, [response]);

  return (
    <section className="bg-beige">
      <div className="max-w-[1440px] mx-auto py-4 px-2 flex lg:flex-row flex-col items-center justify-between">
        <div className="flex flex-col items-start gap-[24px]">
          <h1 className="md:text-h1 text-h3 text-blue font-bold max-w-[469px] leading-[160%]">
            Let's get cooking!
          </h1>
          <p className="md:text-pl text-ps text-blue font-semibold max-w-[469px] leading-[160%]">
            A blog full of healthy and easy-to-make recipes that take the stress
            out of cooking
          </p>
          <Button
            btnTxt="View All Recipes"
            textcolor="blue"
            bordercolor="blue"
            onClick={() => navigate("/categories")}
          />
        </div>

        <div className=" max-w-lg mt-4">
          {loading ? ( // Show ColorRing when loading
            <div className="flex justify-center items-center h-[600px] w-[720px]">
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            </div>
          ) : slides.length > 0 ? (
            <Carousel
              autoSlide={true}
              autoSlideInterval={30000}
              recipes={slides}
            >
              {slides.map((recipe: Recipe, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    src={recipe?.image || "/api/placeholder/720/600"}
                    alt={recipe?.name}
                    className="h-[600px] w-[720px] object-cover"
                  />
                </div>
              ))}
            </Carousel>
          ) : (
            <div className="h-[600px] w-[720px] bg-gray-200 animate-pulse" />
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;
