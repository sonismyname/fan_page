import React from "react";

const Header = () => {
  
  return (
    <div className="flex fixed top-0 right-0 gap-1 p-4 pl-4 w-screen justify-center">
        <div className="w-[30%] h-[60px] border border-red-300">LOGO</div>
        <div className="w-[60%] h-[60px] border border-blue-300">NAV LINK</div>
    </div>
  );
};

export default Header;
