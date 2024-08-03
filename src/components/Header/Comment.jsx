import React from 'react';

const reviews = [
  {
    date: 'Sun Jul 16 2023',
    text: '"Authentic flavors, warm ambiance, and excellent service. A must-visit!."',
    author: 'Dikky',
    role: 'Ceo of abc',
    image: 'https://picsum.photos/200/200',
    rating: '★★★★★'
  },
  {
    date: 'Sun Jul 16 2023',
    text: '"Delicious dishes that capture the essence of Nepal. Highly recommend!."',
    author: 'Dikky',
    role: 'Ceo of abc',
    image: 'https://picsum.photos/200/200',
    rating: '★★★★'
  },
  {
    date: 'Sun Jul 16 2023',
    text: '"Chef [Name] creates magic on a plate. Will be back!"',
    author: 'Dikky',
    role: 'Ceo of abc',
    image: 'https://picsum.photos/200/200',
    rating: '★★★'
  }
];

function Comment() {
  return (
    <div className="container mx-auto mt-[50px] mb-[20px] px-4">
      <div className="flex justify-center mb-5 font-['Plus_Jakarta_Sans']">
        <h1
          className='font-bold text-center md:text-[36px] text-[18px] mb-[20px] underline-offset-8'
          style={{
            textDecoration: 'underline #f38220 2px',
            textDecorationThickness: '2px',
            textDecorationOffset: '4px'
          }}
        >
          What People Say About Us
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-[20px] cursor-pointer">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-md shadow-md p-4 w-full max-w-[312px] mx-auto"
            style={{ boxShadow: '0 4px 6px rgba(44, 44, 44, 0.5)' }}
          >
            <div className="flex items-center mb-2">
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <p className="text-gray-700 mb-2">{review.text}</p>
            <div className="flex flex-row justify-between items-center">
              <div className='flex items-center'>
                <img src={review.image} alt={review.author} className="w-12 h-12 rounded-full mr-2" />
                <div className='flex flex-col'>
                  <h3 className="font-bold text-lg">{review.author}</h3>
                  <p className="text-sm">{review.role}</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-xl text-yellow-500">{review.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comment;
