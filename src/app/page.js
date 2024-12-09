import SearchBar from '@/components/SearchBar';
import RecipeGrid from '@/components/RecipeGrid';

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold text-center mb-8">Recipe Finder</h1>
      <SearchBar />
      <RecipeGrid />
    </div>
  );
}
