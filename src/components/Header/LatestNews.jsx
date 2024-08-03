import React from 'react';
import image1 from '../../assets/newsImage.png';
import photo from '../../assets/news.png';

// Array containing news items
const chefs = [
  {
    image: image1,
    title: "New Appetizers",
    description: `This traditional Nepali dish features fermented leafy greens, offering a unique and tangy flavor. Mixed with fresh tomatoes, onions, and a blend of authentic Nepali spices, our Gundruk Salad is a refreshing and healthy appetizer that brings a taste of the Himalayas to your plate. Perfect for those looking to explore the rich culinary heritage of Nepal!`,
  },
  {
    image: photo,
    title: "New Desserts",
    description: `A delightful twist on the classic dumpling, these steamed momos are filled with a luscious chocolate center and served with a warm chocolate dipping sauce. A must-try for chocolate lovers!`
  }
];

function LatestNews() {
  return (
    <div className="w-full py-10">
      {/* Heading section with underline styling */}
      <div className="flex justify-center pb-10 mb-10 font-['Plus_Jakarta_Sans'] underline-offset-8 px-4 md:px-6 lg:px-8"
        style={{ textDecoration: 'underline #f38220 2px', textDecorationThickness: '2px', textDecorationOffset: '2px' }}>
        <h1 className='text-[36px] font-bold'>Our News</h1>
      </div>

      {/* Map through news items and render each */}
      {chefs.map((chef, index) => (
        <div
          key={index}
          className={`w-full flex flex-col md:flex-row items-center justify-center bg-gray-100 xl:px-[150px]
            ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} ${index === 1 ? 'pb-10' : ''}`}
        >
          {/* Image section */}
          <div className="w-full md:w-1/2 flex justify-center px-2 md:px-4 lg:px-6">
            <img
              src={chef.image}
              alt={chef.title}
              className="rounded-lg shadow-md w-[520px] h-[400px] object-cover mt-4"
            />
          </div>

          {/* Text section */}
          <div className="w-full md:w-1/2 text-center md:text-left px-2 md:px-4 lg:px-6 mt-6 md:mt-0">
            <h3 className='text-orange-500 text-[12px] font-semibold mb-3 font-["Plus_Jakarta_Sans"]'>NEWS</h3>
            <h2 className="text-3xl font-bold mb-4">{chef.title}</h2>
            <p className="text-gray-700 mb-4 text-justify md:text-justify lg:text-justify">
              {chef.description}
            </p>
            <button className="bg-orange-500 hover:bg-orange-700 text-white py-2 rounded focus:outline-none focus:shadow-outline text-[16px] font-['Plus_Jakarta_Sans'] w-[120px] h-[44px]">
              READ MORE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LatestNews;
