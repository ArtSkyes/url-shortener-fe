import React from 'react';

const ShortUrlList = ({ urls }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-ocean text-white">
          <tr>
            <th className="px-4 py-2">No.</th>
            <th className="px-4 py-2">Short URL</th>
            <th className="px-4 py-2">Original URL</th>
            <th className="px-4 py-2">Click Count</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url, index) => (
            <tr
              key={url.id}
              className={index % 2 === 0 ? 'bg-sand bg-opacity-25' : 'bg-white'}
            >
              <td className="border px-4 py-2 text-center">{index + 1}</td>
              <td className="border px-4 py-2 text-center">
                <a
                  href={`http://localhost:3000/${url.short_code}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky hover:text-night"
                >
                  {url.short_code}
                </a>
              </td>
              <td className="border px-4 py-2">
                <a
                  href={url.full_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky hover:text-night truncate block max-w-xs"
                >
                  {url.full_url}
                </a>
              </td>
              <td className="border px-4 py-2 text-center">
                {url.click_count}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShortUrlList;
