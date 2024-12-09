"use client";
import { useState, useEffect } from 'react';
import { getFavorites } from '@/lib/localStorage';
import RecipeGrid from '@/components/RecipeGrid';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold text-center mb-8">Favorite Recipes</h1>
      {favorites.length === 0 ? (
        <div className="text-center text-gray-500">
          No favorite recipes yet. Start by adding some recipes to your favorites!
        </div>
      ) : (
        <RecipeGrid recipes={favorites} />
      )}
    </div>
  );
}
