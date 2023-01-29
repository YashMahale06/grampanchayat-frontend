import React from 'react';

const Scard = ({ name, age, village, contact, image }) => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow">
      <div className="flex flex-col md:flex-row">
        <img 
          className="w-full md:w-24 md:h-24 md:rounded-full md:mr-6"
          src={image} 
          alt={name}
        />
        <div className="md:ml-6">
          <h3 className="text-lg font-medium leading-tight">{name}</h3>
          <p className="mt-2 text-gray-700">Age: {age}</p>
          <p className="mt-2 text-gray-700">Village: {village}</p>
          <p className="mt-2 text-gray-700">Contact: {contact}</p>
        </div>
      </div>

      <div className="description flex-col max-w-xs text-left pt-2">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod labore, dicta voluptas quos numquam sapiente.</p>
      </div>
    </div>
  );
};

export default Scard;
