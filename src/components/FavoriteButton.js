"use client";
import { useState, useEffect } from 'react';
import { addFavorite, removeFavorite, isFavorite } from '@/lib/localStorage';

export default function FavoriteButton({ recipe }) {
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    setIsFavorited(isFavorite(recipe.id));
  }, [recipe.id]);

  const toggleFavorite = () => {
    if (isFavorited) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe);
    }
    setIsFavorited(!isFavorited);
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`btn btn-circle ${isFavorited ? 'btn-primary' : 'btn-ghost'}`}
      aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFavorited ? '♥' : '♡'}
    </button>
  );
}
