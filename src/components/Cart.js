import React from "react";
import { useNavigate } from "react-router-dom";
import path from "../utils/path";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions";

const Cart = () => {
  const { carts } = useSelector((state) => state.app);
  console.log(carts);
  let total = 0;
  carts.length > 0 && carts.forEach((element) => {
    const price = element?.price * element?.quatity * 1000;
    total += price;
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    if (carts.length !== 0) {
      const form = document.getElementById("form");
      console.log(form);
      form?.classList?.remove("animate-slide-right");
      form?.classList?.add("animate-slide-left");
      const idTimOut = setTimeout(() => {
        navigate(path.FILLINFOR);
        toast.info("Điền thông tin đơn hàng!!");
        clearTimeout(idTimOut);
      }, 400);
    }
    else{
      toast.warning("Chưa có gì trong giỏ hàng!")
    }
  };
  const handleDelete = () => {};
  return (
    <div className="flex h-screen w-auto z-20">
      <div
        onClick={() => {
          navigate(path.PUBLIC);
        }}
        className="fixed w-screen h-screen bottom-0 top-0 right-0 z-100 bg-[rgba(0,0,0,0.5)] justify-center"
      ></div>
      <div
        id="form"
        className="fixed flex flex-col top-0 right-0 left-0 w-[60%] h-[600px]  m-auto mt-[120px] rounded-[20px] bg-[#fff] animate-slide-right z-200"
      >
        <div className="flex flex-col gap-4 p-5 h-[500px]">
          <div className="flex w-full text-center">
            <div className="w-[30%]">Sản phẩm</div>
            <div className="w-[20%]">Đơn giá</div>
            <div className="w-[20%]">Số lượng</div>
            <div className="w-[30%]">Thành tiền</div>
          </div>
          {/* Mỗi sản phẩm là 1 dòng */}
          {carts?.map((el, index) => {
            return (
              <div
                key={index}
                className="flex w-full text-center items-center border bg-main-200 hover:shadow-md cursor-pointer rounded-lg"
              >
                {/* ảnh + tên */}
                <div className="flex w-[30%] gap-2 items-center">
                  <img src={el?.img[0]} alt="ảnh" className="w-[40%] h-auto" />
                  <h1 className="text-[16px] w-[40%]">{el?.name}</h1>
                </div>
                {/* đơn giá */}
                <div className="w-[20%] text-center">
                  <span>{el?.price} 000</span>
                </div>
                {/* số lượng */}
                <div className="w-[20%] text-center">
                  <span>{el?.quatity}</span>
                </div>
                {/* thành tiền */}
                <div className="w-[30%] text-center">
                  <span>
                    {(el?.quatity * el?.price * 1000).toLocaleString("vi-VN")} vnđ
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-4 items-center justify-end">
          <span className="text-[20px]">Thành tiền: </span>
          <span className="text-[20px]">
            {carts?.length !== 0? (total + 15000).toLocaleString("vi-VN"): (total).toLocaleString("vi-VN")} vnđ (bao gồm chi phí vận chuyển)
          </span>
          <button
            onClick={handleSubmit}
            className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-[#fff] px-5 py-2 mr-10 rounded-[10px]"
          >
            Mua hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
