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
  // State to manage selected category
  const [selectedCategory, setSelectedCategory] = useState('Public Sector');

  // Images based on the selected category
  const images = {
    'Public Sector': [image11, image12, image13, image14],
    'Private Sector': [image21, image22, image23, image24],
    'Research & Academia': [image31, image32, image33, image34],
    'Non-State Actors': [image41, image42, image43, image44],
  };

  return (
    <div className="bg-white py-12">
      {/* Container for Heading, Links, and Images */}
      <div className="flex justify-center items-start gap-12">

        {/* Column Layout for Heading and Links */}
        <div className="flex flex-col items-center gap-8 mt-10"> {/* Added margin-top to move it down */}
          {/* Heading */}
          <h2 className="text-2xl font-normal text-center">
            <span className="font-normal">OUR</span> 
            <span className="font-semibold">MEMBERS</span>
          </h2>

          {/* Categories Links */}
          <div className="flex flex-col items-center gap-6">
            {Object.keys(images).map((category) => (
              <a
                key={category}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedCategory(category);
                }}
                className={`text-gray-400 text-lg font-medium ${
                  selectedCategory === category
                    ? 'text-black underline'
                    : 'hover:text-black hover:underline'
                } transition duration-300`}
                style={{
                  textDecorationColor: '#20a7db', // Custom underline color
                }}
              >
                {category}
              </a>
            ))}
          </div>
        </div>

        {/* Images - Horizontally Aligned with margin-top to move them down */}
        <div
          className="flex gap-8 justify-center transition-all duration-500 mt-6" // Added margin-top to move the images down
          key={selectedCategory} // Key triggers animation on category change
        >
          {images[selectedCategory].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${selectedCategory} Image ${index + 1}`}
              className="w-[180px] h-[100px] object-cover border border-gray-300 rounded shadow hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default User;

