import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import path from "../utils/path";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineMinus,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Detail = () => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const [quatity, setQuatity] = useState(0);
  const {products} = useSelector(state => state.app);
  const {id} = useParams();
  const handleHide = () => {
    setIsShow((pre) => !pre);
  };
  const [currentImg, setCurrentImg] = useState(products[id-1].img[0])
  const hanldeAddToCart = () => {
    const form = document.getElementById("detail-form");
    form?.classList?.remove("animate-slide-right");
    form?.classList?.add("animate-slide-left");
    const setTimeOutId = setTimeout(() => {
      navigate("/");
      toast.success("Thêm vào giỏ hàng thành công!!");
      clearTimeout(setTimeOutId);
    }, 500);
  };
  const handleSubmit = (e) => {
    // dispatch(actions.buyProducts({ id: id, name: "bánh quy", price: 1000 }));
  };
  return (
    <div className="flex h-screen w-auto z-20">
      <div
        onClick={() => {
          navigate(path.PUBLIC);
        }}
        className="fixed w-screen h-screen bottom-0 top-0 right-0 z-100 bg-[rgba(0,0,0,0.5)] justify-center"
      ></div>
      <div
        id="detail-form"
        className="fixed flex flex-col top-0 right-0 left-0 w-[60%] rounded-[20px] p-2 h-[600px] m-auto mt-[120px] bg-[#fff] animate-slide-right z-200"
      >
        <div className="flex">
          <div className="flex flex-col w-[50%] text-center gap-10">
            <img
              src={`${process.env.PUBLIC_URL}/${currentImg}`}
              alt="ảnh sản phẩm"
              className="h-[400px]"
            />
            <div className="flex gap-2 justify-center relative">
              {products[id-1].img.map((element, index) => {
                return (
                  <img
                    alt="img"
                    src={`${process.env.PUBLIC_URL}/${element}`}
                    key={index}
                    onClick={e => setCurrentImg(element)}
                    className="w-[100px] h-auto hover:shadow-lg cursor-pointer"
                  />
                );
              })}
              <div></div>
            </div>
          </div>
          <div className="w-[50%] text-center flex flex-col gap-5 items-center">
            <h1 className="text-[30px] font-semibold uppercase">
              {products[id-1].name}
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
                {products[id-1].des}
              </span>
            ) : (
              <span onClick={handleHide} className="cursor-pointer">
                {products[id-1].des.slice(0, 60)}...Chi tiết
              </span>
            )}
            <span>Số lượng: {products[id-1].quatity}</span>
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
                onChange={(e) => {}}
              />
              <div
                onClick={(e) => {
                  // không đc vượt quá số lượng trong kho
                  if (quatity >= products[id -1].quatity) {
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
            <div
              onClick={hanldeAddToCart}
              className="flex border border-red-400 hover:bg-red-400 w-[50%] p-2 gap-2 text-red-400 hover:text-[#fff] text-center justify-center rounded-lg cursor-pointer"
            >
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
