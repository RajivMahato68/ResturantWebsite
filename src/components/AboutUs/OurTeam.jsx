import React from 'react';
import MenuCard from "./Card";
import image2 from '../../assets/menuCard.jfif';
import image1 from '../../assets/card1.jpg';
import image3 from '../../assets/menuCard2.jfif';
import image4 from '../../assets/menuCard3.jfif';

const allMenuItems = [
  {
    image: image1,
    name: 'Pearline_Berge',
    post: 'CEO',
    
    
  },
  {
    image: image2,
    name: 'Pearline_Berge',
    post: 'Head Cheif',
    
   
  },
  {
    image: image2,
    name: 'Pearline_Berge',
    post: 'Project Manager',
   
    
  },
  {
    image: image3,
    name: 'Pearline_Berge',
    post: 'HR Manager',
  },
  {
    image: image3,
    name: 'Deepak',
    post: 'Head Officer',
    
   
  },
  {
    image: image4,
    name: 'Rajiv',
    post: 'Supporting Staff',
   
    
  },
  {
    image: image4,
    name: 'Prakash',
    post: 'Full Stack Developer',
 
  
  },
  {
    image: image2,
    name: 'Prashant',
    post: 'Manager',
   
  
  }
];

function Menu() {
  return (
    <div className='text-center overflow-hidden'>
       <h1
        className='text-center md:text-[36px] text-[35px] mt-[150px] font-bold mb-10 font-["Plus_Jakarta_Sans"] underline-offset-8'
        style={{ textDecoration: 'underline #f38220 2px', textDecorationThickness: '2px', textDecorationOffset: '4px' }}
      >
        Our Team
      </h1>
      <div className='mt-8'>
        <MenuCard menuItems={allMenuItems} />
      </div>
    </div>
  );
}

export default Menu;
