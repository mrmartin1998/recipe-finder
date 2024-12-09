import RecipeCard from './RecipeCard';

export default function RecipeGrid({ recipes = [] }) {
  if (recipes.length === 0) {
    return (
      <div className="text-center text-gray-500">
        Search for recipes to get started!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
