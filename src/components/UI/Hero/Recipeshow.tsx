import { useEffect, useState } from "react";
import { useApiData } from "../../../store/store";
import CategoryTitle from "../../General/CategoryTitle";
import { useNavigate } from "react-router-dom";

import Button from "../../General/Button";
import DetailBtn from "../../General/DetailBtn";
import { MutatingDots } from "react-loader-spinner";

type Recipe = {
  id: number;
  mealType: string | string[];
  image: string;
  servings: number;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  name: string;
};
type RandomRecipe = Recipe;
const Recipeshow = () => {
  const { response, loading, fetchData } = useApiData();
  const [randomRecipes, setRandomRecipes] = useState<RandomRecipe[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (response && response.length > 0) {
      const getRandomRecipes = () => {
        return [...response].sort(() => 0.5 - Math.random()).slice(0, 6);
      };

      setRandomRecipes(getRandomRecipes());
    }
  }, [response]);

  const handleRecipeClick = (id: number) => {
    return navigate(`/categories/${id}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <MutatingDots
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          secondaryColor="#4fa94d"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
  return (
    <>
      <CategoryTitle title="Newest Recipes" bg="bg-green" />

      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {randomRecipes?.map((recipe) => (
            <div key={recipe?.id} className="flex flex-col">
              <div className=" relative cursor-pointer overflow-hidden rounded-lg">
                <img
                  src={recipe.image || "/api/placeholder/400/300"}
                  alt={recipe.name}
                  className="w-full h-[474px] object-cover transition-transform relative duration-300 group-hover:scale-105"
                  onClick={() => handleRecipeClick(recipe?.id)}
                />
                <div className="absolute top-2 right-2 flex flex-wrap gap-2">
                  {Array.isArray(recipe?.mealType) ? (
                    recipe?.mealType.map((type, index) => (
                      <button
                        key={index}
                        className="md:px-[12px] font-semibold md:py-[8px] px-[6px] py-[2px] text-[8px] md:text-[14px] uppercase text-black bg-beige rounded-sm"
                      >
                        {type}
                      </button>
                    ))
                  ) : (
                    <button className="md:px-[12px] md:py-[8px] px-[6px] py-[2px] text-[8px] md:text-[14px] uppercase text-black bg-beige rounded-sm">
                      {recipe?.mealType}
                    </button>
                  )}
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <h3 className="font-semibold text-lg">{recipe?.name}</h3>

                <div className="flex items-center gap-4 text-sm text-gray-600 border-green">
                  <DetailBtn
                    fill="green"
                    serving={recipe?.servings}
                    prep={recipe?.prepTimeMinutes}
                    time={recipe?.cookTimeMinutes}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center  flex items-center justify-center py-3 gap-2">
          <Button
            btnTxt="View All Recipes"
            textcolor="green"
            bordercolor="green"
            onClick={() => navigate("/categories")}
          />
        </div>
      </div>
    </>
  );
};

export default Recipeshow;
