import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Card({ menuItems }) {
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
    <div className="container mx-auto py-6 px-4 md:px-8 lg:px-16 xl:px-24 mb-[75px]">
      <Slider {...settings}>
        {menuItems.map((menuItem, index) => (
          <div
            key={index}
            className="relative border  rounded-lg shadow-lg shadow-gray-300  overflow-hidden mx-2"
            style={{ width: '250px', height: '300px' }}
          >
            <img src={menuItem.image} alt={menuItem.name} className="w-[250px] h-[300px] object-cover" />
            <div className="p-4 h-[calc(100%-200px)] bg-[#fef3e9]">
              <h2 className="text-xl font-bold mt-2 text-[20px]">{menuItem.name}</h2>
              <p className="text-gray-600 mt-2 text-[13px]">{menuItem.post}</p>
              
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Card;
