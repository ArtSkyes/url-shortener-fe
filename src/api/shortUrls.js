import axios from 'axios';

export const createShortUrl = async (fullUrl) => {
  try {
    const response = await axios.post('/short_urls', { full_url: fullUrl });
    return response.data;
  } catch (error) {
    console.error('Error creating short URL:', error);
    throw error;
  }
};

export const getTopShortUrls = async () => {
  try {
    const response = await axios.get('/short_urls');
    return response.data.urls;
  } catch (error) {
    console.error('Error fetching top short URLs:', error);
    throw error;
  }
};

export const getShortUrl = async (shortCode) => {
  try {
    const response = await axios.get(`/short_urls/${shortCode}`, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    });
    return response;
  } catch (error) {
    console.error('Error fetching short URL:', error);
    throw error;
  }
};


