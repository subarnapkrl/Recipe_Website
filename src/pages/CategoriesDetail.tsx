import { useNavigate, useParams } from "react-router-dom";
import { useApiData } from "../store/store";
import { useEffect, useState } from "react";
import DetailBtn from "../components/General/DetailBtn";
type Recipe = {
  id: number;
  mealType: string | string[];
  image: string;
  servings: number;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  name: string;
  description?: string;
  ingredients?: string[];
  instructions?: string[];
};

const CategoriesDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { response, loading } = useApiData();

  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    if (response && id) {
      const foundRecipe = response.find((recipe) => recipe.id === parseInt(id));
      setRecipe(foundRecipe || null);
    }
  }, [response, id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!recipe) {
    return <h1>Recipe Not found</h1>;
  }

  return (
    <section>
      <div className="bg-green text-white py-8">
        <div className="max-w-[1440px] mx-auto px-4">
          <div
            className="bg-beige gap-1 items-center justify-center inline-flex p-2 rounded mb-2 cursor-pointer hover:bg-slate-400  transition-all duration-300"
            onClick={() => navigate("/")}
          >
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9998 8C17.9998 8.19891 17.9208 8.38968 17.7802 8.53033C17.6395 8.67099 17.4487 8.75 17.2498 8.75H2.5592L8.0342 14.2156C8.17503 14.3578 8.25404 14.5499 8.25404 14.75C8.25404 14.9501 8.17503 15.1422 8.0342 15.2844C7.89084 15.423 7.69924 15.5005 7.49982 15.5005C7.30041 15.5005 7.1088 15.423 6.96545 15.2844L0.215449 8.53438C0.0746131 8.39218 -0.00439453 8.20014 -0.00439453 8C-0.00439453 7.79987 0.0746131 7.60782 0.215449 7.46563L6.96545 0.715627C7.11117 0.59603 7.29617 0.534911 7.48446 0.544158C7.67275 0.553406 7.85087 0.632359 7.98417 0.76566C8.11747 0.898961 8.19642 1.07708 8.20567 1.26537C8.21492 1.45366 8.1538 1.63866 8.0342 1.78438L2.5592 7.25H17.2498C17.4487 7.25 17.6395 7.32902 17.7802 7.46967C17.9208 7.61032 17.9998 7.80109 17.9998 8Z"
                fill="#292929"
              />
            </svg>
            <p className="text-black font-medium">Home</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative">
              <img
                src={recipe.image || "/api/placeholder/400/300"}
                alt={recipe.name}
                className="w-full h-[500px] object-cover rounded-lg"
              />
              <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                {Array.isArray(recipe.mealType) ? (
                  recipe.mealType.map((type, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-beige text-black rounded-sm uppercase text-sm font-semibold"
                    >
                      {type}
                    </span>
                  ))
                ) : (
                  <span className="px-4 py-2 bg-beige text-black rounded-sm uppercase text-sm font-semibold">
                    {recipe.mealType}
                  </span>
                )}
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">{recipe.name}</h1>
              <DetailBtn
                fill="yellow"
                serving={recipe.servings}
                prep={recipe.prepTimeMinutes}
                time={recipe.cookTimeMinutes}
              />
              {recipe.description && (
                <p className="text-gray-700">{recipe.description}</p>
              )}
              {recipe.ingredients && (
                <div>
                  <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
                  <ul className="list-disc pl-5">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              )}
              {recipe.instructions && (
                <div>
                  <h2 className="text-xl font-semibold mb-2">Instructions</h2>
                  <ol className="list-decimal pl-5">
                    {recipe.instructions.map((step, index) => (
                      <li key={index} className="mb-2">
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesDetail;
