import RecipeCard from './RecipeCard';

export default function RecipeGrid({ recipes = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {/* Temporary placeholder cards */}
      {[1,2,3,4].map((i) => (
        <RecipeCard key={i} />
      ))}
    </div>
  );
}
