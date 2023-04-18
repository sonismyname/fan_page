import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import path from "../utils/path";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineMinus,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";

const Detail = () => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const [quatity, setQuatity] = useState(0);
  const handleHide = () => {
    setIsShow((pre) => !pre);
  };
	const hanldeAddToCart = () => {
		
	}
  return (
    <div className="flex h-screen w-auto">
      <div
        onClick={() => {
          navigate(path.PUBLIC);
        }}
        className="fixed w-screen h-screen bottom-0 top-0 right-0 z-100 bg-[rgba(0,0,0,0.5)] justify-center"
      ></div>
      <div
        id="form"
        className="fixed flex flex-col top-0 right-0 left-0 w-[60%] rounded-[20px] p-2 h-[600px] m-auto mt-[100px] bg-[#fff] animate-slide-right z-200"
      >
        <div className="flex">
          <div className="flex flex-col w-[50%] text-center gap-10">
            <img
              src="https://th.bing.com/th/id/OIP.FjLkalx51D8xJcpixUGJywHaE8?pid=ImgDet&rs=1"
              alt="ảnh sản phẩm"
              className="h-auto"
            />
            <div className="flex gap-2 justify-center relative">
              {[1, 2, 3, 4].map((element, index) => {
                return (
                  <img
                    alt="img"
                    src="https://th.bing.com/th/id/OIP.FjLkalx51D8xJcpixUGJywHaE8?pid=ImgDet&rs=1"
                    key={index}
                    className="w-[100px] h-auto"
                  />
                );
              })}
              <div></div>
            </div>
          </div>
          <div className="w-[50%] text-center flex flex-col gap-5 items-center">
            <h1 className="text-[30px] font-semibold uppercase">
              Tên sản phẩm
            </h1>
            <div className="flex gap-4 justify-around">
              <div className="flex gap-1 items-center mx-4">
                <span>Đánh giá: </span>
                {/* đánh giá = 4 * */}
                <span className="flex">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </span>
              </div>
              <div className="flex gap-1 items-center mx-4">
                <span>Đã bán: </span>
                <span>6</span>
              </div>
            </div>
            {isShow ? (
              <span onClick={handleHide} className="cursor-pointer">
                Mô tả đầy đủ ở đây Mô tả đầy đủ ở đây Mô tả đầy đủ ở đây Mô tả
                đầy đủ ở đây Mô tả đầy đủ ở đây
              </span>
            ) : (
              <span onClick={handleHide} className="cursor-pointer">
                Mô tả....Chi tiết
              </span>
            )}
            <span>Số lượng: 100</span>
            <div className="flex justify-center gap-1 items-center">
              <span className="pr-4 text-[20px]">Số lượng mua:</span>
              <div
                onClick={(e) => {
                  if (quatity === 0) {
                  } else {
                    setQuatity((pre) => pre - 1);
                  }
                }}
                className="border border-black w-10 h-10 rounded-lg hover:bg-main-400"
              >
                <AiOutlineMinus
                  className="m-auto justify-center cursor-pointer"
                  size={37}
                />
              </div>
              <input
                className="border border-black w-[80px] h-10 px-2 focus:outline-none rounded-lg text-right readonly disabled"
                value={quatity}
                // onChange={}
              />
              <div
                onClick={(e) => {
                  // không đc vượt quá số lượng trong kho
                  if (quatity >= 100) {
                  } else {
                    setQuatity((pre) => pre + 1);
                  }
                }}
                className="border border-black w-10 h-10 rounded-lg  hover:bg-main-400"
              >
                <IoMdAdd
                  className="m-auto justify-center cursor-pointer"
                  size={37}
                />
              </div>
            </div>
            <div onClick={hanldeAddToCart} className="flex border border-red-400 hover:bg-red-400 w-[50%] p-2 gap-2 text-red-400 hover:text-[#fff] text-center justify-center rounded-lg cursor-pointer">
              <AiOutlineShoppingCart size={24} />
              <span className="select-none">Thêm vào giỏ hàng</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
