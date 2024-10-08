import { useState } from "react";
import { useApiData } from "../store/store";
import DetailBtn from "../components/General/DetailBtn";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  const { response, loading } = useApiData();
  const [activeMeal, setActivemeal] = useState("Breakfast");

  const mealTypes = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snack",
    "Beverage",
    "Side Dish",
    "Dessert",
  ];

  const filteredMeals =
    response?.filter((meal) =>
      meal.mealType.some(
        (type) => type.toLowerCase() === activeMeal.toLowerCase()
      )
    ) || [];
  const handleRecipeClick = (id: number) => {
    return navigate(`/categories/${id}`);
  };

  return (
    <section>
      <div className="bg-green ">
        {/* Heading */}
        <div className=" max-w-[1440px] mx-auto text-white">
          <div>
            <h2 className="md:text-h2 text-h4 font-bold md:px-[120px] md:py-[80px] px-[20px] py-[20px]">
              {activeMeal} recipes
            </h2>
          </div>
        </div>
      </div>
      {/* Category */}
      {/* Category Buttons */}
      <div className="bg-beige md:py-[8px] py-2 ">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-center gap-2">
          {mealTypes.map((mealType) => (
            <button
              key={mealType}
              onClick={() => setActivemeal(mealType)}
              className={`px-4 py-2 rounded-sm  ${
                activeMeal === mealType
                  ? "bg-green text-white uppercase font-semibold"
                  : "uppercase text-green font-semibold"
              }`}
            >
              {mealType}
            </button>
          ))}
        </div>
      </div>
      {/* Items Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {loading ? (
          <p>Loading...</p>
        ) : filteredMeals.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No recipes found for {activeMeal}
          </p>
        ) : (
          filteredMeals.map((recipe) => (
            <div key={recipe?.id} className="flex flex-col">
              <div className="relative cursor-pointer overflow-hidden rounded-lg group">
                <img
                  src={recipe.image || "/api/placeholder/400/300"}
                  alt={recipe.name}
                  className="w-full h-[474px] object-cover transition-transform duration-300 group-hover:scale-105"
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
          ))
        )}
      </div>
    </section>
  );
};

export default Categories;
