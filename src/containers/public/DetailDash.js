import React, { useRef, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import icons from "../../utils/icons";
import Scrollbars from "react-custom-scrollbars-2";
import path from "../../utils/path";
import { StateBox } from "../../components";
import { toast } from "react-toastify";

const DetailDash = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    MdRequestPage,
    SiCashapp,
    TbTruckDelivery,
    AiFillStar,
    AiOutlineDeliveredProcedure,
    IoLocationOutline,
    AiOutlineCheckCircle,
    BiPackage,
    GiConfirmed,
    VscChromeClose,
    VscCheck,
    TbTruckReturn,
  } = icons;
  const [stateOrder, setStateOrder] = useState(0);
  const [showStateBox, setShowStateBox] = useState(false);
  const thumbRef = useRef();
  const [timeOrder, setTimeOrder] = useState([
    {
      // time là lúc mới đặt hàng xong có trong bill
      time: "16:00 12/12/2023",
      state: "Đơn hàng đã đặt",
    },
  ]);
  const [confirm, setConfirm] = useState(false);
  const handleChangeState = (state) => {
    setShowStateBox(true);
    setStateOrder(state);
  };
  const stateString = {
    1: "Xác nhận đơn hàng",
    2: "Đóng gói đơn hàng",
    3: "Đã giao cho đơn vị vận chuyển",
    4: "Đang giao hàng",
    5: "Trả hàng",
    6: "Giao hàng thành công",
  };
  const handleConfirm = () => {
    // setConfirm(true);
    setStateOrder((pre) => pre);

    setShowStateBox(false);
    const flow = 100 - 25 * (stateOrder - 1);
    thumbRef.current.style.cssText = `right: ${flow}%`;
    // lấy ngày
    const now = new Date();
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    const formattedDate = new Intl.DateTimeFormat("vi", options).format(now);
    setTimeOrder((pre) => [
      ...pre,
      {
        time: formattedDate,
        state: stateString[stateOrder],
      },
    ]);
    // console.log(formattedDate)
    // lưu state UI
    // lưu state đơn hàng
    // set CSS
  };
  const handleDeny = () => {
    setStateOrder((pre) => {
      if (pre != 0) {
        return pre - 1;
      } else {
        return 0;
      }
    });
    setShowStateBox(false);
  };
  const [imageBox, setImageBox] = useState(false);
  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showboxProblem, setShowBoxProblem] = useState(false);
  const fileSelectedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setImage(URL.createObjectURL(event.target.files[0]));
  };
  const handleProblem = () => {
    setShowBoxProblem(true);
  };
  const handleSucess = () => {
    setImage("");
    setImageBox(true);
  };
  const fileUploadHandler = () => {
    // setSelectedFile(true);
    if (selectedFile) {
      setImageBox(false);
      setStateOrder(6);
    }
  };
  return (
    <Scrollbars style={{ width: "100%", height: 600 }}>
      <div className="m-auto w-full flex flex-col gap-8 text-[#622323] text-[18px] bg-main-100 relative">
        <div className="flex justify-end gap-5 p-4 border-b border-[#622323]">
          <h1>Mã đơn hàng: {id}</h1>
          <span>|</span>
          <h1>{stateOrder > 0 ? stateString[stateOrder] : "Chưa xác nhận"}</h1>
        </div>
        {showStateBox ? (
          <div className="fixed flex flex-col top-0 right-0 left-0 bottom-0 w-[40%] h-[180px] border shadow-lg m-auto mt-[250px] rounded-[20px] bg-main-200 animate-slide-right z-40">
            <div className="flex flex-col text-center gap-8 mt-5">
              <h1 className="text-[20px] font-semibold">
                Xác thực tiến trình: {stateString[stateOrder]}
              </h1>
              {}
              <div className="flex items-center justify-around">
                <div
                  onClick={(e) => handleConfirm()}
                  className="flex gap-1 text-green-600 cursor-pointer hover:shadow-lg px-2 py-1 rounded-md hover:text-[#fff] hover:bg-green-600"
                >
                  <VscCheck size={24} />
                  <span>Xác thực</span>
                </div>
                <div
                  onClick={(e) => handleDeny()}
                  className="flex gap-1 text-red-600 cursor-pointer hover:shadow-lg px-2 py-1 rounded-md hover:text-[#fff] hover:bg-red-600"
                >
                  <VscChromeClose size={24} />
                  <span>Hủy bỏ</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="flex justify-between text-gray-400 relative mx-[80px]">
          <div
            className={`border-4 hover:shadow-lg cursor-pointer rounded-full ${
              stateOrder > 0
                ? "border-green-500 text-green-500"
                : "border-gray-500"
            }  w-[80px] h-[80px] flex justify-center items-center bg-[#fff] z-10`}
          >
            <span
              className=""
              onClick={(e) => {
                if (stateOrder === 0) {
                  handleChangeState(1);
                } else {
                  toast.warn("Hãy xác nhận theo trình tự!");
                }
              }}
            >
              <MdRequestPage size={50} />
            </span>
          </div>
          <div
            className={`border-4 hover:shadow-lg cursor-pointer rounded-full ${
              stateOrder > 1
                ? "border-green-500 text-green-500"
                : "border-gray-500"
            }  w-[80px] h-[80px] flex justify-center items-center bg-[#fff] z-10`}
          >
            <span
              className=""
              onClick={(e) => {
                if (stateOrder === 1) {
                  handleChangeState(2);
                } else {
                  toast.warn("Hãy xác nhận theo trình tự!");
                }
              }}
            >
              <BiPackage size={50} />
            </span>
          </div>
          <div
            className={`border-4 hover:shadow-lg cursor-pointer rounded-full ${
              stateOrder > 2
                ? "border-green-500 text-green-500"
                : "border-gray-500"
            }  w-[80px] h-[80px] flex justify-center items-center bg-[#fff] z-10`}
          >
            <span
              className=""
              onClick={(e) => {
                if (stateOrder === 2) {
                  handleChangeState(3);
                } else {
                  toast.warn("Hãy xác nhận theo trình tự!");
                }
              }}
            >
              <AiOutlineDeliveredProcedure size={50} />
            </span>
          </div>
          <div
            className={`border-4 hover:shadow-lg cursor-pointer rounded-full ${
              stateOrder > 3
                ? "border-green-500 text-green-500"
                : "border-gray-500"
            } w-[80px] h-[80px] flex justify-center items-center bg-[#fff] z-10`}
          >
            <span
              className=""
              onClick={(e) => {
                if (stateOrder === 3) {
                  handleChangeState(4);
                } else {
                  toast.warn("Hãy xác nhận theo trình tự!");
                }
              }}
            >
              <TbTruckDelivery size={50} />
            </span>
          </div>
          <div
            className={`border-4 hover:shadow-lg cursor-pointer rounded-full ${
              stateOrder > 4 && stateOrder !== 6
                ? "border-green-500 text-green-500"
                : "border-gray-500"
            }  w-[80px] h-[80px] flex justify-center items-center z-10 bg-[#fff]`}
          >
            <span
              className=""
              onClick={(e) => {
                if (stateOrder === 4) {
                  handleChangeState(5);
                } else {
                  toast.warn("Hãy xác nhận theo trình tự!");
                }
              }}
            >
              <TbTruckReturn size={50} />
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
            <h1>Xác nhận đơn hàng</h1>
            {/* <span className="text-gray-400 text-[12px]">04:16 12/12/2023</span> */}
          </div>
          <div className="flex flex-col text-center w-[25%]">
            <h1>Đã gói đơn hàng</h1>
            {/* <span className="text-gray-400 text-[12px]">04:16 12/12/2023</span> */}
          </div>
          <div className="flex flex-col text-center w-[25%]">
            <h1>Đã giao cho đơn vị vận chuyển</h1>
            {/* <span className="text-gray-400 text-[12px]">04:16 12/12/2023</span> */}
          </div>
          <div className="flex flex-col text-center w-[25%]">
            <h1>Đang giao hàng</h1>
            {/* <span className="text-gray-400 text-[12px]">04:16 12/12/2023</span> */}
          </div>
          <div className="flex flex-col text-center w-[25%]">
            <h1>Trả hàng</h1>
            {/* <span className="text-gray-400 text-[12px]">04:16 12/12/2023</span> */}
          </div>
        </div>
        {imageBox ? (
          <div className="fixed flex flex-col top-0 right-0 left-0 bottom-0 w-[40%] h-[550px] border shadow-lg m-auto rounded-[20px] bg-main-200 animate-slide-right z-40">
            <div className="flex flex-col text-center gap-8 mt-5 items-center">
              <h1>Hãy chọn ảnh đã giao hàng cho khách thành công!!</h1>
              <input
                type="file"
                accept=".jpg,.png"
                onChange={(e) => fileSelectedHandler(e)}
              ></input>
              {image ? <img src={image} className="w-auto h-[300px]" /> : ""}
              {image ? (
                <div className="flex gap-10">
                  <button
                    onClick={fileUploadHandler}
                    className="border border-green-500 rounded-md px-2 py-1 hover:text-[#fff] hover:bg-green-500"
                  >
                    Xác nhận
                  </button>
                  <button
                    onClick={(e) => {
                      setImageBox(false);
                      setSelectedFile(null)
                      setStateOrder(4);
                    }}
                    className="border border-red-500 rounded-md px-2 py-1 hover:text-[#fff] hover:bg-red-500"
                  >
                    Hủy
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          ""
        )}

        {stateOrder === 4 ? (
          <div className="flex flex-col gap-4 text-center items-end">
            <button
              onClick={(e) => {
                handleSucess();
              }}
              className="border hover:shadow-lg bg-main-400 cursor-pointer text-[#fff] w-[30%] rounded-md py-1 px-2"
            >
              Đã giao hàng cho khách
            </button>
            <button
              onClick={(e) => {
                handleProblem();
              }}
              className="border hover:shadow-lg bg-main-100 cursor-pointer text-gray-400 w-[30%] rounded-md py-1 px-2"
            >
              Gặp vấn đề
            </button>
          </div>
        ) : (
          ""
        )}

        <div className="flex w-full text-center">
          <div className="flex w-[30%]">
            <div className="flex flex-col gap-4 w-full">
              <h1>Trạng thái đơn hàng</h1>
              {timeOrder.reverse().map((el, index) => (
                <div
                  key={index}
                  className="flex w-full text-[10px] items-center"
                >
                  <AiOutlineCheckCircle
                    className="w-[10%] text-green-500"
                    size={20}
                  />

                  <span className="w-[30%]">{el.time}</span>
                  <span className="w-[60%]">{el.state}</span>
                </div>
              ))}
              {/* <div className="flex w-full text-[10px] items-center">
                <AiOutlineCheckCircle
                  className="w-[10%] text-green-500"
                  size={20}
                />

                <span className="w-[30%]">16:00 12/12/2023</span>
                <span className="w-[60%]">Đơn hàng được giao thành công</span>
              </div> */}
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[65%]">
            <h1>Chi tiết đơn hàng</h1>
            <div className="w-[80%] h-[500px] m-auto border border-gray-500 bg-main-200 rounded-lg flex flex-col gap-1">
              <div className="flex w-full gap-5">
                <label className="w-[50%] text-right">Tên sản phẩm: </label>
                <span className="w-[50%] text-left">Túi handmade</span>
              </div>
              <div className="flex w-full gap-5">
                <label className="w-[50%] text-right">
                  Số lượng x Đơn giá:{" "}
                </label>
                <span className="w-[50%] text-left">1 x 1 000 000 vnđ</span>
              </div>
              <div className="flex w-full gap-5">
                <label className="w-[50%] text-right">
                  Địa chỉ người nhận:{" "}
                </label>
                <span className="w-[50%] text-left">
                  Hoàng Quốc Việt, Hà Nội
                </span>
              </div>
              <div className="flex w-full gap-5">
                <label className="w-[50%] text-right">Số điện thoại: </label>
                <span className="w-[50%] text-left">09582628xx</span>
              </div>
              <div className="flex w-full gap-5">
                <label className="w-[50%] text-right">Thời gian đặt: </label>
                <span className="w-[50%] text-left">Túi handmade</span>
              </div>
              <span>Xác nhận ảnh giao hàng thành công</span>
              {/* "https://th.bing.com/th/id/OIP.FjLkalx51D8xJcpixUGJywHaE8?pid=ImgDet&rs=1" */}
              <img
                src={
                  selectedFile
                    ? `${process.env.PUBLIC_URL}/${selectedFile.name}`
                    : "https://th.bing.com/th/id/OIP.FjLkalx51D8xJcpixUGJywHaE8?pid=ImgDet&rs=1"
                }
                alt="ảnh khi giao hàng thành công"
                className="w-auto h-[300px] m-auto"
              ></img>
            </div>
          </div>
        </div>

        <div className="w-full border-separate border-b-2 border-gray-500"></div>
        <div className="flex justify-end">
          <h1 className="text-[16px] text-gray-600">Giao hàng bởi</h1>
        </div>
      </div>
    </Scrollbars>
  );
};

export default DetailDash;
