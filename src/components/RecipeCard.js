export default function RecipeCard({ recipe }) {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-4 pt-4">
        <img
          src="https://placehold.co/600x400"
          alt="Recipe"
          className="rounded-xl h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Recipe Title</h2>
        <p>Quick description or cooking time</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Recipe</button>
        </div>
      </div>
    </div>
  );
}
