import React from 'react';
import image1 from '../../assets/card1.jpg';
import image2 from '../../assets/card2.jpg';
import image3 from '../../assets/card3.jpg';
import { FiAlertCircle } from "react-icons/fi";

const aboutData = [
  {
    id: 1,
    text: `Chef [Name] is the heart and soul of [Restaurant Name]. With over [number] years of culinary experience, Chef [Name] combines traditional Nepali flavors with innovative techniques. Passionate about using the freshest ingredients, Chef [Name] creates dishes that are both authentic and unforgettable. Join us to experience the culinary artistry of Chef [Name].`,
    heading: "About Us",
  },
  // Add more objects as needed
];

const imageData = [image1, image2, image3];

function About() {
  return (
    <div className="w-full py-12">
      {aboutData.map((item, index) => (
        <div key={item.id} className='md:flex md:flex-row flex flex-col md:pr-0 pr-[50px] md:justify-center md:mt-[100px] justify-center gap-4 overflow-hidden'>
          <div className="relative md:w-[450px] md:h-[300px] w-[200px] h-[150px] rounded-md mt-10 md:ml-[150px] ml-[120px] flex justify-center items-center shadow-rose-600">
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

          <div className='w-[430px] h-[448px] flex flex-col justify-center'>
            <h1
              className='text-[36px] font-bold mb-10 md:mt-[-100px] md:ml-0 ml-[80px] mt-5 md:mr-0 mr-[90px] font-["Plus_Jakarta_Sans"] underline-offset-8'
              style={{ textDecoration: 'underline #f38220 2px', textDecorationThickness: '2px', textDecorationOffset: '4px' }}
            >
              {item.heading}
            </h1>

            <p className='text-base md:text-lg leading-relaxed md:leading-normal font-["Plus_Jakarta_Sans"] ml-2'>
              Welcome to [Restaurant Name], where
              <span className='block md:hidden'>we bring the authentic flavors of Nepal </span>
              <span className='block md:hidden'>to [City].</span>
              <span className='block md:hidden'> {/* This span will be shown only on mobile */}
                Enjoy our delicious, traditional dishes
              </span>
              <span className='block md:hidden'>crafted with fresh ingredients and love.</span>
              <span className='hidden md:block'> {/* This span will be shown only on desktop */}
                we bring the authentic flavors of Nepal to [City]. Enjoy our delicious, traditional dishes crafted with fresh ingredients and love.
              </span>
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
