import React, { useEffect, useState, useRef } from "react";
import BackArrow from "./BackArrow";
import { useParams } from "react-router-dom";
import icons from "../../utils/icons";
import Scrollbars from "react-custom-scrollbars-2";
import { useSelector } from "react-redux";

const DetailDeliver = () => {
  const { id } = useParams();
  const thumbRef = useRef();
  const {
    MdRequestPage,
    SiCashapp,
    TbTruckDelivery,
    AiFillStar,
    AiOutlineDeliveredProcedure,
    IoLocationOutline,
    AiOutlineCheckCircle,
    BiPackage,
  } = icons;
  const stateString = {
    1: "Xác nhận đơn hàng",
    2: "Đóng gói đơn hàng",
    3: "Đã giao cho đơn vị vận chuyển",
    4: "Đang giao hàng",
    5: "Trả hàng",
    6: "Giao hàng thành công",
  };
  const [stateOrder, setStateOrder] = useState(1);
  const { bills } = useSelector((state) => state.app);
  useEffect(() => {
    const status = bills[id - 1].status;
    if (status !== "Trả hàng") {
      for (let key in stateString) {
        if (stateString[key] === status) {
          setStateOrder(key);
        }
      }
    } else {
      setStateOrder(4);
    }
    if (stateOrder != 6) {
      const flow = 100 - 25 * (stateOrder - 1);
      thumbRef.current.style.cssText = `right: ${flow}%`;
    } else {
      thumbRef.current.style.cssText = `right: ${0}%`;
    }
  }, [stateOrder]);
  console.log(stateOrder);
  return (
    <div className="pt-[120px] px-5 py-10 m-auto w-[80%] flex flex-col gap-8 text-[#622323] text-[18px] bg-main-100">
      <BackArrow></BackArrow>
      <div className="flex justify-end gap-5 p-4 border-b border-[#622323]">
        <h1>Mã đơn hàng: {id}</h1>
        <span>|</span>
        <h1>{bills[id - 1]?.status}</h1>
      </div>
      <div className="flex justify-between text-gray-400 relative mx-[80px]">
        <div
          className={`border-4 rounded-full w-[80px] h-[80px] flex justify-center items-center ${
            stateOrder > 0
              ? "border-green-500 text-green-500"
              : "border-gray-500"
          } bg-[#fff] z-10`}
        >
          <span>
            <MdRequestPage size={50} />
          </span>
        </div>
        <div
          className={`border-4 rounded-full w-[80px] h-[80px] flex justify-center items-center ${
            stateOrder > 1
              ? "border-green-500 text-green-500"
              : "border-gray-500"
          } bg-[#fff] z-10`}
        >
          <span>
            <BiPackage size={50} />
          </span>
        </div>
        <div
          className={`border-4 rounded-full w-[80px] h-[80px] flex justify-center items-center ${
            stateOrder > 2
              ? "border-green-500 text-green-500"
              : "border-gray-500"
          } bg-[#fff] z-10`}
        >
          <span>
            <AiOutlineDeliveredProcedure size={50} />
          </span>
        </div>
        <div
          className={`border-4 rounded-full  w-[80px] h-[80px] flex justify-center items-center ${
            stateOrder > 3
              ? "border-green-500 text-green-500"
              : "border-gray-500"
          } bg-[#fff] z-10`}
        >
          <span>
            <TbTruckDelivery size={50} />
          </span>
        </div>
        <div
          className={`border-4 rounded-full border-gray-500 w-[80px] h-[80px] ${
            stateOrder == 6
              ? "border-green-500 text-green-500"
              : "border-gray-500"
          } flex justify-center items-center z-10 bg-[#fff]`}
        >
          <span>
            <AiFillStar size={50} />
          </span>
        </div>
        <div className="absolute w-full h-2 rounded-lg bg-gray-400 z-0 top-1/2 left-0 transform -translate-y-1/2"></div>
        <div
          ref={thumbRef}
          className="absolute h-2 rounded-lg bg-green-500 z-0 top-1/2 right-[100%] left-0 transform -translate-y-1/2"
        ></div>
      </div>
      <div className="flex m-auto text-[18px] w-full">
        <div className="flex flex-col text-center w-[25%]">
          <h1>Đơn hàng đã đặt</h1>
          <span className="text-gray-400 text-[12px]">
            {bills[id - 1].date}
          </span>
        </div>
        <div className="flex flex-col text-center w-[25%]">
          <h1>Đã đóng gói đơn hàng</h1>
          {stateOrder > 1 ? (
            <span className="text-gray-400 text-[12px]">
              {bills[id - 1].date}
            </span>
          ) : (
            <span className="text-gray-400 text-[12px]">----</span>
          )}
        </div>
        <div className="flex flex-col text-center w-[25%]">
          <h1>Đã giao cho đơn vị vận chuyển</h1>
          {stateOrder > 2 ? (
            <span className="text-gray-400 text-[12px]">
              {bills[id - 1].date}
            </span>
          ) : (
            <span className="text-gray-400 text-[12px]">----</span>
          )}
        </div>
        <div className="flex flex-col text-center w-[25%]">
          <h1>Đang giao hàng</h1>
          {stateOrder > 3 ? (
            <span className="text-gray-400 text-[12px]">
              {bills[id - 1].date}
            </span>
          ) : (
            <span className="text-gray-400 text-[12px]">----</span>
          )}
        </div>
        <div className="flex flex-col text-center w-[25%]">
          <h1>Giao hàng thành công</h1>
          {stateOrder > 4 ? (
            <span className="text-gray-400 text-[12px]">
              {bills[id - 1].date}
            </span>
          ) : (
            <span className="text-gray-400 text-[12px]">----</span>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 text-center items-end">
        <button className="border hover:shadow-lg bg-main-400 cursor-pointer text-[#fff] w-[30%] rounded-md py-1 px-2">
          Đã nhận hàng
        </button>
        <button className="border hover:shadow-lg bg-main-100 cursor-pointer text-gray-400 w-[30%] rounded-md py-1 px-2">
          Yêu cầu trả hàng
        </button>
      </div>
      <div className="w-full border-separate border-b-2 border-gray-500"></div>
      <div className="flex justify-end">
        <h1 className="text-[16px] text-gray-600">Giao hàng bởi</h1>
      </div>
      <div className="flex m-4">
        <div className="flex flex-col w-[30%] gap-5 text-left">
          <h1 className="text-[25px]">Địa chỉ nhận hàng</h1>
          <div className="flex items-center gap-4">
            <IoLocationOutline />
            <span>Địa chỉ nơi nhận hàng theo form</span>
          </div>
        </div>
        <div className="h-[400px] border-l-2 border-gray-500"></div>
        <div className="flex flex-col w-full text-left gap-4">
          {/* Trạng thái đơn hàng */}
          {/* Đây là trạng thái cuối cùng */}
          <Scrollbars className="w-full" style={{ width: "100%", height: 400 }}>
            {/* Đây là trạng thái đã qua  */}

            <div className="flex text-[16px] w-full items-center text-gray-500">
              <AiOutlineCheckCircle className="w-[10%]" size={20} />
              <span className="w-[20%]">16:00 12/12/2023</span>
              <span className="w-[70%]">Đơn hàng được giao đến kho A</span>
            </div>
            {/* Trạng thái đầu tiên */}
            <div className="flex text-[16px] w-full items-center text-gray-500">
              <AiOutlineCheckCircle className="w-[10%]" size={20} />
              <span className="w-[20%]">16:00 12/12/2023</span>
              <span className="w-[70%]">Đơn hàng đã đặt</span>
            </div>
          </Scrollbars>
        </div>
      </div>
    </div>
  );
};

export default DetailDeliver;
