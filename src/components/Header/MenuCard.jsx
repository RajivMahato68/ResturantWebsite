import React from 'react';
import image1 from '../../assets/card1.jpg';
import image2 from '../../assets/menuCard.jfif';
import image3 from '../../assets/menuCard2.jfif';
import image4 from '../../assets/menuCard3.jfif';
import { FaCartArrowDown } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const menuItems = [
  {
    image: image1,
    name: 'MO:MO',
    description: 'Steamed or fried dumplings filled with minced meat or vegetables, served with spicy chutney.',
    deliveryFee: '500'
  },
  {
    image: image2,
    name: 'Chicken Sekuwa',
    description: 'Marinated and grilled chicken skewers, summer and winter seasoned with Nepali spices.',
    deliveryFee: '500'
  },
  {
    image: image3,
    name: 'Aloo Chop',
    description: 'Spiced mashed potato patties, coated in chickpea flour and fried until crispy',
    deliveryFee: '500'
  },
  {
    image: image4,
    name: 'Chhoila',
    description: 'Spicy grilled meat mixed with mustard oil, spices, and herbs served with spices.',
    deliveryFee: '500'
  }
];

function MenuCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="container mx-auto py-4 px-4 md:px-8 lg:px-16 xl:px-24">
      <Slider {...settings}>
        {menuItems.map((menuItem, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-md overflow-hidden group mx-2"
            style={{ width: '100%', maxWidth: '300px', height: '100%', maxHeight: '500px' }}
          >
            <img src={menuItem.image} alt={menuItem.name} className="w-full h-[200px] object-cover" />
            <div className="p-4 h-[calc(100%-200px)]">
              <h2 className="text-xl font-bold mt-2 text-[16px]">{menuItem.name}</h2>
              <p className="text-gray-600 mt-2 text-[13px]">{menuItem.description}</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-orange-500 font-bold text-[12px]">
                  <span className='text-black font-["Plus_Jakarta_Sans"]'>Delivery fee: <span className='text-orange-500'>Rs.</span></span>
                  {menuItem.deliveryFee}
                </p>
                <button className="bg-black group-hover:bg-orange-500 text-white font-bold py-2 px-4 rounded transition-colors duration-300 flex items-center">
                  <FaCartArrowDown />
                </button>
              </div>
            </div>
            {/* Plus Icon Container */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:mt-[300px] md:ml-[170px] mt-[322px] ml-[95px]">
              <CiSquarePlus className="text-orange-500 text-5xl" />
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 text-left mt-2 ml-1 duration-300">
              <span className="bg-orange-500 text-white px-2 py-1 font-['Plus_Jakarta_Sans'] text-[14px]">
                Rs.{menuItem.deliveryFee}
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MenuCard;
