import React from "react";
import photo from "../../assets/homefirst.jfif";

function FirstSection() {
  return (
    <div
      className="w-full h-[675px] mt-2"
      style={{
        backgroundImage: `url(${photo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className='text-center text-white text-[16px] md:text-[51px]  pr-[35px] font-["Plus_Jakarta_Sans"] pt-[100px]'>
        Delicious food, warm and cozy ambiance.
      </h1>
      <div className='font-["Plus_Jakarta_Sans"] text-white text-[18px] text-lg mt-5'>
        <p className="md:px-[150px] px-5">
          Experience culinary artistry where flavors meet elegance. Welcome to a
          dining adventure that tantalizes your taste buds and warms your heart.
        </p>
        {/* <p className='md:pl-[155px] pl-[40px]'></p> */}
      </div>

      <div className='md:pl-[120px] pl-[30px] pt-20'>
     
      <button className='w-[127px] h-[44px] bg-white rounded text-[#f38220] md:ml-7 justify-center ml-[5px]'>Order Online</button>
      </div>
      </div>
    </div>
  );
}

export default FirstSection;
