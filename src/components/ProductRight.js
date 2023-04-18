import React from "react";
import icons from "../utils/icons";

const ProductRight = () => {
  const { AiOutlineArrowRight } = icons;
  return (
    <div className="flex gap-5 p-5">
      <div className="flex flex-col gap-5 text-center w-[60%]">
        <h1 className="text-[30px] font-semibold uppercase">Tên sản phẩm</h1>
        <span>Mô tả</span>
        <div className="flex text-[25px] font-extrabold gap-5 items-center justify-end animate-pulse">
          <h1 className="text-red-500">Giá: 1 000 000 vnđ</h1>
          <div className="border border-red-500 rounded-lg px-2 text-red-400 hover:text-red-500 flex items-center gap-3 cursor-pointer">
            Xem chi tiết
            <span>
              <AiOutlineArrowRight />
            </span>
          </div>
        </div>
      </div>
      <img
        src="https://th.bing.com/th/id/OIP.FjLkalx51D8xJcpixUGJywHaE8?pid=ImgDet&rs=1"
        className="w-[30%] h-[300px]"
        alt="product image"
      />
    </div>
  );
};

export default ProductRight;
