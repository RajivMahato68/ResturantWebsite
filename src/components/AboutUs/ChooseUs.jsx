import React from 'react';
import { BadgePercent } from 'lucide-react';
import { BiSolidOffer } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { GiMapleLeaf } from "react-icons/gi";

const items = [
  {
    image: <GiMapleLeaf />,
    title: "Fresh Food",
    description: `We serve the best and fresh quality food`,
  },
  {
    image: <BiSolidOffer />,
    title: "Best Offer",
    description: `We give the best offer for our valuable customers.`
  },
  {
    image: <FaShippingFast />,
    title: "Fast Delivery",
    description: `We have delivery van for fast delivery`
  }
];

function ChooseUs() {
  return (
    <div className="w-full py-10 px-4 md:px-[170px]">
      <h1
        className='text-center md:text-[36px] text-[18px] font-bold mb-10 font-["Plus_Jakarta_Sans"] underline-offset-8'
        style={{ textDecoration: 'underline #f38220 2px', textDecorationThickness: '2px', textDecorationOffset: '4px' }}
      >
        Why Choose Us
      </h1>
      
      <div className='flex flex-col md:flex-row justify-between gap-10 cursor-pointer'>
        {items.map((item, index) => (
          <div key={index} className='flex flex-col items-center text-center p-4 md:w-[250px]'>
            <div className='text-[50px] md:text-[100px] text-orange-500 mb-4 gap[200px]'>
              {item.image}
            </div>
            <h2 className='text-[22px] font-["Plus_Jakarta_Sans"] font-semibold mb-2'>{item.title}</h2>
            <p className='text-[16px]'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChooseUs;
