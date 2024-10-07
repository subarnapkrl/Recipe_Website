import { useParams } from "react-router-dom";
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
