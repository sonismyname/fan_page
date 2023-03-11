import React from "react";
import icons from "../utils/icons"

const Footer = () => {
  const { BsFillArrowUpSquareFill} = icons
  function scrollToTop() {
    const scrollStep = -window.scrollY / (1000 / 15); // Tốc độ trượt lên (thay đổi số 15 để tăng/giảm tốc độ)
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15); // Độ trễ giữa các lần trượt lên (thay đổi số 15 để tăng/giảm độ trễ)
  }
  const handleUp = () => {
    scrollToTop()
  };
  return (
    <div className="w-full flex h-[200px] border border-red-300 relative">
      Footer is a React component
      <span onClick={handleUp} className="absolute top-[-50px] right-4 text-[#713e3e] animate-pulse ">
        < BsFillArrowUpSquareFill size={36}></BsFillArrowUpSquareFill>
      </span>
    </div>
  );
};

export default Footer;
