import React from 'react';

const Photocard = ({ photo }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={photo.url} alt={photo.title} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{photo.title}</div>
        <p className="text-gray-700 text-base">{photo.description}</p>
      </div>
    </div>
  );
};

export default Photocard;