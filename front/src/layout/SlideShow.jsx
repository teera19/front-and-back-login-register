import React, { useState, useEffect } from 'react';
import image1 from '../img/cat.jpg';
import image2 from '../img/dog.jpg'; // นำเข้ารูปภาพที่แตกต่างกัน

function SlideShow() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // อัพเดตสไลด์ทุก 3 วินาที

    return () => clearInterval(interval);
  }, [slideIndex]);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const images = [image1, image2]; // รวมรูปภาพทั้งหมดในอาร์เรย์

  return (
    <div className=" m-[20px] mt-[-300px] ml-[500px] absolute">
      <div className="slideshow-container">
        {images.map((image, index) => (
          <div
            key={index}
            className="mySlides fade"
            style={{
              display: index === slideIndex ? 'block' : 'none',
              transition: 'opacity 1s ease',
              opacity: index === slideIndex ? 1 : 0, // แสดงเฉพาะสไลด์ปัจจุบัน
            }}
          >
            <img src={image} className="rounded-lg" style={{ maxWidth: '40%', height: 'auto' }} alt={`Slide ${index + 1}`} />
            <div className="text-center text-black absolute ml-[130px]">Promotion {index + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default SlideShow;
