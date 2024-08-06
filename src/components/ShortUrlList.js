import React from 'react';
import ShortUrlItem from './ShortUrlItem';

const ShortUrlList = ({ urls }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Top 100 Short URLs</h2>
      <ul className="space-y-4">
        {urls.map((url) => (
          <ShortUrlItem key={url.id} url={url} />
        ))}
      </ul>
    </div>
  );
};

export default ShortUrlList;
