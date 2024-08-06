import React, { useState, useEffect } from 'react';
import { createShortUrl, getTopShortUrls } from '../api/shortUrls';
import ShortUrlForm from '../components/ShortUrlForm';
import ShortUrlList from '../components/ShortUrlList';

const Home = () => {
  const [shortUrl, setShortUrl] = useState('');
  const [topUrls, setTopUrls] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTopUrls();
  }, []);

  const fetchTopUrls = async () => {
    try {
      const urls = await getTopShortUrls();
      setTopUrls(urls);
    } catch (err) {
      handleError('Failed to fetch top URLs. Please try again later.', err);
    }
  };

  const handleSubmit = async (fullUrl) => {
    try {
      const data = await createShortUrl(fullUrl);
      setShortUrl(data.short_code);
      setError('');
      fetchTopUrls();
    } catch (err) {
      handleError('Failed to create short URL. Please check your input and try again.', err);
      setShortUrl(''); 
    }
  };

  const handleError = (message, err) => {
    console.error(message, err);
    if (err.response && err.response.data && err.response.data.errors) {
      setError(err.response.data.errors.join(', '));
    } else {
      setError(message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">URL Shortener</h1>
      <ShortUrlForm onSubmit={handleSubmit} />
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {shortUrl && (
        <div className="mb-8">
          <p className="text-lg">
            Short URL:{' '}
            <a
              href={`/${shortUrl}`}
              className="text-blue-500 hover:underline"
            >
              {`http://localhost:3000/${shortUrl}`}
            </a>
          </p>
        </div>
      )}
      <ShortUrlList urls={topUrls} />
    </div>
  );
};

export default Home;