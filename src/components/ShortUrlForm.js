import React, { useState } from 'react';

const ShortUrlForm = ({ onSubmit }) => {
  const [fullUrl, setFullUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(fullUrl);
    setFullUrl('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex">
        <input
          type="text"
          value={fullUrl}
          onChange={(e) => setFullUrl(e.target.value)}
          placeholder="Enter a URL"
          className="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r"
        >
          Shorten
        </button>
      </div>
    </form>
  );
};

export default ShortUrlForm;
