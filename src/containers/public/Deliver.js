import React from "react";
import icons from "../../utils/icons";
import BackArrow from "./BackArrow";
import path from "../../utils/path";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Deliver = () => {
  const { AiFillQuestionCircle } = icons;
  const navigate = useNavigate();
  const { bills, detail_bills } = useSelector((state) => state.app);
  console.log(bills);
  console.log(detail_bills);
  // let total = 0;
  // detail_bills.lengtj > 0 && detail_bills.filter(dt => dt.id_bill === el.id).forEach(element => {
  //   const prc = ele
  // });
  // const detail_bills_UI = detail_bills.filter(el => el.id === bills.id);
  return (
    <div className="pt-[120px] px-5 py-10 m-auto w-[80%] bg-main-100 flex flex-col gap-2 text-[#622323] text-[18px] cursor-pointer">
      <BackArrow />
      {/* Mỗi fiv 1 đơn hàng */}
      {bills?.map((el, i) => {
        return (
          <div
            key={i}
            className="flex flex-col gap-2 bg-main-100 p-4 rounded-lg shadow-lg relative group"
          >
            {/* <div className="absolute hidden bottom-0 left-[50%] w-[200px] h-[200px] bg-main-200 group-hover:flex"></div> */}
            <div
              onClick={(e) => navigate(`/detail-deliver/${el.id}`)}
              className="flex justify-end gap-2 items-center cursor-pointer border-b border-[#bc6b6b]"
            >
              <h1>TRẠNG THÁI</h1>
              <AiFillQuestionCircle />
              <span>|</span>
              <h1 className="uppercase">{el.status}</h1>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <img
                  src={detail_bills?.filter((dt) => dt.id === el.id)[0].img[0]}
                  className="w-[100px]"
                />
                <div className="flex flex-col">
                  <h1>
                    {detail_bills
                      ?.filter((dt) => dt.id_bill === el.id)
                      .map((dtb) => `${dtb.name}, `)}
                  </h1>
                  <span>
                    {detail_bills
                      ?.filter((dt) => dt.id_bill === el.id)
                      .map((dtb) => `x${dtb.quatity}, `)}
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                {/* <h1>Thành tiền: {(detail_bills?.filter(dt => dt.id_bill === el.id).reduce((accumulator, bl) =>  {accumulator + bl.price * bl.quatity}).toLocaleString("vi-VN")} vnđ</h1> */}
                <h1 className="text-[20px]">
                  Thành tiền:{" "}
                  {detail_bills
                    ?.filter((dt) => dt.id_bill === el.id)
                    .reduce((cur, pr) => {
                      return cur + pr.price * pr.quatity * 1000;
                    }, 15000)
                    .toLocaleString("vi-VN")}{" "}
                  vnđ
                </h1>
                <h1 className="text-[14px] font-thin">Thời gian: {el.date}</h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Deliver;
