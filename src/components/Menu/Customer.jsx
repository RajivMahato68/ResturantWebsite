import React, { useState } from "react";
// import MenuCard from "./MenuCard";
import CustomerFav from "./CustomerFav";
import image2 from "../../assets/menuCard.jfif";
import image1 from "../../assets/card1.jpg";
import image3 from "../../assets/menuCard2.jfif";
import image4 from "../../assets/menuCard3.jfif";

const allMenuItems = [
  {
    image: image1,
    name: "MO:MO",
    description:
      "Steamed or fried dumplings filled with minced meat or vegetables, served with spicy chutney.",
    deliveryFee: "500",
    category: "Appetizers",
  },
  {
    image: image2,
    name: "Chicken Sekuwa",
    description:
      "Marinated and grilled chicken skewers, summer and winter seasoned with Nepali spices.",
    deliveryFee: "500",
    category: "Main Course",
  },
  {
    image: image2,
    name: "Chicken Sekuwa",
    description:
      "Marinated and grilled chicken skewers, summer and winter seasoned with Nepali spices.",
    deliveryFee: "500",
    category: "Drinks",
  },
  {
    image: image3,
    name: "Aloo Chop",
    description:
      "Spiced mashed potato patties, coated in chickpea flour and fried until crispy.",
    deliveryFee: "500",
    category: "Appetizers",
  },
  {
    image: image3,
    name: "Aloo Chop",
    description:
      "Spiced mashed potato patties, coated in chickpea flour and fried until crispy.",
    deliveryFee: "500",
    category: "Drinks",
  },
  {
    image: image4,
    name: "Chhoila",
    description:
      "Spicy grilled meat mixed with mustard oil, spices, and herbs served with spices.",
    deliveryFee: "500",
    category: "Main Course",
  },
  {
    image: image4,
    name: "Chhoila",
    description:
      "Spicy grilled meat mixed with mustard oil, spices, and herbs served with spices.",
    deliveryFee: "500",
    category: "Desserts",
  },
  {
    image: image2,
    name: "Chocolate Cake",
    description: "Rich and moist chocolate cake with a creamy frosting.",
    deliveryFee: "400",
    category: "Desserts",
  },
];

function Customer() {
  return (
    <div className="text-center overflow-hidden pt-20">
      <h1 className='text-3xl md:text-[36px] lg:text-[36px] font-["Plus_Jakarta_Sans"] font-semibold my-4'>
      Custo<span className="underline decoration-[#f38220] decoration-2 underline-offset-8 mb-5">mer Fav</span>orites
      </h1>
      
      <div className="mt-8">
        <CustomerFav menuItems={allMenuItems} />
      </div>
    </div>
  );
}

export default Customer;
