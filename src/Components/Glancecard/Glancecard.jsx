import React from 'react';
import './Glancecard.css'
const Glancecard = ({ title, list ,readMoreLink}) => {
  return (
    <div className="w-full md:w-1/3 p-2">
      <div className="bg-gray-100 rounded-lg shadow p-2">
        <h3 className="text-lg font-medium leading-tight mb-2">{title}</h3>
        <ul className="list-disc list-inside">
          {list.map((item, index) => (
            <li key={index} className="py-2">{item}</li>
          ))}
        </ul>
        <a href={readMoreLink} className="inline-block mt-4 text-indigo-600 font-medium hover:text-indigo-500">Read More</a>
      </div>
    </div>
  );
};

export default Glancecard;