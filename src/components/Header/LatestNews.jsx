import React from 'react';
import image1 from '../../assets/newsImage.png';
import photo from '../../assets/news.png';

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
    <div className="w-full py-10  ">
      <div className="flex justify-center pb-10 mb-10 font-['Plus_Jakarta_Sans'] underline-offset-8" style={{ textDecoration: 'underline #f38220 2px', textDecorationThickness: '2px', textDecorationOffset: '2px' }}>
        <h1 className='text-[36px] font-bold'>Our News</h1>
      </div>
      {chefs.map((chef, index) => (
        <div 
          key={index} 
          className={`w-full px-10 flex flex-col md:flex-row items-center justify-center md:justify-between bg-gray-100 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} ${index === 1 ? 'pb-10' : ''}`} 
        >
          <div className="md:w-1/2">
            <div className={`flex justify-center md:justify-end ${index === 1 ? 'md:mr-[200px]' : 'md:ml-[125px]'}`}>
              <img
                src={chef.image}
                alt={chef.title}
                className="rounded-lg shadow-md w-[520px] h-[400px] md:w-[520px] md:h-[400px] object-cover mt-4 md:mt-10"
              />
            </div>
          </div>
          <div className={`md:w-1/2 text-center md:text-left mt-6 md:mt-0 ${index === 1 ? 'md:ml-[50px]' : ''}`}>
            <h3 className='text-orange-500 text-[12px] font-semibold w-[77px] h-[22px] font-["Plus_Jakarta_Sans"] md:ml-[40px] ml-[100px]'>NEWS</h3>
            <h2 className="text-3xl font-bold mb-4 md:ml-10">{chef.title}</h2>
            <div className="mx-4 md:mx-10">
              <p className="text-gray-700 mb-4 md:mr-[80px]">
                {chef.description}
              </p>
              <button className="bg-orange-500 hover:bg-orange-700 text-white py-2 rounded focus:outline-none focus:shadow-outline text-[16px] font-['Plus_Jakarta_Sans'] w-[120px] h-[44px]">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LatestNews;
