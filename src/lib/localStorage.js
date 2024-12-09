const FAVORITES_KEY = 'recipe-finder-favorites';

export function getFavorites() {
  if (typeof window === 'undefined') return [];
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
}

export function addFavorite(recipe) {
  const favorites = getFavorites();
  const newFavorites = [...favorites, recipe];
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
}

export function removeFavorite(recipeId) {
  const favorites = getFavorites();
  const newFavorites = favorites.filter(recipe => recipe.id !== recipeId);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
}

export function isFavorite(recipeId) {
  const favorites = getFavorites();
  return favorites.some(recipe => recipe.id === recipeId);
}
