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
    6: "Trả hàng",
    5: "Giao hàng thành công",
  };
  const [stateOrder, setStateOrder] = useState(1);
  const [statusTime, setStatusTime] = useState([]);
  const { bills } = useSelector((state) => state.app);
  useEffect(() => {
    const status = bills[id - 1].status;
    const status_state = status.length;
    setStatusTime(status);
    setStateOrder(status.length);
    console.log(status.length);
    if (status_state === 6) {
      thumbRef.current.style.cssText = `right: ${25}%`;
    } else {
      const flow = 100 - 25 * (status_state - 1);
      thumbRef.current.style.cssText = `right: ${flow}%`;
    }
  }, []);
  return (
    <div className="pt-[120px] px-5 py-10 m-auto w-[80%] flex flex-col gap-8 text-[#622323] text-[18px] bg-main-100">
      <BackArrow></BackArrow>
      <div className="flex justify-end gap-5 p-4 border-b border-[#622323]">
        <h1>Mã đơn hàng: {id}</h1>
        <span>|</span>
        <h1>
          {bills[id - 1]?.status[bills[id - 1]?.status.length - 1].status_name}
        </h1>
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
            stateOrder == 5
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
        </div>
        <div className="flex flex-col text-center w-[25%]">
          <h1>Đã đóng gói đơn hàng</h1>
        </div>
        <div className="flex flex-col text-center w-[25%]">
          <h1>Đã giao cho đơn vị vận chuyển</h1>
        </div>
        <div className="flex flex-col text-center w-[25%]">
          <h1>Đang giao hàng</h1>
        </div>
        <div className="flex flex-col text-center w-[25%]">
          <h1>Giao hàng thành công</h1>
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
            {console.log(bills[0])}
            {/* Trạng thái đầu tiên */}
            {statusTime?.reverse().map((elment, index) => {
              return (
                <div
                  key={index}
                  className="flex text-[16px] w-full items-center text-gray-500"
                >
                  <AiOutlineCheckCircle className="w-[10%]" size={20} />
                  <span className="w-[20%]">{elment.time_status}</span>
                  <span className="w-[70%]">{elment.status_name}</span>
                </div>
              );
            })}
          </Scrollbars>
        </div>
      </div>
    </div>
  );
};

export default DetailDeliver;
