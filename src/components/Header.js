import React from "react";

const Header = () => {
  
  return (
    <div className="flex fixed top-0 right-0 gap-1 p-2 w-full">
        <div className="w-[30%] h-[60px] border border-red-300">LOGO</div>
        <div className="w-[70%] h-[60px] border border-blue-300">NAV LINK</div>
    </div>
  );
};

export default Header;
