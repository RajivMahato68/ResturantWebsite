import React from 'react';
import image1 from '../../assets/card1.jpg';
import image2 from '../../assets/card2.jpg';
import image3 from '../../assets/card3.jpg';
import { FiAlertCircle } from "react-icons/fi";

const aboutData = [
  {
    id: 1,
    text: `Welcome to [Restaurant Name], where we bring the authentic flavors of Nepal to [City]. Enjoy our delicious, traditional dishes crafted with fresh ingredients and love.`,
    heading: "About Us",
  },
  // Add more objects as needed
];

const imageData = [image1, image2, image3];

function About() {
  return (
    <div className="w-full py-5 flex justify-center">
      {aboutData.map((item, index) => (
        <div key={item.id} className='md:flex md:flex-row flex flex-col md:pr-0 pr-[50px] md:justify-center md:mt-[100px] justify-center gap-4 overflow-hidden'>
          <div className="relative md:w-[450px] md:h-[300px] w-[200px] h-[150px] rounded-md mt-10 md:ml-[150px] ml-[145px] flex justify-center items-center shadow-rose-600">
            {/* Image 3: Background Image */}
            <div className="absolute z-10 md:w-[250px] w-[125px] md:h-[250px] h-[125px] md:ml-0 ml-[25px] rounded-md shadow-lg" style={{ left: 'calc(5% - 125px)', top: '5px' }}>
              <img src={image1} alt="Image 1" className="w-full h-full object-cover rounded-md" />
            </div>

            {/* Image 2: Positioned in front of Image 3 and Image 1 */}
            <div className="absolute z-30 md:w-[250px] w-[125px] md:h-[250px] md:mt-[100px] mt-[60px] md:ml-0 ml-[29px] h-[125px] rounded-md shadow-lg" style={{ left: 'calc(30% - 125px)', top: '5px' }}>
              <img src={image2} alt="Image 2" className="w-full h-full object-cover rounded-md" />
            </div>

            {/* Image 1: Positioned in front of Image 3 */}
            <div className="absolute z-20 md:w-[250px] w-[125px] md:h-[250px]   md:mr-0 mr-[85px] h-[125px] rounded-md shadow-black" style={{ right: 'calc(40% - 125px)', top: '' }}>
              <img src={image3} alt="Image 3" className="w-full h-full object-cover rounded-md" />
            </div>
          </div>

          <div className='md:w-[430px] w-[350px]  h-[448px] flex flex-col justify-center'>
            <h1
              className='text-[36px] font-bold mb-5 md:mt-[-100px] md:ml-0 ml-[95px] mt-5 md:mr-0 mr-[90px] font-["Plus_Jakarta_Sans"] underline-offset-8'
              style={{ textDecoration: 'underline #f38220 2px', textDecorationThickness: '2px', textDecorationOffset: '4px' }}
            >
              {item.heading}
            </h1>

            <p className='text-base md:text-[14px] md:px-0 px-5  leading-relaxed md:leading-normal font-["Plus_Jakarta_Sans"] ml-2 text-justify'>
              {item.text}
            </p>

            <div className='flex border w-[160px] h-[48px] text-center bg-[#F38220] rounded-lg mt-5 hover:bg-[#e69443] justify-center md:ml-0 ml-20'>
              <button className='text-center ml-5 text-white'>Read More </button>
              <FiAlertCircle className='mt-3 w-[24px] h-[24px] ml-2 text-white' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;
