import React, { useState } from 'react';
import image11 from './image1.jpg';
import image12 from './image1.jpg';
import image13 from './image1.jpg';
import image14 from './image1.jpg';

import image21 from './image2.jpg';
import image22 from './image2.jpg';
import image23 from './image2.jpg';
import image24 from './image2.jpg';

import image31 from './image3.jpg';
import image32 from './image3.jpg';
import image33 from './image3.jpg';
import image34 from './image3.jpg';

import image41 from './image1.jpg';
import image42 from './image2.jpg';
import image43 from './image1.jpg';
import image44 from './image3.jpg';

const User = () => {
  const [selectedCategory, setSelectedCategory] = useState('Public Sector');

  const images = {
    'Public Sector': [image11, image12, image13, image14],
    'Private Sector': [image21, image22, image23, image24],
    'Research & Academia': [image31, image32, image33, image34],
    'Non-State Actors': [image41, image42, image43, image44],
  };

  return (
    <div className="bg-white py-12 px-4">
      <h2 className="text-3xl font-montserrat text-left mb-2 pl-[10vw]">OUR</h2>
      <h2 className="text-3xl font-bold text-left mb-6 pl-[10vw]">MEMBERS</h2>

      <div className="flex flex-col md:flex-row justify-center items-start gap-12">
        
        <div className="flex flex-col items-start pr-[13vw] gap-1">
          {Object.keys(images).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-lg ${selectedCategory === category
                ? 'font-bold text-black font-montserrat underline'
                : 'text-gray-400 font-medium hover:text-black hover:underline'
                } transition duration-300`}
              style={{ textDecorationColor: '#20a7db' }}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          className={`grid grid-cols-2 sm:grid-cols-4 gap-3 transition-all duration-500 mt-[1.8vh]`}
          key={selectedCategory}
        >
          {images[selectedCategory].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${selectedCategory} Image ${index + 1}`}
              className="w-full sm:w-[180px] h-[100px] object-cover border border-gray-300 rounded shadow hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;