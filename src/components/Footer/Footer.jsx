import React from "react";
import Logo from "../../assets/logo.png";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { CiInstagram } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import Love from "./Love";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/our-menu" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "About", href: "/about-us" },
    { label: "Order Online", href: "/online-orders" },
  ];

  const schedule = [
    { day: "Sun - Fri:", hours: "9:00AM-9:00PM" },
    { day: "Saturday:", hours: "1:00PM - 10:00PM" },
  ];

  const stayUpToDate = [
    {
      label: <SlLocationPin className="w-[18px] h-[18px]" />,
      value: "Kathmandu,Nepal",
    },
    {
      label: <MdOutlineEmail className="w-[18px] h-[18px]" />,
      value: "Roel.Rodriguez@gmail.com",
    },
    {
      label: <FiPhone className="w-[18px] h-[18px]" />,
      value: "+977-9898989890",
    },
  ];

  return (
    <>
      <footer className="bg-[#232323] text-white py-10 px-4 lg:px-[9rem]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="lg:w-1/4 mb-6 lg:mb-0  text-center">
              <img
                src={Logo}
                alt="logo"
                className="h-[70px] w-[70px] mx-auto  lg:ml-[6rem] object-cover"
              />
              <p className="mt-5 text-[12px] text-[#c7bfb7] ">
                Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
              <div className="mt-[3rem] gap-8 lg:justify-center justify-center flex">
                <SlSocialFacebook className="w-[20px] h-[20px]" />
                <CiInstagram className="w-[20px] h-[20px]" />
                <MdOutlineEmail className="w-[20px] h-[20px]" />
              </div>
            </div>
            <div className="lg:w-1/4 mb-6 lg:mb-0 lg:ml-[3rem] text-center">
              <h5 className="mb-4 border-b-2 border-[#F38220] inline-block font-plus-jakarta-sans font-semibold text-[22px] text-center lg:text-left ">
                Quick Links
              </h5>
              <ul className="list-none text-[#d8d2d2] lg:text-left lg:ml-[4rem]">
                {quickLinks.map((link, index) => (
                  <li key={index} className="mb-2">
                    <a href={link.href} className="">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/4 mb-6 lg:mb-0 text-center">
              <h5 className="mb-4  border-b-2 border-[#F38220] inline-block font-plus-jakarta-sans font-semibold text-[22px] text-center ">
                Schedule
              </h5>
              <ul className="list-none text-[#d8d2d2]  lg:mr-[1rem]">
                {schedule.map((scheduleItem, index) => (
                  <li key={index} className="mb-5 lg:text-center ">
                    <span className="text-[16px] ">{scheduleItem.day}</span>
                    <span className="text-[16px] block">
                      {scheduleItem.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/4">
              <h5 className="mb-4 border-b-2 border-[#F38220] inline-block font-plus-jakarta-sans font-semibold text-[22px] text-center ml-[4rem] lg:ml-[3rem] ">
                Stay up to date
              </h5>
              <div className="flex lg:flex-row items-center lg:items-start space-x-2">
                <input
                  className="w-[200px] lg:w-[187px] h-[46px] mb-5 border border-white text-black px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email address"
                />
                <button
                  type="button"
                  className="border border-[#F38220] w-full lg:w-[65px] h-[46px] bg-white px-3 py-2 text-sm font-semibold text-[#F38220] shadow-sm hover:bg-red-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-[12px] flex items-center justify-center mb-5 "
                >
                  Submit
                </button>
              </div>
              <ul className="text-[#c7bfb7] text-[12px] text-center">
                {stayUpToDate.map((item, index) => (
                  <li
                    key={index}
                    className="flex mb-3  text-center ml-[4rem] lg:ml-[0rem] lg:justify-start"
                  >
                    <span className="mr-2">{item.label}</span>
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <Love />
    </>
  );
};

export default Footer;
