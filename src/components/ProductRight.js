import React from "react";
import icons from "../utils/icons";
import { useNavigate } from "react-router-dom";
import path from "../utils/path";

const ProductRight = ({product}) => {
  const { AiOutlineArrowRight } = icons;
  const navigate = useNavigate()
  const handleDetail = () => {
    navigate(`/detail/2`)
  }
  return (
    <div className="flex gap-5 p-5 justify-center">
      <div className="flex flex-col gap-5 text-center w-[60%]">
        <h1 className="text-[30px] font-semibold uppercase">{product.name}</h1>
        <span>{product.des}</span>
        <div className="flex text-[25px] font-extrabold gap-5 items-center justify-start animate-pulse">
          <h1 className="text-red-500">Giá: {product.price} 000 vnđ</h1>
          <div onClick={handleDetail} className="border border-red-500 rounded-lg px-2 text-red-400 hover:text-red-500 flex items-center gap-3 cursor-pointer">
            Xem chi tiết
            <span>
              <AiOutlineArrowRight />
            </span>
          </div>
        </div>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/sp2.png`}
        className="w-[30%] h-[300px] transform transition-all hover:scale-110 hover:shadow-lg cursor-pointer"
        alt="product image"
      />
    </div>
  );
};

export default ProductRight;
