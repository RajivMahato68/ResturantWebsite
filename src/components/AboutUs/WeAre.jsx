import React from 'react';
import image1 from '../../assets/card1.jpg';
import image2 from '../../assets/card2.jpg';
import image3 from '../../assets/card3.jpg';
import { FiAlertCircle } from "react-icons/fi";

const aboutData = [
  {
    id: 1,
    text: `Welcome to [Restaurant Name], a cozy corner where the essence of Nepalese culture and cuisine come alive. We are a small, family-run restaurant dedicated to serving authentic and delicious Nepalese dishes made from fresh, local ingredients. Our warm and friendly atmosphere makes every visit a delightful experience. Come and enjoy the true flavors of Nepal with us!`,
    heading: "Who We Are",
  },
  // Add more objects as needed
];

function WeAre() {
  return (
    <div className="w-full py-5 px-4 md:px-[20px] lg:px-[100px]">
      {aboutData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col-reverse md:flex-row md:pr-0 pr-[50px] md:justify-center md:mt-[100px] justify-center gap-4 overflow-hidden"
        >
          {/* Text and Button Section */}
          <div className="w-full md:w-[430px] h-auto md:h-[448px]  flex flex-col justify-center md:order-1 order-2">
            <h1
              className="text-[24px] md:text-[36px] font-bold mb-5 md:mb-10 ml-4  md:text-left text-center font-['Plus_Jakarta_Sans'] underline-offset-8 md:ml-[40px]"
              style={{
                textDecoration: 'underline #f38220 2px',
                textDecorationThickness: '2px',
                textDecorationOffset: '4px',
              }}
            >
              {item.heading}
            </h1>

            <p className="text-base md:text-[14px] md:ml-[40px] text-[20px] leading-relaxed md:leading-normal font-['Plus_Jakarta_Sans'] ml-4 text-justify ">
              {item.text}
            </p>

            <div className="flex border w-full md:w-[160px] h-[48px]ml-7 text-center bg-[#F38220] rounded-lg mt-5 hover:bg-[#e69443] justify-center md:ml-[40px]">
              <button className="text-center ml-5 text-white ">Read More</button>
              <FiAlertCircle className="mt-3 w-[24px] h-[24px] ml-2 text-white" />
            </div>
          </div>

          {/* Image Section */}
          <div className="relative md:w-[450px]  md:h-[300px] w-[200px] h-[150px] rounded-md mt-[80px] md:ml-[150px] ml-[130px] flex justify-center items-center shadow-rose-600 md:order-2 order-1 cursor-pointer">
            {/* Image 3: Background Image */}
            <div
              className="absolute z-10 md:w-[200px] w-[125px] md:h-[200px] h-[125px] md:ml-0 ml-[25px] rounded-md shadow-lg"
              style={{ left: 'calc(5% - 125px)', top: '5px' }}
            >
              <img
                src={image1}
                alt="Image 1"
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Image 2: Positioned in front of Image 3 and Image 1 */}
            <div
              className="absolute z-30 md:w-[200px] w-[125px] md:h-[200px] md:mt-[100px] mt-[60px] md:ml-0 ml-[29px] h-[125px] rounded-md shadow-lg"
              style={{ left: 'calc(30% - 125px)', top: '5px' }}
            >
              <img
                src={image2}
                alt="Image 2"
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Image 1: Positioned in front of Image 3 */}
            <div
              className="absolute z-20 md:w-[200px]  w-[125px] md:h-[200px] mb-0  mr-[85px] h-[125px] lg:mr-[40px] lg:mb-[50px] md:mb-[40px] md:mr-[20px] xl:mr-[100px] rounded-md shadow-black"
              style={{ right: 'calc(40% - 125px)', top: '' }}
            >
              <img
                src={image3}
                alt="Image 3"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WeAre;
