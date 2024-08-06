import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getShortUrl } from '../api/shortUrls';

const ShortUrl = () => {
  const { shortCode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAndRedirect = async () => {
      try {
        const response = await getShortUrl(shortCode);
        if (response.data && response.data.full_url) {
          window.location.href = response.data.full_url;
        } else if (response.data && response.data.error) {
          console.error('Error:', response.data.error);
          navigate('/');
        } else {
          throw new Error('Invalid response from server');
        }
      } catch (error) {
        console.error('Error fetching short URL:', error);
        navigate('/'); // Redirect to home page on error
      }
    };

    fetchAndRedirect();
  }, [shortCode, navigate]);

  return <div>Redirecting...</div>;
};

export default ShortUrl;
