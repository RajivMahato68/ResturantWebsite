import React from "react";
import { FaPhone, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

function NavDetials() {
  return (
    <div className="w-full  h-10 ">
      <div className="md:px-32 px-4 py-1 flex justify-between items-center">
        <div className="text-[#f38221] md:pl-12 md:text-lg text-sm space-x-1 flex items-center ">
          <FaPhone className="text-[#E9252F]" />
          <h1 className="font-sans-serif">Phone:+978000032099</h1>
        </div>
        <div className="flex md:pr-24  items-center space-x-2 text-lg">
          <FaFacebookF className="text-xl" />
          <FaInstagram className="text-xl" />
          <FaYoutube className="text-xl" />
        </div>
      </div>
    </div>
  );
}

export default NavDetials;
