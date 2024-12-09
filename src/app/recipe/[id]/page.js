"use client";
import { useEffect, useState } from 'react';
import { getRecipeById } from '@/lib/api/recipes';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function RecipePage({ params }) {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadRecipe() {
      try {
        const data = await getRecipeById(params.id);
        setRecipe(data);
      } catch (err) {
        setError('Failed to load recipe');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadRecipe();
  }, [params.id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-center text-error">{error}</div>;
  if (!recipe) return <div className="text-center">Recipe not found</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-4 pt-4">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="rounded-xl w-full h-[400px] object-cover"
          />
        </figure>
        <div className="card-body">
          <h1 className="card-title text-3xl">{recipe.title}</h1>
          
          <div className="flex gap-4 my-4">
            <span className="badge badge-primary">{recipe.readyInMinutes} minutes</span>
            <span className="badge badge-secondary">{recipe.servings} servings</span>
          </div>

          <div className="divider">Ingredients</div>
          <ul className="list-disc pl-5">
            {recipe.extendedIngredients?.map((ingredient, index) => (
              <li key={index}>{ingredient.original}</li>
            ))}
          </ul>

          <div className="divider">Instructions</div>
          <div className="space-y-4">
            {recipe.analyzedInstructions?.[0]?.steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <span className="badge badge-neutral">{index + 1}</span>
                <p>{step.step}</p>
              </div>
            ))}
          </div>

          <div className="divider">Nutrition</div>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Calories</div>
              <div className="stat-value">{recipe.nutrition?.nutrients?.[0]?.amount || 'N/A'}</div>
            </div>
            <div className="stat">
              <div className="stat-title">Protein</div>
              <div className="stat-value">{recipe.nutrition?.nutrients?.[1]?.amount || 'N/A'}g</div>
            </div>
            <div className="stat">
              <div className="stat-title">Carbs</div>
              <div className="stat-value">{recipe.nutrition?.nutrients?.[2]?.amount || 'N/A'}g</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
