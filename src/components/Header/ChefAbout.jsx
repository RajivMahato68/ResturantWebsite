import React from 'react';
import image1 from '../../assets/chef.jpg';

// Import additional images as needed

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
    <div className="w-full bg-gray-100 py-12">
      {chefs.map((chef, index) => (
        <div key={index} className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center md:justify-between ">
          <div className="md:w-1/2 text-center md:text-left md:ml-[150px] mt-6 md:mt-0">
            <h3 className='text-orange-500 text-[12px] font-semibold w-[77px] h-[22px] mb-3 font-["Plus_Jakarta_Sans"] md:ml-[40px] ml-[100px]'>ABOUT CHEF</h3>
            <h2 className="text-3xl font-bold mb-4 ml-0 md:ml-10">{chef.title}</h2>
            <div className="mx-4 md:mx-10">
              <p className="text-gray-700 mb-4">
                {chef.description}
              </p>
              <button className="bg-orange-500 hover:bg-orange-700 text-white py-2 rounded focus:outline-none focus:shadow-outline text-[16px] font-['Plus_Jakarta_Sans'] w-[120px] h-[44px]">
                READ MORE
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="flex justify-center md:justify-end">
              <img
                src={chef.image}
                alt={chef.title}
                className="rounded-lg shadow-md mr-[80px] w-[420px] h-[340px] md:w-[520px] md:h-[400px] md:px-0 px-2 object-cover md:ml-0 ml-20 "
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutChef;
