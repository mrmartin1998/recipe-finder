import Link from 'next/link';

export default function RecipeCard({ recipe }) {
  if (!recipe) return null;

  return (
    <div className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
      <figure className="px-4 pt-4">
        <img
          src={recipe.image || "https://placehold.co/600x400"}
          alt={recipe.title}
          className="rounded-xl h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipe.title}</h2>
        <div className="flex gap-2 text-sm">
          <span className="badge badge-primary">{recipe.readyInMinutes}min</span>
          <span className="badge badge-secondary">{recipe.servings} servings</span>
        </div>
        <div className="card-actions justify-end mt-4">
          <Link href={`/recipe/${recipe.id}`} className="btn btn-primary">
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
}
