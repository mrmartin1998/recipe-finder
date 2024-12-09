"use client";
import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import RecipeGrid from '@/components/RecipeGrid';
import { searchRecipes } from '@/lib/api/recipes';

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const results = await searchRecipes(query);
      setRecipes(results);
    } catch (error) {
      console.error('Search failed:', error);
      // TODO: Add error handling UI
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold text-center mb-8">Recipe Finder</h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <RecipeGrid recipes={recipes} />
      )}
    </div>
  );
}
