import React from 'react';
import photo from '../../assets/homefirst.jfif';


function FirstSection() {
  return (
    <div 
      className='w-full h-[675px] mt-2'
      style={{
        backgroundImage: `url(${photo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className='text-center text-white text-[20px] md:text-[51px] pr-[35px] font-["Plus_Jakarta_Sans"] pt-[100px]'>
        Delicious food, warm and cozy ambiance.
      </h1>
      <div className='font-["Plus_Jakarta_Sans"] text-white text-[18px] text-lg mt-5'>
        <p className='text-center'>Experience culinary artistry where flavors meet elegance. Welcome to a dining adventure that tantalizes your taste buds and</p>
        <p className='md:pl-[155px] pl-[100px]'>warms your heart.</p>
      </div>
      <div className='md:pl-[150px] pl-[30px] '>
      <button className=' bg-[#f38220] w-[118px] h-[44px] text-[16px] text-white font-["Plus_Jakarta_Sans"]text-center rounded mt-20 hover:bg-[#b9763a] md:justify-center mb-5'>Reservation</button>
      <button className='w-[127px] h-[44px] bg-white rounded text-[#f38220] md:ml-7 justify-center ml-[5px]'>Order Online</button>
      </div>
      </div>
    
  );
}

export default FirstSection;
