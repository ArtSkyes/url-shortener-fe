import React, { useState, useEffect } from 'react';
import ShortUrlForm from '../components/ShortUrlForm';
import ShortUrlList from '../components/ShortUrlList';
import { getTop100Urls } from '../api/shortUrlApi';

const Home = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    fetchUrls();
  }, []);

  const fetchUrls = async () => {
    try {
      const fetchedUrls = await getTop100Urls();
      setUrls(fetchedUrls);
    } catch (error) {
      console.error('Error fetching URLs:', error);
    }
  };

  const handleUrlCreated = (newUrl) => {
    setUrls((prevUrls) => [newUrl, ...prevUrls.slice(0, 99)]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-night">
        URL Shortener
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <ShortUrlForm onUrlCreated={handleUrlCreated} />
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-ocean">
          Top 100 Most Accessed URLs
        </h2>
        <ShortUrlList urls={urls} />
      </div>
    </div>
  );
};

export default Home;
