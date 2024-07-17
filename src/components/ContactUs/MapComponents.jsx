import React from 'react';

function MapComponents() {
  return (
    <div className="w-full">
      <div className="relative w-full h-0" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27776830371!2d85.28493276485202!3d27.70903024219139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1721101574859!5m2!1sen!2snp"
          
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}

export default MapComponents;
