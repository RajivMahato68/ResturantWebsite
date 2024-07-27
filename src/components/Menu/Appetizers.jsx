import React, { useState } from 'react';
import AppetizerSvg from './SVG/AppetizerSvg';
import image1 from '../../assets/newsImage.png';
import photo from '../../assets/news.png';
import { FaCartArrowDown } from 'react-icons/fa';

const items = [
  {
    title: 'Mo:mo',
    price: '500',
    description: 'Steamed or fried dumplings filled with minced meat or vegetables, served with spicy chutney.',
    image: photo,
  },
  {
    title: 'Mo:mo',
    price: '500',
    description: 'Steamed or fried dumplings filled with minced meat or vegetables, served with spicy chutney.',
    image: image1,
  },
  {
    title: 'Mo:mo',
    price: '500',
    description: 'Steamed or fried dumplings filled with minced meat or vegetables, served with spicy chutney.',
    image: photo,
  },
  {
    title: 'Mo:mo',
    price: '500',
    description: 'Steamed or fried dumplings filled with minced meat or vegetables, served with spicy chutney.',
    image: image1,
  },
  {
    title: 'Mo:mo',
    price: '500',
    description: 'Steamed or fried dumplings filled with minced meat or vegetables, served with spicy chutney.',
    image: photo,
  },
  {
    title: 'Mo:mo',
    price: '500',
    description: 'Steamed or fried dumplings filled with minced meat or vegetables, served with spicy chutney.',
    image: image1,
  },
];

function Appetizers() {
  const [selectedItems, setSelectedItems] = useState([]);

  // Function to handle icon click
  const handleIconClick = (id) => {
    if (selectedItems.includes(id)) {
      // If item is already selected, unselect it
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      // If item is not selected, add it to the selected items
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <>
      {/* Center the AppetizerSvg */}
      <div className="flex justify-center">
        <div>
          <AppetizerSvg className="w-[200px] h-[200px] ml-5" />
        </div>
      </div>
      
      {/* Heading with underlined text */}
      <h1 className="font-bold text-[36px] flex justify-center underline-offset-8">
        A <span className="underline decoration-[#f38220] decoration-2 underline-offset-8 mb-5">ppetizer</span>s
      </h1>

      {/* Container for the card grid */}
      <div className="container mx-auto p-4 md:px-[100px]">
        {/* Grid layout for cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md flex flex-col md:flex-row w-full md:w-[510px] h-auto md:h-[160px] group hover:bg-[#fae7d7] transition duration-300 ease-in-out"
            >
              {/* Image for the card */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-[160px] h-[160px] object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
              />
              {/* Content of the card */}
              <div className="flex flex-col justify-between w-full p-4">
                {/* Title and price in one row */}
                <div className="flex items-center mb-2">
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <div className="flex-grow border-t-2 border-[#f6dac2] ml-4 mt-1 mr-1"></div>
                  <p className="font-semibold text-[#f38220]">Rs.{item.price}</p>
                </div>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <label
                      htmlFor={index}
                      className="ml-2 text-black font-medium underline decoration-[#f38220] underline-offset-2 mr-2 text-[18px] group-hover:text-[#f38220]"
                    >
                      Add to Cart
                    </label>
                    <FaCartArrowDown
                      className={`w-5 h-5 cursor-pointer ${selectedItems.includes(index) ? 'text-blue-500' : 'text-black'} group-hover:text-[#f38220]`}
                      onClick={() => handleIconClick(index)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Appetizers;
