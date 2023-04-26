import React from "react";
import icons from "../utils/icons";
import { useNavigate } from "react-router-dom";
import path from "../utils/path";

const Header = () => {
  const navigate = useNavigate();
  const { IoReorderThreeSharp, AiOutlineShoppingCart } = icons;
  return (
    <div className="flex fixed top-0 right-0 left-0 gap-1 p-4 pl-4 w-screen justify-center items-center z-10">
      <div onClick={(e) => navigate("/")} className="w-[80%] md:w-[30%] h-[60px] border border-red-300">
        LOGO
      </div>
      <div className="w-[60%] h-[60px] border border-blue-300 hidden md:flex pr-10">
        <div className="flex justify-center gap-5 items-center w-full">
          <input
            type="text"
            className="focus:outline-none border border-red-500 rounded-[20px] p-2 w-[70%]"
            placeholder="Tên sản phẩm tìm kiếm....."
          ></input>
          <button className="border border-[#753939] p-2 rounded-[20px] hover:bg-main-400">
            Tìm kiếm
          </button>
          <span
            onClick={(e) => {
              // navigate(path.CART);
            }}
            className="cursor-pointer hover:text-[#443f85] relative group"
          >
            <AiOutlineShoppingCart size={24} />
            <div className="flex-col absolute top-4 py-2 px-4 right-0 w-[200px] bg-main-200 group-hover:flex hidden text-left rounded-lg shadow-lg">
              <span
                onClick={(e) => {
                  navigate(path.CART);
                }}
                className="hover:bg-[#fff] hover:text-[#4fa7e1] p-1 rounded-lg"
              >
                Giỏ hàng
              </span>
              <span
                onClick={(e) => {
                  navigate(path.DELIVER);
                }}
                className="hover:bg-[#fff] hover:text-[#4fa7e1] p-1 rounded-lg"
              >
                Thông tin đơn hàng
              </span>
              <span
                onClick={(e) => {
                  navigate(path.ADMIN);
                }}
                className="hover:bg-[#fff] hover:text-[#4fa7e1] p-1 rounded-lg"
              >
                ADMIN
              </span>
            </div>
          </span>
        </div>
      </div>
      <div className="w-[20%] block md:hidden">BTN</div>
    </div>
  );
};

export default Header;
