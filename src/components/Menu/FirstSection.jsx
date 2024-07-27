import React from 'react'
import photo from "../../assets/homefirst.jfif";


function FirstSection() {
  return (
    <div>
       <div
      className="w-full h-[400px] mt-2"
      style={{
        backgroundImage: `url(${photo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <div className="flex flex-col items-start md:pl-[150px] pl-[50px] justify-start  pt-[150px]">
  <h1 className="font-semibold text-white text-[36px] md:text-[48px] font-['Plus_Jakarta_Sans']">
    Our Menu
  </h1>
</div>

    </div>
    <p className=' text-[22px] text-[#333333] py-5 px-5 text-center md:px-[155px] md:mt-[110px] md:mb-[110px] font-["Plus_Jakarta_Sans"] font-semibold'>Savor the true flavors of Nepal with our authentic dishes, crafted from fresh, local ingredients. Enjoy a delightful culinary journey at [Restaurant Name]!</p>
    </div>
  )
}

export default FirstSection
