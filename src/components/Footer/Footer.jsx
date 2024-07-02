import React from 'react';

import { Mail, MapPin, Facebook, Instagram, Phone } from "lucide-react";
import momoStreet from "../../assets/logo.png";


const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Order Online', href: '/order' },
  ];

  return (
    <footer className="bg-[#232323] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full  lg:w-1/4 p-6 flex flex-col items-center lg:ml-10">
            <img
              className="lg:h-16 lg:w-16 h-12 w-12 object-fit object-cover lg:ml-9"
              src={momoStreet}
              alt="MoMo Street"
            />
            <p className="text-white lg:text-center text-justify text-xs mt-6 lg:ml-12">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Vorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum, ac aliquet odio mattis.
            </p>
            <div className="flex lg:pr-24 items-center space-x-10 lg:ml-20 mt-10 ">
              <Facebook className="text-xl cursor-pointer " />
              <Instagram className="text-xl cursor-pointer" />
              <Mail className="text-xl cursor-pointer" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-12  lg:mt-0">
            <div className="w-full lg:w-1/4 p-6  ">
              <h3 className="text-2xl font-normal text-white underline-bold underline decoration-[#f38221] decoration-2 underline-offset-4 font-sans-serif mb-4 mt-1">
                Quick Links
              </h3>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.label} className='mb-2 lg:ml-5 '>
                    <a href={link.href} className="text-white hover:text-white font-plus-jakarta-sans text-button-text font-medium leading-button-text tracking-button-text text-left "
            >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full lg:w-1/4 p-4 text-center lg:mb-12 gap-6">
              <h3 className="text-2xl font-normal text-white underline-bold underline decoration-[#f38221] decoration-2 underline-offset-4 font-sans-serif ml-10 mt-3 mb-4">
                Schedule
              </h3>
              <ul className="text-white-400 mt-2 font-sans-serif">
                <li className="mb-1 lg:ml-9 text-white">
                  Sun - Fri:
                </li>
                <li className="mb-4 ml-9 text-white">
                  9:00AM - 9:00PM
                </li>
                <li className="mb-1 lg:ml-9  text-white">
                  Sun - Fri:
                </li>
                <li className="mb-4 ml-8 text-white">
                  9:00AM - 9:00PM
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-1/4 p-3 mt-4 gap-6">
              <h3 className="text-2xl font-normal text-white underline-bold underline decoration-[#f38221] decoration-2 underline-offset-4 font-sans-serif mb-4">
                Stay up to date
              </h3>
              <form className="flex flex-col md:flex-row mb-2 text-white ">
      <input
        type="email"
        placeholder="Email address"
        className="bg-white text-gray-400 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-[250px] h-[46px] p-4"
      />
      <button
        type="submit"
        className="bg-white text-[#f38220] hover:text-white border border-[#f38220] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-[140px] md:ml-2 hover:border-[#e9252f] hover:bg-[#E9252F] text-sm h-[46px]"
      >
        Submit
      </button>
    </form>
              <div className="text-white space-x-1 flex items-center mt-3">
                <MapPin className="text-[#ffffff]" />
                <h1 className="font-jakarta text-sm font-normal leading-6 text-left">Kathmandu,Nepal</h1>
              </div>
              <div className="text-white space-x-1 flex items-center mt-3">
                <Mail className="text-[#ffffff]" />
                <h1 className="font-jakarta text-sm font-normal leading-6 text-left">MoMo@gmail.com</h1>
              </div>
             <div className="text-white space-x-1 flex items-center mt-4">
  <Phone className="text-[#ffffff]" />
  <h1 className="font-jakarta text-sm font-normal leading-6 text-left">+9778000032099</h1>
</div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
