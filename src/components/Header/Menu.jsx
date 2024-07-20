import React, { useState } from 'react';
import { AiOutlineHdd } from "react-icons/ai";
import { GiCargoShip } from "react-icons/gi";
import { FaGlassCheers } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoIceCreamOutline} from "react-icons/io5";
import MenuCard from "./MenuCard"

const iconData = [
  { icon: AiOutlineHdd, text: 'All' },
  { icon: GiCargoShip, text: 'Appetizers' },
  { icon: FaGlassCheers, text: 'Drinks' },
  { icon: FaHandHoldingHeart, text: 'Main Course' },
  { icon: IoIceCreamOutline, text: 'Desserts' },
];

function Menu() {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (text) => {
    setSelectedIcon(text);
  };

  return (
    <div className='text-center overflow-hidden'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-["Plus_Jakarta_Sans"] font-semibold my-4'>
        Our Special menu
      </h1>
      <div className='flex justify-center '>
        {iconData.map((item, index) => (
          <div
            key={index}
            className='flex flex-col items-center cursor-pointer  md:ml-10 lg-ml-[70px] '
            onClick={() => handleIconClick(item.text)}
          >
            <item.icon className='w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14' />
            <p
              className={`mt-2 text-base md:text-lg ${selectedIcon === item.text ? 'underline' : ''}`}
              style={{
                textDecoration: selectedIcon === item.text ? 'none' : '',
                boxShadow: selectedIcon === item.text ? 'inset 0 -2px 0 0 #f38220' : 'none',
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <div className='mt-8'>
        <MenuCard />
      </div>
    </div>
  );
}

export default Menu;
