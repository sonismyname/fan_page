import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const images = [
//   "https://via.placeholder.com/800x400?text=Image%202",
//   "https://via.placeholder.com/800x400?text=Image%202",
//   "https://via.placeholder.com/800x400?text=Image%203",
//   "https://via.placeholder.com/800x400?text=Image%204",
//   "https://via.placeholder.com/800x400?text=Image%205"
// ];
const images = [
    `${process.env.PUBLIC_URL}/sp1.png`,
    `${process.env.PUBLIC_URL}/sp1.png`,
    `${process.env.PUBLIC_URL}/sp1_2.png`,
    `${process.env.PUBLIC_URL}/sp1_3.png`,
    `${process.env.PUBLIC_URL}/sp1_4.png`,
]
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="w-full rounded-lg shadow-lg mb-[40px] mt-[40px]">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index}`} className="w-full object-contain rounded-lg cursor-pointer transform transition-all hover:scale-110 hover:shadow-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;