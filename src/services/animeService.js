const BASE_URL = 'https://api.jikan.moe/v4';

export const fetchTopAnime = async (page = 1) => {
  try {
    // Add delay to respect rate limits
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const response = await fetch(`${BASE_URL}/top/anime?page=${page}&limit=20`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Check if data and data.data exist before mapping
    if (!data || !data.data) {
      console.error('Invalid API response structure:', data);
      return [];
    }

    return data.data.map(anime => ({
      id: anime.mal_id,
      name: anime.title,
      image: anime.images.jpg.large_image_url,
      category: anime.type === 'Movie' ? 'movies' : 'series',
      description: anime.synopsis,
      rating: anime.score || 0,
      isFavorite: false
    }));
  } catch (error) {
    console.error('Error fetching anime:', error);
    return []; // Return empty array on error
  }
};

// Optional: Add more specific fetching methods
export const searchAnime = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/anime?q=${query}&sfw=true`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error searching anime:', error);
    return [];
  }
};    