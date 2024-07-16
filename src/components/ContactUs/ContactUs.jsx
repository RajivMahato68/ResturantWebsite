import { Layout } from "../index";
import React from "react";
import image from "../../assets/contract.jpg";
import Contact from "./form";
import MapComponent from "./MapComponents"
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";
import { GrFormSchedule } from "react-icons/gr";


const icons = [
  {
    label: <FiPhone className="w-6 h-6" />,
    value: "+977-9898989890",
  },
  {
    label: <MdOutlineEmail className="w-6 h-6" />,
    value: (
      <span className="md:text-[20px] text-[18px]">Roel.Rodriguez@gmail.com</span>
    ),
  },
  {
    label: <SlLocationPin className="w-6 h-6" />,
    value: "Kathmandu, Nepal",
  },
  {
    label: <GrFormSchedule className="w-6 h-6" />,
    value: "Schedule:",
  },
];

const schedule = [
  { day: "Sun - Fri:", hours: "9:00 AM - 9:00 PM" },
  { day: "Saturday", hours: "1:00 PM - 10:00 PM" },
];

const ContactInfo = () => (
  <div className="flex flex-col md:flex-row justify-center bg-[#fbd8ba] ml-5 md:ml-0  mr-5 md:mr-0 ">
    <div className="w-full max-w-lg">
      <h1 className="font-plus-jakarta-sans text-black font-bold text-[36px] text-center mb-8">Get In Touch</h1>
      <p className="text-black mb-8  text-[16px] ">Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.</p>
      <ul className="text-[#c7bfb7] text-[12px]">
        {icons.map((item, index) => (
          <li key={index} className="flex items-center mb-9">
            <span className="mr-2 text-red-500">{item.label}</span>
            <span className="text-black font-bold text-[20px]">{item.value}</span>
          </li>
        ))}
      </ul>
      <ul className="list-none text-[#d8d2d2] ml-10">
        {schedule.map((scheduleItem, index) => (
          <li key={index} className="text-black font-semibold text-[20px]">
            <span className="mr-2">{scheduleItem.day}</span>
            <span className="block md:inline">{scheduleItem.hours}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

function ContactUs() {
  return (
    <Layout>
      <div className="absolute"
        style={{
          backgroundImage: `url(${image})`,
          width: '100%',
          height: '400px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-white text-[36px] font-plus-jakarta-sans font-bold ml-[20px] md:ml-[160px] pt-[160px]">Contact Us</h1>
      </div>
      <div className="w-full bg-white pt-[400px]">
        <div className="h-[50px]"></div>
      </div>
      <div className="flex flex-col md:flex-row bg-[#fbd8ba] justify-center pt-[50px] pb-10">
      <ContactInfo />
      <Contact />
      </div>
      <div className="flex">
        <div className="w-full ">
          <MapComponent />
        </div>
      </div>
    </Layout>
  );
}

export default ContactUs;
