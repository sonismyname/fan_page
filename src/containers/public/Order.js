import React from "react";
import icons from "../../utils/icons";
import Scrollbars from "react-custom-scrollbars-2";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Order = () => {
  const navigate = useNavigate();
  const {
    AiOutlineAppstoreAdd,
    AiFillEdit,
    AiFillDelete,
    AiFillFilter,
    BiCommentDetail,
  } = icons;
  const { bills, detail_bills } = useSelector((state) => state.app);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-[30px] font-semibold text-center">
          QUẢN LÝ ĐƠN HÀNG
        </h1>
        <div className="flex w-[50%] items-center justify-end gap-2">
          <span>Bộ lọc:</span>
          <AiFillFilter size={24} />
          <select className="form-select block w-[50%] mt-1 px-2 py-1">
            <option>--Trạng thái đơn hàng--</option>
            <option>Đang vận chuyển</option>
            <option>Đã nhận</option>
            <option>Trả hàng</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex h-12 shadow-lg bg-main-300 font-bold items-center">
          <span className="text-center w-[10%] border-l-2 border-r-2 border-gray-400">
            Ảnh
          </span>
          <span className="text-center w-[30%] border-r-2 border-gray-400">
            Tên sản phẩm
          </span>
          <span className="text-center w-[30%] border-r-2 border-gray-400">
            Số lượng x Đơn giá
          </span>
          <span className="text-center w-[25%] border-r-2 border-gray-400">
            Trạng thái
          </span>
          <span className="text-center w-[5] border-r-2 border-gray-400">
            Chi tiết
          </span>
        </div>
        {/* list đơn hàng */}
        <Scrollbars style={{ width: "100%", height: 500 }}>
          {bills?.map((el, index) => {
            return (
              <div
                key={index}
                className="flex mt-2 cursor-pointer text-center hover:bg-main-300 border border-gray-300 hover:shadow-lg rounded-md items-center text-[#622323] group"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/${detail_bills?.filter((dt) => dt.id === el.id)[0].img[0]}`}
                  alt="ảnh sản phẩm"
                  className="w-[10%] h-15 object-contain"
                ></img>
                <span className="w-[30%]">
                  {detail_bills
                    ?.filter((dt) => dt.id_bill === el.id)
                    .map((dtb) => `${dtb.name}, `)}
                </span>
                <span className="w-[30%]">{detail_bills.filter(dt => dt.id_bill === el.id).map((element, elI) => {
                  return `${element.quatity} x ${(element.price * 1000).toLocaleString("vi-VN")}, `
                })} vnđ</span>
                <span className="w-[25%]">{el.status}</span>
                <div
                  onClick={(e) => navigate(`/dashboard/detail/${el.id}`)}
                  className="hidden items-center justify-center w-[5%] gap-2 group-hover:flex"
                >
                  <BiCommentDetail size={24} />
                </div>
              </div>
            );
          })}
        </Scrollbars>
      </div>
    </div>
  );
};

export default Order;
