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
import 'animate.css';

const User = () => {
  const [selectedCategory, setSelectedCategory] = useState('Public Sector');
  const [isRotating, setIsRotating] = useState(false);

  const images = {
    'Public Sector': [image11, image12, image13, image14],
    'Private Sector': [image21, image22, image23, image24],
    'Research & Academia': [image31, image32, image33, image34],
    'Non-State Actors': [image41, image42, image43, image44],
  };

  const rotationConfigs = {
    'Public Sector': [
      { transform: 'rotate(45deg)', delay: 0 },
      { transform: 'rotate(-45deg)', delay: 0.2 },
      { transform: 'rotateZ(180deg)', delay: 0.4 },
      { transform: 'rotate(-45deg)', delay: 0.6 },
    ],
    'Private Sector': [
      { transform: 'rotate(45deg)', delay: 0 },
      { transform: 'rotate(-45deg)', delay: 0.2 },
      { transform: 'rotateZ(180deg)', delay: 0.4 },
      { transform: 'rotate(-45deg)', delay: 0.6 },
    ],
    'Research & Academia': [
      { transform: 'rotate(45deg)', delay: 0 },
      { transform: 'rotate(-45deg)', delay: 0.2 },
      { transform: 'rotateZ(180deg)', delay: 0.4 },
      { transform: 'rotate(-45deg)', delay: 0.6 },
    ],
    'Non-State Actors': [
      { transform: 'rotate(45deg)', delay: 0 },
      { transform: 'rotate(-45deg)', delay: 0.2 },
      { transform: 'rotateZ(180deg)', delay: 0.4 },
      { transform: 'rotate(-45deg)', delay: 0.6 },
    ],
  };

  const handleCategoryChange = (category) => {
    setIsRotating(true);
    setSelectedCategory(category);
    setTimeout(() => setIsRotating(false), 1200);
  };

  return (
    <div className="bg-white py-12 px-4">
      <h2 className="text-3xl font-montserrat text-left mb-2 pl-[10vw]">OUR</h2>
      <h2 className="text-3xl font-bold text-left mb-6 pl-[10vw]">MEMBERS</h2>

      <div className="flex flex-col md:flex-row justify-center items-start gap-12">
        {/* Buttons */}
        <div className="flex flex-col items-start pr-[13vw] gap-1">
          {Object.keys(images).map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`text-lg ${
                selectedCategory === category
                  ? 'font-bold text-black font-montserrat underline'
                  : 'text-gray-400 font-medium hover:text-black hover:underline'
              } transition duration-300`}
              style={{ textDecorationColor: '#20a7db' }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Images */}
        <div className="grid" key={selectedCategory}>
          {images[selectedCategory].map((image, index) => {
            const rotationConfig = rotationConfigs[selectedCategory][index];
            return (
              <div key={index} className="image-wrapper">
                <img
                  src={image}
                  alt={`${selectedCategory} ${index + 1}`}
                  className={`category-image ${isRotating ? 'rotating' : ''}`}
                  style={{
                    '--rotation': rotationConfig.transform,
                    '--delay': `${rotationConfig.delay}s`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default User;
