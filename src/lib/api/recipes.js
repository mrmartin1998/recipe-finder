const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com/recipes';

export async function searchRecipes(query) {
  try {
    const response = await fetch(
      `${BASE_URL}/complexSearch?apiKey=${API_KEY}&query=${query}&addRecipeInformation=true&number=12`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error searching recipes:', error);
    throw error;
  }
}

export async function getRecipeById(id) {
  try {
    const response = await fetch(
      `${BASE_URL}/${id}/information?apiKey=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching recipe:', error);
    throw error;
  }
}
