import React from 'react';
import image1 from '../../assets/gallery1.png';
import image2 from '../../assets/gallery2.png';
import image3 from '../../assets/gallery3.png';
import image4 from '../../assets/galler4.png';
import image5 from '../../assets/galler4.png';
import image6 from '../../assets/gallery3.png';

const images = [
  { src: image1, width: '458px', height: '250px' },
  { src: image2, width: '226px', height: '250px' },
  { src: image3, width: '356px', height: '250px' },
  { src: image4, width: '556px', height: '250px' },
  { src: image5, width: '226px', height: '250px' },
  { src: image6, width: '258px', height: '250px' },
];

function Gallery() {
  return (
    <div className='overflow-hidden cursor-pointer'>
      <h1
        className='text-center md:text-[36px] text-[35px] mt-[75px] font-bold mb-10 font-["Plus_Jakarta_Sans"] underline-offset-8'
        style={{ textDecoration: 'underline #f38220 2px', textDecorationThickness: '2px', textDecorationOffset: '4px' }}
      >
        Our Gallery
      </h1>
      <div className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 image-container"
            style={{ width: image.width, height: image.height }}
          >
            <img
              src={image.src}
              alt={`Gallery Image ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .image-container {
            width: 100% !important;
            height: 250px !important;
            margin-bottom: 16px;
            padding-left:5px;
            padding-right:5px;
          }
        }
      `}</style>
    </div>
  );
}

export default Gallery;
