import React from "react";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { Mail, MapPin, Facebook, Instagram } from "lucide-react";
import momoStreet from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-[#232323] text-gray-300 py-10 overflow-x-hidden ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row justify-between items-center  ml-10 mr-10">
          <div className="w-full md:w-1/4 xl:w-1/4 p-6 flex flex-col items-center ">
            <img
              className="md:h-16 md:w-16 h-12 w-12 object-fit object-cover ml-9"
              src={momoStreet}
              alt="MoMo Street"
            />
            <p className="text-white md:text-center text-justify text-xs mt-6 ml-12">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.Vorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum, ac aliquet odio mattis.
            </p>
            <div className="flex md:pr-24 items-center space-x-10  ml-20 mt-10">
  <Facebook className="text-xl hover:bg-blue-900 cursor-pointer" />
  <Instagram className="text-xl hover:bg-blue-900 cursor-pointer" />
  <Mail className="text-xl hover:bg-blue-900 cursor-pointer" />
</div>
          </div>
          <div className="w-full md:w-1/4 xl:w-1/4 p-6 ml-20">
            <h3 className="text-2xl font-normal text-white  mb-4 underline-bold underline decoration-[#f38221] decoration-2 underline-offset-4 font-sans-serif">
              Quick Links
            </h3>
            <ul className="text-white">
              <li className="mb-2">
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/menu" className="hover:text-white">
                  Menu
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/order" className="hover:text-white">
                  Order Online
                </Link>
              </li>
            </ul>
          </div>

        <div className="w-full md-w-1/4 xl:w-1/4 p-4 text-cente mb-12">
        <h3 className="text-2xl font-normal text-white   underline-bold underline decoration-[#f38221] decoration-2  font-sans-serif ml-5">
              Schedule
            </h3>
            <ul className="text-white-400 mt-3">
              <li className="mb-1 ml-9  text-white ">
               Sun - Fri:
              </li>
              <li className="mb-4 text-white">
             9:00AM - 9:00PM 
              </li>

              <li className="mb-1 ml-9  text-white">
               Saturday:
              </li>
              <li className="mb-4 text-white">
             1:00PM - 10:00PM 
              </li>
              </ul>
        </div>

          <div className="w-full md:w-1/4 xl:w-1/4 p-6">
          <h3 className="text-2xl font-normal text-white  mb-5 ml-3 mr-5 underline-bold underline decoration-[#f38221] decoration-2  font-sans-serif">
              Stay up to date
            </h3>
            <form className="flex mb-2 text-white">
              <input
                type="email"
                placeholder="Email address"
                className="bg-[#ffff] text-gray-400 border border-gray-700 rounded px-3 py-2 mb-4  focus:outline-none focus:ring-2 focus:ring-blue-500 w-3/4"
              />
              <button
                type="submit"
                className=" bg-[#ffff] text-[#f38220] hover:text-white border border-[#f38220] rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-2/4 ml-2 hover:border-[#e9252f] hover:bg-[#E9252F] text-sm mr-10"
              >
                Submit
              </button>
            </form>
            <div className="text-white  space-x-1 flex items-center mt-3 ">
              <MapPin className="text-[#ffffff] " />
              <h1 className="font-sans-serif">Kathmandu, Nepal</h1>
            </div>
            <div className="text-white  space-x-1 flex items-center mt-3">
              <Mail className="text-[#ffffff]" />
              <h1 className="font-sans-serif">roel.rodriguez@gmail.com</h1>
            </div>
            <div className="text-white  space-x-1 flex items-center mt-4">
              <FaPhone className="text-[#ffffff]" />
              <h1 className="font-sans-serif">Phone:+978000032099</h1>
            </div>
          </div>
          
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
