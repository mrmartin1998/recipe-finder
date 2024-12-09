import RecipeCard from './RecipeCard';
import { useState } from 'react';

export default function RecipeGrid({ recipes = [] }) {
  const [visibleRecipes, setVisibleRecipes] = useState(8);

  if (recipes.length === 0) {
    return (
      <div className="text-center text-gray-500">
        Search for recipes to get started!
      </div>
    );
  }

  const showMore = () => {
    setVisibleRecipes(prev => prev + 8);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recipes.slice(0, visibleRecipes).map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      
      {visibleRecipes < recipes.length && (
        <div className="text-center">
          <button onClick={showMore} className="btn btn-primary">
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
