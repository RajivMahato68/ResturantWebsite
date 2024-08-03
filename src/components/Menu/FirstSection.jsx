import React from 'react'
import photo from "../../assets/homefirst.jfif";

function FirstSection() {
  return (
    <div>
      {/* Background Image Section */}
      <div
        className="relative w-full h-[400px] mt-2 bg-cover bg-center"
        style={{ backgroundImage: `url(${photo})` }}
      >
        <div className="absolute inset-0 flex flex-col items-start md:pl-[150px] pl-[50px] justify-start pt-[150px]">
          <h1 className="font-semibold text-white text-[36px] sm:text-[40px] md:text-[48px] font-['Plus_Jakarta_Sans']">
            Our Menu
          </h1>
        </div>
      </div>

      {/* Description Section */}
      <p className="text-[20px] sm:text-[22px] text-[#333333] py-5 px-5 sm:px-[100px] md:px-[155px] md:mt-[110px] md:mb-[110px] font-['Plus_Jakarta_Sans'] font-semibold  text-justify ">
        Savor the true flavors of Nepal with our authentic dishes, crafted from fresh, local ingredients. Enjoy a delightful culinary journey at [Restaurant Name]!
      </p>
    </div>
  )
}

export default FirstSection
