const API_URL = 'https://whatsapp-shop-api.onrender.com';

export async function getFeaturedCategories() {
  const response = await fetch(`${API_URL}/featuredCategories`);
  return await response.json();
}

export async function getTrendingProducts() {
  try {
    const response = await fetch(`${API_URL}/trendingProducts`);
    if (!response.ok) {
      throw new Error('Failed to fetch trending products');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

export async function getNewArrivals() {
  try {
    const response = await fetch(`${API_URL}/newArrivals`);
    if (!response.ok) {
      throw new Error('Failed to fetch new arrival products');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}
export async function getFrequentlyViewed() {
  try {
    const response = await fetch(`${API_URL}/frequentlyvieweditems`);
    if (!response.ok) {
      throw new Error('Failed to fetch frequently viewed products');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}
