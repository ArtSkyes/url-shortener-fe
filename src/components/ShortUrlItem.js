import React from 'react';

const ShortUrlItem = ({ url }) => {
  return (
    <li className="flex items-center">
      <a
        href={`/${url.short_code}`}
        className="text-blue-500 hover:underline"
      >
        {url.full_url}
      </a>
      <span className="ml-4 text-gray-500">Clicks: {url.click_count}</span>
    </li>
  );
};

export default ShortUrlItem;
