import React from 'react';
import image1 from '../../assets/chef.jpg';

// Array containing chef details
const chefs = [
  {
    image: image1,
    title: "Meet Our Chef",
    description: `Chef [Name] is the heart and soul of [Restaurant Name]. With
      over [number] years of culinary experience, Chef [Name]
      combines traditional Nepali flavors with innovative techniques.
      Passionate about using the freshest ingredients, Chef [Name]
      creates dishes that are both authentic and unforgettable. Join
      us to experience the culinary artistry of Chef [Name].`,
  }
];

function AboutChef() {
  return (
    <div className="w-full bg-gray-100 py-12 md:px-5">
      {chefs.map((chef, index) => (
        <div key={index} className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-0">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img
              src={chef.image}
              alt={chef.title}
              className="rounded-lg shadow-md w-[420px] h-[340px] md:w-[520px] md:h-[400px] object-cover"
            />
          </div>
          
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left mt-4 md:mt-0 md:ml-[30px]">
            <h3 className='text-orange-500 text-[12px] font-semibold w-[77px] h-[22px] mb-3 font-["Plus_Jakarta_Sans"]'>ABOUT CHEF</h3>
            <h2 className="text-3xl font-bold mb-4">{chef.title}</h2>
            <div className="mx-4 md:mx-0">
              <p className="text-gray-700 mb-4 text-justify md:text-justify">
                {chef.description}
              </p>
              <button className="bg-orange-500 hover:bg-orange-700 text-white py-2 rounded focus:outline-none focus:shadow-outline text-[16px] font-['Plus_Jakarta_Sans'] w-[120px] h-[44px]">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutChef;
