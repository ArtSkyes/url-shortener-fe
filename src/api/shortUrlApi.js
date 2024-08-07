import { config } from './config';

export const getTop100Urls = async () => {
  try {
    const response = await fetch(`${config.API_URL}/short_urls`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.urls;
  } catch (error) {
    console.error('Error fetching top 100 URLs:', error);
    throw error;
  }
};

export const createShortUrl = async (fullUrl) => {
  try {
    const response = await fetch(`${config.API_URL}/short_urls`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ full_url: fullUrl }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.errors?.[0] || 'An error occurred');
    }
    return response.json();
  } catch (error) {
    console.error('Error creating short URL:', error);
    throw error;
  }
};