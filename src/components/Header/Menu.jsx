import React, { useState } from "react";
import MenuCard from "./MenuCard";
import image2 from "../../assets/menuCard.jfif";
import image1 from "../../assets/card1.jpg";
import image3 from "../../assets/menuCard2.jfif";
import image4 from "../../assets/menuCard3.jfif";
import { AllSVG, AptizerSVG, DrinksSVG, MainCourse, DesertSVG } from "../SVG";

const iconData = [
  { icon: AllSVG, text: "All" },
  { icon: AptizerSVG, text: "Appetizers" },
  { icon: DrinksSVG, text: "Drinks" },
  { icon: MainCourse, text: "Main Course" },
  { icon: DesertSVG, text: "Desserts" },
];

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

function Menu() {
  const [selectedIcon, setSelectedIcon] = useState("All");

  const handleIconClick = (text) => {
    setSelectedIcon(text);
  };

  // Filter menu items based on selected icon
  const filteredItems =
    selectedIcon === "All"
      ? allMenuItems
      : allMenuItems.filter((item) => item.category === selectedIcon);

  return (
    <div className="text-center overflow-hidden">
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-["Plus_Jakarta_Sans"] font-semibold my-4'>
        Our Special Menu
      </h1>
      <div className="flex justify-center flex-wrap md:gap-5">
        {iconData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleIconClick(item.text)}
          >
            <item.icon className="md:w-10 w-7 md:h-10 h-7 " />
            <p
              className={`mt-2 text-[14px] md:text-lg  ${
                selectedIcon === item.text ? "underline" : ""
              }`}
              style={{
                textDecoration: "none",
                boxShadow:
                  selectedIcon === item.text
                    ? "inset 0 -2px 0 0 #f38220"
                    : "none",
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <MenuCard menuItems={filteredItems} />
      </div>
    </div>
  );
}

export default Menu;
