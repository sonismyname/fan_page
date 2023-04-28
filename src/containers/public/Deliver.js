import React from "react";
import icons from "../../utils/icons";
import BackArrow from "./BackArrow";
import path from "../../utils/path";
import { useNavigate } from "react-router-dom";

const Deliver = () => {
  const { AiFillQuestionCircle } = icons;
  const navigate = useNavigate()
  return (
    <div className="pt-[120px] px-5 py-10 m-auto w-[80%] bg-main-100 flex flex-col gap-2 text-[#622323] text-[18px]">
      <BackArrow />
      {/* Mỗi fiv 1 đơn hàng */}
      {[1, 2, 3].map((e, i) => {
        return (
          <div
            key={i}
            className="flex flex-col gap-2 bg-main-100 p-4 rounded-lg shadow-lg"
          >
            <div
              onClick={(e) => navigate(`/detail-deliver/${i + 1}`)}
              className="flex justify-end gap-2 items-center cursor-pointer border-b border-[#bc6b6b]"
            >
              <h1>Đang giao hàng</h1>
              <AiFillQuestionCircle />
              <span>|</span>
              <h1>ĐANG GIAO</h1>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <img
                  src="https://th.bing.com/th/id/OIP.FjLkalx51D8xJcpixUGJywHaE8?pid=ImgDet&rs=1"
                  className="w-[100px]"
                />
                <div className="flex flex-col">
                  <h1>Tên sản phẩm</h1>
                  <span>x 10</span>
                </div>
              </div>
              <div className="flex">
                <h1>Thành tiền: 1 000 000 vnđ</h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Deliver;
