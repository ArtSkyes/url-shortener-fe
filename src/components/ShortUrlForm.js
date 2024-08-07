import React, { useState } from 'react';
import { createShortUrl } from '../api/shortUrlApi';

const ShortUrlForm = ({ onUrlCreated }) => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setShortenedUrl('');

    try {
      const newUrl = await createShortUrl(url);
      onUrlCreated(newUrl);
      setUrl('');
      const shortUrl = `http://localhost:3000/${newUrl.short_code}`;
      setShortenedUrl(shortUrl);
    } catch (error) {
      setError(error.message || 'An error occurred');
    }
  };

  return (
    <div className="mb-8">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL to shorten"
          className="w-full p-2 border border-sky rounded-md focus:outline-none focus:ring-2 focus:ring-ocean"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-ocean text-white rounded-md hover:bg-night transition-colors duration-300"
        >
          Shorten URL
        </button>
      </form>
      {error && <p className="mt-2 text-red-500">{error}</p>}
      {shortenedUrl && (
        <div className="mt-4 p-4 bg-sand rounded-md">
          <p className="font-semibold text-ocean">Shortened URL:</p>
          <a
            href={shortenedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky hover:text-night break-all"
          >
            {shortenedUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default ShortUrlForm;
