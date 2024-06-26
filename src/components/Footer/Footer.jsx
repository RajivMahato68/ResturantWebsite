import React from "react";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { Mail, MapPin, Facebook, Instagram } from "lucide-react";
import momoStreet from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 overflow-x-hidden">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/4 xl:w-1/4 p-6 flex flex-col items-center">
            <img
              className="md:h-16 md:w-16 h-12 w-12 object-fit object-cover my-auto"
              src={momoStreet}
              alt="MoMo Street"
            />
            <p className="text-gray-400 text-center">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <div className="flex md:pr-24  items-center space-x-2 text-lg mt-10 ">
              <Facebook className="text-xl hover:bg-blue-900 cursor-pointer" />
              <Instagram className="text-xl hover:bg-blue-900 cursor-pointer" />
              <Mail className="text-xl hover:bg-blue-900 cursor-pointer" />
            </div>
          </div>
          <div className="w-full md:w-1/4 xl:w-1/4 p-6 ml-20">
            <h3 className="text-lg font-bold mb-4 underline-bold" style={{ color: 'rgb(230, 130, 43)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              Quick Links
            </h3>
            <ul className="text-gray-400">
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
          <div className="w-full md:w-1/4 xl:w-1/4 p-6">
            <h3 className="text-lg font-bold mb-4 underline-bold" style={{ color: 'rgb(230, 130, 43)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              Stay up to date
            </h3>
            <form className="flex mb-5">
              <input
                type="email"
                placeholder="Email address"
                className="bg-gray-800 text-gray-400 border border-gray-700 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-3/4"
              />
              <button
                type="submit"
                className=" bg-[#ffff] text-[#f38220] border border-gray-700 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-2/4 ml-2 hover:border-[#e9252f] hover:bg-[#E9252F]"
              >
                Submit
              </button>
            </form>
            <div className="text-gray-400  space-x-1 flex items-center mb-3 ">
              <MapPin className="text-[#ffffff] " />
              <h1 className="font-sans-serif">Kathmandu, Nepal</h1>
            </div>
            <div className="text-gray-400  space-x-1 flex items-center mb-3">
              <Mail className="text-[#ffffff]" />
              <h1 className="font-sans-serif">roel.rodriguez@gmail.com</h1>
            </div>
            <div className="text-gray-400  space-x-1 flex items-center mb-3">
              <FaPhone className="text-[#ffffff]" />
              <h1 className="font-sans-serif">Phone:+978000032099</h1>
            </div>
          </div>
          <div className="w-full md:w-1/4 xl:w-1/4 p-6">
            <h3 className="text-lg font-bold mb-4 underline-bold" style={{ color: 'rgb(230, 130, 43)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              Galary
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://picsum.photos/200/150"
                alt="Gallery Image"
                // className="rounded-md"
              />
              <img
                src="https://picsum.photos/200/150"
                alt="Gallery Image"
                // className="rounded-md"
              />
              <img
                src="https://picsum.photos/200/150"
                alt="Gallery Image"
                // className="rounded-md"
              />
              <img
                src="https://picsum.photos/200/150"
                alt="Gallery Image"
                // className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;