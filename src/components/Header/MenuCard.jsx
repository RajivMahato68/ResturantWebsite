import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MenuCard({ menuItems }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
            style={{ width: '242px', height: '433px' }}
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
                <div className="flex items-center">
                  <CiSquarePlus className="text-orange-500 w-11 h-11 opacity-0 group-hover:opacity-100 transition-opacity duration-300 " />
                  <button className="bg-black group-hover:bg-orange-500 text-white font-bold py-2 px-4 rounded transition-colors duration-300 flex items-center">
                    <FaCartArrowDown className="w-5 h-5" />
                  </button>
                </div>
              </div>
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
