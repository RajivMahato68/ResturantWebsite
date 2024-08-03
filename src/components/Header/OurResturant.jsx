import React from 'react';
import resturant from '../../assets/OurResturant.jfif';

function OurResturant() {
  return (
    <div className="mt-20 ">
      <h1 className='text-center text-[36px] font-bold font-["Plus_Jakarta_Sans"] mb-8 underline-offset-8 cur' style={{ textDecoration: 'underline #f38220 2px', textDecorationThickness: '2px', textDecorationOffset: '4px' }}>
        Our Restaurant
      </h1>
      <img 
        src={resturant} 
        alt="Restaurant View" 
        className="w-full h-auto max-w-full object-cover shadow-md cursor-pointer"
      />
    </div>
  );
}

export default OurResturant;
