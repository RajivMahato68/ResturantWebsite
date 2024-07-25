import React from 'react';
import photo from '../../assets/about.jfif';

function FirstSection() {
  return (
    <div
      className="relative bg-cover bg-center w-full h-[390px] mt-2 overflow-hidden"
      style={{ backgroundImage: `url(${photo})` }}
    >
      <h1
        className='text-white  text-[30px] md:text-[48px] lg:text-5xl font-semibold absolute inset-x-0 top-1/2 transform -translate-y-1/2 px-4 md:px-10 lg:px-20 font-["Plus_Jakarta_Sans"]'
        style={{ paddingLeft: '10%', paddingRight: '10%' }}
      >
        About Us
      </h1>
    </div>
  );
}

export default FirstSection;
