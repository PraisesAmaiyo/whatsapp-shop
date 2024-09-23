const API_URL = 'https://whatsapp-shop-api.onrender.com';

export async function getFeaturedCategories() {
  const response = await fetch(`${API_URL}/featuredCategories`);
  return await response.json();
}

export async function getTrendingProducts() {
  if (!navigator.onLine) {
    throw new Error('No network connection');
  }

  try {
    const response = await fetch(`${API_URL}/trendingProducts`);
    if (!response.ok) {
      throw new Error('Failed to fetch trending products');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function getNewArrivals() {
  if (!navigator.onLine) {
    throw new Error('No network connection');
  }

  try {
    const response = await fetch(`${API_URL}/newArrivals`);
    if (!response.ok) {
      throw new Error('Failed to fetch new arrival products');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function getFrequentlyViewed() {
  if (!navigator.onLine) {
    throw new Error('No network connection');
  }

  try {
    const response = await fetch(`${API_URL}/frequentlyvieweditems`);
    if (!response.ok) {
      throw new Error('Failed to fetch frequently viewed products');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function getSimilarItems() {
  if (!navigator.onLine) {
    throw new Error('No network connection');
  }

  try {
    const response = await fetch(`${API_URL}/similaritems`);
    if (!response.ok) {
      throw new Error('Failed to fetch similar products');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
