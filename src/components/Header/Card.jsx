import React, { useState, useEffect } from 'react';
import image1 from '../../assets/card1.jpg';
import image2 from '../../assets/card2.jpg';
import image3 from '../../assets/card3.jpg';

const happyHourData = [
  {
    image: image1,
    title: 'Happy Hour',
    deals: [
      { name: 'Discounts on Drinks', description: 'Combo Deals' }
    ],
    hoverText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, fugit.'
  },
  {
    image: image2,
    title: 'Family Feast',
    deals: [
      { name: 'Take away Special', description: '' }
    ],
    hoverText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, fugit.'
  },
  {
    image: image3,
    title: 'Happy Hour',
    deals: [
      { name: 'Discounts on Drinks', description: 'Combo Deals' }
    ],
    hoverText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, fugit.'
  },
];

function HappyHourCard({ image, title, deals, hoverText }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full max-w-[242px] h-[250px] bg-white rounded-lg shadow-lg relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      {isHovered && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      )}
      <div className="relative z-10 p-4">
        {!isHovered && (
          <>
            <div className="flex items-center justify-center text-white text-[16px] font-bold mt-20">
              {title}
            </div>
            <div className="mt-4 text-white">
              <ul>
                {deals.map((deal, index) => (
                  <li key={index} className="flex flex-col items-center text-center">
                    <span className="font-bold text-white">{deal.name}:</span>
                    <span className="ml-2 text-white">{deal.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
        <div className={`mt-4 text-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-white text-[18px]">{hoverText}</p>
        </div>
      </div>
    </div>
  );
}

function HappyHourCards() {
  const [randomCard, setRandomCard] = useState(null);

  useEffect(() => {
    // Select a random card for mobile view
    const index = Math.floor(Math.random() * happyHourData.length);
    setRandomCard(happyHourData[index]);
  }, []);

  return (
    <div className="px-4 py-6">
      {/* Desktop view: show all cards in a grid with 3 cards per row */}
      <div className="hidden md:grid md:grid-cols-3 md:gap-4">
        {happyHourData.map((data, index) => (
          <HappyHourCard key={index} {...data} />
        ))}
      </div>
      
      {/* Mobile view: show one random card centered */}
      <div className="md:hidden  ml-[45px] justify-center h-[250px] w-[242px]">
        {randomCard && <HappyHourCard {...randomCard} />}
      </div>
    </div>
  );
}

export default HappyHourCards;
